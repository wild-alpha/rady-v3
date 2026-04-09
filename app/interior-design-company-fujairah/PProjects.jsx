"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Villa Interior Design in Fujairah",
    description:
      "Luxury villa interior design with modern layouts, elegant finishes, and functional family spaces.",
    bgImage: "/images/villa-fujairah.jpg",
    link: "/villa-interior-design-fujairah",
  },
  {
    title: "Modern Arabic Interior Design",
    description:
      "Beautiful Arabic-inspired interiors blended with contemporary luxury design concepts.",
    bgImage: "/images/arabic-fujairah.jpg",
    link: "/arabic-interior-design-fujairah",
  },
  {
    title: "Contemporary Home Interiors",
    description:
      "Stylish and functional home interiors designed for modern villas in Fujairah.",
    bgImage: "/images/contemporary-fujairah.jpg",
    link: "/modern-home-interiors-fujairah",
  },
  {
    title: "Turnkey Fit-Out Solutions",
    description:
      "Complete interior design and fit-out services from concept to handover for villas and homes.",
    bgImage: "/images/fitout-fujairah.jpg",
    link: "/turnkey-fitout-fujairah",
  },
];

const fujairahProjects = [
  {
    title: "Luxury Villa Interior Project",
    category: "Villa Interior Design",
    image: "/images/villa-project-fujairah.jpg",
    link: "/fujairah-villa-project",
  },
  {
    title: "Modern Living Room Design",
    category: "Residential Interior",
    image: "/images/living-project-fujairah.jpg",
    link: "/fujairah-living-room",
  },
  {
    title: "Elegant Bedroom Interior",
    category: "Villa Interior Design",
    image: "/images/bedroom-project-fujairah.jpg",
    link: "/fujairah-bedroom",
  },
  {
    title: "Kitchen Fit-Out Design",
    category: "Modern Fit-Out",
    image: "/images/kitchen-project-fujairah.jpg",
    link: "/fujairah-kitchen-fitout",
  },
];

const AboutFujairah = () => {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">

        {/* HERO TEXT */}
        <div className="text-center mb-12">
          <h2 className="text-[#d4af37] text-3xl font-conthrax mb-4">
            INTERIOR DESIGN COMPANY IN FUJAIRAH
          </h2>
          <p className="text-white font-play max-w-5xl mx-auto text-justify">
            <b className="text-[#f0c95a]">Rady Interiors</b> is a leading interior
            design company in Fujairah, specializing in luxury villa interiors,
            modern home designs, and turnkey fit-out solutions. We create elegant,
            functional, and family-friendly spaces designed for comfortable and modern living.
          </p>
        </div>

        {/* ABOUT SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/fujairah-about.jpg"
              alt="Interior Design Fujairah"
              width={800}
              height={600}
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-[#d4af37] text-2xl font-conthrax mb-4">
              Villa Interior Design in Fujairah
            </h3>
            <p className="text-white font-play mb-4">
              We design premium villa interiors in Fujairah with a focus on open spaces,
              natural light, and elegant modern aesthetics.
            </p>
            <p className="text-white font-play">
              Our interiors combine luxury finishes with practical layouts to create
              comfortable, stylish, and highly functional homes for families.
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
            Our Services in Fujairah
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
            Our Fujairah Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {fujairahProjects.map((project, i) => (
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
            Why Choose Rady Interiors in Fujairah
          </h2>
          <p className="text-white font-play max-w-5xl mx-auto text-justify">
            Rady Interiors is a trusted interior design company in Fujairah,
            delivering high-end villa interiors with modern design concepts,
            premium craftsmanship, and functional family living solutions.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-black py-16">
          <h2 className="text-[#d4af37] text-3xl font-conthrax mb-4">
            Start Your Interior Design Project in Fujairah
          </h2>
          <p className="text-white font-play max-w-4xl mx-auto mb-6">
            Transform your villa in Fujairah with Rady Interiors.
            Contact us today for luxury interior design and fit-out services.
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

export default AboutFujairah;