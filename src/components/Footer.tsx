import { siteContent } from "../data/siteContent";

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>{siteContent.brand}</strong>
        <p>Container transportation for regional business needs.</p>
      </div>
      <div>
        <strong>Company</strong>
        {siteContent.nav.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </div>
      <div>
        <strong>Services</strong>
        <span>Container Transportation</span>
      </div>
      <div>
        <strong>Contact</strong>
        <span>Phone: {siteContent.contact.phone}</span>
        <span>Email: {siteContent.contact.email}</span>
        <span>Location: {siteContent.contact.location}</span>
      </div>
      <p className="copyright">&copy; 2026 AsiaMap. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
