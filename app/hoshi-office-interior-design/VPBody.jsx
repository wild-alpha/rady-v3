"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/ATRD (2).webp",
    alt: "Modern Hoshi office interior workspace design",
    title: "Hoshi Office Interior Image 1",
    description: "Contemporary office workspace with clean layouts and productivity-focused design"
  },
  {
    src: "/images/ATRD (4).webp",
    alt: "Hoshi office reception interior design",
    title: "Hoshi Office Interior Image 2",
    description: "Stylish reception area designed to create a strong first impression"
  },
  {
    src: "/images/ATRD (6).webp",
    alt: "Modern meeting room Hoshi office design",
    title: "Hoshi Office Interior Image 3",
    description: "Elegant meeting room with acoustic solutions and modern aesthetics"
  },
  {
    src: "/images/ATRD (14).webp",
    alt: "Hoshi office open workspace interior design",
    title: "Hoshi Office Interior Image 4",
    description: "Open-plan office layout promoting collaboration and flexibility"
  },
  {
    src: "/images/ATRD (15).webp",
    alt: "Hoshi office executive cabin interior",
    title: "Hoshi Office Interior Image 5",
    description: "Executive office cabin with premium finishes and sleek design"
  },
  {
    src: "/images/ATRD (16).webp",
    alt: "Hoshi office breakout area design",
    title: "Hoshi Office Interior Image 6",
    description: "Relaxed breakout space designed for comfort and informal meetings"
  },
  {
    src: "/images/ATRD (17).webp",
    alt: "Modern office lighting Hoshi workspace design",
    title: "Hoshi Office Interior Image 7",
    description: "Strategic lighting design enhancing productivity and ambiance"
  },
  {
    src: "/images/ATRD (18).webp",
    alt: "Hoshi office conference room interior design",
    title: "Hoshi Office Interior Image 8",
    description: "Conference room with advanced layout and modern finishes"
  },
  {
    src: "/images/ATRD (22).webp",
    alt: "Creative workspace Hoshi office interior design",
    title: "Hoshi Office Interior Image 9",
    description: "Creative workspace encouraging innovation and team collaboration"
  },
  {
    src: "/images/ATRD (23).webp",
    alt: "Hoshi office workstation setup interior",
    title: "Hoshi Office Interior Image 10",
    description: "Ergonomic workstation setup designed for efficiency and comfort"
  },
  {
    src: "/images/ATRD (25).webp",
    alt: "Premium office interior Hoshi workspace",
    title: "Hoshi Office Interior Image 11",
    description: "High-end office interior reflecting brand identity and professionalism"
  },
  {
    src: "/images/ATRD (26).webp",
    alt: "Hoshi office interior modern design Dubai style",
    title: "Hoshi Office Interior Image 12",
    description: "Modern office design with minimal aesthetics and premium materials"
  },
  {
    src: "/images/ATRD (27).webp",
    alt: "Hoshi office lounge area interior design",
    title: "Hoshi Office Interior Image 13",
    description: "Comfortable office lounge area with contemporary design elements"
  },
  {
    src: "/images/ATRD (28).webp",
    alt: "Luxury office interior Hoshi project design",
    title: "Hoshi Office Interior Image 14",
    description: "Sophisticated office interior with elegant finishes and spacious layout"
  },
  {
    src: "/images/ATRD (29).webp",
    alt: "Signature Hoshi office interior design project",
    title: "Hoshi Office Interior Image 15",
    description: "Signature office design combining functionality with modern corporate style"
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
        HOME &gt; PROJECTS &gt; HOSHI OFFICE INTERIOR DESIGN
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
            HOSHI OFFICE INTERIOR DESIGN
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
                At Rady Interiors, we proudly present our Hoshi Office Interior Design project, crafted to deliver a modern, efficient, and inspiring workspace.
              </p>
              <p>
                Our design approach focused on enhancing productivity through smart space planning, ergonomic layouts, and contemporary aesthetics tailored to modern business needs.
              </p>
              <p>
                Through our complete office interior design and fit-out solutions, we transformed this workspace into a professional environment that reflects brand identity, innovation, and functionality.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/ATRD (28).webp"
              alt="Modern Hoshi office interior design project"
              title="Hoshi Office Interior Design"
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
        HOSHI OFFICE INTERIOR GALLERY
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