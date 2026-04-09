"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/ATRD (2).webp",
    alt: "Luxury Jumeirah Islands villa renovation living room",
    title: "Jumeirah Islands Villa Renovation Image 1",
    description: "Elegant living room transformation with modern luxury finishes"
  },
  {
    src: "/images/ATRD (4).webp",
    alt: "Modern Jumeirah Islands villa lounge renovation",
    title: "Jumeirah Islands Villa Renovation Image 2",
    description: "Sophisticated lounge redesign with bespoke furniture and lighting"
  },
  {
    src: "/images/ATRD (6).webp",
    alt: "Luxury Jumeirah Islands villa bedroom renovation",
    title: "Jumeirah Islands Villa Renovation Image 3",
    description: "Master bedroom renovation with calming tones and premium finishes"
  },
  {
    src: "/images/ATRD (14).webp",
    alt: "Jumeirah Islands villa dining area renovation",
    title: "Jumeirah Islands Villa Renovation Image 4",
    description: "Dining space redesigned with elegant lighting and modern aesthetics"
  },
  {
    src: "/images/ATRD (15).webp",
    alt: "Modern kitchen renovation Jumeirah Islands villa",
    title: "Jumeirah Islands Villa Renovation Image 5",
    description: "Contemporary kitchen upgrade with marble countertops and smart storage"
  },
  {
    src: "/images/ATRD (16).webp",
    alt: "Luxury hallway renovation Jumeirah Islands villa",
    title: "Jumeirah Islands Villa Renovation Image 6",
    description: "Minimalist hallway redesign with warm lighting and elegant flow"
  },
  {
    src: "/images/ATRD (17).webp",
    alt: "Jumeirah Islands villa interior renovation seating area",
    title: "Jumeirah Islands Villa Renovation Image 7",
    description: "Stylish seating area with neutral tones and luxury detailing"
  },
  {
    src: "/images/ATRD (18).webp",
    alt: "Luxury bathroom renovation Jumeirah Islands villa",
    title: "Jumeirah Islands Villa Renovation Image 8",
    description: "Spa-inspired bathroom renovation with marble and gold accents"
  },
  {
    src: "/images/ATRD (22).webp",
    alt: "Open-plan villa renovation Jumeirah Islands Dubai",
    title: "Jumeirah Islands Villa Renovation Image 9",
    description: "Open-plan living redesign with seamless indoor-outdoor connection"
  },
  {
    src: "/images/ATRD (23).webp",
    alt: "Modern villa renovation Jumeirah Islands living room",
    title: "Jumeirah Islands Villa Renovation Image 10",
    description: "Bright and airy living space with custom modern design elements"
  },
  {
    src: "/images/ATRD (25).webp",
    alt: "High-end villa renovation Jumeirah Islands Dubai",
    title: "Jumeirah Islands Villa Renovation Image 11",
    description: "Premium renovation with bespoke craftsmanship and luxury finishes"
  },
  {
    src: "/images/ATRD (26).webp",
    alt: "Bedroom renovation Jumeirah Islands villa Dubai",
    title: "Jumeirah Islands Villa Renovation Image 12",
    description: "Elegant bedroom renovation with soft lighting and luxury wardrobe design"
  },
  {
    src: "/images/ATRD (27).webp",
    alt: "Luxury villa renovation lounge Jumeirah Islands",
    title: "Jumeirah Islands Villa Renovation Image 13",
    description: "Modern lounge renovation with serene and sophisticated aesthetics"
  },
  {
    src: "/images/ATRD (28).webp",
    alt: "Jumeirah Islands villa renovation interior design",
    title: "Jumeirah Islands Villa Renovation Image 14",
    description: "Grand living space renovation with marble flooring and luxury detailing"
  },
  {
    src: "/images/ATRD (29).webp",
    alt: "Signature villa renovation Jumeirah Islands Dubai",
    title: "Jumeirah Islands Villa Renovation Image 15",
    description: "Complete villa transformation blending modern luxury and comfort"
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
        HOME &gt; PROJECTS &gt; JUMEIRAH ISLANDS VILLA RENOVATION
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
            LUXURY VILLA TRANSFORMATION:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            JUMEIRAH ISLANDS VILLA RENOVATION
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
                At Rady Interiors, we proudly present our Jumeirah Islands Villa Renovation project, designed to completely transform an outdated villa into a modern luxury residence.
              </p>
              <p>
                Our renovation approach focused on enhancing spatial flow, upgrading materials, and introducing a refined contemporary aesthetic throughout the villa.
              </p>
              <p>
                The result is a beautifully reimagined home that combines comfort, elegance, and modern functionality in one of Dubai’s most prestigious communities.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/ATRD (28).webp"
              alt="Luxury Jumeirah Islands villa renovation Dubai"
              title="Jumeirah Islands Villa Renovation"
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
        JUMEIRAH ISLANDS VILLA RENOVATION GALLERY
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