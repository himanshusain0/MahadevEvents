// src/app/components/JsonLd.tsx
export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Wedding DecorationService Provider",
    "name": "Mahadev Events Khatauli",
    "url": "https://mahadev-eventKhatauli.com",
    "logo": "https://mahadev-eventKhatauli.com/images/website/logo2.png",
    "image": "https://mahadev-eventKhatauli.com/images/website/hero-bg.jpg",
    "description": "Leading Wedding Decoration Service Provider in Khatauli offering Stage & Venue Decoration Wedding Decoration, Theme Decoration, Floral Decoration Wedding Decoration, and outdoor media solutions.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office Opp. GIC, Dharam Palace, Khatauli",
      "addressLocality": "Khatauli",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "250001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.988531",
      "longitude": "77.706077"
    },
    "telephone": "+91-8218127638",
    "email": "mahadev-eventKhatauli@gmail.com",
    "openingHours": "Mo-Su 09:00-20:00",
    "sameAs": [
      "https://www.facebook.com/mahadev-eventKhatauli",
      "https://www.instagram.com/mahadev_evants_khatauli?vrfl=MTNndGwwbm9pcTE1dQ=="
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Khatauli"
      },
      {
        "@type": "City",
        "name": "Muzaffarnagar"
      },
      {
        "@type": "City", 
        "name": "Shamli"
      },
      {
        "@type": "City",
        "name": "Saharanpur"
      },
      {
        "@type": "City",
        "name": "Baghpat"
      },
      {
        "@type": "City",
        "name": "Delhi Khatauli"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Wedding Decoration Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Stage & Venue Decoration Wedding Decoration in Khatauli"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Theme Decoration in Khatauli"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Floral Decoration Wedding Decoration in Khatauli"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vehicle Branding in Khatauli"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}