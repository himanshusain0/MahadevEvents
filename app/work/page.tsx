import type { Metadata } from "next";
import { PageHead, WorkArchive, CTA } from "@/components/Site";

export const metadata: Metadata = {
  title: "Curated Work & Archive | Mahadev Events",
  description:
    "Explore our systematic archive of bespoke wedding stages, botanical entrances, sunny haldi setups, and illuminated home facades across Khatauli, Muzaffarnagar & Western UP.",
  alternates: { canonical: "/work" },
};

export default function Page() {
  return (
    <>
      <PageHead
        eyebrow="The Archive · 2014—Present"
        title={
          <>
            Moments we&apos;ve <em>dressed</em>
          </>
        }
        sub="A curated portfolio of bespoke wedding stages, floral gateways, vivid haldi courtyards, and grand facade transformations across Khatauli, Muzaffarnagar & Western UP."
      />
      <WorkArchive />
      <CTA />
    </>
  );
}
