"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Villa Interior Design in Sharjah Sustainable City",
    description:
      "Eco-friendly villa interior design with smart space planning and sustainable materials.",
    bgImage: "/images/villa-sharjah-sustainable-city.jpg",
    link: "/villa-interior-design-sharjah-sustainable-city",
  },
  {
    title: "Eco Luxury Interior Design",
    description:
      "Sustainable luxury interiors combining modern aesthetics with energy-efficient solutions.",
    bgImage: "/images/mansion-sharjah-sustainable-city.jpg",
    link: "/eco-luxury-interior-design-sharjah-sustainable-city",
  },
  {
    title: "Modern Sustainable Interiors",
    description:
      "Contemporary interiors designed with natural materials and environmentally conscious concepts.",
    bgImage: "/images/luxury-sharjah-sustainable-city.jpg",
    link: "/modern-sustainable-interiors-sharjah",
  },
  {
    title: "Turnkey Fit-Out Solutions",
    description:
      "Complete design & build solutions from concept to handover for sustainable villas.",
    bgImage: "/images/fitout-sharjah-sustainable-city.jpg",
    link: "/turnkey-fitout-sharjah-sustainable-city",
  },
];

const sustainableProjects = [
  {
    title: "Sustainable City Villa Project",
    category: "Eco-Luxury Villa Interior",
    image: "/images/apartment-project-ssc.jpg",
    link: "/sharjah-sustainable-city-villa-project",
  },
  {
    title: "Modern Eco Living Room Design",
    category: "Sustainable Interior Design",
    image: "/images/living-project-ssc.jpg",
    link: "/sharjah-sustainable-city-living-room",
  },
  {
    title: "Eco-Friendly Bedroom Design",
    category: "Villa Interior Design",
    image: "/images/bedroom-project-ssc.jpg",
    link: "/sharjah-sustainable-city-bedroom",
  },
  {
    title: "Sustainable Kitchen Fit-Out",
    category: "Modern Fit-Out",
    image: "/images/kitchen-project-ssc.jpg",
    link: "/sharjah-sustainable-city-kitchen-fitout",
  },
];

const AboutSharjahSustainableCity = () => {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">

        {/* HERO TEXT */}
        <div className="text-center mb-12">
          <h2 className="text-[#d4af37] text-3xl font-conthrax mb-4">
            INTERIOR DESIGN COMPANY IN SHARJAH SUSTAINABLE CITY
          </h2>
          <p className="text-white font-play max-w-5xl mx-auto text-justify">
            <b className="text-[#f0c95a]">Rady Interiors</b> is a leading luxury interior
            design company in Sharjah Sustainable City, specializing in eco-friendly villas
            and modern sustainable living spaces. We create elegant, functional, and
            environmentally conscious interiors that redefine luxury through sustainability.
          </p>
        </div>

        {/* ABOUT SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/sharjah-sustainable-city-about.jpg"
              alt="Interior Design Sharjah Sustainable City"
              width={800}
              height={600}
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-[#d4af37] text-2xl font-conthrax mb-4">
              Eco-Friendly Interior Design in Sharjah Sustainable City
            </h3>
            <p className="text-white font-play mb-4">
              We specialize in sustainable villa interiors designed to enhance energy efficiency,
              natural lighting, and modern lifestyle comfort.
            </p>
            <p className="text-white font-play">
              At Rady Interiors, every project is crafted with eco-conscious materials,
              smart layouts, and premium finishes, delivering a perfect balance between
              sustainability and luxury living.
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
            Our Services in Sharjah Sustainable City
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
            Our Sharjah Sustainable City Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sustainableProjects.map((project, i) => (
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
            Why Choose Rady Interiors in Sharjah Sustainable City
          </h2>
          <p className="text-white font-play max-w-5xl mx-auto text-justify">
            Rady Interiors is a trusted interior design company in Sharjah Sustainable City,
            known for delivering eco-luxury villa interiors with innovative design,
            sustainable materials, and exceptional craftsmanship tailored to modern living.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-black py-16">
          <h2 className="text-[#d4af37] text-3xl font-conthrax mb-4">
            Start Your Sustainable Interior Project Today
          </h2>
          <p className="text-white font-play max-w-4xl mx-auto mb-6">
            Transform your villa in Sharjah Sustainable City with Rady Interiors.
            Contact us today for eco-friendly interior design and fit-out solutions.
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

export default AboutSharjahSustainableCity;