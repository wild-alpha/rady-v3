"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/ATRD (2).webp",
    alt: "Luxury Palm Jumeirah villa living room with modern lighting",
    title: "Palm Jumeirah Villa Interior Image 1",
    description: "Spacious villa living area with elegant neutral tones and premium finishes"
  },
  {
    src: "/images/ATRD (4).webp",
    alt: "Modern villa interior in Palm Jumeirah",
    title: "Palm Jumeirah Villa Interior Image 2",
    description: "Open-plan living space with contemporary design elements"
  },
  {
    src: "/images/ATRD (6).webp",
    alt: "Luxury villa bedroom interior",
    title: "Palm Jumeirah Villa Interior Image 3",
    description: "Elegant bedroom with soft lighting and bespoke furniture"
  },
  {
    src: "/images/ATRD (14).webp",
    alt: "Villa dining area interior design",
    title: "Palm Jumeirah Villa Interior Image 4",
    description: "Sophisticated dining area with modern finishes"
  },
  {
    src: "/images/ATRD (15).webp",
    alt: "Villa kitchen interior",
    title: "Palm Jumeirah Villa Interior Image 5",
    description: "Modern kitchen with sleek cabinetry and marble countertops"
  },
  {
    src: "/images/ATRD (16).webp",
    alt: "Luxury villa hallway design",
    title: "Palm Jumeirah Villa Interior Image 6",
    description: "Minimalist hallway with refined lighting details"
  },
  {
    src: "/images/ATRD (17).webp",
    alt: "Villa lounge interior",
    title: "Palm Jumeirah Villa Interior Image 7",
    description: "Comfortable lounge with modern décor accents"
  },
  {
    src: "/images/ATRD (18).webp",
    alt: "Villa bathroom interior design",
    title: "Palm Jumeirah Villa Interior Image 8",
    description: "Luxury bathroom with marble finishes and premium fixtures"
  },
  {
    src: "/images/ATRD (22).webp",
    alt: "Modern villa interior design",
    title: "Palm Jumeirah Villa Interior Image 9",
    description: "Contemporary villa interior with clean lines and open space"
  },
  {
    src: "/images/ATRD (23).webp",
    alt: "Palm Jumeirah villa living area",
    title: "Palm Jumeirah Villa Interior Image 10",
    description: "Bright living area with elegant furniture layout"
  },
  {
    src: "/images/ATRD (25).webp",
    alt: "Luxury villa interior design",
    title: "Palm Jumeirah Villa Interior Image 11",
    description: "Premium finishes with modern luxury styling"
  },
  {
    src: "/images/ATRD (26).webp",
    alt: "Villa bedroom modern interior",
    title: "Palm Jumeirah Villa Interior Image 12",
    description: "Stylish bedroom with custom wardrobe design"
  },
  {
    src: "/images/ATRD (27).webp",
    alt: "Luxury villa living space",
    title: "Palm Jumeirah Villa Interior Image 13",
    description: "Elegant seating area with contemporary décor"
  },
  {
    src: "/images/ATRD (28).webp",
    alt: "Palm Jumeirah villa interior design",
    title: "Palm Jumeirah Villa Interior Image 14",
    description: "High-end villa interior with gold accents and marble flooring"
  },
  {
    src: "/images/ATRD (29).webp",
    alt: "Modern villa design Dubai",
    title: "Palm Jumeirah Villa Interior Image 15",
    description: "Luxury villa design reflecting modern Dubai lifestyle"
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
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
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
        HOME &gt; PROJECTS &gt; PALM JUMEIRAH VILLA 
      </p>

      <div className="relative pl-4 sm:pl-6 mb-20">
        <div className="absolute top-0 left-0 h-full w-[1px] bg-gray-400 z-0 hidden lg:block" />
        <motion.div
          className="absolute left-[-4px] top-[104px] w-2 h-2 rounded-full bg-[#d4af37] z-10 hidden lg:block"
          style={{ y: dotY }}
        />
        <div
          className="absolute top-0 left-0 w-[1px] bg-gray-400 z-0 block lg:hidden"
          style={{ height: "calc(104px + 360px)" }}
        />

        <div className="mb-6">
          <p className="text-xs sm:text-base font-conthrax tracking-wide uppercase text-white">
            TRANSFORMING LUXURY VILLAS:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            PALM JUMEIRAH VILLA INTERIOR
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
                At Rady Interior Design & Fitout, we proudly present our Palm Jumeirah Villa Interior project, a true expression of luxury living and refined design. Located in one of Dubai’s most prestigious waterfront communities, this villa was carefully designed to reflect sophistication, comfort, and modern elegance. With our <b><a href="https://radydointerior.ae/villa-interior-design-dubai">Villa Interior Design Dubai</a></b> services, we transformed this residence into a bespoke living space that aligns perfectly with the lifestyle of Palm Jumeirah.
              </p>
              <p>
                Our expert designers planned every detail of this villa interior, ensuring a seamless blend of aesthetics and functionality. From spacious living areas to custom-designed layouts, the project highlights our expertise in delivering high-end villa interior design in Dubai. The interiors embrace contemporary luxury, combining premium materials, elegant textures, and modern design elements to create a timeless environment.
              </p>
              <p>
                Each space within the villa was designed with precision, from luxurious bedrooms to stylish living areas and elegant dining spaces. Our fit-out solutions included bespoke furniture, custom finishes, and complete interior execution, making this project a perfect example of turnkey villa interior design in Palm Jumeirah. This villa stands as a statement of modern luxury, offering comfort, style, and exclusivity in every detail.
              </p>
            </div>
          </div>

          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/ATRD (28).webp"
              alt="Luxury Palm Jumeirah villa interior with marble flooring and gold accents"
              title="Palm Jumeirah Villa Interior Design Dubai"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <figcaption className="sr-only">
              A luxury Palm Jumeirah villa interior with modern design, premium finishes, and elegant detailing.
            </figcaption>
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
          PALM JUMEIRAH VILLA INTERIOR GALLERY
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
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                onClick={() => openImage(idx)}
              />
              <figcaption className="sr-only">{img.description}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={closeImage}
            className="absolute top-4 right-6 text-white text-3xl font-bold"
          >
            &times;
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-4xl"
          >
            &#8592;
          </button>
          <Image
            src={galleryImages[current].src}
            alt={galleryImages[current].alt}
            title={galleryImages[current].title}
            width={900}
            height={600}
            loading="lazy"
            className="rounded-md object-contain max-h-[90vh] max-w-[90vw]"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-4xl"
          >
            &#8594;
          </button>
        </div>
      )}
    </section>
  );
};

export default VPBody;