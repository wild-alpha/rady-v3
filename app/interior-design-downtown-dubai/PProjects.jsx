"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Apartment Interior Design in Downtown Dubai",
    description:
      "Ultra-luxury apartment interior design, space planning, and bespoke styling in Downtown Dubai.",
    bgImage: "/images/villa-downtown-dubai.jpg",
    link: "/apartment-interior-design-downtown-dubai",
  },
  {
    title: "Penthouse Interior Design in Downtown Dubai",
    description:
      "Elegant penthouse interiors with premium finishes overlooking Burj Khalifa views.",
    bgImage: "/images/mansion-downtown-dubai.jpg",
    link: "/penthouse-interior-design-downtown-dubai",
  },
  {
    title: "Luxury Interior Design in Downtown Dubai",
    description:
      "High-end bespoke interiors designed for elite urban luxury living.",
    bgImage: "/images/luxury-downtown-dubai.jpg",
    link: "/luxury-interior-design-downtown-dubai",
  },
  {
    title: "Turnkey Fit-Out Solutions",
    description:
      "Complete design & build solutions from concept to handover.",
    bgImage: "/images/fitout-downtown-dubai.jpg",
    link: "/turnkey-fitout-downtown-dubai",
  },
];

const downtownProjects = [
  {
    title: "Downtown Dubai Apartment Project",
    category: "Luxury Apartment Interior",
    image: "/images/apartment-project.jpg",
    link: "/downtown-dubai-apartment-project",
  },
  {
    title: "Burj Khalifa View Penthouse",
    category: "High-End Residential",
    image: "/images/penthouse-project.jpg",
    link: "/downtown-dubai-penthouse-project",
  },
  {
    title: "Luxury Living Room Design",
    category: "Luxury Interior Design",
    image: "/images/living-project.jpg",
    link: "/downtown-dubai-living-room",
  },
  {
    title: "Contemporary Apartment Fit-Out",
    category: "Apartment Fit-Out",
    image: "/images/fitout-project.jpg",
    link: "/downtown-dubai-apartment-fitout",
  },
];

const AboutDowntownDubai = () => {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">

        {/* HERO TEXT */}
        <div className="text-center mb-12">
          <h2 className="text-[#d4af37] text-3xl font-conthrax mb-4">
            INTERIOR DESIGN COMPANY IN DOWNTOWN DUBAI
          </h2>
          <p className="text-white font-play max-w-5xl mx-auto text-justify">
            <b className="text-[#f0c95a]">Rady Interiors</b> is a leading luxury interior
            design company in Downtown Dubai, specializing in ultra-luxury apartments,
            penthouses, and high-rise residences. We design elegant, modern, and highly
            functional interiors that reflect the iconic urban lifestyle of Downtown Dubai.
          </p>
        </div>

        {/* ABOUT SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/downtown-dubai-about.jpg"
              alt="Interior Design Downtown Dubai"
              width={800}
              height={600}
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-[#d4af37] text-2xl font-conthrax mb-4">
              Luxury High-Rise Interior Design in Downtown Dubai
            </h3>
            <p className="text-white font-play mb-4">
              We specialize in ultra-luxury apartments and penthouses in Downtown Dubai.
              Our designs combine elegance, functionality, and modern urban sophistication.
            </p>
            <p className="text-white font-play">
              At Rady Interiors, every detail is crafted with precision — from bespoke furniture
              to premium finishes — ensuring world-class execution in one of Dubai’s most
              iconic districts.
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
            Our Services in Downtown Dubai
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
            Our Downtown Dubai Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {downtownProjects.map((project, i) => (
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
            Why Choose Rady Interiors in Downtown Dubai
          </h2>
          <p className="text-white font-play max-w-5xl mx-auto text-justify">
            Rady Interiors is a trusted luxury interior design company in Downtown Dubai,
            known for delivering bespoke apartments and penthouses with exceptional craftsmanship,
            modern elegance, and timeless urban design.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-black py-16">
          <h2 className="text-[#d4af37] text-3xl font-conthrax mb-4">
            Start Your Downtown Dubai Interior Project Today
          </h2>
          <p className="text-white font-play max-w-4xl mx-auto mb-6">
            Transform your apartment or penthouse in Downtown Dubai with Rady Interiors.
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

export default AboutDowntownDubai;