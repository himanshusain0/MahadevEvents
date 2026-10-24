import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'LED Display Wedding Decoration in Khatauli | Digital Floral Decorations & Screens | Mahadev Events Khatauli',
  description: 'Dynamic LED display Wedding Decoration in Khatauli & Khatauli. Digital Floral Decorations with rotating content, videos, and animations. High-impact visibility at prime locations. Modern outdoor Wedding Decoration for maximum engagement.',
  keywords: 'led display Wedding Decoration Khatauli, digital Floral Decoration Khatauli, led screen Wedding Decoration, outdoor led display Khatauli, digital Stage & Venue Decoration Khatauli, led video wall Khatauli, digital signage Khatauli, led board on rent Khatauli, led display muzaffarnagar, digital Floral Decoration shamli',
  alternates: {
    canonical: 'https://mahadev-eventKhatauli.com/services/led-display-Wedding Decoration-Khatauli',
  },
  openGraph: {
   title: 'LED Display Wedding Decoration in Khatauli | Digital Floral Decorations & Screens | Mahadev Events Khatauli',
    description: 'Dynamic LED display Wedding Decoration in Khatauli. Digital Floral Decorations with rotating content, videos, and animations for maximum engagement.',
    url: 'https://mahadev-eventKhatauli.com/services/led-display-Wedding Decoration-Khatauli',
    siteName: 'Mahadev Events Khatauli',
    images: [
      {
        url: '/images/services/Stage & Venue Decoration4.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

// LED display types
const ledDisplayTypes = [
  { 
    type: "Outdoor LED Floral Decorations", 
    icon: "🖥️",
    desc: "Large-format digital Floral Decorations for highways and main roads", 
    features: ["5000-7000 nits brightness", "Weatherproof", "Auto-brightness adjustment"]
  },
  { 
    type: "Indoor LED Screens", 
    icon: "📺",
    desc: "High-resolution screens for malls, lobbies, and events", 
    features: ["1500-2500 nits", "Fine pixel pitch", "Crisp HD quality"]
  },
  { 
    type: "LED Video Walls", 
    icon: "🖼️",
    desc: "Multi-panel video walls for impactful presentations", 
    features: ["Seamless panels", "Custom configurations", "Stunning visuals"]
  },
  { 
    type: "Mobile LED Vans", 
    icon: "🚚",
    desc: "LED screens on vehicles for mobile Wedding Decoration", 
    features: ["5000+ nits", "Mobile coverage", "Perfect for events"]
  },
  { 
    type: "Digital Kiosks", 
    icon: "📱",
    desc: "Interactive touch-screen displays for retail and public spaces", 
    features: ["Touch-enabled", "Interactive content", "Real-time updates"]
  },
  { 
    type: "LED Column Displays", 
    icon: "📡",
    desc: "Wrap-around LED displays on pillars and columns", 
    features: ["360° visibility", "Space-efficient", "High impact"]
  },
];

// LED locations
const ledLocations = [
  { name: "Delhi Road, Khatauli", traffic: "100,000+ daily", desc: "Premium digital Floral Decoration location on main highway", icon: "🛣️" },
  { name: "Muzaffarnagar Highway", traffic: "80,000+ daily", desc: "High-visibility digital display on interstate route", icon: "🛣️" },
  { name: "Roorkee Road, Khatauli", traffic: "70,000+ daily", desc: "Near educational institutions, student traffic", icon: "🎓" },
  { name: "PVS Mall, Khatauli", traffic: "High footfall", desc: "Indoor digital screens inside popular mall", icon: "🏬" },
  { name: "Garh Road Shopping District", traffic: "65,000+ daily", desc: "Commercial area with retail shoppers", icon: "🛍️" },
  { name: "Shamli Road Industrial Area", traffic: "40,000+ daily", desc: "B2B Wedding Decoration opportunity", icon: "🏭" },
  { name: "Saharanpur Highway", traffic: "50,000+ daily", desc: "Strategic location on major highway", icon: "🛣️" },
  { name: "Delhi Khatauli Locations", traffic: "Varies", desc: "Digital displays across Khatauli region", icon: "🏙️" },
];

// Use cases
const useCases = [
  "Product Launches", "Festival Promotions", "Retail Sales", "Movie Promotions",
  "Political Campaigns", "Corporate Branding", "Event Announcements", "Real Estate Ads",
  "Automobile Launches", "FMCG Campaigns", "Educational Institutes", "Healthcare Services",
  "Entertainment Events", "Sports Sponsorships", "Charity Campaigns", "Government Ads"
];

export default function LEDDisplayPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/services/Stage & Venue Decoration4.webp"
            alt="LED display Wedding Decoration background"
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
              <span className="text-blue-300">LED Display Wedding Decoration</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              LED Display <span className="text-blue-400">Wedding Decoration in Khatauli</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Dynamic digital Floral Decorations with videos, animations, and instant content updates. The future of outdoor Wedding Decoration.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition shadow-lg"
              >
                Book LED Display
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
            { number: "24/7", label: "Dynamic Visibility", icon: "✨" },
            { number: "5x", label: "More Attention", icon: "👁️" },
            { number: "Instant", label: "Content Updates", icon: "⚡" },
            { number: "100K+", label: "Daily Views", icon: "📊" },
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
        
        {/* What is LED Display Wedding Decoration */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900">
              Professional LED Display Wedding Decoration in Khatauli
            </h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              <strong className="text-gray-900">Mahadev Events Khatauli</strong> offers cutting-edge <strong className="text-gray-900">LED display Wedding Decoration in Khatauli</strong> – the most engaging form of outdoor Wedding Decoration. Our digital Floral Decorations deliver dynamic content with videos, animations, and rotating messages.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Unlike static Stage & Venue Decorations, LED displays allow you to showcase multiple ads, update content instantly, and engage audiences with motion graphics. Perfect for brands wanting to stand out in high-traffic locations.
            </p>
            <div className="space-y-3">
              {[
                "Dynamic video & animation content",
                "Instant remote content updates",
                "High-brightness (5000-7000 nits) day & night visibility",
                "Multiple advertisers can share screen time",
                "5x higher attention than static displays"
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
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl bg-gray-100 flex items-center justify-center">
            <div className="text-center p-8">
              <span className="text-6xl mb-4 block">📺</span>
              <p className="text-gray-500 font-medium">LED Display Gallery</p>
              {/* <p className="text-sm text-gray-400">(Add your LED display images here)</p> */}
            </div>
          </div>
        </div>

        {/* Types of LED Displays */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Our Technology</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Types of LED Displays We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              State-of-the-art LED solutions for every Wedding Decoration need
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ledDisplayTypes.map((item, i) => (
              <div key={i} className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl mb-4">{item.icon}</div>
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

        {/* Prime LED Locations */}
        <div id="locations" className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Locations</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Premium LED Display Locations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              High-traffic digital display locations across Khatauli & Khatauli
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ledLocations.map((location, i) => (
              <div key={i} className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{location.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{location.name}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-3">{location.traffic}</p>
                <p className="text-gray-600 text-sm">{location.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose LED Section */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Advantages</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Why Choose LED Display Wedding Decoration?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Digital displays outperform static Wedding Decoration in every metric
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "Dynamic Content", 
                icon: "🎬",
                desc: "Show videos, animations, and multiple ads in rotation. Keep your messaging fresh and engaging." 
              },
              { 
                title: "Instant Updates", 
                icon: "⚡",
                desc: "Change your ad content remotely at any time – no reprinting costs or installation delays." 
              },
              { 
                title: "5x More Attention", 
                icon: "👁️",
                desc: "Moving images and bright displays capture significantly more attention than static Stage & Venue Decorations." 
              },
              { 
                title: "Day & Night Visibility", 
                icon: "🌞🌙",
                desc: "High-brightness LED screens are clearly visible even in direct sunlight and at night." 
              },
              { 
                title: "Targeted Scheduling", 
                icon: "⏰",
                desc: "Run specific ads at specific times – morning rush, evening, weekends – to reach your audience." 
              },
              { 
                title: "Higher Recall", 
                icon: "🧠",
                desc: "Motion graphics and video content create 85%+ higher brand recall than static ads." 
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

        {/* Content Specifications */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Technical Specs</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Content Specifications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guidelines for creating effective LED display content
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Video/Audio Specifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-blue-600">Format:</span>
                  <span className="text-gray-600">MP4, AVI, MOV, GIF</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-blue-600">Resolution:</span>
                  <span className="text-gray-600">1920x1080 (Full HD) recommended</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-blue-600">Duration:</span>
                  <span className="text-gray-600">10-30 seconds per slot</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-blue-600">Audio:</span>
                  <span className="text-gray-600">Optional (available at select locations)</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🖼️</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Image Specifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-blue-600">Format:</span>
                  <span className="text-gray-600">JPG, PNG, PSD, AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-blue-600">Resolution:</span>
                  <span className="text-gray-600">Minimum 150 DPI at actual size</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-blue-600">Color mode:</span>
                  <span className="text-gray-600">RGB (for digital displays)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-blue-600">Duration:</span>
                  <span className="text-gray-600">8-15 seconds per static image</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">Our team can help create or optimize your content for LED displays</p>
          </div>
        </div>

        {/* Best Use Cases */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Applications</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Best Use Cases for LED Wedding Decoration
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Perfect for time-sensitive promotions, brand campaigns, and events
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {useCases.map((use, i) => (
              <span key={i} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition cursor-default">
                {use}
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
              Everything you need to know about LED display Wedding Decoration
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "What is the minimum duration for LED display Wedding Decoration?",
                a: "Minimum duration is typically 1 month for outdoor digital Floral Decorations. For special events, we offer weekly and daily packages on mobile LED vans."
              },
              {
                q: "How many times will my ad be shown daily?",
                a: "On a 10-second slot, your ad typically rotates every 2-3 minutes, resulting in 400-500 displays per day. Total daily impressions can reach 50,000-100,000+ on high-traffic locations."
              },
              {
                q: "Can I change my ad content during the campaign?",
                a: "Yes, you can update your content remotely at any time. Most packages include free content changes during the campaign period."
              },
              {
                q: "What's the difference between indoor and outdoor LED displays?",
                a: "Outdoor displays have higher brightness (5000-7000 nits) to combat sunlight and are weatherproof. Indoor displays have finer pixel pitch for closer viewing."
              },
              {
                q: "Do LED displays work in direct sunlight?",
                a: "Yes, our outdoor LED displays are designed with high-brightness LEDs and auto-brightness adjustment for clear visibility even in direct sunlight."
              },
              {
                q: "Can multiple advertisers share the same display?",
                a: "Yes, most digital Floral Decorations rotate ads from multiple advertisers. Exclusive displays are also available for premium campaigns."
              },
              {
                q: "Do you provide content creation services?",
                a: "Yes, our creative team can design static ads, animations, and videos for your LED campaigns. Design support is available for all clients."
              },
              {
                q: "Are LED displays available in Muzaffarnagar and other cities?",
                a: "Yes, we have LED displays across Khatauli, Muzaffarnagar, Shamli, Saharanpur, Baghpat, and Delhi Khatauli."
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