"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/ATRD (2).webp",
    alt: "Luxury Dubai South apartment living room interior design",
    title: "Dubai South Apartment Interior Image 1",
    description: "Elegant living room with modern luxury finishes and soft ambient lighting"
  },
  {
    src: "/images/ATRD (4).webp",
    alt: "Modern Dubai South apartment lounge design",
    title: "Dubai South Apartment Interior Image 2",
    description: "Contemporary lounge with bespoke furniture and clean minimal aesthetics"
  },
  {
    src: "/images/ATRD (6).webp",
    alt: "Luxury Dubai South apartment bedroom interior",
    title: "Dubai South Apartment Interior Image 3",
    description: "Master bedroom with calming tones and premium interior detailing"
  },
  {
    src: "/images/ATRD (14).webp",
    alt: "Dubai South apartment dining area interior design",
    title: "Dubai South Apartment Interior Image 4",
    description: "Elegant dining space with designer lighting and modern finishes"
  },
  {
    src: "/images/ATRD (15).webp",
    alt: "Modern kitchen Dubai South apartment interior",
    title: "Dubai South Apartment Interior Image 5",
    description: "Sleek kitchen design with marble countertops and smart storage solutions"
  },
  {
    src: "/images/ATRD (16).webp",
    alt: "Luxury corridor Dubai South apartment design",
    title: "Dubai South Apartment Interior Image 6",
    description: "Minimalist corridor with warm lighting and elegant architectural flow"
  },
  {
    src: "/images/ATRD (17).webp",
    alt: "Dubai South apartment living room decor",
    title: "Dubai South Apartment Interior Image 7",
    description: "Stylish seating area with neutral tones and luxury detailing"
  },
  {
    src: "/images/ATRD (18).webp",
    alt: "Luxury bathroom Dubai South apartment interior",
    title: "Dubai South Apartment Interior Image 8",
    description: "Spa-inspired bathroom with marble finishes and premium fittings"
  },
  {
    src: "/images/ATRD (22).webp",
    alt: "Open-plan Dubai South apartment interior design",
    title: "Dubai South Apartment Interior Image 9",
    description: "Open layout connecting living, dining, and kitchen seamlessly"
  },
  {
    src: "/images/ATRD (23).webp",
    alt: "Modern apartment interior Dubai South",
    title: "Dubai South Apartment Interior Image 10",
    description: "Bright and airy space with modern minimalist design approach"
  },
  {
    src: "/images/ATRD (25).webp",
    alt: "Luxury apartment fit-out Dubai South interior",
    title: "Dubai South Apartment Interior Image 11",
    description: "Premium finishes with bespoke interior craftsmanship"
  },
  {
    src: "/images/ATRD (26).webp",
    alt: "Elegant bedroom Dubai South apartment design",
    title: "Dubai South Apartment Interior Image 12",
    description: "Soft luxury bedroom design with warm lighting and textures"
  },
  {
    src: "/images/ATRD (27).webp",
    alt: "Dubai South luxury apartment lounge",
    title: "Dubai South Apartment Interior Image 13",
    description: "Modern lounge designed for comfort and elegance"
  },
  {
    src: "/images/ATRD (28).webp",
    alt: "High-end apartment interior Dubai South",
    title: "Dubai South Apartment Interior Image 14",
    description: "Spacious living area with marble flooring and refined aesthetics"
  },
  {
    src: "/images/ATRD (29).webp",
    alt: "Signature Dubai South apartment interior design",
    title: "Dubai South Apartment Interior Image 15",
    description: "Signature luxury apartment design blending comfort and sophistication"
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
        HOME &gt; PROJECTS &gt; LUXURY DUBAI SOUTH APARTMENT
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
            ELEVATING URBAN LUXURY LIVING:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            LUXURY DUBAI SOUTH APARTMENT
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
                At Rady Interiors, we proudly present our Luxury Dubai South Apartment Interior Fit-out project, designed for modern urban living with elegance and functionality.
              </p>
              <p>
                Our approach focused on creating a seamless balance between contemporary aesthetics and practical space planning, using premium materials and bespoke design elements.
              </p>
              <p>
                Through our complete interior design and fit-out solutions, we transformed this apartment into a refined living space that reflects comfort, luxury, and modern Dubai lifestyle standards.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/ATRD (28).webp"
              alt="Luxury Dubai South apartment interior design"
              title="Dubai South Apartment Interior Fit-out"
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
        DUBAI SOUTH APARTMENT INTERIOR GALLERY
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