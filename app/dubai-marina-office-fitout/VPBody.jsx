"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/ATRD (2).webp",
    alt: "Luxury Dubai Marina office reception fit-out design",
    title: "Dubai Marina Office Fit-Out Image 1",
    description: "Modern reception area with premium finishes and corporate branding elements"
  },
  {
    src: "/images/ATRD (4).webp",
    alt: "Dubai Marina office workspace interior design",
    title: "Dubai Marina Office Fit-Out Image 2",
    description: "Open-plan workspace with ergonomic layout and contemporary design aesthetics"
  },
  {
    src: "/images/ATRD (6).webp",
    alt: "Executive office Dubai Marina interior design",
    title: "Dubai Marina Office Fit-Out Image 3",
    description: "Executive cabin designed with luxury wood finishes and modern minimal style"
  },
  {
    src: "/images/ATRD (14).webp",
    alt: "Meeting room Dubai Marina office fit-out",
    title: "Dubai Marina Office Fit-Out Image 4",
    description: "High-end meeting room with glass partitions and smart lighting integration"
  },
  {
    src: "/images/ATRD (15).webp",
    alt: "Modern office pantry Dubai Marina",
    title: "Dubai Marina Office Fit-Out Image 5",
    description: "Stylish pantry and breakout area designed for employee comfort and relaxation"
  },
  {
    src: "/images/ATRD (16).webp",
    alt: "Office corridor Dubai Marina fit-out",
    title: "Dubai Marina Office Fit-Out Image 6",
    description: "Minimalist corridor with clean lines and modern lighting design"
  },
  {
    src: "/images/ATRD (17).webp",
    alt: "Workstation area Dubai Marina office interior",
    title: "Dubai Marina Office Fit-Out Image 7",
    description: "Efficient workstation layout with collaborative and focused work zones"
  },
  {
    src: "/images/ATRD (18).webp",
    alt: "Luxury office washroom Dubai Marina",
    title: "Dubai Marina Office Fit-Out Image 8",
    description: "Premium office washroom with marble finishes and elegant fixtures"
  },
  {
    src: "/images/ATRD (22).webp",
    alt: "Modern office lounge Dubai Marina interior",
    title: "Dubai Marina Office Fit-Out Image 9",
    description: "Comfortable lounge area designed for informal meetings and relaxation"
  },
  {
    src: "/images/ATRD (23).webp",
    alt: "Dubai Marina corporate office interior design",
    title: "Dubai Marina Office Fit-Out Image 10",
    description: "Stylish corporate workspace with modern branding and open layout"
  },
  {
    src: "/images/ATRD (25).webp",
    alt: "High-end office cabin Dubai Marina",
    title: "Dubai Marina Office Fit-Out Image 11",
    description: "Private office cabin with luxury finishes and executive styling"
  },
  {
    src: "/images/ATRD (26).webp",
    alt: "Conference room Dubai Marina office design",
    title: "Dubai Marina Office Fit-Out Image 12",
    description: "Large conference room designed for collaboration and client presentations"
  },
  {
    src: "/images/ATRD (27).webp",
    alt: "Creative workspace Dubai Marina office",
    title: "Dubai Marina Office Fit-Out Image 13",
    description: "Creative workspace with flexible seating and modern industrial design"
  },
  {
    src: "/images/ATRD (28).webp",
    alt: "Premium office interior Dubai Marina fit-out",
    title: "Dubai Marina Office Fit-Out Image 14",
    description: "Premium corporate interior with elegant lighting and spatial planning"
  },
  {
    src: "/images/ATRD (29).webp",
    alt: "Modern corporate office Dubai Marina",
    title: "Dubai Marina Office Fit-Out Image 15",
    description: "Signature office fit-out blending functionality, luxury, and productivity"
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
        HOME &gt; PROJECTS &gt; DUBAI MARINA OFFICE FIT-OUT
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
            CREATING MODERN CORPORATE SPACES:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            DUBAI MARINA OFFICE FIT-OUT
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
                At Rady Interior, we present our Dubai Marina Office Fit-Out project, designed to deliver a premium corporate workspace in one of Dubai’s most dynamic business districts.
              </p>
              <p>
                Our design approach focuses on productivity, modern aesthetics, and efficient space planning. Every area is carefully crafted to enhance workflow, collaboration, and employee comfort.
              </p>
              <p>
                Through our complete office interior design and fit-out solutions, we transformed this workspace into a high-performance environment that reflects corporate identity, professionalism, and modern luxury.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/ATRD (28).webp"
              alt="Luxury Dubai Marina office interior fit-out design"
              title="Dubai Marina Office Fit-Out Interior Design"
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
        DUBAI MARINA OFFICE FIT-OUT GALLERY
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