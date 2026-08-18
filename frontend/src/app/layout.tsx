import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles.css";

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
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
