"use client";

import React from "react";
import Image from "next/image";

const TilalCitySharjahHeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/tilal-city-sharjah-hero.webp"
        alt="Luxury villa interior design Tilal City Sharjah"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex items-center h-full">
        <div className="max-w-6xl px-6 md:px-16 text-white">

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-4xl font-conthrax leading-tight">
            Interior Design Company in <br /> Tilal City Sharjah
          </h1>

          {/* Subheading */}
          <p className="font-play mt-6 max-w-2xl text-gray-200">
            <b>Rady Interiors</b> is a premier interior design company in Tilal City Sharjah,
            specializing in modern villas, residential developments, and contemporary living spaces.
            We design elegant, functional, and lifestyle-driven interiors that reflect the
            growing urban vision of Tilal City. From concept to completion, we deliver
            world-class interior design and fit-out solutions tailored to modern family living
            in one of Sharjah’s fastest-developing communities.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <button className="bg-[#d4af37] hover:bg-[#f0c95a] text-black font-conthrax px-6 py-3 rounded-md transition duration-300">
              <a href="/gallery">
                View Tilal City Sharjah Projects
              </a>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TilalCitySharjahHeroSection;