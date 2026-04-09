"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

// Updated Data for Clinic Interiors
const designImages = [
  "/images/luxury-clinic-design-dubai.jpg",
  "/images/modern-medical-center-sharjah.jpg",
  "/images/contemporary-healthcare-interior-uae.jpg",
];

const galleryImages = [
  {
    src: "/images/vservice2.webp", 
    link: "/clinic-interior-design-portfolio",
    title: "DUBAI HEALTHCARE CITY PROJECT",
  },
  {
    src: "/images/vservice2.webp",
    link: "/medical-fit-out-dubai",
    title: "SHARJAH MEDICAL CENTER",
  },
  {
    src: "/images/vservice1.webp",
    link: "/modern-clinic-solutions",
    title: "JUMEIRAH SPECIALIST CLINIC",
  },
];

const faqs = [
  {
    question: "How does lighting affect clinic design?",
    answer: "Managing lighting plays a great role in dividing working and waiting spaces. Working areas demand professional fixtures for illumination, while waiting areas use mellow lights for a relaxing aura.",
  },
  {
    question: "Why is clinic aesthetics important for patients?",
    answer: "Aesthetics help calm wary nerves and settle anxious hearts, ensuring patients feel at home and their vitals remain normal during stressful diagnosis periods.",
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
                Clinic Interior Design Sharjah, Dubai & UAE
              </h2>

              <div className="text-sm sm:text-base leading-7 mb-4 space-y-4">
                <p>
                  Clinic interior design in Dubai is a sensitive service. It has to blend the medical aspects and make the material more palatable and presentable. The actual clinic where the doctor will work needs to be bright, with fluorescent lights and clean, simple furniture. While the lobby and other waiting areas can hold a more mellow and relaxing aura. The patients waiting should feel at home rather than feeling anxious about what the next few minutes of their day will bring.
                </p>
                <p>
                  Clinic <Link href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline">Interior design in Dubai</Link>, Sharjah has got maximum popularity due to the variety of nationals living in UAE. The stress of diagnosis and strenuous follow-ups should be relieved when they are waiting for their turn. The clinic interior design and aesthetics should calm their wary nerves and settle their anxious hearts so the vitals remain normal.
                </p>
              </div>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit uppercase tracking-wider">
                Expert Clinic Solutions
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37] uppercase">
                Healing Spaces & Aesthetics
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/clinic-cover.webp" 
                    alt="Clinic Design Presentation"
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
                    title="Clinic Interior Design Portfolio"
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
          Medical Design Mastery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {designImages.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg border border-[#8c6b1f]/20">
              <Image
                src={src}
                alt={`clinic service ${index + 1}`}
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xs sm:text-xl font-semibold uppercase text-[#d4af37]">
            Transform Your Medical Facility
          </h3>
          <p className="text-black text-sm sm:text-base font-semibold">
            Visit our studio in the world's luxury city, Dubai
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

      {/* Section 3: Deep Content */}
      <section className="px-6 py-10 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="lg:max-w-[80%] mx-auto bg-[#141517] p-6 sm:p-10 rounded shadow text-center space-y-6 mb-12">
          <div className="space-y-4 text-sm sm:text-base font-play text-left leading-relaxed">
            <p>
              If the design of the whole clinic looks very clinical and overwhelming, then patients will be put into a hustle. As soon as they enter the building, raising their blood pressure and heart rates, which will be hard for the doctor to manage later. Managing lighting plays a great role in dividing the working space and waiting space. The prior demands edgy and professional fixtures that don’t distract and provide the needed illumination. Our interior designers do their best to create a space, combining the client’s vision and universal health principles.
            </p>

            <p>
              The clinic Interior designers at Radyinterior require special techniques to strike this delicate balance between functionality, sustainability, and presentation. We have aggressive discussions with clients to create clinic interior designs where all the aspects are conveniently and efficiently catered. So that the purpose of an efficient clinic is served along with the comfort of the patients.
            </p>

            <p>
              For the best clinic interior designs in Dubai, check the <Link href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline">portfolio of Radyinterior</Link>. Also, you can get the first <Link href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline"> free consultation </Link>from the RadyInterior expert clinic interior designers in Sharjah.
            </p>
          </div>
        </div>

        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          RECENT CLINIC PROJECTS
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