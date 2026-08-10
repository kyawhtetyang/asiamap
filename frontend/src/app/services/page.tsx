import Hero from "../../components/Hero";
import { siteContent } from "../../data/siteContent";

export default function ServicesPage() {
  return (
    <main>
      <Hero eyebrow="Our Services" title={siteContent.services.title} />

      <section className="section page-shell services-card-section">
        <div className="compact-copy">
          <p className="eyebrow">Service Boxes</p>
          <h2>Core transport support.</h2>
        </div>

        <div className="services-card-grid">
          {siteContent.services.cards.map((card) => (
            <article key={card.title} className="service-box">
              <div className="service-box-copy">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>

              <ul className="service-box-list">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section page-shell trusted-services-section">
        <div className="compact-copy">
          <p className="eyebrow">{siteContent.services.trustedTitle}</p>
          <h2>Companies We Work With</h2>
          <p>{siteContent.services.trustedBody}</p>
        </div>

        <div className="trusted-services-list">
          {siteContent.services.trustedItems.map((item) => (
            <div key={item} className="trusted-services-item">
              {item}
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
