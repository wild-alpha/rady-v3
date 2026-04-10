"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

// Updated Data Arrays based on Furnishing & Styling content
const designImages = [
  "/images/luxury-villa-interior-design-dubai.jpg",
  "/images/contemporary-villa-bedroom-interior-dubai.jpg",
  "/images/modern-villa-living-room-design-dubai.jpg",
];

const galleryImages = [
  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "PALM JUMEIRAH VILLA",
  },
  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "EMIRATES HILLS VILLA",
  },
  {
    src: "/images/vservice1.webp",
    link: "/emirates-hills-villa",
    title: "DISTRICT ONE MBR VILLA",
  },
  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "DUBAI HILLS ESTATE VILLA",
  },
  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "AL BARARI VILLA",
  },
];

const furnishingSteps = [
  {
    id: "01",
    title: "Curated Furniture Selection for Every Style",
    desc: "With deep knowledge of global  furniture trends, materials, and craftsmanship, we curate a wide variety of furnishing options to match different budgets and stylistic preferences. Whether you prefer modern simplicity, classic elegance, or an eclectic blend, we source or design pieces that perfectly complement your interior.",
    img: "/images/3d-eval.webp",
  },
  {
    id: "02",
    title: "Custom Made Furniture Tailored to Your Space",
    desc: "When ready made furniture doesn’t fully meet your needs, RadyInterior offers complete customization. From dimensions and materials to finishes and colors, we design bespoke furniture that fits your space with precision. Our skilled artisans bring these designs to life with exceptional craftsmanship ensuring every customized piece is beautiful, durable, and functional.",
    img: "/images/3d-collab.webp",
  },
  {
    id: "03",
    title: "Balanced Design: Function Meets Visual Appeal",
    desc: "Our philosophy emphasizes harmony between aesthetics and functionality. Every furnishing decision considers ergonomics, practical usage, layout, and storage requirements. This ensures each piece contributes to a space that is visually cohesive and highly efficient without sacrificing comfort or flow.",
    img: "/images/3d-reality.webp",
  },
];

const faqs = [
  {
    question: "1. What does your furnishing and styling service include?",
    answer: "We handle furniture selection, custom pieces, fabrics, décor, artwork, accessories, and layout styling to complete the look and feel of your interior.",
  },
  {
    question: "2. Can you work with my existing furniture?",
    answer: "Yes, we can integrate your existing pieces into a new styling concept, ensuring they complement the updated design and overall ambiance of the space.",
  },
  {
    question: "3. Do you offer custom-made furniture?",
    answer: "Absolutely. We offer complete customization, from dimensions and materials to finishes and colors, ensuring every piece fits your space and vision perfectly.",
  },
  {
    question: "4. Is this service available for both homes and offices?",
    answer: "Yes, our furnishing and interior styling services are tailored for residential, corporate, and commercial environments alike.",
  },
  {
    question: "5. Can you work within a specific budget for furnishing?",
    answer: "Yes, we curate options and materials that align with different budget requirements while maintaining the high quality and aesthetic standards RadyInterior is known for.",
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
              <h2 className="text-sm sm:text-xl md:text-xl font-bold tracking-widest py-2 text-[#d4af37]">
                Furnishing & Styling in Dubai
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                At RadyInterior, we believe that furnishing and styling are what truly complete a space. Every home, office, and commercial environment is unique, so our approach is tailored to reflect each client’s personality, lifestyle, and spatial needs.<br /><br />
                Our furnishing and interior styling services help transform spaces into elegant, functional, and comfortable environments. From furniture selection to <a href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline"> bespoke pieces</a>  and accessories, our team ensures every element aligns with your vision, your daily needs, and the unique character of your space.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                Leading Interior Styling in UAE
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/villa-cover.webp"
                    alt="Watch our Styling process"
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
                    title="Furnishing & Styling Video"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Details */}
      <section className="py-10 px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40">
       
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {furnishingSteps.map((step) => (
            <div key={step.id} className="bg-[#141517] p-6 rounded-lg border border-[#8c6b1f]/20">
              <span className="text-4xl font-conthrax text-[#8c6b1f]/30">{step.id}</span>
              <h3 className="text-lg font-bold text-[#d4af37] my-3">{step.title}</h3>
              <p className="text-sm font-play leading-6">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xl font-conthrax uppercase text-[#d4af37]">Experience Exceptional Craftsmanship</h3>
          <p className="text-black text-sm sm:text-base font-semibold px-4">
            Our highly skilled artisans bring these pieces alive, meaning they become more than beauty but functionality too.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
            <a href="https://wa.me/971508181824" className="px-6 py-3 bg-[#d4af37] text-black font-play text-sm rounded hover:bg-[#f0c95a] transition">
              Request via WhatsApp
            </a>
            <a href="mailto:info@radyinterior.ae" className="px-6 py-3 bg-[#8c6b1f] text-white font-play text-sm rounded hover:bg-[#d4af37] hover:text-black transition">
              Email Us Today
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: Benefits & Detailed Content */}
      <section className="px-6 py-10 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 font-play">
             <h2 className="text-center text-xl sm:text-3xl font-conthrax text-[#d4af37] mb-8">
          Personalized Interior Styling, Curated for You
        </h2><p className="leading-7">
             We believe a successful interior begins with understanding the people who live or work within it. Through detailed consultations, we evaluate your preferences, lifestyle, color inclinations, and functional requirements. Our designers collaborate closely with you to create a personalized furnishing and styling concept that enhances the ambiance, improves comfort, and reflects your signature aesthetic whether modern, minimal, classic, or luxury inspired.</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl border border-[#8c6b1f]">
            <Image src="/images/modern-villa-living-room-design-dubai.jpg" alt="Furnishing Design" width={600} height={400} className="w-full h-auto" />
          </div>
        </div>

      <div className="max-w-7xl mx-auto py-12 border-t border-[#8c6b1f]/20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Box 1 */}
          <div className="space-y-4">
            <h3 className="text-[#d4af37] font-conthrax text-xl uppercase">
              The Small Details That Transform a Space
            </h3>
            <p className="text-sm font-play leading-7">
              At RadyInterior, attention to detail defines our approach. From selecting fabrics, textures, and accessories to ensuring flawless installation, we refine every element to elevate your interior. It’s these thoughtful touches that turn ordinary rooms into extraordinary experiences.
            </p>
          </div>

          {/* Box 2 */}
          <div className="space-y-4">
            <h3 className="text-[#d4af37] font-conthrax text-xl uppercase">
              Exceeding Expectations
            </h3>
            <p className="text-sm font-play leading-7">
              
              Our client focused approach drives us to consistently exceed expectations. We take pride in crafting environments that not only meet your design goals but elevate them even further.
            
            </p>
            <p className="text-sm font-play leading-7">
              Whether you’re redesigning an entire villa or refreshing a single room, trust RadyInterior one of the <a href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline"> UAE’s leading interior design companies </a>  to deliver furnishing and styling solutions that leave a lasting impression.
            </p>
          </div>

          {/* Box 3 - Full Width */}
          <div className="space-y-4 md:col-span-2 md:max-w-3xl md:mx-auto md:text-center">
           
            
          </div>
        </div>
      </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-16 bg-[#141517] rounded-lg p-6 sm:p-10 border border-[#8c6b1f]/30">
          <h2 className="text-center text-2xl font-conthrax mb-8 text-[#d4af37]">FAQs – Furnishing & Styling</h2>
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