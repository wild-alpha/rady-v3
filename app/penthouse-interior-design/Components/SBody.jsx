"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const serviceCards = [
  {
    title: "Royal Atlantis 2 Bedroom Apartment",
    src: "/images/royal-atlantis-2-bedroom-apartment.webp",
    link: "/royal-atlantis-2-bedroom-apartment",
  },
  {
    title: "Dubai South Apartment",
    src: "/images/dubai-south-apartment.webp",
    link: "/dubai-south-apartment",
  },
  {
    title: "Maryam Island Apartment Fit-Out",
    src: "/images/maryam-island-apartment-fit-out.webp",
    link: "/maryam-island-apartment-fit-out",
  },
];

const textImage = {
  src: "/images/penthouse-bedroom-interior.jpg",
  link: "/villa-damac-hills-5-bedroom",
  title: "Penthouse Interior Design",
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
    title: "Initial Consultation & Design Vision",
    desc: "We begin with a detailed consultation to understand your penthouse lifestyle, space expectations, aesthetic preferences, entertaining needs, privacy requirements, and budget. This helps us define a penthouse interior concept that feels luxurious, functional, and highly personalized.",
    img: "/images/mission.webp",
  },
  {
    id: "02",
    title: "Site Study & Space Planning",
    desc: "Our team studies the penthouse layout, circulation, panoramic views, natural light, ceiling heights, zoning opportunities, and terrace connection. We then prepare a space plan that enhances openness, comfort, elegance, and everyday living.",
    img: "/images/material.webp",
  },
  {
    id: "03",
    title: "Material, Furniture & Finish Selection",
    desc: "We help you choose premium finishes, feature materials, custom furniture, lighting, wall treatments, flooring, fabrics, and decorative details that reflect penthouse-level luxury while ensuring comfort, durability, and timeless appeal.",
    img: "/images/customized.webp",
  },
  {
    id: "04",
    title: "Technical Drawings & Design Detailing",
    desc: "Our designers and technical team prepare detailed layouts, ceiling plans, joinery drawings, wall elevations, lighting layouts, and other technical documents required for accurate planning and smooth execution.",
    img: "/images/mission.webp",
  },
  {
    id: "05",
    title: "Execution, Fit-Out & Installation",
    desc: "Once the design is finalized, our craftsmen and project team begin the transformation. From flooring and wall finishes to custom joinery, lighting, furniture placement, and decorative detailing, every element is executed with precision and care.",
    img: "/images/material.webp",
  },
  {
    id: "06",
    title: "Final Styling & Handover",
    desc: "Before handover, we complete final styling, finishing checks, furniture arrangement, decorative accessory placement, and quality review so your penthouse interior feels polished, elevated, and ready for refined living.",
    img: "/images/customized.webp",
  },
];

