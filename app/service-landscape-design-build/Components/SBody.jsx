"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay, FaCheckCircle } from "react-icons/fa"; // Fixed: FaCheckCircle added here

const designImages = [
  "/images/vservice1.webp",
  "/images/vservice2.webp",
  "/images/vservice3.webp",
];

const textImage = {
  src: "/images/vservice1.webp",
  link: "/villa-damac-hills-5-bedroom",
  title: "Landscape Excellence",
};

const galleryImages = [
  { src: "/images/vservice2.webp", link: "/classic-villa-interior-design", title: "LUXURY GARDEN DESIGN" },
  { src: "/images/vservice3.webp", link: "/villa-lantana", title: "MODERN POOL LANDSCAPE" },
  { src: "/images/vservice1.webp", link: "/villa-khawaneej", title: "VILLA EXTERIOR DESIGN" },
  { src: "/images/vservice1.webp", link: "/emirates-hills-villa", title: "EMIRATES HILLS LANDSCAPE" },
  { src: "/images/vservice2.webp", link: "/mbr-city-villa", title: "MBR CITY OUTDOORS" },
  { src: "/images/vservice3.webp", link: "/palm-jumeirah-villa", title: "PALM JUMEIRAH GARDENS" },
];

const landscapeSteps = [
  {
    id: "01",
    title: "Consultation & Site Analysis",
    desc: "Every project begins with an in depth consultation to understand your vision, lifestyle, and functional needs. We conduct a full site study, including sun patterns, soil, and climate considerations.",
    img: "/images/mission.webp",
  },
  {
    id: "02",
    title: "Concept Development",
    desc: "We create initial layout plans including softscape, hardscape, and water features. The goal is to match your home’s design theme and enhance outdoor usability.",
    img: "/images/material.webp",
  },
  {
    id: "03",
    title: "Design Refinement",
    desc: "We present the initial concept and make revisions until the design perfectly aligns with your needs, ensuring practicality and climate resilient plant selection.",
    img: "/images/customized.webp",
  },
  {
    id: "04",
    title: "Construction Planning",
    desc: "Detailed construction drawings, irrigation layouts, lighting plans, and material specifications are prepared alongside regulatory compliance checks.",
    img: "/images/mission.webp",
  },
  {
    id: "05",
    title: "Construction & Installation",
    desc: "Our skilled team executes the design including excavation, hardscape installation, softscape planting, and feature construction (pergolas, decks, etc.).",
    img: "/images/material.webp",
  },
  {
    id: "06",
    title: "Handover & Management",
    desc: "After quality control, we conduct a final walkthrough and provide maintenance guidelines, plant care instructions, and system details.",
    img: "/images/customized.webp",
  },
];

const faqs = [
  {
    question: "1. What is included in your landscape design and build service?",
    answer: "Our service includes planning and constructing hardscape (patios, pergolas), softscape (trees, shrubs), water features (fountains, ponds), outdoor lighting, and technical elements like irrigation and drainage systems.",
  },
  {
    question: "2. Do you design landscapes for villas only?",
    answer: "No, we specialize in creating outdoor environments for villas, private homes, commercial properties, and hospitality projects across the UAE.",
  },
  {
    question: "3. Can you design low-maintenance landscapes for UAE climate?",
    answer: "Yes, we apply a UAE optimized workflow to ensure durability and aesthetic appeal using climate-resilient plants and efficient irrigation systems tailored to the region's unique demands.",
  },
  {
    question: "4. Do you provide maintenance after the landscape is built?",
    answer: "We provide maintenance guidelines and plant care instructions upon handover. Ongoing maintenance services can be discussed based on the specific project scope.",
  },
];

