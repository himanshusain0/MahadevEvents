// src/components/AboutSection.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3 }} // 👈 triggers every time it enters viewport
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              About Mahadev Events
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 10 years of experience in the wedding decoration industry, Mahadev Events has
              established itself as a trusted provider of beautiful and creative wedding decoration
              services. Based in Saini Nagar, Khatauli M. Nagar, we specialize in transforming wedding
              venues into elegant and memorable spaces with stunning decorations, stage setups, floral
              arrangements, and customized event designs.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team is dedicated to delivering high-quality decoration services that reflect each
              client&apos;s unique vision and make every celebration truly special. With a focus on
              creativity, attention to detail, and customer satisfaction, Mahadev Events strives to
              make every wedding a beautiful and unforgettable experience.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { num: "500+", label: "Projects Completed" },
                { num: "100+", label: "Happy Couples" },
                { num: "10+", label: "Years Experience" },
                { num: "24/7", label: "Client Support" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ amount: 0.3 }}
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">{item.num}</div>
                  <div className="text-gray-600">{item.label}</div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-block bg-gray-900 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Learn More About Us
            </Link>
          </motion.div>
          <motion.div
            className="relative h-96 w-full group"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
          >
            <Image
              src='/images/website/profilepic.jpg'
              alt='Himanshu Sain - Owner of Mahadev Events'
              fill
              className="object-cover rounded-2xl shadow-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl transition-opacity duration-300 flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold">Himanshu Sain</h3>
                <p className="text-lg">Owner</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
