"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/FamilycccLiving- GF- View 4.jpg",
    alt: "Luxury Al Barari villa living room interior",
    title: "Al Barari Villa Interior Image 1",
    description: "Elegant living room with earthy tones, natural textures, and biophilic luxury design"
  },
  {
    src: "/images/Family Livvcccing- GF- View 7.jpg",
    alt: "Modern Al Barari villa lounge design",
    title: "Al Barari Villa Interior Image 2",
    description: "Organic-inspired lounge with warm lighting and natural material finishes"
  },
  {
    src: "/images/Family Lccciving- GF- View 8.jpg",
    alt: "Luxury villa bedroom Al Barari Dubai",
    title: "Al Barari Villa Interior Image 3",
    description: "Calm master bedroom designed with soft tones and nature-inspired aesthetics"
  },
  {
    src: "/images/Rahmanyaccc - Sultan Zarooni-View 2.jpg",
    alt: "Al Barari villa dining area interior",
    title: "Al Barari Villa Interior Image 4",
    description: "Elegant dining space surrounded by natural textures and refined lighting"
  },
  {
    src: "/images/Rahmanyaccc Dining- GF- View 4.jpg",
    alt: "Luxury kitchen Al Barari villa",
    title: "Al Barari Villa Interior Image 5",
    description: "Modern kitchen with wooden finishes, marble counters, and organic design flow"
  },
  {
    src: "/images/1 (8)ccc.jpg",
    alt: "Al Barari villa hallway interior design",
    title: "Al Barari Villa Interior Image 6",
    description: "Minimalist hallway with warm lighting and nature-inspired architectural elements"
  },
  {
    src: "/images/1 cocccpy.jpg",
    alt: "Luxury villa seating area Al Barari",
    title: "Al Barari Villa Interior Image 7",
    description: "Relaxed living space with natural palette and custom designer furniture"
  },
  {
    src: "/images/2 ccc(9).jpg",
    alt: "Luxury bathroom Al Barari villa interior",
    title: "Al Barari Villa Interior Image 8",
    description: "Spa-style bathroom featuring stone textures and serene luxury ambiance"
  },
  {
    src: "/images/Family Livicccng- GF- View 1.jpg",
    alt: "Modern villa interior Al Barari Dubai",
    title: "Al Barari Villa Interior Image 9",
    description: "Open-plan living space inspired by nature and luxury minimalism"
  },
  {
    src: "/images/Family cccLiving- GF- View 2.jpg",
    alt: "Al Barari villa lounge design",
    title: "Al Barari Villa Interior Image 10",
    description: "Bright lounge area with organic materials and soft earthy tones"
  },
  {
    src: "/images/Familcccy Living- GF- View 5.jpg",
    alt: "Luxury villa interior Al Barari Dubai",
    title: "Al Barari Villa Interior Image 11",
    description: "Premium craftsmanship with natural stone and wood finishes"
  },
  {
    src: "/images/Raccchmanya - Sultan Zarooni-View 1.jpg",
    alt: "Villa bedroom design Al Barari Dubai",
    title: "Al Barari Villa Interior Image 12",
    description: "Nature-inspired bedroom with warm lighting and calming aesthetics"
  },
  {
    src: "/images/Rahmanya - Sultan Zarooni-View 3ccc (1).jpg",
    alt: "Luxury Al Barari villa living room",
    title: "Al Barari Villa Interior Image 13",
    description: "Sophisticated lounge blending indoor comfort with outdoor natural beauty"
  },
  {
    src: "/images/Rahmanya Dining- GF- Vicccew 2 (1).jpg",
    alt: "Al Barari luxury villa interior design Dubai",
    title: "Al Barari Villa Interior Image 14",
    description: "Grand living space with organic textures and luxury detailing"
  }
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
        HOME &gt; PROJECTS &gt; AL BARARI VILLA
      </p>

      {/* Header Section */}
      <div className="relative pl-4 sm:pl-6 mb-20">

        <div className="absolute top-0 left-0 h-full w-[1px] bg-gray-400 z-0 hidden lg:block" />
        <motion.div
          className="absolute left-[-4px] top-[104px] w-2 h-2 rounded-full bg-[#d4af37] z-10 hidden lg:block"
          style={{ y: dotY }}
        />

        <div className="mb-6">
          <p className="text-xs sm:text-base font-conthrax tracking-wide uppercase text-white">
            TRANSFORMING LUXURY VILLAS:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            AL BARARI VILLA INTERIOR
          </h1>
          <div className="w-30 sm:w-96 h-[2px] bg-[#d4af37] mt-2" />
        </div>

        <div className="flex flex-col lg:flex-row gap-10">

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div
              ref={scrollRef}
              className="max-h-[360px] overflow-y-auto scroll-smooth text-sm leading-6 text-white/90 space-y-4 pr-2 font-play"
              style={{ scrollbarWidth: "none" }}
            >
              <p>
                At WE DO Interior Design & Fitout, we proudly present our Al Barari Villa Interior project, a perfect blend of luxury living and nature-inspired design. This villa reflects the unique essence of Al Barari, where greenery, tranquility, and high-end architecture come together.
              </p>
              <p>
                Our design approach focused on creating a seamless connection between indoor and outdoor spaces. Every area of this Al Barari villa was carefully designed using natural materials, soft earthy tones, and bespoke craftsmanship to enhance the organic lifestyle experience.
              </p>
              <p>
                Through our complete villa interior design and fit-out services, we transformed this residence into a peaceful luxury retreat. The design emphasizes sustainability, elegance, and comfort, making it a true reflection of modern eco-luxury living in Dubai.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/FamilycccLiving- GF- View 4.jpg"
              alt="Luxury Al Barari villa interior design Dubai"
              title="Al Barari Villa Interior Design"
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
          alt="Scroll down indicator"
          width={320}
          height={80}
          className="h-auto w-48 sm:w-64"
        />
      </div>

      {/* Gallery Title */}
      <h2 className="text-white mt-10 mb-10 text-sm sm:text-xl tracking-widest font-conthrax text-center">
        AL BARARI VILLA INTERIOR GALLERY
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