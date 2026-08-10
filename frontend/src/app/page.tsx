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
          <Link className="button secondary" href="/services">
            Services
          </Link>
          <Link className="button primary" href="/contact">
            Contact
          </Link>
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

        <section className="section home-gallery-section">
          <div className="home-gallery-head compact-copy">
            <p className="eyebrow">Operations View</p>
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
      </div>
    </main>
  );
}
