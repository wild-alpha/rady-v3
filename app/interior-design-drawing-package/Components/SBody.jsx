"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

// Updated Data Arrays based on Drawing Package content
const designImages = [
  "/images/technical-drawing-floor-plan.jpg",
  "/images/interior-elevation-detail.jpg",
  "/images/mep-coordination-drawing.jpg",
];

const galleryImages = [
  {
    src: "/images/project-drawing-1.webp",
    link: "/technical-design-services",
    title: "DETAILED FLOOR PLANS",
  },
  {
    src: "/images/project-drawing-2.webp",
    link: "/bespoke-joinery-details",
    title: "CUSTOM JOINERY SPECS",
  },
  {
    src: "/images/project-drawing-3.webp",
    link: "/lighting-electrical-plans",
    title: "ELECTRICAL & LIGHTING",
  },
];

const drawingSteps = [
  {
    id: "01",
    title: "Transforming Vision into Implementable Plans",
    desc: "Interior design drawings are more than technical documents they are the blueprint that guides accurate execution. Our architects and technical designers use advanced CAD tools to produce highly detailed, scaled drawings covering layouts, elevations, sections, MEP coordination points, material specifications, and finishing details. These drawings allow clients to understand exactly how their space will function and flow. Clear visual communication reduces ambiguity, supports informed decision making, and ensures that every element from furniture placement to lighting integration aligns with the project’s goals. By establishing all details upfront, we create a smooth pathway for contractors and suppliers, minimizing delays, avoiding costly revisions, and ensuring the final built environment precisely matches the approved design.",
    img: "/images/floor-plan-step.webp",
  },
  {
    id: "02",
    title: "A Comprehensive Course of Action for Success",
    desc: "At RadyInterior, our drawing package acts as a complete technical roadmap that guides every stage of the project. Each drawing is crafted with meticulous detail, illustrating spatial planning, material finishes, joinery elements, lighting layouts, fixtures, and custom furniture. This level of accuracy ensures the entire design intent is translated correctly from concept to construction. It also streamlines coordination between designers, contractors, and suppliers reducing delays, eliminating guesswork, and preventing miscommunication throughout the build phase. By documenting every element clearly, we ensure a smooth transition from design development to on site execution, resulting in reliable, high quality project delivery.",
    img: "/images/elevation-step.webp",
  },
  {
    id: "03",
    title: "Excellence You Can See and Feel",
    desc: "Our interior design drawing package reflects more than technical aptitude it embodies craftsmanship, dedication, and meticulous planning. Every line, detail, and annotation is prepared to ensure your project is executed with precision. Experience how professional, well structured drawings can transform ideas into superior results. With RadyInterior, your project is supported by thorough documentation designed for excellence at every step.",
    img: "/images/joinery-step.webp",
  },
];

const faqs = [
  {
    question: "1. What is an interior design drawing package?",
    answer: "An interior design drawing package is a set of technical drawings and documentation—plans, elevations, sections, and details—used to guide fit-out, construction, and implementation.",
  },
  {
    question: "2. Why do I need a detailed drawing package?",
    answer: "It serves as a blueprint that guides accurate execution, minimizes delays, avoids costly revisions, and ensures the final built environment matches the approved design.",
  },
  {
    question: "3. What is included in your drawing package?",
    answer: "Our package includes floor plans, elevations, sections, joinery details, material schedules, furniture layouts, and lighting & electrical plans.",
  },
  {
    question: "4. Can you work with my preferred contractor using your drawings?",
    answer: "Yes, our drawings are produced to international technical standards, making them easy for any professional contractor or supplier to follow precisely.",
  },
  {
    question: "5. Do you update drawings during the project if something changes?",
    answer: "Yes, we maintain coordination throughout the build phase to ensure any necessary technical adjustments are documented for seamless on-site execution.",
  },
];

