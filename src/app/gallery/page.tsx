// src/app/gallery/page.tsx
import { Metadata } from 'next';
import PortfolioGallery from "@/components/PortfolioGallery";

export const metadata: Metadata = {
  title: 'Wedding Decoration Gallery | Stage & Venue Decoration & Wall Painting Projects in Khatauli',
  description: 'View our portfolio of successful Wedding Decoration projects in Khatauli & Khatauli. Real examples of Stage & Venue Decoration Wedding Decoration, Theme Decoration, Floral Decoration campaigns, and outdoor media installations.',
  keywords: 'Wedding Decoration gallery Khatauli, Stage & Venue Decoration projects Khatauli, wall painting portfolio, outdoor Wedding Decoration examples, Floral Decoration designs Khatauli',
  alternates: {
    canonical: 'https://mahadev-eventKhatauli.com/gallery',
  },
};

export default function GalleryPage() {
  return (
    <main>
      <PortfolioGallery />
    </main>
  );
}