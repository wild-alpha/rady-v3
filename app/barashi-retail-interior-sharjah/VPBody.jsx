"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/ATRD (2).webp",
    alt: "Luxury Barashi retail interior showroom Sharjah",
    title: "Barashi Retail Interior Image 1",
    description: "Elegant retail showroom design with modern luxury display layout"
  },
  {
    src: "/images/ATRD (4).webp",
    alt: "Modern retail store design Barashi Sharjah",
    title: "Barashi Retail Interior Image 2",
    description: "Contemporary retail space with premium lighting and product display"
  },
  {
    src: "/images/ATRD (6).webp",
    alt: "High-end retail interior Barashi Sharjah shop design",
    title: "Barashi Retail Interior Image 3",
    description: "Luxury retail environment with custom shelving and elegant finishes"
  },
  {
    src: "/images/ATRD (14).webp",
    alt: "Retail showroom display area Barashi Sharjah",
    title: "Barashi Retail Interior Image 4",
    description: "Stylish product display zone with modern interior aesthetics"
  },
  {
    src: "/images/ATRD (15).webp",
    alt: "Premium retail shop interior design Sharjah Barashi",
    title: "Barashi Retail Interior Image 5",
    description: "Functional retail layout with high-end material selection"
  },
  {
    src: "/images/ATRD (16).webp",
    alt: "Retail corridor design Barashi Sharjah showroom",
    title: "Barashi Retail Interior Image 6",
    description: "Clean and modern circulation space for customer experience"
  },
  {
    src: "/images/ATRD (17).webp",
    alt: "Luxury retail interior shelving Barashi Sharjah",
    title: "Barashi Retail Interior Image 7",
    description: "Minimalist shelving design with premium retail presentation"
  },
  {
    src: "/images/ATRD (18).webp",
    alt: "Retail store lighting design Barashi Sharjah interior",
    title: "Barashi Retail Interior Image 8",
    description: "Accent lighting enhancing product visibility and store ambiance"
  },
  {
    src: "/images/ATRD (22).webp",
    alt: "Modern retail showroom Barashi Sharjah interior design",
    title: "Barashi Retail Interior Image 9",
    description: "Open-plan retail space with luxury modern interior flow"
  },
  {
    src: "/images/ATRD (23).webp",
    alt: "Retail boutique interior Barashi Sharjah design",
    title: "Barashi Retail Interior Image 10",
    description: "Elegant boutique-style retail layout with refined finishes"
  },
  {
    src: "/images/ATRD (25).webp",
    alt: "High-end retail showroom Sharjah Barashi interior",
    title: "Barashi Retail Interior Image 11",
    description: "Premium retail environment with bespoke interior detailing"
  },
  {
    src: "/images/ATRD (26).webp",
    alt: "Luxury shop interior design Barashi Sharjah",
    title: "Barashi Retail Interior Image 12",
    description: "Sophisticated retail space with modern branding integration"
  },
  {
    src: "/images/ATRD (27).webp",
    alt: "Modern retail display area Barashi Sharjah shop",
    title: "Barashi Retail Interior Image 13",
    description: "Stylish display zones designed for customer engagement"
  },
  {
    src: "/images/ATRD (28).webp",
    alt: "Barashi Sharjah retail interior luxury design",
    title: "Barashi Retail Interior Image 14",
    description: "Grand retail layout with marble and premium finishes"
  },
  {
    src: "/images/ATRD (29).webp",
    alt: "Modern luxury retail store Barashi Sharjah interior",
    title: "Barashi Retail Interior Image 15",
    description: "Signature retail interior blending luxury and functionality"
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
        HOME &gt; PROJECTS &gt; BARASHI RETAIL INTERIOR SHARJAH
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
            CRAFTING PREMIUM RETAIL SPACES:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            BARASHI RETAIL INTERIOR SHARJAH
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
                At Rady Interiors, we proudly present our Barashi Retail Interior Design project in Sharjah, created to deliver a premium shopping experience with modern elegance.
              </p>
              <p>
                Our design approach focused on optimizing retail flow, enhancing product visibility, and creating a visually engaging customer journey through the space.
              </p>
              <p>
                Through our complete retail interior fit-out solutions, we transformed this store into a high-end retail destination that reflects brand identity and modern luxury in Barashi, Sharjah.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/ATRD (28).webp"
              alt="Luxury Barashi retail interior Sharjah"
              title="Barashi Retail Interior Design Sharjah"
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
        BARASHI RETAIL INTERIOR DESIGN GALLERY
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