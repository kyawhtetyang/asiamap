import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { siteUrl } from "../lib/site";
import "../styles.css";
import "../typography.css";
import "../brand-polish.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const description =
  "Container and cargo transportation services across Yangon, Lower Myanmar, and Mandalay, backed by more than 30 years of operating experience.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AsiaMap | Container Transportation in Myanmar",
  description,
  openGraph: {
    type: "website",
    siteName: "AsiaMap",
    title: "AsiaMap | Container Transportation in Myanmar",
    description,
    url: siteUrl,
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AsiaMap",
  url: siteUrl,
  telephone: "+959675221014",
  email: "asiamap.business@gmail.com",
  description,
  areaServed: ["Yangon", "Lower Myanmar", "Mandalay"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
