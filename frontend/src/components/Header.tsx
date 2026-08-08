import { useEffect, useState } from "react";
import { siteContent } from "../data/siteContent";

type HeaderProps = {
  currentPath: string;
};

function Header({ currentPath }: HeaderProps) {
  const [theme, setTheme] = useState(() => localStorage.getItem("asiamap-theme") || "light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme === "dark" ? "dark" : "";
    localStorage.setItem("asiamap-theme", theme);
  }, [theme]);

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="AsiaMap home">
        <span className="brand-mark" aria-hidden="true">
          <img src="/images/asia-map-logo.png" alt="" />
        </span>
        <span>{siteContent.brand}</span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {siteContent.nav.map((item) => (
          <a className={currentPath === item.href ? "active" : ""} href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <button
        className="theme-toggle"
        type="button"
        aria-label="Toggle color theme"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <span aria-hidden="true">☼</span>
      </button>
    </header>
  );
}

export default Header;
