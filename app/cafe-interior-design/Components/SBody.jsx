"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const serviceCards = [
  {
    src: "/images/cafe-sitting-furniture.jpg",
    link: "/cafe-interior-design-dubai",
    title: "Cafe Interior Design",
  },
  {
    src: "/images/cafe-interior-design.jpg",
    link: "/cafe-fit-out-dubai",
    title: "Cafe Fit Out Dubai",
  },
  {
    src: "/images/cafe-wall-design.jpg",
    link: "/modern-cafe-design-dubai",
    title: "Modern Cafe Design",
  },
];

const textImage = {
  src: "/images/turf-cafe-wall-design.jpg",
  link: "/villa-damac-hills-5-bedroom",
  title: "Cafe Interior Design",
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
    title: "Initial Consultation & Brand Concept",
    desc: "We begin with a detailed consultation to understand your cafe concept, target audience, menu style, seating needs, service model, brand identity, and budget. This helps us shape an interior direction that feels inviting, functional, and aligned with your business vision.",
    img: "/images/mission.webp",
  },
  {
    id: "02",
    title: "Site Study & Space Planning",
    desc: "Our team studies the cafe layout, customer flow, seating arrangement, counter position, waiting zones, kitchen connectivity, lighting conditions, and staff movement. We then prepare a space plan that improves comfort, efficiency, and the overall customer experience.",
    img: "/images/material.webp",
  },
  {
    id: "03",
    title: "Material, Furniture & Finish Selection",
    desc: "We help you select flooring, wall finishes, counters, seating, tables, lighting, decorative features, and branded design elements that match your cafe identity while maintaining durability and easy maintenance.",
    img: "/images/customized.webp",
  },
  {
    id: "04",
    title: "Technical Drawings & Design Detailing",
    desc: "Our designers and technical team prepare cafe layouts, reflected ceiling plans, joinery details, lighting layouts, service counter drawings, and other technical documents needed for smooth fit-out planning and execution.",
    img: "/images/mission.webp",
  },
  {
    id: "05",
    title: "Fit-Out Execution & Installation",
    desc: "Once the design is approved, our project team and craftsmen begin transforming the space. From flooring and partitions to counters, seating, lighting, and branding features, every stage is executed with close attention to detail.",
    img: "/images/material.webp",
  },
  {
    id: "06",
    title: "Final Styling & Handover",
    desc: "Before handover, we complete finishing checks, furniture placement, décor styling, snag corrections, and quality review to ensure your cafe feels polished, welcoming, and ready to serve customers.",
    img: "/images/customized.webp",
  },
];

