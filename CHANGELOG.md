# Changelog

All notable released changes to AsiaMap are recorded here.

## [Unreleased]

### Security

- Upgraded Next.js to `16.4.3` and refreshed the dependency lockfile after validating the resulting tree with a high-severity npm audit and production build.
- Added same-origin and request-size guards to the inquiry endpoint.
- Added a honeypot field to suppress simple automated inquiry spam without changing the customer-facing form flow.

### Added

- Generated `sitemap.xml` and linked it from `robots.txt`.
- Added environment-controlled canonical site URL configuration.
- Added canonical and Open Graph metadata for Home, Services, and Contact.
- Added LocalBusiness structured data for AsiaMap.
- Added GitHub Actions CI for dependency installation, high-severity audit, and production build verification.

### Notes

- The existing v0.3 brand/UI implementation is intentionally preserved; this hardening pass does not redesign the customer-facing website.
- A future custom production domain can replace the current `asiamap.vercel.app` fallback through `NEXT_PUBLIC_SITE_URL` without code changes.

## [0.2.0] - 2026-08-18

### Added

- Business-ready company history, services, cargo experience, operating coverage, and contact content.
- Server-side `POST /api/inquiry` route for transport inquiries.
- Resend-based inquiry email delivery configured through environment variables.
- Client inquiry form with validation, submission state, success feedback, and error feedback.
- Myanmar-focused baseline/page metadata and `robots.txt`.
- Responsive and accessibility refinements for the customer-facing website.

### Changed

- Reworked the homepage conversion flow and mobile navigation.
- Replaced prototype positioning with verified Myanmar transportation positioning.
- Removed obsolete frontend components and simplified the production surface.

### Release normalization

- Synchronized package, README, architecture, operations, roadmap, and changelog version state after the original v0.2.0 implementation merge.

### Deferred

- Final production domain and canonical URL configuration.
- Verified AsiaMap-owned Resend sender domain.
- Automated tests and CI gates.
- Inquiry anti-spam/rate limiting and production monitoring.
- CMS, ERP/CRM, accounts, shipment tracking, and AI features.

## [0.1.0] - 2026-08-18

### Added

- Initial formally versioned AsiaMap baseline.
- Next.js frontend with Home, Services, Contact, and not-found routes.
- Reusable Header, Hero, Footer, ServiceCard, and ContactForm components.
- Centralized site content in `frontend/src/data/siteContent.ts`.
- Documentation baseline with architecture, roadmap, and operations contracts.

### Known gaps

- Contact details still contained placeholders.
- Inquiry submission used `mailto:` rather than a production server-side workflow.
- Sanity CMS was reserved but not integrated.
- Production SEO, accessibility, deployment, and content verification remained for a later release.
