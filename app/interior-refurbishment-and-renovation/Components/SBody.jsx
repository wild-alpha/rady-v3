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
  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "CLASSIC VILLA INTERIOR DESIGN",
  },
  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "CLASSIC VILLA INTERIOR DESIGN",
  },
  {
    src: "/images/vservice1.webp",
    link: "/emirates-hills-villa",
    title: "EMIRATES HILLS VILLA",
  },
  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "CLASSIC VILLA INTERIOR DESIGN",
  },
  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "CLASSIC VILLA INTERIOR DESIGN",
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

const faqs = [
  {
    question: "What is the difference between renovation and refurbishment??",
    answer:
      "Refurbishment focuses on updating finishes and improving aesthetics, while renovation may involve deeper changes to layout, structure, and functionality.",
  },
  {
    question: "What types of spaces do you renovate?",
    answer:
      "We renovate villas, apartments, offices, retail units, restaurants, and hospitality spaces across the UAE.",
  },
  {
    question: "Is renovation more cost-effective than building new?",
    answer:
      "In many cases, renovating an existing space is faster and more cost-efficient than constructing a new one, especially when the structure is sound",
  },
  {
    question: "Can you modernize old interiors to current standards?",
    answer:
      "Yes, we upgrade layouts, finishes, lighting, technology, and ergonomics to align with modern design standards and lifestyle needs.",
  },

   {
    question: "Do you handle renovation while the property is occupied?",
    answer:
      "Depending on scope, we can plan phased work to minimize disruption, particularly for commercial or office environments.",
  },
  
];

