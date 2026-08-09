# Professional website enhancement implementation brief

## Outcome and users

- Primary audience: organizations looking for a Data & AI consultant, corporate trainer, or speaker.
- Outcome: visitors should understand Bea's positioning, see credible proof, and find a professional inquiry path within the first screen and first minute.
- Smallest useful increment: preserve the existing static Astro site and single-page professional history while improving hierarchy, search indexing, security, maintainability, and documentation.

## Scope

In scope:

- Conservative homepage hierarchy and copy refinements.
- A clear email inquiry action using `bealambitco@yahoo.com`.
- Accessible navigation and empty-state handling.
- Search indexing controls, sitemap policy, and structured data.
- Dependency and build hardening, reproducible image handling, CI, and deployment guidance.
- Public repository documentation and a separate Word audit report.

Out of scope:

- A contact-form backend, CMS, authentication, database, or scheduling integration.
- Publishing the six AI-generated draft articles as Bea's writing.
- Removing professional history solely to shorten the page.
- Deploying to production, changing DNS, or configuring Search Console without a separate request.

## Acceptance criteria

- The homepage retains Services, About, Featured, Experience, Volunteer Work, Writing, and Contact; Writing shows a clear empty state until an article is published.
- `Bea Lambitco` is the primary public name; the full professional name remains in identity metadata and the footer.
- A visible email inquiry action works without a backend.
- Thin taxonomy/archive/resource routes remain usable but emit `noindex,follow` and are absent from the sitemap.
- The homepage emits consistent `WebSite` and `Person` structured data.
- No automatic build-time scraping of third-party pages remains.
- Type checks, production build, SEO assertions, and dependency audit pass with zero known high or critical vulnerabilities.
- Desktop and narrow layouts remain keyboard accessible, responsive, and free of console or CSP errors.
- The final Word audit is visually rendered and inspected before delivery.

## Existing architecture and contracts

- Astro static output is retained; there is no server runtime or public write path.
- `src/data/*.ts` remains the source for profile, services evidence, experience, and links.
- Markdown content remains validated by the Astro content collection schema.
- `BaseLayout.astro` remains the shared metadata and page shell boundary.
- `vercel.json` remains the production security-header source.
- Feature branches and pull requests provide Vercel Preview environments; `main` remains production.

Rejected alternatives:

- No broad redesign or migration to React/Next.js.
- No direct changes to `main`; the owner-controlled pull request remains the production approval boundary.
- No canonicalization of distinct topic pages to the homepage; thin pages use `noindex,follow` instead.
- No contact form because it would add spam, privacy, validation, and operations scope without improving the current inquiry job.

## Data and threat model

- Public data: biography, credentials, work history, public links, and the selected inquiry email.
- Actors: anonymous visitors, search crawlers, the repository owner, third-party link destinations, and dependency/build providers.
- Trust boundaries: repository content, third-party URLs, Vercel analytics, npm packages, and deployment configuration.
- There is no authentication, user input, persistence, secret, or tenant boundary.
- Primary risks: stale or unverified claims, dependency advisories, unsafe third-party assets, overly broad indexing, CSP regression, broken external links, and direct-to-production changes.
- Rollback: revert the implementation commit or redeploy the prior Vercel production deployment.

## Test and evidence plan

| Requirement or risk | Test layer | Observable evidence | Status |
|---|---|---|---|
| Astro correctness | Static/type/build | `npm run check`, `npm run build` | Pass |
| Indexing policy | Post-build contract | Robots tags, sitemap, links, anchors, and draft assertions | Pass |
| Dependency risk | Supply chain | Complete `npm audit` | Pass: 0 vulnerabilities |
| Responsive and accessible navigation | Browser/manual | Desktop and 390 px checks; mobile menu, filter state, overflow, focus styles | Pass |
| CSP and asset reliability | Browser/live configuration | Local console review; production response-header inspection | Local pass; production check pending deployment |
| Human-readable documentation | Editorial review | README/docs consistency check | Pass |
| Word report quality | Document render | PNG review of every page and accessibility audit | Pass |

## Delivery and operations

- Approved preview changes may be pushed to `dev`; `main` remains unchanged until the owner raises and merges a pull request.
- A pull request should be used for the first production release so Vercel Preview and CI can validate it before merge.
- After deployment, the owner should submit the updated sitemap and request recrawling in Google Search Console.
- Search-result consolidation is directional, not guaranteed; Google controls final presentation and may take days or weeks to recrawl.

## Ecosystem navigation increment

- Outcome: connect visitors to Bea's consulting, research, and library properties without changing the homepage's professional narrative or section order.
- Scope: remove Services, Featured, and Resources from primary navigation; add an accessible Ecosystem disclosure; link the Services CTA to the Consulting Hub; list live ecosystem destinations in the footer.
- Configuration contract: ecosystem destinations use `live`, `comingSoon`, or `hidden`; live entries are links in navigation and footer, coming-soon entries are non-interactive dropdown labels, and hidden entries are not rendered.
- Compatibility: `/resources` remains built and usable but is no longer linked from global navigation. No content migration, redirect, new ecosystem page, framework change, or dependency is included.
- Evidence: type checking, production build, generated-site and status assertions, dependency audit, diff hygiene, and desktop/mobile browser interaction review must pass before committing to `dev`.
- Delivery: push the validated commit to `origin/dev` for preview only; do not create a pull request or merge to `main`.
