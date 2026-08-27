import { readFile, readdir } from "node:fs/promises";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { ecosystemLinks } from "../src/data/ecosystem.ts";

// fileURLToPath (not .pathname) so paths containing spaces or a Windows
// drive letter resolve correctly.
const root = fileURLToPath(new URL("../", import.meta.url));

// Network checks are opt-in so the suite still runs offline; CI passes it.
const checkLinks = process.argv.includes("--check-links");
const dist = join(root, "dist");

async function listHtml(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await listHtml(path)));
    if (entry.isFile() && entry.name.endsWith(".html")) files.push(path);
  }
  return files;
}

function count(source, pattern) {
  return source.match(pattern)?.length ?? 0;
}

const htmlFiles = await listHtml(dist);
const failures = [];
const htmlByPath = new Map();

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const page = relative(dist, file).split(sep).join("/");
  htmlByPath.set(`/${page === "index.html" ? "" : page.replace(/index\.html$/, "")}`, { file, html, page });

  if (count(html, /<h1(?:\s|>)/g) !== 1) failures.push(`${page}: expected exactly one h1`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) failures.push(`${page}: missing meta description`);
  if (!/<meta name="robots" content="(?:index|noindex),follow"/.test(html)) failures.push(`${page}: missing robots policy`);
  if (!/<link rel="canonical" href="https:\/\/bealambitco\.com\//.test(html)) failures.push(`${page}: missing canonical`);
  if (/(?:src|href)="http:\/\//.test(html)) failures.push(`${page}: insecure asset or link URL`);
}

for (const { file, html, page } of htmlByPath.values()) {
  for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const href = match[1];
    if (/^(?:https?:|mailto:|tel:|#)/.test(href)) continue;

    const [rawPath, hash] = href.split("#");
    const resolvedPath = rawPath.startsWith("/")
      ? rawPath
      : `/${relative(dist, resolve(dirname(file), rawPath)).split(sep).join("/")}`;
    const normalizedPath = resolvedPath.endsWith(".html")
      ? resolvedPath.replace(/index\.html$/, "").replace(/\.html$/, "/")
      : `${resolvedPath.replace(/\/$/, "")}/`;
    const target = htmlByPath.get(normalizedPath);

    if (!target) {
      failures.push(`${page}: broken internal link ${href}`);
      continue;
    }

    if (hash && !target.html.includes(`id="${hash}"`)) {
      failures.push(`${page}: missing anchor target ${href}`);
    }
  }
}

const homepage = await readFile(join(dist, "index.html"), "utf8");
for (const required of ['"@type":"WebSite"', '"@type":"Person"', 'property="og:site_name"', ">Bea Lambitco</h1>"]) {
  if (!homepage.includes(required)) failures.push(`index.html: missing ${required}`);
}

// Ecosystem destinations are gated on `status` in src/data/ecosystem.ts.
// The previous version of this check only asserted the anchors were PRESENT,
// which is why three dead destinations passed CI. A "live" entry must render
// as a real anchor AND (with --check-links) actually answer 200; a
// "comingSoon" entry must not be linked anywhere in the built output.
const allHtml = [...htmlByPath.values()].map((entry) => entry.html).join("\n");
for (const link of ecosystemLinks) {
  const anchor = new RegExp(`<a\\b[^>]*href="${link.href}"`);
  if (link.status === "live") {
    if (!anchor.test(allHtml)) failures.push(`ecosystem: "${link.label}" is live but never linked`);
  } else if (link.status === "comingSoon") {
    if (anchor.test(allHtml)) {
      failures.push(`ecosystem: "${link.label}" is comingSoon but rendered as a link (${link.href})`);
    }
  }
}

if (checkLinks) {
  for (const link of ecosystemLinks.filter((l) => l.status === "live")) {
    let status = 0;
    try {
      status = (await fetch(link.href, { redirect: "follow", signal: AbortSignal.timeout(15000) })).status;
    } catch (error) {
      failures.push(`ecosystem: "${link.label}" (${link.href}) is unreachable — ${error.message}`);
      continue;
    }
    if (status !== 200) failures.push(`ecosystem: "${link.label}" (${link.href}) returned ${status}, expected 200`);
  }
}

// A Canva /edit URL published on a public page is view-only purely by share
// setting — one toggle away from granting write access. Only /view links ship.
for (const { html, page } of htmlByPath.values()) {
  for (const match of html.matchAll(/https:\/\/(?:www\.)?canva\.(?:com|link)\/[^"']*/g)) {
    const url = match[0];
    if (/\/edit(?:[?#]|$)/.test(url)) failures.push(`${page}: Canva /edit URL published (${url}) — use a /view link`);
    else if (/canva\.link\//.test(url)) failures.push(`${page}: Canva shortlink ${url} may redirect to /edit — inline the /view URL`);
  }
}

for (const required of ['id="services"', 'id="featured"']) {
  if (!homepage.includes(required)) failures.push(`index.html: missing ecosystem requirement ${required}`);
}

const primaryNavigation = homepage.match(/<nav class="nav-links"[^>]*>([\s\S]*?)<\/nav>/)?.[1] ?? "";
for (const removedLabel of ["Services", "Featured", "Resources"]) {
  if (new RegExp(`>${removedLabel}<\\/a>`).test(primaryNavigation)) {
    failures.push(`index.html: ${removedLabel} should not be a primary navigation link`);
  }
}

const noindexPages = [
  "resources/index.html",
  "topics/index.html",
  "topics/data/index.html",
  "writing/index.html",
];
for (const page of noindexPages) {
  const html = await readFile(join(dist, page), "utf8");
  if (!html.includes('name="robots" content="noindex,follow"')) failures.push(`${page}: should be noindex,follow`);
}

const notFound = await readFile(join(dist, "404.html"), "utf8").catch(() => null);
if (notFound === null) failures.push("404.html: missing custom 404 page");
else if (!notFound.includes('name="robots" content="noindex,follow"')) {
  failures.push("404.html: should be noindex,follow");
}

const sitemap = await readFile(join(dist, "sitemap-0.xml"), "utf8");
const forbiddenSitemapUrls = ["/resources/", "/topics/", "/writing/", "/tags/"];
for (const url of forbiddenSitemapUrls) {
  if (sitemap.includes(`https://bealambitco.com${url}`)) failures.push(`sitemap: contains thin route ${url}`);
}

// Previously scanned only index.html — the one page that can never contain
// it. Scan every built page instead.
for (const { html, page } of htmlByPath.values()) {
  if (/example content, generated as a starting point/i.test(html)) {
    failures.push(`${page}: draft/example content leaked into production`);
  }
}

if (failures.length > 0) {
  console.error(`Site verification failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}

console.log(`Site verification passed for ${htmlFiles.length} HTML pages.`);
