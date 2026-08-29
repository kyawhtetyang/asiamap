import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Noto_Sans_Myanmar } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles.css";
import "../typography.css";

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

const notoSansMyanmar = Noto_Sans_Myanmar({
  weight: "400",
  variable: "--font-myanmar",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AsiaMap | Container Transportation in Myanmar",
  description:
    "Container and cargo transportation services across Yangon, Lower Myanmar, and Mandalay, backed by more than 30 years of operating experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable} ${notoSansMyanmar.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
