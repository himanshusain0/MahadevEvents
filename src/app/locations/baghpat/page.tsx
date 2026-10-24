import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wedding Decoration Service Provider in Baghpat | Stage & Venue Decoration & Outdoor Ads | Mahadev Events Khatauli',
  description: 'Premier Wedding Decoration Service Provider in Baghpat offering Stage & Venue Decoration Wedding Decoration, Theme Decoration, Floral Decoration, and outdoor media services. 10+ years serving Baghpat businesses. Get the best rates for Wedding Decoration in Baghpat.',
  keywords: 'Wedding Decoration Service Provider baghpat, Wedding Decoration companies baghpat, outdoor Wedding Decoration baghpat, Stage & Venue Decoration Wedding Decoration baghpat, Theme Decoration baghpat, Floral Decoration baghpat, Wedding Decoration in baghpat, baraut Wedding Decoration, chaprauli Wedding Decoration',
  alternates: {
    canonical: 'https://mahadev-eventKhatauli.com/locations/baghpat',
  },
  openGraph: {
    title: 'Wedding Decoration Service Provider in Baghpat | Mahadev Events Khatauli',
    description: 'Premier Wedding Decoration Service Provider in Baghpat offering Stage & Venue Decoration, wall painting, Floral Decoration, and outdoor media services.',
    url: 'https://mahadev-eventKhatauli.com/locations/baghpat',
    siteName: 'Mahadev Events Khatauli',
    images: [
      {
        url: '/images/portfolio/Baghra Bus Stand.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function BaghpatLocationPage() {
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
              <span className="text-gray-500">Baghpat</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Wedding Decoration Service Provider in Baghpat – Mahadev Events Khatauli
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Mahadev Events Khatauli</strong> is your trusted <strong>Wedding Decoration Service Provider in Baghpat</strong>, providing comprehensive outdoor Wedding Decoration solutions across the district. We help Baghpat businesses, brands, and political candidates reach their target audience through strategic Stage & Venue Decoration and wall painting placements.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            From <strong>Stage & Venue Decoration Wedding Decoration on Khatauli Road</strong> to <strong>Theme Decoration in Baraut</strong>, our team knows the Baghpat market thoroughly. We have the largest network of premium Wedding Decoration locations across the district.
          </p>
          <div className="bg-teal-50 p-6 rounded-lg mt-4">
            <h2 className="text-xl font-bold mb-3">Why Baghpat Businesses Choose Us?</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">✓</span>
                <span><strong>10+ years</strong> serving Baghpat and surrounding areas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">✓</span>
                <span><strong>Premium locations</strong> on all major roads and chowks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">✓</span>
                <span><strong>100+ projects</strong> completed for Baghpat clients</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">✓</span>
                <span><strong>End-to-end service</strong> – design, printing, installation</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
          <Image 
            src="/images/portfolio/Baghra Bus Stand.webp" 
            alt="Wedding Decoration Service Provider in Baghpat - Mahadev Events Khatauli Stage & Venue Decoration at Baghra Bus Stand"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Services in Baghpat */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Wedding Decoration Services in Baghpat</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/services/Stage & Venue Decoration-Wedding Decoration-Khatauli" className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Stage & Venue Decoration Wedding Decoration Baghpat</h3>
            <p className="text-gray-600 mb-3">Premium Stage & Venue Decoration placements at Khatauli Road, Delhi Road, Baraut Road, and major chowks. Sizes from 10x10 to 20x10 ft.</p>
            <span className="text-teal-600 font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/digital-wall-painting-Khatauli" className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Theme Decoration Baghpat</h3>
            <p className="text-gray-600 mb-3">Cost-effective wall advertisements at high-traffic walls across Baghpat city and all rural areas. 3-5 year durability.</p>
            <span className="text-teal-600 font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/Floral Decoration-Wedding Decoration-Khatauli" className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Floral Decoration Wedding Decoration Baghpat</h3>
            <p className="text-gray-600 mb-3">Large-format Floral Decorations on highways and main roads for maximum visibility. Multiple size options available.</p>
            <span className="text-teal-600 font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/vehicle-branding-Khatauli" className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Vehicle Branding Baghpat</h3>
            <p className="text-gray-600 mb-3">Turn your fleet into moving Floral Decorations. Full and partial wraps for cars, trucks, and commercial vehicles.</p>
            <span className="text-teal-600 font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/flex-printing-Khatauli" className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Flex Printing Baghpat</h3>
            <p className="text-gray-600 mb-3">High-quality flex printing for banners, Stage & Venue Decorations, posters, and event materials. Fast turnaround.</p>
            <span className="text-teal-600 font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/political-Wedding Decoration-Khatauli" className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Political Wedding Decoration Baghpat</h3>
            <p className="text-gray-600 mb-3">Complete campaign solutions for Baghpat, Baraut, and Chaprauli constituencies – Stage & Venue Decorations, wall paintings, banners.</p>
            <span className="text-teal-600 font-medium">Learn more →</span>
          </Link>
        </div>
      </section>

      {/* Prime Wedding Decoration Locations */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Prime Wedding Decoration Locations in Baghpat</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Khatauli Road", traffic: "50,000+ daily commuters", desc: "Main highway connecting to Khatauli. Premium Stage & Venue Decoration locations." },
            { name: "Delhi Road", traffic: "45,000+ daily commuters", desc: "NH-334B connecting to Delhi via Gannaur." },
            { name: "Baraut Road", traffic: "40,000+ daily commuters", desc: "Route connecting to Baraut and surrounding areas." },
            { name: "Baghpat-Khatauli Highway", traffic: "35,000+ daily", desc: "Main arterial road with heavy traffic." },
            { name: "Baghpat Cross", traffic: "30,000+ daily", desc: "Major intersection with multiple routes." },
            { name: "Bus Stand Area", traffic: "High footfall", desc: "Major transit point with daily commuters." },
            { name: "Main Market", traffic: "High footfall", desc: "City center with shops and commercial establishments." },
            { name: "Chaprauli Road", traffic: "25,000+ daily", desc: "Connecting to Chaprauli and rural areas." },
            { name: "Khekra Road", traffic: "25,000+ daily", desc: "Route connecting to Khekra and villages." },
            { name: "Baghpat-Muzaffarnagar Road", traffic: "20,000+ daily", desc: "Connecting to Muzaffarnagar via rural areas." },
            { name: "Aminagar Sarai", traffic: "15,000+ daily", desc: "Important rural market center." },
            { name: "Binauli", traffic: "10,000+ daily", desc: "Town on Baghpat-Khatauli route." },
          ].map((location, i) => (
            <div key={i} className="border rounded-lg p-5 shadow-sm bg-white">
              <h3 className="text-lg font-semibold mb-1 text-gray-900">{location.name}</h3>
              <p className="text-teal-600 font-medium text-sm mb-2">{location.traffic}</p>
              <p className="text-gray-600 text-sm">{location.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Baghpat Market */}
      <section className="mb-16 bg-gray-50 p-8 rounded-2xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">About Wedding Decoration in Baghpat</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-4">
            Baghpat is an important district in western Uttar Pradesh, known for its agricultural economy and strategic location between Khatauli and Delhi. The district has significant rural population, making wall painting particularly effective.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Key facts about Baghpat for advertisers:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Population:</strong> 100,000+ (city) with district population over 1.3 million</li>
            <li><strong>Agricultural hub:</strong> Major sugarcane and grain producing region</li>
            <li><strong>Assembly constituencies:</strong> Baghpat, Baraut, Chaprauli</li>
            <li><strong>Connectivity:</strong> NH-334B connects to Delhi, Khatauli via Gannaur</li>
            <li><strong>Rural reach:</strong> Hundreds of villages with significant voter population</li>
            <li><strong>Industrial areas:</strong> Small-scale manufacturing and agro-based industries</li>
          </ul>
          <p className="text-gray-700">
            Outdoor Wedding Decoration in Baghpat is particularly effective for real estate, educational institutions, political campaigns, and FMCG brands targeting both urban and rural consumers.
          </p>
        </div>
      </section>

      {/* Assembly Constituencies */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Baghpat District Assembly Constituencies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Baghpat", "Baraut", "Chaprauli",
            "Khekra", "Binauli", "Aminagar Sarai",
            "Pilkhuwa", "Gannaur", "Baghpat Rural",
            "Khatauli South (part)", "Muzaffarnagar (part)", "Ghaziabad (part)"
          ].map((constituency, i) => (
            <div key={i} className="bg-teal-50 p-3 rounded-lg text-center font-medium text-gray-800 border border-teal-200">
              {constituency}
            </div>
          ))}
        </div>
        <p className="text-gray-600 mt-4 text-center">Complete coverage across Baghpat district and surrounding areas.</p>
      </section>

      {/* Gallery */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Work in Baghpat</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Baghra Bus Stand", file: "Baghra Bus Stand.webp" },
            { name: "Bhasuma Main Road", file: "Bhasuma Main Road.webp" },
            { name: "Khatauli Sardhana", file: "Khatauli Sardhana.webp" },
            { name: "Muradpura Bus Stand", file: "Muradpura Bus Stand.webp" },
            { name: "Budhana Khatuli Road", file: "Budhana Khatuli Road.webp" },
            { name: "Shahpur Main Road", file: "SHAHPUR MAIN ROAD.webp" },
            { name: "Mirapur Bypass", file: "Mirapur Bypass.webp" },
            { name: "Chutmalpur", file: "Chutmalpur Facing Rorkee (Delhi Rorkee Dehradun Highway).webp" },
          ].map((project, i) => (
            <div key={i} className="relative h-40 rounded-lg overflow-hidden group">
              <Image 
                src={`/images/portfolio/${project.file}`}
                alt={`Wedding Decoration project at ${project.name} near Baghpat by Mahadev Events Khatauli`}
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
          <Link href="/gallery" className="text-teal-600 font-semibold hover:underline">
            View Full Portfolio →
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">What Baghpat Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <p className="text-gray-700 italic mb-4">&quot;Mahadev Events Khatauli helped us with Stage & Venue Decorations in Baghpat and Baraut for our college admission campaign. Great locations and professional team.&quot;</p>
            <p className="font-semibold text-gray-900">– Educational Institute, Baraut</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <p className="text-gray-700 italic mb-4">&quot;We needed wall painting across Baghpat rural areas for a government awareness campaign. They covered 50+ villages efficiently. Highly recommended.&quot;</p>
            <p className="font-semibold text-gray-900">– NGO Coordinator, Baghpat</p>
          </div>
        </div>
      </section>

      {/* Rural Coverage */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Rural Coverage in Baghpat District</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Baraut", "Chaprauli", "Khekra", "Binauli",
            "Aminagar Sarai", "Pilkhuwa", "Gannaur", "Baghpat Rural",
            "Doghat", "Ramala", "Syana", "Khandrawali",
            "Kakroli", "Malakpur", "Tatiri", "Asara"
          ].map((village, i) => (
            <div key={i} className="bg-gray-100 p-2 rounded-lg text-center text-sm">
              {village}
            </div>
          ))}
        </div>
        <p className="text-gray-600 mt-4 text-center">We cover all villages in Baghpat district for wall painting and rural Wedding Decoration.</p>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which is the best Wedding Decoration Service Provider in Baghpat?",
              a: "Mahadev Events Khatauli is a leading Wedding Decoration Service Provider serving Baghpat with 10+ years of experience, premium Stage & Venue Decoration locations on Khatauli Road and Delhi Road, and extensive rural coverage for wall painting campaigns across the district."
            },
            {
              q: "How much does Stage & Venue Decoration Wedding Decoration cost in Baghpat?",
              a: "Stage & Venue Decoration costs in Baghpat range from ₹6,000 to ₹20,000 per month depending on location and size. Premium locations on Khatauli Road and Delhi Road range from ₹12,000-20,000/month, while other areas start from ₹6,000/month."
            },
            {
              q: "What are the best Stage & Venue Decoration locations in Baghpat?",
              a: "The best Stage & Venue Decoration locations in Baghpat include Khatauli Road, Delhi Road, Baraut Road, Baghpat Cross, and Bus Stand area. These areas have the highest traffic and visibility."
            },
            {
              q: "Do you provide wall painting in Baraut, Chaprauli, and Khekra?",
              a: "Yes, we provide extensive wall painting services across Baraut, Chaprauli, Khekra, and all villages in Baghpat district. Rural wall painting is one of our specialties for political and brand campaigns."
            },
            {
              q: "Do you cover all villages in Baghpat district?",
              a: "Yes, we have teams that cover every village in Baghpat district. We maintain a database of available walls and can execute pan-district campaigns efficiently."
            },
            {
              q: "How do I book Wedding Decoration space in Baghpat?",
              a: "Call us at +91 94564 97636, email mahadev-eventKhatauli@gmail.com, or visit our contact page. We'll discuss your requirements, show available locations, provide a quote, and handle all installation."
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
          <Link href="/locations/Khatauli" className="text-teal-600 hover:underline">Khatauli</Link>
          <Link href="/locations/muzaffarnagar" className="text-teal-600 hover:underline">Muzaffarnagar</Link>
          <Link href="/locations/shamli" className="text-teal-600 hover:underline">Shamli</Link>
          <Link href="/locations/saharanpur" className="text-teal-600 hover:underline">Saharanpur</Link>
          <Link href="/locations/delhi-Khatauli" className="text-teal-600 hover:underline">Delhi Khatauli</Link>
          <Link href="/locations/hapur" className="text-teal-600 hover:underline">Hapur</Link>
          <Link href="/locations/delhi" className="text-teal-600 hover:underline">Delhi</Link>
        </div>
      </section>
    </main>
  );
}