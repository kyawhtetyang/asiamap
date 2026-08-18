import Hero from "../../components/Hero";
import { siteContent } from "../../data/siteContent";

export default function ContactPage() {
  return (
    <main>
      <Hero
        eyebrow="Contact AsiaMap"
        title="Talk to Us About Your Transport Requirement"
        body="Container and cargo transportation across Yangon, Lower Myanmar, and Mandalay."
      />

      <section className="section page-shell contact-page-section">
        <div className="contact-office-block">
          <h2>{siteContent.contact.officeTitle}</h2>
          <div className="contact-office-lines">
            <p>
              <strong>Phone:</strong>{" "}
              <a href={siteContent.contact.phoneHref}>{siteContent.contact.phone}</a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>
            </p>
            <p>
              <strong>Coverage:</strong> {siteContent.contact.coverage}
            </p>
            <p>
              <strong>Web:</strong> {siteContent.contact.website}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
