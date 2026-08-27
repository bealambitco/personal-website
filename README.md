# Bea Lambitco — Professional Website

This repository powers [bealambitco.com](https://bealambitco.com), my professional home for Data & AI consulting, corporate training, speaking, selected work, and writing.

The site is intentionally straightforward: it should be quick to read, easy to maintain, and credible to the organizations and communities I work with.

## What is on the site

- A concise introduction to my work in Data & AI, financial services, and education
- Consulting, training, and speaking services
- Selected projects, press, events, credentials, and professional experience
- Volunteer and community work
- A writing and resources structure that can grow as original material is published
- A direct professional inquiry path

## Technology

The site uses [Astro](https://astro.build) and TypeScript to generate static HTML. Content is stored in TypeScript and Markdown files—there is no database, CMS, authentication layer, or server-side application.

Inter and JetBrains Mono are bundled with the site rather than loaded from a font CDN. The production site is deployed on Vercel and uses Vercel Web Analytics.

This architecture keeps the public attack surface and browser-side JavaScript small while leaving room for interactive components if they become genuinely useful later.

## Run it locally

Requirements: Node.js 22 and npm.

```bash
npm ci
npm run dev
```

Astro will print the local URL, usually `http://localhost:4321`.

Before opening a pull request:

```bash
npm run check
npm run build
npm run test:site
npm audit
```

The site-verification script checks generated metadata, canonicals, robots directives, sitemap
membership, heading structure, structured data, insecure URLs, draft-content leakage, the custom
404 page, and Canva share-link hygiene. It also enforces the ecosystem release gate: a destination
marked `live` in `src/data/ecosystem.ts` must actually be linked, and with `--check-links` (which
CI passes) must return HTTP 200. Destinations marked `comingSoon` must not render as links.

## Publishing workflow

1. Create a feature branch.
2. Make and review the change locally.
3. Open a pull request.
4. Check the Vercel Preview deployment and required GitHub checks.
5. Merge into `main` when the preview is correct. Vercel then deploys production.

Work lands on the long-lived `dev` branch first, which is where preview builds are reviewed;
`main` is production and is only ever updated by merging a pull request from `dev`. Every pull
request also receives its own isolated preview URL.

## Content model

- `src/data/profile.ts` — name, positioning, public email, credentials, and proof points
- `src/data/services.ts` — consulting, training, and speaking services
- `src/data/*.ts` — experience, timeline, featured work, volunteer work, resources, and social links
- `src/content/posts/*.md` — article drafts and published writing
- `src/data/pillars.ts` — the shared writing and resources taxonomy
- `src/data/ecosystem.ts` — the other bealambitco properties and their release status
- `src/assets/` — photos, badges, and preview images, compressed and resized at build time

Articles remain private to the build while `draft: true`. Only original, reviewed work should be published under Bea's name.

See [Content and editing guide](docs/content-guide.md) for everyday updates and [Architecture and operations](docs/architecture.md) for technical details.

## Search policy

The homepage and substantive original articles are eligible for search indexing. Topic, tag, writing-index, and resources pages remain useful navigation pages, but they use `noindex,follow` and are excluded from the sitemap while they are thin archives.

This keeps branded search focused on Bea Lambitco without preventing search engines from discovering future article links.

## Repository guides

- [Content and editing guide](docs/content-guide.md)
- [Architecture and operations](docs/architecture.md)
- [Current implementation brief](docs/implementation-brief.md)
- [Deferred backlog](docs/backlog.md)

## License

Code is MIT; written content, imagery, and personal branding are all rights reserved.
See [LICENSE](LICENSE). Security reports: [SECURITY.md](SECURITY.md).

---

© Bea Lambitco
