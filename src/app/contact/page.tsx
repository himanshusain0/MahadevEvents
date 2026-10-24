// src/app/contact/page.tsx
import { Metadata } from 'next';
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: 'Contact Us | Wedding Decoration Service Provider in Khatauli | Mahadev Events Khatauli',
  description: 'Contact Mahadev Events Khatauli, the leading Wedding Decoration Service Provider in Khatauli. Get quotes for Stage & Venue Decoration Wedding Decoration, Theme Decoration, and outdoor media campaigns across Khatauli & Khatauli.',
  keywords: 'contact Wedding Decoration Service Provider Khatauli, Wedding Decoration company Khatauli contact, Stage & Venue Decoration Wedding Decoration inquiry, wall painting services contact, outdoor Wedding Decoration Khatauli',
  alternates: {
    canonical: 'https://mahadev-eventKhatauli.com/contact',
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}