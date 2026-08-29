import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell section">
      <div className="compact-copy">
        <p className="eyebrow">Page Not Found</p>
        <h1>Sorry, this page could not be found.</h1>
        <p>Please return to the home page or continue browsing AsiaMap services.</p>
        <div className="actions">
          <Link className="button primary" href="/">
            Home
          </Link>
          <Link className="button outline" href="/services">
            Services
          </Link>
        </div>
      </div>
    </main>
  );
}
