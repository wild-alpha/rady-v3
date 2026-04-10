"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const serviceCards = [
  {
    title: "District One MBR Villa",
    src: "/images/district-one-mbr-villa.webp",
    link: "/district-one-mbr-villa",
  },
 {
    title: "Dubai Hills Estate Villa Interior",
    src: "/images/dubai-hills-estate-villa-interior.webp",
    link: "/dubai-hills-estate-villa-interior",
  },
 {
    title: "Al Barari Villa",
    src: "/images/al-barari-villa.jpg",
    link: "/al-barari-villa",
  },
];

const textImage = {
  src: "/images/palace-furniture-dubai.jpg",
  link: "/villa-damac-hills-5-bedroom",
  title: "Palace Interior Design",
};

const galleryImages = [
  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "CLASSIC VILLA INTERIOR DESIGN",
  },
  { src: "/images/vservice3.webp", link: "/villa-lantana", title: "VILLA LATANA" },
  { src: "/images/vservice1.webp", link: "/villa-khawaneej", title: "VILLA KHAWANEEJ" },
  {
    src: "/images/vservice1.webp",
    link: "/emirates-hills-villa",
    title: "EMIRATES HILLS VILLA",
  },
  { src: "/images/vservice2.webp", link: "/mbr-city-villa", title: "MBR CITY VILLA" },
  {
    src: "/images/vservice3.webp",
    link: "/palm-jumeirah-villa",
    title: "PALM JUMEIRAH VILLA",
  },
];

