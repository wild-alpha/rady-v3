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
  link: "/villa-damac-hills-5-bedroom",
  title: "Damac Hills Villa",
};

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
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "PALM JUMEIRAH VILLA",
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
    question: "How long does a villa interior design project in Dubai usually take?",
    answer:
      "The timeline depends on the villa size, scope and level of customization. On average, a full villa interior design and fit out in Dubai can take anywhere from 3 to 9 months from concept to final handover.",
  },
  {
    question: "Do you only work on complete villas, or can you design specific rooms?",
    answer:
      "We work on both complete villas and specific spaces such as living rooms, bedrooms, majlis, kitchens or basements. However, we always ensure that every space remains aligned with the overall villa design language.",
  },
  {
    question: "Can you work with my existing furniture and decor?",
    answer:
      "Yes, if there are certain pieces you love, we can integrate them into the new design. Our team carefully evaluates what can be reused, refinished or reupholstered while still maintaining a premium overall look.",
  },
  {
    question: "What is the typical budget range for villa interior design in Dubai?",
    answer:
      "Budgets vary based on villa size, finishes and brand preferences. During the initial consultation, we discuss your expectations and provide a realistic budget bracket that matches your lifestyle and the level of luxury you want to achieve.",
  },
  {
    question: "Do you handle approvals and coordination with contractors?",
    answer:
      "Yes, our team supports you with technical drawings, authority-related requirements where applicable, and complete coordination with contractors, suppliers and site teams to ensure a smooth and stress-free process.",
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
              <h2 className="text-sm sm:text-xl md:text-xl font-bold tracking-widest py-2 text-[#d4af37] uppercase">
                Living Room Interior Design Dubai, Sharjah
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                Transform your living room into a luxurious haven with{" "}
              
                 Rady Interior
                , the leading living room interior design company in Dubai, UAE. Your living room is the heart of your home where families gather, guests are welcomed, and memories are created. Our expert team of interior designers understands the unique lifestyle and preferences of UAE residents, crafting spaces that perfectly balance comfort, functionality, and stunning aesthetics.
                <br /><br />
                At Rady Interior, we provide the best living room interior design service in Dubai that cater to diverse tastes, from contemporary minimalism to classic Arabic elegance and modern luxury design. Our skilled interior designers in UAE analyze your space’s dimensions and natural light to create optimal   <a href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline">
                 bespoke furniture
                </a>  arrangements that promote flow and functionality while reflecting your personality.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit uppercase tracking-wider">
                Premier Interior Design Dubai
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37] uppercase">
                Experience Professional Living Room Design
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/villa-cover.webp"
                    alt="Living Room Design Presentation"
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
                    title="Living Room Interior Design Portfolio"
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
          Stunning Living Room Aesthetics
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {designImages.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg border border-[#8c6b1f]/20">
              <Image
                src={src}
                alt={`living room service ${index + 1}`}
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
              href="mailto:info@radyinterior.ae"
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
          

          <div className="space-y-4 text-sm sm:text-base font-play text-left leading-relaxed">
            <p>
              Our complete living room transformation includes custom furniture design, strategic color schemes, and premium material selection that complement UAE’s climate. From bespoke sofas and coffee tables to built-in entertainment units, our custom furniture design services in Dubai ensure every piece fits perfectly within your space and style vision. We carefully curate lighting solutions, artwork, cushions, rugs, and decorative elements that add personality and warmth to your living space.
            </p>

            <p>
              What sets Rady Interior apart as a premier  <a href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline">
                 interior design company in Dubai
                </a>  is our local expertise and personalized approach. We understand regional preferences, climate considerations, and cultural sensitivities that influence design decisions. Every project of Dubai living room renovation begins with understanding your lifestyle, preferences, and budget to create truly customized solutions using quality materials that withstand UAE’s climate while maintaining beauty and functionality.
            </p>

            <p>
              Our turnkey home interior design Dubai services handle every aspect from initial consultation to final installation with professional precision. We blend international design trends with local tastes to create environments that feel both globally sophisticated and authentically Emirati. Whether you’re moving into a new villa, apartment, or planning a complete makeover, we transform ordinary living rooms into extraordinary spaces.
            </p>
            
            <p >
              Ready to customize your living space? <a href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline">Contact Rady Interior</a>  today for a consultation and discover how we can transform your living room into a stunning reflection of your lifestyle and taste. Experience the difference that professional interior design makes in creating a home you’ll love for years to come.
            </p>
          </div>
        </div>

        
        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          OUR RECENT INTERIOR PROJECTS
        </h2>
        <div className="lg:max-w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-10">
          {galleryImages.map(({ src, link, title }, i) => (
            <a
              href={link}
              key={i}
              className="group block relative overflow-hidden rounded shadow border border-white/5"
            >
              <Image
                src={src}
                alt={title}
                width={400}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs sm:text-sm font-conthrax text-center uppercase px-2">
                  {title}
                </p>
              </div>
            </a>
          ))}
        </div>

        

      

        {/* FAQ Section kept as per structural request */}
       
      </section>
    </section>
  );
};

export default SBody;