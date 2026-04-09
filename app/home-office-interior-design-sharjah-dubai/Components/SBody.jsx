"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

// Data updated for Home Office focus
const designImages = [
  "/images/luxury-home-office-dubai.jpg",
  "/images/modern-workspace-sharjah.jpg",
  "/images/bespoke-office-interior-uae.jpg",
];

const galleryImages = [
  {
    src: "/images/office-project-1.webp",
    link: "/executive-home-office",
    title: "PALM JUMEIRAH WORKSPACE",
  },
  {
    src: "/images/office-project-2.webp",
    link: "/modern-study-room",
    title: "EMIRATES HILLS STUDY",
  },
  {
    src: "/images/office-project-3.webp",
    link: "/minimalist-office-design",
    title: "DISTRICT ONE MBR OFFICE",
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
                Home Office Interior Design Dubai, Sharjah
              </h1>

              <div className="text-sm sm:text-base leading-7 mb-4 space-y-4">
                <p>
                  Your home office is a vulnerable spot in your living room or bedroom. You can’t ignore and bear the mere interference of any of the house members while you are occupying a working seat. A stylish and relaxing well design office at your home is a good idea to bring a mental break from routine office life. <a href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline">RadyInterior</a> provides solutions to all your residential and commercial interior design in Dubai.
                </p>
                <p>
                  A well-designed modern home office allows you to complete tasks efficiently while maintaining focus and productivity. Your home workspace should reflect your professional style and be cutomized to your workflow. By creating an organized and comfortable office space at home, you can achieve both mental clarity and physical comfort, making every work session more effective and enjoyable.
                </p>
              </div>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit uppercase tracking-wider">
                Productivity Meets Elegance
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37] uppercase">
                Expert Workspace Solutions
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/office-cover.webp"
                    alt="Home Office Design Presentation"
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
                    title="Home Office Interior Design Portfolio"
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
                BOOK A FREE CONSULTATION
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Visual Showcase */}
      <section className="py-10 px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          Why Choose Radyinterior for home office design?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {designImages.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg border border-[#8c6b1f]/20">
              <Image
                src={src}
                alt={`home office style ${index + 1}`}
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xs sm:text-xl font-semibold uppercase text-[#d4af37]">
            Professionalism in Your Second Office Space
          </h3>
          <p className="text-black text-sm sm:text-base font-semibold">
            The Best Office Interior Design Company in Dubai
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
            <a
              href="https://wa.me/971588075603"
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

      {/* Section 3: Professional Insights */}
      <section className="px-6 py-10 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="lg:max-w-[80%] mx-auto bg-[#141517] p-6 sm:p-10 rounded shadow text-left space-y-8 mb-12">
          
          <div>
            <h3 className="text-[#d4af37] text-lg font-bold uppercase mb-3">Why Choose Radyinterior for home office design?</h3>
            <p className="text-sm sm:text-base font-play leading-relaxed">
              Rady Interior is the best between the office interior design companies in Dubai, we has the expertise to design a well-integrated home office that complements your existing interior decor. Without disrupting the overall theme of your home, we create a functional and stylish workspace that mirrors a professional office setup complete with a grand desk, file shelves, and a mini conference table.
            </p>
          </div>

          <div>
            <p className="text-sm sm:text-base font-play leading-relaxed">
              Dubai’s hectic and tense professional routine makes you stay home. and take an odd day off without harming the necessary business tasks. A highly private home office interior design in Dubai is the only solution. Representative of Radyinterior with brilliant options can fertile your thought process to bring a delicate and stylish miniature at your home.
            </p>
          </div>

          <div>
            <p className="text-sm sm:text-base font-play leading-relaxed">
              It is necessary to portray your professional strengths in your second office space. The main game plan of the home office interior designer in Dubai should maintain and integrate two themes side by side. The selection of each interior decoration article should match the home and actual workplace.
            </p>
            <p className="text-sm sm:text-base font-play leading-relaxed mt-4">
              To keep yourself at home while dealing with office work comes handy with Rady Interior Solutions, because we are the best office interior design company in Dubai. Visit our office or <a href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline">book a free consultation</a>  to discuss the plan of action.
            </p>
          </div>
        </div>

        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          RECENT HOME OFFICE PROJECTS
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