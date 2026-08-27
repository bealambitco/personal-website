# Deferred backlog

Items identified in the August 2026 production audit that were deliberately
not fixed in that pass. Each has the reasoning, so they can be picked up (or
consciously dropped) rather than rediscovered.

## Content

**Writing has no published articles.** All example drafts were removed, so
`/writing` renders its empty state, `/rss.xml` has zero items, and the sitemap
contains one URL. "Writing" is a top-level nav item leading to an empty page.
Either publish original articles, or drop Writing from primary navigation
until there is something behind it. The empty state is honest, but a visitor
evaluating thought leadership currently finds nothing.

**Inferred dates remain in `src/data/experience.ts` and `src/data/featured.ts`.**
Certification years are inferred from career sequence rather than confirmed,
and three Featured entries are marked `// approx.`. Issue dates are verifiable
from the Credly and Microsoft Learn pages already linked from each card.
`docs/content-guide.md` requires source-or-owner confirmation for dates and
credentials; the data has not caught up. This is a credibility item, not a
technical one.

## Contact

**The public inquiry address is `bealambitco@yahoo.com`.** `src/data/socials.ts`
now derives from `profile.email`, so the switch to `admin@bealambitco.com` is a
one-line change in `src/data/profile.ts` once that mailbox is live.

**There is no scheduling link or contact form.** Deliberate — see the rejected
alternatives in `docs/implementation-brief.md`. Revisit only if mailto proves
to be real friction for institutional enquiries.

## Infrastructure (owner actions)

**`www.bealambitco.com` does not resolve.** Anyone typing "www" gets a DNS
error. Add the `www` domain in Vercel and redirect it to the apex.

**Ecosystem destinations are gated.** `hub`, `research`, and `library` are
`comingSoon` in `src/data/ecosystem.ts` because none of them served a 200 at
audit time. Flip an entry to `"live"` only after `npm run test:site -- --check-links`
passes for it; that check runs in CI and will fail the build otherwise.

## Engineering

**GitHub Actions are pinned to tags, not SHAs.** `actions/checkout@v4` and
`actions/setup-node@v4` resolve to a mutable tag. SHA-pinning is the hardened
option; Dependabot does not currently watch the `github-actions` ecosystem
either. Low risk for a static personal site, non-zero for a public repo.

**No external link-rot monitoring.** The site's value rests on verifiable
credential links. They are checked manually today. A scheduled workflow
fetching every external `href` weekly would catch silent rot. Note that some
hosts (ateneo.edu) return 403 to non-browser agents, so a naive checker will
produce false positives.

**`src/data/profile.ts` exports no types**, and `credentials` uses `url: ""`
as a sentinel where `url?: string` is meant — it works only because the empty
string is falsy. Every other data file exports an explicit type.

**No `ProfessionalService` / `Organization` JSON-LD.** The homepage emits
`WebSite` and `Person`. A services business could also emit `ProfessionalService`
with `areaServed` and `knowsAbout`. Worth doing alongside the next SEO pass,
not on its own.

**`.button-primary` uses raw `--color-amethyst` in both themes**, so the
primary CTA in dark mode is a dark-purple pill on a dark background. Label
contrast is fine (11.55:1); button-versus-page separation is weak.

## Ecosystem architecture — decide before the second site ships

`src/styles/tokens.css` and the navigation markup will be copied into `hub.`,
`research.`, and `library.` as those launch, and will then drift — different
violets, different nav, inconsistent "Coming soon" handling.

Decide the sharing mechanism **before** the second property exists. Options,
roughly in order of effort:

1. Publish `tokens.css` and `ecosystem.ts` from this repo as a versioned npm
   package the other sites depend on.
2. Move all four sites into one monorepo with a shared `packages/brand`.
3. Serve `ecosystem.json` from this site and have the others fetch it at build
   time, keeping only tokens duplicated.

Option 1 is the smallest change that actually prevents drift. Doing nothing is
viable for two sites and painful at four.
