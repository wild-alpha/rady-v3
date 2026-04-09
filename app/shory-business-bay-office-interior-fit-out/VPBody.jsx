"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/benefit-1.webp",
    alt: "Shory Business Bay Office Interior Dubai",
    title: "Shory Office Gallery Image 1",
    description: "Modern open work zones designed for productivity"
  },
  {
    src: "/images/benefit-2.webp",
    alt: "Shory Office Interior Fit out Business Bay",
    title: "Shory Office Gallery Image 2",
    description: "Professional meeting areas with contemporary design"
  },
  {
    src: "/images/benefit-3.webp",
    alt: "Custom Office Lighting and Ergonomic Furniture",
    title: "Shory Office Gallery Image 3",
    description: "Energizing office environment with tailored fixtures"
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
        HOME &gt; PROJECTS &gt; SHORY BUSINESS BAY OFFICE INTERIOR FIT-OUT – DUBAI
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
            OFFICE INTERIOR FIT-OUT:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            SHORY BUSINESS BAY OFFICE
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
                RadyInterior delivered a complete <b><a href="https://radyinterior.ae/" className="text-[#f0c95a] hover:underline">office interior fit-out</a></b> for Shory in Business Bay, Dubai, creating a workspace that reflects the company’s professional identity while supporting productivity and day to day operations.
              </p>
              
              <p>
                The objective was to design an office environment that feels modern, efficient, and well structured—one that balances brand presence with employee comfort and functional planning.
              </p>
              
              <p>
                <b>Project Execution:</b>
                The design strategy focused on workflow efficiency, visual clarity, and long term usability. A contemporary color palette was selected to maintain a clean and professional atmosphere, while durable, high quality materials ensured the space would perform well over time.
              </p>

              <p>
                The layout was carefully planned to encourage collaboration without compromising focus. Open work zones were balanced with defined areas for meetings and individual tasks, allowing the team to work efficiently throughout the day.
              </p>

              <p>
                Ergonomic furniture was integrated to support comfort and posture during extended working hours. Custom lighting solutions were introduced to enhance brightness, reduce visual fatigue, and create an energizing office environment.
              </p>
<p>
                Subtle modern design elements and tailored fixtures were incorporated to align with Shory’s brand identity, ensuring the space feels cohesive and purpose driven rather than decorative.</p>
              <p>
                <b>Project Outcome:</b> The Shory Business Bay office fit-out demonstrates <b><a href="https://radyinterior.ae/" className="text-[#f0c95a] hover:underline">RadyInterior’s</a></b> expertise in delivering functional, brand aligned corporate interiors. The result is a refined workspace that supports productivity and reflects professionalism, and meets the operational needs of a growing business in Dubai’s commercial district.
              </p>

              {/* Project Meta Details */}
              <div className="pt-6 border-t border-gray-800 mt-8 space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-[#f0c95a] uppercase text-[10px] tracking-[0.2em] font-conthrax min-w-[80px]">
                    Client:
                  </span>
                  <span className="text-white text-sm font-play tracking-wider">
                    Shory Business Bay Office
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-[#f0c95a] uppercase text-[10px] tracking-[0.2em] font-conthrax min-w-[80px]">
                    Category:
                  </span>
                  <span className="text-white text-sm font-play tracking-wider">
                    Commercial Interior Fitout
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-[#f0c95a] uppercase text-[10px] tracking-[0.2em] font-conthrax min-w-[80px]">
                    Location:
                  </span>
                  <span className="text-white text-sm font-play tracking-wider">
                    Business Bay, Dubai
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/benefit-main.webp" 
              alt="Shory Business Bay Office Interior Fit-out Dubai"
              title="Shory Office Interior - RadyInterior"
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
          {galleryImages.slice(0, 3).map((img, idx) => {
            const projectNames = [
              "Omniyat One Palm – Palm Jumeirah",
              "Serenia Living Tower 3 – Luxury Interior Design & Furnishing in Palm Jumeirah",
              "Damac Lagoons Villa – Interior Fit Out by RadyInterior"
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