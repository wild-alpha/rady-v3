"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/ATRD (2).webp",
    alt: "Luxury Umm Suqeim villa living room interior design",
    title: "Umm Suqeim Villa Interior Image 1",
    description: "Elegant living room with modern luxury finishes and soft natural lighting"
  },
  {
    src: "/images/ATRD (4).webp",
    alt: "Modern Umm Suqeim villa lounge design Dubai",
    title: "Umm Suqeim Villa Interior Image 2",
    description: "Sophisticated lounge space with bespoke furniture and warm tones"
  },
  {
    src: "/images/ATRD (6).webp",
    alt: "Luxury Umm Suqeim villa bedroom interior design",
    title: "Umm Suqeim Villa Interior Image 3",
    description: "Calming master bedroom designed with premium materials and soft ambiance"
  },
  {
    src: "/images/ATRD (14).webp",
    alt: "Umm Suqeim villa dining area luxury design",
    title: "Umm Suqeim Villa Interior Image 4",
    description: "Elegant dining area with chandelier lighting and refined aesthetics"
  },
  {
    src: "/images/ATRD (15).webp",
    alt: "Modern Umm Suqeim villa kitchen interior design",
    title: "Umm Suqeim Villa Interior Image 5",
    description: "Contemporary kitchen with marble finishes and premium cabinetry"
  },
  {
    src: "/images/ATRD (16).webp",
    alt: "Luxury hallway Umm Suqeim villa interior design",
    title: "Umm Suqeim Villa Interior Image 6",
    description: "Minimalist hallway with warm lighting and elegant architectural flow"
  },
  {
    src: "/images/ATRD (17).webp",
    alt: "Umm Suqeim villa family seating area interior",
    title: "Umm Suqeim Villa Interior Image 7",
    description: "Comfortable family lounge with modern luxury interior styling"
  },
  {
    src: "/images/ATRD (18).webp",
    alt: "Luxury bathroom Umm Suqeim villa interior design",
    title: "Umm Suqeim Villa Interior Image 8",
    description: "Spa-inspired bathroom with marble textures and gold accents"
  },
  {
    src: "/images/ATRD (22).webp",
    alt: "Open plan Umm Suqeim villa interior design Dubai",
    title: "Umm Suqeim Villa Interior Image 9",
    description: "Seamless open-plan living connecting indoor and outdoor spaces"
  },
  {
    src: "/images/ATRD (23).webp",
    alt: "Modern Umm Suqeim villa living room design",
    title: "Umm Suqeim Villa Interior Image 10",
    description: "Bright and airy living space with custom furniture and neutral tones"
  },
  {
    src: "/images/ATRD (25).webp",
    alt: "Luxury Umm Suqeim villa interior detailing",
    title: "Umm Suqeim Villa Interior Image 11",
    description: "High-end finishes with bespoke craftsmanship and modern elegance"
  },
  {
    src: "/images/ATRD (26).webp",
    alt: "Elegant Umm Suqeim villa bedroom design Dubai",
    title: "Umm Suqeim Villa Interior Image 12",
    description: "Stylish bedroom with soft lighting and luxury wardrobe integration"
  },
  {
    src: "/images/ATRD (27).webp",
    alt: "Luxury Umm Suqeim villa lounge interior",
    title: "Umm Suqeim Villa Interior Image 13",
    description: "Modern lounge with sophisticated design and calm aesthetics"
  },
  {
    src: "/images/ATRD (28).webp",
    alt: "Premium Umm Suqeim villa interior Dubai design",
    title: "Umm Suqeim Villa Interior Image 14",
    description: "Grand living space with marble flooring and luxury detailing"
  },
  {
    src: "/images/ATRD (29).webp",
    alt: "Signature Umm Suqeim villa interior design Dubai",
    title: "Umm Suqeim Villa Interior Image 15",
    description: "Signature villa design blending modern luxury with coastal elegance"
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
        HOME &gt; PROJECTS &gt; UMM SUQEIM VILLA INTERIOR DESIGN
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
            LUXURY VILLA INTERIOR DESIGN:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            UMM SUQEIM VILLA INTERIOR DESIGN
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
                At Rady Interiors, we proudly present our Umm Suqeim Villa Interior Design project, crafted for luxury beachfront-inspired living in one of Dubai’s most prestigious residential areas.
              </p>
              <p>
                Our design approach focused on blending modern elegance with warm, coastal-inspired tones to create a serene and luxurious home environment.
              </p>
              <p>
                Through our full interior design and fit-out solutions, we transformed this villa into a timeless luxury residence that reflects comfort, sophistication, and premium lifestyle living.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/ATRD (28).webp"
              alt="Luxury Umm Suqeim villa interior design Dubai"
              title="Umm Suqeim Villa Interior Design"
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
        UMM SUQEIM VILLA INTERIOR GALLERY
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