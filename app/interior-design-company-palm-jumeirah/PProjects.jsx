"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Villa Interior Design in Palm Jumeirah",
    description:
      "Luxury villa interior design, space planning, and bespoke styling in Palm Jumeirah.",
    bgImage: "/images/villa-palm.jpg",
    link: "/villa-interior-design-palm-jumeirah",
  },
  {
    title: "Apartment Interior Design in Palm Jumeirah",
    description:
      "Modern apartment interiors with elegant layouts and premium finishes.",
    bgImage: "/images/apartment-palm.jpg",
    link: "/apartment-interior-design-palm-jumeirah",
  },
  {
    title: "Luxury Interior Design in Palm Jumeirah",
    description:
      "High-end luxury interiors tailored for exclusive waterfront living.",
    bgImage: "/images/luxury-palm.jpg",
    link: "/luxury-interior-design-palm-jumeirah",
  },
  {
    title: "Turnkey Fit-Out Solutions",
    description:
      "Complete design & build solutions from concept to handover.",
    bgImage: "/images/fitout-palm.jpg",
    link: "/turnkey-fitout-palm-jumeirah",
  },
];

const palmProjects = [
  {
    title: "Palm Jumeirah Villa Project",
    category: "Luxury Villa Interior",
    image: "/images/villa-project.jpg",
    link: "/palm-villa-project",
  },
  {
    title: "Beachfront Apartment Design",
    category: "Residential Apartment",
    image: "/images/apartment-project.jpg",
    link: "/palm-apartment-project",
  },
  {
    title: "Luxury Penthouse Interior",
    category: "Penthouse Design",
    image: "/images/penthouse.jpg",
    link: "/palm-penthouse",
  },
  {
    title: "Modern Villa Fit-Out",
    category: "Villa Fit-Out",
    image: "/images/fitout-project.jpg",
    link: "/palm-villa-fitout",
  },
];

const AboutPalmJumeirah = () => {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">

        {/* HERO TEXT */}
        <div className="text-center mb-12">
          <h2 className="text-[#d4af37] text-3xl font-conthrax mb-4">
            INTERIOR DESIGN COMPANY IN PALM JUMEIRAH DUBAI
          </h2>
          <p className="text-white font-play max-w-5xl mx-auto text-justify">
            <b className="text-[#f0c95a]">Rady Interiors</b> is a leading interior design
            company in Palm Jumeirah specializing in luxury villas, apartments,
            and waterfront properties. We create elegant, modern, and highly
            functional spaces that reflect the exclusive lifestyle of Palm
            Jumeirah residents. From concept to completion, we handle every
            detail with precision and creativity.
          </p>
        </div>

        {/* ABOUT SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/palm-about.jpg"
              alt="Interior Design Palm Jumeirah"
              width={800}
              height={600}
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-[#d4af37] text-2xl font-conthrax mb-4">
              Luxury Interior Design Services in Palm Jumeirah
            </h3>
            <p className="text-white font-play mb-4">
              We specialize in creating world-class interiors for villas and
              apartments in Palm Jumeirah. Our design approach focuses on luxury,
              comfort, and functionality, ensuring each space is unique and
              personalized.
            </p>
            <p className="text-white font-play">
              From smart space planning to premium material selection, Rady Interiors
              ensures every project meets the highest standards of design and
              execution in Dubai’s most prestigious location.
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
            Our Services in Palm Jumeirah
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
            Our Palm Jumeirah Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {palmProjects.map((project, i) => (
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
            Why Choose Rady Interiors in Palm Jumeirah
          </h2>
          <p className="text-white font-play max-w-5xl mx-auto text-justify">
            Rady Interiors stands out as a trusted interior design company in Palm
            Jumeirah due to our commitment to luxury, detail, and innovation. We
            deliver tailored design solutions for villas, apartments, and penthouses
            with a focus on elegance and functionality. Our team ensures smooth
            execution, timely delivery, and premium quality finishes for every
            project.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-black py-16">
          <h2 className="text-[#d4af37] text-3xl font-conthrax mb-4">
            Start Your Palm Jumeirah Interior Project Today
          </h2>
          <p className="text-white font-play max-w-4xl mx-auto mb-6">
            Transform your home or villa in Palm Jumeirah with Rady Interiors.
            Contact us today for luxury interior design and fit-out solutions
            tailored to your lifestyle.
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

export default AboutPalmJumeirah;