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
          <Link className="button secondary" href="/services">
            Explore Services
          </Link>
        </div>
        <div className="hero-proof" aria-label="AsiaMap operating profile">
          <div><strong>Since 1993</strong><span>Operating experience</span></div>
          <div><strong>30+ years</strong><span>Myanmar transport knowledge</span></div>
          <div><strong>Yangon → Mandalay</strong><span>Core operating coverage</span></div>
        </div>
      </Hero>

      <div className="page-shell">
        <section className="section story-section">
          <div className="section-kicker">01</div>
          <div className="section-copy story-copy">
            <p className="eyebrow">Our Story</p>
            <h2>{siteContent.home.storyTitle}</h2>
            <div className="story-columns">
              <p>{siteContent.home.storyBody}</p>
              <p>{siteContent.home.storyBodyTwo}</p>
            </div>
          </div>
        </section>

        <section className="section home-services-section">
          <div className="section-heading-row">
            <div className="compact-copy">
              <p className="eyebrow">Transport Services</p>
              <h2>From pickup point to destination.</h2>
              <p>{siteContent.services.body}</p>
            </div>
            <Link className="text-link" href="/services">View all services <span>→</span></Link>
          </div>
          <div className="home-service-grid">
            {siteContent.services.cards.map((service, index) => (
              <article className="home-service-card" key={service.title}>
                <span className="card-index">0{index + 1}</span>
                <strong>{service.title}</strong>
                <p>{service.items.join(" • ")}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section home-gallery-section">
          <div className="section-heading-row">
            <div className="compact-copy">
              <p className="eyebrow">Operating Experience</p>
              <h2>Built through real transport operations.</h2>
            </div>
            <p className="section-note">Practical transport work across Myanmar shapes how AsiaMap operates today.</p>
          </div>
          <div className="transport-gallery" aria-label="AsiaMap transport gallery">
            {siteContent.home.gallery.map((item) => (
              <article className="gallery-card" key={item.title}>
                <div className="gallery-image-wrap">
                  <img src={item.image} alt={item.alt} />
                </div>
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
            <h2>Myanmar-focused transport coverage.</h2>
            <p>{siteContent.services.coverageBody}</p>
          </div>
          <div className="coverage-chip-list" aria-label="Representative operating areas">
            {siteContent.services.coverageItems.map((area) => (
              <span className="coverage-chip" key={area}>{area}</span>
            ))}
          </div>
        </section>

        <section className="section home-cta-section">
          <div>
            <p className="eyebrow">Need Transportation?</p>
            <h2>Tell us what you need to move.</h2>
            <p>Share your pickup point, destination, cargo type, and timing. AsiaMap will follow up on the transport requirement.</p>
          </div>
          <div className="actions">
            <Link className="button primary" href="/contact">Request Transport</Link>
            <a className="button secondary inverse" href={siteContent.contact.phoneHref}>Call {siteContent.contact.phone}</a>
          </div>
        </section>
      </div>
    </main>
  );
}
