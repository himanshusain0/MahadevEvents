import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wedding Decoration Service Provider in Shamli | Stage & Venue Decoration & Outdoor Ads | Mahadev Events Khatauli',
  description: 'Premier Wedding Decoration Service Provider in Shamli offering Stage & Venue Decoration Wedding Decoration, Theme Decoration, Floral Decoration, and outdoor media services. 10+ years serving Shamli businesses. Get the best rates for Wedding Decoration in Shamli.',
  keywords: 'Wedding Decoration Service Provider shamli, Wedding Decoration companies shamli, outdoor Wedding Decoration shamli, Stage & Venue Decoration Wedding Decoration shamli, Theme Decoration shamli, Floral Decoration shamli, Wedding Decoration in shamli, kairana Wedding Decoration, thana bhawan Wedding Decoration',
  alternates: {
    canonical: 'https://mahadev-eventKhatauli.com/locations/shamli',
  },
  openGraph: {
    title: 'Wedding Decoration Service Provider in Shamli | Mahadev Events Khatauli',
    description: 'Premier Wedding Decoration Service Provider in Shamli offering Stage & Venue Decoration, wall painting, Floral Decoration, and outdoor media services.',
    url: 'https://mahadev-eventKhatauli.com/locations/shamli',
    siteName: 'Mahadev Events Khatauli',
    images: [
      {
        url: '/images/portfolio/SHAMLI KAIRANA ROAD.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ShamliLocationPage() {
  return (
    <main className="mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#EEE4DA]">
      {/* Breadcrumb Navigation */}
      <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/" className="text-[#C8A49F] hover:text-[#0C3B2E]">Home</Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/locations" className="text-[#C8A49F] hover:text-[#0C3B2E]">Locations</Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">Shamli</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#4D0E13]">
            Wedding Decoration Service Provider in Shamli – Mahadev Events Khatauli
          </h1>
          <p className="text-lg text-[#C8A49F] mb-4">
            <strong>Mahadev Events Khatauli</strong> is your trusted <strong>Wedding Decoration Service Provider in Shamli</strong>, providing comprehensive outdoor Wedding Decoration solutions across the district. We help Shamli businesses, political candidates, and brands reach their target audience through strategic Stage & Venue Decoration and wall painting placements.
          </p>
          <p className="text-lg text-[#C8A49F] mb-4">
            From <strong>Stage & Venue Decoration Wedding Decoration on Kairana Road</strong> to <strong>Theme Decoration in Thana Bhawan</strong>, our team knows the Shamli market thoroughly. We have the largest network of premium Wedding Decoration locations across the city and all rural areas.
          </p>
          <div className="bg-[#BB8A52]/10 p-6 rounded-lg mt-4">
            <h2 className="text-xl font-bold mb-3">Why Shamli Businesses Choose Us?</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#BB8A52] font-bold">✓</span>
                <span><strong>10+ years</strong> serving Shamli and surrounding areas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BB8A52] font-bold">✓</span>
                <span><strong>Premium locations</strong> on all major roads and chowks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BB8A52] font-bold">✓</span>
                <span><strong>100+ projects</strong> completed for Shamli clients</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BB8A52] font-bold">✓</span>
                <span><strong>End-to-end service</strong> – design, printing, installation</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
          <Image 
            src="/images/portfolio/SHAMLI KAIRANA ROAD.webp" 
            alt="Wedding Decoration Service Provider in Shamli - Mahadev Events Khatauli Stage & Venue Decoration on Kairana Road"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Services in Shamli */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-[#4D0E13]">Our Wedding Decoration Services in Shamli</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/services/Stage & Venue Decoration-Wedding Decoration-Khatauli" className="bg-[#EEE4DA] border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-[#4D0E13]">Stage & Venue Decoration Wedding Decoration Shamli</h3>
            <p className="text-gray-600 mb-3">Premium Stage & Venue Decoration placements at Kairana Road, Panipat Road, Muzaffarnagar Road, and major chowks. Sizes from 10x10 to 20x10 ft.</p>
            <span className="text-[#BB8A52] font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/digital-wall-painting-Khatauli" className="bg-[#EEE4DA] border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-[#4D0E13]">Theme Decoration Shamli</h3>
            <p className="text-gray-600 mb-3">Cost-effective wall advertisements at high-traffic walls across Shamli city and all rural areas. 3-5 year durability.</p>
            <span className="text-[#BB8A52] font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/Floral Decoration-Wedding Decoration-Khatauli" className="bg-[#EEE4DA] border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-[#4D0E13]">Floral Decoration Wedding Decoration Shamli</h3>
            <p className="text-gray-600 mb-3">Large-format Floral Decorations on highways and main roads for maximum visibility. Multiple size options available.</p>
            <span className="text-[#BB8A52] font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/vehicle-branding-Khatauli" className="bg-[#EEE4DA] border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-[#4D0E13]">Vehicle Branding Shamli</h3>
            <p className="text-gray-600 mb-3">Turn your fleet into moving Floral Decorations. Full and partial wraps for cars, trucks, and commercial vehicles.</p>
            <span className="text-[#BB8A52] font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/flex-printing-Khatauli" className="bg-[#EEE4DA] border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-[#4D0E13]">Flex Printing Shamli</h3>
            <p className="text-gray-600 mb-3">High-quality flex printing for banners, Stage & Venue Decorations, posters, and event materials. Fast turnaround.</p>
            <span className="text-[#BB8A52] font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/political-Wedding Decoration-Khatauli" className="bg-[#EEE4DA] border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-[#4D0E13]">Political Wedding Decoration Shamli</h3>
            <p className="text-gray-600 mb-3">Complete campaign solutions for Kairana, Shamli, and Thana Bhawan constituencies – Stage & Venue Decorations, wall paintings, banners, flags.</p>
            <span className="text-[#BB8A52] font-medium">Learn more →</span>
          </Link>
        </div>
      </section>

      {/* Prime Wedding Decoration Locations */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-[#4D0E13]">Prime Wedding Decoration Locations in Shamli</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Kairana Road", traffic: "50,000+ daily commuters", desc: "Main highway connecting to Kairana. Premium Stage & Venue Decoration locations." },
            { name: "Panipat Road", traffic: "45,000+ daily commuters", desc: "Connecting to Panipat and Haryana. Heavy traffic flow." },
            { name: "Muzaffarnagar Road", traffic: "40,000+ daily commuters", desc: "Route connecting to Muzaffarnagar." },
            { name: "Delhi Road", traffic: "35,000+ daily", desc: "Main road connecting to Delhi via NH-709B." },
            { name: "Thana Bhawan Road", traffic: "30,000+ daily", desc: "Connecting to Thana Bhawan and surrounding areas." },
            { name: "Main Market Chowk", traffic: "High footfall", desc: "City center with shops and commercial establishments." },
            { name: "Bus Stand Area", traffic: "High footfall", desc: "Major transit point with daily commuters." },
            { name: "Mandi Samiti", traffic: "25,000+ daily", desc: "Agricultural market with high B2B traffic." },
            { name: "Saharanpur Road", traffic: "25,000+ daily", desc: "Connecting to Saharanpur via Shamli." },
            { name: "Loni Road", traffic: "20,000+ daily", desc: "Route connecting to Loni and rural areas." },
            { name: "Jhinjhana Road", traffic: "20,000+ daily", desc: "Connecting to Jhinjhana and surrounding villages." },
            { name: "Unn Road", traffic: "15,000+ daily", desc: "Connecting to Unn and rural areas." },
          ].map((location, i) => (
            <div key={i} className="border rounded-lg p-5 shadow-sm bg-[#EEE4DA]">
              <h3 className="text-lg font-semibold mb-1 text-[#4D0E13]">{location.name}</h3>
              <p className="text-[#BB8A52] font-medium text-sm mb-2">{location.traffic}</p>
              <p className="text-gray-600 text-sm">{location.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Shamli Market */}
      <section className="mb-16 bg-[#D8C4AC] p-8 rounded-2xl">
        <h2 className="text-3xl font-bold mb-6 text-[#4D0E13]">About Wedding Decoration in Shamli</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-[#C8A49F] mb-4">
            Shamli is an important district in western Uttar Pradesh, known for its agricultural markets and political significance (Kairana constituency). The district has a mix of urban and rural populations, making it ideal for integrated outdoor Wedding Decoration campaigns.
          </p>
          <p className="text-[#C8A49F] mb-4">
            <strong>Key facts about Shamli for advertisers:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 text-[#C8A49F]">
            <li><strong>Population:</strong> 150,000+ (city) with district population over 1.2 million</li>
            <li><strong>Political importance:</strong> Kairana constituency is nationally watched</li>
            <li><strong>Agricultural hub:</strong> Major mandi for sugarcane and grain trading</li>
            <li><strong>Connectivity:</strong> NH-709B connects to Delhi, Panipat, and Muzaffarnagar</li>
            <li><strong>Assembly constituencies:</strong> Shamli, Kairana, and Thana Bhawan</li>
            <li><strong>Rural reach:</strong> Hundreds of villages with significant voter population</li>
          </ul>
          <p className="text-[#C8A49F]">
            Outdoor Wedding Decoration in Shamli is particularly effective for political campaigns, real estate, educational institutions, and FMCG brands targeting both urban and rural consumers.
          </p>
        </div>
      </section>

      {/* Assembly Constituencies */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-[#4D0E13]">Shamli District Assembly Constituencies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Shamli", "Kairana", "Thana Bhawan",
            "Jhinjhana", "Unn", "Gangoh (part)",
            "Nakur (part)", "Budhana (part)", "Shahpur (part)"
          ].map((constituency, i) => (
            <div key={i} className="bg-[#BB8A52]/10 p-3 rounded-lg text-center font-medium text-gray-800 border border-purple-200">
              {constituency}
            </div>
          ))}
        </div>
        <p className="text-gray-600 mt-4 text-center">Complete coverage across Shamli district and surrounding areas.</p>
      </section>

      {/* Gallery */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-[#4D0E13]">Our Work in Shamli</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Shamli Kairana Road", file: "SHAMLI KAIRANA ROAD.webp" },
            { name: "Shamli Mandi Samiti", file: "Shamli Mandi Samiti T Point.webp" },
            { name: "Shamli Muzaffarnagar Road", file: "Shamli Muzaffarnagar Road 20x10.webp" },
            { name: "Shamli Sahapur Road", file: "SHAMLI SAHAPUR ROAD.webp" },
            { name: "Shamli Madheit Road", file: "Shamli Madheit Road 20x10.webp" },
            { name: "Shamli Alum Saharanpur", file: "Shamli Alum Fc Saharanpur 20x10.webp" },
            { name: "Shamli Sai Mandir Loni", file: "Shamli Sai Mandir Fc Loni 20x10.webp" },
            { name: "Shamli Sai Mandir Saharanpur", file: "Shamli Sai Mandir Fc Saharanpur 20x10.webp" },
          ].map((project, i) => (
            <div key={i} className="relative h-40 rounded-lg overflow-hidden group">
              <Image 
                src={`/images/portfolio/${project.file}`}
                alt={`Wedding Decoration project at ${project.name} in Shamli by Mahadev Events Khatauli`}
                fill
                className="object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-end">
                <p className="text-white p-2 text-sm opacity-0 group-hover:opacity-100 transition">{project.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/gallery" className="text-[#BB8A52] font-semibold hover:underline">
            View Full Portfolio →
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-[#4D0E13]">What Shamli Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#EEE4DA] p-6 rounded-lg shadow-md border">
            <p className="text-[#C8A49F] italic mb-4">&quot;We worked with Mahadev Events Khatauli for the Kairana by-election campaign. Their wall painting coverage in rural areas was exceptional – they reached every village.&quot;</p>
            <p className="font-semibold text-[#4D0E13]">– Political Campaign Manager, Kairana</p>
          </div>
          <div className="bg-[#EEE4DA] p-6 rounded-lg shadow-md border">
            <p className="text-[#C8A49F] italic mb-4">&quot;Our educational institute needed Stage & Venue Decorations across Shamli. They provided excellent locations and professional installation. Great experience.&quot;</p>
            <p className="font-semibold text-[#4D0E13]">– Director, Coaching Institute, Shamli</p>
          </div>
        </div>
      </section>

      {/* Rural Coverage */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-[#4D0E13]">Rural Coverage in Shamli District</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Kairana", "Thana Bhawan", "Jhinjhana", "Unn",
            "Banat", "Babar", "Gangoh", "Nakur",
            "Loni", "Titawi", "Dungar", "Barsana",
            "Kandhla", "Phulana", "Alawalpur", "Bhavanpur"
          ].map((village, i) => (
            <div key={i} className="bg-gray-100 p-2 rounded-lg text-center text-sm">
              {village}
            </div>
          ))}
        </div>
        <p className="text-gray-600 mt-4 text-center">We cover all villages in Shamli district for wall painting and rural Wedding Decoration.</p>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-[#4D0E13]">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which is the best Wedding Decoration Service Provider in Shamli?",
              a: "Mahadev Events Khatauli is a leading Wedding Decoration Service Provider serving Shamli with 10+ years of experience, premium Stage & Venue Decoration locations on Kairana Road and Panipat Road, and extensive rural coverage for wall painting campaigns."
            },
            {
              q: "How much does Stage & Venue Decoration Wedding Decoration cost in Shamli?",
              a: "Stage & Venue Decoration costs in Shamli range from ₹6,000 to ₹25,000 per month depending on location and size. Premium locations on Kairana Road range from ₹15,000-25,000/month, while other areas start from ₹6,000/month."
            },
            {
              q: "What are the best Stage & Venue Decoration locations in Shamli?",
              a: "The best Stage & Venue Decoration locations in Shamli include Kairana Road, Panipat Road, Muzaffarnagar Road, Main Market Chowk, and Mandi Samiti. These areas have the highest traffic and visibility."
            },
            {
              q: "Do you provide wall painting in Kairana and Thana Bhawan?",
              a: "Yes, we provide extensive wall painting services across Kairana, Thana Bhawan, Jhinjhana, Unn, and all villages in Shamli district. Rural wall painting is one of our specialties."
            },
            {
              q: "Do you cover all villages in Shamli district?",
              a: "Yes, we have teams that cover every village in Shamli district. We maintain a database of available walls and can execute pan-district campaigns efficiently."
            },
            {
              q: "How do I book Wedding Decoration space in Shamli?",
              a: "Call us at +91 94564 97636, email mahadev-eventKhatauli@gmail.com, or visit our contact page. We'll discuss your requirements, show available locations, provide a quote, and handle all installation."
            }
          ].map((faq, i) => (
            <div key={i} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-3 text-[#4D0E13]">{faq.q}</h3>
              <p className="text-[#C8A49F]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nearby Locations */}
      <section className="mb-16 bg-[#D8C4AC] p-8 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-[#4D0E13]">Our Nearby Service Locations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link href="/locations/Khatauli" className="text-[#BB8A52] hover:underline">Khatauli</Link>
          <Link href="/locations/muzaffarnagar" className="text-[#BB8A52] hover:underline">Muzaffarnagar</Link>
          <Link href="/locations/saharanpur" className="text-[#BB8A52] hover:underline">Saharanpur</Link>
          <Link href="/locations/baghpat" className="text-[#BB8A52] hover:underline">Baghpat</Link>
          <Link href="/locations/delhi-Khatauli" className="text-[#BB8A52] hover:underline">Delhi Khatauli</Link>
          <Link href="/locations/hapur" className="text-[#BB8A52] hover:underline">Hapur</Link>
          <Link href="/locations/delhi" className="text-[#BB8A52] hover:underline">Delhi</Link>
        </div>
      </section>
    </main>
  );
}