const detailedWorkflow = [
  {
    title: "1. Consultation & Site Analysis",
    points: ["Sun and shade patterns", "Soil and irrigation conditions", "Existing vegetation", "Climate considerations", "Architectural alignment"],
    footer: "This analysis helps us plan outdoor spaces suited to UAE environmental demands."
  },
  {
    title: "2. Concept Development",
    points: ["Conceptual layout plans", "Softscape & hardscape selection", "Water feature placements", "Outdoor living zones", "Mood boards & material palettes"],
    footer: "The goal is to match your home’s design theme and enhance outdoor usability."
  },
  {
    title: "3. Design Refinement & Client Approval",
    points: ["Practicality check", "Visual balance", "Climate resilient plant selection", "Budget alignment"],
    footer: "Your feedback shapes the final blueprint."
  },
  {
    title: "4. Construction Planning",
    points: ["Structural details", "Material selection", "Irrigation & Lighting layout", "Permits & compliance"],
  },
  {
    title: "5. Construction & Installation",
    points: ["Excavation & preparation", "Hardscape & Softscape setup", "Drainage installation", "Feature construction (Pergolas, etc.)"],
  },
  {
    title: "6. Quality Control & Site Management",
    points: ["Quality craftsmanship", "Timely progress", "Team coordination", "Client communication"],
  },
  {
    title: "7. Project Completion & Handover",
    points: ["Maintenance guidelines", "Plant care instructions", "System details (Irrigation/Lighting)"],
    footer: "Your outdoor space is then officially handed over ready to enjoy."
  }
];

