import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { siteContent } from "../data/siteContent";

function Home() {
  return (
    <main>
      <Hero
        eyebrow={siteContent.home.eyebrow}
        title={siteContent.home.title}
        body={siteContent.home.body}
        variant="home"
      >
        <div className="actions">
          <a className="button primary" href="/contact">
            Contact Us
          </a>
          <a className="button secondary" href="/services">
            View Services
          </a>
        </div>
      </Hero>

      <section className="section intro-section">
        <div className="section-copy">
          <p className="eyebrow">About AsiaMap</p>
          <h2>{siteContent.home.aboutTitle}</h2>
          <p>{siteContent.home.aboutBody}</p>
        </div>
        <div className="proof-grid" aria-label="AsiaMap advantages">
          {siteContent.home.strengths.map((item) => (
            <ServiceCard title={item.title} body={item.body} key={item.title} />
          ))}
        </div>
      </section>

      <section className="section visual-band">
        <img
          src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1600&q=80"
          alt="Container truck moving cargo on a highway"
        />
        <div>
          <p className="eyebrow">Transportation Focus</p>
          <h2>Steady coordination for container cargo.</h2>
          <p>
            From trucking requirements to route planning, AsiaMap keeps the
            inquiry path simple and practical.
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div>
          <p className="eyebrow">Need container transportation?</p>
          <h2>Send the route. Start the plan.</h2>
        </div>
        <a className="button primary" href="/contact">
          Contact AsiaMap
        </a>
      </section>
    </main>
  );
}

export default Home;
