"use client";

import React from "react";
import { Square, Truck, Circle, Lightbulb, Megaphone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import TiltUnipole from "@/components/TiltUnipole";
import DashedPath from "@/components/CurvedPath";
import Link from "next/link";

const allServices = [

  {
    icon: <Megaphone size={48} className="text-red-500" />,
    title: "Haldi, Mehndi & Home Decoration",
    path: "/services/haldi-mehndi-home-decoration-khatauli",
    description:
      "Add color and happiness to your pre-wedding celebrations with creative Haldi, Mehndi, and home decorations. From vibrant floral setups to beautiful traditional themes, we make every celebration feel special.",
    features: [
      "Colorful Haldi Decoration",
      "Creative Mehndi Setup",
      "Wedding Home Decoration",
      "Customized Floral & Traditional Themes",
    ],
    image: "/images/portfolio/image1.jpeg",
  },
  {
    icon: <Square size={48} className="text-blue-500" />,
    title: "Wedding Stage & Venue Decoration",
    path: "/services/wedding-stage-venue-decoration-khatauli",
    description:
      "Transform your wedding venue into a beautiful and unforgettable celebration space with Mahadev Events. We create stunning wedding stages, elegant backdrops, and customized venue decorations to make your special day truly memorable.",
    features: [
      "Customized Wedding Stage Designs",
      "Elegant Venue Decoration",
      "Premium Backdrops & Floral Themes",
      "Professional Decoration Setup",
    ],
    image: "/images/portfolio/image3.jpeg",
  },
  {
    icon: <Truck size={48} className="text-purple-500" />,
    title: "Wedding Mandap Decoration",
    path: "/services/wedding-mandap-decoration-khatauli",
    description:
      "Make your wedding rituals special with beautifully designed mandaps. From traditional Indian wedding themes to modern decorative styles, we create a stunning setting for your most precious moments.",
    features: [
      "Traditional & Modern Mandap Designs",
      "Floral Mandap Decoration",
      "Elegant Draping & Backdrops",
      "Customized Wedding Themes",
    ],
    image: "/images/portfolio/image6.jpeg",
  },
  {
    icon: <Circle size={48} className="text-cyan-500" />,
    title: "Floral & Entrance Decoration",
    path: "/services/floral-entrance-decoration-khatauli",
    description:
      "Welcome your guests with beautiful floral arrangements and eye-catching entrance decorations. Our creative designs add elegance, color, and charm to your wedding venue from the very first impression.",
    features: [
      "Beautiful Flower Arrangements",
      "Decorative Wedding Entrances",
      "Floral Gate & Arch Designs",
      "Customized Decoration Themes",
    ],
    image: "/images/portfolio/image2.jpeg",
  },
  {
    icon: <Lightbulb size={48} className="text-yellow-500" />,
    title: "Lighting & Wedding Decoration",
    path: "/services/wedding-lighting-decoration-khatauli",
    description:
      "Create a magical wedding atmosphere with beautiful lighting and coordinated decorations. We help enhance your stage, venue, and celebration spaces with lighting arrangements that complement your wedding theme.",
    features: [
      "Decorative Stage Lighting",
      "Wedding Venue Illumination",
      "Ambient & Decorative Lights",
      "Theme-Based Lighting Setup",
    ],
    image: "/images/portfolio/image2.jpeg",
  },
  {
    icon: <Megaphone size={48} className="text-red-500" />,
    title: "Engagement & Reception Decoration",
    path: "/services/engagement-reception-decoration-khatauli",
    description:
      "Celebrate your engagement and reception in style with elegant stage designs, creative backdrops, and coordinated venue decorations. Mahadev Events brings your ideas to life with personalized decoration arrangements.",
    features: [
      "Engagement Stage Decoration",
      "Reception Stage Designs",
      "Customized Event Themes",
      "Elegant Photo Backdrops",
    ],
    image: "/images/portfolio/image5.jpeg",
  },
  
];

export default function ServicesSection() {
  return (
    <section className="w-full py-10 mb-1 md:py-20 bg-[#EEE4DA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-28">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#4D0E13]">
            Our Wedding Decoration Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Mahadev Events specializes in beautiful wedding stage decoration,
            mandap designs, floral arrangements, and customized event decoration
            to make every celebration memorable in Khatauli and nearby areas.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-35 md:space-y-40">
          {allServices.map((service, index) => (
            <React.Fragment key={service.path}>
              <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Service Text */}
                <motion.div
                  className={`
                    order-2 -mb-19
                    ${index % 2 === 1 ? "md:order-2" : "md:order-1"}
                  `}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -80 : 80,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-4 mb-4 md:mb-6">
                    <div className="p-2 md:p-3 bg-[#0C3B2E]/10 rounded-xl">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#4D0E13]">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <ArrowRight
                          size={16}
                          className="text-blue-500 flex-shrink-0"
                        />
                        <span className="text-[#C8A49F] text-sm md:text-base">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Link
                      href={service.path}
                      className="inline-flex items-center gap-2 bg-[#0C3B2E] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:gap-3"
                    >
                      Learn More
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.div>

                {/* Service Image */}
                <motion.div
                  className={`
                    order-1 mb-19 md:mb-1
                    ${index % 2 === 1 ? "md:order-1" : "md:order-2"}
                    flex justify-center w-full mt-6 md:mt-0
                  `}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? 80 : -80,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.2,
                  }}
                >
                  <div className="w-full mb-10 max-w-md md:max-w-full">
                    <TiltUnipole
                      image={service.image}
                      tilt={index % 2 === 0 ? "left" : "right"}
                      title={service.title}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Decorative Dashed Path */}
              <div
                className={`hidden [@media(min-width:1300px)]:flex -mb-16 -mt-27 -p-4 justify-center dashed-path-wrapper ${
                  index % 2 !== 1 ? "scale-x-[-1] mr-73" : "ml-73"
                }`}
              >
                {index !== allServices.length - 1 && (
                  <DashedPath
                    width={640}
                    height={400}
                    curve={10}
                    orientation="horizontal"
                    colorStart="purple"
                    colorEnd="cyan"
                  />
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}