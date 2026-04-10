"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

// Updated Data for Commercial Interiors
const designImages = [
  "/images/luxury-commercial-design-dubai.jpg",
  "/images/modern-office-interior-sharjah.jpg",
  "/images/contemporary-retail-space-uae.jpg",
];

const galleryImages = [
  {
    src: "/images/vservice2.webp", 
    link: "/commercial-interior-design-dubai",
    title: "OFFICE INTERIOR DESIGN",
  },
  {
    src: "/images/vservice2.webp",
    link: "/retail-shop-fitout",
    title: "MODERN RETAIL SPACE",
  },
  {
    src: "/images/vservice1.webp",
    link: "/restaurant-design-portfolio",
    title: "BUSINESS LOUNGE DUBAI",
  },
];

const faqs = [
  {
    question: "Why choose RadyInterior for commercial projects?",
    answer: "RadyInterior balances smart planning with practical touches, shaping every space to match both style and function while reflecting the brand's spirit.",
  },
  {
    question: "Do you offer full implementation services?",
    answer: "Yes, our approach encompasses everything from concept inception to final implementation, providing bespoke answers that meet high standards of excellence.",
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
                Commercial Interior Design Dubai
              </h2>

              <div className="text-sm sm:text-base leading-7 mb-4 space-y-4">
                <p>
                 RadyInterior leads is one of the top  <Link href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline"> Interior Design companies in Dubai </Link>, transforming commercial spaces with creativity and skill. Specializing in Commercial Interior Design Dubai, the team brings new life to offices, shops, and restaurants across the UAE.
                </p>
                <p>
                  Each project balances smart planning with practical touches that suit the client’s purpose. The architects and designers at Rady Interior take time to learn what each client wants, shaping every space to match both style and function.
                </p>
                 <p>
             Details matter here. From workspace layouts to lighting and finishes, each element is chosen to reflect the brand’s spirit and improve daily work life. RadyInterior’s dedication in commercial interior design quality shows in every finished space, helping companies create a positive setting for staff and guests.</p>

            <p>
             With a strong reputation among interior design companies in Dubai, RadyInterior makes office interior design simple and stress-free. If you want a business space that stands out and feels inviting, our team delivers both trust and results.</p>
              </div>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit uppercase tracking-wider">
                Top Commercial Designers
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37] uppercase">
                Style Meets Function
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/commercial-cover.webp" 
                    alt="Commercial Design Presentation"
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
                    title="Commercial Interior Design Portfolio"
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
          Commercial Design Mastery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {designImages.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg border border-[#8c6b1f]/20">
              <Image
                src={src}
                alt={`commercial service ${index + 1}`}
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xs sm:text-xl font-semibold uppercase text-[#d4af37]">
            Start Your Business Transformation
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
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37] uppercase">
            Innovative Commercial Designs by RadyInterior
          </h2>
          <div className="space-y-4 text-sm sm:text-base font-play text-left leading-relaxed">
            <p>
             RadyInterior’s approach stands out from other players within the competitive field of commercial design because it encompasses everything about designing, from concept inception to final implementation. They show how we offer bespoke answers that meet very high standards of excellence.</p>

            <p>
             To make  <Link href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline"> unique commercial interiors </Link>  capable of leaving an eternal impact, businesses have selected RadyInteriors which is synonymous with innovation and customer satisfaction.</p>

           
          </div>
        </div>

        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          RECENT COMMERCIAL PROJECTS
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