"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay, FaCheckCircle } from "react-icons/fa";

const galleryImages = [
  { src: "/images/vservice2.webp", link: "/classic-villa-interior-design", title: "PALM JUMEIRAH VILLA" },
  { src: "/images/vservice2.webp", link: "/classic-villa-interior-design", title: "EMIRATES HILLS VILLA" },
  { src: "/images/vservice1.webp", link: "/emirates-hills-villa", title: "DISTRICT ONE MBR VILLA" },
  { src: "/images/vservice2.webp", link: "/classic-villa-interior-design", title: "DUBAI HILLS ESTATE VILLA" },
  { src: "/images/vservice2.webp", link: "/classic-villa-interior-design", title: "AL BARARI VILLA" },
];

const faqs = [
  {
    question: "1. What is value engineering in interior design?",
    answer: "Value engineering is the process of optimizing design, materials, and methods to achieve the best performance and aesthetic result at the most efficient cost.",
  },
  {
    question: "2. How does value engineering benefit my project?",
    answer: "It enhances functionality while reducing unnecessary expenses. It ensures your project remains functional, visually refined, and budget-efficient by identifying cost-effective alternatives and enhancing workflows.",
  },
  {
    question: "3. Do you compromise quality to reduce costs?",
    answer: "Absolutely not. Our value engineering strategy identifies materials that maintain or exceed performance standards. We eliminate non-essential components without compromising the design integrity or craftsmanship.",
  },
  {
    question: "4. When is the best time to apply value engineering?",
    answer: "The earlier, the better. Applying it during the initial briefing and concept stages allows us to present multiple cost/value options and ensure every decision reflects your budget and aesthetic direction.",
  },
];