const SBody = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="bg-[#000000] text-[#ffffff]">
      {/* Section 1: Hero */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 font-sans">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2 flex flex-col justify-start">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-widest py-2 text-[#d4af37] uppercase">
                Landscape Design & Build Services in the UAE
              </h1>

              <p className="text-sm sm:text-base leading-7 mb-4">
                Landscape design at RadyInterior is the art and science of transforming outdoor areas into functional, aesthetic, and harmonious spaces. Our landscape design and build services create seamless extensions of your interiors, ensuring a smooth connection between indoor comfort and outdoor beauty.
                <br /><br />
                As one of the leading <a href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline">landscape designers in the UAE</a> , we specialize in creating outdoor environments for villas, private homes, commercial properties, and hospitality projects designed to complement your architecture, lifestyle, and the region’s unique climate. </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit uppercase">
                UAE Climate Optimized Design
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37] uppercase">
                Transforming Outdoor Spaces
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image src="/images/villa-cover.webp" alt="Landscape Design" width={1280} height={720} className="object-cover w-full h-full" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm transition group-hover:scale-110">
                      <FaPlay className="text-white text-xl sm:text-2xl ml-1" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full aspect-video border-4 border-[#8c6b1f] rounded-lg overflow-hidden">
                  <iframe className="w-full h-full" src="https://www.youtube.com/embed/F1tjU-4YMmg?autoplay=1" frameBorder="0" allowFullScreen></iframe>
                </div>
              )}

              <Link href="/contact-us" className="border border-[#8c6b1f] text-[#d4af37] text-xs sm:text-base font-play px-6 py-2 mt-6 uppercase rounded hover:bg-[#8c6b1f] hover:text-white transition-all">
                GET A FREE QUOTE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Definitions */}
      <section className="py-10 px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="lg:max-w-[80%] mx-auto bg-[#141517] p-8 rounded-lg border border-[#8c6b1f]/30 mb-12">
           <h2 className="text-xl font-conthrax text-[#d4af37] mb-6">What Is Landscape Design?</h2>
           <p className="font-play leading-7 mb-4"> <a href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline">Landscape design</a> refers to the planning, designing, and constructing of outdoor spaces. It integrates:</p>
           <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base font-play">
              <li>• <strong>Hardscape elements:</strong> Pathways, patios, pergolas, decks</li>
              <li>• <strong>Softscape elements:</strong> Trees, plants, lawns, shrubs</li>
              <li>• <strong>Water features:</strong> Fountains, ponds, cascades</li>
              <li>• <strong>Technical elements:</strong> Irrigation, drainage, zoning</li>
           </ul><br/>
           <p className="font-play leading-7 mb-4">At <a href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline">RadyInterior</a> , we follow a holistic design philosophy ensuring that your outdoor space visually aligns with your architecture and supports a seamless indoor outdoor lifestyle.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {designImages.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg shadow-xl">
              <Image src={src} alt="Landscape Service" width={600} height={600} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>

        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xs sm:text-xl font-conthrax uppercase text-[#d4af37]">Ready to Build Your Dream Garden?</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
            <a href="https://wa.me/971508181824" className="px-6 py-3 bg-[#d4af37] text-black font-play text-sm rounded hover:bg-[#f0c95a] transition uppercase">WhatsApp Us</a>
            <a href="mailto:info@radyinterior.ae" className="px-6 py-3 bg-[#8c6b1f] text-white font-play text-sm rounded hover:bg-[#d4af37] transition uppercase">Email Us</a>
          </div>
        </div>
      </section>

      {/* --- Section: Professional Workflow --- */}
      <section className="py-16 px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 bg-[#0a0a0a]">
        <div className="mb-12">
          <h2 className="text-2xl font-conthrax text-[#d4af37] mb-2 uppercase">Professional Workflow</h2>
          <p className="text-gray-400 font-play">A structured approach to ensure durability and aesthetic appeal.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {detailedWorkflow.map((item, idx) => (
            <div key={idx} className="border-l-2 border-[#d4af37] pl-6 py-2">
              <h3 className="text-[#d4af37] font-bold text-lg mb-4 uppercase">{item.title}</h3>
              <ul className="space-y-2 mb-4">
                {item.points.map((p, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <FaCheckCircle className="text-[#8c6b1f] text-[10px]" /> {p}
                  </li>
                ))}
              </ul>
              {item.footer && <p className="text-xs italic text-[#8c6b1f]">{item.footer}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="px-6 py-10 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="lg:max-w-[80%] mx-auto bg-[#141517] p-6 sm:p-10 rounded shadow mb-12">
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37] text-center mb-8">
            Why Choose RadyInterior for Landscape Design?
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 font-play text-sm sm:text-base">
            <li className="flex items-start gap-2"><span>✔</span> UAE climate optimized outdoor design</li>
            <li className="flex items-start gap-2"><span>✔</span> Full design build capabilities under one team</li>
            <li className="flex items-start gap-2"><span>✔</span> Personalized landscaping aligned with your architectural theme</li>
            <li className="flex items-start gap-2"><span>✔</span> High quality, durable materials</li>
            <li className="flex items-start gap-2"><span>✔</span> Expertise in villa landscaping, residential gardens, commercial outdoor areas, and <a href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline">luxury feature designs</a> </li>
            <li className="flex items-start gap-2"><span>✔</span> Skilled craftsmen and project managers</li>
            <li className="flex items-start gap-2"><span>✔</span> Seamless indoor outdoor visual connection</li>
          </ul>
        </div>
{/* Gallery */}
        <div className="mt-20">
          <h2 className="text-center text-xl font-conthrax mb-10 text-[#d4af37] uppercase">Our Design Works</h2>
          <div className="lg:max-w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {galleryImages.map(({ src, link, title }, i) => (
              <Link href={link} key={i} className="group block relative overflow-hidden rounded shadow border border-white/5">
                <Image src={src} alt={title} width={400} height={400} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xs font-conthrax text-center uppercase px-2">{title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        
      </section>
    
        {/* FAQs */}
        <div className="max-w-4xl mx-auto mt-20 mb-10 bg-[#141517] rounded-lg shadow-xl p-6 sm:p-10 border border-[#8c6b1f]/20">
          <h2 className="text-center text-2xl font-conthrax mb-8 text-[#d4af37]">Landscape Design FAQs</h2>
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <details key={index} className="group border-b border-gray-800 py-4">
                <summary className="flex items-center justify-between cursor-pointer list-none font-play font-semibold text-[#8c6b1f]">
                  <span>{item.question}</span>
                  <span className="text-[#d4af37] text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm font-play text-gray-400 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
        <div className="mt-20 text-center border-t border-white/10 pt-10">
          <h2 className="text-xl font-conthrax text-[#d4af37] mb-2 uppercase">Contact Us</h2>
          <p className="text-2xl font-play tracking-widest text-white">+971 50 818 1824</p>
        </div>
</section>
        
  );
};

export default SBody;