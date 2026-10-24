// src/components/ContactSection.tsx
"use client";

import React, { useState } from "react";
import { MapPin, Send, Phone, Mail, Clock, Instagram } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
    visible: boolean;
  } | null>(null);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type, visible: true });

    setTimeout(() => {
      setToast((prev) => (prev ? { ...prev, visible: false } : null));
    }, 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (res.ok && json?.success) {
        showToast("Message sent! We will contact you shortly.", "success");

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        showToast("Failed to send. Please try again later.", "error");
        console.error("Contact API returned an error.");
      }
    } catch (err) {
      showToast("Error sending message. Please try again later.", "error");
      console.error("Contact submit error:", err);
    } finally {
      setLoading(false);
      setTimeout(() => setToast(null), 4000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section className="w-full py-20 bg-[#D8C4AC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-blue-950 font-bold text-xl mb-3">
              Mahadev Events
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#4D0E13]">
              Get In Touch
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Planning your dream wedding? Contact Mahadev Events for beautiful
              wedding stage decoration, mandap decoration, floral arrangements,
              and customized wedding decorations. Let us make your special day
              memorable.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-[#4D0E13]">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-950 mt-1 flex-shrink-0" />

                  <div>
                    <h3 className="font-semibold text-gray-600 text-lg mb-1">
                      Address
                    </h3>

                    <p className="text-black">
                      Saini Nagar,
                      <br />
                      Khatauli, M. Nagar
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-950 mt-1 flex-shrink-0" />

                  <div>
                    <h3 className="font-semibold text-gray-600 text-lg mb-1">
                      Phone
                    </h3>

                    <a
                      href="tel:+918218127638"
                      className="text-black transition-all duration-200 hover:text-blue-950 hover:font-semibold block mb-2"
                    >
                      +91 8218127638
                    </a>

                    <a
                      href="tel:+917055628456"
                      className="text-black transition-all duration-200 hover:text-blue-950 hover:font-semibold block"
                    >
                      +91 7055628456
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 text-green-600 mt-1 flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-600 text-lg mb-3">
                      WhatsApp
                    </h3>

                    <a
                      href="https://wa.me/918218127638"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat with Mahadev Events on WhatsApp"
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-5 rounded-full text-sm transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      Chat with Us
                    </a>

                    <p className="text-black text-sm mt-2">
                      Contact us for wedding decoration enquiries.
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-950 mt-1 flex-shrink-0" />

                  <div>
                    <h3 className="font-semibold text-gray-600 text-lg mb-1">
                      Email
                    </h3>

                    <a
                      href="mailto:khataulimahadevevents@gmail.com"
                      className="text-black block break-all transition-all duration-200 hover:text-blue-950 hover:font-semibold"
                    >
                      khataulimahadevevents@gmail.com
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <Instagram className="w-6 h-6 text-[#C8A49F] mt-1 flex-shrink-0" />

                  <div>
                    <h3 className="font-semibold text-gray-600 text-lg mb-1">
                      Instagram
                    </h3>

                    <a
                      href="https://www.instagram.com/mahadev_evants_khatauli?vrfl=MTNndGwwbm9pcTE1dQ=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black transition-all duration-200 hover:text-[#C8A49F] hover:font-semibold break-all"
                    >
                      @mahadev_evants_khatauli
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-blue-950 mt-1 flex-shrink-0" />

                  <div>
                    <h3 className="font-semibold text-gray-600 text-lg mb-1">
                      Business Hours
                    </h3>

                    <p className="text-black">
                      Contact us to discuss your event schedule.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#EEE4DA] rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-[#4D0E13]">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#C8A49F] mb-2"
                    >
                      Full Name *
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Full Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#C8A49F] mb-2"
                    >
                      Email Address *
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="youraddress@gmail.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[#C8A49F] mb-2"
                    >
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter Your Number"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-[#C8A49F] mb-2"
                    >
                      Company Name
                    </label>

                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter Your Company Name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-[#C8A49F] mb-2"
                  >
                    Service Interested In
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="Wedding Stage & Venue Decoration">
                      Wedding Stage & Venue Decoration
                    </option>
                    <option value="Wedding Mandap Decoration">
                      Wedding Mandap Decoration
                    </option>
                    <option value="Floral & Entrance Decoration">
                      Floral & Entrance Decoration
                    </option>
                    <option value="Lighting & Wedding Decoration">
                      Lighting & Wedding Decoration
                    </option>
                    <option value="Engagement & Reception Decoration">
                      Engagement & Reception Decoration
                    </option>
                    <option value="Haldi, Mehndi & Home Decoration">
                      Haldi, Mehndi & Home Decoration
                    </option>
                    <option value="Other Event Decoration">
                      Other Event Decoration
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#C8A49F] mb-2"
                  >
                    Message *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your wedding date, venue, and decoration requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition duration-200 text-lg flex items-center justify-center gap-2 ${
                    loading
                      ? "opacity-70 cursor-wait"
                      : "hover:bg-gray-900 active:scale-95"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send size={20} />
                </button>

                {statusMessage && (
                  <p className="mt-4 text-center">{statusMessage}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none transition-all duration-500 ${
            toast.visible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          <div
            className={`px-6 py-3 rounded-lg shadow-lg text-white font-semibold pointer-events-auto ${
              toast.type === "success" ? "bg-green-700" : "bg-red-700"
            }`}
          >
            {toast.message}
          </div>
        </div>
      )}
    </>
  );
}
