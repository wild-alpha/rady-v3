"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

// Data updated for Gym/Fitness focus
const designImages = [
  "/images/luxury-gym-design-dubai.jpg",
  "/images/modern-fitness-center-sharjah.jpg",
  "/images/industrial-gym-interior-uae.jpg",
];

const galleryImages = [
  {
    src: "/images/gym-project-1.webp",
    link: "/commercial-gym-design",
    title: "COMMERCIAL FITNESS HUB",
  },
  {
    src: "/images/gym-project-2.webp",
    link: "/boutique-fitness-studio",
    title: "BOUTIQUE STUDIO SHARJAH",
  },
  {
    src: "/images/gym-project-3.webp",
    link: "/luxury-home-gym",
    title: "LUXURY PRIVATE GYM",
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
                Gym Interior Design Dubai
              </h1>

              <div className="text-sm sm:text-base leading-7 mb-4 space-y-4">
                <p>
                  At RadyInterior, we see gyms as places that inspire energy, focus, and motivation. For years, we have been a trusted gym interior design company in Dubai and Sharjah.
                </p>
                <p>
                  We focus on smart design, <a href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline"> modern style </a>, and a user-centred approach. Whether we design fitness studios, gyms, or large commercial fitness centres, our goal is to create a space that encourages a healthy life and serves as a hub for the fitness community.
                </p>
              </div>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit uppercase tracking-wider">
                Functional. Inspiring. Modern.
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37] uppercase">
                Expert Gym Design & Fit Out
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/gym-cover.webp"
                    alt="Gym Design Video"
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
                    title="Gym Interior Design Portfolio"
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
          Modern Design That Reflects Your Brand
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {designImages.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg border border-[#8c6b1f]/20">
              <Image
                src={src}
                alt={`gym interior style ${index + 1}`}
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xs sm:text-xl font-semibold uppercase text-[#d4af37]">
            Build Your Second Home For Members
          </h3>
          <p className="text-black text-sm sm:text-base font-semibold">
            Premier Gym Interior Designers in Dubai & Sharjah
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
            <h3 className="text-[#d4af37] text-lg font-bold uppercase mb-3">Functional and Inspiring Layouts</h3>
            <p className="text-sm sm:text-base font-play leading-relaxed">
              A great gym is carefully designed to make the best use of space. We plan layouts to ensure ease of use and safety, arranging specific zones for cardio, strength training, group classes, and relaxation. Our <a href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline"> gym fit out contractors Dubai </a> team maximises the usefulness of each section.
            </p>
          </div>

 <div>
            <h3 className="text-[#d4af37] text-lg font-bold uppercase mb-3">Modern Design That Reflects Your Brand</h3>
            <p className="text-sm sm:text-base font-play leading-relaxed">
              We tell your brand story in your gym’s space. Whether you focus on luxury, minimalism, an industrial style, or bold design, we bring your vision to life. Our fitness center interior fit out services include custom materials, color schemes and lighting to create the look you want. When we build we solely focus on creating a space that is best in town.</p>
         <p className="text-sm sm:text-base font-play leading-relaxed">
              Our gym interior design services in Dubai, Sharjah and across the UAE, work closely with you to understand your vision and incorporate it into every detail, from the reception area to the changing rooms. We use 3D design so you can see and feel the final result before we start construction. </p>
          </div>

          <div>
            <h3 className="text-[#d4af37] text-lg font-bold uppercase mb-3">User-Focused Approach</h3>
            <p className="text-sm sm:text-base font-play leading-relaxed">
              We focus on people in our designs. In our gyms, we can customize welcoming spaces for our members, making them feel fresh and focused. As safety comes first, we ensure safe environments by creating each section with great care for all ages and fitness levels, and can customize areas for rehabilitation when needed.</p>
          </div>

          <div>
            <h3 className="text-[#d4af37] text-lg font-bold uppercase mb-3">Trustworthy Design Partners</h3>
            <p className="text-sm sm:text-base font-play leading-relaxed">
              At RadyInterior, we bring your visions to life with our creative touch and experience. Our gym interior designers in Dubai take your project from concept to completion, which includes space planning, material choice, fit out and final styling. </p>

             <p className="text-sm sm:text-base font-play leading-relaxed">
             Ready to renovate your gym and make it a place of inspiration, achievement and a second home for your members? <a href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline"> Reach out </a>  to RadyInterior now, choose gym interior design service and let’s we work together to create a fitness environment that mirrors your brand’s identity and supports members’ health goals.</p>
          </div>
        </div>

        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          FEATURED FITNESS PROJECTS
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