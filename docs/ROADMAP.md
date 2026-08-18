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

Status: scope frozen; implementation next.

Primary goal: turn the current frontend into a credible customer-acquisition website based on AsiaMap's real operating history, services, coverage, and contact information.

### Company Truth

- state that the transportation business began in 1993 at Taw Kywe Inn;
- communicate 30+ years of operating experience;
- publish the business contact number: `09 675 221 014`;
- replace broad "Across Asia" positioning with accurate Myanmar-focused positioning.

### Transportation Services

Represent the actual operating model:

- port → warehouse;
- warehouse → port;
- warehouse → warehouse;
- manufacturer → warehouse;
- manufacturer → store/distribution point;
- other point-to-point container and cargo transportation.

### Cargo Experience

Communicate experience transporting cargo including:

- steel;
- cement;
- building materials;
- animal feed;
- plants/agricultural cargo;
- electronics;
- consumer and commercial goods;
- other containerized and general cargo.

### Operating Coverage

Present customer-friendly coverage rather than exposing raw operational route records.

Major coverage:

- Yangon;
- Lower Myanmar;
- Mandalay.

Representative operating areas include Mawlamyine, Thaton, Bilin, Paung, Mudon, Thanbyuzayat, Ye, Kyaikmaraw, Kyaikto, Chaungzon, and surrounding areas.

Representative port/container movements include Thilawa SEZ, MITT, ICD facilities, and other Yangon-area terminals where supported by actual operations.

### Trust

- replace placeholder trust content with verified business relationships where permission and evidence are sufficient;
- distinguish direct customers from companies merely associated with historical cargo movements;
- do not publish unsupported customer claims or logos.

Candidate relationships to verify include Zin Htet Trading, Alpha Cement, Double Rhinos Cement, and Pro Mart.

### Lead Capture

- replace the `mailto:` inquiry flow with a working server-side submission path;
- validate inquiry fields;
- provide loading, success, and error feedback;
- provide clear call/contact actions;
- keep the implementation lightweight and avoid introducing a database unless required.

### Production Quality

- complete page metadata and baseline SEO;
- verify responsive/mobile behavior;
- verify baseline accessibility;
- optimize/localize imagery where appropriate;
- run production build/type checks;
- verify deployment and domain configuration;
- update release documentation and `CHANGELOG.md`.

### Out of Scope

The following are intentionally excluded from v0.2.0:

- Sanity CMS;
- customer accounts;
- admin dashboard;
- shipment tracking;
- ERP/CRM functionality;
- AI features;
- standalone custom backend or database unless required for the inquiry flow.

### Definition of Done

A prospective customer can:

1. understand what AsiaMap transports;
2. understand where AsiaMap operates;
3. see credible evidence of operating experience;
4. contact the business directly;
5. submit a real transport inquiry that AsiaMap can receive.

## v0.3.0 — Content Operations

Candidate scope, only if business needs justify it:

- integrate Sanity CMS;
- move editable business content into CMS-managed documents;
- define content publishing workflow;
- expand verified customer/partner trust content.

## v1.0.0 — Stable Production Release

Target conditions:

- real business information is complete;
- inquiry flow works reliably;
- production deployment and domain are verified;
- core SEO/accessibility checks pass;
- operational recovery steps are documented;
- no known launch-blocking placeholders remain.

## Roadmap Rule

Roadmap items are intentions, not guarantees. Implemented work moves into `CHANGELOG.md` when released.
