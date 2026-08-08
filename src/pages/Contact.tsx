import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import { siteContent } from "../data/siteContent";

function Contact() {
  return (
    <main>
      <Hero
        eyebrow="Contact AsiaMap"
        title="Start a transport inquiry."
        body="Share your cargo, route, timing, and contact details. AsiaMap can follow up with the next practical step."
      />

      <section className="section contact-layout">
        <div className="contact-info">
          <p className="eyebrow">Contact Information</p>
          <h2>Simple details are enough to begin.</h2>
          <dl>
            <div>
              <dt>Phone</dt>
              <dd>{siteContent.contact.phone}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>{siteContent.contact.email}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{siteContent.contact.location}</dd>
            </div>
          </dl>
          <a className="button secondary full-width" href={siteContent.contact.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}

export default Contact;