const faqs = [
  {
    question: "How long does a cafe interior design project in Dubai usually take?",
    answer:
      "The timeline depends on the cafe size, design scope, fit-out requirements, and level of customization. In most cases, cafe interior design and fit-out projects in Dubai can take from a few weeks to a few months from concept to handover.",
  },
  {
    question: "Can you design both small cafes and large coffee shop spaces?",
    answer:
      "Yes, we design cafes of different sizes, from compact takeaway coffee spots and boutique cafes to larger dine-in cafes and premium hospitality spaces across Dubai.",
  },
  {
    question: "Do you provide both cafe design and fit-out execution?",
    answer:
      "Yes, we offer complete cafe interior design support including concept development, space planning, material selection, technical drawings, fit-out planning, and execution.",
  },
  {
    question: "What affects the cost of cafe interior design in Dubai?",
    answer:
      "The cost depends on the cafe size, materials, furniture, custom counters, lighting, branding features, kitchen coordination, technical requirements, and the level of finishing involved in the project.",
  },
  {
    question: "Can you design the cafe to improve both customer experience and workflow?",
    answer:
      "Yes, our cafe interiors are planned to balance visual appeal with operational efficiency, including customer flow, seating comfort, service counter design, staff movement, lighting, and an atmosphere that supports the brand experience.",
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
                Premium cafe interior design services in Dubai
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                Are you looking for
                <a
                  href="https://radyinterior.ae/"
                  className=" ml-1"
                >
                  cafe interior design services in Dubai <span></span>
                </a>
                that create a welcoming, stylish, and business-ready space. You
                are at the right place.
                <br />
                With 15+ years of experience in interior design and fit-out,
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                designs cafe interiors that combine brand identity, customer
                comfort, visual appeal, and practical workflow.
                <br />
                Whether you are opening a new cafe or upgrading an existing coffee
                space, our team helps you create an interior that feels inviting,
                memorable, and aligned with your concept. Keep reading to discover
                how
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                delivers cafe interior design solutions in Dubai tailored to your
                business goals, service style, and customer experience.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                15 Years of Experience
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37]">
                Get Best Cafe Interior Design Services in Dubai
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/cafe-counter-design.jpg"
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
          Cafe Interior Design Dubai Services We Provide
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
            for Your Cafe Interior Design in Dubai?
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
            <p>
              With years of experience in commercial interior design,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              helps cafe owners in Dubai create interiors that feel warm,
              functional, and aligned with their brand identity.
            </p>

            <p>
              A cafe should do more than look attractive. It should create a strong
              first impression, encourage customers to stay, support smooth
              operations, and reflect the character of your concept in every
              detail.
            </p>

            <p>
              Our design process starts with understanding your menu style, service
              model, customer expectations, visual direction, and business
              workflow so we can create an interior that supports both experience
              and performance.
            </p>

            <p>
              From entrance design and waiting areas to service counters, seating
              layouts, display zones, and branded features,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              develops cafe interiors that balance aesthetics, comfort, and
              operational efficiency.
              <br />
              <br />
              We carefully select finishes, lighting, furniture, counters,
              textures, and decorative elements that create a memorable
              environment while supporting durability and daily business use.
              <br />
              <br />
              Our team focuses on practical planning, strong visual presentation,
              and coordinated fit-out execution so your cafe feels complete,
              inviting, and ready to welcome customers.
              <br />
              <br />
              When you choose
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              you choose a professional team dedicated to delivering cafe interior
              design services in Dubai with quality, creativity, and commercial
              understanding.
            </p>
          </div>
        </div>

        <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
          <div className="w-full lg:w-2/3 space-y-4">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Our Dubai Cafe Interior Projects
            </h2>
            <p className="text-sm sm:text-base">
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              works on commercial interior projects in Dubai, including cafe
              spaces designed to improve customer experience and strengthen brand
              presence.
            </p>
            <p className="text-sm sm:text-base">
              Every cafe interior project is planned with attention to customer
              flow, seating comfort, service counters, waiting areas, visual
              identity, storage, and the overall ambiance of the space.
            </p>
            <p className="text-sm sm:text-base">
              Clients trust
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              to create cafe interiors that feel inviting, practical, and
              memorable while supporting the daily needs of staff and guests.
            </p>
            <p className="text-sm sm:text-base">
              From boutique coffee shops to larger cafe spaces, our work focuses
              on atmosphere, functionality, customer comfort, and premium finishing
              suited to the competitive hospitality market in Dubai.
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
          OUR CAFE INTERIOR DESIGN PROJECTS IN DUBAI
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
            Bespoke Cafe Interior Design Dubai, Crafted for Customer Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-6 font-play">
              <h2 className="text-xl font-conthrax mb-4 text-[#d4af37]">
                Our Cafe Interior Design Services in Dubai
              </h2>
              <p>
                Our cafe interior design services are tailored to create inviting,
                visually attractive, and highly functional hospitality spaces.
                Whether you are launching a new cafe or redesigning an existing
                one, we plan interiors that support your brand and daily
                operations.
              </p>
              <p>Our Featured Services:</p>
              <ul className="list-decimal pl-5 space-y-2">
                <li>
                  <p className="font-play">
                    <b>Entrance, Reception & Counter Design – </b>
                    Stylish front-of-house spaces that create a strong first
                    impression for guests
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Seating Layout Planning –</b> Comfortable and efficient
                    seating arrangements designed for customer flow and space use
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Lighting, Branding & Display Design – </b>
                    Well-coordinated visual elements that improve atmosphere and
                    strengthen cafe identity
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Service Zone & Customer Experience Design –</b> Practical
                    spaces tailored to ordering, waiting, serving, and dining
                    comfort
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Custom Joinery & Furniture Solutions – </b>
                    Smart counters, shelves, tables, seating, and display units
                    made for organized cafe operations
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Cafe Fit-Out & Finishing –</b> Complete execution with
                    careful detailing, quality finishing, and installation support
                  </p>
                </li>
              </ul>

              <p>
                We are among the trusted companies for cafe interior design in
                Dubai, helping business owners create spaces that feel inviting,
                functional, and ready to impress customers.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/cafe-outside-sitting.jpg"
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
            Cafe Interior Design Dubai – FAQs
          </h2>
          <p className="font-play text-sm sm:text-base mb-6 text-center">
            Find quick answers to common questions about our cafe interior design
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