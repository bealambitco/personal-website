# Architecture and operations

## Overview

bealambitco.com is a statically generated Astro website hosted on Vercel. Astro compiles the content and components into HTML, CSS, fonts, images, and a small amount of browser JavaScript.

There is no production server runtime, public form endpoint, database, authentication system, or CMS.

```text
src/data/*.ts ─┐
               ├─> Astro components and pages ─> dist/ ─> Vercel CDN
Markdown posts ┘
```

## Source boundaries

- `src/data/` owns structured profile and portfolio content.
- `src/content/posts/` owns article Markdown and frontmatter.
- `src/content.config.ts` validates published and draft article metadata.
- `src/components/` owns presentation and limited interaction.
- `src/pages/` owns routes and page-level indexing decisions.
- `src/layouts/BaseLayout.astro` owns shared metadata, canonical URLs, social cards, robots rules, analytics, and structured data.
- `astro.config.mjs` owns the site URL and sitemap inclusion policy.
- `vercel.json` owns production response headers.

## Search behavior

The homepage and non-draft article pages default to `index,follow`.

The following navigation/archive routes use `noindex,follow` and are excluded from the sitemap:

- `/topics` and `/topics/*`
- `/writing`
- `/tags/*`
- `/resources`

These pages remain crawlable. Search engines can follow their links while keeping thin category pages out of search results.

The homepage emits a `WebSite` and `Person` JSON-LD graph. Article pages emit `BlogPosting` structured data and reference the same person identity.

## Security model

The site accepts no user input and performs no public state-changing operation. This removes the usual authentication, authorization, CSRF, database-injection, upload, and session risks.

Relevant remaining controls and risks are:

- Dependencies are checked by npm audit and Dependabot.
- GitHub Actions runs a clean install, type check, production build, generated-site assertions, and production dependency audit.
- Vercel applies CSP, HSTS, MIME sniffing protection, frame protection, a restrictive permissions policy, and referrer controls.
- External links use `noopener noreferrer`.
- Card images are explicit and self-hosted; the build does not fetch arbitrary third-party page metadata.
- Inline script and style allowances remain in CSP because Astro and Vercel Analytics emit small inline blocks. The lack of an untrusted HTML input path materially limits the associated risk.

Any future contact form, CMS, comments system, newsletter endpoint, or server-rendered feature requires a fresh threat model.

## Performance and scalability

Static output is served from Vercel's CDN and scales without an application server. There is no database or per-request computation.

Performance guardrails:

- Keep homepage media deliberate and self-hosted.
- Do not add a client framework for content that works as HTML and CSS.
- Lazy-load non-critical images and embeds.
- Keep the homepage focused on selected proof; put growing archives on their dedicated pages.
- Re-run browser and Lighthouse checks after adding large media or interactive components.

## Environments and deployment

- Feature branch / pull request: Vercel Preview plus GitHub quality checks.
- `main`: production deployment.

The recommended release path is feature branch → pull request → preview review → merge to `main`. A permanent shared development branch is not necessary.

Rollback options:

- revert the release commit and push the revert; or
- redeploy the previous known-good Vercel deployment.

## Canonical commands

```bash
npm ci
npm run check
npm run build
npm run test:site
npm audit
npm run dev
npm run preview
```

Run type checking and production builds sequentially. Both update Astro's local cache, so parallel execution can create a cache-write race even when the source is valid.

## Post-deployment SEO operations

After a release that changes indexing:

1. Inspect the homepage and affected thin URLs in Google Search Console.
2. Submit `https://bealambitco.com/sitemap-index.xml`.
3. Request recrawling of the homepage and currently indexed thin pages.
4. Monitor Page Indexing and branded search queries.

Google controls final result presentation. Correct metadata and indexing directives improve the signals but do not guarantee a single-result layout or an immediate refresh.
