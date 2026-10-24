// src/app/services/page.tsx
import { Metadata } from 'next';
import ServicesSection from "@/components/ServicesSection";

export const metadata: Metadata = {
  title: 'Wedding Decoration Services in Khatauli | Stage & Venue Decoration, Wall Painting & Outdoor Ads',
  description: 'Complete Wedding Decoration services in Khatauli including Stage & Venue Decoration Wedding Decoration, Theme Decoration, Floral Decoration Wedding Decoration, vehicle branding, flex printing, and LED display Wedding Decoration. 20+ years of experience.',
  keywords: 'Wedding Decoration services Khatauli, outdoor Wedding Decoration services, Stage & Venue Decoration services Khatauli, Theme Decoration Khatauli, Floral Decoration Wedding Decoration Khatauli, vehicle branding Khatauli, flex printing Khatauli, led display Wedding Decoration Khatauli',
  alternates: {
    canonical: 'https://mahadev-eventKhatauli.com/services',
  },
  openGraph: {
    title: 'Wedding Decoration Services in Khatauli | Mahadev Events Khatauli',
    description: 'Complete outdoor Wedding Decoration services in Khatauli & Khatauli. Stage & Venue Decoration, wall painting, Floral Decoration, vehicle branding.',
    url: 'https://mahadev-eventKhatauli.com/services',
    siteName: 'Mahadev Events Khatauli',
    images: [
      {
        url: '/images/website/services-og.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesSection />
    </main>
  );
}