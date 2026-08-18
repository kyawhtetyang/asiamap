import Hero from "../../components/Hero";
import { siteContent } from "../../data/siteContent";

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
          <p className="eyebrow">{siteContent.services.cargoTitle}</p>
          <h2>Cargo we have experience moving.</h2>
        </div>
        <div className="trusted-services-list">
          {siteContent.services.cargoItems.map((item) => (
            <div key={item} className="trusted-services-item">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section page-shell trusted-services-section">
        <div className="compact-copy">
          <p className="eyebrow">{siteContent.services.coverageTitle}</p>
          <h2>Myanmar-focused operating coverage.</h2>
          <p>{siteContent.services.coverageBody}</p>
        </div>
        <div className="trusted-services-list">
          {siteContent.services.coverageItems.map((item) => (
            <div key={item} className="trusted-services-item">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section page-shell trusted-services-section">
        <div className="compact-copy">
          <p className="eyebrow">{siteContent.services.trustTitle}</p>
          <h2>Experience before claims.</h2>
          <p>{siteContent.services.trustBody}</p>
        </div>
        <div className="trusted-services-list">
          {siteContent.services.trustItems.map((item) => (
            <div key={item} className="trusted-services-item">
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