const SBody = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="bg-[#000000] text-[#ffffff]">
      {/* Section 1: Hero & Intro */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 font-sans">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2 flex flex-col justify-start">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-widest py-2 text-[#d4af37] uppercase">
                Interior Design Drawing Package
              </h1>

              <div className="text-sm sm:text-base leading-7 mb-4 space-y-4">
                <p>
                  At RadyInterior, precision and clarity form the backbone of every <a href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline">interior design project</a>  . Our Interior Design Drawing Package is a critical phase where concepts are transformed into detailed, actionable plans ensuring your design vision becomes a fully executable reality.
                </p>
                <p>
                  Interior design drawings are more than technical documents; they are the blueprint that guides accurate execution. Our architects and technical designers use advanced CAD tools to produce highly detailed, scaled drawings covering layouts, elevations, sections, MEP coordination points, material specifications, and finishing details.
                </p>
              </div>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit uppercase tracking-wider">
                Precision. Clarity. Execution.
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37] uppercase">
                Technical Roadmap to Success
              </h2>
              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/drawing-package-cover.webp"
                    alt="Watch our Technical Process"
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
                    src="https://www.youtube.com/embed/F1tjU-4YMmg?autoplay=1"
                    title="Interior Drawing Package Video"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Technical Breakdown */}
      <section className="py-10 px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {drawingSteps.map((step) => (
            <div key={step.id} className="bg-[#141517] p-6 rounded-lg border border-[#8c6b1f]/20">
              <span className="text-4xl font-conthrax text-[#8c6b1f]/30">{step.id}</span>
              <h3 className="text-lg font-bold text-[#d4af37] my-3">{step.title}</h3>
              <p className="text-sm font-play leading-6">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xl font-conthrax uppercase text-[#d4af37]">A Comprehensive Course of Action</h3>
          <p className="text-black text-sm sm:text-base font-semibold px-4">
            Our drawing package acts as a complete technical roadmap that guides every stage of the project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
            <a href="https://wa.me/971508181824" className="px-6 py-3 bg-[#d4af37] text-black font-play text-sm rounded hover:bg-[#f0c95a] transition">
              Discuss Your Project
            </a>
            <Link href="/contact-us" className="px-6 py-3 bg-[#8c6b1f] text-white font-play text-sm rounded hover:bg-[#d4af37] hover:text-black transition">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Detailed Specifications */}
      <section className="px-6 py-10 sm:px-10 md:px-16 lg:px-28 xl:px-40">
       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-16">
  <div className="space-y-6 font-play">
    <h2 className="text-xl sm:text-3xl font-conthrax text-[#d4af37] mb-4">
      Detailed Technical Specifications
    </h2>
    <div className="leading-7 space-y-4">
      <p>
        Our technical package includes a full set of architectural and interior documents, such as:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
        <li><strong>Floor Plans</strong> – clear layouts and zone planning</li>
        <li><strong>Elevations</strong> – vertical dimensions and wall detailing</li>
        <li><strong>Sections</strong> – technical breakdowns of structural and interior elements</li>
        <li><strong>Joinery Details</strong> – bespoke carpentry instructions</li>
        <li><strong>Material Schedules</strong> – finishes, textures, and color codes</li>
        <li><strong>Furniture Layouts</strong> – accurate spacing and functional design</li>
        <li><strong>Lighting & Electrical Plans</strong> – placement, circuits, and mood lighting</li>
      </ul>
      <p>
        These comprehensive documents ensure that mood and functionality are perfectly balanced across every project.
      </p>
    </div>
  </div>
  <div className="rounded-lg overflow-hidden shadow-2xl border border-[#8c6b1f]">
    <Image 
      src="/images/modern-villa-living-room-design-dubai.jpg" 
      alt="Technical Drawing Example" 
      width={600} 
      height={400} 
      className="w-full h-auto" 
    />
  </div>
</div>

        <div className="max-w-7xl mx-auto py-12 border-t border-[#8c6b1f]/20">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-[#d4af37] font-conthrax text-xl uppercase">
                Development of Trust and Confidence
              </h3>
              <p className="text-sm font-play leading-7">
                Our interior design drawing package is more than technical documents—it is a transparent communication tool. We ensure every drawing explains how your space will look, function, and feel, giving you full visibility before execution begins.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-[#d4af37] font-conthrax text-xl uppercase">
                Building Lasting Relationships
              </h3>
              <p className="text-sm font-play leading-7">
                Every project is an opportunity to build long-term trust. We take a client-first approach, responding with thoughtful <a href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline">design solutions</a> that reflect your unique needs, lifestyle, and brand identity.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-16 bg-[#141517] rounded-lg p-6 sm:p-10 border border-[#8c6b1f]/30">
          <h2 className="text-center text-2xl font-conthrax mb-8 text-[#d4af37]">FAQs – Drawing Package</h2>
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <details key={index} className="group border-b border-gray-700 py-4">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-play font-semibold text-[#d4af37]">{item.question}</span>
                  <span className="text-[#d4af37] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm font-play text-gray-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default SBody;