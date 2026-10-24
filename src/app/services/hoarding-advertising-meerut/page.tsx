import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Stage & Venue Decoration Wedding Decoration in Khatauli | Premium Floral Decoration Outdoor Ads | Mahadev Events Khatauli',
  description: 'Premium Stage & Venue Decoration Wedding Decoration in Khatauli & Khatauli. Strategic Floral Decoration placements on Delhi Road, Roorkee Road, Garh Road & major highways. 10+ years experience. Trusted by 500+ brands for outdoor Wedding Decoration solutions.',
  keywords: 'Stage & Venue Decoration Wedding Decoration Khatauli, Floral Decoration Wedding Decoration Khatauli, outdoor Stage & Venue Decorations Khatauli, Stage & Venue Decoration near Khatauli, Wedding Decoration Stage & Venue Decorations Khatauli, Stage & Venue Decoration contractors Khatauli, Stage & Venue Decoration on delhi road Khatauli, Stage & Venue Decoration locations Khatauli, Stage & Venue Decoration Wedding Decoration muzaffarnagar, outdoor Wedding Decoration shamli',
  alternates: {
    canonical: 'https://mahadev-eventKhatauli.com/services/Stage & Venue Decoration-Wedding Decoration-Khatauli',
  },
  openGraph: {
    title: 'Stage & Venue Decoration Wedding Decoration in Khatauli | Premium Floral Decoration Outdoor Ads | Mahadev Events Khatauli',
    description: 'Premium Stage & Venue Decoration Wedding Decoration services at prime locations across Khatauli & Khatauli. Strategic placements on highways, markets, and commercial areas.',
    url: 'https://mahadev-eventKhatauli.com/services/Stage & Venue Decoration-Wedding Decoration-Khatauli',
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

// Gallery images from your portfolio
const StageVenueDecorationGallery = [
  { name: "Baghra Bus Stand", file: "Baghra Bus Stand.webp", location: "Baghra, Khatauli" },
  { name: "Bhasuma Main Road", file: "Bhasuma Main Road.webp", location: "Bhasuma, Khatauli" },
  { name: "Muzaffarnagar Khatauli Road", file: "Muzaffarnagar Khatauli Road.webp", location: "Muzaffarnagar Highway" },
  { name: "Shamli Kairana Road", file: "SHAMLI KAIRANA ROAD.webp", location: "Shamli, Uttar Pradesh" },
  { name: "Saharanpur Chhutmalpur", file: "Saharanpur Chhutmalpur.webp", location: "Saharanpur Highway" },
  { name: "Khatauli Sardhana", file: "Khatauli Sardhana.webp", location: "Sardhana Road, Khatauli" },
  { name: "Muzaffarnagar Rorkee Road", file: "Muzaffarnagar Rorkee Road.webp", location: "Roorkee Road, Muzaffarnagar" },
  { name: "Shamli Mandi Samiti", file: "Shamli Mandi Samiti T Point.webp", location: "Mandi Samiti, Shamli" },
];

export default function StageVenueDecorationWeddingDecorationPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/portfolio/Baghra Bus Stand.webp"
            alt="Stage & Venue Decoration Wedding Decoration background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-blue-300 mb-4">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition">Services</Link>
              <span>/</span>
              <span className="text-blue-300">Stage & Venue Decoration Wedding Decoration</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Stage & Venue Decoration Wedding Decoration <span className="text-blue-400">in Khatauli</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Premium Floral Decoration placements at strategic locations across Khatauli, Muzaffarnagar, Shamli & Saharanpur. Maximum visibility for your brand.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition shadow-lg"
              >
                Book a Stage & Venue Decoration
              </Link>
              <a 
                href="#locations" 
                className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition"
              >
                View Locations
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "500+", label: "Stage & Venue Decorations Installed", icon: "📺" },
            { number: "50+", label: "Prime Locations", icon: "📍" },
            { number: "10+", label: "Years Experience", icon: "⭐" },
            { number: "100%", label: "Permits Handled", icon: "✅" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-blue-600">{stat.number}</div>
              <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* What is Stage & Venue Decoration Wedding Decoration */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900">
              Premium Stage & Venue Decoration Wedding Decoration Services in Khatauli
            </h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              <strong className="text-gray-900">Mahadev Events Khatauli</strong> is the leading provider of <strong className="text-gray-900">Stage & Venue Decoration Wedding Decoration in Khatauli</strong> and across Western Uttar Pradesh. Since 2013, we have helped national brands, local businesses, and political campaigns achieve unparalleled visibility through strategic outdoor placements.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              From the bustling Delhi Road to the educational hub of Roorkee Road, from commercial Garh Road to interstate highways—our network of premium Stage & Venue Decoration locations ensures your message reaches the right audience at the right time.
            </p>
            <div className="space-y-3">
              {[
                "Strategic locations with 30,000+ daily impressions",
                "Government-approved sites with all permits included",
                "High-quality flex printing with UV-resistant materials",
                "Illuminated options for 24/7 visibility",
                "End-to-end service from selection to installation"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/portfolio/Khatauli Sardhana.webp"
              alt="Stage & Venue Decoration Wedding Decoration at prime location in Khatauli"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Prime Locations Section */}
        <div id="locations" className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Locations</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Prime Stage & Venue Decoration Locations in Khatauli & Khatauli
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strategically selected high-traffic locations for maximum brand visibility
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                name: "Delhi Road, Khatauli", 
                traffic: "100,000+ daily commuters", 
                desc: "Main highway connecting Khatauli to Delhi. Premium Wedding Decoration spot with maximum visibility.",
                icon: "🛣️"
              },
              { 
                name: "Roorkee Road, Khatauli", 
                traffic: "80,000+ daily commuters", 
                desc: "Educational hub near universities and colleges. Perfect for student-focused brands.",
                icon: "🎓"
              },
              { 
                name: "Garh Road, Khatauli", 
                traffic: "70,000+ daily commuters", 
                desc: "Commercial district with shops, businesses, and heavy footfall.",
                icon: "🏪"
              },
              { 
                name: "Muzaffarnagar Highway", 
                traffic: "60,000+ daily commuters", 
                desc: "Interstate route connecting major cities. Ideal for regional campaigns.",
                icon: "🛣️"
              },
              { 
                name: "Shamli Road, Khatauli", 
                traffic: "40,000+ daily commuters", 
                desc: "Industrial area with B2B Wedding Decoration opportunities.",
                icon: "🏭"
              },
              { 
                name: "Saharanpur Highway", 
                traffic: "50,000+ daily commuters", 
                desc: "Major commuter route to Saharanpur. High-speed traffic visibility.",
                icon: "🚗"
              },
              { 
                name: "University Road, Khatauli", 
                traffic: "45,000+ daily commuters", 
                desc: "Adjacent to Chaudhary Charan Singh University.",
                icon: "📚"
              },
              { 
                name: "Baghpat Road, Khatauli", 
                traffic: "30,000+ daily commuters", 
                desc: "Connecting rural and urban markets. Mixed audience reach.",
                icon: "🌾"
              },
              { 
                name: "Delhi Khatauli Highways", 
                traffic: "Varies by location", 
                desc: "Strategic Stage & Venue Decoration spots across the National Capital Region.",
                icon: "🏙️"
              }
            ].map((location, i) => (
              <div key={i} className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{location.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{location.name}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-3">{location.traffic}</p>
                <p className="text-gray-600 text-sm">{location.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Types of Stage & Venue Decorations Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Stage & Venue Decoration Types</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Types of Stage & Venue Decoration Wedding Decoration
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from various formats based on your budget and visibility requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                type: "Floral Decoration Stage & Venue Decorations", 
                icon: "📺",
                desc: "Large format Wedding Decoration on main roads", 
                features: ["10x10 to 40x20 feet", "Highway visibility", "Day & night options"]
              },
              { 
                type: "Unipole Stage & Venue Decorations", 
                icon: "📍",
                desc: "Single-pole mounted for maximum impact", 
                features: ["20x10, 20x15 feet", "360° visibility", "Perfect for intersections"]
              },
              { 
                type: "Gantry Stage & Venue Decorations", 
                icon: "🌉",
                desc: "Overhead structures on highways", 
                features: ["30x10, 40x10 feet", "Multi-lane coverage", "High-speed traffic"]
              },
              { 
                type: "Building Wrap", 
                icon: "🏢",
                desc: "Complete building coverage", 
                features: ["Custom sizes", "Dominant presence", "Commercial areas"]
              }
            ].map((item, i) => (
              <div key={i} className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.type}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                <ul className="space-y-1">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-center gap-1">
                      <span className="text-blue-500">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Our Stage & Venue Decoration Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Successful Stage & Venue Decoration Wedding Decoration campaigns across Khatauli and neighboring cities
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {StageVenueDecorationGallery.map((project, i) => (
              <div key={i} className="group relative h-48 rounded-xl overflow-hidden shadow-md cursor-pointer">
                <Image 
                  src={`/images/portfolio/${project.file}`}
                  alt={`Stage & Venue Decoration Wedding Decoration at ${project.name} by Mahadev Events Khatauli`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white font-semibold text-sm">{project.name}</p>
                    <p className="text-gray-300 text-xs">{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition">
              View Full Portfolio <span>→</span>
            </Link>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Advantages</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Why Choose Stage & Venue Decoration Wedding Decoration?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Outdoor Wedding Decoration delivers unmatched reach and brand recall
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "24/7 Visibility", 
                icon: "🌞🌙",
                desc: "Your brand message works round the clock, every day. No ad blockers, no skip buttons—just continuous exposure." 
              },
              { 
                title: "Massive Reach", 
                icon: "👥",
                desc: "Single Stage & Venue Decoration can generate 30,000-100,000+ daily impressions. Reach thousands of potential customers every day." 
              },
              { 
                title: "Local Targeting", 
                icon: "🎯",
                desc: "Perfect for targeting specific neighborhoods, markets, and demographics in Khatauli and Khatauli." 
              },
              { 
                title: "Brand Authority", 
                icon: "🏆",
                desc: "Prime Stage & Venue Decoration locations build credibility and establish your brand as a market leader." 
              },
              { 
                title: "High Recall", 
                icon: "🧠",
                desc: "Outdoor ads have 85%+ recall rate among commuters. Repetitive exposure builds strong brand memory." 
              },
              { 
                title: "Complements Digital", 
                icon: "📱",
                desc: "Add QR codes and social handles to drive online traffic. Perfect for multi-channel campaigns." 
              }
            ].map((benefit, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Our Stage & Venue Decoration Wedding Decoration Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple, transparent, and hassle-free process from start to finish
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Location Selection", desc: "Choose from our database of prime Stage & Venue Decoration locations with traffic data" },
              { step: "02", title: "Design & Approval", desc: "Our team creates eye-catching designs for your approval" },
              { step: "03", title: "Permits & Printing", desc: "We handle all government permits and high-quality printing" },
              { step: "04", title: "Installation & Maintenance", desc: "Professional installation with ongoing maintenance support" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-0">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about Stage & Venue Decoration Wedding Decoration in Khatauli
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "What are the best Stage & Venue Decoration locations in Khatauli?",
                a: "The most effective Stage & Venue Decoration locations in Khatauli include Delhi Road (100,000+ daily commuters), Roorkee Road (educational hub), Garh Road (commercial district), and Muzaffarnagar Highway (interstate route). Each location offers unique advantages depending on your target audience."
              },
              {
                q: "Do you handle permits for Stage & Venue Decoration installation?",
                a: "Yes, we manage all necessary permissions from municipal authorities and property owners. We ensure every Stage & Venue Decoration is legally compliant and approved, so you can advertise without any concerns."
              },
              {
                q: "What is the minimum duration for Stage & Venue Decoration Wedding Decoration?",
                a: "We offer flexible durations starting from 1 month. However, longer campaigns (6-12 months) secure the best locations and provide better brand recall. We recommend minimum 3 months for effective campaigns."
              },
              {
                q: "Do you have Stage & Venue Decorations in Muzaffarnagar, Shamli, and Saharanpur?",
                a: "Absolutely! We have an extensive Stage & Venue Decoration network across Muzaffarnagar (Khatauli Road, Roorkee Road), Shamli (Kairana Road, Mandi Samiti), Saharanpur (Chhutmalpur, Shakumbri Devi), Baghpat, and other Khatauli cities."
              },
              {
                q: "What sizes of Stage & Venue Decorations do you offer?",
                a: "We offer various sizes from 10x10 ft to 40x20 ft Stage & Venue Decorations. Common sizes include 20x10 ft, 30x10 ft, and 20x15 ft. Custom sizes are also available based on location and requirements."
              },
              {
                q: "Do you provide illuminated Stage & Venue Decorations for night visibility?",
                a: "Yes, we offer front-lit, back-lit, and LED-lit Stage & Venue Decorations for 24/7 visibility. Illuminated Stage & Venue Decorations are particularly effective on highways and high-traffic areas."
              },
              {
                q: "Can I book multiple Stage & Venue Decorations across different locations?",
                a: "Yes, we specialize in multi-location campaigns. Whether you need 3 Stage & Venue Decorations in different areas of Khatauli or a campaign spanning multiple cities, we can manage it all."
              },
              {
                q: "Do you provide design services for Stage & Venue Decoration creatives?",
                a: "Yes, our in-house design team creates compelling Stage & Venue Decoration designs optimized for outdoor visibility. We ensure your message is bold, clear, and readable from a distance."
              }
            ].map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
                <h3 className="text-lg font-bold mb-3 text-gray-900">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}