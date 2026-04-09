"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/ATRD (2).webp",
    alt: "Luxury Damac Lagoons villa interior living room design",
    title: "Damac Lagoons Villa Interior Image 1",
    description: "Elegant living room with modern luxury finishes and soft ambient lighting"
  },
  {
    src: "/images/ATRD (4).webp",
    alt: "Modern Damac Lagoons villa lounge interior fit out",
    title: "Damac Lagoons Villa Interior Image 2",
    description: "Sophisticated lounge area with bespoke furniture and contemporary styling"
  },
  {
    src: "/images/ATRD (6).webp",
    alt: "Luxury Damac Lagoons villa bedroom interior design",
    title: "Damac Lagoons Villa Interior Image 3",
    description: "Calm master bedroom with warm tones and premium interior detailing"
  },
  {
    src: "/images/ATRD (14).webp",
    alt: "Damac Lagoons villa dining area interior fit out",
    title: "Damac Lagoons Villa Interior Image 4",
    description: "Elegant dining space with statement lighting and luxury finishes"
  },
  {
    src: "/images/ATRD (15).webp",
    alt: "Modern kitchen Damac Lagoons villa interior design",
    title: "Damac Lagoons Villa Interior Image 5",
    description: "Contemporary kitchen with marble countertops and custom cabinetry"
  },
  {
    src: "/images/ATRD (16).webp",
    alt: "Luxury hallway Damac Lagoons villa interior design",
    title: "Damac Lagoons Villa Interior Image 6",
    description: "Minimalist corridor design with warm lighting and elegant flow"
  },
  {
    src: "/images/ATRD (17).webp",
    alt: "Damac Lagoons villa living room decor interior fit out",
    title: "Damac Lagoons Villa Interior Image 7",
    description: "Stylish seating arrangement with modern luxury aesthetics"
  },
  {
    src: "/images/ATRD (18).webp",
    alt: "Luxury bathroom Damac Lagoons villa interior design",
    title: "Damac Lagoons Villa Interior Image 8",
    description: "Spa-inspired bathroom with marble textures and premium fittings"
  },
  {
    src: "/images/ATRD (22).webp",
    alt: "Open plan Damac Lagoons villa interior design",
    title: "Damac Lagoons Villa Interior Image 9",
    description: "Seamless open-plan living with indoor-outdoor connection"
  },
  {
    src: "/images/ATRD (23).webp",
    alt: "Modern Damac Lagoons villa seating area interior",
    title: "Damac Lagoons Villa Interior Image 10",
    description: "Bright and airy lounge with neutral tones and custom furniture"
  },
  {
    src: "/images/ATRD (25).webp",
    alt: "Luxury villa interior fit out Damac Lagoons Dubai",
    title: "Damac Lagoons Villa Interior Image 11",
    description: "High-end finishes with bespoke craftsmanship and modern detailing"
  },
  {
    src: "/images/ATRD (26).webp",
    alt: "Elegant bedroom Damac Lagoons villa interior design",
    title: "Damac Lagoons Villa Interior Image 12",
    description: "Soft luxury bedroom design with integrated wardrobes"
  },
  {
    src: "/images/ATRD (27).webp",
    alt: "Luxury lounge Damac Lagoons villa interior design",
    title: "Damac Lagoons Villa Interior Image 13",
    description: "Modern lounge space inspired by resort-style living"
  },
  {
    src: "/images/ATRD (28).webp",
    alt: "Premium villa interior Damac Lagoons Dubai design",
    title: "Damac Lagoons Villa Interior Image 14",
    description: "Grand living space with marble flooring and elegant lighting"
  },
  {
    src: "/images/ATRD (29).webp",
    alt: "Signature Damac Lagoons villa interior fit out design",
    title: "Damac Lagoons Villa Interior Image 15",
    description: "Signature luxury villa interior blending comfort and modern elegance"
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
        HOME &gt; PROJECTS &gt; DAMAC LAGOONS VILLA INTERIOR FIT OUT
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
            LUXURY VILLA INTERIOR TRANSFORMATION:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            DAMAC LAGOONS VILLA – INTERIOR FIT OUT
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
                At Rady Interiors, we proudly present our Damac Lagoons Villa Interior Fit Out project located in 
                contentReference, designed to reflect resort-style luxury living.
              </p>
              <p>
                Our approach focused on creating a seamless blend of modern elegance and Mediterranean-inspired lifestyle aesthetics, tailored for premium villa living.
              </p>
              <p>
                Through complete interior design and fit-out execution, we transformed this villa into a sophisticated home with high-end materials, warm lighting, and refined detailing.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/ATRD (28).webp"
              alt="Luxury Damac Lagoons villa interior design Dubai"
              title="Damac Lagoons Villa Interior Fit Out"
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
        DAMAC LAGOONS VILLA INTERIOR GALLERY
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