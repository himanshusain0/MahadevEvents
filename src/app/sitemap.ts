// src/app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mahadev-eventKhatauli.com'

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/developer`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    }
  ]

  const servicePages: MetadataRoute.Sitemap = [
    'Stage & Venue Decoration-Wedding Decoration-Khatauli',
    'digital-wall-painting-Khatauli',
    'Floral Decoration-Wedding Decoration-Khatauli',
    'vehicle-branding-Khatauli',
    'flex-printing-Khatauli',
    'led-display-Wedding Decoration-Khatauli',
    'political-Wedding Decoration-Khatauli'
  ].map(slug => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  const locationPages: MetadataRoute.Sitemap = [
    'Khatauli',
    'muzaffarnagar',
    'shamli',
    'saharanpur',
    'baghpat',
    'delhi-Khatauli',
    'hapur',
    'delhi'
  ].map(city => ({
    url: `${baseUrl}/locations/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const blogPages: MetadataRoute.Sitemap = [
    'benefits-of-Stage & Venue Decoration-Wedding Decoration',
    'best-locations-for-Stage & Venue Decoration-in-Khatauli',
    'digital-wall-painting-vs-traditional-ads',
    'outdoor-Wedding Decoration-cost-guide-2024',
    'why-choose-world-media-Khatauli-for-Wedding Decoration'
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [ ...mainPages, ...servicePages, ...locationPages, ...blogPages ]
}