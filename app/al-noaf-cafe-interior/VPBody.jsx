"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/ATRD (2).webp",
    alt: "Al Noaf cafe interior design modern seating area",
    title: "Al Noaf Cafe Interior Image 1",
    description: "Stylish café seating area with warm ambiance and contemporary finishes"
  },
  {
    src: "/images/ATRD (4).webp",
    alt: "Modern cafe interior Al Noaf Sharjah",
    title: "Al Noaf Cafe Interior Image 2",
    description: "Trendy café interior with sleek furniture and inviting lighting"
  },
  {
    src: "/images/ATRD (6).webp",
    alt: "Cafe counter design Al Noaf interior",
    title: "Al Noaf Cafe Interior Image 3",
    description: "Modern café counter with functional layout and premium materials"
  },
  {
    src: "/images/ATRD (14).webp",
    alt: "Al Noaf cafe lighting and ceiling design",
    title: "Al Noaf Cafe Interior Image 4",
    description: "Creative ceiling design with ambient lighting for a cozy café vibe"
  },
  {
    src: "/images/ATRD (15).webp",
    alt: "Cafe seating layout Al Noaf Sharjah",
    title: "Al Noaf Cafe Interior Image 5",
    description: "Optimized seating layout enhancing customer comfort and flow"
  },
  {
    src: "/images/ATRD (16).webp",
    alt: "Al Noaf cafe interior wall decor design",
    title: "Al Noaf Cafe Interior Image 6",
    description: "Feature walls with artistic elements and modern café aesthetics"
  },
  {
    src: "/images/ATRD (17).webp",
    alt: "Luxury cafe interior Al Noaf Sharjah",
    title: "Al Noaf Cafe Interior Image 7",
    description: "Upscale café environment blending comfort with elegant design"
  },
  {
    src: "/images/ATRD (18).webp",
    alt: "Cafe chandelier lighting Al Noaf interior",
    title: "Al Noaf Cafe Interior Image 8",
    description: "Statement lighting enhancing the café’s visual appeal"
  },
  {
    src: "/images/ATRD (22).webp",
    alt: "Open concept cafe design Al Noaf",
    title: "Al Noaf Cafe Interior Image 9",
    description: "Open-plan café layout creating a spacious and welcoming feel"
  },
  {
    src: "/images/ATRD (23).webp",
    alt: "Modern cafe seating Al Noaf Sharjah",
    title: "Al Noaf Cafe Interior Image 10",
    description: "Comfortable seating with modern textures and neutral tones"
  },
  {
    src: "/images/ATRD (25).webp",
    alt: "High-end cafe interior Al Noaf design",
    title: "Al Noaf Cafe Interior Image 11",
    description: "Premium café design with bespoke furniture and finishes"
  },
  {
    src: "/images/ATRD (26).webp",
    alt: "Elegant cafe interior Al Noaf Sharjah",
    title: "Al Noaf Cafe Interior Image 12",
    description: "Refined café ambiance with soft lighting and stylish décor"
  },
  {
    src: "/images/ATRD (27).webp",
    alt: "Al Noaf cafe lounge seating design",
    title: "Al Noaf Cafe Interior Image 13",
    description: "Relaxed lounge seating designed for social and casual gatherings"
  },
  {
    src: "/images/ATRD (28).webp",
    alt: "Modern luxury cafe interior Al Noaf Sharjah",
    title: "Al Noaf Cafe Interior Image 14",
    description: "Spacious café with marble finishes and designer lighting"
  },
  {
    src: "/images/ATRD (29).webp",
    alt: "Signature cafe interior design Al Noaf",
    title: "Al Noaf Cafe Interior Image 15",
    description: "Signature café interior reflecting modern lifestyle and elegance"
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
        HOME &gt; PROJECTS &gt; AL NOAF CAFE INTERIOR DESIGN
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
            DESIGNING MODERN CAFE EXPERIENCES:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            AL NOAF CAFE INTERIOR DESIGN
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
                At Rady Interiors, we proudly present our Al Noaf Café Interior Design project, crafted to deliver a modern and inviting café experience.
              </p>
              <p>
                Our design approach focused on creating a balanced environment with stylish seating, warm lighting, and functional layouts that enhance customer comfort and flow.
              </p>
              <p>
                Through our complete interior design and fit-out solutions, we transformed this café into a vibrant and elegant space that reflects contemporary lifestyle trends in Al Noaf.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/ATRD (28).webp"
              alt="Al Noaf cafe interior design Sharjah"
              title="Al Noaf Cafe Interior Design"
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
        AL NOAF CAFE INTERIOR GALLERY
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