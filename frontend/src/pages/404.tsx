import Link from "next/link";

export default function LegacyNotFoundPage() {
  return (
    <main style={{ padding: "80px 20px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <p style={{ color: "#fa233b", fontWeight: 800, margin: "0 0 12px" }}>Page Not Found</p>
        <h1 style={{ margin: 0, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05 }}>
          Sorry, this page could not be found.
        </h1>
        <p style={{ color: "#6e6e73", marginTop: "18px" }}>
          Please return to the home page or continue browsing AsiaMap services.
        </p>
        <div style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
        </div>
      </div>
    </main>
  );
}
