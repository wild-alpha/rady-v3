"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/01kitchen.jpg",
    alt: "Luxury Al Tai Sharjah kitchen interior design",
    title: "Al Tai Sharjah Kitchen Interior Image 1",
    description: "Elegant modern kitchen with premium finishes and warm lighting design"
  },
  {
    src: "/images/02kitchen.jpg",
    alt: "Modern Al Tai Sharjah kitchen cabinetry design",
    title: "Al Tai Sharjah Kitchen Interior Image 2",
    description: "Sleek modular kitchen with bespoke cabinetry and clean layout"
  },
  {
    src: "/images/07 (1)kitchen.jpg",
    alt: "Luxury kitchen island Al Tai Sharjah home",
    title: "Al Tai Sharjah Kitchen Interior Image 3",
    description: "Contemporary kitchen island with marble countertops and seating space"
  },
  {
    src: "/images/0300kitchen.jpg",
    alt: "Al Tai Sharjah kitchen lighting and ceiling design",
    title: "Al Tai Sharjah Kitchen Interior Image 4",
    description: "Ambient lighting with modern ceiling detailing for luxury kitchens"
  },
  {
    src: "/images/04kitchen.jpg",
    alt: "High-end kitchen storage design Al Tai Sharjah",
    title: "Al Tai Sharjah Kitchen Interior Image 5",
    description: "Smart storage solutions with seamless built-in cabinetry design"
  },
  {
    src: "/images/05kitchen.jpg",
    alt: "Modern kitchen layout Al Tai Sharjah villa",
    title: "Al Tai Sharjah Kitchen Interior Image 6",
    description: "Efficient kitchen layout designed for functionality and luxury"
  },
  {
    src: "/images/06 (1)kitchen.jpg",
    alt: "Luxury cooking space Al Tai Sharjah kitchen",
    title: "Al Tai Sharjah Kitchen Interior Image 7",
    description: "Premium cooking area with modern appliances and elegant finishes"
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
        HOME &gt; PROJECTS &gt; AL TAI SHARJAH KITCHEN FIT-OUT
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
            MODERN KITCHEN DESIGN EXCELLENCE:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            AL TAI SHARJAH KITCHEN INTERIOR DESIGN
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
                At Rady Interiors, we proudly present our Al Tai Sharjah Kitchen Interior Design project, crafted to combine functionality with modern luxury aesthetics.
              </p>
              <p>
                Our design approach focused on creating a highly efficient yet elegant kitchen space with premium materials, smart storage, and seamless workflow planning.
              </p>
              <p>
                Through our complete interior design and fit-out solutions, we transformed this kitchen into a stylish and practical heart of the home in Al Tai, Sharjah.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/05kitchen.jpg"
              alt="Luxury Al Tai Sharjah kitchen interior design"
              title="Al Tai Sharjah Kitchen Interior Design"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </figure>

        </div>
      </div>

      

      {/* Gallery Title */}
      <h2 className="text-white mt-10 mb-10 text-sm sm:text-xl tracking-widest font-conthrax text-center">
        AL TAI SHARJAH KITCHEN INTERIOR GALLERY
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