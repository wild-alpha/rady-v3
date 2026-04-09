"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay, FaPlus, FaMinus } from "react-icons/fa";

const designImages = [
  "/images/luxury-villa-interior-design-dubai.jpg",
  "/images/contemporary-villa-bedroom-interior-dubai.jpg",
  "/images/modern-villa-living-room-design-dubai.jpg",
];

const galleryImages = [
  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "PALM JUMEIRAH VILLA",
  },
  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "EMIRATES HILLS VILLA",
  },
  {
    src: "/images/vservice1.webp",
    link: "/emirates-hills-villa",
    title: "DISTRICT ONE MBR VILLA",
  },
];

const fbFaqs = [
  {
    question: "Designing Spaces That Reflect Your Unique Style",
    answer: "Our approach to residential interior design in Dubai is rooted in personalization. We start by doing comprehensive consultations to truly know what you like, dislike and what your lifestyle needs are. Imagine a sunlit sitting room where all art pieces and decor perfectly match your taste. Imagine a kitchen that elegantly combines practicality with innovative storage solutions that simplify your day-to-day activities. In short, we do not design spaces, but environments that connect with you on a practical level.",
  },
  {
    question: "Satisfactory Project Management",
    answer: "We provide a well-coordinated project management team aimed at creating a smooth and stress free transition from preliminary discussions to touching the final button. We manage every aspect of design implementation. This involves working with contractors and suppliers so that you stay on track and within budget. Our objective is to give you a wonderful experience that will result in an outstanding design without any form of interruption whatsoever.",
  },
  {
    question: "Transforming Houses into Homes",
    answer: "At RadyInterior, our mission is to turn your living space into a true reflection of your identity. We are not just creating designs; we are crafting personalized experiences that transform houses into homes. Let us help you create a space where every detail speaks to your individuality and every corner exudes comfort. Experience the RadyInterior difference, where personalized design, exceptional quality, and innovative solutions come together to create your perfect living space.",
  },
];

const SBody = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#000000] text-[#ffffff]">
      {/* Section 1: Introduction */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 font-sans">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2 flex flex-col justify-start">
              <h1 className="text-sm sm:text-xl md:text-xl font-bold tracking-widest py-2 text-[#d4af37] uppercase">
                Residential Interior Design
              </h1>

              <div className="text-sm sm:text-base leading-7 mb-4 space-y-4">
                <p>
                  At RadyInterior, we see Residential Interior Design in Dubai as a chance to bring each client’s story to life. Every home starts with your ideas, your style, and your daily needs. Our team takes time to listen, making sure we truly get what you want. We use this insight to shape spaces that reflect your personality and match the way you live.
                </p>
                <p>
                  Our process is personal. We believe your home should show who you are at every turn, from quiet corners to open living areas. As an leading residential <Link href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline">Interior Design</Link> company in Dubai, we’re dedicated to creating rooms that feel warm and inviting, full of details that matter to you. We balance comfort with style, blending your vision with our expertise.
                </p>
                <p>
                  Choosing the right interior design company in Dubai can transform a house into your favorite place. Our promise is clear, every project centers on you, your tastes, and your lifestyle. We build trust with open communication and designs that truly fit your life.
                </p>
              </div>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit uppercase tracking-wider">
                Excellence Delivered
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/villa-cover.webp"
                    alt="Residential Design Presentation"
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
                    title="Residential Interior Design Dubai"
                    frameBorder="0"
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
          Residential Portfolio Showcase
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {designImages.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg border border-[#8c6b1f]/20">
              <Image
                src={src}
                alt={`Residential Design project ${index + 1}`}
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xs sm:text-xl font-semibold uppercase text-[#d4af37]">
            Work with Dubai’s Best
          </h3>
          <p className="text-black text-sm sm:text-base font-semibold">
            Partner with Rady Interior for premium residential interior designs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
            <a
              href="https://wa.me/971588075603"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#d4af37] text-black font-play text-sm rounded w-full sm:w-auto text-center hover:bg-[#f0c95a] transition"
            >
              WhatsApp Consultation
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

      {/* Section 3: Accordion Style Details */}
      <section className="px-6 py-10 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="max-w-5xl mx-auto border-t border-white/20">
          {fbFaqs.map((item, index) => (
            <div key={index} className="border-b border-white/20">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center py-5 text-left focus:outline-none group"
              >
                <span className="text-[#d4af37] mr-4 transition-transform duration-300">
                  {openIndex === index ? <FaMinus size={14} /> : <FaPlus size={14} />}
                </span>
                <span className="text-[#d4af37] font-bold text-sm sm:text-lg uppercase tracking-wider">
                  {item.question}
                </span>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-8 px-8 text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mt-16 mb-6 uppercase text-[#d4af37]">
          RECENT RESIDENTIAL PROJECTS
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

        {/* Contact Footer */}
        <div className="mt-20 text-center space-y-4">
          <h2 className="text-xl font-conthrax text-[#d4af37]">CONTACT US</h2>
          <p className="text-lg font-play tracking-widest">+971 50 818 1824</p>
        </div>
      </section>
    </section>
  );
};

export default SBody;