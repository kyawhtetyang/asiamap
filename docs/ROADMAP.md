# Roadmap

## Version Policy

`v0.x` represents active pre-stable product development. `v1.0.0` will represent the first stable production release.

## v0.1.0 — Baseline

Status: released.

- Next.js frontend established.
- Home, Services, and Contact routes established.
- Reusable components established.
- Centralized content model established.
- Documentation and versioning baseline established.

## v0.2.0 — Business-Ready Website

Status: implemented; release state normalized.

Primary goal: turn the baseline frontend into a credible customer-acquisition website based on AsiaMap's real operating history, services, coverage, and contact information.

Delivered:

- real company history and Myanmar-focused positioning;
- transportation services and cargo experience content;
- customer-friendly operating coverage;
- real business contact actions;
- server-side transport inquiry submission through `/api/inquiry` and Resend;
- field validation plus loading, success, and error feedback;
- baseline metadata, SEO, robots, responsive behavior, and accessibility refinements;
- production-oriented documentation and environment configuration.

Intentionally deferred:

- final production domain/canonical verification;
- verified AsiaMap-owned Resend sender domain;
- automated tests and CI gates;
- inquiry anti-spam/rate limiting and production monitoring;
- Sanity CMS;
- customer accounts;
- admin dashboard;
- shipment tracking;
- ERP/CRM functionality;
- AI features;
- standalone backend or application database.

## v0.3.0 — Brand System and Production Quality

Candidate scope:

- adopt the approved AsiaMap visual identity and color system;
- establish reusable design tokens and component styling;
- refresh Home, Services, Contact, navigation, footer, buttons, cards, and responsive presentation;
- preserve the v0.2.0 business/inquiry architecture while improving visual quality;
- add automated smoke tests and repeatable quality checks where practical;
- improve production security, anti-spam, monitoring, and domain verification as needed.

CMS/content operations should only be added if business operations justify the extra system.

## v1.0.0 — Stable Production Release

Target conditions:

- real business information is complete;
- inquiry flow works reliably;
- production deployment and domain are verified;
- core SEO/accessibility checks pass;
- operational recovery steps are documented;
- appropriate automated verification exists for critical customer flows;
- no known launch-blocking placeholders remain.

## Roadmap Rule

Roadmap items are intentions, not guarantees. Implemented work moves into `CHANGELOG.md` when released.
