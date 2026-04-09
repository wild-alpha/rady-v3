"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const designImages = [
  "/images/vservice1.webp",
  "/images/vservice2.webp",
  "/images/vservice3.webp",
];

const textImage = {
  src: "/images/vservice1.webp",
  link: "/villa-damac-hills-5-bedroom",
  title: "Damac Hills Villa",
};

const galleryImages = [
  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "CLASSIC VILLA INTERIOR DESIGN",
  },
  { src: "/images/vservice3.webp", link: "/villa-lantana", title: "VILLA LATANA" },
  { src: "/images/vservice1.webp", link: "/villa-khawaneej", title: "VILLA KHAWANEEJ" },
  {
    src: "/images/vservice1.webp",
    link: "/emirates-hills-villa",
    title: "EMIRATES HILLS VILLA",
  },
  { src: "/images/vservice2.webp", link: "/mbr-city-villa", title: "MBR CITY VILLA" },
  {
    src: "/images/vservice3.webp",
    link: "/palm-jumeirah-villa",
    title: "PALM JUMEIRAH VILLA",
  },
];

const villaSteps = [
  {
    id: "01",
    title: "Initial Consultation & Concept",
    desc: "At the beginning, we usually do a thoughtful and in-depth consultation to understand your needs, lifestyle and design expectations. This enables us to set an exclusive and unique creative direction for your vision.",
    img: "/images/mission.webp",
  },
  {
    id: "02",
    title: "Site Study & Space Planning",
    desc: "Efficient architectures and building engineers conduct a comprehensive assessment of your villa after initial consultation. They also make assessment for architectural features, natural light. We create customized space plans.",
    img: "/images/material.webp",
  },
  {
    id: "03",
    title: "Material, Furniture & Finishing Selection",
    desc: "For the material sources we have an efficient suppliers/manufacturers within Dubai and outside Dubai. From our trusted suppliers/manufacturers we source premium materials, high end fabrics and unique decor pieces.",
    img: "/images/customized.webp",
  },
  {
    id: "04",
    title: "Technical Drawings",
    desc: "Our team of draftsmen and architectural designers prepare full set of architectural drawings, lighting layouts, joinery plans and technical documents that are required and aligned with Dubai design standard.",
    img: "/images/mission.webp",
  },
  {
    id: "05",
    title: "Project Execution, Fit-Out & Installation",
    desc: "Now it comes execution, the part which transforms vision into reality. Here our site specialists and dedicated craftsmen blend magic with colors and materials. From flooring to interior finishes we take care of each details.",
    img: "/images/material.webp",
  },
  {
    id: "06",
    title: "Final Styling & Handover",
    desc: "At the completion and just before delivery, we curated artworks, accessories and interior finishes to bring the decided design into life in your villa. The handover unwrap a space that reflects your vision.",
    img: "/images/customized.webp",
  },
];

const SBody = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="bg-[#000000] text-[#ffffff]">

      {/* Section 3 */}
      <section className="px-6 py-10 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="lg:max-w-[80%] mx-auto bg-[#141517] p-6 sm:p-10 rounded shadow text-center space-y-6 mb-12">
          
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
            Office Interior Fit Out Services in Dubai and Sharjah
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
            <p>
              Give your office the upgrade it deserves with Rady Interior, one of a leading office fit out companies Dubai. We combine smart design and detailed planning to create workspaces that match your company’s goals and culture. As a trusted interior office fit out company in Dubai and Sharjah, we deliver high-quality results that bring your ideas to life and support your team every day.
            </p>

            <p>
              Your office isn’t just a place to work. It’s where ideas grow and energy flows. Our office fit out Dubai experienced team pays close attention to your needs from the earliest sketches to the last pieces of furniture. We handle every part of the interior fit out Dubai process, so you get a workspace that feels personal, efficient, and ready for business.
            </p>

            <p>
              Whether you’re giving an existing space a new lease on life or starting with a blank canvas, we focus on what matters. Expect designs that make people feel comfortable and help them do their best work. We create spaces with modern finishes, flexible layouts, and smart use of space.
            </p>

            <p>
              Rady Interior stands out among commercial interior fit out companies in Dubai and Sharjah for our commitment to quality and style. Our knowledge of interior office fit out Dubai helps us turn your vision into a fresh, inspiring workspace. Every detail, from lighting to layout, is customised to reflect your brand’s identity.
            </p>

            <p>
              Let us help you create a vibrant, functional office where teams grow and visitors feel welcome. <b className="text-[#FDD269]"><a href="https://radyinterior.ae/contact/"> Connect with Rady Interior</a></b> today to discover how we can refresh your workspace with <b className="text-[#FDD269]"><a href="https://radyinterior.ae/office-fit-out-cost-dubai-2026/"></a>expert interior fit-out Dubai</b> and Sharjah solutions.
            </p>
          </div>

        </div>

        {/* IMAGE GALLERY (UNCHANGED) */}
        <div className="lg:max-w-[60%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-10">
          {galleryImages.map(({ src, link, title }, i) => (
            <a
              href={link}
              key={i}
              className="group block relative overflow-hidden rounded shadow"
            >
              <Image
                src={src}
                alt={title}
                width={400}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm sm:text-base font-conthrax text-center">
                  {title}
                </p>
              </div>
            </a>
          ))}
        </div>

      </section>

    </section>
  );
};

export default SBody;