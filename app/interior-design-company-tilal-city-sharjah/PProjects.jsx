"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Villa Interior Design in Tilal City Sharjah",
    description:
      "Luxury villa interior design with modern layouts, smart space planning, and premium finishes.",
    bgImage: "/images/villa-tilal-city-sharjah.jpg",
    link: "/villa-interior-design-tilal-city-sharjah",
  },
  {
    title: "Townhouse Interior Design in Tilal City Sharjah",
    description:
      "Contemporary townhouse interiors designed for comfort, functionality, and modern family living.",
    bgImage: "/images/mansion-tilal-city-sharjah.jpg",
    link: "/townhouse-interior-design-tilal-city-sharjah",
  },
  {
    title: "Luxury Interior Design in Tilal City Sharjah",
    description:
      "High-end bespoke interiors crafted with elegant materials and refined aesthetics.",
    bgImage: "/images/luxury-tilal-city-sharjah.jpg",
    link: "/luxury-interior-design-tilal-city-sharjah",
  },
  {
    title: "Turnkey Fit-Out Solutions",
    description:
      "Complete design & build solutions from concept to handover for residential projects.",
    bgImage: "/images/fitout-tilal-city-sharjah.jpg",
    link: "/turnkey-fitout-tilal-city-sharjah",
  },
];

const tilalProjects = [
  {
    title: "Tilal City Villa Project",
    category: "Luxury Villa Interior",
    image: "/images/apartment-project-tilal.jpg",
    link: "/tilal-city-sharjah-villa-project",
  },
  {
    title: "Modern Living Room Design",
    category: "Contemporary Interior Design",
    image: "/images/living-project-tilal.jpg",
    link: "/tilal-city-sharjah-living-room",
  },
  {
    title: "Elegant Bedroom Interior",
    category: "Residential Interior Design",
    image: "/images/bedroom-project-tilal.jpg",
    link: "/tilal-city-sharjah-bedroom",
  },
  {
    title: "Premium Kitchen Fit-Out",
    category: "Modern Fit-Out",
    image: "/images/kitchen-project-tilal.jpg",
    link: "/tilal-city-sharjah-kitchen-fitout",
  },
];

const AboutTilalCitySharjah = () => {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">

        {/* HERO TEXT */}
        <div className="text-center mb-12">
          <h2 className="text-[#d4af37] text-3xl font-conthrax mb-4">
            INTERIOR DESIGN COMPANY IN TILAL CITY SHARJAH
          </h2>
          <p className="text-white font-play max-w-5xl mx-auto text-justify">
            <b className="text-[#f0c95a]">Rady Interiors</b> is a leading luxury interior
            design company in Tilal City Sharjah, specializing in villas, townhouses,
            and modern residential developments. We create elegant, functional, and
            lifestyle-driven interiors tailored to the evolving urban living standards
            of Tilal City.
          </p>
        </div>

        {/* ABOUT SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/tilal-city-sharjah-about.jpg"
              alt="Interior Design Tilal City Sharjah"
              width={800}
              height={600}
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-[#d4af37] text-2xl font-conthrax mb-4">
              Modern Interior Design in Tilal City Sharjah
            </h3>
            <p className="text-white font-play mb-4">
              We specialize in modern villas and townhouses in Tilal City Sharjah,
              delivering designs that combine elegance, functionality, and contemporary
              architectural aesthetics.
            </p>
            <p className="text-white font-play">
              At Rady Interiors, every space is thoughtfully designed — from custom
              furniture to premium finishes — ensuring high-quality execution in one
              of Sharjah’s fastest-growing residential communities.
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
            Our Services in Tilal City Sharjah
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
            Our Tilal City Sharjah Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {tilalProjects.map((project, i) => (
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
            Why Choose Rady Interiors in Tilal City Sharjah
          </h2>
          <p className="text-white font-play max-w-5xl mx-auto text-justify">
            Rady Interiors is a trusted interior design company in Tilal City Sharjah,
            known for delivering luxury villa and townhouse interiors with refined
            aesthetics, innovative layouts, and exceptional craftsmanship tailored
            to modern living.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-black py-16">
          <h2 className="text-[#d4af37] text-3xl font-conthrax mb-4">
            Start Your Tilal City Sharjah Interior Project Today
          </h2>
          <p className="text-white font-play max-w-4xl mx-auto mb-6">
            Transform your villa or townhouse in Tilal City Sharjah with Rady Interiors.
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

export default AboutTilalCitySharjah;