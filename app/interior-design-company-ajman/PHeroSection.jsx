"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const AjmanHeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/ajman-hero.webp"
        alt="Luxury villa interior design in Ajman"
        fill
        priority
        className="object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex items-center h-full">
        <div className="max-w-6xl px-6 md:px-16 text-white">

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-4xl font-conthrax leading-tight">
            Interior Design Company in <br /> Ajman
          </h1>

          {/* Description */}
          <p className="font-play mt-6 max-w-2xl text-gray-200">
            <b>Rady Interiors</b> is a premium interior design company in Ajman,
            specializing in luxury villa interiors, modern residential fit-out solutions,
            and bespoke high-end spaces. We design functional, elegant, and timeless interiors
            tailored to contemporary living in one of the UAE’s fast-growing residential emirates.
            From concept development to final execution, we deliver refined design solutions
            with exceptional craftsmanship and attention to detail.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/gallery"
              className="inline-block bg-[#d4af37] hover:bg-[#f0c95a] text-black font-conthrax px-6 py-3 rounded-md transition duration-300"
            >
              View Ajman Projects
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AjmanHeroSection;