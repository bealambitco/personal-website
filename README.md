# bealambitco.com

Bea Lambitco's personal site — bio, timeline, talks, projects, and a growing
writing hub organized by topic (AI, Data, Risk, PH Finance, and more).

**Live:** [bealambitco.com](https://bealambitco.com)

## What this is

The brief behind this site was simple: something as fast and unpretentious as
[karpathy.ai](https://karpathy.ai) (which is, by its own description, "pure
HTML and CSS, zero frameworks"), with a bit more structure to hold a growing
archive of writing — closer to what a site like
[bryllim.com](https://bryllim.com) offers, without the overhead of the
dynamic, app-like features that come with it.

It's built with [Astro](https://astro.build), which compiles down to the same
kind of flat, static HTML/CSS a hand-written site produces — no JavaScript
framework ships to the browser. The one deliberate exception is a handful of
small, framework-free `<script>` tags (filtering/sorting the writing archive,
a scroll-reveal effect) — plain JavaScript, no build step, no dependency.

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
  every push to `main`

## Features

- Fully responsive, light/dark themed, no client-side framework
- A writing hub organized by topic, with a nav mega-menu, per-topic pages, and
  an all-articles view that's filterable by year and sortable
- Talks/press/projects sections that group by category and support inline
  video embeds
- Resources page organized the same way as the writing hub, so both grow
  together as more gets added

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

Everything editorial lives in `src/data/*.ts` (profile, timeline, talks,
projects, resources, topics) — plain arrays of objects, no Astro/TypeScript
knowledge required to edit them.

**Adding an article**: copy `src/content/posts/_template.md`, fill in the
frontmatter (title, topic, date), write it in Markdown, set `draft: false`.
It shows up on its topic page and the all-articles view automatically.

**Adding a new topic**: add one object to `src/data/pillars.ts` — its page
and its spot in both nav menus are generated from that one entry.

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
