"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/benefit-1.webp",
    alt: "Benefit Cosmetics Store Interior Dubai",
    title: "Benefit Store Gallery Image 1",
    description: "Vibrant pink aesthetic and custom retail displays"
  },
  {
    src: "/images/benefit-2.webp",
    alt: "Benefit Cosmetics Interior Fit out",
    title: "Benefit Store Gallery Image 2",
    description: "High-quality joinery and branded wall panels"
  },
  {
    src: "/images/benefit-3.webp",
    alt: "Custom Beauty Stations Benefit Dubai",
    title: "Benefit Store Gallery Image 3",
    description: "Interactive beauty stations with task lighting"
  },
  // Mazeed images yahan add karein...
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
      {/* Breadcrumb */}
      <p className="text-xs text-[#f0c95a] uppercase tracking-widest mb-4 font-conthrax">
        HOME &gt; PROJECTS &gt; Emirates Pride Perfumes – Luxury Interior Fit-Out in Dubai
      </p>

      {/* Heading + Paragraph + Image */}
      <div className="relative pl-4 sm:pl-6 mb-20">
        {/* Scroll line */}
        <div className="absolute top-0 left-0 h-full w-[1px] bg-gray-400 z-0 hidden lg:block" />
        <motion.div
          className="absolute left-[-4px] top-[104px] w-2 h-2 rounded-full bg-[#d4af37] z-10 hidden lg:block"
          style={{ y: dotY }}
        />
        <div
          className="absolute top-0 left-0 w-[1px] bg-gray-400 z-0 block lg:hidden"
          style={{ height: "calc(104px + 360px)" }}
        />

        {/* Headings */}
        <div className="mb-6">
          <p className="text-xs sm:text-base font-conthrax tracking-wide uppercase text-white">
            RETAIL INTERIOR FIT-OUT:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            BENEFIT COSMETICS STORE DUBAI
          </h1>
          <div className="w-30 sm:w-96 h-[2px] bg-[#d4af37] mt-2" />
        </div>

        {/* Row: Paragraph + Image */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Paragraph Section */}
          <div className="w-full lg:w-1/2">
            <div
              ref={scrollRef}
              className="max-h-[360px] overflow-y-auto scroll-smooth text-sm leading-6 text-white/90 space-y-4 pr-2 font-play"
              style={{ scrollbarWidth: "none" }}
            >
              <p>
                RadyInterior completed the full <b><a href="https://radyinterior.ae/" className="text-[#f0c95a] hover:underline">interior fit out Dubai</a></b>  for Emirates Pride Perfumes and Dakhoons, one of the UAE’s most distinguished fragrance brands. The objective was to create a refined retail environment that blends traditional Arabian aesthetics with modern luxury, allowing customers to experience perfumes and dakhoons in an elegant, welcoming space.
              </p>
              
              <p>
                <b>Design Approach:</b>
                The concept draws inspiration from the region’s fragrance heritage while incorporating new classic luxury elements. The store features:</p>
              <ul className="list-disc pl-5 space-y-1 text-white/90 italic">
                  <li>Warm, rich materials that highlight the brand’s identity</li>
                  <li>Intricate detailing and refined finishes</li>
                  <li>Custom built display units designed for premium perfume presentation</li>
                  <li>Seating zones that enhance customer comfort</li>
                </ul>
                <p>
                The result is a harmonious balance between Arabian tradition and contemporary sophistication.</p>
              <div className="space-y-2">
                <p>
                 <b>Custom Displays & Lighting:</b> RadyInterior designed bespoke display shelves tailored to Emirates Pride’s product range. A focused lighting system enhances the visual appeal of perfumes and dakhoons while creating a warm, inviting atmosphere.
This lighting strategy elevates product visibility and reinforces the brand’s prestige.</p>
                
              </div>

              <p>
                <b>Fit-Out Execution:</b> Every element was crafted with precision, from joinery and shelving to material selection and layout planning. The store accommodates smooth customer flow, supports staff operations, and delivers a memorable <b><a href="https://radyinterior.ae/" className="text-[#f0c95a] hover:underline">  luxury retail experience. </a></b> 
              </p>

              <p>
                <b>Project Outcome:</b> The completed space is elegant, functional, and distinctly tied to Emirates Pride’s heritage. It showcases RadyInterior’s capabilities in delivering high end commercial interior design Dubai solutions that connect cultural identity with modern retail expectations.</p>

              {/* Project Meta Details - Same Line Structure */}
<div className="pt-6 border-t border-gray-800 mt-8 space-y-2">
  
  <div className="flex items-baseline gap-2">
    <span className="text-[#f0c95a] uppercase text-[10px] tracking-[0.2em] font-conthrax min-w-[80px]">
      Client:
    </span>
    <span className="text-white text-sm font-play uppercase tracking-wider">
    Emirates Pride Perfumes
    </span>
  </div>

  <div className="flex items-baseline gap-2">
    <span className="text-[#f0c95a] uppercase text-[10px] tracking-[0.2em] font-conthrax min-w-[80px]">
      Category:
    </span>
    <span className="text-white text-sm font-play uppercase tracking-wider">
      Interior Fit out
    </span>
  </div>

  <div className="flex items-baseline gap-2">
    <span className="text-[#f0c95a] uppercase text-[10px] tracking-[0.2em] font-conthrax min-w-[80px]">
      Location:
    </span>
    <span className="text-white text-sm font-play uppercase tracking-wider">
      Dubai
    </span>
  </div>

</div>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/benefit-main.webp" 
              alt="Benefit Cosmetics Store Interior Fit-out Dubai"
              title="Benefit Cosmetics Store - RadyInterior"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            
          </figure>
        </div>
      </div>

      {/* Gallery Section */}
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
          Related Projects
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

      {/* Lightbox Overlay */}
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