const SBody = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="bg-[#000000] text-[#ffffff]">
      {/* Section 1: Hero & Introduction */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 font-sans">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2 flex flex-col justify-start">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-widest py-2 text-[#d4af37] uppercase">
                Value Engineering in RadyInterior
              </h1>
              <div className="text-sm sm:text-base leading-7 mb-4 space-y-4 font-play">
                <p>
                  Value engineering is a core part of our <Link href="/" className="text-[#d4af37] font-bold hover:underline">interior fit out</Link> strategy, ensuring every project achieves maximum functionality, premium quality, and financial efficiency without compromising design integrity.
                </p>
                <p>
                  At RadyInterior, a leading interior design and fit out company in Dubai, we apply value engineering to help clients optimize costs while elevating performance, durability, and aesthetics.
                </p>
              </div>
              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit uppercase">
                Maximum Functionality & Financial Efficiency
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image src="/images/villa-cover.webp" alt="Value Engineering" width={1280} height={720} className="object-cover w-full h-full" />
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
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Balancing Purpose & Cost */}
      <section className="py-10 px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="mx-auto bg-[#141517] p-8 rounded-lg border border-[#8c6b1f]/30 mb-12">
          <h2 className="text-xl font-conthrax text-[#d4af37] mb-6 uppercase">Balancing Purpose, Performance & Cost</h2>
          <p className="font-play leading-7 mb-6">
            The foundation of value engineering lies in enhancing functionality while reducing unnecessary expenses. Our team conducts a detailed evaluation of every design element, studying materials, construction methods, technical requirements, and lifecycle costs. Through this process, we:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base font-play">
            <li className="flex gap-2 items-start"><FaCheckCircle className="text-[#d4af37] mt-1 shrink-0" /> <span>Identify cost effective alternative materials that maintain or exceed performance standards.</span></li>
            <li className="flex gap-2 items-start"><FaCheckCircle className="text-[#d4af37] mt-1 shrink-0" /> <span>Simplify complex processes to increase efficiency.</span></li>
            <li className="flex gap-2 items-start"><FaCheckCircle className="text-[#d4af37] mt-1 shrink-0" /> <span>Eliminate repetitive or non essential components.</span></li>
            <li className="flex gap-2 items-start"><FaCheckCircle className="text-[#d4af37] mt-1 shrink-0" /> <span>Enhance workflows without compromising quality.</span></li>
          </ul>
        </div>

        {/* Expertise & Market Insight Banner */}
        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-12 text-center">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-xl font-conthrax uppercase text-[#d4af37] mb-4">Powered by Expertise, Innovation & Market Insight</h3>
            <p className="text-black font-play leading-7">
              Our value engineering approach is rooted in industry expertise, understanding of market pricing, and awareness of emerging technologies. We use this insight to make informed, strategic decisions that benefit both design quality and cost.

Using our broad local and international supplier network, we secure:

Better material pricing
Cost effective alternatives
Specialized finishes within budget
Faster procurement timelines
Every recommendation we provide is designed to enhance design performance, reduce costs, and improve long term value.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <a href="https://wa.me/971508181824" className="px-8 py-3 bg-[#d4af37] text-black font-bold rounded hover:bg-[#8c6b1f] hover:text-white transition uppercase">Call +971 50 818 1824</a>
              <Link href="/contact-us" className="px-8 py-3 bg-[#8c6b1f] text-white font-bold rounded hover:bg-[#d4af37] hover:text-black transition uppercase">Get Started Today</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Collaboration & Results */}
      <section className="px-6 py-10 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-conthrax text-[#d4af37] uppercase">A Collaborative, Transparent Process</h2>
            <div className="text-sm sm:text-base leading-7 space-y-4 font-play">
              <p>Successful value engineering requires strong communication. We work closely with clients, contractors, and project teams to ensure decisions align with the overall vision. Our collaboration process includes:</p>
              <ul className="list-disc ml-5 space-y-2 text-gray-300">
                <li>Understanding your project goals and expectations</li>
                <li>Presenting multiple cost/value options</li>
                <li>Reviewing design enhancements together</li>
                <li>Ensuring every decision reflects your budget and aesthetic direction</li>
              </ul>
              <p>This partnership ensures the final result is smarter, more efficient, and more aligned with your objectives.</p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-conthrax text-[#d4af37] uppercase">Unlocking the Full Potential</h2>
            <div className="text-sm sm:text-base leading-7 space-y-4 font-play">
              <p>Value engineering is not just about cost reduction—it is about maximizing the overall project value. We assess each element to ensure it adds purpose and efficiency:</p>
              <ul className="list-disc ml-5 space-y-2 text-gray-300">
                <li>Increase return on investment</li>
                <li>Improve operational efficiency</li>
                <li>Reduce maintenance and lifecycle costs</li>
                <li>Enhance the usability and flexibility of your space</li>
              </ul>
              <p>This level of refinement ensures every project delivers higher value and superior performance.</p>
            </div>
          </div>
        </div>

        {/* Commitment Section */}
        <div className="border-t border-[#8c6b1f]/30 pt-12 text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-xl font-conthrax text-[#d4af37] mb-6 uppercase">Committed to Quality, Innovation & Long Term Results</h2>
          <p className="font-play leading-7 text-gray-300">
            At RadyInterior, we implement value engineering across all our projects—residential, commercial, retail, hospitality, and luxury developments. Our commitment to quality craftsmanship and strategic cost optimization allows us to deliver exceptional outcomes every time.
            <br /><br />
            If you would like to learn how value engineering can benefit your project, our team is ready to guide you ensuring efficiency, clarity, and confidence in every step.
          </p>
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

        {/* FAQs Section */}
        <div className="max-w-4xl mx-auto mt-20 mb-10 bg-[#141517] rounded-lg p-6 sm:p-10 border border-[#8c6b1f]/20">
          <h2 className="text-center text-2xl font-conthrax mb-8 text-[#d4af37] uppercase">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <details key={index} className="group border-b border-gray-800 py-4">
                <summary className="flex items-center justify-between cursor-pointer list-none font-play font-semibold text-[#d4af37]">
                  <span>{item.question}</span>
                  <span className="transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm font-play text-gray-400 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Contact Footer */}
        <div className="mt-20 text-center border-t border-[#8c6b1f]/20 pt-10">
          <h2 className="text-xl font-conthrax text-[#d4af37] uppercase mb-4">Contact Us</h2>
          <p className="text-2xl font-play tracking-widest text-white">+971 50 818 1824</p>
        </div>
      </section>
    </section>
  );
};

export default SBody;