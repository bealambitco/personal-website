# Security policy

## Scope

bealambitco.com is a statically generated site with no server runtime,
database, authentication layer, user input, or public write path. The
practical attack surface is limited to dependency supply chain, response
headers, and third-party links.

## Reporting a vulnerability

Please report suspected security issues privately to **bealambitco@yahoo.com**
with "Security" in the subject line. Please do not open a public issue for
anything exploitable.

Include what you found, how to reproduce it, and what impact you believe it
has. Expect an acknowledgement within five business days.

Please do not run automated scanners against the production domain, attempt
denial of service, or access data that is not yours.

## What is in scope

- Dependency vulnerabilities reachable in the built output
- Content Security Policy or response-header weaknesses (see `vercel.json`)
- Anything that could allow content injection into the built site
- Published links that grant unintended write access to a third-party
  document (see the Canva `/edit` guard in `scripts/verify-site.mjs`)

## What is out of scope

- Missing headers with no demonstrated impact on a static site
- Findings that require a compromised maintainer account or local machine
- Volumetric or denial-of-service testing
- Social engineering

## Controls in place

- `npm audit --audit-level=high` runs in CI on every pull request
- Dependabot opens weekly dependency pull requests
- CSP, HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`,
  and a restrictive `Permissions-Policy` are set in `vercel.json`
- All external links carry `rel="noopener noreferrer"`
- Images are self-hosted and processed at build time; the build performs no
  third-party metadata scraping
