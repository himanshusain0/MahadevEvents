import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wedding Decoration Service Provider in Delhi Khatauli | Stage & Venue Decoration & Outdoor Ads | Mahadev Events Khatauli',
  description: 'Premier Wedding Decoration Service Provider in Delhi Khatauli offering Stage & Venue Decoration Wedding Decoration, Theme Decoration, Floral Decoration, and outdoor media services. 10+ years serving Khatauli businesses. Get the best rates for Wedding Decoration in Delhi Khatauli.',
  keywords: 'Wedding Decoration Service Provider delhi Khatauli, Wedding Decoration companies delhi Khatauli, outdoor Wedding Decoration delhi Khatauli, Stage & Venue Decoration Wedding Decoration delhi Khatauli, Theme Decoration delhi Khatauli, Floral Decoration delhi Khatauli, Wedding Decoration in delhi Khatauli, noida Wedding Decoration, ghaziabad Wedding Decoration, gurgaon Wedding Decoration',
  alternates: {
    canonical: 'https://mahadev-eventKhatauli.com/locations/delhi-Khatauli',
  },
  openGraph: {
    title: 'Wedding Decoration Service Provider in Delhi Khatauli | Mahadev Events Khatauli',
    description: 'Premier Wedding Decoration Service Provider in Delhi Khatauli offering Stage & Venue Decoration, wall painting, Floral Decoration, and outdoor media services.',
    url: 'https://mahadev-eventKhatauli.com/locations/delhi-Khatauli',
    siteName: 'Mahadev Events Khatauli',
    images: [
      {
        url: '/images/portfolio/Delhi Highway Stage & Venue Decoration.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function DelhiKhatauliLocationPage() {
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
              <span className="text-gray-500">Delhi Khatauli</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#4D0E13]">
            Wedding Decoration Service Provider in Delhi Khatauli – Mahadev Events Khatauli
          </h1>
          <p className="text-lg text-[#C8A49F] mb-4">
            <strong>Mahadev Events Khatauli</strong> is your trusted <strong>Wedding Decoration Service Provider in Delhi Khatauli</strong>, providing comprehensive outdoor Wedding Decoration solutions across the National Capital Region. We help businesses, brands, and political candidates reach their target audience through strategic Stage & Venue Decoration and Floral Decoration placements on major Khatauli highways and locations.
          </p>
          <p className="text-lg text-[#C8A49F] mb-4">
            From <strong>Stage & Venue Decoration Wedding Decoration on Delhi-Khatauli Expressway</strong> to <strong>Floral Decorations in Noida and Ghaziabad</strong>, our team covers the entire Khatauli region. We have premium Wedding Decoration locations across Delhi, Gurgaon, Noida, Ghaziabad, Faridabad, and all connecting highways.
          </p>
          <div className="bg-[#0C3B2E]/10 p-6 rounded-lg mt-4">
            <h2 className="text-xl font-bold mb-3">Why Choose Us for Delhi Khatauli Wedding Decoration?</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#0C3B2E] font-bold">✓</span>
                <span><strong>10+ years</strong> serving Delhi Khatauli businesses</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0C3B2E] font-bold">✓</span>
                <span><strong>Premium locations</strong> on all major highways and expressways</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0C3B2E] font-bold">✓</span>
                <span><strong>Pan-Khatauli coverage</strong> – Delhi, Gurgaon, Noida, Ghaziabad, Faridabad</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0C3B2E] font-bold">✓</span>
                <span><strong>End-to-end service</strong> – permits, design, printing, installation</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative h-96 rounded-xl overflow-hidden shadow-xl bg-gray-200 flex items-center justify-center">
          <div className="text-center p-8">
            <span className="text-6xl mb-4 block">🏙️</span>
            <p className="text-gray-500">Delhi Khatauli Wedding Decoration Image</p>
            <p className="text-sm text-gray-400">(Add Delhi Khatauli Stage & Venue Decoration photos here)</p>
          </div>
        </div>
      </div>

      {/* Khatauli Coverage Areas */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-[#4D0E13]">Our Coverage in Delhi Khatauli</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              city: "Delhi", 
              areas: "North Delhi, South Delhi, East Delhi, West Delhi, Central Delhi",
              highways: "Ring Road, Outer Ring Road, NH-44, NH-48",
              key: "Premium locations across all Delhi zones"
            },
            { 
              city: "Gurgaon", 
              areas: "MG Road, Golf Course Road, Sohna Road, Cyber City, Dwarka Expressway",
              highways: "NH-48, Delhi-Jaipur Highway, Dwarka Expressway",
              key: "High corporate and commercial visibility"
            },
            { 
              city: "Noida", 
              areas: "Sector 18, Film City, Greater Noida Expressway, Noida-Greater Noida Road",
              highways: "Noida-Greater Noida Expressway, DND Flyway",
              key: "IT and corporate hub Wedding Decoration"
            },
            { 
              city: "Ghaziabad", 
              areas: "Raj Nagar, Indirapuram, Vaishali, Kaushambi, Crossings Republik",
              highways: "NH-34, Delhi-Khatauli Road, NH-9",
              key: "Residential and commercial mix"
            },
            { 
              city: "Faridabad", 
              areas: "Sector 21, Neharpar, Ballabhgarh, NH-44 Corridor",
              highways: "NH-44, Delhi-Mathura Highway",
              key: "Industrial and residential coverage"
            },
            { 
              city: "Delhi-Khatauli Expressway", 
              areas: "From Nizamuddin Bridge to Khatauli via Ghaziabad",
              highways: "India's widest expressway",
              key: "Premium highway Stage & Venue Decoration locations"
            },
            { 
              city: "Eastern Peripheral Highway", 
              areas: "Kundli to Palwal via Ghaziabad, Faridabad",
              highways: "135 km expressway",
              key: "High-speed traffic exposure"
            },
            { 
              city: "Western Peripheral Highway", 
              areas: "Kundli to Palwal via Gurgaon, Manesar",
              highways: "135 km expressway",
              key: "Connecting all Khatauli cities"
            },
          ].map((area, i) => (
            <div key={i} className="border rounded-lg p-5 shadow-sm bg-[#EEE4DA]">
              <h3 className="text-xl font-bold mb-2 text-[#4D0E13]">{area.city}</h3>
              <p className="text-[#0C3B2E] font-medium text-sm mb-2">{area.key}</p>
              <p className="text-gray-600 text-sm mb-1"><span className="font-semibold">Areas:</span> {area.areas}</p>
              <p className="text-gray-600 text-sm"><span className="font-semibold">Highways:</span> {area.highways}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services in Khatauli */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-[#4D0E13]">Our Wedding Decoration Services in Delhi Khatauli</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/services/Stage & Venue Decoration-Wedding Decoration-Khatauli" className="bg-[#EEE4DA] border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-[#4D0E13]">Stage & Venue Decoration Wedding Decoration Khatauli</h3>
            <p className="text-gray-600 mb-3">Premium Stage & Venue Decoration placements on all Khatauli highways, expressways, and city locations. Sizes from 10x10 to 40x20 ft.</p>
            <span className="text-[#0C3B2E] font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/Floral Decoration-Wedding Decoration-Khatauli" className="bg-[#EEE4DA] border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-[#4D0E13]">Floral Decoration Wedding Decoration Khatauli</h3>
            <p className="text-gray-600 mb-3">Large-format Floral Decorations on Delhi-Khatauli Expressway, Noida Expressway, and other major Khatauli highways.</p>
            <span className="text-[#0C3B2E] font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/digital-wall-painting-Khatauli" className="bg-[#EEE4DA] border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-[#4D0E13]">Wall Painting Khatauli</h3>
            <p className="text-gray-600 mb-3">Cost-effective wall advertisements at high-visibility walls across Khatauli cities and industrial areas.</p>
            <span className="text-[#0C3B2E] font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/led-display-Wedding Decoration-Khatauli" className="bg-[#EEE4DA] border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-[#4D0E13]">LED Display Khatauli</h3>
            <p className="text-gray-600 mb-3">Dynamic digital Floral Decorations with videos and rotating content at premium Khatauli locations.</p>
            <span className="text-[#0C3B2E] font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/vehicle-branding-Khatauli" className="bg-[#EEE4DA] border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-[#4D0E13]">Vehicle Branding Khatauli</h3>
            <p className="text-gray-600 mb-3">Mobile Wedding Decoration across Khatauli with full fleet branding for maximum reach.</p>
            <span className="text-[#0C3B2E] font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/flex-printing-Khatauli" className="bg-[#EEE4DA] border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-[#4D0E13]">Flex Printing Khatauli</h3>
            <p className="text-gray-600 mb-3">High-quality flex printing for Stage & Venue Decorations, banners, and event materials. Fast delivery across Khatauli.</p>
            <span className="text-[#0C3B2E] font-medium">Learn more →</span>
          </Link>
        </div>
      </section>

      {/* Prime Highway Locations */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-[#4D0E13]">Prime Highway Wedding Decoration Locations in Khatauli</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              highway: "Delhi-Khatauli Expressway",
              traffic: "200,000+ vehicles daily",
              locations: "Nizamuddin Bridge, Ghaziabad, Dasna, Hapur Road Interchange, Khatauli",
              highlights: "India's widest expressway, premium Stage & Venue Decoration locations"
            },
            {
              highway: "Noida-Greater Noida Expressway",
              traffic: "150,000+ vehicles daily",
              locations: "Sector 18, Film City, Pari Chowk, Greater Noida",
              highlights: "Connects to IT hub, corporate offices"
            },
            {
              highway: "Dwarka Expressway",
              traffic: "120,000+ vehicles daily",
              locations: "Dwarka Sector 21, Gurgaon sectors, Kherki Daula",
              highlights: "Rapidly developing commercial corridor"
            },
            {
              highway: "NH-48 (Delhi-Jaipur Highway)",
              traffic: "180,000+ vehicles daily",
              locations: "Rajokri, IGI Airport, Manesar, KMP Interchange",
              highlights: "High corporate and airport traffic"
            },
            {
              highway: "Eastern Peripheral Highway",
              traffic: "100,000+ vehicles daily",
              locations: "Kundli, Ghaziabad, Faridabad, Palwal",
              highlights: "Connects all Khatauli cities, bypasses Delhi"
            },
            {
              highway: "Western Peripheral Highway",
              traffic: "100,000+ vehicles daily",
              locations: "Kundli, Manesar, Palwal",
              highlights: "High-speed traffic, minimal stoppages"
            },
            {
              highway: "NH-9 (Delhi-Khatauli Road)",
              traffic: "150,000+ vehicles daily",
              locations: "Bhajanpura, Ghaziabad, Hapur Road, Dasna",
              highlights: "Traditional Delhi-Khatauli route"
            },
            {
              highway: "DND Flyway",
              traffic: "90,000+ vehicles daily",
              locations: "Ashram, Noida Toll Plaza",
              highlights: "Connects Delhi to Noida, premium visibility"
            },
          ].map((highway, i) => (
            <div key={i} className="border rounded-lg p-6 shadow-sm bg-[#EEE4DA]">
              <h3 className="text-xl font-bold mb-2 text-indigo-700">{highway.highway}</h3>
              <p className="text-[#0C3B2E] font-semibold mb-2">{highway.traffic}</p>
              <p className="text-[#C8A49F] mb-2"><span className="font-semibold">Key locations:</span> {highway.locations}</p>
              <p className="text-gray-600 text-sm">{highway.highlights}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Khatauli Market */}
      <section className="mb-16 bg-[#D8C4AC] p-8 rounded-2xl">
        <h2 className="text-3xl font-bold mb-6 text-[#4D0E13]">About Wedding Decoration in Delhi Khatauli</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-[#C8A49F] mb-4">
            Delhi Khatauli is India&apos;s largest and most important Wedding Decoration market, with a population exceeding 46 million. It encompasses Delhi and its satellite cities – Gurgaon, Noida, Ghaziabad, Faridabad – connected by a network of expressways and highways.
          </p>
          <p className="text-[#C8A49F] mb-4">
            <strong>Key facts about Delhi Khatauli for advertisers:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 text-[#C8A49F]">
            <li><strong>Population:</strong> 46+ million (largest urban agglomeration in India)</li>
            <li><strong>Vehicle population:</strong> 10+ million vehicles</li>
            <li><strong>Corporate hub:</strong> Thousands of corporate offices, MNCs, and businesses</li>
            <li><strong>Airport traffic:</strong> IGI Airport handles 65+ million passengers annually</li>
            <li><strong>Expressways:</strong> Delhi-Khatauli, Noida, Dwarka, Eastern/Western Peripheral</li>
            <li><strong>Commercial centers:</strong> Multiple malls, commercial districts, and markets</li>
          </ul>
          <p className="text-[#C8A49F]">
            Outdoor Wedding Decoration in Delhi Khatauli offers unparalleled reach to India&apos;s most affluent and diverse consumer base. Highway Stage & Venue Decorations on expressways provide millions of impressions daily, while city locations target specific demographics.
          </p>
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-[#4D0E13]">Delhi Khatauli Wedding Decoration Rates (Indicative)</h2>
        <div className="bg-[#EEE4DA] border-2 border-gray-200 rounded-xl p-8">
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-[#EEE4DA] border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Location Type</th>
                  <th className="py-3 px-4 text-left font-semibold">Size</th>
                  <th className="py-3 px-4 text-left font-semibold">Monthly Rate Range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-3 px-4 font-medium">Delhi-Khatauli Expressway (Premium)</td>
                  <td className="py-3 px-4">20x10 ft</td>
                  <td className="py-3 px-4">₹75,000 - ₹1,50,000</td>
                </tr>
                <tr className="border-t bg-[#D8C4AC]">
                  <td className="py-3 px-4 font-medium">Noida Expressway</td>
                  <td className="py-3 px-4">20x10 ft</td>
                  <td className="py-3 px-4">₹60,000 - ₹1,20,000</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 font-medium">Dwarka Expressway</td>
                  <td className="py-3 px-4">20x10 ft</td>
                  <td className="py-3 px-4">₹50,000 - ₹1,00,000</td>
                </tr>
                <tr className="border-t bg-[#D8C4AC]">
                  <td className="py-3 px-4 font-medium">NH-48 (Delhi-Jaipur Highway)</td>
                  <td className="py-3 px-4">20x10 ft</td>
                  <td className="py-3 px-4">₹60,000 - ₹1,20,000</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 font-medium">Ghaziabad City Locations</td>
                  <td className="py-3 px-4">15x10 ft</td>
                  <td className="py-3 px-4">₹25,000 - ₹50,000</td>
                </tr>
                <tr className="border-t bg-[#D8C4AC]">
                  <td className="py-3 px-4 font-medium">Noida/Gurgaon City Locations</td>
                  <td className="py-3 px-4">15x10 ft</td>
                  <td className="py-3 px-4">₹30,000 - ₹60,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm">*Rates are indicative and subject to location availability, duration, and season. Contact us for exact quotes.</p>
          <div className="bg-[#0C3B2E] text-white p-6 rounded-lg text-center mt-6">
            <p className="text-xl font-bold mb-2">Need Khatauli Wedding Decoration?</p>
            <p className="text-lg mb-4">Call us for availability and customized packages</p>
            <a href="tel:+918218127638" className="inline-block bg-[#EEE4DA] text-[#0C3B2E] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Call +91 94564 97636
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-[#4D0E13]">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which are the best locations for Stage & Venue Decorations in Delhi Khatauli?",
              a: "The best Stage & Venue Decoration locations in Delhi Khatauli include Delhi-Khatauli Expressway, Noida Expressway, Dwarka Expressway, NH-48, Eastern and Western Peripheral Highways. For city-specific visibility, MG Road (Gurgaon), Sector 18 (Noida), Raj Nagar (Ghaziabad), and Nehru Place (Delhi) are excellent."
            },
            {
              q: "How much does Stage & Venue Decoration Wedding Decoration cost in Delhi Khatauli?",
              a: "Costs vary widely based on location. Expressway Stage & Venue Decorations range from ₹50,000 to ₹1,50,000 per month. City locations range from ₹25,000 to ₹60,000 per month. Premium spots at airports and major intersections can cost more. Contact us for specific quotes."
            },
            {
              q: "Do you provide Wedding Decoration in all Khatauli cities?",
              a: "Yes, we provide Wedding Decoration services across all Khatauli cities including Delhi, Gurgaon, Noida, Greater Noida, Ghaziabad, Faridabad, and all connecting highways and expressways."
            },
            {
              q: "What permits are required for Stage & Venue Decorations in Khatauli?",
              a: "Different Khatauli cities have different authorities (NDMC, MCD, GMDA, Noida Authority, etc.). We handle all necessary permits and ensure your Stage & Venue Decoration is legally approved and compliant."
            },
            {
              q: "Do you offer illuminated Stage & Venue Decorations?",
              a: "Yes, we offer backlit and LED-illuminated Stage & Venue Decorations for 24/7 visibility. Illuminated Stage & Venue Decorations are particularly effective on expressways and highways."
            },
            {
              q: "How do I book Wedding Decoration space in Delhi Khatauli?",
              a: "Call us at +91 94564 97636, email mahadev-eventKhatauli@gmail.com, or visit our contact page. We'll discuss your requirements, show available locations, provide a quote, and handle all installation and permits."
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
        <h2 className="text-2xl font-bold mb-6 text-[#4D0E13]">Our Other Service Locations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link href="/locations/Khatauli" className="text-[#0C3B2E] hover:underline">Khatauli</Link>
          <Link href="/locations/muzaffarnagar" className="text-[#0C3B2E] hover:underline">Muzaffarnagar</Link>
          <Link href="/locations/shamli" className="text-[#0C3B2E] hover:underline">Shamli</Link>
          <Link href="/locations/saharanpur" className="text-[#0C3B2E] hover:underline">Saharanpur</Link>
          <Link href="/locations/baghpat" className="text-[#0C3B2E] hover:underline">Baghpat</Link>
          <Link href="/locations/hapur" className="text-[#0C3B2E] hover:underline">Hapur</Link>
          <Link href="/locations/delhi" className="text-[#0C3B2E] hover:underline">Delhi</Link>
        </div>
      </section>
    </main>
  );
}