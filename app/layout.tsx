import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "./globals.css";
import { Nav, Footer } from "@/components/Site";

const title = "Mahadev Events | Luxury Event Decoration & Planning in Khatauli";
const description =
  "Bespoke wedding stages, floral entrances, haldi ceremonies, illuminated facades, and milestone celebrations in Khatauli, Muzaffarnagar & Western UP.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mahadev-events.example"),
  title,
  description,
  openGraph: {
    title,
    description,
    images: ["/photos/arch-walkway.jpg"],
    type: "website",
    locale: "en_IN",
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mahadev Events",
    description,
    telephone: ["+918218127638", "+917055628456"],
    email: "khataulimahadevevents@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Aad Saini Nagar",
      addressLocality: "Khatauli",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    sameAs: ["https://www.instagram.com/mahadev_evants_khatauli"],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
