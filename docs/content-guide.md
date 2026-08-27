# Content and editing guide

This guide covers the updates most likely to happen between development releases. The site content lives in plain TypeScript and Markdown files; no CMS is required.

## Voice and editorial standard

Write as a warm, precise expert:

- Lead with the point, then support it with specific evidence.
- Prefer concrete verbs and examples over broad claims.
- Keep paragraphs short enough to scan.
- Use “Data & AI” consistently when naming the practice.
- Avoid inflated language, generic AI phrasing, and claims that cannot be verified publicly.
- Treat dates, ratings, course counts, awards, credentials, and employer outcomes as facts that need a source or owner confirmation.

The homepage is for prospective clients and event organizers first. Detailed history can remain, but the strongest and most relevant proof should appear first.

## Update the homepage identity

Edit `src/data/profile.ts` to change:

- public name and full professional name;
- role line and positioning statement;
- public inquiry email;
- biography;
- credential links; and
- quantified proof points.

The current public email is `bealambitco@yahoo.com`. Replace it with `admin@bealambitco.com` only after the domain mailbox is active and can receive mail.

## Update services

Edit `src/data/services.ts`. Each service has:

- `title` — the service visitors recognize;
- `description` — what Bea helps accomplish; and
- `bestFor` — the audience or situation where the service fits.

Keep this section to three clear offers unless a distinct fourth service becomes necessary.

## Update experience, featured work, and volunteering

Use:

- `src/data/experience.ts` for paid work, projects, training, leadership, and credentials;
- `src/data/featured.ts` for selected talks, press, competitions, articles, and public proof; and
- `src/data/volunteer.ts` for unpaid community contributions.

Cards may link to a public source. If no reliable source exists, omit `href`; the item will render as plain text rather than pointing visitors to a generic or misleading page.

Use only reviewed, self-hosted images. Put them in `src/assets/` and `import` them in the data
file, then set `image:` to the imported value — Astro compresses, converts, and resizes them at
build time and emits the intrinsic dimensions, which is what keeps cards from shifting as they
load. (Images placed in `public/` bypass all of that and ship at full size.) Do not embed
expiring social-media image URLs or add automatic metadata scraping to the build.

Public links must be genuinely public. Never publish a share URL that grants edit access to a
third-party document — a Canva `/edit` URL is view-only purely by share setting, so use its
`/view` form. `scripts/verify-site.mjs` fails the build on `/edit` URLs and on `canva.link`
shortlinks, which redirect to `/edit`.

## Publish an article

1. Copy `src/content/posts/_template.md`.
2. Rename the copy using a date and readable slug, such as `2026-08-15-responsible-ai-adoption.md`.
3. Complete the frontmatter.
4. Write and review the article.
5. Set `draft: false`.
6. Run the full local verification commands from the README.

Valid writing pillars are defined in `src/data/pillars.ts`.

A published article receives its own indexable URL. Topic, tag, and archive pages remain `noindex,follow`; this is deliberate and should not be changed merely to make the sitemap larger.

If an article was first published elsewhere, set `canonicalUrl` to the original source. Otherwise leave it unset so the site article remains self-canonical.

## Add or update a resource

Edit `src/data/resources.ts`. Resources should be genuinely selected and accompanied by a useful reason for inclusion. Avoid turning the page into a generic directory of popular tools.

The resources page is currently a navigation aid and is not eligible for search indexing.

## Update social links

Edit `src/data/socials.ts`. Hero links are selected in `Hero.astro`. The email entry is derived
from `profile.email`, so change the public address in `src/data/profile.ts` only — the Hero,
Contact section, and footer all follow.

Add a scheduling link only after a real booking page is ready. A mailto inquiry remains the primary contact path.

## Release checklist

- Confirm names, dates, credentials, ratings, and numerical claims.
- Check every new public link.
- Ensure no draft or example copy is visible.
- Use a feature branch and pull request.
- Review the Vercel Preview on desktop and mobile.
- Run `npm run check`, `npm run build`, `npm run test:site`, and `npm audit`.
- Run `npm run test:site -- --check-links` before flipping any ecosystem destination to `live`.
- Merge only when the preview and required checks pass.
