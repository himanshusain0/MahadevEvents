// src/app/about/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | Wedding Decoration Services in Khatauli | Mahadev Events',
  description: 'Learn about Mahadev Events, Khatauli\'s premier wedding decoration service since 2013. Led by Himanshu Sain, we specialize in stunning floral arrangements, stage setups, and customized event designs.',
  keywords: 'about Mahadev Events, wedding decoration khatauli, himanshu sain khatauli, wedding event planner, decoration company history, event design experts',
  alternates: {
    canonical: 'https://mahadev-eventKhatauli.com/about',
  },
};

export default function AboutPage() {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Add schema markup for leadership */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "mainEntity": {
                "@type": "Organization",
                "name": "Mahadev Events",
                "founder": {
                  "@type": "Person",
                  "name": "Himanshu Sain",
                  "jobTitle": "Owner",
                  "description": "Expert in wedding decoration and event management"
                }
              }
            })
          }}
        />

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900">
          Mahadev Events – Premier Wedding Decoration Services in Khatauli
        </h1>

        <div className="prose prose-lg mx-auto text-gray-700">

          <p className="text-lg mb-6">
            With over 10 years of experience in the wedding decoration industry, <strong>Mahadev Events</strong> has established itself as a trusted provider of beautiful and creative wedding decoration services. Based in Saini Nagar, Khatauli M. Nagar, we specialize in transforming wedding venues into elegant and memorable spaces with stunning decorations, stage setups, floral arrangements, and customized event designs.
          </p>

          <p className="text-lg mb-6">
            Our team is dedicated to delivering high-quality decoration services that reflect each client&apos;s unique vision and make every celebration truly special. With a focus on creativity, attention to detail, and customer satisfaction, Mahadev Events strives to make every wedding a beautiful and unforgettable experience.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Our Specializations
          </h2>

          <p className="text-lg mb-6">
            Mahadev Events offers a wide range of decoration services tailored for weddings and special events. Our expertise includes:
          </p>

          <ul className="list-disc pl-6 mb-6 text-lg">
            <li>Complete Wedding Venue Decoration</li>
            <li>Elegant Stage Setups & Backdrops</li>
            <li>Fresh and Artificial Floral Arrangements</li>
            <li>Customized Theme-Based Event Designs</li>
            <li>Lighting and Ambience Enhancement</li>
            <li>Entrance and Mandap Decoration</li>
          </ul>

          <p className="text-lg mb-6">
            Whether you are planning a grand wedding or an intimate celebration, our experienced team ensures that every detail is perfect, reflecting the joy and significance of the occasion.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Why Choose Mahadev Events
          </h2>

          <p className="text-lg mb-6">
            Clients trust Mahadev Events because we blend traditional elegance with modern creativity. Our deep commitment to quality ensures that every decoration is executed with precision, using the finest materials to create a breathtaking atmosphere.
          </p>

          <p className="text-lg mb-6">
            Our focus on customer satisfaction and attention to detail makes us one of the most trusted event decorators in Khatauli and surrounding areas. From initial consultation to the final touch-up, we work closely with you to bring your dream wedding to life.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Ownership & Contact
          </h2>

          <p className="text-lg mb-6">
            Mahadev Events is owned and led by <strong>Himanshu Sain</strong>, who brings a passion for design and a commitment to excellence in event decoration. Under his guidance, the company has transformed countless venues into magical spaces.
          </p>

          <p className="text-lg mb-6">
            <strong>Owner:</strong> Himanshu Sain<br />
            <strong>Address:</strong> Saini Nagar, Khatauli M. Nagar
          </p>
        </div>
      </div>
    </main>
  );
}
