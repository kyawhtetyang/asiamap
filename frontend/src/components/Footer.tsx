import Link from "next/link";
import { siteContent } from "../data/siteContent";

function Footer() {
  return (
    <footer className="site-footer-shell">
      <div className="site-footer">
        <div className="footer-column footer-brand-block">
          <strong className="footer-heading">{siteContent.brand}</strong>
          <p>Container and cargo transportation across Myanmar since 1993.</p>
        </div>
        <div className="footer-column">
          <strong className="footer-heading">Company</strong>
          {siteContent.nav.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="footer-column">
          <strong className="footer-heading">Services</strong>
          <span>Port ↔ Warehouse</span>
          <span>Warehouse ↔ Warehouse</span>
          <span>Manufacturer → Distribution</span>
        </div>
        <div className="footer-column">
          <strong className="footer-heading">Contact</strong>
          <a href={siteContent.contact.phoneHref}>{siteContent.contact.phone}</a>
          <a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>
          <span>{siteContent.contact.coverage}</span>
        </div>
        <div className="footer-legal">
          <p className="copyright">&copy; 2026 AsiaMap. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
