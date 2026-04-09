"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/FRONT CdddAM LIVING01.jpg",
    alt: "Luxury Jumeirah Golf Estates villa living room interior",
    title: "Jumeirah Golf Estates Villa Interior Image 1",
    description: "Elegant living room overlooking golf course views with modern luxury finishes"
  },
  {
    src: "/images/BACK CAdddM LIVING1.jpg",
    alt: "Modern Jumeirah Golf Estates villa lounge design",
    title: "Jumeirah Golf Estates Villa Interior Image 2",
    description: "Sophisticated lounge with bespoke furniture and panoramic natural lighting"
  },
  {
    src: "/images/FRONTddd CAM LIVING02.jpg",
    alt: "Luxury villa interior Jumeirah Golf Estates Dubai",
    title: "Jumeirah Golf Estates Villa Interior Image 3",
    description: "High-end finishes with bespoke craftsmanship and modern elegance"
  },
  {
    src: "/images/KHALİdddFA AL ALİ - DİNİNG AREA- SİDE VİEW -28.02.jpg",
    alt: "Jumeirah Golf Estates villa dining area interior",
    title: "Jumeirah Golf Estates Villa Interior Image 4",
    description: "Elegant dining space with chandelier lighting and refined modern aesthetics"
  },
  {
    src: "/images/khalifa dddal ali- master bedroom- side view -25.01.jpg",
    alt: "Luxury villa bedroom Jumeirah Golf Estates Dubai",
    title: "Jumeirah Golf Estates Villa Interior Image 5",
    description: "Master bedroom designed with calming tones and golf-view inspired luxury"
  },
  {
    src: "/images/KHALİFdddA AL ALİ-BOYS BEDROOM-RİGHT SİDE VİEW- 18.02.jpg",
    alt: "Luxury kids bedroom Jumeirah Golf Estates villa",
    title: "Jumeirah Golf Estates Villa Interior Image 6",
    description: "Modern boys bedroom with custom cabinetry and integrated study area"
  },
  {
    src: "/images/Khalifa dddAl Ali-Girls bedroom-Left side view-12JAN.jpg",
    alt: "Modern girls bedroom design Dubai",
    title: "Jumeirah Golf Estates Villa Interior Image 7",
    description: "Elegant girls bedroom featuring soft palettes and bespoke furniture"
  },
  {
    src: "/images/khalofddda al ali - master bathroom- left side view-31.01.jpg",
    alt: "Luxury bathroom interior Jumeirah Golf Estates villa",
    title: "Jumeirah Golf Estates Villa Interior Image 8",
    description: "Spa-inspired bathroom with marble finishes and premium fittings"
  },
  {
    src: "/images/Mr Khalifa_s Kidddtchen front camera2.jpg",
    alt: "High-end kitchen Jumeirah Golf Estates villa",
    title: "Jumeirah Golf Estates Villa Interior Image 9",
    description: "Contemporary kitchen with marble countertops and premium cabinetry design"
  },
  {
    src: "/images/khalifa adddl ali - guest bedroom-right side -23.03.jpg",
    alt: "Modern guest bedroom Jumeirah Golf Estates Dubai",
    title: "Jumeirah Golf Estates Villa Interior Image 10",
    description: "Sophisticated guest suite with minimalist luxury design"
  },
  {
    src: "/images/khalifaddd al ali - master bathroom- right side view-31.01.jpg",
    alt: "Luxury master bathroom Jumeirah Golf Estates",
    title: "Jumeirah Golf Estates Villa Interior Image 11",
    description: "Premium master ensuite with high-end stone textures"
  },
  {
    src: "/images/KHALIFAddd AL ALI- DINING RESTROOM-LEFT SIDE -17.04 (1).jpg",
    alt: "Luxury dining restroom design",
    title: "Jumeirah Golf Estates Villa Interior Image 12",
    description: "Refined powder room with elegant architectural flow"
  },
  {
    src: "/images/khalifa al ali -master bedroom-dressing room-front side view-25.01.jpg",
    alt: "Luxury dressing room interior",
    title: "Jumeirah Golf Estates Villa Interior Image 13",
    description: "High-end dressing room with bespoke cabinetry and elegant lighting"
  },
  {
    src: "/images/khalifa al ali- master bedroom-right side view 1-25.01.jpg",
    alt: "Master bedroom right side view",
    title: "Jumeirah Golf Estates Villa Interior Image 14",
    description: "Alternative view of the master suite highlighting spacious layout"
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
        HOME &gt; PROJECTS &gt; JUMEIRAH GOLF ESTATES VILLA
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
            TRANSFORMING LUXURY VILLAS:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            JUMEIRAH GOLF ESTATES VILLA INTERIOR
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
                At WE DO Interior Design & Fitout, we proudly present our Jumeirah Golf Estates Villa Interior project, designed for luxury living surrounded by world-class golf course views. This villa reflects sophistication, serenity, and modern architectural excellence.
              </p>
              <p>
                Our design approach focused on creating a seamless connection between indoor elegance and outdoor greenery. Every space was carefully planned with premium materials, bespoke furniture, and soft lighting to enhance the golf estate lifestyle experience.
              </p>
              <p>
                Through our complete villa interior design and fit-out solutions, we transformed this residence into a refined luxury home. The result is a perfect balance of comfort, functionality, and timeless elegance in one of Dubai’s most prestigious communities.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/FRONT CdddAM LIVING01.jpg"
              alt="Luxury Jumeirah Golf Estates villa interior Dubai"
              title="Jumeirah Golf Estates Villa Interior Design"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </figure>

        </div>
      </div>

      
     
      {/* Gallery Title */}
      <h2 className="text-white mt-10 mb-10 text-sm sm:text-xl tracking-widest font-conthrax text-center">
        JUMEIRAH GOLF ESTATES VILLA INTERIOR GALLERY
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