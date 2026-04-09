"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const designImages = [
  "/images/luxury-villa-interior-design-dubai.jpg",
  "/images/contemporary-villa-bedroom-interior-dubai.jpg",
  "/images/modern-villa-living-room-design-dubai.jpg",
];

const textImage = {
  src: "/images/vservice1.webp",
  link: "/conceptual-design-details",
  title: "Conceptual Design",
};

const galleryImages = [
  { src: "/images/vservice2.webp", link: "#", title: "PALM JUMEIRAH VILLA" },
  { src: "/images/vservice2.webp", link: "#", title: "EMIRATES HILLS VILLA" },
  { src: "/images/vservice2.webp", link: "#", title: "PALM JUMEIRAH VILLA" },
  { src: "/images/vservice1.webp", link: "#", title: "DISTRICT ONE MBR VILLA" },
  { src: "/images/vservice2.webp", link: "#", title: "DUBAI HILLS ESTATE VILLA" },
  { src: "/images/vservice2.webp", link: "#", title: "AL BARARI VILLA" },
];

const conceptualSteps = [
  {
    id: "01",
    title: "Understanding Customer Needs",
    desc: "Our process begins with a deep understanding of each clients lifestyle, preferences, and project goals. Through thoughtful discussions and targeted questions, we identify what truly matters.",
    img: "/images/mission.webp",
  },
  {
    id: "02",
    title: "The Strategic Roadmap",
    desc: "These insights are then transformed into a refined conceptual design that acts as a strategic roadmap ensuring every material choice, layout decision, and design detail aligns seamlessly.",
    img: "/images/material.webp",
  },
  {
    id: "03",
    title: "From Vision to Blueprint",
    desc: "We transform your ideas into a clear design blueprint using a mix of traditional mood boards, sketches, and advanced digital tools across Dubai and the UAE.",
    img: "/images/customized.webp",
  },
  {
    id: "04",
    title: "Mood Boards",
    desc: "Mood boards serve as one of the most powerful tools in conceptual design, visually expressing the atmosphere, color palette, textures, and style direction of a space.",
    img: "/images/mission.webp",
  },
  {
    id: "05",
    title: "Sketches",
    desc: "Design sketches illustrate how spaces function, flow, and interact. They help clients understand layout possibilities, furniture placement, and spatial balance.",
    img: "/images/material.webp",
  },
  {
    id: "06",
    title: "Collaborative Design",
    desc: "Our process is built around collaboration. RadyInterior’s designers work closely with clients at every stage, refining ideas and ensuring the evolving concept stays aligned.",
    img: "/images/customized.webp",
  },
];

const faqs = [
  {
    question: "1. What is conceptual interior design?",
    answer: "Conceptual design is the core of every successful interior project. It’s the stage where ideas are shaped into meaningful, functional visions that define the entire space. It blends creativity, purpose, and the unique character of each client’s lifestyle or brand.",
  },
  {
    question: "2. Why is the conceptual design phase important?",
    answer: "We invest time, creativity, and strategic thinking into the conceptual design stage because it lays the groundwork for long term project success. This phase shapes the overall direction, ensuring the final space is loved and appreciated for years to come.",
  },
  {
    question: "3. What does your conceptual design service include?",
    answer: "Our service includes understanding customer needs through thoughtful discussions, creating a strategic roadmap, developing mood boards for visual storytelling, creating functional sketches, and providing a clear design blueprint using advanced digital tools.",
  },
  {
    question: "4. Can I request changes during the conceptual design stage?",
    answer: "Yes. Our conceptual design process is built around collaboration. RadyInterior’s designers work closely with clients at every stage, refining ideas through open communication, feedback, and continuous refinement to meet and elevate expectations.",
  },
  {
    question: "5. Do you provide conceptual design as a standalone service?",
    answer: "As leading conceptual design specialists in Dubai, we provide comprehensive conceptual services that set the foundation for all design and fit out decisions, available for projects across Dubai and the UAE to ensure every space feels intentional.",
  },
];

