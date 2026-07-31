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

- The homepage retains About, Featured, Experience, Volunteer Work, and Contact, with Services added and the empty Latest Articles section hidden.
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
- No permanent `dev` branch; PR previews provide isolated validation without branch drift.
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

- Changes will remain local and undeployed unless deployment is requested separately.
- A pull request should be used for the first production release so Vercel Preview and CI can validate it before merge.
- After deployment, the owner should submit the updated sitemap and request recrawling in Google Search Console.
- Search-result consolidation is directional, not guaranteed; Google controls final presentation and may take days or weeks to recrawl.
