import Hero from "../../components/Hero";
import InquiryForm from "../../components/InquiryForm";
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
          <p className="eyebrow">Direct Contact</p>
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
          </div>
        </div>

        <div className="contact-inquiry-block">
          <p className="eyebrow">Request Transport</p>
          <h2>Send your transport requirement.</h2>
          <p className="contact-inquiry-intro">
            Tell us the pickup point, destination, cargo, and timing. We will use these details to follow up on your inquiry.
          </p>
          <InquiryForm />
        </div>
      </section>
    </main>
  );
}
