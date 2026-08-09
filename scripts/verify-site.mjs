import { readFile, readdir } from "node:fs/promises";
import { dirname, join, relative, resolve, sep } from "node:path";

const root = new URL("../", import.meta.url).pathname;
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

for (const [href, label] of [
  ["https://hub.bealambitco.com", "Explore consulting"],
  ["https://research.bealambitco.com", "Research"],
  ["https://library.bealambitco.com", "Library"],
]) {
  if (!new RegExp(`<a\\b[^>]*href="${href}"[^>]*>${label}<\\/a>`).test(homepage)) {
    failures.push(`index.html: missing ecosystem link ${label} (${href})`);
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

const sitemap = await readFile(join(dist, "sitemap-0.xml"), "utf8");
const forbiddenSitemapUrls = ["/resources/", "/topics/", "/writing/", "/tags/"];
for (const url of forbiddenSitemapUrls) {
  if (sitemap.includes(`https://bealambitco.com${url}`)) failures.push(`sitemap: contains thin route ${url}`);
}

if (/example content, generated as a starting point/i.test(homepage)) {
  failures.push("index.html: draft/example content leaked into production");
}

if (failures.length > 0) {
  console.error(`Site verification failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}

console.log(`Site verification passed for ${htmlFiles.length} HTML pages.`);
