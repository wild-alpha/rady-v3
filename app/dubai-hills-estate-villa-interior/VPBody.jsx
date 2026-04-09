"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/01_Post (3)bbb.jpg",
    alt: "Luxury Dubai Hills Estate villa living room interior",
    title: "Dubai Hills Estate Villa Interior Image 1",
    description: "Elegant living room with natural tones, open layout, and modern luxury finishes"
  },
  {
    src: "/images/1_CShading_LightMix (5)(3)bbb.jpg",
    alt: "Modern Dubai Hills Estate villa lounge design",
    title: "Dubai Hills Estate Villa Interior Image 2",
    description: "Contemporary lounge with bespoke furniture and soft ambient lighting"
  },
  {
    src: "/images/1_CShading_LightMix (6)(3)bbb.jpg",
    alt: "Luxury villa bedroom Dubai Hills Estate",
    title: "Dubai Hills Estate Villa Interior Image 3",
    description: "Master bedroom designed with warm textures and minimalist luxury style"
  },
  {
    src: "/images/1_CShading_LightMix (9)(3)bbb.jpg",
    alt: "Dubai Hills Estate villa dining area interior",
    title: "Dubai Hills Estate Villa Interior Image 4",
    description: "Sophisticated dining space with designer lighting and premium finishes"
  },
  {
    src: "/images/02 (1)(3)bbb.jpg",
    alt: "High-end kitchen Dubai Hills Estate villa",
    title: "Dubai Hills Estate Villa Interior Image 5",
    description: "Modern kitchen with marble countertops, sleek cabinetry, and luxury detailing"
  },
  {
    src: "/images/2_CShading_LightMix (2)(3)bbb.jpg",
    alt: "Luxury hallway design Dubai Hills villa",
    title: "Dubai Hills Estate Villa Interior Image 6",
    description: "Minimalist hallway with ambient lighting and elegant architectural flow"
  },
  {
    src: "/images/2_CShading_LightMix (3)(3)bbb.jpg",
    alt: "Dubai Hills Estate villa living room decor",
    title: "Dubai Hills Estate Villa Interior Image 7",
    description: "Stylish seating area with soft neutral palette and modern aesthetics"
  },
  {
    src: "/images/3_CShading_LightMix (6)(3)bbb.jpg",
    alt: "Luxury bathroom interior Dubai Hills villa",
    title: "Dubai Hills Estate Villa Interior Image 8",
    description: "Spa-inspired bathroom with marble textures and premium gold fittings"
  },
  {
    src: "/images/04_Post (3)bbb(1).jpg",
    alt: "Modern villa interior Dubai Hills Estate Dubai",
    title: "Dubai Hills Estate Villa Interior Image 9",
    description: "Open-plan luxury living with seamless indoor-outdoor connection"
  },
  {
    src: "/images/(3)bbbding_LightMix (2).jpg",
    alt: "Dubai Hills Estate villa seating area",
    title: "Dubai Hills Estate Villa Interior Image 10",
    description: "Bright living space designed with comfort and modern elegance"
  },
  {
    src: "/images/05 (1)(3)bbb.jpg",
    alt: "Luxury villa interior Dubai Hills Estate",
    title: "Dubai Hills Estate Villa Interior Image 11",
    description: "Premium interior finishes with bespoke design detailing"
  },
  {
    src: "/images/0(3)bbb6_Post.jpg",
    alt: "Villa bedroom design Dubai Hills Estate Dubai",
    title: "Dubai Hills Estate Villa Interior Image 12",
    description: "Elegant bedroom with soft lighting and custom wardrobe design"
  },
  {
    src: "/images/6_CShadi(3)bbbng_LightMix (2).jpg",
    alt: "Luxury Dubai Hills Estate villa lounge",
    title: "Dubai Hills Estate Villa Interior Image 13",
    description: "Modern lounge with luxury seating and refined styling"
  },
  {
    src: "/images/7_CShad(3)bbbing_LightMix (2).jpg",
    alt: "Dubai Hills Estate luxury villa interior design",
    title: "Dubai Hills Estate Villa Interior Image 14",
    description: "Grand living space featuring marble flooring and gold accents"
  },
  {
    src: "/images/9_CSh(3)bbbading_LightMix.jpg",
    alt: "Modern luxury villa Dubai Hills Estate Dubai",
    title: "Dubai Hills Estate Villa Interior Image 15",
    description: "Signature Dubai Hills luxury villa interior with modern elegance"
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
        HOME &gt; PROJECTS &gt; DUBAI HILLS ESTATE VILLA
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
            DUBAI HILLS ESTATE VILLA INTERIOR
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
                At WE DO Interior Design & Fitout, we proudly present our Dubai Hills Estate Villa Interior project, a refined example of modern luxury living in one of Dubai’s most sought-after residential communities. This villa reflects elegance, comfort, and contemporary architectural excellence tailored for high-end lifestyle living.
              </p>
              <p>
                Our design team carefully developed each space of this Dubai Hills Estate villa with a focus on harmony, functionality, and premium aesthetics. From spacious living areas to custom-designed bedrooms and sophisticated dining spaces, every corner represents thoughtful luxury and precision detailing.
              </p>
              <p>
                Through our complete villa interior design and fit-out solutions, we transformed this residence into a timeless modern home. The use of natural materials, bespoke furniture, soft lighting, and elegant textures creates a warm yet luxurious environment that defines upscale living in Dubai Hills Estate.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/01_Post (3)bbb.jpg"
              alt="Luxury Dubai Hills Estate villa interior design Dubai"
              title="Dubai Hills Estate Villa Interior Design"
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
        DUBAI HILLS ESTATE VILLA INTERIOR GALLERY
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