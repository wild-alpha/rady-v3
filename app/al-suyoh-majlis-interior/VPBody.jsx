"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/ATRD (2).webp",
    alt: "Luxury Al Suyoh Majlis interior seating design",
    title: "Al Suyoh Majlis Interior Image 1",
    description: "Elegant majlis seating area with traditional luxury finishes and modern detailing"
  },
  {
    src: "/images/ATRD (4).webp",
    alt: "Modern Al Suyoh Majlis interior lounge design",
    title: "Al Suyoh Majlis Interior Image 2",
    description: "Sophisticated majlis lounge with bespoke seating and warm ambient lighting"
  },
  {
    src: "/images/ATRD (6).webp",
    alt: "Luxury Al Suyoh Majlis ceiling design Dubai",
    title: "Al Suyoh Majlis Interior Image 3",
    description: "Majestic ceiling design with Arabic-inspired patterns and luxury finishes"
  },
  {
    src: "/images/ATRD (14).webp",
    alt: "Al Suyoh Majlis interior reception area",
    title: "Al Suyoh Majlis Interior Image 4",
    description: "Welcoming majlis reception space with elegant cultural aesthetics"
  },
  {
    src: "/images/ATRD (15).webp",
    alt: "Traditional modern majlis seating Al Suyoh",
    title: "Al Suyoh Majlis Interior Image 5",
    description: "Blend of traditional majlis seating with modern luxury craftsmanship"
  },
  {
    src: "/images/ATRD (16).webp",
    alt: "Al Suyoh Majlis interior wall decor design",
    title: "Al Suyoh Majlis Interior Image 6",
    description: "Detailed wall paneling with Arabic geometric patterns and soft lighting"
  },
  {
    src: "/images/ATRD (17).webp",
    alt: "Luxury majlis seating arrangement Al Suyoh Dubai",
    title: "Al Suyoh Majlis Interior Image 7",
    description: "Spacious seating layout designed for comfort and hospitality"
  },
  {
    src: "/images/ATRD (18).webp",
    alt: "Al Suyoh Majlis chandelier lighting design",
    title: "Al Suyoh Majlis Interior Image 8",
    description: "Elegant chandelier lighting enhancing the majlis luxury atmosphere"
  },
  {
    src: "/images/ATRD (22).webp",
    alt: "Modern Arabic majlis interior Al Suyoh Dubai",
    title: "Al Suyoh Majlis Interior Image 9",
    description: "Contemporary majlis with seamless blend of tradition and modern design"
  },
  {
    src: "/images/ATRD (23).webp",
    alt: "Luxury Al Suyoh Majlis seating room",
    title: "Al Suyoh Majlis Interior Image 10",
    description: "Bright majlis space with custom furniture and premium finishes"
  },
  {
    src: "/images/ATRD (25).webp",
    alt: "High-end majlis interior Al Suyoh Dubai",
    title: "Al Suyoh Majlis Interior Image 11",
    description: "Refined majlis interior showcasing craftsmanship and luxury detailing"
  },
  {
    src: "/images/ATRD (26).webp",
    alt: "Elegant Arabic majlis design Al Suyoh",
    title: "Al Suyoh Majlis Interior Image 12",
    description: "Soft-toned majlis with elegant textures and warm lighting atmosphere"
  },
  {
    src: "/images/ATRD (27).webp",
    alt: "Luxury family majlis Al Suyoh interior design",
    title: "Al Suyoh Majlis Interior Image 13",
    description: "Family majlis designed for comfort, tradition, and luxury living"
  },
  {
    src: "/images/ATRD (28).webp",
    alt: "Premium majlis hall Al Suyoh Dubai",
    title: "Al Suyoh Majlis Interior Image 14",
    description: "Grand majlis hall with marble flooring and elegant Arabic aesthetics"
  },
  {
    src: "/images/ATRD (29).webp",
    alt: "Modern luxury majlis Al Suyoh interior Dubai",
    title: "Al Suyoh Majlis Interior Image 15",
    description: "Signature majlis design blending heritage with modern luxury style"
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
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
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
        HOME &gt; PROJECTS &gt; AL SUYOH MAJLIS INTERIOR DESIGN
      </p>

      {/* Header */}
      <div className="relative pl-4 sm:pl-6 mb-20">

        <div className="absolute top-0 left-0 h-full w-[1px] bg-gray-400 z-0 hidden lg:block" />
        <motion.div
          className="absolute left-[-4px] top-[104px] w-2 h-2 rounded-full bg-[#d4af37] z-10 hidden lg:block"
          style={{ y: dotY }}
        />

        <div className="mb-6">
          <p className="text-xs sm:text-base font-conthrax tracking-wide uppercase text-white">
            CRAFTING ELEGANT MAJLIS SPACES:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            AL SUYOH MAJLIS INTERIOR DESIGN
          </h1>
          <div className="w-30 sm:w-96 h-[2px] bg-[#d4af37] mt-2" />
        </div>

        <div className="flex flex-col lg:flex-row gap-10">

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <div
              ref={scrollRef}
              className="max-h-[360px] overflow-y-auto scroll-smooth text-sm leading-6 text-white/90 space-y-4 pr-2 font-play"
              style={{ scrollbarWidth: "none" }}
            >
              <p>
                At Rady Interiors, we proudly present our Al Suyoh Majlis Interior Design project, crafted to reflect cultural elegance and modern luxury living.
              </p>
              <p>
                Our design approach focused on creating a warm, welcoming majlis space that blends traditional Arabic aesthetics with contemporary comfort and sophistication.
              </p>
              <p>
                Through our complete interior design and fit-out solutions, we transformed this majlis into a refined gathering space that reflects hospitality, heritage, and timeless elegance.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/ATRD (28).webp"
              alt="Luxury Al Suyoh Majlis interior design Dubai"
              title="Al Suyoh Majlis Interior Design"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </figure>

        </div>
      </div>

      {/* Scroll Icon */}
      <div className="mt-10 flex justify-center">
        <Image
          src="/images/sec-dvd.webp"
          alt="Scroll indicator"
          width={320}
          height={80}
          className="h-auto w-48 sm:w-64"
        />
      </div>

      {/* Gallery Title */}
      <h2 className="text-white mt-10 mb-10 text-sm sm:text-xl tracking-widest font-conthrax text-center">
        AL SUYOH MAJLIS INTERIOR GALLERY
      </h2>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((img, idx) => (
          <figure key={idx} className="cursor-pointer overflow-hidden rounded-md">
            <Image
              src={img.src}
              alt={img.alt}
              title={img.title}
              width={400}
              height={300}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              onClick={() => openImage(idx)}
            />
          </figure>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button onClick={closeImage} className="absolute top-4 right-6 text-white text-3xl">
            &times;
          </button>
          <button onClick={prevImage} className="absolute left-4 text-white text-4xl">
            &#8592;
          </button>

          <Image
            src={galleryImages[current].src}
            alt={galleryImages[current].alt}
            title={galleryImages[current].title}
            width={900}
            height={600}
            className="rounded-md object-contain max-h-[90vh] max-w-[90vw]"
          />

          <button onClick={nextImage} className="absolute right-4 text-white text-4xl">
            &#8594;
          </button>
        </div>
      )}

    </section>
  );
};

export default VPBody;