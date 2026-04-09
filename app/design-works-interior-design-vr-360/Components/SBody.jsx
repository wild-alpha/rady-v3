"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const galleryImages = [
  { src: "/images/vservice2.webp", title: "Al Khawaneej Villa" },
  { src: "/images/vservice2.webp", title: "Al Aweer Private Client" },
  { src: "/images/vservice2.webp", title: "Al Hamdeya" },
];

const faqs = [
  {
    question: "1. What is 360 VR interior design?",
    answer: "360 VR interior design lets you explore your future space in an immersive virtual environment, viewing it from every angle before work starts.",
  },
  {
    question: "2. What is the difference between 3D visualization and VR?",
    answer: "While 3D visualization provides static images, VR 360° offers an immersive experience where you can see the entire space from every angle, giving a full understanding of layout and lighting.",
  },
  {
    question: "3. How does 360 VR help decision-making?",
    answer: "Virtually walking through a space before construction begins allows clients to make well-informed decisions and to ensure smooth project execution.",
  },
  {
    question: "4. Is VR available for both residential and commercial projects?",
    answer: "Yes, this technology fosters better collaboration for any project type, leading to a more successful and personalized outcome.",
  },
];

const SBody = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="bg-[#000000] text-[#ffffff] font-sans">
      {/* VR Content Section */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-widest mb-6 text-[#d4af37] uppercase">
              Interior Design VR 360°
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-6 text-gray-200">
              RadyInterior’s use of <strong>interior design VR 360-degree views</strong> is one of its most distinctive features. It allows clients to experience their projects in a completely immersive way. These panoramic views allow clients to see the entire space from every angle, giving them a full understanding of its layout, lighting effects, and <a href="https://radyinterior.ae/" className="text-[#d4af37] ">
  design elements.
</a> 
              <br /><br />
              This detailed perspective allows clients to assess the flow of space, functionality, and aesthetic appeal. Virtually walking through a space before construction begins allows clients to make well-informed decisions, and to ensure smooth project execution. This advanced technology also allows for real-time adjustments and feedback, which fosters better collaboration between our <a href="https://radyinterior.ae/" className="text-[#d4af37]">
  <strong>design team</strong>
</a>  and clients, ultimately leading a more successful and personalized outcome.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            {!videoLoaded ? (
              <div 
                className="relative w-full aspect-video bg-black cursor-pointer group rounded-xl border-4 border-[#8c6b1f] overflow-hidden"
                onClick={() => setVideoLoaded(true)}
              >
                <Image src="/images/villa-cover.webp" alt="VR Preview" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm transition group-hover:scale-110">
                    <FaPlay className="text-white text-xl ml-1" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full aspect-video border-4 border-[#8c6b1f] rounded-xl overflow-hidden">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/F1tjU-4YMmg?autoplay=1" allowFullScreen></iframe>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="py-12 px-6 sm:px-40">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          {galleryImages.map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-lg border border-gray-800 aspect-square">
              <Image src={img.src} alt={img.title} fill className="object-cover transition-transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-[#d4af37] font-bold text-center px-4 uppercase tracking-tighter">{img.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section with Accordion/Details style */}
        <div className="max-w-4xl mx-auto mt-16 mb-4 bg-[#141517] rounded-lg shadow p-6 sm:p-10">
          <h2 className="text-center text-2xl sm:text-3xl font-bold mb-4 text-[#d4af37] uppercase tracking-widest">
            FAQs
          </h2>
          <p className="text-sm sm:text-base mb-6 text-center text-gray-400">
            Find quick answers to common questions about our 360 VR interior design services.
          </p>

          <div className="space-y-3">
            {faqs.map((item, index) => (
              <details
                key={index}
                className="group border-b border-gray-800 py-3"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-semibold text-sm sm:text-base text-[#8c6b1f] text-left">
                    {item.question}
                  </span>
                  <span className="ml-3 text-[#d4af37] text-xl transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm sm:text-base text-gray-300 leading-relaxed">
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