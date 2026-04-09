"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const serviceCards = [
  {
    title: "Dubai Marina Office Fitout",
    src: "/images/dubai-marina-office-fitout.webp",
    link: "/dubai-marina-office-fitout",
  },
{
    title: "Aljada Sharjah Office Interior",
    src: "/images/aljada-sharjah-office-interior.jpg",
    link: "/aljada-sharjah-office-interior",
  },
  {
    title: "Bluewaters Island Retail",
    src: "/images/bluewaters-island-retail.webp",
    link: "/bluewaters-island-retail",
  },
];

const textImage = {
  src: "/images/conference-room-interior.tif",
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
    question: "How long does an office interior design project in Dubai usually take?",
    answer:
      "The timeline depends on the office size, design scope, and level of customization involved. In most cases, office interior design projects in Dubai can take from a few weeks to a few months from concept to final setup.",
  },
  {
    question: "Can you design both small offices and larger corporate spaces?",
    answer:
      "Yes, we design all types of office interiors, from compact business offices and executive cabins to larger corporate offices, co-working spaces, and full-floor workplaces across Dubai.",
  },
  {
    question: "Do you provide both office design and fit-out execution?",
    answer:
      "Yes, we offer complete office interior design support including concept development, space planning, material selection, technical drawings, custom joinery, and fit-out coordination.",
  },
  {
    question: "What affects the cost of office interior design in Dubai?",
    answer:
      "The cost depends on the office size, workstation requirements, meeting rooms, reception design, furniture selection, partitions, lighting, wall finishes, storage solutions, and the overall level of customization involved in the project.",
  },
  {
    question: "Can you design the office to improve both appearance and productivity?",
    answer:
      "Yes, our office interior design approach focuses on combining efficient layouts, staff comfort, branding, practical storage, smart lighting, and professional finishing so the office feels both productive and visually strong.",
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
                office interior design services
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                Are you looking for
                <a href="https://radyinterior.ae/" className=" ml-1">
                  office interior design services in Dubai <span></span>
                </a>
                that combine professionalism, functionality, and a strong brand
                presence. You are at the right place.
                <br />
                With 15+ years of experience in commercial interior design,
                <a href="https://radyinterior.ae/" className="ml-1">
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                creates office interiors that feel efficient, stylish, and tailored
                to modern business needs, team workflow, and professional image.
                <br />
                Whether you want to design a new office, upgrade a workplace, or
                create a more refined environment for staff and clients, our team
                helps shape office spaces that feel practical, polished, and ready
                for growth. Keep reading to discover how
                <a href="https://radyinterior.ae/" className="ml-1">
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                delivers office interior design solutions in Dubai tailored to
                your business goals, office culture, and daily operations.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                15 Years of Experience
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37]">
                Get Best Office Interior Design Services in Dubai
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/office-interior-fish-tech.jpg"
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
                    src="https://www.youtube.com/embed/gxgwwTlKx18"
                    title="YouTube Video"
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
          Office Interior Design Dubai Services We Provide
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {serviceCards.map((card, index) => (
            <Link
              key={index}
              href={card.link}
              className="group relative block aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={card.src}
                alt={card.title}
                width={600}
                height={600}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition duration-300 flex items-center justify-center p-4">
                <h3 className="text-white text-sm sm:text-base md:text-lg font-semibold text-center uppercase tracking-wider">
                  {card.title}
                </h3>
              </div>
            </Link>
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
            for Your Office Interior Design in Dubai?
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
            <p>
              With years of experience in commercial interior design,
              <a href="https://radyinterior.ae/" className="ml-1">
                Rady Interior Design & Fit Out <span></span>
              </a>
              helps businesses in Dubai create office interiors that feel
              efficient, professional, and aligned with their brand identity.
            </p>

            <p>
              A well-designed office should do more than look impressive. It
              should support productivity, teamwork, client interaction, privacy,
              comfort, and a workplace atmosphere that reflects your company values.
            </p>

            <p>
              We begin by understanding your team structure, business workflow,
              office culture, branding direction, and spatial needs so we can
              create an office interior that truly supports daily operations.
            </p>

            <p>
              From reception areas and executive cabins to workstations, meeting
              rooms, collaborative spaces, and storage zones,
              <a href="https://radyinterior.ae/" className="ml-1">
                Rady Interior Design & Fit Out <span></span>
              </a>
              creates tailored office interiors that combine smart planning,
              refined finishes, and practical functionality.
              <br />
              <br />
              We thoughtfully choose furniture, lighting, partitions, wall
              finishes, flooring, custom joinery, and decorative elements that
              create visual harmony while maintaining durability and efficient
              workplace use.
              <br />
              <br />
              Our team focuses on layout efficiency, business practicality, and
              clean execution so the final office feels polished, productive, and
              ready for long-term growth.
              <br />
              <br />
              When you choose
              <a href="https://radyinterior.ae/" className="ml-1">
                Rady Interior Design & Fit Out, <span></span>
              </a>
              you choose a professional team dedicated to delivering office
              interior design services in Dubai with quality, creativity, and
              strong commercial understanding.
            </p>
          </div>
        </div>

        <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
          <div className="w-full lg:w-2/3 space-y-4">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Our Dubai Office Interior Design Projects
            </h2>
            <p className="text-sm sm:text-base">
              <a href="https://radyinterior.ae/" className="ml-1">
                Rady Interior Design & Fit Out, <span></span>
              </a>
              works on commercial interior projects in Dubai, including office
              spaces designed for productivity, branding, and professional daily
              use.
            </p>
            <p className="text-sm sm:text-base">
              Every office interior design project is planned with attention to
              workflow, team comfort, meeting spaces, client-facing areas,
              lighting, storage, and the overall character of the workplace.
            </p>
            <p className="text-sm sm:text-base">
              Clients trust
              <a href="https://radyinterior.ae/" className="ml-1">
                Rady Interior Design & Fit Out <span></span>
              </a>
              to create office interiors that feel professional, practical, and
              visually refined while supporting the real needs of the business.
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
{/*
        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          OUR OFFICE INTERIOR DESIGN PROJECTS IN DUBAI
        </h2>
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
*/}
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
            Bespoke Office Interior Design Dubai, Crafted for Productivity and Brand Presence
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-6 font-play">
              <h2 className="text-xl font-conthrax mb-4 text-[#d4af37]">
                Our Office Interior Design Services in Dubai
              </h2>
              <p>
                Our office interior design services are tailored to improve
                functionality, comfort, and the overall appearance of your
                workplace. Whether you want a modern office, an executive office,
                or a larger corporate environment, we design according to your
                business needs and workplace culture.
              </p>
              <p>Our Featured Services:</p>
              <ul className="list-decimal pl-5 space-y-2">
                <li>
                  <p className="font-play">
                    <b>Office Layout Planning – </b>
                    Smart space planning for productive movement, team workflow,
                    and practical daily use
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Workstations, Cabins & Meeting Room Design –</b> Functional
                    and professional office planning tailored to your business needs
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Reception & Brand-Focused Interior Design – </b>
                    Well-balanced front-of-house spaces that support a strong
                    professional first impression
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Lighting & Ceiling Design –</b> Practical and refined
                    lighting solutions that improve focus and workplace atmosphere
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Custom Joinery & Storage Solutions – </b>
                    Carefully designed cabinetry, shelving, and storage systems for
                    organized office environments
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Office Fit-Out & Installation –</b> Complete execution with
                    careful detailing, joinery support, and final setup
                  </p>
                </li>
              </ul>

              <p>
                We are among the trusted companies for office interior design in
                Dubai, helping businesses create workspaces that feel professional,
                functional, and beautifully planned for long-term performance.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/executive-office-interior.tif"
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
            Office Interior Design Dubai – FAQs
          </h2>
          <p className="font-play text-sm sm:text-base mb-6 text-center">
            Find quick answers to common questions about our office interior
            design services in Dubai.
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