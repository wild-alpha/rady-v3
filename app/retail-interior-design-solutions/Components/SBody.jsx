"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay, FaPlus, FaMinus } from "react-icons/fa";

const designImages = [
  "/images/luxury-retail-design-dubai.jpg",
  "/images/modern-retail-sharjah.jpg",
  "/images/commercial-interior-uae.jpg",
];

const galleryImages = [
  {
    src: "/images/retail-project-1.webp",
    link: "/commercial-retail-design",
    title: "RETAIL HUB DUBAI",
  },
  {
    src: "/images/retail-project-2.webp",
    link: "/boutique-store-design",
    title: "SHARJAH BOUTIQUE",
  },
  {
    src: "/images/retail-project-3.webp",
    link: "/luxury-showroom-design",
    title: "LUXURY SHOWROOM",
  },
];

const fbFaqs = [
  {
    question: "Understanding the Retail Space",
    answer: "Before designing the perfect retail space, it’s crucial to understand what retailers need to empower their businesses and drive success. Each store differs in its brand, target market, and product offerings, hence require different approaches. That is why each client’s vision and objectives are carefully reviewed by our designer team so as not only to have the design match the business’s image but also to support its operational efficiency.",
  },
  {
    question: "Innovative Design Solutions",
    answer: "RadyInterior thinks outside the box when it comes to retail interior design. We marry current designs with practical solutions to make them stand out. We optimize layout, enhance customer flow, and make products stand out, from concept development to final realization. One of our key design strategies is efficient space utilization. We comprehend that many times there are space restrictions at stores; this knowledge helps us creatively maximize even one square foot. This involves clever use of shelving systems, versatile display fixtures, or strategic lighting aimed at emphasizing given products, thus becoming focal points.",
  },
  {
    question: "Enhancing the Customer Experience",
    answer: "RadyInterior has always focused on providing excellent customer experiences through its retail interior design service in Dubai. It does not suffice for well-designed stores to just serve as shopping outlets; rather, they should offer immersive experiences that captivate customers’ attention and hold them spellbound. This calls for creating an inviting atmosphere using color schemes that are thoughtfully done, as well as mood-enhancing lighting aspects such as textures.",
  },
];

const SBody = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
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
              <h1 className="text-sm sm:text-xl md:text-xl font-bold tracking-widest py-2 text-[#d4af37] uppercase">
                Retail Interior Design
              </h1>

              <div className="text-sm sm:text-base leading-7 mb-4 space-y-4">
                <p>
                  Retail Interior Design goes beyond style. It shapes how people feel and act inside a store. Every detail counts, from how shelves are arranged to the warmth of the lighting. At RadyInterior, a trusted <Link href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline">Interior Design</Link> Company in Dubai, we know how to transform a retail space into a place where shoppers feel comfortable and inspired.
                </p>
                <p>
                  Our interior design team pays close attention to what customers want. We use textures, colors, and layouts that reflect each brand’s character. The right Retail Interior Design draws people in and makes them want to stay longer. It helps stores in Dubai stand out and build strong brand loyalty.
                </p>
                <p>
                  With our experience in Retail Interior Design Dubai, we turn ordinary shops into lively, inviting spaces that encourage both browsing and buying. Every project looks fresh but feels familiar to your customers, making every visit memorable and boosting your business.
                </p>
              </div>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit uppercase tracking-wider">
                Captivate. Inspire. Convert.
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/retail-cover.webp"
                    alt="Retail Interior Design Portfolio"
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
                    title="Retail Interior Design Dubai"
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
          Retail Portfolio Showcase
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {designImages.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg border border-[#8c6b1f]/20">
              <Image
                src={src}
                alt={`Retail Design project ${index + 1}`}
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
            Partner with Rady Interior for premium retail interior designs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
            <a
              href="https://wa.me/971588075603"
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

      {/* Section 3: Accordion Style Details */}
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
              
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
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
          RECENT RETAIL PROJECTS
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

        {/* Contact Footer */}
        <div className="mt-20 text-center space-y-4">
          <h2 className="text-xl font-conthrax text-[#d4af37]">CONTACT US</h2>
          <p className="text-lg font-play tracking-widest">+971 50 818 1824</p>
        </div>
      </section>
    </section>
  );
};

export default SBody;