import type { Metadata } from "next";
import Hero from "../../components/Hero";
import { siteContent } from "../../data/siteContent";

export const metadata: Metadata = {
  title: "Container Transport Services in Myanmar | AsiaMap",
  description:
    "AsiaMap provides container and cargo transport between ports, warehouses, manufacturers, and stores across Yangon, Lower Myanmar, and Mandalay.",
};

const cargoGroups = [
  { label: "Industrial", items: siteContent.services.cargoItems.slice(0, 3) },
  { label: "Agriculture", items: siteContent.services.cargoItems.slice(3, 5) },
  { label: "Commercial", items: siteContent.services.cargoItems.slice(5) },
];

const trustDetails = [
  ["Since 1993", "Established"],
  ["30+ Years", "Transport experience"],
  ["Lower Myanmar", "Core operating region"],
  ["Yangon & Mandalay", "Major corridor"],
];

export default function ServicesPage() {
  return (
    <main>
      <Hero eyebrow="Our Services" title={siteContent.services.title} body={siteContent.services.body} />

      <section className="section page-shell services-card-section">
        <div className="compact-copy">
          <p className="eyebrow">Transport Services</p>
          <h2>Built around how cargo actually moves.</h2>
        </div>

        <div className="services-card-grid">
          {siteContent.services.cards.map((card) => (
            <article key={card.title} className="service-box">
              <div className="service-box-copy">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
              <ul className="service-box-list">
                {card.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section page-shell capability-section">
        <div className="section-heading-row">
          <div className="compact-copy">
            <p className="eyebrow">{siteContent.services.cargoTitle}</p>
            <h2>Cargo we have experience moving.</h2>
          </div>
          <p className="section-note">Operational experience across industrial, agricultural, and commercial cargo.</p>
        </div>
        <div className="cargo-groups">
          {cargoGroups.map((group, groupIndex) => (
            <div className="cargo-group" key={group.label}>
              <div className="cargo-group-heading"><span>0{groupIndex + 1}</span>{group.label}</div>
              <div className="cargo-group-items">
                {group.items.map((item) => <div className="cargo-line" key={item}>{item}</div>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="coverage-section-shell">
        <div className="section page-shell coverage-section">
          <div className="coverage-intro">
            <p className="eyebrow">{siteContent.services.coverageTitle}</p>
            <h2>Myanmar-focused operating coverage.</h2>
            <p>{siteContent.services.coverageBody}</p>
          </div>
          <div className="route-network" aria-label="AsiaMap operating locations">
            <div className="route-spine" aria-hidden="true" />
            {siteContent.services.coverageItems.map((item, index) => (
              <div className={`route-stop ${index < 2 ? "route-stop-major" : ""}`} key={item}>
                <span className="route-node" aria-hidden="true" />
                <span className="route-index">{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
                {index === 0 && <small>Primary hub</small>}
                {index === 1 && <small>Major corridor</small>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-shell experience-section">
        <div className="compact-copy experience-copy">
          <p className="eyebrow">{siteContent.services.trustTitle}</p>
          <h2>Experience before claims.</h2>
          <p>{siteContent.services.trustBody}</p>
        </div>
        <div className="experience-band">
          {trustDetails.map(([value, label]) => (
            <div className="experience-stat" key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
