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

          <div className="space-y-4 text-sm sm:text-base font-play text-left">

            <p>
              At RadyInterior, we are passionate about turning retail spaces into amazing atmospheres with our interior fit out designs that enhance the shopping experience. We use our expertise to offer comprehensive and professional solutions for retail interior fit out and the latest technologies & trends. To customize all aspects of design and space planning to each client’s individual needs, we deal with various retail enterprises.
            </p>

            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">Strategic Design and Space Planning:</h2>
             
            <p>
              An analysis of your target market as well as an understanding of its complexity in the retail industry of UAE is done in order to establish our approach. By taking into account what they demand from you, it is easy for you to make a customized design that maximizes on both efficiency and attraction.
            </p>

            <p>
              Thus, arranging racks, shelves, and other fittings properly during the retail interior fit out work in Dubai and Sharjah helps to create a smooth customer friendly environment that leads to customer satisfaction. We want every part of the design to contribute value to one collective shopping place.
            </p>

          
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">Transforming Retail Spaces with Expertise:</h2>

            <p>
              We have unparalleled experience in fitting out retail interiors in Dubai and Sharjah, which has enabled us to transform any space into an effective platform for conducting business. The diverse challenges in retail interior fit out design can always be sorted out promptly and proficiently due to our expertise in this area.
            </p>

            <p>
              Whether optimizing floor plans, enabling better traffic flow, or incorporating innovative display solutions, we are dedicated to improving customer experiences while they shop.
            </p>

           <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]"> 
            Comprehensive Fit Out Solutions: </h2>

            <p>
              From initial design concepts to final execution, RadyInterior offers full retail interior fit out services to clients. Every bit concerning this must meet your vision for your establishment and business objectives; hence, our team works closely with you on them. To provide visually stunning yet practical outcomes, we rely on modern technologies as well as best practices within the industry.
            </p>

           
            <h3 className="text-md tracking-widest font-conthrax text-[#d4af37]">Design and Planning:</h3>   
           

            <p>
              To create an integrated, appealing retail environment, we get started by providing explicit designs relating to material choices that match brand identity and goals, including color schemes and layout details.
            </p>

         
             <h3 className="text-md tracking-widest font-conthrax text-[#d4af37]">Project Execution</h3> 
           

            <p>
              Quality control measures are taken into consideration, thereby making our team manage the whole fit out process that involves construction, installation, and other finishing works. We have a sense of urgency to deliver timely and efficient results that match your dream.
            </p>

        
              <h3 className="text-md tracking-widest font-conthrax text-[#d4af37]">Post-Completion Support</h3>
            

            <p>
              Our goal is to keep your retail space operational at its best. You can depend on us for consistent services even after we complete the project, to provide you with peace and satisfaction.
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