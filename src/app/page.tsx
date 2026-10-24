// src/app/page.tsx
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesPreview from "@/components/ServicesPreview";
import PortfolioPreview from "@/components/PortfolioPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesPreview />
      {/* <PortfolioPreview /> */}
    </>
  );
}