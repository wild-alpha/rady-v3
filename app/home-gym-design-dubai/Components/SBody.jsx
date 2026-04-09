"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

// Data updated for Home Gym focus
const designImages = [
  "/images/luxury-home-gym-dubai.jpg",
  "/images/modern-home-fitness-sharjah.jpg",
  "/images/custom-gym-interior-uae.jpg",
];

const galleryImages = [
  {
    src: "/images/home-gym-1.webp",
    link: "/luxury-villa-gym",
    title: "VILLA PRIVATE FITNESS",
  },
  {
    src: "/images/home-gym-2.webp",
    link: "/apartment-gym-setup",
    title: "MODERN APARTMENT GYM",
  },
  {
    src: "/images/home-gym-3.webp",
    link: "/custom-fitness-studio",
    title: "BESPOKE HOME STUDIO",
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
                Home Gym Interior Design Dubai
              </h1>

              <div className="text-sm sm:text-base leading-7 mb-4 space-y-4">
                <p>
                  Nowadays, many people focus on health and wellness. In the busy life of the UAE, having a gym at home is not just a trend, it’s a smart choice for staying healthy. At <a href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline">RadyInterior</a>, our luxury home gym design UAE services know that fitness is important and should fit easily into your routine without leaving the comfort of home.
                </p>
                <p>
                  That’s why we offer professional custom home gym design services to turn any space in your home into your fitness area.
                </p>
              </div>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit uppercase tracking-wider">
                Tailored. Private. Professional.
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37] uppercase">
                Luxury Home Fitness Solutions
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/home-gym-cover.webp"
                    alt="Home Gym Design Video"
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
                    title="Home Gym Interior Design Portfolio"
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
          Tailored Gym Designs for Every Home
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {designImages.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg border border-[#8c6b1f]/20">
              <Image
                src={src}
                alt={`home gym interior style ${index + 1}`}
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xs sm:text-xl font-semibold uppercase text-[#d4af37]">
            Build Your Private Fitness Sanctuary
          </h3>
          <p className="text-black text-sm sm:text-base font-semibold">
            Premier Home Gym Interior Designers in Dubai & Sharjah
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

      {/* Section 3: Professional Services */}
      <section className="px-6 py-10 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="lg:max-w-[80%] mx-auto bg-[#141517] p-6 sm:p-10 rounded shadow text-left space-y-8 mb-12">
          
          <div>
            <h3 className="text-[#d4af37] text-lg font-bold uppercase mb-3">Tailored Gym Designs for Every HomeE</h3>
            <p className="text-sm sm:text-base font-play leading-relaxed">
              Our home gym setup company UAE is behind many years of work in designing stylish, functional and custom gym spaces in Dubai, Abu Dhabi, Sharjah and the rest of the UAE. We design home gyms for our clients which fit into your space and your workout routine, whether you are living in a modern apartment, a luxury villa or a townhome.
            </p>
          </div>

          <div>
            <h3 className="text-[#d4af37] text-lg font-bold uppercase mb-3">Designed for UAE Conditions</h3>
            <p className="text-sm sm:text-base font-play leading-relaxed">
              As the top home gym interior designers in Dubai, we consider the UAE’s weather when planning your space. We use effective air conditioning and ventilation to keep you comfortable. Also think about how natural light impacts your mood and energy while you work out. We include smart lighting that you can adjust based on the time of day or your workout type, helping you stay focused. For flooring, we choose materials that are durable, soft, and safe, which is especially important for exercises that require balance and movement.
            </p>
          </div>

          <div>
            <h3 className="text-[#d4af37] text-lg font-bold uppercase mb-3">A Touch of Luxury in Your Home</h3>
            <p className="text-sm sm:text-base font-play leading-relaxed">
              RadyInterior stands out because of our ability to create the best home fitness room design UAE, mixing luxury with function. In Dubai and the UAE we see many clients who want their home gym to have the same elegance as the rest of their home. That is why we use modern home gym design ideas Dubai to pay attention to color schemes, wall textures, and built-in features that give the gym a high-end modern look, at the same time, we ensure it is fully functional.
            </p>
          </div>

          <div>
            <h3 className="text-[#d4af37] text-lg font-bold uppercase mb-3">Choose Professional Home Gym Design UAE Services</h3>
            <p className="text-sm sm:text-base font-play leading-relaxed">
              At <a href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline">RadyInterior</a> we make your dream gym a reality. We bring to the table personal gym interior design Dubai expertise, top quality materials and a great knowledge of the UAE lifestyle which we put into play to deliver a result that you will love every day.
            </p>
            <p className="text-sm sm:text-base font-play leading-relaxed mt-4">
              If you are looking to create a fitness space that fits your energy and goals, get in touch with RadyInterior. Our home gym planning and installation Dubai team will be there for you every step of the way, and we also promise to bring to life a home gym that you will love and see you through for years.
            </p>
          </div>
        </div>

        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          FEATURED HOME GYM PROJECTS
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