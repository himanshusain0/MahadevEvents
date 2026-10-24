// src/app/robot.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://mahadev-eventKhatauli.com/sitemap.xml',
    host: 'https://mahadev-eventKhatauli.com',
  }
}