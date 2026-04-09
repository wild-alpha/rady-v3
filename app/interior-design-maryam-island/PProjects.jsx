"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Apartment Interior Design in Maryam Island Sharjah",
    description:
      "Modern apartment interior design, space planning, and bespoke styling in Maryam Island Sharjah.",
    bgImage: "/images/villa-maryam-island-sharjah.jpg",
    link: "/apartment-interior-design-maryam-island-sharjah",
  },
  {
    title: "Townhouse Interior Design in Maryam Island Sharjah",
    description:
      "Elegant townhouse interiors with premium finishes and contemporary lifestyle-focused layouts.",
    bgImage: "/images/mansion-maryam-island-sharjah.jpg",
    link: "/townhouse-interior-design-maryam-island-sharjah",
  },
  {
    title: "Luxury Interior Design in Maryam Island Sharjah",
    description:
      "High-end bespoke interiors designed for waterfront modern living in Maryam Island Sharjah.",
    bgImage: "/images/luxury-maryam-island-sharjah.jpg",
    link: "/luxury-interior-design-maryam-island-sharjah",
  },
  {
    title: "Turnkey Fit-Out Solutions",
    description: "Complete design & build solutions from concept to handover.",
    bgImage: "/images/fitout-maryam-island-sharjah.jpg",
    link: "/turnkey-fitout-maryam-island-sharjah",
  },
];

const maryamIslandProjects = [
  {
    title: "Maryam Island Apartment Project",
    category: "Modern Waterfront Apartment",
    image: "/images/apartment-project-maryam-island.jpg",
    link: "/maryam-island-sharjah-apartment-project",
  },
  {
    title: "Contemporary Waterfront Townhouse Design",
    category: "High-End Residential",
    image: "/images/townhouse-project-maryam-island.jpg",
    link: "/maryam-island-sharjah-townhouse-project",
  },
  {
    title: "Luxury Living Room Design",
    category: "Luxury Interior Design",
    image: "/images/living-project-maryam-island.jpg",
    link: "/maryam-island-sharjah-living-room",
  },
  {
    title: "Modern Fit-Out Project",
    category: "Apartment Fit-Out",
    image: "/images/fitout-project-maryam-island.jpg",
    link: "/maryam-island-sharjah-apartment-fitout",
  },
];

const AboutMaryamIslandSharjah = () => {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">

        {/* HERO TEXT */}
        <div className="text-center mb-12">
          <h2 className="text-[#d4af37] text-3xl font-conthrax mb-4">
            INTERIOR DESIGN COMPANY IN MARYAM ISLAND SHARJAH
          </h2>
          <p className="text-white font-play max-w-5xl mx-auto text-justify">
            <b className="text-[#f0c95a]">Rady Interiors</b> is a leading luxury interior
            design company in Maryam Island Sharjah, specializing in modern waterfront apartments,
            townhouses, and contemporary residential interiors. We design elegant, functional, and
            lifestyle-driven spaces that reflect premium waterfront living.
          </p>
        </div>

        {/* ABOUT SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/maryam-island-sharjah-about.jpg"
              alt="Interior Design Maryam Island Sharjah"
              width={800}
              height={600}
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-[#d4af37] text-2xl font-conthrax mb-4">
              Modern Waterfront Interior Design in Maryam Island Sharjah
            </h3>
            <p className="text-white font-play mb-4">
              We specialize in luxury waterfront apartments and townhouses in Maryam Island Sharjah.
              Our designs combine elegance, functionality, and modern coastal living aesthetics.
            </p>
            <p className="text-white font-play">
              At Rady Interiors, every space is thoughtfully designed — from custom furniture
              to premium finishes — ensuring high-end execution in one of Sharjah’s most prestigious
              waterfront communities.
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
            Our Services in Maryam Island Sharjah
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
            Our Maryam Island Sharjah Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {maryamIslandProjects.map((project, i) => (
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
            Why Choose Rady Interiors in Maryam Island Sharjah
          </h2>
          <p className="text-white font-play max-w-5xl mx-auto text-justify">
            Rady Interiors is a trusted luxury interior design company in Maryam Island Sharjah,
            known for delivering modern waterfront apartments and townhouses with refined aesthetics,
            exceptional craftsmanship, and lifestyle-focused design solutions.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-black py-16">
          <h2 className="text-[#d4af37] text-3xl font-conthrax mb-4">
            Start Your Maryam Island Sharjah Interior Project Today
          </h2>
          <p className="text-white font-play max-w-4xl mx-auto mb-6">
            Transform your waterfront apartment or townhouse in Maryam Island Sharjah with Rady Interiors.
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

export default AboutMaryamIslandSharjah;