const SBody = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="bg-[#000000] text-[#ffffff]">
      {/* Section 1 */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 font-sans">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2 flex flex-col justify-start">
              <h2 className="text-sm sm:text-xl md:text-xl font-bold tracking-widest py-2 text-[#d4af37]">
              Interior Renovation by RadyInterior
              </h2>

              <p className="text-sm sm:text-base leading-7 ">
              Interior renovation is more than updating a space; it is a strategic transformation that revitalizes functionality, comfort, and visual identity. At RadyInterior recognized as one of the leading interior renovation companies in Dubai we upgrade residential, commercial, office, and villa interiors through thoughtful design and precise execution. Our team ensures every renovation enhances the overall style, efficiency, and long-term value of your property.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                15 Years of Experience
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37]">
                Get Best Luxury Fit out in Dubai & Sharjah
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/villa-cover.webp"
                    alt="Watch our company video"
                    width={1280}
                    height={720}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm transition group-hover:scale-110">
                      <FaPlay className="text-white text-xl sm:text-2xl ml-1" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full aspect-video border-4 border-[#8c6b1f] rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/F1tjU-4YMmg?autoplay=1&rel=0&modestbranding=1&controls=1"
                    title="YouTube Shorts Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              <Link
                href="/contact-us"
                className="border border-[#8c6b1f] text-[#d4af37] text-xs sm:text-base font-play px-6 py-2 mt-6 w-fit uppercase rounded hover:bg-[#8c6b1f] hover:text-white transition-all duration-200"
              >
                GET YOUR QUOTE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-10 px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          Luxury Fit out Services We Provide
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {designImages.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden">
              <Image
                src={src}
                alt={`service ${index + 1}`}
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xs sm:text-xl font-semibold uppercase text-[#d4af37]">
            Get In Touch With Us
          </h3>
          <p className="text-black text-sm sm:text-base font-semibold">
            We are located in the world's luxury city, Dubai
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
            <a
              href="https://wa.me/971588075603"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#d4af37] text-black font-play text-sm rounded w-full sm:w-auto text-center hover:bg-[#f0c95a] transition"
            >
              Request availability by WhatsApp
            </a>

            <a
              href="mailto:info@example.com"
              className="px-6 py-3 bg-[#8c6b1f] text-white font-play text-sm rounded w-full sm:w-auto text-center hover:bg-[#d4af37] hover:text-black transition"
            >
              Request availability by E-mail
            </a>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="px-6 py-10 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="lg:max-w-[80%] mx-auto bg-[#141517] p-6 sm:p-10 rounded shadow text-center space-y-6 mb-12">
            <h2 className="text-lg text-[30px] font-bold tracking-widest text-[#d4af37]">
            Our Interior Renovation Process</h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
        
            <h3 className="text-lg font-bold tracking-widest py-2 text-[#d4af37]">
            1. Assessment & Planning</h3>
            <p>Every refurbishment begins with a detailed evaluation of your existing space. Our specialists examine structural conditions, spatial challenges, outdated elements, and improvement areas. We then create a tailored renovation plan that may include:</p>
               <ul className="list-disc pl-5 space-y-2">
                <li>New flooring and material upgrades</li> 
                <li>Furniture replacement or reconfiguration</li>
                <li>Enhanced spatial layout</li>
                <li>Updated lighting and color palettes</li>
                <li>Integration of modern design principles</li>
              </ul>
            <p>
             This planning phase ensures every renovation aligns with your functional needs, aesthetic preferences, and long term goals.
             </p>
             <h3 className="text-lg font-bold tracking-widest py-2 text-[#d4af37]">
            2. Interior Updating & Space Enhancement</h3>
            <p>Interior refurbishment goes far beyond surface level improvements. We redesign your space to improve flow, comfort, and usability ensuring each area supports your lifestyle or operational needs. This may include:</p>
               <ul className="list-disc pl-5 space-y-2">
                <li>Reorganizing rooms for better circulation</li> 
                <li>Refreshing wall finishes and modern colour schemes</li>
                <li>Introducing new textures, patterns, and premium materials</li>
                <li>Adding stylish, contemporary design features</li>
              </ul>
            <p>
           Our goal is to deliver an environment that is visually impressive, highly functional, and sustainable. </p>

             <h3 className="text-lg font-bold tracking-widest py-2 text-[#d4af37]">
            3.  Smart Technology Integration</h3>
            <p>Modern renovation requires smart solutions. RadyInterior incorporates advanced technologies that improve convenience, efficiency, and sustainability:</p>
               <ul className="list-disc pl-5 space-y-2">
                <li>Energy efficient lighting systems</li> 
                <li>Smart climate control solutions</li>
                <li>Automated home/office systems</li>
                <li>Intelligent storage and space saving features</li>
                
              </ul>
            <p>
             These upgrades ensure your space remains future ready with minimal environmental impact.
            </p>
          </div>
        </div>

        <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
          <div className="w-full lg:w-2/3 space-y-4">
            <h2 className="text-lg text-[30px] font-bold tracking-widest text-[#d4af37]">
            Advantages of Interior Renovation
            </h2>
             <h3 className="text-lg font-bold tracking-widest text-[#d4af37]">Faster Development & Completion</h3>
            <p className="text-sm sm:text-base">
            Renovation is significantly faster than constructing a new space from scratch. Refurbishing a villa, home, office, or retail outlet allows clients to upgrade interiors quickly and return to normal use in shorter timeframes without compromising luxury quality.
            </p>
             <h3 className="text-lg font-bold tracking-widest text-[#d4af37]">Cost Savings & Financial Efficiency</h3>
           <p>Interior renovation in Dubai often reduces overall project costs. With fewer materials, less labour, and strategic reuse of existing elements, refurbishment achieves premium quality results at a more economical price compared to new builds.
           </p>
          
          </div>

          <div className="w-full lg:w-1/3 group relative overflow-hidden rounded-lg shadow-lg">
            <a href={textImage.link} className="block">
              <Image
                src={textImage.src}
                alt={textImage.title}
                width={500}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm sm:text-base font-conthrax text-center">
                  {textImage.title}
                </p>
              </div>
            </a>
          </div>
        </div>

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

        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xs sm:text-xl font-conthrax uppercase text-[#d4af37]">
            Get In Touch With Us
          </h3>
          <p className="text-sm sm:text-base font-play">
            We are located in the world's luxury city, Dubai
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
            <a
              href="https://wa.me/971586023677"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#d4af37] text-black font-play text-sm rounded w-full sm:w-auto text-center hover:bg-[#f0c95a] transition"
            >
              Request availability by WhatsApp
            </a>

            <a
              href="mailto:info@radyinterior.ae"
              className="px-6 py-3 bg-[#8c6b1f] text-white font-play text-sm rounded w-full sm:w-auto text-center hover:bg-[#d4af37] hover:text-black transition"
            >
              Request availability by E-mail
            </a>
          </div>
        </div>

        <div className="bg-[#141517] py-16 pl-10 mt-10">
         
         <h2 className="text-lg text-[20px] font-bold tracking-widest text-[#d4af37]">
             Improved Space Utilization & Functionality
            </h2>
            <p className="text-sm sm:text-base mt-2">
             Renovation enhances workflow, improves comfort, and aligns the space with current lifestyle or business requirements. This leads to:
            </p>

             <ul className="list-disc pl-5 space-y-2">
              <li> Better space management</li>
              <li>Increased productivity in commercial environments</li>
              <li>More flexibility and comfort in residential interiors</li>
             </ul>
            <h2 className="text-lg text-[20px] font-bold tracking-widest text-[#d4af37]">
            Reduced Environmental Impact
            </h2>
            <p>Sustainability is at the forefront of modern renovation. By reusing existing materials and reducing construction waste, we support eco friendly practices while minimizing carbon footprint. Our approach ensures visually appealing and responsible interiors.
            </p>
        </div>

        <div className="max-w-7xl mx-auto">
    
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-6 font-play">
              <h2 className="text-lg text-[30px] font-bold tracking-widest text-[#d4af37]">
           Conclusion
            </h2>
              <p>
                Interior renovation is the most efficient way to upgrade and modernize existing spaces. It offers enhanced functionality, cost effective improvements, faster completion, and sustainable practices. At RadyInterior, we deliver premium renovation services in Dubai that exceed expectations ensuring your space becomes more beautiful, practical, and long lasting. <br />

                Whether updating a home, office, villa, or commercial property, our team transforms your vision into a refreshed, refined environment built with quality and precision.</p>
               
             
            </div>
          <div className="w-full lg:w-2/3 group relative py-5 rounded-lg  shadow-md">
              <Image
                src="/images/vservice1.webp"
                alt="Round luxury bed with fairy lights"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 mb-4 bg-[#141517] rounded-lg shadow p-6 sm:p-10">
          <h2 className="text-center text-2xl sm:text-3xl font-conthrax mb-4 text-[#d4af37]">
            Villa Interior Design Dubai – FAQs
          </h2>
          <p className="font-play text-sm sm:text-base mb-6 text-center">
            Find quick answers to common questions about our villa interior
            design and fit-out services in Dubai.
          </p>

          <div className="space-y-3">
            {faqs.map((item, index) => (
              <details
                key={index}
                className="group border-b border-gray-200 py-3"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-play font-semibold text-sm sm:text-base text-[#8c6b1f] text-left">
                    {item.question}
                  </span>
                  <span className="ml-3 text-[#d4af37] text-xl transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm sm:text-base font-play">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default SBody;