const faqs = [
  {
    question: "How long does a palace interior design project in Dubai usually take?",
    answer:
      "The timeline depends on the palace size, design complexity, level of detailing, and scope of fit-out work. In most cases, palace interior design projects in Dubai can take several months or longer from concept development to final handover.",
  },
  {
    question: "Can you design both traditional and contemporary palace interiors?",
    answer:
      "Yes, we design palace interiors in different styles, including traditional Arabic luxury, classic royal interiors, contemporary palace spaces, and custom blends that reflect the client’s vision and cultural preferences.",
  },
  {
    question: "Do you provide both palace design and fit-out execution?",
    answer:
      "Yes, we offer complete palace interior design support including concept development, space planning, material selection, technical drawings, custom detailing, joinery design, and fit-out coordination.",
  },
  {
    question: "What affects the cost of palace interior design in Dubai?",
    answer:
      "The cost depends on the palace size, material quality, marble and decorative finishes, custom furniture, lighting features, joinery complexity, handcrafted details, and the overall level of luxury and customization involved.",
  },
  {
    question: "Can you make a palace interior feel both grand and comfortable?",
    answer:
      "Yes, our palace interior design approach focuses on combining architectural grandeur, premium materials, thoughtful layouts, elegant lighting, and luxurious comfort so the interior feels both majestic and livable.",
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
                Palace interior design Dubai
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                Are you looking for
                <a href="https://radyinterior.ae/" className=" ml-1">
                  palace interior design services in Dubai <span></span>
                </a>
                that reflect grandeur, prestige, and timeless luxury. You are at
                the right place.
                <br />
                With 15+ years of experience in luxury interior design and fit-out,
                <a href="https://radyinterior.ae/" className="ml-1">
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                creates palace interiors that combine architectural magnificence,
                refined craftsmanship, premium materials, and highly personalized
                living experiences.
                <br />
                Whether you are designing a new palace or transforming an existing
                royal residence, our team helps shape interiors that feel majestic,
                elegant, and deeply tailored to your lifestyle and cultural
                preferences. Keep reading to discover how
                <a href="https://radyinterior.ae/" className="ml-1">
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                delivers palace interior design solutions in Dubai designed for
                exceptional comfort, prestige, and lasting beauty.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                15 Years of Experience
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37]">
                Get Best Palace Interior Design Services in Dubai
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/palace-sitting-area-interior.jpg"
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
          Palace Interior Design Dubai Services We Provide
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {serviceCards.map((card, index) => (
            <Link
              key={index}
              href={card.link}
              className="group relative block aspect-[4/4] overflow-hidden rounded-lg"
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
            for Your Palace Interior Design in Dubai?
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
            <p>
              With years of experience in luxury residential design,
              <a href="https://radyinterior.ae/" className="ml-1">
                Rady Interior Design & Fit Out <span></span>
              </a>
              helps clients in Dubai create palace interiors that feel grand,
              sophisticated, and deeply connected to elevated living.
            </p>

            <p>
              A palace interior should do more than look impressive. It should
              express prestige, hospitality, cultural depth, and timeless
              refinement while remaining functional for family life, guests, and
              ceremonial occasions.
            </p>

            <p>
              Our design process starts with understanding your architectural
              vision, hosting traditions, private living requirements, formal
              reception needs, and the level of luxury you want to achieve so we
              can create interiors that truly reflect your identity.
            </p>

            <p>
              From formal majlis areas and grand entrances to suites, lounges,
              dining spaces, corridors, and statement interiors,
              <a href="https://radyinterior.ae/" className="ml-1">
                Rady Interior Design & Fit Out <span></span>
              </a>
              develops palace interiors that balance magnificence, comfort, and
              architectural harmony.
              <br />
              <br />
              We carefully select marble, bespoke furniture, feature lighting,
              wall treatments, decorative details, premium fabrics, and custom
              joinery that create an environment of exceptional luxury and visual
              balance.
              <br />
              <br />
              Our team focuses on spatial grandeur, refined detailing, and precise
              execution so the final palace interior feels majestic, polished, and
              truly distinguished.
              <br />
              <br />
              When you choose
              <a href="https://radyinterior.ae/" className="ml-1">
                Rady Interior Design & Fit Out, <span></span>
              </a>
              you choose a professional team dedicated to delivering palace
              interior design services in Dubai with craftsmanship, elegance, and
              uncompromising quality.
            </p>
          </div>
        </div>

        <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
          <div className="w-full lg:w-2/3 space-y-4">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Our Dubai Palace Interior Projects
            </h2>
            <p className="text-sm sm:text-base">
              <a href="https://radyinterior.ae/" className="ml-1">
                Rady Interior Design & Fit Out, <span></span>
              </a>
              works on high-end residential interior projects in Dubai, including
              palace spaces designed for prestige, hospitality, and luxurious
              living.
            </p>
            <p className="text-sm sm:text-base">
              Every palace interior project is planned with close attention to
              architecture, ceremonial flow, private living comfort, statement
              areas, lighting, material richness, and the overall character of the
              residence.
            </p>
            <p className="text-sm sm:text-base">
              Clients trust
              <a href="https://radyinterior.ae/" className="ml-1">
                Rady Interior Design & Fit Out <span></span>
              </a>
              to create palace interiors that feel majestic, practical, and
              deeply refined while preserving warmth, prestige, and timeless
              beauty.
            </p>
            <p className="text-sm sm:text-base">
              From grand formal interiors to private luxury living spaces, our
              work focuses on sophistication, personalization, and premium
              finishing suited to the most exclusive residences in Dubai.
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
            Bespoke Palace Interior Design Dubai, Crafted for Grandeur and Prestige
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-6 font-play">
              <h2 className="text-xl font-conthrax mb-4 text-[#d4af37]">
                Our Palace Interior Design Services in Dubai
              </h2>
              <p>
                Our palace interior design services are tailored to create grand,
                elegant, and highly personalized interiors that reflect prestige,
                culture, and exceptional luxury. Whether you want a classic royal
                interior, a modern palace environment, or a custom blend of both,
                we design according to your vision and lifestyle.
              </p>
              <p>Our Featured Services:</p>
              <ul className="list-decimal pl-5 space-y-2">
                <li>
                  <p className="font-play">
                    <b>Grand Spatial Planning – </b>
                    Thoughtful interior planning for formal, private, and guest
                    zones with elegant circulation and presence
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Majlis, Reception & Formal Hall Design –</b> Luxurious
                    spaces tailored for hosting, prestige, and cultural elegance
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Custom Furniture & Bespoke Joinery – </b>
                    Tailored palace furnishings and detailed interior features
                    created for grandeur and refinement
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Marble, Decorative Finishes & Wall Detailing –</b> Premium
                    materials and artistic interior treatments that elevate palace
                    character
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Lighting, Ceilings & Statement Features – </b>
                    Carefully coordinated visual elements that enhance atmosphere,
                    scale, and elegance
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Palace Fit-Out & Installation –</b> Complete execution with
                    precise detailing, luxury finishing, and final styling support
                  </p>
                </li>
              </ul>

              <p>
                We are among the trusted companies for palace interior design in
                Dubai, helping clients create interiors that feel majestic,
                functional, and beautifully tailored for prestigious living.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/palace-sitting-area-interior.jpg"
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
            Palace Interior Design Dubai – FAQs
          </h2>
          <p className="font-play text-sm sm:text-base mb-6 text-center">
            Find quick answers to common questions about our palace interior
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