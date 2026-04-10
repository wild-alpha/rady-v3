"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

// Updated to represent Dining/Restaurant interiors
const designImages = [
  "/images/luxury-dining-design-dubai.jpg",
  "/images/modern-restaurant-interior-sharjah.jpg",
  "/images/contemporary-dining-area-uae.jpg",
];

const galleryImages = [
  {
    src: "/images/vservice2.webp",
    link: "/classic-dining-interior-design",
    title: "PALM JUMEIRAH DINING",
  },
  {
    src: "/images/vservice2.webp",
    link: "/modern-dining-design",
    title: "EMIRATES HILLS ESTATE",
  },
  {
    src: "/images/vservice1.webp",
    link: "/luxury-dining-room",
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
                Restaurant Interior Design in Dubai
              </h2>

              <div className="text-sm sm:text-base leading-7 mb-4 space-y-4">
                <p>
                  In Dubai, Sharjah and across the UAE the fastest of all is the food industry. Hundreds of choices are available to suit your taste buds. The site owner loves to welcome high traffic and rejoice in returning investment as quickly as possible.
                </p>
                <p>
                  The ambiance, interior design, and seating arrangement are the key to making an outlet the talk of the town along with the food and menu. Commercial restaurant (food & beverage) outlets give a high impression if you have a bold and chic decor. Being the highest-ranking industry around the globe, restaurant <a href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline">interior design in Dubai</a>  and Sharjah has become more critical. </p>
              </div>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit uppercase tracking-wider">
                Exquisite Restaurant Design
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37] uppercase">
                Bespoke Dining Aesthetics
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/villa-cover.webp"
                    alt="Restaurant Interior Design Presentation"
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
                    src="https://www.youtube.com/embed/F1tjU-4YMmg?autoplay=1&rel=0&modestbranding=1&controls=1"
                    title="Restaurant Interior Design Portfolio"
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
          Modern Restaurant Mastery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {designImages.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg border border-[#8c6b1f]/20">
              <Image
                src={src}
                alt={`restaurant interior service ${index + 1}`}
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xs sm:text-xl font-semibold uppercase text-[#d4af37]">
            Start Your Transformation
          </h3>
          <p className="text-black text-sm sm:text-base font-semibold">
            Visit our studio in the world's luxury city, Dubai
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
            <a
              href="https://wa.me/971508181824"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#d4af37] text-black font-play text-sm rounded w-full sm:w-auto text-center hover:bg-[#f0c95a] transition"
            >
              Contact via WhatsApp
            </a>

            <a
              href="mailto:info@radyinterior.ae"
              className="px-6 py-3 bg-[#8c6b1f] text-white font-play text-sm rounded w-full sm:w-auto text-center hover:bg-[#d4af37] hover:text-black transition"
            >
              Contact via E-mail
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: Deep Content */}
      <section className="px-6 py-10 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="lg:max-w-[80%] mx-auto bg-[#141517] p-6 sm:p-10 rounded shadow text-center space-y-6 mb-12">
          

          <div className="space-y-4 text-sm sm:text-base font-play text-left leading-relaxed">
            <p>
              International food brands can’t enjoy the style and trend because they are bound to replicate the same theme worldwide. Your private restaurant (food & beverage point) allows you to play with your cultural theme miles away from your hometown. Radyinterior has a separate team of professionals highly skilled in designing restaurant interior design in Dubai, Sharjah and across the UAE.
            </p>

            <p>
              You can go into deep discussions and spread your wings on the unlimited skies of thoughts. Your thought process and our experts can design a stand alone piece of art to compete with a high zeal in the fastest growing food industry. You can offer a worthy dining experience to your valuable clients. <a href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline">High-quality artwork</a>  in the interior design can make everyone delighted and loyal to your brand.
            </p>

            <p>
              Radyinterior highly proficient interior designers can give your <a href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline">restaurant interior design</a>  in Dubai and Sharjah a new look that can create an unforgettable experience for visitors.
            </p>
          </div>
        </div>

        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          RECENT RESTAURANT PROJECTS
        </h2>
        <div className="lg:max-w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {galleryImages.map(({ src, link, title }, i) => (
            <a
              href={link}
              key={i}
              className="group block relative overflow-hidden rounded shadow border border-white/5"
            >
              <Image
                src={src}
                alt={title}
                width={400}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs sm:text-sm font-conthrax text-center uppercase px-2">
                  {title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </section>
  );
};

export default SBody;