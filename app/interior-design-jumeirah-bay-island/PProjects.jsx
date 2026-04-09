"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Villa Interior Design in Jumeirah Bay Island",
    description:
      "Ultra-luxury villa interior design, space planning, and bespoke styling in Jumeirah Bay Island.",
    bgImage: "/images/villa-jumeirah-bay.jpg",
    link: "/villa-interior-design-jumeirah-bay-island",
  },
  {
    title: "Apartment Interior Design in Jumeirah Bay Island",
    description:
      "Exclusive waterfront apartment interiors with elegant layouts and premium finishes.",
    bgImage: "/images/apartment-jumeirah-bay.jpg",
    link: "/apartment-interior-design-jumeirah-bay-island",
  },
  {
    title: "Luxury Interior Design in Jumeirah Bay Island",
    description:
      "High-end bespoke interiors designed for ultra-exclusive island living.",
    bgImage: "/images/luxury-jumeirah-bay.jpg",
    link: "/luxury-interior-design-jumeirah-bay-island",
  },
  {
    title: "Turnkey Fit-Out Solutions",
    description:
      "Complete design & build solutions from concept to handover.",
    bgImage: "/images/fitout-jumeirah-bay.jpg",
    link: "/turnkey-fitout-jumeirah-bay-island",
  },
];

const jumeirahBayProjects = [
  {
    title: "Jumeirah Bay Island Villa Project",
    category: "Luxury Villa Interior",
    image: "/images/villa-project.jpg",
    link: "/jumeirah-bay-villa-project",
  },
  {
    title: "Luxury Waterfront Apartment",
    category: "High-End Residential",
    image: "/images/apartment-project.jpg",
    link: "/jumeirah-bay-apartment-project",
  },
  {
    title: "Sea View Penthouse Interior",
    category: "Penthouse Design",
    image: "/images/penthouse.jpg",
    link: "/jumeirah-bay-penthouse",
  },
  {
    title: "Modern Island Villa Fit-Out",
    category: "Villa Fit-Out",
    image: "/images/fitout-project.jpg",
    link: "/jumeirah-bay-villa-fitout",
  },
];

const AboutJumeirahBayIsland = () => {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">

        {/* HERO TEXT */}
        <div className="text-center mb-12">
          <h2 className="text-[#d4af37] text-3xl font-conthrax mb-4">
            INTERIOR DESIGN COMPANY IN JUMEIRAH BAY ISLAND DUBAI
          </h2>
          <p className="text-white font-play max-w-5xl mx-auto text-justify">
            <b className="text-[#f0c95a]">Rady Interiors</b> is a premier luxury interior
            design company in Jumeirah Bay Island, Dubai, specializing in ultra-exclusive villas,
            waterfront apartments, and bespoke island residences. We design timeless, elegant,
            and highly functional interiors that reflect the prestige of island living.
          </p>
        </div>

        {/* ABOUT SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/jumeirah-bay-about.jpg"
              alt="Interior Design Jumeirah Bay Island"
              width={800}
              height={600}
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-[#d4af37] text-2xl font-conthrax mb-4">
              Luxury Waterfront Interior Design in Jumeirah Bay Island
            </h3>
            <p className="text-white font-play mb-4">
              We specialize in ultra-luxury villas, penthouses, and apartments on Jumeirah Bay Island.
              Our designs combine elegance, exclusivity, and modern luxury living.
            </p>
            <p className="text-white font-play">
              At Rady Interiors, every project is crafted with precision — from bespoke furniture
              to premium materials — ensuring world-class execution in Dubai’s most exclusive island location.
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
            Our Services in Jumeirah Bay Island
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
            Our Jumeirah Bay Island Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {jumeirahBayProjects.map((project, i) => (
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
            Why Choose Rady Interiors in Jumeirah Bay Island
          </h2>
          <p className="text-white font-play max-w-5xl mx-auto text-justify">
            Rady Interiors is a trusted luxury interior design company for Jumeirah Bay Island,
            known for delivering ultra-premium waterfront villas and apartments with exceptional detail,
            craftsmanship, and timeless design.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-black py-16">
          <h2 className="text-[#d4af37] text-3xl font-conthrax mb-4">
            Start Your Jumeirah Bay Island Interior Project Today
          </h2>
          <p className="text-white font-play max-w-4xl mx-auto mb-6">
            Transform your waterfront villa or apartment on Jumeirah Bay Island with Rady Interiors.
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

export default AboutJumeirahBayIsland;