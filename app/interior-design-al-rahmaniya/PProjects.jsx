"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Villa Interior Design in Al Rahmaniya Sharjah",
    description:
      "Luxury villa interior design tailored for modern family living with functional layouts and premium finishes.",
    bgImage: "/images/villa-al-rahmaniya.jpg",
    link: "/villa-interior-design-al-rahmaniya-sharjah",
  },
  {
    title: "Modern Arabic Interior Design",
    description:
      "Elegant interiors blending traditional Arabic aesthetics with modern design elements.",
    bgImage: "/images/arabic-al-rahmaniya.jpg",
    link: "/arabic-interior-design-al-rahmaniya",
  },
  {
    title: "Contemporary Home Interiors",
    description:
      "Stylish and functional interiors designed for villas and townhouses in Al Rahmaniya.",
    bgImage: "/images/contemporary-al-rahmaniya.jpg",
    link: "/modern-home-interiors-al-rahmaniya",
  },
  {
    title: "Turnkey Fit-Out Solutions",
    description:
      "Complete interior design & fit-out services from concept to execution for residential spaces.",
    bgImage: "/images/fitout-al-rahmaniya.jpg",
    link: "/turnkey-fitout-al-rahmaniya",
  },
];

const rahmaniyaProjects = [
  {
    title: "Luxury Villa Interior Project",
    category: "Villa Interior Design",
    image: "/images/villa-project-rahmaniya.jpg",
    link: "/al-rahmaniya-villa-project",
  },
  {
    title: "Modern Living Room Design",
    category: "Residential Interior",
    image: "/images/living-project-rahmaniya.jpg",
    link: "/al-rahmaniya-living-room",
  },
  {
    title: "Elegant Bedroom Interior",
    category: "Villa Interior Design",
    image: "/images/bedroom-project-rahmaniya.jpg",
    link: "/al-rahmaniya-bedroom",
  },
  {
    title: "Kitchen Fit-Out Design",
    category: "Modern Fit-Out",
    image: "/images/kitchen-project-rahmaniya.jpg",
    link: "/al-rahmaniya-kitchen-fitout",
  },
];

const AboutAlRahmaniya = () => {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">

        {/* HERO TEXT */}
        <div className="text-center mb-12">
          <h2 className="text-[#d4af37] text-3xl font-conthrax mb-4">
            INTERIOR DESIGN COMPANY IN AL RAHMANIYA SHARJAH
          </h2>
          <p className="text-white font-play max-w-5xl mx-auto text-justify">
            <b className="text-[#f0c95a]">Rady Interiors</b> is a leading interior
            design company in Al Rahmaniya Sharjah, specializing in villa interior
            design, modern home styling, and turnkey fit-out solutions. We create
            elegant, functional, and family-friendly spaces designed for modern living.
          </p>
        </div>

        {/* ABOUT SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/al-rahmaniya-about.jpg"
              alt="Interior Design Al Rahmaniya Sharjah"
              width={800}
              height={600}
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-[#d4af37] text-2xl font-conthrax mb-4">
              Villa Interior Design in Al Rahmaniya Sharjah
            </h3>
            <p className="text-white font-play mb-4">
              We specialize in designing luxury villa interiors in Al Rahmaniya,
              focusing on spacious layouts, natural lighting, and comfortable family living.
            </p>
            <p className="text-white font-play">
              Our team delivers customized interiors with premium materials,
              modern aesthetics, and practical functionality tailored to your lifestyle.
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
            Our Services in Al Rahmaniya Sharjah
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
            Our Al Rahmaniya Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {rahmaniyaProjects.map((project, i) => (
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
            Why Choose Rady Interiors in Al Rahmaniya
          </h2>
          <p className="text-white font-play max-w-5xl mx-auto text-justify">
            Rady Interiors is known for delivering high-quality villa interior
            design in Al Rahmaniya Sharjah, combining modern aesthetics,
            functional layouts, and premium craftsmanship tailored for families
            and contemporary lifestyles.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-black py-16">
          <h2 className="text-[#d4af37] text-3xl font-conthrax mb-4">
            Start Your Interior Design Project in Al Rahmaniya
          </h2>
          <p className="text-white font-play max-w-4xl mx-auto mb-6">
            Transform your villa or home in Al Rahmaniya Sharjah with Rady Interiors.
            Contact us today for professional interior design and fit-out solutions.
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

export default AboutAlRahmaniya;