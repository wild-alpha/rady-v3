"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Villa Interior Design in Al Barari Dubai",
    description:
      "Ultra-luxury villa interior design, space planning, and bespoke styling in Al Barari Dubai.",
    bgImage: "/images/villa-al-barari.jpg",
    link: "/villa-interior-design-al-barari-dubai",
  },
  {
    title: "Mansion Interior Design in Al Barari Dubai",
    description:
      "Elegant mansion interiors with natural luxury finishes inspired by lush green living in Al Barari.",
    bgImage: "/images/mansion-al-barari.jpg",
    link: "/mansion-interior-design-al-barari-dubai",
  },
  {
    title: "Luxury Interior Design in Al Barari Dubai",
    description:
      "High-end bespoke interiors designed for nature-inspired luxury community living.",
    bgImage: "/images/luxury-al-barari.jpg",
    link: "/luxury-interior-design-al-barari-dubai",
  },
  {
    title: "Turnkey Fit-Out Solutions",
    description:
      "Complete design & build solutions from concept to handover.",
    bgImage: "/images/fitout-al-barari.jpg",
    link: "/turnkey-fitout-al-barari-dubai",
  },
];

const alBarariProjects = [
  {
    title: "Al Barari Villa Project",
    category: "Luxury Villa Interior",
    image: "/images/villa-project.jpg",
    link: "/al-barari-villa-project",
  },
  {
    title: "Modern Green Living Mansion",
    category: "High-End Residential",
    image: "/images/mansion-project.jpg",
    link: "/al-barari-mansion-project",
  },
  {
    title: "Nature-Inspired Living Room Design",
    category: "Luxury Interior Design",
    image: "/images/living-project.jpg",
    link: "/al-barari-living-room",
  },
  {
    title: "Contemporary Villa Fit-Out",
    category: "Villa Fit-Out",
    image: "/images/fitout-project.jpg",
    link: "/al-barari-villa-fitout",
  },
];

const AboutAlBarariDubai = () => {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">

        {/* HERO TEXT */}
        <div className="text-center mb-12">
          <h2 className="text-[#d4af37] text-3xl font-conthrax mb-4">
            INTERIOR DESIGN COMPANY IN AL BARARI DUBAI
          </h2>
          <p className="text-white font-play max-w-5xl mx-auto text-justify">
            <b className="text-[#f0c95a]">Rady Interiors</b> is a leading luxury interior
            design company in Al Barari Dubai, specializing in ultra-luxury villas,
            mansions, and nature-inspired residences. We design elegant, modern, and highly
            functional interiors that reflect the exclusive green living lifestyle of Al Barari.
          </p>
        </div>

        {/* ABOUT SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/al-barari-about.jpg"
              alt="Interior Design Al Barari Dubai"
              width={800}
              height={600}
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-[#d4af37] text-2xl font-conthrax mb-4">
              Luxury Nature-Inspired Interior Design in Al Barari
            </h3>
            <p className="text-white font-play mb-4">
              We specialize in ultra-luxury villas and mansions in Al Barari Dubai.
              Our designs combine natural aesthetics, elegance, and modern luxury living.
            </p>
            <p className="text-white font-play">
              At Rady Interiors, every detail is crafted with precision — from bespoke furniture
              to natural premium materials — ensuring world-class execution in Dubai’s most
              green and exclusive residential community.
            </p>

            <div className="flex gap-4 mt-6">
              <Link href="/gallery">
                <button className="bg-[#d4af37] px-6 py-3 rounded-md font-conthrax hover:bg-[#f0c95a]">
                  View Projects
                </button>
              </Link>
              <Link href="/contact-us">
                <button className="bg-[#d4af37] px-6 py-3 rounded-md font-conthrax hover:bg-[#f0c95a]">
                  Get Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <div className="text-center mb-10">
          <h2 className="text-[#d4af37] text-2xl font-conthrax">
            Our Services in Al Barari Dubai
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, i) => (
            <Link key={i} href={service.link}>
              <div className="relative h-[320px] rounded-2xl overflow-hidden group cursor-pointer">
                <Image
                  src={service.bgImage}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60" />
                <div className="absolute bottom-0 p-6 text-white z-10">
                  <h3 className="font-conthrax text-md mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-200">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* PROJECTS */}
        <div className="text-center mb-10">
          <h2 className="text-[#d4af37] text-2xl font-conthrax">
            Our Al Barari Dubai Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {alBarariProjects.map((project, i) => (
            <Link key={i} href={project.link}>
              <div className="relative h-[320px] rounded-2xl overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60" />
                <div className="absolute bottom-0 p-6 text-white z-10">
                  <h3 className="font-conthrax">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* WHY CHOOSE */}
        <div className="text-center mb-16">
          <h2 className="text-[#d4af37] text-2xl font-conthrax mb-4">
            Why Choose Rady Interiors in Al Barari Dubai
          </h2>
          <p className="text-white font-play max-w-5xl mx-auto text-justify">
            Rady Interiors is a trusted luxury interior design company in Al Barari Dubai,
            known for delivering bespoke villas and mansions with natural elegance,
            craftsmanship, and timeless design.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-black py-16">
          <h2 className="text-[#d4af37] text-3xl font-conthrax mb-4">
            Start Your Al Barari Interior Project Today
          </h2>
          <p className="text-white font-play max-w-4xl mx-auto mb-6">
            Transform your villa or mansion in Al Barari Dubai with Rady Interiors.
            Contact us today for luxury interior design and fit-out solutions.
          </p>

          <Link href="/contact-us">
            <button className="bg-[#d4af37] px-8 py-3 rounded-md font-conthrax hover:bg-[#f0c95a]">
              Contact Us
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AboutAlBarariDubai;