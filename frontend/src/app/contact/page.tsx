import Hero from "../../components/Hero";
import { siteContent } from "../../data/siteContent";

export default function ContactPage() {
  return (
    <main>
      <Hero eyebrow="Contact AsiaMap" title="Contact Us" body="" />

      <section className="section page-shell contact-page-section">
        <div className="contact-office-block">
          <h2>{siteContent.contact.officeTitle}</h2>
          <div className="contact-office-lines">
            <p>
              <strong>Address:</strong> {siteContent.contact.address}
            </p>
            <p>
              <strong>Phone:</strong> {siteContent.contact.phone}
            </p>
            <p>
              <strong>Fax:</strong> {siteContent.contact.fax}
            </p>
            <p>
              <strong>Email:</strong> {siteContent.contact.email}
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
