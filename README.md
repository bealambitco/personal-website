# bealambitco.com

Bea Lambitco's personal site: photo, bio, achievements, timeline, featured
outputs, technical work, and (over time) a writing hub organized by topic.
This README explains what the project is, how it's put together, and how to
keep changing it yourself.

## What this is, and why it's built this way

The brief was a Karpathy/Bryllim-style personal site — simple, fast, easy to
navigate, on-brand, and something you can keep editing for years without
needing a developer. Two real sites were checked as reference points:

- **karpathy.ai** is, by the author's own description on the page, "pure
  HTML and CSS in two static files" — zero frameworks.
- **bryllim.com** runs on something like Next.js — it has live/dynamic
  features (a real-time viewer count, `⌘K` command menu) that need a JS
  framework to work.

This site sits between the two. It's built with **Astro**, which compiles
down to the same kind of flat, static HTML/CSS Karpathy's site is — no
client-side JavaScript framework ships to the browser, so it's just as fast.
The difference from raw hand-written HTML is reuse: a page layout (like the
per-topic page) is defined once and reused for all 9 topics and every future
article, instead of copy-pasting and hand-editing near-identical HTML files
each time. That trade-off is what makes a growing multi-page hub
maintainable without turning into a mess of duplicated markup.

**No database, no CMS, no admin panel.** Content lives in plain files in
this repo. Editing the site means editing files and pushing — there's
nothing else to log into.

## Information architecture

- **Homepage** (`/`) is intentionally short and doesn't grow over time: photo
  + name + bio + credentials + achievement stats (all merged into one
  compact block), Timeline, Featured, Technical Work, Latest Articles,
  Contact.
- **Writing** lives outside the homepage so it can grow indefinitely without
  lengthening the scroll: a "Writing" dropdown in the nav lists all 9 topics
  directly, plus a link to `/topics` (an overview page of all of them). Each
  topic has its own page at `/topics/<id>` listing matching articles (or a
  fallback pointing at LinkedIn until there are any). Individual articles
  live at `/writing/<slug>`.
- **Resources** similarly lives on its own page (`/resources`), off the
  homepage, for the same reason — it can grow without affecting the
  homepage's length.

## Content pillars

The 9 topics under Writing (`src/data/pillars.ts`): AI, Data, Risk, PH
Finance, Tools & Tutorials, Math, Career, Life, Wellness. Add, remove, or
rename these freely — see "Adding a new topic" below.

## Running it locally

```bash
npm install     # first time only
npm run dev     # http://localhost:4321, auto-reloads on save
```

```bash
npm run build   # produces the deployable site in dist/
npm run preview # serves the dist/ build locally, to sanity-check before deploying
```

## Where to edit things

Everything you're likely to change regularly lives in `src/data/*.ts` — plain
arrays/objects, no Astro or HTML knowledge required:

| File | Controls |
|---|---|
| `src/data/profile.ts` | Name, title, tagline, bio paragraph, credentials, achievement stats, photo |
| `src/data/timeline.ts` | The Timeline section |
| `src/data/featured.ts` | Featured section — talks, articles, videos, press (external links) |
| `src/data/projects.ts` | Technical Work section — your code/repos |
| `src/data/pillars.ts` | The 9 topic tags under Writing |
| `src/data/resources.ts` | The Resources page, grouped by category |
| `src/data/socials.ts` | Email, LinkedIn, GitHub, booking link, footer/contact links |

Adding an entry is copy-pasting one object in the array and changing the
text — no other file needs to change.

**Your photo**: drop the image in `public/` (e.g. `public/photo.jpg`) and
update the `photo` path in `src/data/profile.ts`. It's currently a
placeholder monogram (`public/photo.svg`).

**Colors/fonts**: everything comes from `src/styles/tokens.css`, matching
the brand board (Royal Amethyst, Warm Gold, Signature Orange, Lavender Mist,
Inter + JetBrains Mono). Both a light and dark theme are defined — change a
color once there and it updates everywhere, in both themes.

## Embedding a YouTube video or another website

`featured.ts` and `projects.ts` entries accept an optional `embedUrl`. When
set, it renders an inline `<iframe>` preview above the card instead of just
a text link:

```ts
{
  kind: "Video",
  title: "My talk on AI in finance",
  description: "...",
  href: "https://www.youtube.com/watch?v=VIDEO_ID",   // the normal link
  embedUrl: "https://www.youtube.com/embed/VIDEO_ID",  // note: /embed/, not /watch
}
```

Any iframe-able URL works this way, not just YouTube (e.g. a live demo
site). There's a working example (with a placeholder video ID) already in
`src/data/featured.ts` — replace or delete it.

Inside an article's Markdown body (`src/content/posts/*.md`), you can also
just paste a raw `<iframe>` tag directly — Astro's Markdown renders raw HTML
as-is, no special syntax needed.

## Writing an article

1. Copy `src/content/posts/_template.md` to a new file, e.g.
   `src/content/posts/2026-03-01-ai-in-finance.md`.
2. Fill in the frontmatter (`title`, `description`, `pillar`, `date`) and
   set `draft: false`.
3. Write the article in Markdown below it.

It automatically appears on `/topics/<pillar>`, in the homepage's Latest
Articles (if recent), and gets its own page at `/writing/<filename>`. No
template edits, nothing to register elsewhere.

## Adding a new topic/pillar

Add one object to the array in `src/data/pillars.ts`:

```ts
{ id: "my-new-topic", label: "My New Topic", description: "One line." }
```

Its page (`/topics/my-new-topic`) and its entry in the nav dropdown and
`/topics` overview are generated automatically.

## Project structure

```
src/
  data/            content you edit often (see table above)
  content/posts/   your Markdown articles
  components/      Hero, Timeline, Featured, TechnicalWork, LatestArticles,
                    Contact, Nav, Footer, CardList (shared link-card renderer)
  layouts/         BaseLayout.astro — <head>, Nav, Footer wrapper every page uses
  pages/           index.astro (home), topics/index.astro (all topics),
                    topics/[slug].astro (one topic), writing/[slug].astro
                    (one article), resources.astro
  styles/          tokens.css (brand colors/fonts), global.css (base styles)
public/            static files served as-is (favicon, photo)
```

## Deploying (Vercel + GitHub)

The site is fully static, so hosting is simple and free:

1. This repo pushes to a **private GitHub repository**.
2. On [vercel.com](https://vercel.com) → **Add New Project** → import the
   GitHub repo. Vercel auto-detects Astro (build command `astro build`,
   output `dist`) — no configuration needed.
3. Deploy. Every future `git push` to the main branch redeploys
   automatically, usually live within a minute.
4. **Custom domain**: buy `bealambitco.com` (or similar) from any registrar
   — Namecheap, Cloudflare, or Vercel's own registrar all work. In Vercel:
   **Project Settings → Domains** → add it and follow the DNS instructions.
5. Once you have a real domain, update `site` in `astro.config.mjs` to match
   (used for the sitemap and social preview links).

**Cost**: Vercel's free (Hobby) tier fully covers a personal site like this
— no reason to pay for hosting. The only likely cost is the domain name
itself, roughly $10–15/year from a registrar.

## Ongoing maintenance

- **Content changes** (new timeline entry, new article, new link): edit the
  file, commit, push. Vercel rebuilds and redeploys automatically.
- **Dependency updates**: run `npm outdated` occasionally, `npm update` for
  patch/minor updates. This project has very few dependencies and no
  runtime server, so there's no urgent security surface — update when
  convenient.
- **No server to babysit**: no database, no uptime to monitor, no backend to
  patch. If `npm run build` succeeds, the site works.
