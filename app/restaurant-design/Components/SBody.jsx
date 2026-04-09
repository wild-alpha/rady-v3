"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const serviceCards = [
   {
    title: "Ras Al Khaimah Resort Restaurant",
    src: "/images/ras-al-khaimah-resort-restaurant.webp",
    link: "/ras-al-khaimah-resort-restaurant",
  },
   {
    title: "Al Noaf Cafe Interior",
    src: "/images/al-noaf-cafe-interior.jpg",
    link: "/al-noaf-cafe-interior",
  },
  {
    title: "Al Riqaibah Cafe",
    src: "/images/al-riqaibah-cafe.webp",
    link: "/al-riqaibah-cafe",
  },
];

const textImage = {
  src: "/images/restaurant-counter-design.png",
  link: "/villa-damac-hills-5-bedroom",
  title: "Restaurant Interior Design",
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

const villaSteps = [
  {
    id: "01",
    title: "Initial Consultation & Restaurant Concept",
    desc: "We begin with a detailed consultation to understand your restaurant concept, cuisine style, target audience, seating requirements, brand identity, service flow, and budget. This helps us create an interior direction that feels attractive, functional, and aligned with your dining experience goals.",
    img: "/images/mission.webp",
  },
  {
    id: "02",
    title: "Site Study & Space Planning",
    desc: "Our team studies the restaurant layout, guest circulation, seating flow, kitchen connection, reception area, waiting zones, service movement, and ambiance opportunities. We then prepare a plan that improves comfort, efficiency, and the overall dining experience.",
    img: "/images/material.webp",
  },
  {
    id: "03",
    title: "Material, Furniture & Finish Selection",
    desc: "We help you choose flooring, wall finishes, dining furniture, lighting, ceiling treatments, counters, partitions, and decorative elements that match your restaurant concept while ensuring durability, comfort, and a memorable visual identity.",
    img: "/images/customized.webp",
  },
  {
    id: "04",
    title: "Technical Drawings & Design Detailing",
    desc: "Our designers and technical team prepare restaurant layouts, reflected ceiling plans, lighting drawings, joinery details, seating plans, feature wall drawings, and other technical documents required for accurate planning and smooth execution.",
    img: "/images/mission.webp",
  },
  {
    id: "05",
    title: "Fit-Out Execution & Installation",
    desc: "Once the design is finalized, our craftsmen and project team begin the transformation. From flooring and partitions to lighting, furniture placement, counters, wall finishes, and decorative details, every element is executed with precision and care.",
    img: "/images/material.webp",
  },
  {
    id: "06",
    title: "Final Styling & Handover",
    desc: "Before handover, we complete final checks, finishing touches, furniture arrangement, decorative styling, cleaning, and quality review so your restaurant feels polished, inviting, and ready to welcome guests.",
    img: "/images/customized.webp",
  },
];

const faqs = [
  {
    question: "How long does a restaurant interior design project in Dubai usually take?",
    answer:
      "The timeline depends on the restaurant size, design complexity, approval requirements, and level of customization involved. In most cases, restaurant interior design projects in Dubai can take from a few weeks to a few months from concept to handover.",
  },
  {
    question: "Can you design different types of restaurants and dining spaces?",
    answer:
      "Yes, we design different restaurant concepts including casual dining, fine dining, themed restaurants, family restaurants, fast-casual spaces, and other hospitality interiors across Dubai.",
  },
  {
    question: "Do you provide both restaurant design and fit-out execution?",
    answer:
      "Yes, we offer complete restaurant interior design support including concept development, space planning, material selection, technical drawings, custom joinery, and fit-out coordination.",
  },
  {
    question: "What affects the cost of restaurant interior design in Dubai?",
    answer:
      "The cost depends on the restaurant size, seating design, lighting features, counters, kitchen coordination, wall and ceiling treatments, furniture, decorative elements, and the overall level of customization involved in the project.",
  },
  {
    question: "Can you design the restaurant to improve both ambiance and operation?",
    answer:
      "Yes, our restaurant design approach focuses on combining guest comfort, visual identity, seating flow, staff movement, service efficiency, and memorable ambiance so the space feels both attractive and practical.",
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
                Premium restaurant design services in Dubai
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                Are you looking for
                <a
                  href="https://radyinterior.ae/"
                  className=" ml-1"
                >
                  restaurant interior design services in Dubai <span></span>
                </a>
                that combine ambiance, functionality, and a memorable guest
                experience. You are at the right place.
                <br />
                With 15+ years of experience in hospitality interior design,
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                creates restaurant interiors that feel distinctive, welcoming, and
                tailored to your concept, cuisine style, and brand identity.
                <br />
                Whether you are launching a new restaurant or upgrading an
                existing dining space, our team helps shape interiors that feel
                attractive, practical, and ready to impress your guests. Keep
                reading to discover how
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                delivers restaurant interior design solutions in Dubai tailored to
                your concept, operations, and customer experience.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                15 Years of Experience
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37]">
                Get Best Restaurant Interior Design Services in Dubai
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/villa-cover.webp"
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
          Restaurant Interior Design Dubai Services We Provide
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
            for Your Restaurant Interior Design in Dubai?
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
            <p>
              With years of experience in hospitality interiors,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              helps restaurant owners in Dubai create dining spaces that feel
              attractive, functional, and aligned with their food concept and
              brand identity.
            </p>

            <p>
              A successful restaurant interior is not only about appearance. It is
              about creating an atmosphere that attracts guests, supports service
              flow, improves comfort, and leaves a lasting impression.
            </p>

            <p>
              Our design process starts with understanding your cuisine concept,
              target audience, seating style, guest journey, staff movement, and
              visual direction so we can create an interior that supports both
              experience and operations.
            </p>

            <p>
              From entrances and reception areas to dining halls, private seating
              zones, counters, and decorative features,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              creates tailored restaurant interiors that combine strong visual
              identity, comfort, and practical hospitality planning.
              <br />
              <br />
              We thoughtfully choose furniture, lighting, flooring, wall finishes,
              ceiling details, custom joinery, and styling elements that create a
              memorable atmosphere while maintaining durability and ease of use.
              <br />
              <br />
              Our team focuses on layout efficiency, ambiance, and clean execution
              so the final restaurant feels polished, inviting, and ready for
              successful day-to-day operation.
              <br />
              <br />
              When you choose
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              you choose a professional team dedicated to delivering restaurant
              interior design services in Dubai with quality, creativity, and
              hospitality expertise.
            </p>
          </div>
        </div>

        <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
          <div className="w-full lg:w-2/3 space-y-4">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Our Dubai Restaurant Interior Projects
            </h2>
            <p className="text-sm sm:text-base">
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              works on hospitality interior projects in Dubai, including
              restaurants designed for ambiance, comfort, and smooth dining
              operations.
            </p>
            <p className="text-sm sm:text-base">
              Every restaurant interior project is planned with attention to guest
              flow, seating arrangement, service efficiency, lighting, branding,
              feature elements, and the overall dining atmosphere.
            </p>
            <p className="text-sm sm:text-base">
              Clients trust
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              to create restaurant interiors that feel distinctive, practical,
              and visually refined while supporting daily hospitality needs.
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
          OUR RESTAURANT DESIGN PROJECTS IN DUBAI
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
            Bespoke Restaurant Interior Design Dubai, Crafted for Dining and Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-6 font-play">
              <h2 className="text-xl font-conthrax mb-4 text-[#d4af37]">
                Our Restaurant Interior Design Services in Dubai
              </h2>
              <p>
                Our restaurant interior design services are tailored to create
                stylish, memorable, and highly functional dining spaces. Whether
                you are launching a new restaurant or redesigning an existing one,
                we plan interiors that support your brand and daily operations.
              </p>
              <p>Our Featured Services:</p>
              <ul className="list-decimal pl-5 space-y-2">
                <li>
                  <p className="font-play">
                    <b>Restaurant Layout Planning – </b>
                    Smart space planning for guest movement, seating comfort, and
                    service efficiency
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Dining Area & Seating Design –</b> Functional and inviting
                    seating arrangements tailored to your restaurant concept
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Reception, Counters & Feature Design – </b>
                    Well-balanced front-of-house and focal design elements that
                    strengthen guest impression
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Lighting & Ceiling Design –</b> Layered and practical
                    lighting solutions that enhance mood and dining atmosphere
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Custom Joinery & Decorative Finishes – </b>
                    Carefully designed restaurant details, wall features, and
                    materials for a refined interior identity
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Restaurant Fit-Out & Installation –</b> Complete execution
                    with careful detailing, hospitality-focused planning, and
                    final setup
                  </p>
                </li>
              </ul>

              <p>
                We are among the trusted companies for restaurant interior design
                in Dubai, helping owners create dining spaces that feel
                distinctive, functional, and beautifully prepared for guest
                experience and business growth.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/restaurant-in-dubai.png"
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
            Restaurant Interior Design Dubai – FAQs
          </h2>
          <p className="font-play text-sm sm:text-base mb-6 text-center">
            Find quick answers to common questions about our restaurant interior
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