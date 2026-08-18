import Link from "next/link";
import Hero from "../components/Hero";
import { siteContent } from "../data/siteContent";

export default function HomePage() {
  return (
    <main>
      <Hero
        eyebrow={siteContent.home.eyebrow}
        title={siteContent.home.title}
        body={siteContent.home.body}
        variant="home"
      >
        <div className="actions">
          <Link className="button primary" href="/contact">
            Request Transport
          </Link>
          <a className="button secondary" href={siteContent.contact.phoneHref}>
            Call {siteContent.contact.phone}
          </a>
        </div>
      </Hero>

      <div className="page-shell">
        <section className="section story-section">
          <div className="section-copy compact-copy story-copy">
            <p className="eyebrow">Our Story</p>
            <h2>{siteContent.home.storyTitle}</h2>
            <p>{siteContent.home.storyBody}</p>
            <p>{siteContent.home.storyBodyTwo}</p>
          </div>
        </section>

        <section className="section home-services-section">
          <div className="home-gallery-head compact-copy">
            <p className="eyebrow">Transport Services</p>
            <h2>From pickup point to destination.</h2>
            <p>{siteContent.services.body}</p>
          </div>
          <div className="home-service-grid">
            {siteContent.services.cards.map((service) => (
              <article className="home-service-card" key={service.title}>
                <strong>{service.title}</strong>
                <p>{service.items.join(" • ")}</p>
              </article>
            ))}
          </div>
          <Link className="text-link" href="/services">
            View all services →
          </Link>
        </section>

        <section className="section home-gallery-section">
          <div className="home-gallery-head compact-copy">
            <p className="eyebrow">Operating Experience</p>
            <h2>Built through real transport operations.</h2>
          </div>
          <div className="transport-gallery" aria-label="AsiaMap transport gallery">
            {siteContent.home.gallery.map((item) => (
              <article className="gallery-card" key={item.title}>
                <img src={item.image} alt={item.alt} />
                <div className="gallery-card-copy">
                  <span className="gallery-card-meta">{item.meta}</span>
                  <strong>{item.title}</strong>
                  <span>{item.body}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section home-coverage-section">
          <div className="compact-copy">
            <p className="eyebrow">Operating Coverage</p>
            <h2>Yangon, Lower Myanmar, and Mandalay.</h2>
            <p>{siteContent.services.coverageBody}</p>
          </div>
          <div className="coverage-chip-list" aria-label="Representative operating areas">
            {siteContent.services.coverageItems.map((area) => (
              <span className="coverage-chip" key={area}>
                {area}
              </span>
            ))}
          </div>
        </section>

        <section className="section home-cta-section">
          <div>
            <p className="eyebrow">Need Transportation?</p>
            <h2>Tell us what you need to move.</h2>
            <p>
              Share your pickup point, destination, cargo type, and timing. AsiaMap will follow up on the transport requirement.
            </p>
          </div>
          <div className="actions">
            <Link className="button primary" href="/contact">
              Request Transport
            </Link>
            <a className="button secondary" href={siteContent.contact.phoneHref}>
              Call {siteContent.contact.phone}
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
