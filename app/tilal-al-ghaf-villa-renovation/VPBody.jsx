"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/ATRD (2).webp",
    alt: "Luxury Tilal Al Ghaf villa living room renovation",
    title: "Tilal Al Ghaf Villa Renovation Image 1",
    description: "Modern living room renovation with elegant finishes and refreshed luxury aesthetics"
  },
  {
    src: "/images/ATRD (4).webp",
    alt: "Modern Tilal Al Ghaf villa lounge renovation design",
    title: "Tilal Al Ghaf Villa Renovation Image 2",
    description: "Upgraded lounge space with bespoke furniture and soft contemporary lighting"
  },
  {
    src: "/images/ATRD (6).webp",
    alt: "Luxury villa bedroom renovation Tilal Al Ghaf Dubai",
    title: "Tilal Al Ghaf Villa Renovation Image 3",
    description: "Master bedroom renovation featuring calm tones and enhanced luxury detailing"
  },
  {
    src: "/images/ATRD (14).webp",
    alt: "Tilal Al Ghaf villa dining area renovation",
    title: "Tilal Al Ghaf Villa Renovation Image 4",
    description: "Refined dining space upgrade with modern chandelier and elegant layout redesign"
  },
  {
    src: "/images/ATRD (15).webp",
    alt: "High-end kitchen renovation Tilal Al Ghaf villa",
    title: "Tilal Al Ghaf Villa Renovation Image 5",
    description: "Fully renovated kitchen with marble countertops and premium cabinetry"
  },
  {
    src: "/images/ATRD (16).webp",
    alt: "Luxury hallway renovation Tilal Al Ghaf villa",
    title: "Tilal Al Ghaf Villa Renovation Image 6",
    description: "Minimalist hallway redesign with warm lighting and improved spatial flow"
  },
  {
    src: "/images/ATRD (17).webp",
    alt: "Tilal Al Ghaf villa living room renovation decor",
    title: "Tilal Al Ghaf Villa Renovation Image 7",
    description: "Stylish renovated seating area with modern textures and luxury detailing"
  },
  {
    src: "/images/ATRD (18).webp",
    alt: "Luxury bathroom renovation Tilal Al Ghaf villa",
    title: "Tilal Al Ghaf Villa Renovation Image 8",
    description: "Spa-inspired bathroom renovation with marble finishes and premium fixtures"
  },
  {
    src: "/images/ATRD (22).webp",
    alt: "Modern villa renovation Tilal Al Ghaf Dubai",
    title: "Tilal Al Ghaf Villa Renovation Image 9",
    description: "Open-plan renovation creating seamless indoor-outdoor connection"
  },
  {
    src: "/images/ATRD (23).webp",
    alt: "Tilal Al Ghaf villa seating area renovation",
    title: "Tilal Al Ghaf Villa Renovation Image 10",
    description: "Bright renovated living space with upgraded modern design elements"
  },
  {
    src: "/images/ATRD (25).webp",
    alt: "Luxury villa renovation Tilal Al Ghaf Dubai",
    title: "Tilal Al Ghaf Villa Renovation Image 11",
    description: "High-end renovation with bespoke craftsmanship and modern elegance"
  },
  {
    src: "/images/ATRD (26).webp",
    alt: "Villa bedroom renovation Tilal Al Ghaf Dubai",
    title: "Tilal Al Ghaf Villa Renovation Image 12",
    description: "Elegant bedroom renovation with soft lighting and luxury wardrobe upgrades"
  },
  {
    src: "/images/ATRD (27).webp",
    alt: "Luxury Tilal Al Ghaf villa lounge renovation",
    title: "Tilal Al Ghaf Villa Renovation Image 13",
    description: "Modern lounge renovation with serene, high-end aesthetic transformation"
  },
  {
    src: "/images/ATRD (28).webp",
    alt: "Tilal Al Ghaf luxury villa renovation interior design",
    title: "Tilal Al Ghaf Villa Renovation Image 14",
    description: "Grand renovated living space with marble flooring and refined detailing"
  },
  {
    src: "/images/ATRD (29).webp",
    alt: "Modern luxury villa renovation Tilal Al Ghaf Dubai",
    title: "Tilal Al Ghaf Villa Renovation Image 15",
    description: "Signature renovation blending luxury, comfort, and modern lifestyle design"
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
        HOME &gt; PROJECTS &gt; TILAL AL GHAF VILLA RENOVATION
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
            TRANSFORMING LUXURY VILLAS:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            TILAL AL GHAF VILLA RENOVATION
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
                At WE DO Interior Design & Fitout, we proudly present our Tilal Al Ghaf Villa Renovation project, transforming an existing residence into a modern luxury home within one of Dubai’s most prestigious lagoon communities.
              </p>
              <p>
                Our renovation approach focused on upgrading interiors with contemporary elegance, improved space planning, and high-end material finishes while maintaining a warm and inviting atmosphere.
              </p>
              <p>
                Through our complete villa renovation and fit-out solutions, we enhanced every corner of the property, delivering a refreshed, functional, and visually stunning home tailored for modern living.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/ATRD (28).webp"
              alt="Luxury Tilal Al Ghaf villa renovation interior Dubai"
              title="Tilal Al Ghaf Villa Renovation"
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
        TILAL AL GHAF VILLA RENOVATION GALLERY
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