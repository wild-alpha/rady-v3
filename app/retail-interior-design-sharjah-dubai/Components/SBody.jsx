"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

// Data updated for Retail focus
const designImages = [
  "/images/luxury-retail-design-dubai.jpg",
  "/images/modern-retail-sharjah.jpg",
  "/images/commercial-interior-uae.jpg",
];

const galleryImages = [
  {
    src: "/images/retail-project-1.webp",
    link: "/commercial-retail-design",
    title: "COMMERCIAL RETAIL HUB",
  },
  {
    src: "/images/retail-project-2.webp",
    link: "/boutique-store-design",
    title: "BOUTIQUE STORE SHARJAH",
  },
  {
    src: "/images/retail-project-3.webp",
    link: "/luxury-showroom-design",
    title: "LUXURY SHOWROOM",
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
                Retail Interior Design Sharjah, Dubai & UAE
              </h1>

              <div className="text-sm sm:text-base leading-7 mb-4 space-y-4">
                <p>
                  Designing a commercial space requires a strategic approach that balances aesthetics, customer flow, and operational efficiency. Unlike residential projects, <a href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline"> retail interiors </a> must support high footfall, smooth circulation, and clear navigation key elements of successful retail <a href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline">interior design in Dubai</a> .
                </p>
                <p>
                  <strong>Efficient Retail Layouts</strong><br />
                  Retail spaces must display products clearly, prevent congestion, and guide customers naturally through the store. Proper zoning, optimized shelving heights, intuitive pathways, and efficient checkout areas directly impact customer satisfaction and sales. Poorly planned layouts can disrupt browsing and reduce conversions.
                </p>
              </div>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit uppercase tracking-wider">
                Functional. High Performing. Success.
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37] uppercase">
                Expert Retail Design & Fit Out
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/retail-cover.webp"
                    alt="Retail Design Video"
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
                    title="Retail Interior Design Portfolio"
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

      {/* Section 2: Visual Showcase & Brand Story */}
      <section className="py-10 px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          Engaging Retail Environments
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {designImages.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg border border-[#8c6b1f]/20">
              <Image
                src={src}
                alt={`retail interior style ${index + 1}`}
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xs sm:text-xl font-semibold uppercase text-[#d4af37]">
            Why Smart Retail Design Matters
          </h3>
          <p className="text-black text-sm sm:text-base font-semibold">
            A well designed store feels cohesive, clear, and engaging.
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

      {/* Section 3: Functional Details & Services */}
      <section className="px-6 py-10 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="lg:max-w-[80%] mx-auto bg-[#141517] p-6 sm:p-10 rounded shadow text-left space-y-8 mb-12">
          
          <div>
            <h3 className="text-[#d4af37] text-lg font-bold uppercase mb-3">Engaging Retail Environments</h3>
            <p className="text-sm sm:text-base font-play leading-relaxed">
              Customers should be able to scan products quickly and move without obstruction. Balanced lighting, strategic signage, and well planned displays improve visibility and encourage longer visits. Lighting plays a major role by highlighting merchandise and creating an inviting atmosphere.
            </p>
          </div>

          <div>
            <h3 className="text-[#d4af37] text-lg font-bold uppercase mb-3">RadyInterior’s Retail Fit-Out Approach</h3>
            <p className="text-sm sm:text-base font-play leading-relaxed">
              RadyInterior designs commercial and retail interiors across Dubai, Sharjah, and the UAE, focusing on performance, brand identity, and customer experience. Our solutions include:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-sm sm:text-base font-play">
              <li>Smart zoning and circulation planning</li>
              <li>Custom shelving and display units</li>
              <li>Modular partitions for adaptable layouts</li>
              <li>Optimized shelf dimensions based on site measurements</li>
              <li>Integrated branding elements and lighting accents</li>
            </ul>
            <p className="text-sm sm:text-base font-play leading-relaxed mt-4">
              We create retail spaces that attract visitors, support browsing, and convert footfall into sales.
            </p>
          </div>

          <div>
            <h3 className="text-[#d4af37] text-lg font-bold uppercase mb-3">Why Smart Retail Design Matters</h3>
            <p className="text-sm sm:text-base font-play leading-relaxed">
              A well designed store feels cohesive, clear, and engaging. Strong branding, curated textures, lighting sequences, and clean layouts make even non committed visitors interact with the space.
            </p>
          </div>

          <div>
            <p className="text-sm sm:text-base font-play leading-relaxed">
              To elevate your retail or commercial space, connect with <a href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline"> RadyInterior </a>. <a href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline"> Our team</a> delivers functional, high performing interiors that enhance customer experience and business success.
            </p>
          </div>
        </div>

        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          FEATURED RETAIL PROJECTS
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