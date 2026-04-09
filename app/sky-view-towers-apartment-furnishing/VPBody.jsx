"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/benefit-1.webp",
    alt: "Sky View Towers Interior Styling",
    title: "Sky View Towers Gallery Image 1",
    description: "Luxury furnishing and modern residential styling"
  },
  {
    src: "/images/benefit-2.webp",
    alt: "Sky View Towers Living Area",
    title: "Sky View Towers Gallery Image 2",
    description: "Sophisticated palette and premium furniture"
  },
  {
    src: "/images/benefit-3.webp",
    alt: "Sky View Towers Bedroom Design",
    title: "Sky View Towers Gallery Image 3",
    description: "Peaceful hotel-like retreat with custom wardrobes"
  },
];

const VPBody = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const dotY = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const openImage = (index) => {
    setCurrent(index);
    setIsOpen(true);
  };

  const closeImage = () => setIsOpen(false);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (!isOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  return (
    <section className="bg-black text-white px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 sm:py-20 font-sans">
      {/* Breadcrumb */}
      <p className="text-xs text-[#f0c95a] uppercase tracking-widest mb-4 font-conthrax">
        HOME &gt; PROJECTS &gt; SKY VIEW TOWERS DUBAI
      </p>

      {/* Heading + Paragraph + Image */}
      <div className="relative pl-4 sm:pl-6 mb-20">
        {/* Scroll line */}
        <div className="absolute top-0 left-0 h-full w-[1px] bg-gray-400 z-0 hidden lg:block" />
        <motion.div
          className="absolute left-[-4px] top-[104px] w-2 h-2 rounded-full bg-[#d4af37] z-10 hidden lg:block"
          style={{ y: dotY }}
        />
        <div
          className="absolute top-0 left-0 w-[1px] bg-gray-400 z-0 block lg:hidden"
          style={{ height: "calc(104px + 360px)" }}
        />

        {/* Headings */}
        <div className="mb-6">
          <p className="text-xs sm:text-base font-conthrax tracking-wide uppercase text-white">
            LUXURY FURNISHING & INTERIOR STYLING:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            SKY VIEW TOWERS DUBAI
          </h1>
          <div className="w-30 sm:w-96 h-[2px] bg-[#d4af37] mt-2" />
        </div>

        {/* Row: Paragraph + Image */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Paragraph Section */}
          <div className="w-full lg:w-1/2">
            <div
              ref={scrollRef}
              className="max-h-[360px] overflow-y-auto scroll-smooth text-sm leading-6 text-white/90 space-y-4 pr-2 font-play"
              style={{ scrollbarWidth: "none" }}
            >
              <p>
                <b><a href="https://radyinterior.ae/" className="text-[#f0c95a] hover:underline">RadyInterior</a></b>  furnished and styled a high end apartment in <b>Sky View Towers, Dubai</b>, completing a fully coordinated interior that blends elegance, comfort, and practical living. The project reflects our commitment to refined residential design and high quality execution.
              </p>
              
              <p>
                <b>Design Approach:</b>
                The goal was to transform a <b><a href="https://radyinterior.ae/" className="text-[#f0c95a] hover:underline">premium apartment</a></b>  shell into a warm, inviting home. We selected a sophisticated palette, premium furniture pieces, and soft textures to create a modern, comfortable environment suitable for daily living and guest hosting.
              </p>

              <p>
                <b>Living Area:</b>
                The living room was furnished with custom sofas, designer coffee tables, and layered lighting. The arrangement enhances comfort and visual balance, making the space suitable for both relaxation and social gatherings.
              </p>

              <p>
                <b>Kitchen & Dining:</b>
                The kitchen features sleek cabinetry, quality appliances, and refined countertop finishes. These elements create a functional yet elegant space that integrates seamlessly with the open plan layout.
              </p>
              
              <div className="space-y-2">
                <p>
                  <b>Bedroom Design:</b> We aimed for a peaceful, hotel like retreat. The bedroom includes:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-white/90 italic">
                  <li>Luxurious bedding</li>
                  <li>Custom wardrobes</li>
                  <li>Curated accessories and lighting</li>
                </ul>
                <p>
                  Each detail contributes to a calm and restful atmosphere.
                </p>
              </div>

              <p>
                <b>Bathroom Styling:</b> Modern fixtures, quality vanities, and clean lined materials create a bathroom that feels both stylish and highly functional.
              </p>

              <p>
                <b>Project Outcome:</b> The final furnished apartment delivers a harmonious blend of style, comfort, and practicality. This project highlights RadyInterior’s expertise in <b><a href="https://radyinterior.ae/" className="text-[#f0c95a] hover:underline">luxury interior design Dubai</a></b> and complete residential furnishing solutions.
              </p>

              {/* Project Meta Details */}
              <div className="pt-6 border-t border-gray-800 mt-8 space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-[#f0c95a] uppercase text-[10px] tracking-[0.2em] font-conthrax min-w-[80px]">
                    Client:
                  </span>
                  <span className="text-white text-sm font-play  tracking-wider">
                    Sky View Towers
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-[#f0c95a] uppercase text-[10px] tracking-[0.2em] font-conthrax min-w-[80px]">
                    Category:
                  </span>
                  <span className="text-white text-sm font-play  tracking-wider">
                    Refurbishment, Apartment
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-[#f0c95a] uppercase text-[10px] tracking-[0.2em] font-conthrax min-w-[80px]">
                    Location:
                  </span>
                  <span className="text-white text-sm font-play  tracking-wider">
                    Dubai Marina
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/benefit-main.webp" 
              alt="Sky View Towers Luxury Furnishing Dubai"
              title="Sky View Towers - RadyInterior"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <figcaption className="sr-only">
              Luxury furnishing and interior styling for a premium apartment in Sky View Towers Dubai.
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-10">
        <div className="mt-10 flex justify-center">
          <Image
            src="/images/sec-dvd.webp"
            alt="Scroll down arrow"
            width={320}
            height={80}
            className="h-auto w-48 sm:w-64"
          />
        </div>

        <h2 className="text-white mt-10 mb-10 text-sm sm:text-xl tracking-widest font-conthrax text-center">
          Related Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.slice(0, 3).map((img, idx) => {
            const projectNames = [
              "Omniyat One Palm – Palm Jumeirah",
              "Serenia Living Tower 3 – Luxury Interior Design & Furnishing in Palm Jumeirah",
              "Damac Lagoons Villa – Interior Fit Out by RadyInterior"
            ];

            return (
              <figure key={idx} className="relative cursor-pointer overflow-hidden rounded-md group bg-[#111] h-64 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center z-0">
                  <p className="text-[#f0c95a] text-[10px] sm:text-xs font-play uppercase tracking-widest leading-relaxed font-bold">
                    {projectNames[idx]}
                  </p>
                </div>

                <Image
                  src={img.src}
                  alt={projectNames[idx]}
                  width={400}
                  height={300}
                  loading="lazy"
                  className="relative z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 bg-[#111]"
                  onClick={() => openImage(idx)}
                />
                <figcaption className="sr-only">{projectNames[idx]}</figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={closeImage}
            className="absolute top-4 right-6 text-white text-3xl font-bold"
          >
            &times;
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-4xl"
          >
            &#8592;
          </button>
          <Image
            src={galleryImages[current].src}
            alt={galleryImages[current].alt}
            title={galleryImages[current].title}
            width={900}
            height={600}
            loading="lazy"
            className="rounded-md object-contain max-h-[90vh] max-w-[90vw]"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-4xl"
          >
            &#8594;
          </button>
        </div>
      )}
    </section>
  );
};

export default VPBody;