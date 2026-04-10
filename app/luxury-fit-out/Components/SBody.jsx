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
    question: "What is a luxury fit-out?",
    answer:
      "A luxury fit-out focuses on high-end materials, bespoke details, and refined craftsmanship to create premium interiors for villas, penthouses, offices, hospitality, and flagship retail.",
  },
  {
    question: "What makes a fit-out “luxury” in your approach?",
    answer:
      "We emphasize tailored design, custom joinery, high-spec finishes, integrated lighting, and flawless execution, aligned with the client’s brand and lifestyle.",
  },
  {
    question: "Do you handle luxury projects for both residential and commercial clients?",
    answer:
      "Yes, we work on luxury villas, branded residences, executive offices, boutique hotels, fine-dining restaurants, and signature retail spaces.",
  },
  {
    question: "Can you work with international brands and consultants?",
    answer:
      "We frequently collaborate with international brands, consultants, and suppliers to meet global standards and brand guidelines.",
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
                Luxury Fit out in RadyInterior
              </h2>

              <p className="text-sm sm:text-base leading-7 ">
               A luxury fit out is more than decoration it is the art of transforming a property into an elegant, highly functional, and emotionally engaging space. At RadyInterior, we approach every luxury fit out in Dubai and the UAE with meticulous planning, precision craftsmanship, and a deep understanding of how luxury clients live, work, and experience their environments. With access to premium finishes, bespoke materials, and advanced design techniques, we bring dream interiors to life from high end residences to commercial landmarks. 
              </p>

           <h2 className="text-sm sm:text-xl md:text-xl font-bold tracking-widest py-2 text-[#d4af37]">
            Customized Luxury Fit Out Solutions</h2>
            <p>Every project begins with a simple belief: no two spaces and no two clients are the same.
            That’s why our luxury fit out service is fully tailored. Whether you’re renovating a high end apartment, designing a luxury villa, elevating a commercial office, or building an iconic retail or hospitality space, our team ensures your space reflects your identity and supports your lifestyle.

           We take time to understand your vision, preferences, and functional needs. This allows us to create interiors that are uniquely yours elegant, harmonious, and expertly executed.</p>
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
              href="https://wa.me/971508181824"
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
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
          Specialized Expertise for Premium Spaces
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
         <ul className="list-disc pl-5 space-y-2">
          <p>Our luxury fit out expertise extends across</p>
          <li>Executive residences & mansions</li> 
          <li>High end apartments & penthouses</li>
          <li>Luxury retail stores & boutiques</li>
          <li>Elite corporate offices & meeting suites</li>
          <li>Fine-dining spaces & boutique hospitality venues</li>
        </ul>
            <p>
             Each category requires its own technical standards, design knowledge, and construction precision. Our team applies this expertise to create sophisticated spaces that elevate user experience while meeting operational needs.
            </p>
             <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Comprehensive Design-to-Build Process Initial Consultation</h2>
              <p>Your luxury fit out journey begins with a detailed consultation. We explore your preferences, brand identity, lifestyle requirements, and project objectives. This clarity ensures that every design decision aligns with your vision.</p>
              <h3 className="text-md tracking-widest font-conthrax text-[#d4af37]"> Custom Design Plan </h3>
              <p>After understanding your goals, our designers prepare a customized design strategy that includes:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Detailed drawings & layout concepts</li>
                  <li>Fit out specifications</li>
                  <li>Material proposals</li>
                  <li>Mood boards & creative direction</li>
                </ul>
                <p>We prioritize premium materials, modern functionality, and timeless visual appeal.</p>
          </div>
        </div>

        <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
          <div className="w-full lg:w-2/3 space-y-4">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
             Facade & Exterior Design
            </h2>
            <p className="text-sm sm:text-base">
             At RadyInterior, we believe that true luxury begins the moment someone sees your property. A wellde signed exterior sets the tone for the entire space, reflecting the same level of elegance, craftsmanship, and sophistication found inside. Our facade and exterior design services focus on selecting premium materials, architectural elements, lighting, and finishes that enhance curb appeal and create a powerful first impression. <br /><br />
             Whether it’s a luxury villa, commercial building, or high end retail space, we ensure your exterior design seamlessly matches your interior aesthetic resulting in a cohesive, visually striking property that stands out across Dubai and the UAE.
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
         
       <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax  text-[#d4af37]">
              Material Selection
            </h2>
            <p className="text-sm sm:text-base mt-2">
              Luxury spaces demand exceptional materials. Our team guides you through selecting:
            </p>


             <ul className="list-disc pl-5 space-y-2">
              <li> High grade natural stones</li>
              <li>Custom finishes</li>
              <li>Premium woods</li>
              <li>Signature lighting</li>
              <li>Contemporary metals & bespoke elements</li>
             </ul>

          <p className="mt-2">We ensure every detail inside and outside reflects the sophistication your property deserves.</p>
        </div>

        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-conthrax py-12 text-[#d4af37]">
           Transforming Spaces with Precision
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-6 font-play">
              
              <p>
                Our luxury fit out service combines beauty with purpose. Every corner, surface, and fixture is designed to enhance:
              </p>
               <ul className="list-disc pl-5 space-y-2">
              <li> Daily comfort</li>
              <li>Visual harmony</li>
              <li>Long term durability</li>
              <li>Space efficiency</li>
              </ul>
              <p>Whether it’s a peaceful home or a dynamic commercial venue, we create interiors that feel inviting, purposeful, and refined. </p>
             <h2 className="text-sm sm:text-xl md:text-xl font-bold tracking-widest py-2 text-[#d4af37]">Summary</h2>
              <p>A luxury fit out is essential for transforming a property into an extraordinary environment. At RadyInterior, we deliver bespoke luxury fit outs using advanced design, premium materials, and high precision execution. From concept to completion, we ensure your space becomes a one of a kind masterpiece elegant, functional, and built around your lifestyle RadyInterior turns ideas into exceptional interiors that truly stand out.</p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
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