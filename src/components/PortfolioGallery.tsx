// src/components/PortfolioGallery.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const portfolioItems = [
  {
    id: 1,
    category: "Wedding Stage Decoration",
    title: "Royal Wedding Stage Decoration",
    location: "Khatauli",
    description: "Elegant royal wedding stage featuring a luxurious golden sofa, decorative backdrop, and premium floral detailing.",
    image: "/images/portfolio/image3.jpeg"
  },
  {
    id: 2,
    category: "Wedding Stage Decoration",
    title: "Floral Wedding Stage",
    location: "Khatauli",
    description: "Beautiful outdoor wedding stage with white decorative structures, red and white floral arrangements, and an elegant seating setup.",
    image: "/images/portfolio/image2.jpeg"
  },
  {
    id: 3,
    category: "Wedding Venue Decoration",
    title: "Luxury Wedding Entrance",
    location: "Khatauli",
    description: "Grand wedding venue entrance decorated with white drapes, vibrant pink flowers, hanging greenery, and elegant floral arrangements.",
    image: "/images/portfolio/image6.jpeg"
  },
  {
    id: 4,
    category: "Wedding Home Decoration",
    title: "Wedding House Decoration",
    location: "Khatauli",
    description: "Beautiful house exterior decoration with purple and cream drapes, colorful floral arrangements, and festive wedding styling.",
    image: "/images/portfolio/image5.jpeg"
  },
  {
    id: 5,
    category: "Wedding Entrance Decoration",
    title: "Illuminated Floral Entrance",
    location: "Khatauli",
    description: "Stunning wedding walkway featuring illuminated white floral arches, colorful flowers, decorative lighting, and an inviting pathway.",
    image: "/images/portfolio/image4.jpeg"
  },
  {
    id: 6,
    category: "Haldi Decoration",
    title: "Colorful Haldi Ceremony Setup",
    location: "Khatauli",
    description: "Vibrant Haldi ceremony setup featuring yellow draping, sunflower arrangements, colorful floral backdrops, and festive seating.",
    image: "/images/portfolio/image1.jpeg"
  }
];
const categories = ["All", "Stage & Venue Decorations"];

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" ? portfolioItems : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore our diverse range of successful outdoor Wedding Decoration projects across Uttar Pradesh</p>
        </div>
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button 
              key={category} 
              onClick={() => setActiveCategory(category)} 
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${ activeCategory === category ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700' }`}>
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="w-full h-80 relative bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 bg-white">
                <span className="text-sm text-blue-600 font-semibold">{item.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                <p className="text-gray-500 text-xs">Location: {item.location}</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm mb-4">{item.description}</p>
                  <p className="text-sm mb-4 text-gray-300">Location: {item.location}</p>
                  <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors cursor-pointer">
                    View Project
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}