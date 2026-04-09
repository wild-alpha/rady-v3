"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Apartment Interior Design in Dubai Marina",
    description:
      "Ultra-luxury apartment interior design, space planning, and bespoke styling in Dubai Marina.",
    bgImage: "/images/villa-dubai-marina.jpg",
    link: "/apartment-interior-design-dubai-marina",
  },
  {
    title: "Penthouse Interior Design in Dubai Marina",
    description:
      "Elegant penthouse interiors with premium finishes overlooking Marina skyline and sea views.",
    bgImage: "/images/mansion-dubai-marina.jpg",
    link: "/penthouse-interior-design-dubai-marina",
  },
  {
    title: "Luxury Interior Design in Dubai Marina",
    description:
      "High-end bespoke interiors designed for elite waterfront luxury living.",
    bgImage: "/images/luxury-dubai-marina.jpg",
    link: "/luxury-interior-design-dubai-marina",
  },
  {
    title: "Turnkey Fit-Out Solutions",
    description:
      "Complete design & build solutions from concept to handover.",
    bgImage: "/images/fitout-dubai-marina.jpg",
    link: "/turnkey-fitout-dubai-marina",
  },
];

const marinaProjects = [
  {
    title: "Dubai Marina Apartment Project",
    category: "Luxury Apartment Interior",
    image: "/images/apartment-project-marina.jpg",
    link: "/dubai-marina-apartment-project",
  },
  {
    title: "Marina Skyline Penthouse",
    category: "High-End Residential",
    image: "/images/penthouse-project-marina.jpg",
    link: "/dubai-marina-penthouse-project",
  },
  {
    title: "Luxury Waterfront Living Room",
    category: "Luxury Interior Design",
    image: "/images/living-project-marina.jpg",
    link: "/dubai-marina-living-room",
  },
  {
    title: "Contemporary Marina Fit-Out",
    category: "Apartment Fit-Out",
    image: "/images/fitout-project-marina.jpg",
    link: "/dubai-marina-apartment-fitout",
  },
];

const AboutDubaiMarina = () => {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">

        {/* HERO TEXT */}
        <div className="text-center mb-12">
          <h2 className="text-[#d4af37] text-3xl font-conthrax mb-4">
            INTERIOR DESIGN COMPANY IN DUBAI MARINA
          </h2>
          <p className="text-white font-play max-w-5xl mx-auto text-justify">
            <b className="text-[#f0c95a]">Rady Interiors</b> is a leading luxury interior
            design company in Dubai Marina, specializing in ultra-luxury waterfront apartments,
            penthouses, and high-rise residences. We design elegant, modern, and highly
            functional interiors that reflect the iconic waterfront lifestyle of Dubai Marina.
          </p>
        </div>

        {/* ABOUT SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/dubai-marina-about.jpg"
              alt="Interior Design Dubai Marina"
              width={800}
              height={600}
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-[#d4af37] text-2xl font-conthrax mb-4">
              Luxury Waterfront Interior Design in Dubai Marina
            </h3>
            <p className="text-white font-play mb-4">
              We specialize in ultra-luxury apartments and penthouses in Dubai Marina.
              Our designs combine elegance, functionality, and modern waterfront sophistication.
            </p>
            <p className="text-white font-play">
              At Rady Interiors, every detail is crafted with precision — from bespoke furniture
              to premium finishes — ensuring world-class execution in one of Dubai’s most
              iconic waterfront districts.
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
            Our Services in Dubai Marina
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
            Our Dubai Marina Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {marinaProjects.map((project, i) => (
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
            Why Choose Rady Interiors in Dubai Marina
          </h2>
          <p className="text-white font-play max-w-5xl mx-auto text-justify">
            Rady Interiors is a trusted luxury interior design company in Dubai Marina,
            known for delivering bespoke waterfront apartments and penthouses with exceptional craftsmanship,
            modern elegance, and timeless coastal design.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-black py-16">
          <h2 className="text-[#d4af37] text-3xl font-conthrax mb-4">
            Start Your Dubai Marina Interior Project Today
          </h2>
          <p className="text-white font-play max-w-4xl mx-auto mb-6">
            Transform your apartment or penthouse in Dubai Marina with Rady Interiors.
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

export default AboutDubaiMarina;