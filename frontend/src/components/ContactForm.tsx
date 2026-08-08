import { siteContent } from "../data/siteContent";

function ContactForm() {
  return (
    <form className="inquiry-form" action={`mailto:${siteContent.contact.email}`} method="post" encType="text/plain">
      <label>
        Name
        <input type="text" name="name" autoComplete="name" required />
      </label>
      <label>
        Company
        <input type="text" name="company" autoComplete="organization" />
      </label>
      <label>
        Phone or Email
        <input type="text" name="contact" autoComplete="email" required />
      </label>
      <label>
        Cargo or Transportation Requirement
        <input type="text" name="requirement" required />
      </label>
      <label>
        Message
        <textarea name="message" rows={5} />
      </label>
      <button className="button primary" type="submit">
        Send Inquiry
      </button>
    </form>
  );
}

export default ContactForm;
