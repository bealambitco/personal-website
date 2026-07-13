# bealambitco.com

Bea Lambitco's personal site: photo, bio, achievements, timeline, featured
outputs, experience, volunteer work, and a writing/resources hub organized
by topic. This README explains what the project is, how it's put together,
how to keep changing it, and what's been checked/fixed along the way.

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
client-side JavaScript framework ships to the browser. The one place this
site does use hand-written JavaScript is the filter/sort controls (Featured,
Experience, All Articles) — a small, plain `<script>` with no build step or
library, kept deliberately simple so it's easy to read and change.

**No database, no CMS, no admin panel.** Content lives in plain files in
this repo. Editing the site means editing files and pushing.

## Information architecture

- **Homepage** (`/`) stays short on purpose: photo + bio + credentials +
  achievement stats (one compact block), Timeline, Featured, Experience,
  Volunteer Work, Latest Articles, Contact.
- **Writing** lives outside the homepage so it can grow indefinitely: a
  "Writing" dropdown in the nav is a mega-menu — quick links (Latest / All
  topics / All articles) plus all 9 topics in 3 columns (Technical /
  Industry / Life, see "Content pillars" below). Each topic has its own page
  at `/topics/<id>`; `/topics` is the overview of all of them; `/writing` is
  every article across all topics, filterable by year and sortable; each
  article lives at `/writing/<slug>`.
- **Resources** follows the exact same pattern: a "Resources" nav dropdown
  (same 3 columns, linking to anchors on the page instead of separate
  pages), and `/resources` itself lays them out in 3 columns by group.
  Off the homepage, so it can grow without affecting the homepage's length.
- **Experience** (talks aside — see "Featured" below) covers projects,
  teaching, leadership roles, and trainings delivered — broader than just
  code. See "Naming: Experience vs. Technical Work" below for why.

## Content pillars

The 9 topics under Writing and Resources (`src/data/pillars.ts`), each
tagged with a `group` used for the 3-column layout:

- **Technical** — AI, Data, Risk, Math, Tools & Tutorials
- **Industry** — PH Finance
- **Life** — Career, Life, Wellness

Add a pillar by adding one object to `pillars.ts` with an id, label,
description, and group — it automatically appears in both mega-menus, the
`/topics` overview, and (once you tag content with it) `/topics/<id>` and
`/resources`.

## Naming: "Experience" vs. "Technical Work"

The original build had a "Technical Work" section for code/repos. You asked
whether to expand it to cover teaching, leadership roles, and trainings too,
and what to call it — my call: **rename it to "Experience."** Reasoning:
"Technical Work" stops being an accurate label once it includes teaching
and leadership, which aren't technical in nature. "Experience" covers all
of it without implying a category it doesn't fit. Volunteer Work stays
separate (unpaid community work is a different kind of entry than paid
roles/projects), and Featured stays separate too (that's external
recognition — talks, press, media about you — not roles you held).

## Filtering and sorting (Featured / Experience / All Articles)

These three lists share one component, `FilterableList.astro`:

