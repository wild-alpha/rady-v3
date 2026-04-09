"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/ATRD (2).webp",
    alt: "Luxury Al Rahmaniya retail interior display design",
    title: "Al Rahmaniya Retail Interior Image 1",
    description: "Modern retail display with premium lighting and elegant product presentation"
  },
  {
    src: "/images/ATRD (4).webp",
    alt: "Al Rahmaniya retail shop interior design Dubai",
    title: "Al Rahmaniya Retail Interior Image 2",
    description: "Contemporary retail layout with customer-friendly circulation flow"
  },
  {
    src: "/images/ATRD (6).webp",
    alt: "High-end retail shelving Al Rahmaniya interior",
    title: "Al Rahmaniya Retail Interior Image 3",
    description: "Custom-built shelving units designed for maximum product visibility"
  },
  {
    src: "/images/ATRD (14).webp",
    alt: "Al Rahmaniya retail lighting interior design",
    title: "Al Rahmaniya Retail Interior Image 4",
    description: "Strategic lighting design enhancing product focus and brand identity"
  },
  {
    src: "/images/ATRD (15).webp",
    alt: "Modern boutique retail Al Rahmaniya Sharjah",
    title: "Al Rahmaniya Retail Interior Image 5",
    description: "Elegant boutique-style retail environment with luxury finishes"
  },
  {
    src: "/images/ATRD (16).webp",
    alt: "Al Rahmaniya retail interior wall branding design",
    title: "Al Rahmaniya Retail Interior Image 6",
    description: "Strong brand-focused wall design with modern visual identity elements"
  },
  {
    src: "/images/ATRD (17).webp",
    alt: "Retail store interior Al Rahmaniya Sharjah design",
    title: "Al Rahmaniya Retail Interior Image 7",
    description: "Spacious retail environment designed for customer engagement"
  },
  {
    src: "/images/ATRD (18).webp",
    alt: "Luxury retail counter Al Rahmaniya interior design",
    title: "Al Rahmaniya Retail Interior Image 8",
    description: "Premium cashier counter design with modern luxury detailing"
  },
  {
    src: "/images/ATRD (22).webp",
    alt: "Modern retail showroom Al Rahmaniya interior",
    title: "Al Rahmaniya Retail Interior Image 9",
    description: "Open-plan showroom layout for enhanced customer experience"
  },
  {
    src: "/images/ATRD (23).webp",
    alt: "Retail fashion store Al Rahmaniya Sharjah interior",
    title: "Al Rahmaniya Retail Interior Image 10",
    description: "Stylish retail fashion display with clean modern aesthetics"
  },
  {
    src: "/images/ATRD (25).webp",
    alt: "High-end retail interior Al Rahmaniya design",
    title: "Al Rahmaniya Retail Interior Image 11",
    description: "Luxury retail ambiance with premium material selection"
  },
  {
    src: "/images/ATRD (26).webp",
    alt: "Modern shop interior Al Rahmaniya Sharjah",
    title: "Al Rahmaniya Retail Interior Image 12",
    description: "Functional retail space designed for smooth customer navigation"
  },
  {
    src: "/images/ATRD (27).webp",
    alt: "Boutique retail design Al Rahmaniya interior",
    title: "Al Rahmaniya Retail Interior Image 13",
    description: "Elegant boutique retail with minimal yet premium styling"
  },
  {
    src: "/images/ATRD (28).webp",
    alt: "Premium retail showroom Al Rahmaniya Sharjah",
    title: "Al Rahmaniya Retail Interior Image 14",
    description: "High-end retail showroom with luxury finishing details"
  },
  {
    src: "/images/ATRD (29).webp",
    alt: "Signature retail interior Al Rahmaniya design Sharjah",
    title: "Al Rahmaniya Retail Interior Image 15",
    description: "Signature retail concept blending branding and customer experience"
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
        HOME &gt; PROJECTS &gt; AL RAHMANIYA RETAIL INTERIOR DESIGN
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
            CREATING IMPACTFUL RETAIL SPACES:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            AL RAHMANIYA RETAIL INTERIOR DESIGN
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
                At Rady Interiors, we proudly present our Al Rahmaniya Retail Interior Design project, created to deliver a premium shopping experience with strong visual identity.
              </p>
              <p>
                Our design approach focused on optimizing customer flow, enhancing product visibility, and building a modern retail environment that attracts and engages customers.
              </p>
              <p>
                Through our complete interior design and fit-out solutions, we transformed this retail space into a high-end commercial environment that boosts brand value and customer experience.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/ATRD (28).webp"
              alt="Luxury Al Rahmaniya retail interior design Sharjah"
              title="Al Rahmaniya Retail Interior Design"
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
        AL RAHMANIYA RETAIL INTERIOR GALLERY
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