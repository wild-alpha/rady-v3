"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

// Updated Data for Beauty Salon Interiors
const designImages = [
  "/images/luxury-salon-design-dubai.jpg",
  "/images/modern-salon-interior-sharjah.jpg",
  "/images/contemporary-salon-uae.jpg",
];

const galleryImages = [
  {
    src: "/images/vservice2.webp", 
    link: "/beauty-salon-interior-design",
    title: "DOWNTOWN LUXURY SALON",
  },
  {
    src: "/images/vservice2.webp",
    link: "/salon-fit-out-dubai",
    title: "SHARJAH CHIC STUDIO",
  },
  {
    src: "/images/vservice1.webp",
    link: "/modern-treatment-rooms",
    title: "JUMEIRAH BEAUTY HUB",
  },
];

const faqs = [
  {
    question: "What makes a good beauty salon interior design?",
    answer: "A good salon design mixes beauty with practicality, ensuring the space looks great and works well. It focuses on welcoming waiting areas and modern treatment rooms.",
  },
  {
    question: "Do you provide full salon fit-out services?",
    answer: "Yes, Rady Interior offers full beauty salon fit out services in Dubai, Sharjah, and across the UAE, handling everything from design to execution smoothly.",
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
                Beauty Salon Interior Design Dubai
              </h2>

              <div className="text-sm sm:text-base leading-7 mb-4 space-y-4">
                <p>
                  Every beauty salon needs a welcoming and stylish space. It affects how customers feel and the overall vibe. At <Link href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline">Rady Interior</Link>, we turn salons into luxurious, functional places that show off your brand. We’re the best beauty salon interior design company in Dubai and Sharjah, making designs that wow your clients.
                </p>
                <p>
                  We mix beauty with practicality, making sure your salon looks great and works well. We design chic waiting areas and modern treatment rooms to fit your dream. Whether it’s a new salon or a refresh, we make it a standout spot.
                </p>
              </div>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit uppercase tracking-wider">
                Premier Salon Designers
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37] uppercase">
                Bespoke Beauty Spaces
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/salon-cover.webp" 
                    alt="Beauty Salon Design Presentation"
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
                    src="https://www.youtube.com/embed/F1tjU-4YMmg?autoplay=1&rel=0&modestbranding=1"
                    title="Salon Interior Design Portfolio"
                    frameBorder="0"
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
          Salon Design Mastery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {designImages.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg border border-[#8c6b1f]/20">
              <Image
                src={src}
                alt={`salon service ${index + 1}`}
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xs sm:text-xl font-semibold uppercase text-[#d4af37]">
            Start Your Salon Transformation
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
              As a trusted beauty salon <Link href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline"> interior design company in Dubai, </Link> we get the beauty industry’s needs. We design spaces that use every inch, feel comfy, and follow the latest trends. Our designs use top materials, smart lighting, and cool furniture for a luxury experience.
            </p>

            <p>
              Looking for a beauty salon interior design company that’s all about quality? Rady Interior is your go-to. With lots of experience in salon interior design in Dubai, we bring creativity and skill to every project. We also offer full beauty salon fit out services in Dubai, Sharjah and across the UAE, making your vision come to life smoothly.
            </p>

            <p>
              Working with Rady Interior means getting personal service, careful attention, and designs that take your salon to the next level. Let’s make a space where beauty and elegance meet. Get in touch today to talk about your project. See the difference of working with Dubai’s best beauty  <Link href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline"> salon design experts. </Link> 
            </p>
          </div>
        </div>

        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          RECENT SALON PROJECTS
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