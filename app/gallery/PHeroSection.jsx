"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const PHeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/5.webp"
        alt="Interior Design & Fit Out Projects"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex min-h-screen items-center justify-center px-4 sm:px-6 md:px-10">
        <div className="w-full max-w-6xl text-center text-white">
          {/* Main Heading */}
          <h1 className="font-conthrax text-xl sm:text-2xl lg:text-5xl leading-tight mt-40">
            Interior Design &amp; Fit Out Projects
          </h1>

          {/* Subheading */}
          <p className="mx-auto mt-6 max-w-4xl font-play text-base sm:text-lg lg:text-xl leading-relaxed text-white/90">
            Browse our residential, commercial, office, retail and hospitality
            interior design and fit out projects across UAE including Dubai and
            Sharjah
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link href="/gallery">
              <button className="min-w-[auto] rounded-2xl bg-black px-8 py-4 font-conthrax text-sm sm:text-md text-[#d4af37] transition duration-300 hover:bg-[#111111] hover:text-[#f0c95a]">
                View Projects
              </button>
            </Link>

            <Link href="/contact-us">
              <button className="min-w-[auto] rounded-2xl bg-black px-8 py-4 font-conthrax text-sm sm:text-md text-[#d4af37] transition duration-300 hover:bg-[#111111] hover:text-[#f0c95a]">
                Get Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PHeroSection;