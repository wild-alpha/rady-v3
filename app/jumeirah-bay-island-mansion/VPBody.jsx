"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/ATRD (2).webp",
    alt: "Luxury Jumeirah Bay Island mansion living room interior",
    title: "Jumeirah Bay Island Mansion Interior Image 1",
    description: "Ultra-luxury living room with panoramic views and marble finishes"
  },
  {
    src: "/images/ATRD (4).webp",
    alt: "Modern mansion lounge Jumeirah Bay Island",
    title: "Jumeirah Bay Island Mansion Interior Image 2",
    description: "Elegant lounge space with bespoke furniture and premium textures"
  },
  {
    src: "/images/ATRD (6).webp",
    alt: "Luxury mansion bedroom Jumeirah Bay Island Dubai",
    title: "Jumeirah Bay Island Mansion Interior Image 3",
    description: "Master bedroom designed with soft luxury and high-end detailing"
  },
  {
    src: "/images/ATRD (14).webp",
    alt: "Mansion dining area interior Jumeirah Bay Island",
    title: "Jumeirah Bay Island Mansion Interior Image 4",
    description: "Grand dining space with designer lighting and elegant finishes"
  },
  {
    src: "/images/ATRD (15).webp",
    alt: "Luxury mansion kitchen interior Dubai",
    title: "Jumeirah Bay Island Mansion Interior Image 5",
    description: "Modern gourmet kitchen with marble island and luxury cabinetry"
  },
  {
    src: "/images/ATRD (16).webp",
    alt: "Mansion corridor interior design Jumeirah Bay Island",
    title: "Jumeirah Bay Island Mansion Interior Image 6",
    description: "Minimalist corridor with ambient lighting and luxury materials"
  },
  {
    src: "/images/ATRD (17).webp",
    alt: "Luxury mansion living area Jumeirah Bay Island",
    title: "Jumeirah Bay Island Mansion Interior Image 7",
    description: "Contemporary seating area with warm neutral tones"
  },
  {
    src: "/images/ATRD (18).webp",
    alt: "Luxury spa bathroom mansion Jumeirah Bay Island",
    title: "Jumeirah Bay Island Mansion Interior Image 8",
    description: "Spa-inspired bathroom with marble, gold accents, and elegance"
  },
  {
    src: "/images/ATRD (22).webp",
    alt: "Modern mansion interior Jumeirah Bay Island Dubai",
    title: "Jumeirah Bay Island Mansion Interior Image 9",
    description: "Open-plan ultra-luxury interior with seamless design flow"
  },
  {
    src: "/images/ATRD (23).webp",
    alt: "Mansion lounge seating Jumeirah Bay Island",
    title: "Jumeirah Bay Island Mansion Interior Image 10",
    description: "Bright and spacious lounge with custom interior styling"
  },
  {
    src: "/images/ATRD (25).webp",
    alt: "High-end mansion interior design Dubai",
    title: "Jumeirah Bay Island Mansion Interior Image 11",
    description: "Luxury finishes with contemporary architectural detailing"
  },
  {
    src: "/images/ATRD (26).webp",
    alt: "Mansion bedroom interior Jumeirah Bay Island",
    title: "Jumeirah Bay Island Mansion Interior Image 12",
    description: "Elegant bedroom with bespoke wardrobes and soft lighting"
  },
  {
    src: "/images/ATRD (27).webp",
    alt: "Luxury mansion lounge Dubai waterfront",
    title: "Jumeirah Bay Island Mansion Interior Image 13",
    description: "Stylish lounge with premium comfort and aesthetic design"
  },
  {
    src: "/images/ATRD (28).webp",
    alt: "Jumeirah Bay Island ultra luxury mansion interior",
    title: "Jumeirah Bay Island Mansion Interior Image 14",
    description: "Grand luxury interiors with marble flooring and designer accents"
  },
  {
    src: "/images/ATRD (29).webp",
    alt: "Dubai luxury mansion interior design Jumeirah Bay Island",
    title: "Jumeirah Bay Island Mansion Interior Image 15",
    description: "Signature ultra-luxury mansion design reflecting waterfront lifestyle"
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

      <p className="text-xs text-[#f0c95a] uppercase tracking-widest mb-4 font-conthrax">
        HOME &gt; PROJECTS &gt; JUMEIRAH BAY ISLAND MANSION
      </p>

      <div className="relative pl-4 sm:pl-6 mb-20">

        <div className="absolute top-0 left-0 h-full w-[1px] bg-gray-400 z-0 hidden lg:block" />
        <motion.div
          className="absolute left-[-4px] top-[104px] w-2 h-2 rounded-full bg-[#d4af37] z-10 hidden lg:block"
          style={{ y: dotY }}
        />

        <div className="mb-6">
          <p className="text-xs sm:text-base font-conthrax tracking-wide uppercase text-white">
            TRANSFORMING LUXURY MANSIONS:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            JUMEIRAH BAY ISLAND MANSION INTERIOR
          </h1>
          <div className="w-30 sm:w-96 h-[2px] bg-[#d4af37] mt-2" />
        </div>

        <div className="flex flex-col lg:flex-row gap-10">

          <div className="w-full lg:w-1/2">
            <div
              ref={scrollRef}
              className="max-h-[360px] overflow-y-auto scroll-smooth text-sm leading-6 text-white/90 space-y-4 pr-2 font-play"
              style={{ scrollbarWidth: "none" }}
            >
              <p>
                At Rady Interior Design & Fitout, we proudly present our Jumeirah Bay Island Mansion Interior project, an icon of ultra-luxury waterfront living in Dubai. Located on one of the most exclusive island communities, this mansion represents the highest level of sophistication, privacy, and architectural excellence.
              </p>
              <p>
                Our design team carefully curated every detail of this mansion interior, blending modern elegance with timeless luxury. From expansive double-height living spaces to bespoke bedrooms and grand entertainment areas, every corner reflects precision and artistry in villa and mansion interior design in Dubai.
              </p>
              <p>
                With our complete design and fit-out solutions, we transformed this mansion into a fully customized luxury masterpiece. Premium marble, bespoke furniture, statement lighting, and refined textures were used to create an extraordinary living experience that defines elite island lifestyle.
              </p>
            </div>
          </div>

          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/ATRD (28).webp"
              alt="Ultra luxury Jumeirah Bay Island mansion interior Dubai"
              title="Jumeirah Bay Island Mansion Interior Design"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </figure>

        </div>
      </div>

      <div className="mt-10">

        <div className="mt-10 flex justify-center">
          <Image
            src="/images/sec-dvd.webp"
            alt="Scroll down arrow"
            width={320}
            height={80}
            className="h-auto w-48 sm:w-64"
          />
        </div>

        <h2 className="text-white mt-10 mb-10 text-sm sm:text-xl tracking-widest font-conthrax text-center">
          JUMEIRAH BAY ISLAND MANSION INTERIOR GALLERY
        </h2>

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
      </div>

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