"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/1 (6raqaibah).jpg",
    alt: "Al Riqaibah cafe interior seating design",
    title: "Al Riqaibah Cafe Interior Image 1",
    description: "Modern cafe seating with warm lighting and cozy ambiance"
  },
  {
    src: "/images/2raqaibah(7).jpg",
    alt: "Al Riqaibah cafe counter design",
    title: "Al Riqaibah Cafe Interior Image 2",
    description: "Stylish service counter with contemporary finishes"
  },
  {
    src: "/images/4raqaibah7).jpg",
    alt: "Cafe lighting design Al Riqaibah",
    title: "Al Riqaibah Cafe Interior Image 3",
    description: "Ambient lighting creating a welcoming and relaxing cafe environment"
  },
  {
    src: "/images/6raqaibah1).jpg",
    alt: "Modern cafe interior Al Riqaibah design",
    title: "Al Riqaibah Cafe Interior Image 4",
    description: "Elegant layout combining functionality with modern aesthetics"
  },
  {
    src: "/images/raqaibah).jpg",
    alt: "Al Riqaibah cafe seating area design",
    title: "Al Riqaibah Cafe Interior Image 5",
    description: "Comfortable seating designed for social and casual dining experiences"
  },
  {
    src: "/images/raqaibah.jpg",
    alt: "Cafe wall design Al Riqaibah interior",
    title: "Al Riqaibah Cafe Interior Image 6",
    description: "Creative wall textures and decor enhancing the cafe identity"
  },
  {
    src: "/images/raqaibah(1).jpg",
    alt: "Al Riqaibah cafe dining space interior",
    title: "Al Riqaibah Cafe Interior Image 7",
    description: "Spacious dining layout with modern furniture and warm tones"
  },
  {
    src: "/images/3raqaibah(3).jpg",
    alt: "Cafe ceiling lighting Al Riqaibah design",
    title: "Al Riqaibah Cafe Interior Image 8",
    description: "Decorative ceiling elements with statement lighting features"
  },
  {
    src: "/images/5raqaibah(7).jpg",
    alt: "Open cafe layout Al Riqaibah interior design",
    title: "Al Riqaibah Cafe Interior Image 9",
    description: "Open-plan cafe layout with seamless flow and inviting atmosphere"
  },
  {
    src: "/images/8raqaibah2).jpg",
    alt: "Modern cafe design Al Riqaibah",
    title: "Al Riqaibah Cafe Interior Image 10",
    description: "Minimal and stylish cafe interior with neutral color palette"
  },
  {
    src: "/images/9raqaibah2).jpg",
    alt: "Luxury cafe interior Al Riqaibah design",
    title: "Al Riqaibah Cafe Interior Image 11",
    description: "Premium finishes with elegant detailing and modern appeal"
  },
  {
    src: "/images/11raqaibah1).jpg",
    alt: "Cafe seating arrangement Al Riqaibah",
    title: "Al Riqaibah Cafe Interior Image 12",
    description: "Thoughtfully planned seating layout for maximum comfort"
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
        HOME &gt; PROJECTS &gt; AL RIQAIBAH CAFE INTERIOR DESIGN
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
            CREATING MODERN CAFE EXPERIENCES:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            AL RIQAIBAH CAFE INTERIOR DESIGN
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
                At Rady Interiors, we proudly present our Al Riqaibah Cafe Interior Design project, designed to create a welcoming and stylish environment for modern cafe experiences.
              </p>
              <p>
                Our design approach focused on combining comfort, aesthetics, and functionality, ensuring a seamless flow between seating, service, and social spaces.
              </p>
              <p>
                Through our complete interior design and fit-out solutions, we transformed this cafe into a vibrant and inviting destination that enhances customer experience and brand identity.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/raqaibah.jpg"
              alt="Al Riqaibah cafe interior design"
              title="Al Riqaibah Cafe Interior Design"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </figure>

        </div>
      </div>

     
      {/* Gallery Title */}
      <h2 className="text-white mt-10 mb-10 text-sm sm:text-xl tracking-widest font-conthrax text-center">
        AL RIQAIBAH CAFE INTERIOR GALLERY
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