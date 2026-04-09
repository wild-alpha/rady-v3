"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

// Updated Data Arrays for Project Management
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

const managementSteps = [
  {
    id: "01",
    title: "1. Initiation — Understanding Your Vision Clearly",
    desc: (
      <div className="space-y-2">
        <p>Every successful project begins with clarity. During the initiation stage, we define the project scope, understand your expectations, and gather detailed insights about your needs, lifestyle, and aesthetic preferences. This includes:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Understanding your design goals</li>
          <li>Reviewing functional requirements</li>
          <li>Discussing budget expectations</li>
          <li>Evaluating site conditions</li>
        </ul>
        <p>This information forms the foundation upon which the entire project is built.</p>
      </div>
    ),
  },
  {
    id: "02",
    title: "2. Planning — Building a Detailed & Realistic Project Plan",
    desc: (
      <div className="space-y-2">
        <p>The planning stage transforms your ideas into a structured plan. Here we prepare:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Detailed cost estimates</li>
          <li>Budget allocations</li>
          <li>Material specifications</li>
          <li>Timelines and milestones</li>
          <li>Layout and design documentation</li>
        </ul>
        <p>This stage eliminates guesswork and prevents unexpected costs, delays, or changes later in the project.</p>
      </div>
    ),
  },
  {
    id: "03",
    title: "3. Execution — Coordinated Implementation & Quality Delivery",
    desc: (
      <div className="space-y-2">
        <p>During the execution stage, our team oversees every aspect of construction and installation. This includes:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Coordinating with suppliers and contractors</li>
          <li>Managing material procurement and delivery</li>
          <li>Ensuring seamless on-site operations</li>
          <li>Maintaining transparent communication through progress reports</li>
          <li>Addressing issues quickly before they turn into delays</li>
        </ul>
        <p>Our goal is to maintain efficiency while preserving design integrity.</p>
      </div>
    ),
  },
];

const faqs = [
  {
    question: "1. What is interior design project management?",
    answer: "Interior design project management oversees the full project lifecycle—from initiation and planning to execution, monitoring, and closure—to ensure the design is delivered on time, on budget, and to the agreed quality.",
  },
  {
    question: "2. What responsibilities do you handle as project managers?",
    answer: "We handle defining project scope, budget allocation, material procurement, on-site operation management, progress reporting, and final quality inspections to ensure absolute alignment with your vision.",
  },
  {
    question: "3. Do you manage both design and fit-out phases?",
    answer: "Yes, as one of Dubai’s leading interior design and fit out companies, we manage the entire spectrum from initial conceptual design to final execution and handover.",
  },
  {
    question: "4. How do you keep clients informed during the project?",
    answer: "We maintain transparent communication through regular progress reports and collaborative interaction, ensuring you are aware of every milestone and site operation.",
  },
  {
    question: "5. Can you manage projects in other emirates, not just Dubai?",
    answer: "Absolutely. RadyInterior manages projects across Sharjah, Dubai, and all other Emirates in the UAE, maintaining the same high standard of precision and quality.",
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
                RadyInterior’s Project Management Process
              </h1>

              <div className="text-sm sm:text-base leading-7 mb-4 space-y-4">
                <p>
                  At RadyInterior, every interior design project is managed with a structured, proven approach to ensure precision, quality, and flawless delivery. As one of Dubai’s <a href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline">leading interior design and fit out companies</a>, we follow a comprehensive five stage project management system initiation, planning, execution, monitoring, and closure to transform ideas into exceptional, fully realized spaces tailored to your vision.
                </p>
                <p>
                  Whether it’s a luxury villa, commercial office, hospitality venue, or branded retail space, our project management framework ensures your project remains aligned with your goals at every step.
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
                    alt="Watch our Management Process"
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

        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xl font-conthrax uppercase text-[#d4af37]">Beyond the Standard Process — What Makes Us Different</h3>
          <p className="text-black text-sm sm:text-base font-semibold px-4 max-w-4xl mx-auto">
            At RadyInterior, project management is not just about timelines and supervision it’s about delivering excellence without compromise.
          </p>
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

      {/* Section 3: Monitoring, Closure & Details */}
      <section className="px-6 py-10 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start mb-16">
          <div className="space-y-6 font-play">
            <h2 className="text-xl sm:text-3xl font-conthrax text-[#d4af37]">
              4. Monitoring — Quality Control at Every Step
            </h2>
            <div className="leading-7 space-y-4">
              <p>Quality is central to RadyInterior’s <a href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline">project management</a>  approach. Throughout the monitoring phase, we:</p>
              <ul className="list-disc ml-5 space-y-2">
                <li>Evaluate workmanship and installation quality</li>
                <li>Check performance against benchmarks</li>
                <li>Identify potential issues early</li>
                <li>Ensure compliance with design documentation</li>
              </ul>
              <p>This continuous supervision ensures that the final outcome matches the approved design precisely.</p>
            </div>
          </div>
          <div className="space-y-6 font-play">
            <h2 className="text-xl sm:text-3xl font-conthrax text-[#d4af37]">
              5. Closure — Final Review & Successful Handover
            </h2>
            <div className="leading-7 space-y-4">
              <p>The closure stage confirms the successful completion of your project. This includes:</p>
              <ul className="list-disc ml-5 space-y-2">
                <li>Final inspections</li>
                <li>Client walkthrough and approval</li>
                <li>Delivery of all project documentation</li>
                <li>Ensuring every detail meets or exceeds expectations</li>
              </ul>
              <p>We ensure a smooth transition from project completion to your full enjoyment of the new space.</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-12 border-t border-[#8c6b1f]/20">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-[#d4af37] font-conthrax text-xl uppercase">
                Beyond the Standard Process — What Makes Us Different
              </h3>
              <p className="text-sm font-play leading-7">
               <a href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline">At RadyInterior</a> , project management is not just about timelines and supervision it’s about delivering excellence without compromise.</p>
              <p className="text-sm font-play leading-7">
                Our team stays updated with the latest trends, materials, and technologies, offering expert guidance to help you make the best decisions. We provide:
              </p>
              <ul className="list-disc ml-5 text-sm font-play space-y-1">
                <li>Transparent communication</li>
                <li>Collaborative design interaction</li>
                <li>Professional guidance at every stage</li>
                <li>A client-first approach with complete accountability</li>
              </ul>
              <p className="text-sm font-play mt-4">
                This ensures that your project is not only executed flawlessly but also reflects your identity and long term vision.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-[#d4af37] font-conthrax text-xl uppercase">
                A True Partnership in Design
              </h3>
              <p className="text-sm font-play leading-7">
                Every project represents an opportunity to build a long-lasting relationship with our clients. At RadyInterior, we believe in a true partnership where your vision is nurtured and realized through our technical expertise and dedicated project management.
              </p>
            </div>
          </div>
        </div>

       

        {/* Gallery/Design Works */}
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