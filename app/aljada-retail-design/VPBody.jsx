"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/ATRD (2).webp",
    alt: "Aljada retail store interior design Sharjah",
    title: "Aljada Retail Interior Image 1",
    description: "Modern retail store layout designed to enhance customer experience and product visibility"
  },
  {
    src: "/images/ATRD (4).webp",
    alt: "Retail display shelving Aljada Sharjah",
    title: "Aljada Retail Interior Image 2",
    description: "Custom retail shelving and display units with sleek contemporary design"
  },
  {
    src: "/images/ATRD (6).webp",
    alt: "Luxury retail shop interior Aljada",
    title: "Aljada Retail Interior Image 3",
    description: "High-end retail space with premium finishes and modern lighting"
  },
  {
    src: "/images/ATRD (14).webp",
    alt: "Aljada retail store lighting design",
    title: "Aljada Retail Interior Image 4",
    description: "Strategic lighting design to highlight products and enhance ambiance"
  },
  {
    src: "/images/ATRD (15).webp",
    alt: "Retail checkout counter Aljada Sharjah",
    title: "Aljada Retail Interior Image 5",
    description: "Stylish checkout counter designed for efficiency and customer convenience"
  },
  {
    src: "/images/ATRD (16).webp",
    alt: "Modern retail layout Aljada Sharjah",
    title: "Aljada Retail Interior Image 6",
    description: "Open retail layout maximizing space flow and customer movement"
  },
  {
    src: "/images/ATRD (17).webp",
    alt: "Retail branding interior Aljada design",
    title: "Aljada Retail Interior Image 7",
    description: "Interior design aligned with brand identity and visual merchandising"
  },
  {
    src: "/images/ATRD (18).webp",
    alt: "Luxury retail flooring Aljada Sharjah",
    title: "Aljada Retail Interior Image 8",
    description: "Premium flooring finishes adding elegance to retail environment"
  },
  {
    src: "/images/ATRD (22).webp",
    alt: "Retail shop interior Aljada modern design",
    title: "Aljada Retail Interior Image 9",
    description: "Contemporary retail design with clean lines and modern aesthetics"
  },
  {
    src: "/images/ATRD (23).webp",
    alt: "Aljada Sharjah boutique interior design",
    title: "Aljada Retail Interior Image 10",
    description: "Boutique-style retail space with curated display and lighting"
  },
  {
    src: "/images/ATRD (25).webp",
    alt: "High-end retail interior Aljada Sharjah",
    title: "Aljada Retail Interior Image 11",
    description: "Sophisticated retail environment designed for premium brands"
  },
  {
    src: "/images/ATRD (26).webp",
    alt: "Retail shop design Aljada Sharjah UAE",
    title: "Aljada Retail Interior Image 12",
    description: "Elegant retail store with optimized product placement strategy"
  },
  {
    src: "/images/ATRD (27).webp",
    alt: "Modern retail concept Aljada Sharjah",
    title: "Aljada Retail Interior Image 13",
    description: "Innovative retail concept blending aesthetics with functionality"
  },
  {
    src: "/images/ATRD (28).webp",
    alt: "Luxury retail interior Aljada Sharjah",
    title: "Aljada Retail Interior Image 14",
    description: "Spacious retail design with high-end materials and finishes"
  },
  {
    src: "/images/ATRD (29).webp",
    alt: "Signature retail interior design Aljada",
    title: "Aljada Retail Interior Image 15",
    description: "Signature retail interior reflecting brand identity and customer engagement"
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
        HOME &gt; PROJECTS &gt; ALJADA RETAIL INTERIOR DESIGN
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
            RETAIL DESIGN THAT DRIVES EXPERIENCE:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            ALJADA RETAIL INTERIOR DESIGN
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
                At Rady Interiors, we proudly present our Aljada Retail Interior Design project, created to deliver a modern and engaging shopping experience.
              </p>
              <p>
                Our design approach focused on optimizing retail space through smart layouts, strategic lighting, and visually appealing product displays that attract and retain customers.
              </p>
              <p>
                Through our complete retail interior design and fit-out solutions, we transformed this store into a high-performing commercial space that reflects brand identity and enhances customer interaction.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/ATRD (28).webp"
              alt="Aljada retail interior design Sharjah"
              title="Aljada Retail Interior Design"
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
        ALJADA RETAIL INTERIOR GALLERY
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