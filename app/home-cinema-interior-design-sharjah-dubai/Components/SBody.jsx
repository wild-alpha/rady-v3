"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

// Data updated for Home Cinema focus
const designImages = [
  "/images/luxury-home-cinema-dubai.jpg",
  "/images/modern-theater-design-sharjah.jpg",
  "/images/bespoke-cinema-interior-uae.jpg",
];

const galleryImages = [
  {
    src: "/images/cinema-project-1.webp",
    link: "/private-theater-design",
    title: "PALM JUMEIRAH CINEMA",
  },
  {
    src: "/images/cinema-project-2.webp",
    link: "/modern-home-theater",
    title: "EMIRATES HILLS ESTATE",
  },
  {
    src: "/images/cinema-project-3.webp",
    link: "/luxury-cinema-room",
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
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-widest py-2 text-[#d4af37] uppercase">
                Home Cinema Interior Design Sharjah, Dubai & UAE
              </h1>

              <div className="text-sm sm:text-base leading-7 mb-4 space-y-4">
                <p>
                  Home cinemas are grandeur statements. Anyone who enjoys a luxurious lifestyle would like to have one theater in home. Designing a home theater in Dubai could be intimidating for initiate, but we at Radyinterior have a remarkable team that deals solely in home cinema <a href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline">interior design </a> in Dubai.
                </p>
                <p>
                  The team explicitly sits with the client and indulges in a comprehensive consultation. The aim is to meet their requirements and exceed their expectations.
                </p>
              </div>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit uppercase tracking-wider">
                Luxury Lifestyle & Grandeur
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37] uppercase">
                Bespoke Cinema Experience
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/cinema-cover.webp"
                    alt="Home Cinema Design Video"
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
                    src="https://www.youtube.com/embed/F1tjU-4YMmg?autoplay=1&rel=0"
                    title="Home Cinema Interior Design Portfolio"
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
                REQUEST A CONSULTATION
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Visual Showcase */}
      <section className="py-10 px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          Home Theater Aesthetics
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {designImages.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg border border-[#8c6b1f]/20">
              <Image
                src={src}
                alt={`cinema interior style ${index + 1}`}
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xs sm:text-xl font-semibold uppercase text-[#d4af37]">
            Build Your Private Theater
          </h3>
          <p className="text-black text-sm sm:text-base font-semibold">
            Premier Home Cinema Interior Designers in Dubai & Sharjah
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
            <a
              href="https://wa.me/971588075603"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#d4af37] text-black font-play text-sm rounded w-full sm:w-auto text-center hover:bg-[#f0c95a] transition"
            >
              WhatsApp Us Now
            </a>
            <a
              href="mailto:info@radyinterior.ae"
              className="px-6 py-3 bg-[#8c6b1f] text-white font-play text-sm rounded w-full sm:w-auto text-center hover:bg-[#d4af37] hover:text-black transition"
            >
              Email Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: Detailed Content */}
      <section className="px-6 py-10 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="lg:max-w-[80%] mx-auto bg-[#141517] p-6 sm:p-10 rounded shadow text-left space-y-8 mb-12">
          
          <div>
            <p className="text-sm sm:text-base font-play leading-relaxed">
              
            When in come to design a home theater, our expert interior designers strike a perfect balance between the best interior and high quality tech that increases the functionality of the space. The furnishing is supposed to be comfortable yet stylish.
            But the home cinema interior design must stay on the technical side, soft lights, perfect placement of sound systems, and the highest quality screens are sourced to make the experience worthwhile.
            </p>
          </div>

         

          <div>
            <p className="text-sm sm:text-base font-play leading-relaxed">
              Rady interior designers try hard to achieve harmony between aesthetics and technical aspects while creating home theater interior design in UAE because, in this case, there is more than meets the eye. It is more about the grand experience.
            </p>
          </div>

          <div className="text-center pt-4">
            <p className="text-sm sm:text-base font-play italic text-[#d4af37]">
              Below are some work samples of Radyinterior, which is nothing more than a perfect sight for home cinema or theater designs in Dubai.
            </p>
          </div>
        </div>

        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          FEATURED CINEMA PROJECTS
        </h2>
        <div className="lg:max-w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {galleryImages.map(({ src, link, title }, i) => (
            <Link
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
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
};

export default SBody;