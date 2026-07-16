# bealambitco.com

The personal site of Bea Lambitco — Data & AI consultant, trainer, speaker.
Bio, timeline, talks, projects, and a growing writing hub organized by topic
(AI, Data, Risk, AI in Finance, and more).

**Live:** [bealambitco.com](https://bealambitco.com)

## What this is

A fast, unpretentious personal site with enough structure to hold a growing
archive of writing, without the overhead of a full web app.

It's built with [Astro](https://astro.build), which compiles down to flat,
static HTML/CSS — no JavaScript framework ships to the browser. The one
deliberate exception is a small, framework-free `<script>` tag that powers
filtering/sorting on the writing archive — plain JavaScript, no build step,
no dependency.

No database, no CMS, no admin panel. All content lives in plain text/markdown
files in this repo.

## Built with

- **[Astro](https://astro.build)** — static site generation, zero client-side
  JS by default
- **Content collections** for the writing archive — each article is a
  Markdown file with frontmatter (title, topic, date)
- **[Inter](https://rsms.me/inter/)** + **[JetBrains Mono](https://www.jetbrains.com/lp/mono/)**,
  self-hosted (no font CDN request)
- Deployed on **[Vercel](https://vercel.com)**, redeploying automatically on
  every push to `main`, with **Vercel Web Analytics** for privacy-friendly
  traffic stats

## Features

- Fully responsive, light/dark themed, no client-side framework
- A writing hub organized by topic, with a nav mega-menu, per-topic pages, an
  all-articles view that's filterable by year and sortable, and per-tag pages
  (`/tags/<tag>`) generated from article frontmatter
- Talks/press/projects sections that group by category and support inline
  video embeds
- Resources page sharing the same topic taxonomy as the writing hub — each
  topic declares whether it appears in Writing, Resources, or both
- Sitemap + `robots.txt` + Open Graph/Twitter card images + JSON-LD
  structured data + RSS feed (`/rss.xml`) out of the box, and security
  headers (CSP and friends) via `vercel.json`
- Link cards fetch their own preview thumbnail automatically at build time
  (the same `og:image` you'd see pasting a link into Slack) — no manual
  screenshotting needed

## Running it locally

```bash
npm install
npm run dev      # http://localhost:4321, auto-reloads on save
```

```bash
npm run check    # type-check the whole project
npm run build    # production build, output in dist/
npm run preview  # serve that build locally
```

## Content workflow

Everything editorial lives in `src/data/*.ts` (profile, timeline, featured
talks/press, experience, volunteer work, resources, topics, social links) —
plain arrays of objects, no Astro/TypeScript knowledge required to edit them.

**Adding an article**: copy `src/content/posts/_template.md`, fill in the
frontmatter (title, topic, date, optional tags), write it in Markdown, set
`draft: false`. It shows up on its topic page, the all-articles view, the
RSS feed, and any `/tags/<tag>` pages automatically.

**Adding a new topic**: add one object to `src/data/pillars.ts` — its page
and its spot in the nav menus are generated from that one entry (the
`sections` field controls whether it appears under Writing, Resources, or
both).

**No pull request needed for day-to-day changes.** This is a single-owner
repo, so pushing straight to `main` is completely normal, and Vercel
redeploys automatically either way. Two ways to make a change:

- Edit locally and `git push` — live in about a minute.
- Skip git entirely: use GitHub's own web editor (the pencil icon on any file,
  or "Add file" for a new one) to commit straight from the browser — same
  auto-deploy, no terminal needed.

A pull request is only useful as an optional safety net: opening one gives a
Vercel *preview* deployment (a throwaway URL) to check a change before it
goes live — worth using for something you want to double-check, not required
otherwise.

## Deploying

1. Push to a GitHub repo.
2. On [vercel.com/new](https://vercel.com/new), import the repo — Vercel
   auto-detects Astro (build command `astro build`, output `dist`), no
   configuration needed.
3. Deploy. Every future push to `main` redeploys automatically.
4. Custom domain: **Project Settings → Domains** in Vercel, then update
   `site` in `astro.config.mjs` to match (used for the sitemap and social
   preview links).

Vercel's free tier fully covers a site like this — the only real cost is the
domain name itself.

---

© Bea Lambitco. Built with [Astro](https://astro.build).
