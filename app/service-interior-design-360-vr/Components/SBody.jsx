"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

// Data Arrays based on the new VR content
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

const vrSteps = [
  {
    id: "01",
    title: "Benefits of VR Interior Design",
    desc: (
      <div className="space-y-2">
        <p><strong>Walk Through Your Space in Real Time:</strong> Clients can virtually walk through their homes, villas, offices, or commercial properties, providing immediate and accurate feedback.</p>
        <p><strong>Clearer Communication & Collaboration:</strong> VR eliminates misunderstandings by showing precisely how a design will look, feel, and function enhancing teamwork between clients, designers, engineers, and contractors.</p>
        <p><strong>Higher Client Satisfaction:</strong> When clients understand the design upfront, revisions, delays, and costly changes are dramatically reduced.</p>
      </div>
    ),
  },
  {
    id: "02",
    title: "Preparation",
    desc: (
      <div className="space-y-2">
        <p>We begin by collecting all essential details: Accurate measurements Architectural drawings & floor plans, Style references and client preferences, Material and color options. Our design team then builds a complete virtual model representing the future space.</p>
      </div>
    ),
  },
  {
    id: "03",
    title: "VR Execution",
    desc: (
      <div className="space-y-2">
        <p>Once the model is ready, clients experience their design using VR headsets or desktop based 360° rendering. They can:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Navigate freely through the space</li>
          <li>Inspect furniture selections</li>
          <li>Evaluate lighting effects</li>
          <li>Understand material combinations</li>
          <li>Request adjustments instantly</li>
        </ul>
        <p>This deep immersion ensures every choice aligns with their taste and functional needs.</p>
      </div>
    ),
  },
];

