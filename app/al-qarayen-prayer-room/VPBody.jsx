"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/ATRD (2).webp",
    alt: "Elegant Al Qarayen prayer room interior design Sharjah",
    title: "Al Qarayen Prayer Room Interior Image 1",
    description: "Peaceful prayer space with spiritual ambiance and soft lighting"
  },
  {
    src: "/images/ATRD (4).webp",
    alt: "Modern mosque-style prayer room Al Qarayen Sharjah",
    title: "Al Qarayen Prayer Room Interior Image 2",
    description: "Minimalist prayer hall with clean architecture and calm aesthetics"
  },
  {
    src: "/images/ATRD (6).webp",
    alt: "Luxury prayer room interior Al Qarayen Sharjah design",
    title: "Al Qarayen Prayer Room Interior Image 3",
    description: "Serene prayer space with elegant detailing and warm tones"
  },
  {
    src: "/images/ATRD (14).webp",
    alt: "Community prayer room interior Al Qarayen Sharjah",
    title: "Al Qarayen Prayer Room Interior Image 4",
    description: "Spacious prayer hall designed for community worship and comfort"
  },
  {
    src: "/images/ATRD (15).webp",
    alt: "High-end prayer room mihrab design Al Qarayen",
    title: "Al Qarayen Prayer Room Interior Image 5",
    description: "Beautifully designed mihrab with traditional Islamic patterns"
  },
  {
    src: "/images/ATRD (16).webp",
    alt: "Prayer room corridor design Al Qarayen Sharjah interior",
    title: "Al Qarayen Prayer Room Interior Image 6",
    description: "Calm circulation space leading to main prayer hall"
  },
  {
    src: "/images/ATRD (17).webp",
    alt: "Modern Islamic prayer room carpet layout Al Qarayen",
    title: "Al Qarayen Prayer Room Interior Image 7",
    description: "Organized prayer carpet layout with perfect alignment and harmony"
  },
  {
    src: "/images/ATRD (18).webp",
    alt: "Luxury ablution and prayer area Al Qarayen interior",
    title: "Al Qarayen Prayer Room Interior Image 8",
    description: "Clean and elegant ablution space with premium finishes"
  },
  {
    src: "/images/ATRD (22).webp",
    alt: "Open prayer hall design Al Qarayen Sharjah mosque interior",
    title: "Al Qarayen Prayer Room Interior Image 9",
    description: "Wide open prayer hall with peaceful spiritual environment"
  },
  {
    src: "/images/ATRD (23).webp",
    alt: "Modern Islamic interior prayer space Al Qarayen",
    title: "Al Qarayen Prayer Room Interior Image 10",
    description: "Balanced interior combining tradition and modern design elements"
  },
  {
    src: "/images/ATRD (25).webp",
    alt: "Luxury prayer room ceiling design Al Qarayen Sharjah",
    title: "Al Qarayen Prayer Room Interior Image 11",
    description: "Decorative ceiling design with subtle Islamic geometric patterns"
  },
  {
    src: "/images/ATRD (26).webp",
    alt: "Private prayer room interior Al Qarayen Sharjah design",
    title: "Al Qarayen Prayer Room Interior Image 12",
    description: "Peaceful private prayer corner with soft lighting ambiance"
  },
  {
    src: "/images/ATRD (27).webp",
    alt: "Modern mosque interior prayer hall Al Qarayen",
    title: "Al Qarayen Prayer Room Interior Image 13",
    description: "Elegant prayer hall with modern Islamic architectural design"
  },
  {
    src: "/images/ATRD (28).webp",
    alt: "Grand prayer room interior Al Qarayen Sharjah",
    title: "Al Qarayen Prayer Room Interior Image 14",
    description: "Spiritual grand hall with marble finishes and calm atmosphere"
  },
  {
    src: "/images/ATRD (29).webp",
    alt: "Contemporary prayer room design Al Qarayen Sharjah",
    title: "Al Qarayen Prayer Room Interior Image 15",
    description: "Modern prayer space blending tradition with minimalist design"
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
        HOME &gt; PROJECTS &gt; AL QARAYEN PRAYER ROOM INTERIOR
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
            DESIGNING SPIRITUAL SPACES:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            AL QARAYEN PRAYER ROOM INTERIOR DESIGN
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
                At Rady Interiors, we proudly present our Al Qarayen Prayer Room Interior Design project in Sharjah, created to deliver a peaceful and spiritually uplifting environment.
              </p>
              <p>
                Our design approach focused on simplicity, serenity, and Islamic architectural harmony, ensuring a calm and distraction-free worship space.
              </p>
              <p>
                Through our complete prayer room interior solutions, we created a sacred environment that blends traditional values with modern design elegance in Al Qarayen.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/ATRD (28).webp"
              alt="Luxury Al Qarayen prayer room interior Sharjah"
              title="Al Qarayen Prayer Room Interior Design"
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
        AL QARAYEN PRAYER ROOM INTERIOR GALLERY
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