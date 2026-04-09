"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/ATRD (2).webp",
    alt: "Luxury Dubai Islands villa living room interior design",
    title: "Dubai Islands Villa Interior Image 1",
    description: "Elegant villa living room with modern luxury finishes and sea-inspired tones"
  },
  {
    src: "/images/ATRD (4).webp",
    alt: "Modern Dubai Islands villa lounge design",
    title: "Dubai Islands Villa Interior Image 2",
    description: "Sophisticated lounge area with bespoke furniture and panoramic lighting"
  },
  {
    src: "/images/ATRD (6).webp",
    alt: "Dubai Islands villa master bedroom interior design",
    title: "Dubai Islands Villa Interior Image 3",
    description: "Luxury master bedroom with calming coastal-inspired design aesthetics"
  },
  {
    src: "/images/ATRD (14).webp",
    alt: "Dubai Islands villa dining area interior",
    title: "Dubai Islands Villa Interior Image 4",
    description: "Elegant dining space with premium finishes and soft ambient lighting"
  },
  {
    src: "/images/ATRD (15).webp",
    alt: "Modern kitchen Dubai Islands villa interior",
    title: "Dubai Islands Villa Interior Image 5",
    description: "Contemporary kitchen with marble countertops and luxury cabinetry"
  },
  {
    src: "/images/ATRD (16).webp",
    alt: "Dubai Islands villa hallway interior design",
    title: "Dubai Islands Villa Interior Image 6",
    description: "Minimalist hallway design with warm lighting and smooth architectural flow"
  },
  {
    src: "/images/ATRD (17).webp",
    alt: "Luxury seating area Dubai Islands villa",
    title: "Dubai Islands Villa Interior Image 7",
    description: "Stylish seating space with neutral tones and refined detailing"
  },
  {
    src: "/images/ATRD (18).webp",
    alt: "Dubai Islands villa bathroom interior luxury design",
    title: "Dubai Islands Villa Interior Image 8",
    description: "Spa-inspired bathroom with marble textures and premium fittings"
  },
  {
    src: "/images/ATRD (22).webp",
    alt: "Open plan Dubai Islands villa interior design",
    title: "Dubai Islands Villa Interior Image 9",
    description: "Open layout connecting living, dining, and outdoor views seamlessly"
  },
  {
    src: "/images/ATRD (23).webp",
    alt: "Modern luxury villa Dubai Islands interior",
    title: "Dubai Islands Villa Interior Image 10",
    description: "Bright and airy villa interior with elegant modern design elements"
  },
  {
    src: "/images/ATRD (25).webp",
    alt: "High-end Dubai Islands villa interior design",
    title: "Dubai Islands Villa Interior Image 11",
    description: "Premium craftsmanship with bespoke luxury interior detailing"
  },
  {
    src: "/images/ATRD (26).webp",
    alt: "Luxury bedroom Dubai Islands villa interior",
    title: "Dubai Islands Villa Interior Image 12",
    description: "Elegant bedroom design with soft lighting and refined textures"
  },
  {
    src: "/images/ATRD (27).webp",
    alt: "Dubai Islands villa family lounge interior",
    title: "Dubai Islands Villa Interior Image 13",
    description: "Comfortable family lounge designed for luxury coastal living"
  },
  {
    src: "/images/ATRD (28).webp",
    alt: "Grand living room Dubai Islands villa interior",
    title: "Dubai Islands Villa Interior Image 14",
    description: "Spacious living area with marble flooring and elegant design language"
  },
  {
    src: "/images/ATRD (29).webp",
    alt: "Signature Dubai Islands villa interior design",
    title: "Dubai Islands Villa Interior Image 15",
    description: "Signature luxury villa design blending modern elegance with coastal lifestyle"
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
        HOME &gt; PROJECTS &gt; DUBAI ISLANDS VILLA INTERIOR DESIGN
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
            LUXURY COASTAL LIVING DESIGN:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            DUBAI ISLANDS VILLA 
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
                At Rady Interiors, we proudly present our Dubai Islands Villa Interior Design project, inspired by coastal luxury living and modern architectural excellence.
              </p>
              <p>
                Our design approach focused on creating a seamless connection between indoor elegance and breathtaking island views, using premium materials and bespoke detailing.
              </p>
              <p>
                Through our full interior design and fit-out services, we transformed this villa into a refined waterfront home that reflects comfort, luxury, and timeless sophistication.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/ATRD (28).webp"
              alt="Luxury Dubai Islands villa interior design"
              title="Dubai Islands Villa Interior Design"
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
        DUBAI ISLANDS VILLA INTERIOR GALLERY
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