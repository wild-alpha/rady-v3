"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/ATRD (2).webp",
    alt: "Mowradda villa renovation living room modern design",
    title: "Mowradda Villa Renovation Image 1",
    description: "Transformed living room with modern finishes and elegant lighting"
  },
  {
    src: "/images/ATRD (4).webp",
    alt: "Mowradda villa renovated lounge interior",
    title: "Mowradda Villa Renovation Image 2",
    description: "Sophisticated lounge upgraded with contemporary aesthetics"
  },
  {
    src: "/images/ATRD (6).webp",
    alt: "Luxury bedroom renovation Mowradda villa",
    title: "Mowradda Villa Renovation Image 3",
    description: "Refined bedroom space with soft tones and modern luxury styling"
  },
  {
    src: "/images/ATRD (14).webp",
    alt: "Dining area renovation Mowradda villa interior",
    title: "Mowradda Villa Renovation Image 4",
    description: "Elegant dining space redesigned with premium finishes"
  },
  {
    src: "/images/ATRD (15).webp",
    alt: "Modern kitchen renovation Mowradda villa",
    title: "Mowradda Villa Renovation Image 5",
    description: "Upgraded kitchen with sleek cabinetry and marble countertops"
  },
  {
    src: "/images/ATRD (16).webp",
    alt: "Hallway renovation Mowradda villa interior",
    title: "Mowradda Villa Renovation Image 6",
    description: "Minimalist hallway with warm lighting and clean design flow"
  },
  {
    src: "/images/ATRD (17).webp",
    alt: "Luxury seating area Mowradda villa renovation",
    title: "Mowradda Villa Renovation Image 7",
    description: "Comfortable seating space redesigned for modern living"
  },
  {
    src: "/images/ATRD (18).webp",
    alt: "Bathroom renovation Mowradda villa interior",
    title: "Mowradda Villa Renovation Image 8",
    description: "Spa-inspired bathroom with premium materials and fittings"
  },
  {
    src: "/images/ATRD (22).webp",
    alt: "Open plan renovation Mowradda villa design",
    title: "Mowradda Villa Renovation Image 9",
    description: "Open-plan living area with seamless spatial transformation"
  },
  {
    src: "/images/ATRD (23).webp",
    alt: "Modern interior renovation Mowradda villa",
    title: "Mowradda Villa Renovation Image 10",
    description: "Bright and airy interior upgraded with contemporary design elements"
  },
  {
    src: "/images/ATRD (25).webp",
    alt: "High-end villa renovation Mowradda",
    title: "Mowradda Villa Renovation Image 11",
    description: "Premium renovation showcasing craftsmanship and luxury finishes"
  },
  {
    src: "/images/ATRD (26).webp",
    alt: "Bedroom upgrade Mowradda villa renovation",
    title: "Mowradda Villa Renovation Image 12",
    description: "Stylish bedroom upgrade with integrated wardrobes and lighting"
  },
  {
    src: "/images/ATRD (27).webp",
    alt: "Modern lounge renovation Mowradda villa",
    title: "Mowradda Villa Renovation Image 13",
    description: "Elegant lounge redesigned for comfort and modern appeal"
  },
  {
    src: "/images/ATRD (28).webp",
    alt: "Luxury villa renovation Mowradda interior design",
    title: "Mowradda Villa Renovation Image 14",
    description: "Grand living space with marble flooring and refined detailing"
  },
  {
    src: "/images/ATRD (29).webp",
    alt: "Complete villa renovation Mowradda project",
    title: "Mowradda Villa Renovation Image 15",
    description: "Full villa transformation blending modern design with functionality"
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
        HOME &gt; PROJECTS &gt; MOWRADDA VILLA RENOVATION
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
            COMPLETE VILLA TRANSFORMATION:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            MOWRADDA VILLA RENOVATION
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
                At Rady Interiors, we proudly present our Mowradda Villa Renovation project, where we transformed an existing villa into a modern, elegant living space.
              </p>
              <p>
                Our renovation approach focused on upgrading interiors with contemporary design elements, improved space planning, and high-quality materials while preserving the villa’s original character.
              </p>
              <p>
                Through our complete renovation and fit-out services, we delivered a refined villa that combines functionality, luxury, and timeless design for modern living.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/ATRD (28).webp"
              alt="Mowradda villa renovation interior design"
              title="Mowradda Villa Renovation Project"
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
        MOWRADDA VILLA RENOVATION GALLERY
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