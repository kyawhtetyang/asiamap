import { siteContent } from "../data/siteContent";

function ContactForm() {
  return (
    <form className="inquiry-form" action={`mailto:${siteContent.contact.email}`} method="post" encType="text/plain">
      <div className="form-intro-row">
        <div>
          <p className="form-kicker">Contact AsiaMap</p>
          <h3>Start the inquiry.</h3>
        </div>
      </div>

      <div className="form-grid-two">
        <label>
          Name
          <input type="text" name="name" autoComplete="name" placeholder="Your name" required />
        </label>
        <label>
          Company
          <input type="text" name="company" autoComplete="organization" placeholder="Company name" />
        </label>
      </div>

      <label>
        Phone or Email
        <input type="text" name="contact" autoComplete="email" placeholder="Email or phone number" required />
      </label>

      <label>
        Cargo or Transportation Requirement
        <input type="text" name="requirement" placeholder="Import, export, warehouse transport" required />
      </label>

      <label>
        Message
        <textarea
          name="message"
          rows={5}
          placeholder="Share route, cargo type, timing, and any transport details."
        />
      </label>

      <button className="button primary form-submit" type="submit">
        Send Inquiry
      </button>
    </form>
  );
}

export default ContactForm;
