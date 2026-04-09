"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const designImages = [
  "/images/IMG_4433.jpg",
  "/images/IMG_4443.jpg",
  "/images/IMG_4437.jpg",
];

const textImage = {
  src: "/images/IMG_4441.jpg",
  link: "/villa-damac-hills-5-bedroom",
  title: "Damac Hills Villa",
};

const galleryImages = [
  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "CLASSIC VILLA INTERIOR DESIGN",
  },
   {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "CLASSIC VILLA INTERIOR DESIGN",
  },
   {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "CLASSIC VILLA INTERIOR DESIGN",
  },
];


const faqs = [
  {
    question: "What does villa contracting include in Dubai?",
    answer:
      "Villa contracting can include project planning, civil works, structural execution, fit-out, technical coordination, finishing, joinery, MEP works, and final handover depending on the project scope.",
  },
  {
    question: "Do you provide villa contracting for new villas and renovation projects?",
    answer:
      "Yes, we provide villa contracting services for new villa construction, villa extensions, structural upgrades, major villa renovations, and full fit-out projects across Dubai.",
  },
  {
    question: "Do you handle both construction and interior fit-out under villa contracting?",
    answer:
      "Yes, our villa contracting services can cover civil construction, structural coordination, technical works, fit-out execution, finishing, custom joinery, and final delivery depending on project requirements.",
  },
  {
    question: "What affects the cost of villa contracting in Dubai?",
    answer:
      "The cost depends on the villa size, construction scope, structural requirements, material quality, MEP works, finishing level, custom features, joinery details, and the overall complexity of the project.",
  },
  {
    question: "Why choose one contractor for the whole villa project?",
    answer:
      "Working with one contracting team improves coordination, quality control, timeline management, and accountability while reducing the complexity of handling multiple vendors across the project.",
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
              <h2 className="text-sm sm:text-xl md:text-xl font-bold tracking-widest py-2 text-[#d4af37]">
                Professional villa contracting services in Dubai
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                Are you looking for
                <a
                  href="https://radyinterior.ae/"
                  className=" ml-1"
                >
                  villa contracting services in Dubai <span></span>
                </a>
                that combine planning, execution, quality workmanship, and
                complete project coordination. You are at the right place.
                <br />
                With 15+ years of experience in design, fit-out, and project
                delivery,
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                delivers villa contracting solutions that simplify the process
                from technical planning and civil execution to finishing,
                installation, and final handover.
                <br />
                Whether you are building a new villa, upgrading an existing one,
                or managing a full structural and interior transformation, our
                team helps turn your vision into a completed and ready-to-use
                luxury residence. Keep reading to discover how
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                delivers villa contracting services in Dubai tailored to your
                scope, design vision, and construction goals.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                15 Years of Experience
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37]">
                Get Best Villa Contracting Services in Dubai
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/UC_04389.jpg"
                    alt="Watch our company video"
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
                    title="YouTube Shorts Video"
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
      OUR VILLA INTERIOR DESIGN PROJECTS IN DUBAI</h2>
        <div className="lg:max-w-[60%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-10">
          {galleryImages.map(({ src, link, title }, i) => (
            <a
              href={link}
              key={i}
              className="group block relative overflow-hidden rounded shadow"
            >
              <Image
                src={src}
                alt={title}
                width={400}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm sm:text-base font-conthrax text-center">
                  {title}
                </p>
              </div>
            </a>
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
              href="mailto:info@example.com"
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
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
            Why Choose
            <a
              href="https://radyinterior.ae/"
              className="text-[#d4af37] hover:text-[#f0c95a] ml-1"
            >
              Rady Interior Design <span></span>
            </a>
            for Your Villa Contracting in Dubai?
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
            <p>
              With years of experience in design, construction coordination, and
              luxury project execution,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              helps clients in Dubai complete villa projects through a smooth and
              well-managed contracting process.
            </p>

            <p>
              Villa contracting is not only about construction. It is about
              keeping architecture, technical coordination, structural quality,
              finishing, and project timelines aligned under one reliable team.
            </p>

            <p>
              Our process starts by understanding your villa requirements,
              project scope, design intent, technical needs, and expected final
              outcome so we can create a delivery strategy that keeps planning,
              execution, and finishing under control.
            </p>

            <p>
              From new villa construction and extensions to structural works,
              fit-out, technical coordination, and high-end finishing,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              provides villa contracting solutions that balance strong execution,
              practical coordination, and long-term residential value.
              <br />
              <br />
              We carefully manage materials, drawings, civil works, MEP
              coordination, custom joinery, finishes, and installation details so
              every villa project moves forward with consistency and clarity.
              <br />
              <br />
              Our team focuses on accountability, quality control, timeline
              management, and clean execution so the final villa feels polished,
              complete, and ready for comfortable luxury living.
              <br />
              <br />
              When you choose
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              you choose a professional team dedicated to delivering villa
              contracting services in Dubai with reliability, craftsmanship, and
              a complete project mindset.
            </p>
          </div>
        </div>

        <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
          <div className="w-full lg:w-2/3 space-y-4">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Our Dubai Villa Contracting Projects
            </h2>
            <p className="text-sm sm:text-base">
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              works on a wide range of villa contracting projects in Dubai,
              helping clients transform design visions into fully executed and
              ready-to-use residences.
            </p>
            <p className="text-sm sm:text-base">
              Every villa contracting project is planned with attention to
              structural scope, technical requirements, circulation, lifestyle
              needs, finishing quality, and final residential comfort.
            </p>
            <p className="text-sm sm:text-base">
              Clients trust
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              to deliver villa projects that feel coordinated, polished, and
              better managed than working with multiple separate contractors.
            </p>
            <p className="text-sm sm:text-base">
              From structural works to luxury finishing, our work focuses on
              complete execution, consistency, and premium quality suited to
              Dubai’s modern villa standards.
            </p>
          </div>

          <div className="w-full lg:w-1/3 group relative overflow-hidden rounded-lg shadow-lg">
            <a href={textImage.link} className="block">
              <Image
                src={textImage.src}
                alt={textImage.title}
                width={500}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm sm:text-base font-conthrax text-center">
                  {textImage.title}
                </p>
              </div>
            </a>
          </div>
        </div>
               


               <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          Villa Contracting Dubai Services We Provide
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {designImages.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden">
              <Image
                src={src}
                alt={`service ${index + 1}`}
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
         

        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xs sm:text-xl font-conthrax uppercase text-[#d4af37]">
            Get In Touch With Us
          </h3>
          <p className="text-sm sm:text-base font-play">
            We are located in the world's luxury city, Dubai
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
            <a
              href="https://wa.me/971586023677"
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

       

        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-conthrax py-12 text-[#d4af37]">
            Villa Contracting Dubai, Delivered from Structure to Finishing
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-6 font-play">
              <h2 className="text-xl font-conthrax mb-4 text-[#d4af37]">
                Our Villa Contracting Services in Dubai
              </h2>
              <p>
                Our villa contracting services are designed to give clients a
                complete and well-managed project journey. Whether you are
                building a new villa or upgrading an existing one, we handle the
                process from planning and technical coordination to execution and
                final delivery.
              </p>
              <p>Our Featured Services:</p>
              <ul className="list-decimal pl-5 space-y-2">
                <li>
                  <p className="font-play">
                    <b>Project Planning & Construction Coordination – </b>
                    Complete project support to build a strong and organized
                    execution foundation
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Technical Drawings & Site Coordination –</b> Accurate
                    planning documents and technical alignment for smooth villa
                    delivery
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Civil Works, Structural Scope & MEP Coordination – </b>
                    Well-managed construction execution that supports long-term
                    performance and quality
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Fit-Out, Finishing & Installation –</b> Practical and
                    organized execution handled under one accountable team
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Custom Joinery & Material Integration – </b>
                    Coordinated built-in elements and finish selections that
                    support luxury residential quality
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Complete Villa Project Delivery –</b> End-to-end villa
                    contracting from project planning to final handover
                  </p>
                </li>
              </ul>

            
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/UC_04368.jpg"
                alt="Round luxury bed with fairy lights"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 mb-4 bg-[#141517] rounded-lg shadow p-6 sm:p-10">
          <h2 className="text-center text-2xl sm:text-3xl font-conthrax mb-4 text-[#d4af37]">
            Villa Contracting Dubai – FAQs
          </h2>
          <p className="font-play text-sm sm:text-base mb-6 text-center">
            Find quick answers to common questions about our villa contracting
            services in Dubai.
          </p>

          <div className="space-y-3">
            {faqs.map((item, index) => (
              <details
                key={index}
                className="group border-b border-gray-200 py-3"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-play font-semibold text-sm sm:text-base text-[#8c6b1f] text-left">
                    {item.question}
                  </span>
                  <span className="ml-3 text-[#d4af37] text-xl transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm sm:text-base font-play">
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