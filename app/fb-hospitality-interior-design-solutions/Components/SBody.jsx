"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay, FaPlus, FaMinus } from "react-icons/fa";

const designImages = [
  "/images/luxury-restaurant-design-dubai.jpg",
  "/images/modern-cafe-interior-uae.jpg",
  "/images/fb-ambiance-design-dubai.jpg",
];

const galleryImages = [
  {
    src: "/images/vservice2.webp",
    link: "/restaurant-design-portfolio",
    title: "SIGNATURE BISTRO DUBAI",
  },
  {
    src: "/images/vservice2.webp",
    link: "/cafe-interior-projects",
    title: "URBAN ROASTERY SHARJAH",
  },
  {
    src: "/images/vservice1.webp",
    link: "/fine-dining-concepts",
    title: "JUMEIRAH LOUNGE",
  },
];

const fbFaqs = [
  {
    question: "Creating Vibrant Environments",
    answer: "In the world of food and hospitality, the setting shapes every guest’s experience. At RadyInterior, we redefine F&B Interior Design by shaping environments that reach beyond ordinary looks. As one of the leading Interior Design Companies in Dubai, we focus on more than just style. Every choice of lighting, color, and material comes together to create a space that sparks feeling and creates memories. We design with the senses in mind, knowing that texture, sound, and atmosphere each play a part. A well-designed space can turn any meal or hotel stay into something guests will remember. With every Dubai interior design project, we help your venue stand out while making every moment unforgettable.",
    
  },
  {
    question: "Great Attention to Detail",
    answer: "At an interior design company in city like Dubai, we treat every stage of F&B Interior Design Dubai with special care. From the first spark of an idea to the final touches, our focus on detail sets us apart in the Dubai Interior Design scene. Every feature matters to us: lighting, furniture, materials, layout, even how sound moves through the space. We plan each piece of the project to lift the guest experience. We see design as a whole picture built from many small parts. Every color, texture, and accent helps create the mood and energy of the place. With each project, our goal is to make visitors feel welcome and comfortable, surrounded by an atmosphere that fits the vision. We bring together elegance and function, making sure nothing is overlooked. By bringing your ideas to life with careful attention, we shape spaces that leave a lasting impression.",
  },
  {
    question: "Refocusing on Developing Incredible Moments",
    answer: "Choosing RadyInterior goes beyond picking a best interior design company in Dubai. It’s about creating something unforgettable. Our F&B Interior Design in Dubai brings spaces to life, turning restaurants and cafes into places that guests remember long after they leave. We focus on every detail, blending style and comfort so each space feels inviting and special. RadyInterior’s team uses years of designing experience to shape interiors that stand out. Every project starts with your vision, then grows into a setting where people return, not just for the food but for the feeling. Our work leaves a lasting impression, combining elegance with a sense of belonging. With a strong reputation as an interior design company in Dubai businesses trust us, we shape environments that build lasting connections. Every design reflects care, passion, and a desire to make every visit unique. RadyInterior’s commitment to quality means that every space tells its own story, inviting guests to return again and again.",
  },
];

const SBody = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  // State to track which accordion is open
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#000000] text-[#ffffff]">
      {/* Section 1: Introduction */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 font-sans">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2 flex flex-col justify-start">
              <h2 className="text-sm sm:text-xl md:text-xl font-bold tracking-widest py-2 text-[#d4af37] uppercase">
                F&B Interior Design Dubai
              </h2>

              <div className="text-sm sm:text-base leading-7 mb-4 space-y-4">
                <p>
                 At Rady Interior, we put every guest at the center of their experience, creating designs that set the stage for unforgettable memories. Our F&B Interior Design brings a sense of place to each project, making every restaurant feel true to its brand and customers. We listen closely to what our clients value and pay attention to the details that matter most. As a leading <Link href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline">Interior Design </Link> Company in Dubai, we shape environments that both look great and feel right for diners.</p>
                <p>
                 Each element is chosen to reflect the character of your business, while also meeting the needs of your visitors. We shape spaces that invite people in and build connections, leaving a lasting impression with every visit. With our experience in Restaurant and F&B Interior Design Dubai, we focus on what matters: comfort, beauty, and a clear sense of identity. The result is a space where every detail helps tell your story, one guest at a time.</p>
              </div>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit uppercase tracking-wider">
                Exquisite F&B Solutions
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
                    alt="F&B Interior Design Presentation"
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
                    src="https://www.youtube.com/embed/F1tjU-4YMmg?autoplay=1&rel=0"
                    title="F&B Interior Design Dubai"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              <Link
                href="/contact-us"
                className="border border-[#8c6b1f] text-[#d4af37] text-xs sm:text-base font-play px-6 py-2 mt-6 w-fit uppercase rounded hover:bg-[#8c6b1f] hover:text-white transition-all duration-200"
              >
                REQUEST A CONSULTATION
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Visual Showcase */}
      <section className="py-10 px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          F&B Portfolio Showcase
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {designImages.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg border border-[#8c6b1f]/20">
              <Image
                src={src}
                alt={`F&B Design project ${index + 1}`}
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xs sm:text-xl font-semibold uppercase text-[#d4af37]">
            Work with Dubai’s Best
          </h3>
          <p className="text-black text-sm sm:text-base font-semibold">
            Partner with Rady Interior for premium restaurant and cafe designs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
            <a
              href="https://wa.me/971508181824"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#d4af37] text-black font-play text-sm rounded w-full sm:w-auto text-center hover:bg-[#f0c95a] transition"
            >
              WhatsApp Consultation
            </a>

            <a
              href="mailto:info@radyinterior.ae"
              className="px-6 py-3 bg-[#8c6b1f] text-white font-play text-sm rounded w-full sm:w-auto text-center hover:bg-[#d4af37] hover:text-black transition"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: Accordion Style Details (Screenshot Match) */}
      <section className="px-6 py-10 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="max-w-5xl mx-auto border-t border-white/20">
          {fbFaqs.map((item, index) => (
            <div key={index} className="border-b border-white/20">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center py-5 text-left focus:outline-none group"
              >
                <span className="text-[#d4af37] mr-4 transition-transform duration-300">
                  {openIndex === index ? <FaMinus size={14} /> : <FaPlus size={14} />}
                </span>
                <span className="text-[#d4af37] font-bold text-sm sm:text-lg uppercase tracking-wider">
                  {item.question}
                </span>
              </button>
              
              {/* Animated Content Div */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-8 px-8 text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mt-16 mb-6 uppercase text-[#d4af37]">
          RECENT F&B PROJECTS
        </h2>
        <div className="lg:max-w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {galleryImages.map(({ src, link, title }, i) => (
            <Link
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
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
};

export default SBody;