const faqs = [
  {
    question: "How long does a penthouse interior design project in Dubai usually take?",
    answer:
      "The timeline depends on the penthouse size, design complexity, and level of customization involved. In most cases, penthouse interior design projects in Dubai can take from a few months to longer depending on the scope and detailing required.",
  },
  {
    question: "Can you design both modern and classic penthouse interiors?",
    answer:
      "Yes, we design penthouse interiors in different styles, including contemporary luxury, modern minimalist, classic elegance, and custom blends tailored to the client's vision and lifestyle.",
  },
  {
    question: "Do you provide both penthouse design and fit-out execution?",
    answer:
      "Yes, we offer complete penthouse interior design support including concept development, space planning, material selection, technical drawings, custom joinery, and fit-out coordination.",
  },
  {
    question: "What affects the cost of penthouse interior design in Dubai?",
    answer:
      "The cost depends on the penthouse size, material quality, custom furniture, lighting features, wall and ceiling detailing, joinery complexity, luxury finishes, and the overall level of customization involved.",
  },
  {
    question: "Can you make a penthouse feel both luxurious and comfortable?",
    answer:
      "Yes, our penthouse interior design approach focuses on combining architectural openness, premium finishes, thoughtful layouts, elegant lighting, and comfortable living so the space feels both sophisticated and highly livable.",
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
                Luxury penthouse interior design services in Dubai
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                Are you looking for
                <a
                  href="https://radyinterior.ae/"
                  className=" ml-1"
                >
                  penthouse interior design services in Dubai <span></span>
                </a>
                that reflect elevated luxury, exclusivity, and modern living. You
                are at the right place.
                <br />
                With 15+ years of experience in high-end interior design and
                fit-out,
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                creates penthouse interiors that combine open spatial elegance,
                refined materials, custom detailing, and highly personalized
                comfort.
                <br />
                Whether you are designing a new penthouse or transforming an
                existing one, our team helps shape interiors that feel spacious,
                sophisticated, and tailored to your lifestyle and design vision.
                Keep reading to discover how
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                delivers penthouse interior design solutions in Dubai designed for
                prestige, comfort, and timeless beauty.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                15 Years of Experience
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37]">
                Get Best Penthouse Interior Design Services in Dubai
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/penthouse-cover.jpg"
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
    src="https://www.youtube.com/embed/UswSV8utMPk?autoplay=1&rel=0&modestbranding=1&controls=1"
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
          Penthouse Interior Design Dubai Services We Provide
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
              href="https://wa.me/971508181824"
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
            for Your Penthouse Interior Design in Dubai?
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
            <p>
              With years of experience in luxury residential design,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              helps clients in Dubai create penthouse interiors that feel
              sophisticated, spacious, and deeply aligned with elevated urban
              living.
            </p>

            <p>
              A penthouse interior should do more than look impressive. It should
              express exclusivity, comfort, openness, and refined taste while
              making full use of views, natural light, and premium architecture.
            </p>

            <p>
              Our design process starts with understanding your lifestyle,
              entertaining preferences, privacy needs, spatial expectations, and
              design taste so we can create interiors that truly reflect your
              vision.
            </p>

            <p>
              From open-plan living spaces and luxury suites to dining areas,
              terraces, lounges, and statement interiors,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              develops penthouse interiors that balance elegance, comfort, and
              architectural harmony.
              <br />
              <br />
              We carefully select premium flooring, bespoke furniture, feature
              lighting, wall treatments, custom joinery, luxury fabrics, and
              decorative details that create an atmosphere of refined living and
              visual balance.
              <br />
              <br />
              Our team focuses on openness, proportion, and precise execution so
              the final penthouse interior feels polished, luxurious, and truly
              distinguished.
              <br />
              <br />
              When you choose
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              you choose a professional team dedicated to delivering penthouse
              interior design services in Dubai with craftsmanship, elegance, and
              uncompromising quality.
            </p>
          </div>
        </div>

        <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
          <div className="w-full lg:w-2/3 space-y-4">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Our Dubai Penthouse Interior Projects
            </h2>
            <p className="text-sm sm:text-base">
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              works on high-end residential interior projects in Dubai, including
              penthouse spaces designed for luxury, comfort, and exceptional
              city living.
            </p>
            <p className="text-sm sm:text-base">
              Every penthouse interior project is planned with close attention to
              layout openness, view orientation, natural light, private living
              comfort, statement areas, material richness, and the overall
              character of the residence.
            </p>
            <p className="text-sm sm:text-base">
              Clients trust
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              to create penthouse interiors that feel sophisticated, practical,
              and deeply refined while preserving warmth, prestige, and timeless
              design.
            </p>
            <p className="text-sm sm:text-base">
              From expansive formal interiors to private luxury living zones, our
              work focuses on elegance, personalization, and premium finishing
              suited to the most exclusive penthouses in Dubai.
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
     {/* <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
      OUR PENTHOUSE INTERIOR DESIGN PROJECTS IN DUBAI</h2>
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
            Bespoke Penthouse Interior Design Dubai, Crafted for Luxury and Elevated Living
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-6 font-play">
              <h2 className="text-xl font-conthrax mb-4 text-[#d4af37]">
                Our Penthouse Interior Design Services in Dubai
              </h2>
              <p>
                Our penthouse interior design services are tailored to create
                elegant, open, and highly personalized interiors that reflect
                prestige, comfort, and elevated living. Whether you want a
                contemporary luxury penthouse, a minimalist high-end interior, or
                a custom blend of both, we design according to your vision and
                lifestyle.
              </p>
              <p>Our Featured Services:</p>
              <ul className="list-decimal pl-5 space-y-2">
                <li>
                  <p className="font-play">
                    <b>Open Spatial Planning – </b>
                    Thoughtful interior planning for living, dining, private, and
                    entertainment zones with elegant flow and openness
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Luxury Living, Dining & Lounge Design –</b> Sophisticated
                    spaces tailored for daily comfort, hosting, and premium city
                    living
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Custom Furniture & Bespoke Joinery – </b>
                    Tailored furnishings and detailed interior features created
                    for sophistication and refinement
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Premium Finishes & Wall Detailing –</b> High-end materials
                    and refined interior treatments that elevate penthouse
                    character
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Lighting, Ceilings & Statement Features – </b>
                    Carefully coordinated visual elements that enhance atmosphere,
                    openness, and luxury
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Penthouse Fit-Out & Installation –</b> Complete execution
                    with precise detailing, luxury finishing, and final styling
                    support
                  </p>
                </li>
              </ul>

              <p>
                We are among the trusted companies for penthouse interior design
                in Dubai, helping clients create interiors that feel exclusive,
                functional, and beautifully tailored for elevated living.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/penthouse-sitting-area.jpg"
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
            Penthouse Interior Design Dubai – FAQs
          </h2>
          <p className="font-play text-sm sm:text-base mb-6 text-center">
            Find quick answers to common questions about our penthouse interior
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