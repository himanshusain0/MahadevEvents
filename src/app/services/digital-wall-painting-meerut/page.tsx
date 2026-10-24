import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Theme Decoration in Khatauli | Premium Wall Wedding Decoration | Mahadev Events Khatauli',
  description: 'Leading provider of Theme Decoration in Khatauli & Khatauli. High-resolution wall Wedding Decoration at prime locations including Delhi Road, Garh Road & Roorkee Road. 500+ successful projects. Get premium visibility for your brand.',
  keywords: 'Theme Decoration Khatauli, wall painting Wedding Decoration Khatauli, Theme Decoration on delhi road Khatauli, wall advertisement Khatauli, outdoor wall branding Khatauli, wall Stage & Venue Decoration Khatauli, wall painting contractors Khatauli, Theme Decoration muzaffarnagar, wall painting shamli, Theme Decoration saharampur',
  alternates: {
    canonical: 'https://mahadev-eventKhatauli.com/services/digital-wall-painting-Khatauli',
  },
  openGraph: {
    title: 'Theme Decoration in Khatauli | Premium Wall Wedding Decoration | Mahadev Events Khatauli',
    description: 'Professional Theme Decoration services at prime locations across Khatauli. High-resolution, weather-resistant wall Wedding Decoration.',
    url: 'https://mahadev-eventKhatauli.com/services/digital-wall-painting-Khatauli',
    siteName: 'Mahadev Events Khatauli',
    images: [
      {
        url: '/images/toWEBP/dwp19.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

// Select 7 best DWP images for gallery
const dwpGalleryImages = [
  { src: '/images/toWEBP/dwp1.webp', alt: 'Theme Decoration on Delhi Road Khatauli - Mahadev Events Khatauli', location: 'Delhi Road, Khatauli' },
  { src: '/images/toWEBP/dwp14.webp', alt: 'Large format wall painting Wedding Decoration in Khatauli city', location: 'Garh Road, Khatauli' },
  { src: '/images/toWEBP/dwp10.webp', alt: 'Premium wall advertisement on Roorkee Road Khatauli', location: 'Roorkee Road, Khatauli' },
  { src: '/images/toWEBP/dwp36.webp', alt: 'Theme Decoration services in Muzaffarnagar', location: 'Muzaffarnagar Highway' },
  { src: '/images/toWEBP/dwp21.webp', alt: 'High-visibility wall Stage & Venue Decoration in Shamli', location: 'Shamli, Uttar Pradesh' },
  { src: '/images/toWEBP/dwp25.webp', alt: 'Professional wall branding in Saharanpur', location: 'Saharanpur, Uttar Pradesh' },
  { src: '/images/toWEBP/dwp30.webp', alt: 'Weather-resistant Theme Decoration for brands', location: 'Baghpat Road, Khatauli' },
];

export default function DigitalWallPaintingPage() {
  return (
    <main className="bg-white">
      {/* Hero Section - Modern Layout */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/toWEBP/dwp1.webp"
            alt="Theme Decoration background"
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
              <span className="text-blue-300">Theme Decoration</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Theme Decoration <span className="text-blue-400">in Khatauli</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform blank walls into powerful brand statements. Premium locations, high-resolution printing, and weather-resistant materials.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition shadow-lg"
              >
                Get a Quote
              </Link>
              <a 
                href="#gallery" 
                className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us - Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "500+", label: "Projects Completed", icon: "🎯" },
            { number: "50+", label: "Prime Locations", icon: "📍" },
            { number: "8+", label: "Cities Covered", icon: "🏙️" },
            { number: "100%", label: "Client Satisfaction", icon: "⭐" },
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
        
        {/* What is Theme Decoration */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900">
              Premium Theme Decoration Services in Khatauli
            </h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              <strong className="text-gray-900">Mahadev Events Khatauli</strong> is the leading provider of <strong className="text-gray-900">Theme Decoration in Khatauli</strong>. We transform high-traffic walls into eye-catching brand advertisements that work 24/7.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Using state-of-the-art digital printing technology and premium weather-resistant materials, our wall paintings deliver exceptional visual impact that lasts for years. From Delhi Road to Garh Road, from educational hubs to commercial corridors—we have prime wall Wedding Decoration locations across the city.
            </p>
            <div className="space-y-3">
              {[
                "High-resolution digital printing (up to 1440 DPI)",
                "UV-resistant, weather-proof vinyl materials",
                "Professional installation by expert team",
                "Maintenance support for lasting quality"
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
              src="/images/toWEBP/dwp19.webp"
              alt="Theme Decoration on prime location in Khatauli"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Prime Locations in Khatauli */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Prime Locations</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Strategic Wall Wedding Decoration Locations in Khatauli
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our extensive network of premium wall locations with high daily footfall and vehicle traffic
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                name: "Delhi Road, Khatauli", 
                traffic: "High Traffic Corridor", 
                desc: "Premium commercial hub connecting Khatauli to Delhi. Maximum visibility for brands targeting business audiences.",
                icon: "🏢"
              },
              { 
                name: "Garh Road, Khatauli", 
                traffic: "Shopping District", 
                desc: "Heavy footfall from retail shoppers. Perfect for FMCG, retail, and consumer brands.",
                icon: "🛍️"
              },
              { 
                name: "Roorkee Road, Khatauli", 
                traffic: "Educational Hub", 
                desc: "Near universities and colleges. Ideal for educational institutions and student-focused brands.",
                icon: "🎓"
              },
              { 
                name: "University Road, Khatauli", 
                traffic: "Academic Zone", 
                desc: "Adjacent to Chaudhary Charan Singh University with high student and faculty traffic.",
                icon: "📚"
              },
              { 
                name: "Muzaffarnagar Highway", 
                traffic: "Interstate Route", 
                desc: "Connecting multiple cities. Perfect for brands targeting regional audiences.",
                icon: "🛣️"
              },
              { 
                name: "Baghpat Road, Khatauli", 
                traffic: "Mixed Urban-Rural", 
                desc: "Connecting urban and rural markets. Ideal for agricultural and general brands.",
                icon: "🌾"
              }
            ].map((location, i) => (
              <div key={i} className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{location.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{location.name}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-3">{location.traffic}</p>
                <p className="text-gray-600">{location.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section - 7 Images */}
        <div id="gallery" className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Our Wall Painting Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See our successful Theme Decoration projects across Khatauli and neighboring cities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dwpGalleryImages.slice(0, 6).map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold">{image.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Featured Image - Large */}
          <div className="mt-6 relative h-150 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/toWEBP/dwp33.webp"
              alt="Large format Theme Decoration in Khatauli"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-6">
                <p className="text-white text-lg font-semibold">Featured Project • Khatauli-Delhi Road</p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Our Wall Painting Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach to deliver high-quality wall Wedding Decoration
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Site Survey", desc: "Identify high-visibility walls & measure dimensions" },
              { step: "02", title: "Design", desc: "Create custom artwork tailored to your brand" },
              { step: "03", title: "Production", desc: "High-resolution digital printing on premium vinyl" },
              { step: "04", title: "Installation", desc: "Professional application with quality adhesives" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Industries</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Who We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by brands across various industries for wall Wedding Decoration
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Real Estate", "Education", "Retail", "Automobile", 
              "Healthcare", "Banking & Finance", "FMCG", "Hospitality",
              "Political Campaigns", "Jewelry", "Electronics", "Fitness"
            ].map((industry, i) => (
              <span key={i} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition">
                {industry}
              </span>
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
              Everything you need to know about Theme Decoration in Khatauli
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "How long does Theme Decoration last?",
                a: "Our Theme Decorations are designed for longevity. Using UV-resistant, weather-proof vinyl, they maintain their visual appeal for years with minimal maintenance."
              },
              {
                q: "Do you handle permissions for wall painting?",
                a: "Yes, we manage all necessary permissions from property owners and municipal authorities, ensuring your advertisement is legally compliant."
              },
              {
                q: "Which locations do you cover?",
                a: "We provide Theme Decoration services across Khatauli, Muzaffarnagar, Shamli, Saharanpur, Baghpat, Hapur, and Delhi Khatauli."
              },
              {
                q: "Can I select specific walls for my ad?",
                a: "Absolutely. We provide options with photos, traffic data, and visibility analysis. You choose based on your target audience and budget."
              },
              {
                q: "What's the difference from traditional painting?",
                a: "Theme Decoration uses high-resolution printed vinyl allowing photographic quality, gradients, and fine details. It's superior in quality, consistency, and longevity."
              },
              {
                q: "Can I advertise on multiple walls?",
                a: "Yes, we can manage multi-location campaigns across different cities with a single point of contact."
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