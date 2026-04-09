"use client";

import React from "react";
import Image from "next/image";

const AlBarariHeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/5.webp"
        alt="Luxury Interior Design Al Barari Dubai"
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
            Interior Design Company in <br /> Al Barari, Dubai
          </h1>

          {/* Subheading */}
          <p className="font-play mt-6 max-w-2xl text-gray-200">
            <b>Rady Interiors</b> is a premier luxury interior design company in Al Barari,
            Dubai, specializing in ultra-luxury villas and nature-inspired mansions.
            We design timeless, elegant, and highly functional interiors that reflect the lush
            green lifestyle and exclusivity of Al Barari. From concept to completion, we deliver
            world-class interior solutions tailored to nature-inspired luxury living.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <button className="bg-[#d4af37] hover:bg-[#f0c95a] text-black font-conthrax px-6 py-3 rounded-md transition duration-300">
              <a href="/gallery">
                View Al Barari Projects
              </a>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AlBarariHeroSection;