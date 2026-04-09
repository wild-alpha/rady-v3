"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/ATRD (2).webp",
    alt: "Modern Downtown Dubai office interior design",
    title: "Downtown Dubai Office Interior Image 1",
    description: "Contemporary office space with sleek workstations and premium finishes"
  },
  {
    src: "/images/ATRD (4).webp",
    alt: "Luxury office reception Downtown Dubai",
    title: "Downtown Dubai Office Interior Image 2",
    description: "Elegant reception area designed with modern branding and welcoming ambiance"
  },
  {
    src: "/images/ATRD (6).webp",
    alt: "Corporate office meeting room Downtown Dubai",
    title: "Downtown Dubai Office Interior Image 3",
    description: "Professional meeting room with glass partitions and sophisticated design"
  },
  {
    src: "/images/ATRD (14).webp",
    alt: "Downtown Dubai office open workspace design",
    title: "Downtown Dubai Office Interior Image 4",
    description: "Open-plan office layout promoting collaboration and productivity"
  },
  {
    src: "/images/ATRD (15).webp",
    alt: "Executive office interior Downtown Dubai",
    title: "Downtown Dubai Office Interior Image 5",
    description: "Luxury executive office with bespoke furniture and premium materials"
  },
  {
    src: "/images/ATRD (16).webp",
    alt: "Office corridor design Downtown Dubai",
    title: "Downtown Dubai Office Interior Image 6",
    description: "Minimalist office corridor with modern lighting and clean finishes"
  },
  {
    src: "/images/ATRD (17).webp",
    alt: "Creative workspace Downtown Dubai office design",
    title: "Downtown Dubai Office Interior Image 7",
    description: "Dynamic workspace designed to inspire creativity and efficiency"
  },
  {
    src: "/images/ATRD (18).webp",
    alt: "Office lounge area Downtown Dubai interior",
    title: "Downtown Dubai Office Interior Image 8",
    description: "Comfortable lounge area for employees with modern seating solutions"
  },
  {
    src: "/images/ATRD (22).webp",
    alt: "Modern office design Downtown Dubai UAE",
    title: "Downtown Dubai Office Interior Image 9",
    description: "Sophisticated office interior combining style and functionality"
  },
  {
    src: "/images/ATRD (23).webp",
    alt: "Corporate office workspace Downtown Dubai",
    title: "Downtown Dubai Office Interior Image 10",
    description: "Bright workspace with ergonomic furniture and natural lighting"
  },
  {
    src: "/images/ATRD (25).webp",
    alt: "High-end office interior Downtown Dubai",
    title: "Downtown Dubai Office Interior Image 11",
    description: "Premium office design reflecting corporate identity and professionalism"
  },
  {
    src: "/images/ATRD (26).webp",
    alt: "Office interior lighting design Downtown Dubai",
    title: "Downtown Dubai Office Interior Image 12",
    description: "Layered lighting concept enhancing office aesthetics and productivity"
  },
  {
    src: "/images/ATRD (27).webp",
    alt: "Luxury office fit-out Downtown Dubai",
    title: "Downtown Dubai Office Interior Image 13",
    description: "Complete office fit-out with modern finishes and functional layouts"
  },
  {
    src: "/images/ATRD (28).webp",
    alt: "Downtown Dubai office interior premium design",
    title: "Downtown Dubai Office Interior Image 14",
    description: "Spacious office with high-end materials and contemporary design language"
  },
  {
    src: "/images/ATRD (29).webp",
    alt: "Signature office interior Downtown Dubai",
    title: "Downtown Dubai Office Interior Image 15",
    description: "Signature workspace reflecting innovation, luxury, and brand identity"
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
        HOME &gt; PROJECTS &gt; DOWNTOWN DUBAI OFFICE INTERIOR DESIGN
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
            INNOVATIVE WORKSPACE DESIGN:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            DOWNTOWN DUBAI OFFICE INTERIOR DESIGN
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
                At Rady Interiors, we proudly present our Downtown Dubai Office Interior Design project, crafted to reflect modern corporate excellence and premium workspace aesthetics.
              </p>
              <p>
                Our design approach focused on creating a functional, stylish, and inspiring office environment that enhances productivity while aligning with brand identity.
              </p>
              <p>
                Through our complete interior design and fit-out solutions, we transformed this office into a sophisticated workspace that balances innovation, comfort, and efficiency in one of Dubai’s most prestigious business hubs.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/ATRD (28).webp"
              alt="Luxury Downtown Dubai office interior design"
              title="Downtown Dubai Office Interior Design"
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
        DOWNTOWN DUBAI OFFICE INTERIOR GALLERY
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