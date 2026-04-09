"use client";

import React from "react";
import Image from "next/image";

const AlRahmaniyaHeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/al-rahmaniya-hero.webp"
        alt="Luxury villa interior design in Al Rahmaniya Sharjah"
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
            Interior Design Company in <br /> Al Rahmaniya Sharjah
          </h1>

          {/* Subheading */}
          <p className="font-play mt-6 max-w-2xl text-gray-200">
            <b>Rady Interiors</b> is a leading interior design company in Al Rahmaniya Sharjah,
            specializing in luxury villa interiors, modern home designs, and turnkey fit-out
            solutions. We create elegant, functional, and family-focused interiors tailored for
            comfortable living in one of Sharjah’s most peaceful residential communities.
            From concept to completion, we deliver high-quality design solutions with premium
            craftsmanship and modern aesthetics.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <button className="bg-[#d4af37] hover:bg-[#f0c95a] text-black font-conthrax px-6 py-3 rounded-md transition duration-300">
              <a href="/gallery">
                View Al Rahmaniya Projects
              </a>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AlRahmaniyaHeroSection;