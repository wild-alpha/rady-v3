"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Apartment Interior Design in Aljada Sharjah",
    description:
      "Modern apartment interior design, space planning, and bespoke styling in Aljada Sharjah.",
    bgImage: "/images/villa-aljada-sharjah.jpg",
    link: "/apartment-interior-design-aljada-sharjah",
  },
  {
    title: "Townhouse Interior Design in Aljada Sharjah",
    description:
      "Elegant townhouse interiors with premium finishes and contemporary lifestyle-focused layouts.",
    bgImage: "/images/mansion-aljada-sharjah.jpg",
    link: "/townhouse-interior-design-aljada-sharjah",
  },
  {
    title: "Luxury Interior Design in Aljada Sharjah",
    description:
      "High-end bespoke interiors designed for modern urban living in Aljada Sharjah.",
    bgImage: "/images/luxury-aljada-sharjah.jpg",
    link: "/luxury-interior-design-aljada-sharjah",
  },
  {
    title: "Turnkey Fit-Out Solutions",
    description: "Complete design & build solutions from concept to handover.",
    bgImage: "/images/fitout-aljada-sharjah.jpg",
    link: "/turnkey-fitout-aljada-sharjah",
  },
];

const alJadaProjects = [
  {
    title: "Aljada Apartment Project",
    category: "Modern Apartment Interior",
    image: "/images/apartment-project-aljada.jpg",
    link: "/aljada-sharjah-apartment-project",
  },
  {
    title: "Contemporary Townhouse Design",
    category: "High-End Residential",
    image: "/images/townhouse-project-aljada.jpg",
    link: "/aljada-sharjah-townhouse-project",
  },
  {
    title: "Luxury Living Room Design",
    category: "Luxury Interior Design",
    image: "/images/living-project-aljada.jpg",
    link: "/aljada-sharjah-living-room",
  },
  {
    title: "Modern Fit-Out Project",
    category: "Apartment Fit-Out",
    image: "/images/fitout-project-aljada.jpg",
    link: "/aljada-sharjah-apartment-fitout",
  },
];

const AboutAlJadaSharjah = () => {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">

        {/* HERO TEXT */}
        <div className="text-center mb-12">
          <h2 className="text-[#d4af37] text-3xl font-conthrax mb-4">
            INTERIOR DESIGN COMPANY IN ALJADA SHARJAH
          </h2>
          <p className="text-white font-play max-w-5xl mx-auto text-justify">
            <b className="text-[#f0c95a]">Rady Interiors</b> is a leading luxury interior
            design company in Aljada Sharjah, specializing in modern apartments, townhouses,
            and contemporary residential spaces. We design elegant, functional, and lifestyle-driven
            interiors that reflect the vibrant urban community of Aljada.
          </p>
        </div>

        {/* ABOUT SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/aljada-sharjah-about.jpg"
              alt="Interior Design Aljada Sharjah"
              width={800}
              height={600}
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-[#d4af37] text-2xl font-conthrax mb-4">
              Modern Interior Design in Aljada Sharjah
            </h3>
            <p className="text-white font-play mb-4">
              We specialize in modern apartments and townhouses in Aljada Sharjah.
              Our designs combine functionality, elegance, and contemporary urban living.
            </p>
            <p className="text-white font-play">
              At Rady Interiors, every space is thoughtfully designed — from custom furniture
              to premium finishes — ensuring high-quality execution in one of Sharjah’s most
              dynamic residential communities.
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
            Our Services in Aljada Sharjah
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
            Our Aljada Sharjah Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {alJadaProjects.map((project, i) => (
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
            Why Choose Rady Interiors in Aljada Sharjah
          </h2>
          <p className="text-white font-play max-w-5xl mx-auto text-justify">
            Rady Interiors is a trusted luxury interior design company in Aljada Sharjah,
            known for delivering modern apartments and townhouses with exceptional craftsmanship,
            contemporary elegance, and functional lifestyle-focused design solutions.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-black py-16">
          <h2 className="text-[#d4af37] text-3xl font-conthrax mb-4">
            Start Your Aljada Sharjah Interior Project Today
          </h2>
          <p className="text-white font-play max-w-4xl mx-auto mb-6">
            Transform your apartment or townhouse in Aljada Sharjah with Rady Interiors.
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

export default AboutAlJadaSharjah;