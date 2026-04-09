"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/ATRD (2).webp",
    alt: "Luxury Maryam Island apartment living room fit-out design",
    title: "Maryam Island Apartment Fit-Out Image 1",
    description: "Elegant living room with modern coastal luxury finishes"
  },
  {
    src: "/images/ATRD (4).webp",
    alt: "Modern Maryam Island apartment lounge interior Sharjah",
    title: "Maryam Island Apartment Fit-Out Image 2",
    description: "Sophisticated lounge with soft tones and premium furniture layout"
  },
  {
    src: "/images/ATRD (6).webp",
    alt: "Maryam Island apartment bedroom interior design",
    title: "Maryam Island Apartment Fit-Out Image 3",
    description: "Calming master bedroom with warm lighting and luxury finishes"
  },
  {
    src: "/images/ATRD (14).webp",
    alt: "Maryam Island apartment dining area fit-out design",
    title: "Maryam Island Apartment Fit-Out Image 4",
    description: "Modern dining space with elegant lighting and refined aesthetics"
  },
  {
    src: "/images/ATRD (15).webp",
    alt: "Luxury apartment kitchen Maryam Island interior design",
    title: "Maryam Island Apartment Fit-Out Image 5",
    description: "Contemporary kitchen with marble counters and custom cabinetry"
  },
  {
    src: "/images/ATRD (16).webp",
    alt: "Maryam Island apartment corridor interior design",
    title: "Maryam Island Apartment Fit-Out Image 6",
    description: "Minimal hallway design with seamless lighting integration"
  },
  {
    src: "/images/ATRD (17).webp",
    alt: "Modern apartment seating area Maryam Island Sharjah",
    title: "Maryam Island Apartment Fit-Out Image 7",
    description: "Stylish seating area with neutral tones and luxury detailing"
  },
  {
    src: "/images/ATRD (18).webp",
    alt: "Luxury bathroom Maryam Island apartment interior",
    title: "Maryam Island Apartment Fit-Out Image 8",
    description: "Spa-inspired bathroom with marble textures and premium fittings"
  },
  {
    src: "/images/ATRD (22).webp",
    alt: "Open plan apartment interior Maryam Island Sharjah",
    title: "Maryam Island Apartment Fit-Out Image 9",
    description: "Open-plan living design with seamless space flow"
  },
  {
    src: "/images/ATRD (23).webp",
    alt: "Modern apartment lounge Maryam Island fit-out",
    title: "Maryam Island Apartment Fit-Out Image 10",
    description: "Bright living area with contemporary furniture and natural light"
  },
  {
    src: "/images/ATRD (25).webp",
    alt: "High-end apartment fit-out Maryam Island Sharjah",
    title: "Maryam Island Apartment Fit-Out Image 11",
    description: "Premium finishes with bespoke craftsmanship and elegant detailing"
  },
  {
    src: "/images/ATRD (26).webp",
    alt: "Apartment bedroom design Maryam Island interior Sharjah",
    title: "Maryam Island Apartment Fit-Out Image 12",
    description: "Elegant bedroom with luxury wardrobe integration and soft lighting"
  },
  {
    src: "/images/ATRD (27).webp",
    alt: "Modern apartment lounge Maryam Island Sharjah interior",
    title: "Maryam Island Apartment Fit-Out Image 13",
    description: "Contemporary lounge with serene and minimal luxury design"
  },
  {
    src: "/images/ATRD (28).webp",
    alt: "Luxury apartment living room Maryam Island Sharjah",
    title: "Maryam Island Apartment Fit-Out Image 14",
    description: "Spacious living area with marble flooring and premium finishes"
  },
  {
    src: "/images/ATRD (29).webp",
    alt: "Maryam Island apartment interior design Sharjah luxury",
    title: "Maryam Island Apartment Fit-Out Image 15",
    description: "Signature apartment design blending comfort and modern elegance"
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
        HOME &gt; PROJECTS &gt; MARYAM ISLAND APARTMENT FIT-OUT
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
            CRAFTING MODERN LIVING SPACES:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            MARYAM ISLAND APARTMENT FIT-OUT
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
                At WE DO Interior Design & Fitout, we present our Maryam Island Apartment Fit-Out project, designed to reflect modern coastal living in one of Sharjah’s most exclusive waterfront communities.
              </p>
              <p>
                Our design approach focused on maximizing space efficiency while maintaining elegance, comfort, and a calm residential atmosphere inspired by island living.
              </p>
              <p>
                Through our complete apartment fit-out solutions, we transformed this residence into a stylish and functional home that blends luxury with everyday practicality.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/ATRD (28).webp"
              alt="Luxury Maryam Island apartment interior Sharjah"
              title="Maryam Island Apartment Fit-Out Design"
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
        MARYAM ISLAND APARTMENT FIT-OUT GALLERY
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