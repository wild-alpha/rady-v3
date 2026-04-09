"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Villa Interior Design in Dubai Hills Estate",
    description:
      "Ultra-luxury villa interior design, space planning, and bespoke styling in Dubai Hills Estate.",
    bgImage: "/images/villa-dubai-hills.jpg",
    link: "/villa-interior-design-dubai-hills-estate",
  },
  {
    title: "Apartment Interior Design in Dubai Hills Estate",
    description:
      "Elegant apartment interiors with modern layouts and premium luxury finishes in Dubai Hills Estate.",
    bgImage: "/images/apartment-dubai-hills.jpg",
    link: "/apartment-interior-design-dubai-hills-estate",
  },
  {
    title: "Luxury Interior Design in Dubai Hills Estate",
    description:
      "High-end bespoke interiors designed for premium golf course community living.",
    bgImage: "/images/luxury-dubai-hills.jpg",
    link: "/luxury-interior-design-dubai-hills-estate",
  },
  {
    title: "Turnkey Fit-Out Solutions",
    description:
      "Complete design & build solutions from concept to handover.",
    bgImage: "/images/fitout-dubai-hills.jpg",
    link: "/turnkey-fitout-dubai-hills-estate",
  },
];

const dubaiHillsProjects = [
  {
    title: "Dubai Hills Villa Project",
    category: "Luxury Villa Interior",
    image: "/images/villa-project.jpg",
    link: "/dubai-hills-villa-project",
  },
  {
    title: "Modern Golf Course Apartment",
    category: "High-End Residential",
    image: "/images/apartment-project.jpg",
    link: "/dubai-hills-apartment-project",
  },
  {
    title: "Luxury Living Room Design",
    category: "Interior Design",
    image: "/images/living-project.jpg",
    link: "/dubai-hills-living-room",
  },
  {
    title: "Contemporary Villa Fit-Out",
    category: "Villa Fit-Out",
    image: "/images/fitout-project.jpg",
    link: "/dubai-hills-villa-fitout",
  },
];

const AboutDubaiHillsEstate = () => {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">

        {/* HERO TEXT */}
        <div className="text-center mb-12">
          <h2 className="text-[#d4af37] text-3xl font-conthrax mb-4">
            INTERIOR DESIGN COMPANY IN DUBAI HILLS ESTATE
          </h2>
          <p className="text-white font-play max-w-5xl mx-auto text-justify">
            <b className="text-[#f0c95a]">Rady Interiors</b> is a leading luxury interior
            design company in Dubai Hills Estate, specializing in ultra-luxury villas,
            apartments, and golf course residences. We design elegant, modern, and highly
            functional interiors that reflect the premium lifestyle of Dubai Hills.
          </p>
        </div>

        {/* ABOUT SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/dubai-hills-about.jpg"
              alt="Interior Design Dubai Hills Estate"
              width={800}
              height={600}
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-[#d4af37] text-2xl font-conthrax mb-4">
              Luxury Golf Course Interior Design in Dubai Hills Estate
            </h3>
            <p className="text-white font-play mb-4">
              We specialize in ultra-luxury villas and apartments in Dubai Hills Estate.
              Our designs combine elegance, functionality, and modern family living.
            </p>
            <p className="text-white font-play">
              At Rady Interiors, every detail is crafted with precision — from bespoke furniture
              to premium materials — ensuring world-class execution in one of Dubai’s most
              prestigious golf course communities.
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
            Our Services in Dubai Hills Estate
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
            Our Dubai Hills Estate Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {dubaiHillsProjects.map((project, i) => (
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
            Why Choose Rady Interiors in Dubai Hills Estate
          </h2>
          <p className="text-white font-play max-w-5xl mx-auto text-justify">
            Rady Interiors is a trusted luxury interior design company in Dubai Hills Estate,
            known for delivering bespoke villas and apartments with exceptional craftsmanship,
            modern elegance, and timeless design.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-black py-16">
          <h2 className="text-[#d4af37] text-3xl font-conthrax mb-4">
            Start Your Dubai Hills Estate Interior Project Today
          </h2>
          <p className="text-white font-play max-w-4xl mx-auto mb-6">
            Transform your villa or apartment in Dubai Hills Estate with Rady Interiors.
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

export default AboutDubaiHillsEstate;