const faqs = [
  {
    question: "1. What is Virtual Reality in Interior Design?",
    answer: "Virtual Reality in interior design enables clients to see, feel, and navigate their spaces in a fully simulated environment. Rather than relying on sketches or static renderings, VR makes every detail materials, lighting, furniture, and decor visible in real time.",
  },
  {
    question: "2. Why does VR 360° Matter?",
    answer: "360° interior design views offer a comprehensive, panoramic perspective that enhances both the design and construction phases, leading to improved communication, increased client satisfaction, and streamlined project execution.",
  },
  {
    question: "3. How does it help with execution?",
    answer: "360° views serve as a technical guide for engineers, contractors, and project managers. They accurately communicate design intent, resulting in more efficient construction and seamless translation of the virtual design into the physical environment.",
  },
  {
    question: "4. What can be evaluated through 360° VR views?",
    answer: "These views help evaluate spatial layout, lighting quality, color balance, material placement, and the flow between rooms to minimize costly on-site corrections.",
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
                Interior Design 360° VR by RadyInterior
              </h1>

              <div className="text-sm sm:text-base leading-7 mb-4 space-y-4">

                <p>
                  <strong>What is Virtual Reality in Interior Design?</strong> Virtual Reality in interior design enables clients to see, feel, and navigate their spaces in a fully simulated environment. Rather than relying on sketches or static renderings, VR makes every detail—materials, lighting, furniture, and decor—visible in real time.
                </p>
                <div className="space-y-2">
                  <p>Through VR, clients can:</p>
                  <ul className="list-disc ml-5 space-y-1 text-gray-300">
                    <li>Visualize their entire space before construction begins.</li>
                    <li>Move through rooms, examine furniture selections, and test different design options.</li>
                    <li>Explore layouts and aesthetics in a realistic, immersive 3D environment.</li>
                  </ul>
                  <p>This level of clarity removes guesswork and ensures the final result reflects exactly what the client expects.</p>
                  </div>
                <p>
                  Virtual Reality (VR) is reshaping modern interior design, allowing clients to step inside their future spaces long before construction begins. At RadyInterior, we combine advanced VR technology with our interior design expertise to offer an immersive, interactive, and highly accurate design preview experience. This approach improves decision making, speeds up approvals, and elevates design clarity for <Link href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline"> clients across the UAE</Link>.
                </p>
              
              </div>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit uppercase">
                Step into the Future
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/vr-cover.webp"
                    alt="Interior Design 360 VR"
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
                    title="VR Design Experience"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Transforming Design Experience */}
      <section className="py-10 px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <h2 className="text-center text-xl sm:text-3xl font-conthrax mb-12 text-[#d4af37] uppercase">
          Transforming Design Experiences with VR
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {vrSteps.map((step) => (
            <div key={step.id} className="bg-[#141517] p-6 rounded-lg border border-[#8c6b1f]/20">
              <span className="text-4xl font-conthrax text-[#8c6b1f]/30">{step.id}</span>
              <h3 className="text-lg font-bold text-[#d4af37] my-3">{step.title}</h3>
              <div className="text-sm font-play leading-6">{step.desc}</div>
            </div>
          ))}
        </div>

        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xl font-conthrax uppercase text-[#d4af37]">Why VR 360° Matters</h3>
          <div className="text-black text-sm sm:text-base font-semibold px-4 max-w-4xl mx-auto space-y-2">
            <p>360° interior design views offer a comprehensive, panoramic perspective that enhances both the design and construction phases.</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
            <a href="https://wa.me/971508181824" className="px-6 py-3 bg-[#d4af37] text-black font-play text-sm rounded hover:bg-[#f0c95a] transition">
              Call +971 50 818 1824
            </a>
            <a href="/contact-us" className="px-6 py-3 bg-[#8c6b1f] text-white font-play text-sm rounded hover:bg-[#d4af37] hover:text-black transition">
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: Key Advantages */}
      <section className="px-6 py-10 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start mb-16">
          <div className="space-y-6 font-play">
            <h2 className="text-xl sm:text-3xl font-conthrax text-[#d4af37]">
              Key Advantages of 360° Views
            </h2>
            <div className="leading-7 space-y-4">
              <p>Every detail is captured with high precision realism, from furniture textures to lighting shadows.
Clients enjoy a captivating, true to life experience of their future interiors.
Design intent becomes unmistakably clear for contractors and builders, reducing interpretation errors.
360° VR views help evaluate:</p>
              <ul className="list-disc ml-5 space-y-2">
                <li>Spatial layout</li>
                <li>Lighting quality</li>
                <li>Color balance</li>
                <li>Material placement</li>
                <li>Flow between rooms</li>
              </ul>
               <p>This clarity ensures smooth project execution and minimizes costly on site corrections.</p>
            </div>
          </div>
          <div className="space-y-6 font-play">
            <h2 className="text-xl sm:text-3xl font-conthrax text-[#d4af37]">
             360° Views for Perfect Execution
            </h2>
            <div className="leading-7 space-y-4">
              <p>Beyond visualization, 360° views serve as a technical guide for engineers, contractors, and project managers. They accurately communicate design intent, resulting in:</p>
              <ul className="list-disc ml-5 space-y-2">
                <li>More efficient construction</li>
                <li>Enhanced coordination</li>
                <li>Reduced material waste</li>
                <li>Seamless translation into physical environment</li>
              </ul>
              <p>By using VR and 360° technology, RadyInterior bridges the gap between concept and completion.</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-12 border-t border-[#8c6b1f]/20">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-[#d4af37] font-conthrax text-xl uppercase">
                Experience the Future of Interior Design
              </h3>
              <p className="text-sm font-play leading-7">
                With RadyInterior’s VR and 360° solutions, clients step into a fully realized version of their dream space before a single material is installed. Our designers refine every detail based on client feedback, ensuring unmatched accuracy and satisfaction.
              </p>
              <p className="text-sm font-play leading-7">
                RadyInterior continues to lead innovation in Dubai’s luxury interior design sector by integrating VR technology into every design stage. Experience the future of interior design, where imagination becomes reality with absolute precision.
              </p>
           
              
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-20">
          <h2 className="text-center text-xl sm:text-2xl font-conthrax mb-10 text-[#d4af37]">OUR VR DESIGN WORKS</h2>
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
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-16 bg-[#141517] rounded-lg p-6 sm:p-10 border border-[#8c6b1f]/30">
          <h2 className="text-center text-2xl font-conthrax mb-8 text-[#d4af37]">FAQs</h2>
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