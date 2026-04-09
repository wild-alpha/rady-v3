"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const designImages = [
  "/images/luxury-wardrobe-design-dubai.jpg",
  "/images/modern-dressing-room-sharjah.jpg",
  "/images/bespoke-closet-design-uae.jpg",
];

const galleryImages = [
  {
    src: "/images/vservice2.webp",
    link: "/luxury-walk-in-closet",
    title: "PALM JUMEIRAH DRESSING",
  },
  {
    src: "/images/vservice2.webp",
    link: "/modern-wardrobe-design",
    title: "EMIRATES HILLS CLOSET",
  },
  {
    src: "/images/vservice1.webp",
    link: "/bespoke-dressing-room",
    title: "DISTRICT ONE MBR",
  },
];

const SBody = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="bg-[#000000] text-[#ffffff]">
      {/* Section 1: Introduction */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 font-sans">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2 flex flex-col justify-start">
              <h2 className="text-sm sm:text-xl md:text-xl font-bold tracking-widest py-2 text-[#d4af37] uppercase">
                Dressing Room Interior Design Sharjah, Dubai & UAE
              </h2>

              <div className="text-sm sm:text-base leading-7 mb-4 space-y-4">
                <p>
                  The bedroom and bathroom of every home have a small but critical portion that is desirable and attractive. 
                  <a href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline"> Luxurious wardrobes</a> with aesthetically lightened dressing room interior design are the soul of every bedroom.
                </p>
                <p>
                  RadyInterior not only deals with <a href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline">bedrooms</a> interior design and <a href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline">bathrooms</a> interior design but also provides full service for all your home interior design in Dubai including interior designing for dressing rooms. Modern and stylish sliding panels are ideal for managing the space and outlook of the bedroom. A beautiful rug is a must for a comfortable and walk-friendly dressing room.
                </p>
                <p>
                  Spotlights to ease your dressing and makeup are the real mood makers for dressing room interior design in Dubai. It is imperative to provide maximum storage to make the dressing room highly functional. The limited portion of the bedroom with an independent entity is hard to maintain without going out of the actual theme of the bedroom.
                </p>
              </div>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit uppercase tracking-wider">
                Luxury Wardrobe Solutions
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37] uppercase">
                Elegance in Every Detail
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/villa-cover.webp"
                    alt="Dressing Room Design Portfolio"
                    width={1280}
                    height={720}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm transition group-hover:scale-110">
                      <FaPlay className="text-white text-xl sm:text-2xl ml-1" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full aspect-video border-4 border-[#8c6b1f] rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/F1tjU-4YMmg?autoplay=1"
                    title="Dressing Room Interior Design"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              <Link
                href="/contact-us"
                className="border border-[#8c6b1f] text-[#d4af37] text-xs sm:text-base font-play px-6 py-2 mt-6 w-fit uppercase rounded hover:bg-[#8c6b1f] hover:text-white transition-all duration-200"
              >
                GET YOUR QUOTE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Visual Showcase */}
      <section className="py-10 px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          Luxury Closet & Wardrobe Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {designImages.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg border border-[#8c6b1f]/20">
              <Image
                src={src}
                alt={`dressing room service ${index + 1}`}
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xs sm:text-xl font-semibold uppercase text-[#d4af37]">
            Work with Global Brands
          </h3>
          <p className="text-black text-sm sm:text-base font-medium px-4">
            Partnered with IKEA, Poliform, Armani Casa, California Closets, and more.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
            <a
              href="https://wa.me/971588075603"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#d4af37] text-black font-play text-sm rounded w-full sm:w-auto text-center hover:bg-[#f0c95a] transition"
            >
              WhatsApp Consultation
            </a>
            <a
              href="mailto:info@radyinterior.ae"
              className="px-6 py-3 bg-[#8c6b1f] text-white font-play text-sm rounded w-full sm:w-auto text-center hover:bg-[#d4af37] hover:text-black transition"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: Details */}
      <section className="px-6 py-10 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="lg:max-w-[80%] mx-auto bg-[#141517] p-6 sm:p-10 rounded shadow mb-12">
          <div className="space-y-4 text-sm sm:text-base font-play text-left leading-relaxed text-gray-300">
            <p>
              It is critical to select the correct timber, glass, or any material that matches the theme and furniture of the bedroom. <a href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline">RadyInterior</a> has partnered with all the big brands to fulfill each client’s demands. IKEA, California Closets, Elfa, PAX, ClosetMaid, Hafele, Poliform, Armani Casa, Walk-in Closets, Wardrobes, we can manage it all.
            </p>
            <p>
              For stylish and highly functional dressing room <a href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline">interior design in Dubai</a>, we provide expert solutions as per your taste. 
              From beautiful rugs to integrated smart storage, we manage it all.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SBody;