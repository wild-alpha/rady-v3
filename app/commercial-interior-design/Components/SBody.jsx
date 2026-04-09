"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

// Updated Commercial Design Images
const designImages = [
  "/images/commercial-office-design-dubai.jpg",
  "/images/retail-store-interior-sharjah.jpg",
  "/images/modern-restaurant-design-uae.jpg",
];

const textImage = {
  src: "/images/vservice1.webp",
  link: "/commercial-projects-portfolio",
  title: "Modern Business Hub Dubai",
};

const galleryImages = [
  {
    src: "/images/vservice2.webp",
    link: "/office-interior-design",
    title: "OFFICE INTERIORS",
  },
  {
    src: "/images/vservice2.webp",
    link: "/retail-interior-design",
    title: "RETAIL STORES",
  },
  {
    src: "/images/vservice2.webp",
    link: "/restaurant-interior-design",
    title: "RESTAURANTS",
  },
  {
    src: "/images/vservice1.webp",
    link: "/clinic-interior-design",
    title: "MEDICAL CLINICS",
  },
  {
    src: "/images/vservice2.webp",
    link: "/beauty-salon-design",
    title: "BEAUTY SALONS",
  },
  {
    src: "/images/vservice2.webp",
    link: "/gym-interior-design",
    title: "FITNESS CENTERS",
  },
];

const faqs = [
  {
    question: "What is the focus of commercial interior design in the UAE?",
    answer: "The focus is on creating spaces where businesses can expand, making employees and customers feel comfortable and welcome through unique, functional, and attractive designs.",
  },
  {
    question: "How does RadyInterior handle different commercial sectors?",
    answer: "We specialize in understanding distinct needs—from collaborative office layouts to customer-attracting retail displays and calming clinic environments.",
  },
  {
    question: "Do you offer sustainable and smart design solutions?",
    answer: "Yes, we integrate smart systems for lighting and climate control, and prioritize eco-friendly materials to support business sustainability goals.",
  },
];

const SBody = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="bg-[#000000] text-[#ffffff]">
      {/* Section 1: Introduction */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 font-sans">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2 flex flex-col justify-start">
              <h2 className="text-sm sm:text-xl md:text-xl font-bold tracking-widest py-2 text-[#d4af37] uppercase">
                Commercial Interior Design in Dubai, Sharjah & UAE
              </h2>

              <div className="text-sm sm:text-base leading-7 mb-4 space-y-4">
                <p>
                  Commercial interior design in Dubai, Sharjah and across the UAE focuses on creating spaces where businesses can expand, making employees and customers feel comfortable and welcome. Whether it’s an office, a store, or a restaurant, the design starts by understanding what makes each business unique and then translating that into a space that is both functional and attractive.</p>
                <p>
                RadyInterior a best commercial <Link href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline"> interior design company</Link>  in Dubai, Sharjah and across the UAE specialize in understanding the distinct needs of each business to create environments that work practically and beautifully. Our commercial interior design Dubai process carefully considers how the space will be used daily, planning layouts that improve efficiency and comfort.</p>

                <p>
              In an office, this might mean combining open areas for collaboration with quiet spaces for focused work but in a retail store, the goal is to arrange displays that attract customers and enhance their shopping experience. Selecting the right materials and furniture is crucial. As a leading <Link href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline"> commercial interior design</Link> company in Dubai, we choose durable items that can withstand daily use while maintaining a stylish appearance.</p>
             <p>
              Comfort is always a top priority, whether it’s for employees working long hours or customers enjoying their visit. Lighting is also essential, as it sets the mood and draws attention to key areas. Technology plays an increasingly important role, with many commercial spaces now using smart systems to control lighting, temperature, and more, making the environment both efficient and comfortable. Sustainability is also gaining importance, with  <Link href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline"> more businesses opting</Link>  for eco-friendly materials and practices. </p>
              </div>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit uppercase tracking-widest">
                Elite Commercial Solutions
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37] uppercase">
                Functional & Attractive Spaces
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/commercial-cover.webp"
                    alt="Commercial Design Presentation"
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
                    title="Commercial Design Video"
                    frameBorder="0"
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

      {/* Section 2: Services Showcase */}
      <section className="py-10 px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          Commercial Design Excellence
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {designImages.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded shadow-lg">
              <Image
                src={src}
                alt={`commercial service ${index + 1}`}
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xs sm:text-xl font-conthrax uppercase text-[#d4af37]">
            Empower Your Business Environment
          </h3>
          <p className="text-black text-sm sm:text-base font-play">
            Leading Interior Design Expertise in Dubai & Sharjah
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
            <a
              href="https://wa.me/971586023677"
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
              Email Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: Deep Content & Specialized Services */}
      <section className="px-6 py-10 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="lg:max-w-[80%] mx-auto bg-[#141517] p-6 sm:p-10 rounded shadow mb-12">
          <h2 className="text-center text-xl font-conthrax mb-8 text-[#d4af37] uppercase">
            Discover Our Commercial Interior Design Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left font-play">
            <div className="space-y-2">
              <h3 className="text-[#d4af37] font-bold">Office Interior Design</h3>
              <p className="text-sm">Office interior design crafts functional, stylish spaces that boost productivity and impress clients, blending comfort and practicality to fit business needs.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-[#d4af37] font-bold">Retail Interior Design</h3>
              <p className="text-sm">Retail interior design creates an inviting shopping experience with stylish displays, cozy layouts, and thoughtful details that enhance customer engagement.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-[#d4af37] font-bold">Restaurant Interior Design</h3>
              <p className="text-sm">Restaurant interior design creates a warm, inviting atmosphere with stylish decor and cozy seating, enhancing the dining experience for guests.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-[#d4af37] font-bold">Clinic Interior Design</h3>
              <p className="text-sm">Clinic interior design creates a calming, efficient environment with soothing colors, comfortable seating, and thoughtful layouts to ease patient experiences.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-[#d4af37] font-bold">Beauty Saloon Interior Design</h3>
              <p className="text-sm">Every beauty salon needs a welcoming and stylish space. It affects how customers feel and the overall vibe.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-[#d4af37] font-bold">Gym Interior Design</h3>
              <p className="text-sm">At RadyInterior, we see gyms as places that inspire energy, focus, and motivation.</p>
            </div>
          </div>
        </div>

       

        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-8 uppercase text-[#d4af37]">
          OUR COMMERCIAL PROJECTS PORTFOLIO
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-16">
          {galleryImages.map(({ src, link, title }, i) => (
            <Link href={link} key={i} className="group block relative overflow-hidden rounded shadow-md border border-white/5">
              <Image
                src={src}
                alt={title}
                width={400}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-xs font-conthrax text-center uppercase tracking-tighter">{title}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* FAQs Section */}
       
      </section>
    </section>
  );
};

export default SBody;