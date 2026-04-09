"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

// Data Arrays updated with the new content
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

const managementSteps = [
  {
    id: "01",
    title: "Strategic Planning & Organized Execution",
    desc: (
      <div className="space-y-2">
        <p>Our interior fit out project management begins with detailed preparation. Before any work starts, our team conducts a comprehensive analysis of the design, site conditions, timeline, and resource requirements. We define:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Clear timelines</li>
          <li>Allocated budgets</li>
          <li>Required manpower & materials</li>
          <li>Coordination frameworks</li>
        </ul>
        <p>This proactive approach eliminates confusion, reduces delays, and ensures a smooth workflow from concept to completion.</p>
      </div>
    ),
  },
  {
    id: "02",
    title: "Coordination & Expert Oversight",
    desc: (
      <div className="space-y-2">
        <p>During execution, our project managers oversee every stage with precision. We coordinate continuously with designers, suppliers, contractors, and stakeholders to keep the project aligned with the approved plan. Our close monitoring ensures:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Timely communication</li>
          <li>Immediate issue resolution</li>
          <li>Consistent quality control</li>
          <li>Zero disruptions to workflow</li>
        </ul>
        <p>This disciplined oversight keeps every project on schedule and within scope.</p>
      </div>
    ),
  },
  {
    id: "03",
    title: "Design Team Support & Technical Guidance",
    desc: (
      <div className="space-y-2">
        <p>A key part of our <a href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline">project management service</a>  is supporting the design team. We help optimize technical decisions by:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Suggesting alternative materials or finishes</li>
          <li>Reviewing engineering value</li>
          <li>Evaluating constructability</li>
          <li>Managing design impact on timelines and cost</li>
        </ul>
        <p>This ensures the final design is practical, functional, and aligned with both the client’s expectations and project requirements.</p>
      </div>
    ),
  },
];

const faqs = [
  {
    question: "1. Why is project management important in fit-out?",
    answer: "Fit-out projects involve many trades and dependencies; strong project management ensures coordination, quality control, and on-time delivery.",
  },
  {
    question: "2. What do your fit-out project managers handle?",
    answer: "We handle the entire spectrum including cost control, resource optimization, coordination with designers/contractors, and quality assurance to ensure results that exceed expectations.",
  },
  {
    question: "3. How do you manage risks during the project?",
    answer: "We identify and address potential risks early through site analysis, implementing preventive strategies, risk mitigation plans, and continuous monitoring.",
  },
  {
    question: "4. Do you provide regular progress reports?",
    answer: "Yes, we maintain transparent communication and disciplined oversight through timely communication and consistent quality control throughout the project lifecycle.",
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
                Project Management in Interior Fit Out – RadyInterior
              </h1>

              <div className="text-sm sm:text-base leading-7 mb-4 space-y-4">
                <p>
                  At RadyInterior, effective project management is the backbone of every successful <a href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline">interior fit out project</a> . Whether the project is large, complex, residential, or commercial, our structured management process ensures accuracy, efficiency, and seamless execution across UAE.
                </p>
              </div>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit uppercase">
                Excellence Without Compromise
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
                    alt="Interior Fit Out Project Management"
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
                    title="Project Management Video"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Core Steps */}
      <section className="py-10 px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {managementSteps.map((step) => (
            <div key={step.id} className="bg-[#141517] p-6 rounded-lg border border-[#8c6b1f]/20">
              <span className="text-4xl font-conthrax text-[#8c6b1f]/30">{step.id}</span>
              <h3 className="text-lg font-bold text-[#d4af37] my-3">{step.title}</h3>
              <div className="text-sm font-play leading-6">{step.desc}</div>
            </div>
          ))}
        </div>

        {/* This div structure is kept exactly as original, content updated with "Cost Control" text */}
        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xl font-conthrax uppercase text-[#d4af37]">Cost Control & Resource Optimization</h3>
          <div className="text-black text-sm sm:text-base font-semibold px-4 max-w-4xl mx-auto space-y-2">
            <p>Managing costs effectively is essential in interior fit out. Our project managers track expenses closely and identify cost saving opportunities without compromising quality. We ensure:</p>
            <p className="italic">Budget discipline • Efficient use of materials • Accurate forecasting • Transparent reporting</p>
            <p>This balanced approach keeps your fit out project financially efficient from start to finish.</p>
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

      {/* Section 3: Risk Management & Quality Assurance */}
      <section className="px-6 py-10 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start mb-16">
          <div className="space-y-6 font-play">
            <h2 className="text-xl sm:text-3xl font-conthrax text-[#d4af37]">
              Risk Management & Preventive Planning
            </h2>
            <div className="leading-7 space-y-4">
              <p>Every <a href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline">interior fit out project</a>  carries potential risks. At RadyInterior, we identify and address them early through collaborative discussions and site analysis. We implement:</p>
              <ul className="list-disc ml-5 space-y-2">
                <li>Preventive strategies</li>
                <li>Risk mitigation plans</li>
                <li>Backup solutions</li>
                <li>Continuous monitoring</li>
              </ul>
              <p>This approach minimizes interruptions and ensures consistent project progress.</p>
            </div>
          </div>
          <div className="space-y-6 font-play">
            <h2 className="text-xl sm:text-3xl font-conthrax text-[#d4af37]">
              Quality Assurance That Sets Us Apart
            </h2>
            <div className="leading-7 space-y-4">
              <p>Quality is central to our fit out project management. We perform regular inspections and enforce strict quality benchmarks at every phase. Our checks cover:</p>
              <ul className="list-disc ml-5 space-y-2">
                <li>Workmanship</li>
                <li>Material standards</li>
                <li>Technical accuracy</li>
                <li>Finishing & detailing</li>
              </ul>
              <p>The result is a refined, high quality interior fit out that stands the test of time.</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-12 border-t border-[#8c6b1f]/20">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-[#d4af37] font-conthrax text-xl uppercase">
                Client Collaboration & Transparent Communication
              </h3>
              <p className="text-sm font-play leading-7">
                We work hand in hand with every client right from the initial briefing to final handover. Our managers ensure that decisions reflect the client’s style, preferences, and project goals. This collaborative model strengthens trust and guarantees results that exceed expectations.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-[#d4af37] font-conthrax text-xl uppercase">
                Delivering Excellence Through Smart Project Management
              </h3>
              <p className="text-sm font-play leading-7">
                RadyInterior’s systematic project management approach ensures that every fit out project is delivered efficiently, on budget, and to the highest professional standards. With disciplined planning, expert coordination, and an unwavering focus on quality, we turn your vision into a flawlessly executed interior fit out.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-20">
          <h2 className="text-center text-xl sm:text-2xl font-conthrax mb-10 text-[#d4af37]">OUR DESIGN WORKS</h2>
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