const SBody = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="bg-[#000000] text-[#ffffff]">
      {/* Header Section */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 font-sans">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2 flex flex-col justify-start">
              <h2 className="text-sm sm:text-xl md:text-xl font-bold tracking-widest py-2 text-[#d4af37]">
                Details About Conceptual Design
              </h2>
              <p className="text-sm sm:text-base leading-7 mb-4">
                Conceptual design is the core of every successful interior project. It’s the stage where ideas are shaped into meaningful, functional visions that define the entire space. At RadyInterior, we believe that exceptional interiors begin with a well crafted concept one that blends creativity, purpose, and the unique character of each client’s lifestyle or brand. Our conceptual design process sets the foundation for all <a href="https://radyinterior.ae/" className="text-[#d4af37] ">
  design and fit out
</a> decisions, ensuring every space feels intentional, expressive, and truly aligned with its users.
              </p>
              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                The Embarkation Point: Understanding Customer Needs
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37]">
                Commitment to Excellence: RadyInterior’s Approach
              </h2>
              {!videoLoaded ? (
                <div className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]" onClick={() => setVideoLoaded(true)}>
                  <Image src="/images/villa-cover.webp" alt="Conceptual Design Video" width={1280} height={720} className="object-cover w-full h-full" />
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
              <Link href="/contact-us" className="border border-[#8c6b1f] text-[#d4af37] text-xs sm:text-base font-play px-6 py-2 mt-6 w-fit uppercase rounded hover:bg-[#8c6b1f] hover:text-white transition-all duration-200">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-10 px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="space-y-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#141517] p-6 rounded-lg">
              <h4 className="text-[#d4af37] font-bold mb-2">Understanding Customer Needs: The Embarkation Point</h4>
              <p className="text-sm">Our process begins with a deep understanding of each clients lifestyle, preferences, and project goals. Through thoughtful discussions and targeted questions, we identify what truly matters. These insights are then transformed into a refined conceptual design that acts as a strategic roadmap ensuring every material choice, layout decision, and design detail aligns seamlessly with the project’s vision and objectives.</p>
            </div>
            <div className="bg-[#141517] p-6 rounded-lg">
              <h4 className="text-[#d4af37] font-bold mb-2">From Vision to Blueprint</h4>
              <p className="text-sm">A strong interior design concept goes beyond visual appeal it brings together functionality, modern technology, and emotional impact to shape a space with purpose. At RadyInterior, we transform your ideas into a clear design blueprint using a mix of traditional mood boards, sketches, and advanced digital tools. This structured conceptual design process helps you visualize your space with clarity, ensuring every detail supports your lifestyle, brand identity, and the overall project vision across Dubai and the UAE.</p>
            </div>
          </div>


          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#141517] p-6 rounded-lg">
              <h4 className="text-[#d4af37] font-bold mb-2">Mood Boards: Visualizing the Design Story</h4>
              <p className="text-sm">Mood boards serve as one of the most powerful tools in conceptual design, visually expressing the atmosphere, color palette, textures, and style direction of a space. They give clients a clear emotional and visual preview of the intended design, helping them form a deeper connection with the proposed concept. Mood boards establish the tone for the entire project, ensuring that every design choice aligns with the desired mood and aesthetic.</p>
            </div>
            <div className="bg-[#141517] p-6 rounded-lg">
              <h4 className="text-[#d4af37] font-bold mb-2">Sketches: Transforming Ideas into Form</h4>
              <p className="text-sm">Design sketches illustrate how spaces function, flow, and interact. They help clients understand layout possibilities, <a href="https://radyinterior.ae/" className="text-[#d4af37]">
  furniture placement
</a> , and spatial balance. As early stage visual maps, sketches convert abstract ideas into structured design directions. This allows us to refine concepts effectively before moving into detailed drawings and execution.</p>
            </div>
          </div>

            <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#141517] p-6 rounded-lg">
              <h4 className="text-[#d4af37] font-bold mb-2">Collaborative Design: A Client-Centered Approach</h4>
              <p className="text-sm">Our conceptual design process is built around collaboration. RadyInterior’s designers work closely with clients at every stage, refining ideas and ensuring the evolving concept stays aligned with their vision. Through open communication, feedback, and continuous refinement, we create designs that not only meet expectations but elevate them delivering thoughtful, functional, and beautifully curated spaces.</p>
            </div>
            <div className="bg-[#141517] p-6 rounded-lg">
              <h4 className="text-[#d4af37] font-bold mb-2">Commitment to Excellence: RadyInterior’s Approach</h4>
              <p className="text-sm">As one of the leading conceptual <a href="https://radyinterior.ae/" className="text-[#d4af37] ">
  design specialists in Dubai
</a> , we are dedicated to creating spaces that are visually stunning, functional, and timeless. Our approach blends creativity with technical precision, ensuring every concept evolves into a beautifully realized interior. At RadyInterior, our goal is to craft designs that leave a lasting impression and create meaningful experiences.</p>
            </div>
          </div>
        </div>

        {/* Design Works Section */}
        <h2 className="text-center text-xl font-bold tracking-widest mt-20 mb-10 uppercase text-[#d4af37]">Our Design Works</h2>
        <div className="lg:max-w-[60%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto mb-10">
          {galleryImages.map(({ src, link, title }, i) => (
            <div key={i} className="group block relative overflow-hidden rounded shadow">
              <Image src={src} alt={title} width={400} height={400} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs font-conthrax text-center px-2">{title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Section */}
        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-16 text-center px-6">
          <h3 className="text-xl font-bold uppercase text-[#d4af37] mb-4">The Foundation for Success: Investing in the Conceptual Phase</h3>
          <p className="text-black max-w-3xl mx-auto mb-8">
            We invest time, creativity, and strategic thinking into the conceptual design stage because it lays the groundwork for long term project success. This phase shapes the overall direction, ensuring the final space is loved and appreciated for years to come. A strong concept is the heart of every interior that truly makes an impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+971508181824" className="px-8 py-3 bg-[#d4af37] text-black font-bold rounded hover:bg-[#8c6b1f] transition uppercase">+971 50 818 1824</a>
            <a href="mailto:info@radyinterior.ae" className="px-8 py-3 bg-[#8c6b1f] text-white font-bold rounded hover:bg-[#d4af37] transition uppercase">Email Us</a>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="max-w-4xl mx-auto mt-20 bg-[#141517] rounded-lg p-6 sm:p-10">
          <h2 className="text-center text-2xl font-conthrax mb-8 text-[#d4af37]">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <details key={index} className="group border-b border-gray-700 py-4">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-bold text-[#d4af37]">{item.question}</span>
                  <span className="text-[#d4af37] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-gray-300 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default SBody;