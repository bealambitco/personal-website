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

Use only reviewed, self-hosted images from `public/`. Do not embed expiring social-media image URLs or add automatic metadata scraping to the build.

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

Edit `src/data/socials.ts`. Hero links are selected in `Hero.astro`. The contact section uses the public email from `src/data/profile.ts`.

Add a scheduling link only after a real booking page is ready. A mailto inquiry remains the primary contact path.

## Release checklist

- Confirm names, dates, credentials, ratings, and numerical claims.
- Check every new public link.
- Ensure no draft or example copy is visible.
- Use a feature branch and pull request.
- Review the Vercel Preview on desktop and mobile.
- Run `npm run check`, `npm run build`, `npm run test:site`, and `npm audit`.
- Merge only when the preview and required checks pass.
