"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/ATRD (2).webp",
    alt: "Luxury Bluewaters Island retail interior storefront design",
    title: "Bluewaters Island Retail Interior Image 1",
    description: "Elegant retail storefront with modern luxury finishes and premium display layout"
  },
  {
    src: "/images/ATRD (4).webp",
    alt: "Modern Bluewaters Island retail boutique design",
    title: "Bluewaters Island Retail Interior Image 2",
    description: "Sophisticated boutique layout with bespoke shelving and ambient lighting"
  },
  {
    src: "/images/ATRD (6).webp",
    alt: "High-end retail display Bluewaters Island Dubai",
    title: "Bluewaters Island Retail Interior Image 3",
    description: "Premium product display zone designed for luxury shopping experience"
  },
  {
    src: "/images/ATRD (14).webp",
    alt: "Bluewaters Island retail showroom interior",
    title: "Bluewaters Island Retail Interior Image 4",
    description: "Elegant showroom space with curated display walls and modern aesthetics"
  },
  {
    src: "/images/ATRD (15).webp",
    alt: "Luxury retail counter design Bluewaters Island",
    title: "Bluewaters Island Retail Interior Image 5",
    description: "Contemporary retail checkout counter with marble and gold detailing"
  },
  {
    src: "/images/ATRD (16).webp",
    alt: "Minimalist retail corridor Bluewaters Island store",
    title: "Bluewaters Island Retail Interior Image 6",
    description: "Clean retail circulation space with warm lighting and branding focus"
  },
  {
    src: "/images/ATRD (17).webp",
    alt: "Modern retail seating lounge Bluewaters Island",
    title: "Bluewaters Island Retail Interior Image 7",
    description: "Customer lounge area designed for premium retail experience"
  },
  {
    src: "/images/ATRD (18).webp",
    alt: "Luxury retail fitting room Bluewaters Island Dubai",
    title: "Bluewaters Island Retail Interior Image 8",
    description: "Exclusive fitting room with elegant finishes and soft lighting"
  },
  {
    src: "/images/ATRD (22).webp",
    alt: "Open plan retail interior Bluewaters Island Dubai",
    title: "Bluewaters Island Retail Interior Image 9",
    description: "Spacious retail floor layout with seamless customer flow design"
  },
  {
    src: "/images/ATRD (23).webp",
    alt: "Bluewaters Island boutique interior design",
    title: "Bluewaters Island Retail Interior Image 10",
    description: "Bright retail space with modern shelving and product zoning"
  },
  {
    src: "/images/ATRD (25).webp",
    alt: "Luxury retail fit-out Bluewaters Island Dubai",
    title: "Bluewaters Island Retail Interior Image 11",
    description: "High-end retail finishes with custom detailing and brand identity integration"
  },
  {
    src: "/images/ATRD (26).webp",
    alt: "Retail display wall Bluewaters Island boutique",
    title: "Bluewaters Island Retail Interior Image 12",
    description: "Curated display wall with premium lighting for product highlighting"
  },
  {
    src: "/images/ATRD (27).webp",
    alt: "Modern retail interior Bluewaters Island Dubai",
    title: "Bluewaters Island Retail Interior Image 13",
    description: "Stylish retail ambiance with minimal luxury design language"
  },
  {
    src: "/images/ATRD (28).webp",
    alt: "High-end retail showroom Bluewaters Island",
    title: "Bluewaters Island Retail Interior Image 14",
    description: "Grand retail showroom with marble flooring and luxury finishes"
  },
  {
    src: "/images/ATRD (29).webp",
    alt: "Premium boutique interior Bluewaters Island Dubai",
    title: "Bluewaters Island Retail Interior Image 15",
    description: "Signature retail interior blending branding, luxury, and customer experience"
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
        HOME &gt; PROJECTS &gt; BLUEWATERS ISLAND RETAIL
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
            TRANSFORMING LUXURY RETAIL SPACES:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            BLUEWATERS ISLAND RETAIL INTERIOR
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
                At WE DO Interior Design & Fitout, we present our Bluewaters Island Retail Interior project, designed to elevate luxury shopping experiences in one of Dubai’s most iconic destinations.
              </p>
              <p>
                Our approach focused on creating a high-end retail environment that blends brand identity, customer flow, and visual merchandising. Every detail was crafted with precision to enhance engagement and product visibility.
              </p>
              <p>
                Through our retail fit-out expertise, we transformed this space into a modern commercial destination where design meets functionality, delivering a premium shopping experience on Bluewaters Island.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/ATRD (28).webp"
              alt="Luxury Bluewaters Island retail interior Dubai"
              title="Bluewaters Island Retail Interior Design"
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
        BLUEWATERS ISLAND RETAIL INTERIOR GALLERY
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