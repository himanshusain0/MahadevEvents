// src/app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import { Analytics } from "@vercel/analytics/react";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://mahadev-eventKhatauli.com"),
  title: {
    default: "Best Wedding Decorator in Khatauli | Mahadev Events | Luxury Stage & Venue Decoration",
    template: "%s | Mahadev Events Khatauli",
  },
  description: "Transform your special day with Mahadev Events, the best wedding decorator in Khatauli. We specialize in luxury stage decoration, floral mandaps, theme-based venue styling, and elegant entrance decor to make your wedding unforgettable.",
  keywords: "best wedding decorator in khatauli, wedding stage decoration khatauli, luxury wedding venue decor khatauli, floral mandap decoration, marriage decorator khatauli, mahadev events khatauli, wedding event planner khatauli",
  alternates: {
    canonical: "https://mahadev-eventKhatauli.com",
  },
  icons: {
    icon: "/images/website/logo2.png",
  },
  openGraph: {
    title: "Best Wedding Decorator in Khatauli | Mahadev Events",
    description: "Luxury wedding stage and venue decoration services in Khatauli. We turn your dream wedding into reality with stunning floral and theme decorations.",
    url: "https://mahadev-eventKhatauli.com",
    siteName: "Mahadev Events Khatauli",
    images: [
      {
        url: "/images/website/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Wedding Decorator in Khatauli | Mahadev Events",
    description: "Premium wedding stage, floral, and venue decoration services in Khatauli.",
    images: ["/images/website/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.className} flex flex-col min-h-screen bg-white`}>
        <Navbar />
        <main className="flex-1 w-full pt-16">{children}</main>
        <CtaSection />
        <Analytics />
        <JsonLd />
      </body>
    </html>
  );
}