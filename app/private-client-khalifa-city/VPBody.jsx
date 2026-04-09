"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/benefit-1.webp", // Replace with Khalifa City project images
    alt: "Private Client Khalifa City Luxury Interior",
    title: "Khalifa City Gallery Image 1",
    description: "Luxurious living space blending modern design with timeless elegance"
  },
  {
    src: "/images/benefit-2.webp",
    alt: "High-end materials Khalifa City Abu Dhabi",
    title: "Khalifa City Gallery Image 2",
    description: "Custom furniture and marble flooring details"
  },
  {
    src: "/images/benefit-3.webp",
    alt: "Modern Interior Design Khalifa City",
    title: "Khalifa City Gallery Image 3",
    description: "Open-plan layout creating a spacious and welcoming feel"
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
        HOME &gt; PROJECTS &gt; PRIVATE CLIENT KHALIFA CITY
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
            LUXURY RESIDENTIAL INTERIOR:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            PRIVATE CLIENT KHALIFA CITY
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
                Radyinterior created a luxurious living space for a private client in Khalifa City. It blends modern design with timeless elegance. This shows our commitment to making interiors that reflect our client’s style and are both functional and comfortable.
              </p>
              
              <p>
                The home has an open-plan layout that makes it feel bigger. Each room is designed for a specific purpose. We chose high-end materials and finishes, like marble flooring and custom furniture. The lighting highlights the home’s architecture, making it welcoming.
              </p>

              <p>
                We worked closely with the client to meet their expectations. This includes the color palette and accessory selection. The end result is a sophisticated space that captures the client’s vision and shows our quality and attention to detail.
              </p>

              <p>
                This project in Khalifa City is a proud example of our work. It shows how we can create luxury interiors that are both beautiful and practical.
              </p>

              {/* Project Meta Details */}
              <div className="pt-6 border-t border-gray-800 mt-8 space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-[#f0c95a] uppercase text-[10px] tracking-[0.2em] font-conthrax min-w-[80px]">
                    Client:
                  </span>
                  <span className="text-white text-sm font-play tracking-wider">
                    Private Client Khalifa City
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-[#f0c95a] uppercase text-[10px] tracking-[0.2em] font-conthrax min-w-[80px]">
                    Category:
                  </span>
                  <span className="text-white text-sm font-play tracking-wider">
                    Renovation
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-[#f0c95a] uppercase text-[10px] tracking-[0.2em] font-conthrax min-w-[80px]">
                    Location:
                  </span>
                  <span className="text-white text-sm font-play tracking-wider">
                    Abu Dhabi
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/benefit-main.webp" 
              alt="Private Client Khalifa City Interior Design"
              title="Khalifa City Project - RadyInterior"
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
            alt="Divider"
            width={320}
            height={80}
            className="h-auto w-48 sm:w-64"
          />
        </div>

        <h2 className="text-white mt-10 mb-10 text-sm sm:text-xl tracking-widest font-conthrax text-center">
          Related Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.slice(0, 3).map((img, idx) => {
            const projectNames = [
              "Modern Villa Abu Dhabi",
              "Luxury Renovation RAK",
              "Khalifa City Interior"
            ];

            return (
              <figure key={idx} className="relative cursor-pointer overflow-hidden rounded-md group bg-[#111] h-64 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center z-0">
                  <p className="text-[#f0c95a] text-[10px] sm:text-xs font-play uppercase tracking-widest leading-relaxed font-bold">
                    {projectNames[idx]}
                  </p>
                </div>

                <Image
                  src={img.src}
                  alt={projectNames[idx]}
                  width={400}
                  height={300}
                  loading="lazy"
                  className="relative z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 bg-[#111]"
                  onClick={() => openImage(idx)}
                />
                <figcaption className="sr-only">{projectNames[idx]}</figcaption>
              </figure>
            );
          })}
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