import Hero from "../components/Hero";
import { siteContent } from "../data/siteContent";

function Services() {
  return (
    <main>
      <Hero eyebrow="Our Services" title={siteContent.services.title} body={siteContent.services.body} />

      <section className="section service-detail">
        <div>
          <p className="eyebrow">Primary Service</p>
          <h2>Container Transportation</h2>
          <p>{siteContent.services.description}</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1400&q=80"
          alt="Shipping containers stacked at a logistics yard"
        />
      </section>

      <section className="section two-column">
        <div>
          <p className="eyebrow">What We Handle</p>
          <h2>Focused transport support.</h2>
        </div>
        <ul className="check-list">
          {siteContent.services.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="coverage-band">
        <p className="eyebrow">Coverage</p>
        <h2>Coverage confirmed by route.</h2>
        <p>{siteContent.services.coverage}</p>
      </section>

      <section className="cta-band">
        <div>
          <p className="eyebrow">Need transportation?</p>
          <h2>Share the cargo details.</h2>
        </div>
        <a className="button primary" href="/contact">
          Contact Us
        </a>
      </section>
    </main>
  );
}

export default Services;
