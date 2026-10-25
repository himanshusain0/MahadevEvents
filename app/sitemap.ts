import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const b = "https://mahadev-events.example";
  return ["", "/work", "/services", "/contact"].map((p) => ({ url: b + p }));
}
