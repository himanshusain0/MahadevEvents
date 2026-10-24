import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wedding Decoration Service Provider in Muzaffarnagar | Stage & Venue Decoration & Outdoor Ads | Mahadev Events Khatauli',
  description: 'Premier Wedding Decoration Service Provider in Muzaffarnagar offering Stage & Venue Decoration Wedding Decoration, Theme Decoration, Floral Decoration, and outdoor media services. 10+ years serving Muzaffarnagar businesses. Get the best rates for Wedding Decoration in Muzaffarnagar.',
  keywords: 'Wedding Decoration Service Provider muzaffarnagar, Wedding Decoration companies muzaffarnagar, outdoor Wedding Decoration muzaffarnagar, Stage & Venue Decoration Wedding Decoration muzaffarnagar, Theme Decoration muzaffarnagar, Floral Decoration muzaffarnagar, Wedding Decoration in muzaffarnagar',
  alternates: {
    canonical: 'https://mahadev-eventKhatauli.com/locations/muzaffarnagar',
  },
  openGraph: {
    title: 'Wedding Decoration Service Provider in Muzaffarnagar | Mahadev Events Khatauli',
    description: 'Premier Wedding Decoration Service Provider in Muzaffarnagar offering Stage & Venue Decoration, wall painting, Floral Decoration, and outdoor media services.',
    url: 'https://mahadev-eventKhatauli.com/locations/muzaffarnagar',
    siteName: 'Mahadev Events Khatauli',
    images: [
      {
        url: '/images/portfolio/Muzaffarnagar Khatauli Road.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function MuzaffarnagarLocationPage() {
  return (
    <main className="mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      {/* Breadcrumb Navigation */}
      <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/locations" className="text-gray-700 hover:text-blue-600">Locations</Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">Muzaffarnagar</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Wedding Decoration Service Provider in Muzaffarnagar – Mahadev Events Khatauli
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Mahadev Events Khatauli</strong> is your trusted <strong>Wedding Decoration Service Provider in Muzaffarnagar</strong>, providing comprehensive outdoor Wedding Decoration solutions across the district. We help Muzaffarnagar businesses reach their target audience through strategic Stage & Venue Decoration, Floral Decoration, and wall painting placements.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            From <strong>Stage & Venue Decoration Wedding Decoration on Khatauli Road</strong> to <strong>Theme Decoration in New Mandi</strong>, our team knows the Muzaffarnagar market inside out. We have the largest network of premium Wedding Decoration locations across the city and surrounding areas.
          </p>
          <div className="bg-green-50 p-6 rounded-lg mt-4">
            <h2 className="text-xl font-bold mb-3">Why Muzaffarnagar Businesses Choose Us?</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>10+ years</strong> serving Muzaffarnagar businesses</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Premium locations</strong> on all major roads and chowks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>100+ projects</strong> completed for Muzaffarnagar clients</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>End-to-end service</strong> – design, printing, installation</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
          <Image 
            src="/images/portfolio/Muzaffarnagar Khatauli Road.webp" 
            alt="Wedding Decoration Service Provider in Muzaffarnagar - Mahadev Events Khatauli Stage & Venue Decoration on Khatauli Road"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Services in Muzaffarnagar */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Wedding Decoration Services in Muzaffarnagar</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/services/Stage & Venue Decoration-Wedding Decoration-Khatauli" className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Stage & Venue Decoration Wedding Decoration Muzaffarnagar</h3>
            <p className="text-gray-600 mb-3">Premium Stage & Venue Decoration placements at Khatauli Road, Roorkee Road, Shamli Road, and major chowks. Sizes from 10x10 to 40x20 ft.</p>
            <span className="text-green-600 font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/digital-wall-painting-Khatauli" className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Theme Decoration Muzaffarnagar</h3>
            <p className="text-gray-600 mb-3">Cost-effective wall advertisements at high-traffic walls across Muzaffarnagar city and rural areas. 3-5 year durability.</p>
            <span className="text-green-600 font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/Floral Decoration-Wedding Decoration-Khatauli" className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Floral Decoration Wedding Decoration Muzaffarnagar</h3>
            <p className="text-gray-600 mb-3">Large-format Floral Decorations on highways and main roads for maximum visibility. Multiple size options available.</p>
            <span className="text-green-600 font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/vehicle-branding-Khatauli" className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Vehicle Branding Muzaffarnagar</h3>
            <p className="text-gray-600 mb-3">Turn your fleet into moving Floral Decorations. Full and partial wraps for cars, trucks, buses, and commercial vehicles.</p>
            <span className="text-green-600 font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/flex-printing-Khatauli" className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Flex Printing Muzaffarnagar</h3>
            <p className="text-gray-600 mb-3">High-quality flex printing for banners, Stage & Venue Decorations, posters, and event materials. Fast turnaround, competitive rates.</p>
            <span className="text-green-600 font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/political-Wedding Decoration-Khatauli" className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Political Wedding Decoration Muzaffarnagar</h3>
            <p className="text-gray-600 mb-3">Complete campaign solutions for elections – Stage & Venue Decorations, wall paintings, banners, flags, and more.</p>
            <span className="text-green-600 font-medium">Learn more →</span>
          </Link>
        </div>
      </section>

      {/* Prime Wedding Decoration Locations */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Prime Wedding Decoration Locations in Muzaffarnagar</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Khatauli Road", traffic: "70,000+ daily commuters", desc: "Main highway connecting to Khatauli. Premium Stage & Venue Decoration locations." },
            { name: "Roorkee Road", traffic: "60,000+ daily commuters", desc: "Connecting to Roorkee and Haridwar. Heavy traffic flow." },
            { name: "Shamli Road", traffic: "50,000+ daily commuters", desc: "Route connecting to Shamli and beyond." },
            { name: "Delhi Road", traffic: "55,000+ daily", desc: "Main road connecting to Delhi via NH-58." },
            { name: "New Mandi", traffic: "High footfall", desc: "Commercial hub with shops, banks, and businesses." },
            { name: "Civil Lines", traffic: "40,000+ daily", desc: "Premium area with offices and commercial establishments." },
            { name: "Railway Road", traffic: "45,000+ daily", desc: "Near railway station, heavy commuter traffic." },
            { name: "Budhana Road", traffic: "35,000+ daily", desc: "Connecting to Budhana and rural areas." },
            { name: "Khatauli Road", traffic: "30,000+ daily", desc: "Route to Khatauli and surrounding areas." },
            { name: "Court Road", traffic: "30,000+ daily", desc: "Near district court, legal professionals traffic." },
            { name: "Bus Stand Area", traffic: "High footfall", desc: "Major transit point with daily commuters." },
            { name: "University Road", traffic: "25,000+ daily", desc: "Near educational institutions." },
          ].map((location, i) => (
            <div key={i} className="border rounded-lg p-5 shadow-sm bg-white">
              <h3 className="text-lg font-semibold mb-1 text-gray-900">{location.name}</h3>
              <p className="text-green-600 font-medium text-sm mb-2">{location.traffic}</p>
              <p className="text-gray-600 text-sm">{location.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Muzaffarnagar Market */}
      <section className="mb-16 bg-gray-50 p-8 rounded-2xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">About Wedding Decoration in Muzaffarnagar</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-4">
            Muzaffarnagar is a major city in western Uttar Pradesh with significant agricultural, industrial, and commercial importance. Its strategic location on the Delhi-Dehradun highway makes it a prime market for outdoor Wedding Decoration.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Key facts about Muzaffarnagar for advertisers:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Population:</strong> 500,000+ (city) with district population over 4 million</li>
            <li><strong>Commercial hub:</strong> New Mandi is one of the largest agricultural markets in UP</li>
            <li><strong>Industrial areas:</strong> Sugar, steel, paper, and manufacturing industries</li>
            <li><strong>Educational institutions:</strong> Multiple colleges and universities</li>
            <li><strong>Connectivity:</strong> NH-58 connects to Delhi, Khatauli, Haridwar, and Dehradun</li>
            <li><strong>Rural reach:</strong> Surrounded by hundreds of villages with significant voter population</li>
          </ul>
          <p className="text-gray-700">
            Outdoor Wedding Decoration in Muzaffarnagar reaches a diverse audience – from business owners and professionals to students and rural consumers. Strategic Stage & Venue Decoration placements on highways and wall paintings in rural areas offer excellent ROI.
          </p>
        </div>
      </section>

      {/* Assembly Constituencies */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Muzaffarnagar Assembly Constituencies We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Muzaffarnagar", "Budhana", "Charthawal", "Khatauli", "Meerapur",
            "Shamli", "Kairana", "Thana Bhawan", "Nakur", "Gangoh"
          ].map((constituency, i) => (
            <div key={i} className="bg-green-50 p-3 rounded-lg text-center font-medium text-gray-800 border border-green-200">
              {constituency}
            </div>
          ))}
        </div>
        <p className="text-gray-600 mt-4 text-center">Complete coverage across all assembly constituencies in Muzaffarnagar district and surrounding areas.</p>
      </section>

      {/* Gallery */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Work in Muzaffarnagar</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Muzaffarnagar Khatauli Road", file: "Muzaffarnagar Khatauli Road.webp" },
            { name: "Muzaffarnagar Roorkee Road", file: "Muzaffarnagar Rorkee Road.webp" },
            { name: "Muzaffarnagar Shamli Road", file: "Muzaffarnagar Shamli Road.webp" },
            { name: "Budhana Khatuli Road", file: "Budhana Khatuli Road.webp" },
            { name: "Shamli Kairana Road", file: "SHAMLI KAIRANA ROAD.webp" },
            { name: "Shamli Mandi Samiti", file: "Shamli Mandi Samiti T Point.webp" },
            { name: "Chutmalpur", file: "Chutmalpur Facing Rorkee (Delhi Rorkee Dehradun Highway).webp" },
            { name: "Mirapur Bypass", file: "Mirapur Bypass.webp" },
          ].map((project, i) => (
            <div key={i} className="relative h-40 rounded-lg overflow-hidden group">
              <Image 
                src={`/images/portfolio/${project.file}`}
                alt={`Wedding Decoration project at ${project.name} in Muzaffarnagar by Mahadev Events Khatauli`}
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
          <Link href="/gallery" className="text-green-600 font-semibold hover:underline">
            View Full Portfolio →
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">What Muzaffarnagar Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <p className="text-gray-700 italic mb-4">&quot;Mahadev Events Khatauli has been our Wedding Decoration partner for multiple election campaigns in Muzaffarnagar. Their Stage & Venue Decoration locations are strategic and their team delivers on time.&quot;</p>
            <p className="font-semibold text-gray-900">– Political Leader, Muzaffarnagar</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <p className="text-gray-700 italic mb-4">&quot;We needed wall painting across rural Muzaffarnagar for our product launch. They covered 50+ villages efficiently and the quality was excellent.&quot;</p>
            <p className="font-semibold text-gray-900">– FMCG Distributor, Muzaffarnagar</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which is the best Wedding Decoration Service Provider in Muzaffarnagar?",
              a: "Mahadev Events Khatauli is a leading Wedding Decoration Service Provider serving Muzaffarnagar with 10+ years of experience, premium Stage & Venue Decoration locations on all major roads, and a strong track record of successful campaigns for local businesses and political clients."
            },
            {
              q: "How much does Stage & Venue Decoration Wedding Decoration cost in Muzaffarnagar?",
              a: "Stage & Venue Decoration costs in Muzaffarnagar range from ₹8,000 to ₹35,000 per month depending on location and size. Premium locations on Khatauli Road and Roorkee Road range from ₹20,000-35,000/month, while other areas start from ₹8,000/month."
            },
            {
              q: "What are the best Stage & Venue Decoration locations in Muzaffarnagar?",
              a: "The best Stage & Venue Decoration locations in Muzaffarnagar include Khatauli Road, Roorkee Road, Shamli Road, Delhi Road, New Mandi Chowk, Civil Lines, and Railway Road. These areas have the highest traffic and visibility."
            },
            {
              q: "Do you provide wall painting services in rural Muzaffarnagar areas?",
              a: "Yes, we provide wall painting services across all rural areas of Muzaffarnagar district including Budhana, Khatauli, Shahpur, Purkazi, Jansath, and all villages. Rural wall painting is highly effective for political and FMCG campaigns."
            },
            {
              q: "Do you cover all assembly constituencies in Muzaffarnagar?",
              a: "Yes, we provide complete coverage across all assembly constituencies including Muzaffarnagar, Budhana, Charthawal, Khatauli, and Meerapur. We also serve Shamli, Kairana, and Thana Bhawan constituencies."
            },
            {
              q: "How do I book Wedding Decoration space in Muzaffarnagar?",
              a: "Simply call us at +91 94564 97636, email us at mahadev-eventKhatauli@gmail.com, or visit our contact page. We'll discuss your requirements, show you available locations, provide a quote, and handle everything from permits to installation."
            }
          ].map((faq, i) => (
            <div key={i} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{faq.q}</h3>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nearby Locations */}
      <section className="mb-16 bg-gray-50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Nearby Service Locations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link href="/locations/Khatauli" className="text-green-600 hover:underline">Khatauli</Link>
          <Link href="/locations/shamli" className="text-green-600 hover:underline">Shamli</Link>
          <Link href="/locations/saharanpur" className="text-green-600 hover:underline">Saharanpur</Link>
          <Link href="/locations/baghpat" className="text-green-600 hover:underline">Baghpat</Link>
          <Link href="/locations/delhi-Khatauli" className="text-green-600 hover:underline">Delhi Khatauli</Link>
          <Link href="/locations/hapur" className="text-green-600 hover:underline">Hapur</Link>
          <Link href="/locations/delhi" className="text-green-600 hover:underline">Delhi</Link>
        </div>
      </section>
    </main>
  );
}