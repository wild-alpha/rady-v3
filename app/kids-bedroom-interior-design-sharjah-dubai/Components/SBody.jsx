"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

// Updated for Kids Bedroom interiors
const designImages = [
  "/images/luxury-kids-bedroom-dubai.jpg",
  "/images/creative-play-area-sharjah.jpg",
  "/images/modern-nursery-design-uae.jpg",
];

const galleryImages = [
  {
    src: "/images/kids-project-1.webp",
    link: "/themed-kids-bedroom",
    title: "PALM JUMEIRAH FANTASY ROOM",
  },
  {
    src: "/images/kids-project-2.webp",
    link: "/educational-room-design",
    title: "EMIRATES HILLS STUDY CORNER",
  },
  {
    src: "/images/kids-project-3.webp",
    link: "/modern-nursery-interior",
    title: "DISTRICT ONE CREATIVE SPACE",
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
                Kids Bedroom Interior Design Sharjah, Dubai & UAE
              </h1>

              <div className="text-sm sm:text-base leading-7 mb-4 space-y-4">
                <p>
                  The most convincing place to keep your kids engaged and happy is within their room premises. The focus point while creating kids bedroom interior design should be given to the choice and priorities of children.
                </p>
                <p>
                  The tiny elements to create joy and pleasure for children should be designed and decorated to attract multiple genders. The focus should not be on any gender. This variation and blend will keep the youngsters well-engaged and joyous.
                </p>
                <p>
                  In today’s time, the style and taste of each kid are different from one another. It is the art of professional interior design to bring out the personal idea of a kids bedroom interior design. For this purpose, our  <a href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline"> team at Rady </a> interior is working with passion to create statement kids bedroom <a href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline"> interior design </a>  in Dubai.
                </p>
              </div>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit uppercase tracking-wider">
                Creating Fantasy Worlds
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37] uppercase">
                Joyful & Creative Spaces
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/kids-cover.webp"
                    alt="Kids Bedroom Design Presentation"
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
                    title="Kids Interior Design Portfolio"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              <Link
                href="/contact-us"
                className="border border-[#8c6b1f] text-[#d4af37] text-xs sm:text-base font-play px-6 py-2 mt-6 w-fit uppercase rounded hover:bg-[#8c6b1f] hover:text-white transition-all duration-200"
              >
                BOOK A CONSULTATION
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Visual Showcase */}
      <section className="py-10 px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          Imaginative Room Concepts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {designImages.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg border border-[#8c6b1f]/20">
              <Image
                src={src}
                alt={`kids room design ${index + 1}`}
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xs sm:text-xl font-semibold uppercase text-[#d4af37]">
            Bring Joy to Your Children
          </h3>
          <p className="text-black text-sm sm:text-base font-semibold">
            Bespoke interiors from the design lab of Rady Interiors
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
            <a
              href="https://wa.me/971508181824"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#d4af37] text-black font-play text-sm rounded w-full sm:w-auto text-center hover:bg-[#f0c95a] transition"
            >
              WhatsApp Us
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

      {/* Section 3: Professional Insights */}
      <section className="px-6 py-10 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="lg:max-w-[80%] mx-auto bg-[#141517] p-6 sm:p-10 rounded shadow text-left space-y-6 mb-12">
          

          <div className="space-y-4 text-sm sm:text-base font-play leading-relaxed">
            <p>
              The safe and delicate toys are placed on the fixed walls and corners of the room to keep a generous empty place for their physical joy and activity. In kids bedroom a little corner for reading and school work designed in a delightful style to keep kids disciplined and focused.
            </p>
            <p>
              The comfy bedding, lighting, wall fixtures, color scheme, and rugs on the floor should be selected wisely. The trained team members of <a href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline">Radyinterior</a> have plenty of creative ideas to enhance the joy of the kids. Children have a sharp trend of mood swings and rapid switching over to novelty. The first step towards kids bedroom interior design is to adopt the theme and style of permanent impact.
            </p>
            <p>
              The research and study of kids’ mentality is imperative. Rady interior designers can induce charm and joy for kids so they will always feel refreshed and delighted to spend time in their room with their belongings. Let your kids enjoy the pleasure of living in a fantasy world by choosing the best creative designs from the design lab of Rady Interiors.
            </p>
          </div>
        </div>

        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          RECENT KIDS ROOM PROJECTS
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