"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/01 (1)aaa.jpg",
    alt: "Luxury District One MBR villa living room interior",
    title: "District One MBR Villa Interior Image 1",
    description: "Elegant living room with crystal lighting and marble finishes"
  },
  {
    src: "/images/01 (2)aaa.jpg",
    alt: "Modern villa lounge District One MBR Dubai",
    title: "District One MBR Villa Interior Image 2",
    description: "Sophisticated lounge with bespoke furniture and soft tones"
  },
  {
    src: "/images/01 (3)aaa.jpg",
    alt: "Luxury master bedroom District One MBR villa",
    title: "District One MBR Villa Interior Image 3",
    description: "Master bedroom with premium textures and warm lighting"
  },
  {
    src: "/images/02 (1)aaa.jpg",
    alt: "Villa dining room interior District One MBR",
    title: "District One MBR Villa Interior Image 4",
    description: "Elegant dining space with designer chandelier"
  },
  {
    src: "/images/02 (2)aaa.jpg",
    alt: "Luxury kitchen District One MBR villa",
    title: "District One MBR Villa Interior Image 5",
    description: "Modern kitchen with marble island and high-end cabinetry"
  },
  {
    src: "/images/03 (1)aaa.jpg",
    alt: "Villa corridor design District One MBR Dubai",
    title: "District One MBR Villa Interior Image 6",
    description: "Minimal corridor with ambient lighting and luxury finishes"
  },
  {
    src: "/images/03 (2)aaa.jpg",
    alt: "Luxury villa seating area District One MBR",
    title: "District One MBR Villa Interior Image 7",
    description: "Contemporary seating space with elegant décor"
  },
  {
    src: "/images/03 (3)aaa.jpg",
    alt: "Luxury bathroom District One MBR villa interior",
    title: "District One MBR Villa Interior Image 8",
    description: "Spa-style bathroom with marble and gold accents"
  },
  {
    src: "/images/04 (1)aaa.jpg",
    alt: "Modern villa interior District One MBR Dubai",
    title: "District One MBR Villa Interior Image 9",
    description: "Open-plan luxury interior with seamless flow design"
  },
  {
    src: "/images/05 (1)aaa.jpg",
    alt: "Villa living space District One MBR",
    title: "District One MBR Villa Interior Image 10",
    description: "Bright living area with custom interior styling"
  },
  {
    src: "/images/05 (2)aaa.jpg",
    alt: "High-end villa design District One MBR Dubai",
    title: "District One MBR Villa Interior Image 11",
    description: "Premium finishes with modern luxury detailing"
  },
  {
    src: "/images/05 (3)aaa.jpg",
    alt: "Villa bedroom interior District One MBR",
    title: "District One MBR Villa Interior Image 12",
    description: "Elegant bedroom with bespoke wardrobes and soft lighting"
  },
  {
    src: "/images/06 (1)aaa.jpg",
    alt: "Luxury villa lounge District One MBR Dubai",
    title: "District One MBR Villa Interior Image 13",
    description: "Stylish lounge with warm modern aesthetics"
  },
  {
    src: "/images/06 (2)aaa.jpg",
    alt: "District One MBR luxury villa interior design",
    title: "District One MBR Villa Interior Image 14",
    description: "Grand villa interior with marble flooring and gold accents"
  },
  {
    src: "/images/07 (1).jpg",
    alt: "Dubai luxury villa District One MBR interior",
    title: "District One MBR Villa Interior Image 15",
    description: "Signature luxury villa design in Mohammed Bin Rashid City"
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
        HOME &gt; PROJECTS &gt; DISTRICT ONE MBR VILLA
      </p>

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
            DISTRICT ONE MBR VILLA INTERIOR
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
                At Rady Interior Design & Fitout, we proudly present our District One MBR Villa Interior project, a refined expression of modern luxury living in Mohammed Bin Rashid City, Dubai. This villa reflects elegance, exclusivity, and contemporary architectural excellence.
              </p>
              <p>
                Our design approach focused on creating open, airy, and luxurious spaces that enhance natural light and spatial flow. From grand living rooms to bespoke bedrooms, every corner of this District One villa showcases precision, detail, and high-end craftsmanship.
              </p>
              <p>
                With our complete villa interior design and fit-out solutions, we transformed this residence into a fully customized luxury home. Using premium marble, custom furniture, and elegant lighting design, we delivered a space that represents the true lifestyle of District One MBR.
              </p>
            </div>
          </div>

          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/01 (1)aaa.jpg"
              alt="Luxury District One MBR villa interior Dubai"
              title="District One MBR Villa Interior Design"
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
          DISTRICT ONE MBR VILLA INTERIOR GALLERY
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