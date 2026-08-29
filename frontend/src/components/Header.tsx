"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteContent } from "../data/siteContent";

function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header-shell">
      <div className="site-header">
        <Link className="brand" href="/" aria-label="AsiaMap home">
          <span className="brand-mark" aria-hidden="true">
            <Image src="/images/asia-map-logo.png" alt="" width={42} height={42} priority />
          </span>
          <span className="brand-copy">
            <strong>{siteContent.brand}</strong>
            <small>Myanmar Logistics</small>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          {siteContent.nav.map((item) => (
            <Link className={pathname === item.href ? "active" : ""} href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={siteContent.contact.phoneHref}>
            <span>Transport desk</span>
            <strong>{siteContent.contact.phone}</strong>
          </a>
          <Link className="button header-cta" href="/contact">
            Request Transport
          </Link>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-nav-shell ${mobileMenuOpen ? "open" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="mobile-nav-links" aria-label="Mobile navigation">
          {siteContent.nav.map((item) => (
            <Link className={pathname === item.href ? "active" : ""} href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <a href={siteContent.contact.phoneHref}>Call {siteContent.contact.phone}</a>
          <Link className="mobile-nav-cta" href="/contact">Request Transport</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
