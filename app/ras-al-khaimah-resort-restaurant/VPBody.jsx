"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const galleryImages = [
  {
    src: "/images/01-restaurant.png",
    alt: "Luxury Ras Al Khaimah resort restaurant interior dining area",
    title: "Ras Al Khaimah Resort Restaurant Interior Image 1",
    description: "Elegant dining space with luxury resort ambiance and warm lighting"
  },
  {
    src: "/images/03restaurants.png",
    alt: "Modern resort restaurant lounge Ras Al Khaimah",
    title: "Ras Al Khaimah Resort Restaurant Interior Image 2",
    description: "Sophisticated lounge seating with premium hospitality design"
  },
  {
    src: "/images/05restaurantss.png",
    alt: "Fine dining restaurant interior Ras Al Khaimah resort",
    title: "Ras Al Khaimah Resort Restaurant Interior Image 3",
    description: "Luxury fine dining setup with elegant decor and soft ambient lighting"
  },
  {
    src: "/images/restaurant-counter-design.png",
    alt: "Resort restaurant bar design Ras Al Khaimah",
    title: "Ras Al Khaimah Resort Restaurant Interior Image 4",
    description: "Stylish bar area with modern resort aesthetic and premium finishes"
  },
  {
    src: "/images/restaurant-interiors-dubai.png",
    alt: "High-end resort kitchen restaurant Ras Al Khaimah",
    title: "Ras Al Khaimah Resort Restaurant Interior Image 5",
    description: "Professional kitchen design with functionality and luxury integration"
  },
  {
    src: "/images/restaurant-interior-wall.png",
    alt: "Resort restaurant hallway Ras Al Khaimah interior",
    title: "Ras Al Khaimah Resort Restaurant Interior Image 6",
    description: "Elegant corridor with warm lighting and hospitality flow design"
  },
  {
    src: "/images/restaurant-design-dubai.png",
    alt: "Luxury restaurant seating area Ras Al Khaimah resort",
    title: "Ras Al Khaimah Resort Restaurant Interior Image 7",
    description: "Comfortable dining seating with modern luxury interior styling"
  },
  {
    src: "/images/restaurant-in-dubai.png",
    alt: "Resort restaurant bathroom design Ras Al Khaimah",
    title: "Ras Al Khaimah Resort Restaurant Interior Image 8",
    description: "Premium restroom design with marble finishes and elegant lighting"
  },
  {
    src: "/images/restaurant-interior-service.png",
    alt: "Modern resort restaurant interior Ras Al Khaimah",
    title: "Ras Al Khaimah Resort Restaurant Interior Image 9",
    description: "Open dining concept with seamless indoor luxury resort feel"
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
        HOME &gt; PROJECTS &gt; RAS AL KHAIMAH RESORT RESTAURANT
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
            TRANSFORMING HOSPITALITY SPACES:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            RAS AL KHAIMAH RESORT RESTAURANT
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
                At Rady Interiors, we proudly present our Ras Al Khaimah Resort Restaurant Interior Design project, crafted to deliver a world-class dining experience within a luxury resort environment.
              </p>
              <p>
                Our design approach focused on blending hospitality elegance with functional restaurant flow, ensuring comfort, luxury, and visual appeal for guests.
              </p>
              <p>
                Through our complete restaurant interior fit-out solutions, we created a refined dining destination that enhances guest experience while reflecting modern resort luxury in Ras Al Khaimah.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/restaurant-interior-service.png"
              alt="Luxury Ras Al Khaimah resort restaurant interior"
              title="Ras Al Khaimah Resort Restaurant Interior Design"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </figure>

        </div>
      </div>

     
      {/* Gallery Title */}
      <h2 className="text-white mt-10 mb-10 text-sm sm:text-xl tracking-widest font-conthrax text-center">
        RAS AL KHAIMAH RESORT RESTAURANT INTERIOR GALLERY
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