- **Year filter**: pill buttons for each year present in the data (only
  shown if there's more than one year).
- **View toggle**: "By category" (grouped by `kind` — e.g. all "Talk"
  entries together, so having three talks or three videos under one
  heading is expected, not a special case) vs. "Newest first" / "Oldest
  first" (one flat chronological list).

To make an item filterable/sortable correctly, set both `date` (the display
text, e.g. `"2025"`) and `year` (the number used for filtering/sorting,
e.g. `2025`) on it. `/writing` reuses this same component by treating each
article's pillar as its "kind," so articles group by topic the same way
Featured groups by talk/video/article.

## Embedding a YouTube video or another website

`featured.ts` and `experience.ts` entries accept an optional `embedUrl`.
When set, it renders an inline `<iframe>` preview above the card:

```ts
{
  kind: "Video",
  title: "My talk on AI in finance",
  description: "...",
  href: "https://www.youtube.com/watch?v=VIDEO_ID",   // the normal link
  embedUrl: "https://www.youtube.com/embed/VIDEO_ID",  // note: /embed/, not /watch
  year: 2026,
}
```

Any iframe-able URL works this way, not just YouTube. There's a working
example (placeholder video ID) in `src/data/featured.ts`.

Inside an article's Markdown body, you can also just paste a raw `<iframe>`
tag directly — Astro renders raw HTML in Markdown as-is.

## Color system, and what changed

Tokens live in `src/styles/tokens.css`, matching the brand board (Royal
Amethyst, Electric Orchid, Warm Gold, Signature Orange, Lavender Mist).
Both light and dark themes are defined from the same token names.

**Two contrast issues were found and fixed during review:**

1. Electric Orchid was the default color for every text link and section
   label ("eyebrow"). On the light background that's roughly 4:1 contrast —
   under the 4.5:1 guideline for normal-size text. Royal Amethyst clears it
   comfortably (~11:1) while staying in the same violet family, so it's now
   the resting-state color for links/eyebrows; Orchid still shows up on
   hover, matching its brand-board role ("links, highlights, bright
   accents") without sitting at borderline contrast all the time.
2. The gold credential chips had a similar issue — deepened further (now
   `#7c5e1a` in light mode) for a "Refined Gold" that's easier to read at
   small sizes, per the brand board's own naming for a deepened gold.

Orange stays exactly where the brand board says it should: only on the
achievement stat numbers, never as a background, still the rarest color on
the page.

## Example/dummy content — replace before you ship

To make the filtering, grouping, and 3-column layouts demonstrable, this
build includes placeholder content. Search for `TODO` across `src/data/*.ts`
and delete/replace:

- 6 example articles in `src/content/posts/` (all start with `_This is
  example content_`) — delete the files or overwrite them with real posts.
- Example entries in `featured.ts`, `experience.ts`, `volunteer.ts`,
  `resources.ts` — replace with your real talks/projects/links.
- Exact years in `timeline.ts` are marked `TODO`.
- Confirm which email you want published in `profile.ts`.
- Real URLs for GitHub and Calendly (or equivalent) in `socials.ts`.

## Running it locally

```bash
npm install     # first time only
npm run dev     # http://localhost:4321, auto-reloads on save
```

```bash
npm run check   # type-checks the whole project (astro check)
npm run build   # produces the deployable site in dist/
npm run preview # serves the dist/ build locally, to sanity-check before deploying
```

## Where to edit things

| File | Controls |
|---|---|
| `src/data/profile.ts` | Name, title, tagline, bio paragraph, credentials, achievement stats, photo |
| `src/data/timeline.ts` | The Timeline section |
| `src/data/featured.ts` | Featured — talks, articles, videos, press (external links) |
| `src/data/experience.ts` | Experience — projects, teaching, leadership, training |
| `src/data/volunteer.ts` | Volunteer Work |
| `src/data/pillars.ts` | The 9 topics + their group (Technical/Industry/Life) |
| `src/data/resources.ts` | Resources, each tagged with a pillar |
| `src/data/socials.ts` | Email, LinkedIn, GitHub, booking link |
| `src/data/link-item.ts` | The shared shape all the lists above use — rarely needs editing |

**Your photo**: drop the image in `public/` and update `photo` in
`src/data/profile.ts`. It's currently a placeholder monogram.

## Writing an article

1. Copy `src/content/posts/_template.md` to a new file.
2. Fill in the frontmatter (`title`, `description`, `pillar`, `date`) and
   set `draft: false`.
3. Write the article in Markdown.

It automatically appears on `/topics/<pillar>`, `/writing`, and (if recent)
the homepage's Latest Articles — no other file needs to change.

## Adding a new topic/pillar

Add one object to `src/data/pillars.ts`, including which of the 3 groups it
belongs to:

```ts
{ id: "my-topic", label: "My Topic", description: "One line.", group: "Technical" }
```

Its page, its nav mega-menu entry (both Writing and Resources), and its
`/topics` overview tile are all generated automatically.

## Project structure

```
src/
  data/            content you edit often (see table above)
  content/posts/   your Markdown articles
  components/      Hero, Timeline, Featured, Experience, VolunteerWork,
                    LatestArticles, Contact, Nav, MegaMenu, Footer,
                    FilterableList (year filter + sort), CardList (renders
                    one list of link cards, used by everything above)
  layouts/         BaseLayout.astro — <head>, Nav, Footer wrapper every page uses
  pages/           index.astro (home), topics/index.astro (all topics),
                    topics/[slug].astro (one topic), writing/index.astro
                    (all articles), writing/[slug].astro (one article),
                    resources.astro
  styles/          tokens.css (brand colors/fonts), global.css (base styles)
public/            static files served as-is (favicon, photo)
```

## QA history

- **Accessibility**: every page except the homepage originally had zero
  `<h1>` elements (page titles were styled `<span>`s), and homepage sections
  had no navigable headings. Fixed — every page now has exactly one `<h1>`,
  homepage sections are `<h2>`, with no level skipped.
- **Contrast**: see "Color system" above.
- **Nav dropdown bug**: pairing `overflow-x: auto` with `overflow-y: visible`
  on the nav's link row silently forced the y-axis to clip too (a real CSS
  spec quirk), hiding the dropdown panel. Fixed by switching the nav to wrap
  instead of scroll.
- Verified via: `astro check` (0 errors), a full build, a static link-crawl
  of the built HTML (no broken internal links/assets), and live browser
  testing of every page, the mega-menus, the filter/sort controls, dark
  mode, and mobile widths.

## Deploying (Vercel + GitHub)

The site is fully static, so hosting is simple and free:

1. This repo pushes to a **private GitHub repository**.
2. On [vercel.com](https://vercel.com) → **Add New Project** → import the
   GitHub repo. Vercel auto-detects Astro (build command `astro build`,
   output `dist`) — no configuration needed.
3. Deploy. Every future `git push` to the main branch redeploys
   automatically, usually live within a minute.
4. **Custom domain**: buy `bealambitco.com` (or similar) from any registrar
   and add it under **Project Settings → Domains** in Vercel, following its
   DNS instructions.
5. Once you have a real domain, update `site` in `astro.config.mjs` to
   match (used for the sitemap and social preview links).

**Cost**: Vercel's free (Hobby) tier fully covers a personal site like this
— no reason to pay for hosting. The only likely cost is the domain name
itself, roughly $10–15/year.

## Ongoing maintenance

- **Content changes**: edit the file, commit, push. Vercel rebuilds and
  redeploys automatically.
- **Dependency updates**: run `npm outdated` occasionally, `npm update` for
  patch/minor updates. Very few dependencies, no runtime server — update
  when convenient, not on a schedule.
- **No server to babysit**: no database, no uptime to monitor. If
  `npm run build` succeeds, the site works.
