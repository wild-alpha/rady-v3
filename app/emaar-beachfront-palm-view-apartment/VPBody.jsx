"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  
  {
    src: "/images/2acdf.jpg",
    alt: "Luxury Emaar Beachfront Palm View apartment living room interior",
    title: "Emaar Beachfront Palm View Apartment Interior Image 1",
    description: "Elegant living room with panoramic sea and Palm views with modern luxury finishes"
  },
  {
    src: "/images/2-2acdf.jpg",
    alt: "Modern Emaar Beachfront Palm View apartment lounge design",
    title: "Emaar Beachfront Palm View Apartment Interior Image 2",
    description: "Sophisticated lounge with bespoke furniture and full-height glass waterfront views"
  },
  {
    src: "/images/3 (5)acdf.jpg",
    alt: "Luxury apartment bedroom Emaar Beachfront Dubai",
    title: "Emaar Beachfront Palm View Apartment Interior Image 3",
    description: "Master bedroom designed with calming tones and uninterrupted sea view aesthetics"
  },
  {
    src: "/images/3 (7)acdf.jpg",
    alt: "Emaar Beachfront apartment dining area interior",
    title: "Emaar Beachfront Palm View Apartment Interior Image 4",
    description: "Elegant dining space with modern lighting and refined contemporary styling"
  },
  {
    src: "/images/3acdf.jpg",
    alt: "High-end kitchen Emaar Beachfront apartment",
    title: "Emaar Beachfront Palm View Apartment Interior Image 5",
    description: "Contemporary kitchen with marble countertops and premium built-in cabinetry"
  },
  {
    src: "/images/3_Cacdf (6).jpg",
    alt: "Luxury hallway design Emaar Beachfront apartment",
    title: "Emaar Beachfront Palm View Apartment Interior Image 6",
    description: "Minimalist hallway with warm lighting and seamless architectural flow"
  },
  {
    src: "/images/3_acdf.jpg",
    alt: "Luxury Emaar Beachfront apartment interior detail",
    title: "Emaar Beachfront Palm View Apartment Interior Image 7",
    description: "Detailed interior finish showcasing high-end craftsmanship"
  },
  {
    src: "/images/acdf(8).jpg",
    alt: "Modern Dubai apartment interior view",
    title: "Emaar Beachfront Palm View Apartment Interior Image 8",
    description: "Modern design elements integrated with urban luxury"
  },
  {
    src: "/images/4acdf.jpg",
    alt: "Premium apartment living space design",
    title: "Emaar Beachfront Palm View Apartment Interior Image 9",
    description: "Open-plan living space designed for maximum natural light"
  },
  {
    src: "/images/acdf.jpg",
    alt: "Luxury apartment architectural detail",
    title: "Emaar Beachfront Palm View Apartment Interior Image 10",
    description: "Sleek architectural lines and modern interior finishes"
  },
  {
    src: "/images/5acdf.jpg",
    alt: "Contemporary Emaar Beachfront apartment lounge",
    title: "Emaar Beachfront Palm View Apartment Interior Image 11",
    description: "Stylish lounge area with high-end furniture and panoramic views"
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
        HOME &gt; PROJECTS &gt; EMAAR BEACHFRONT PALM VIEW APARTMENT
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
            TRANSFORMING WATERFRONT LIVING:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            EMAAR BEACHFRONT PALM VIEW APARTMENT INTERIOR
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
                At Rady Interior, we proudly present our Emaar Beachfront Palm View Apartment Interior project, designed for luxury waterfront living in one of Dubai’s most iconic coastal destinations.
              </p>
              <p>
                Our design approach focuses on maximizing sea views, natural light, and open-plan living. Every space is carefully crafted with premium materials, bespoke furniture, and elegant lighting to reflect a modern beachfront lifestyle.
              </p>
              <p>
                Through our complete apartment interior design and fit-out solutions, we transformed this residence into a refined luxury home that blends comfort, functionality, and timeless elegance with uninterrupted Palm and marina views.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/3acdf.jpg"
              alt="Luxury Emaar Beachfront Palm View apartment interior Dubai"
              title="Emaar Beachfront Palm View Apartment Interior Design"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </figure>

        </div>
      </div>

     

      {/* Gallery Title */}
      <h2 className="text-white mt-10 mb-10 text-sm sm:text-xl tracking-widest font-conthrax text-center">
        EMAAR BEACHFRONT PALM VIEW APARTMENT INTERIOR GALLERY
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