import type { Metadata } from "next";
import Hero from "../../components/Hero";
import InquiryForm from "../../components/InquiryForm";
import { siteContent } from "../../data/siteContent";

export const metadata: Metadata = {
  title: "Request Container Transportation | AsiaMap",
  description:
    "Contact AsiaMap for container and cargo transportation across Yangon, Lower Myanmar, and Mandalay. Send pickup, destination, and cargo details online.",
};

export default function ContactPage() {
  return (
    <main>
      <Hero
        eyebrow="Request Transport"
        title="Tell Us What You Need to Move"
        body="Share your pickup point, destination, cargo, and timing for container and cargo transportation across Yangon, Lower Myanmar, and Mandalay."
      />

      <section className="section page-shell contact-page-section">
        <aside className="contact-office-block" aria-label="AsiaMap direct contact details">
          <p className="eyebrow">Direct Contact</p>
          <h2>{siteContent.contact.officeTitle}</h2>
          <p className="contact-inquiry-intro">Prefer to speak directly? Call or email AsiaMap about your transport requirement.</p>
          <div className="contact-office-lines">
            <p><strong>Phone:</strong>{" "}<a href={siteContent.contact.phoneHref}>{siteContent.contact.phone}</a></p>
            <p><strong>Email:</strong>{" "}<a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a></p>
            <p><strong>Coverage:</strong> {siteContent.contact.coverage}</p>
          </div>
        </aside>

        <div className="contact-inquiry-block">
          <p className="eyebrow">Transport Details</p>
          <h2>Send your transport requirement.</h2>
          <p className="contact-inquiry-intro">
            Provide the key trip details below. AsiaMap will use them to review and follow up on your inquiry.
          </p>
          <InquiryForm />
        </div>
      </section>
    </main>
  );
}
