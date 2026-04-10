"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const serviceCards = [
  {
    src: "/images/vservice1.webp",
    link: "/sauna-design-dubai",
    title: "Sauna Design Dubai",
  },
  {
    src: "/images/vservice2.webp",
    link: "/hammam-design-dubai",
    title: "Hammam Design Dubai",
  },
  {
    src: "/images/vservice3.webp",
    link: "/luxury-sauna-hammam-design-dubai",
    title: "Luxury Sauna & Hammam Design",
  },
];

const textImage = {
  src: "/images/vservice1.webp",
  link: "/villa-damac-hills-5-bedroom",
  title: "Damac Hills Villa",
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

const villaSteps = [
  {
    id: "01",
    title: "Initial Consultation & Wellness Concept",
    desc: "We begin with a detailed consultation to understand your sauna and hammam goals, wellness preferences, available space, usage needs, material expectations, and budget. This helps us create a concept that feels luxurious, calming, and tailored to your lifestyle or commercial wellness vision.",
    img: "/images/mission.webp",
  },
  {
    id: "02",
    title: "Site Study & Space Planning",
    desc: "Our team studies the available layout, circulation, ventilation requirements, wet and dry zoning, seating possibilities, heat and steam planning, and overall user flow. We then prepare a plan that improves comfort, privacy, safety, and the wellness experience.",
    img: "/images/material.webp",
  },
  {
    id: "03",
    title: "Material, Finish & Fixture Selection",
    desc: "We help you choose stone finishes, tiles, timber elements, benches, lighting, steam and heat-resistant materials, decorative details, and wellness fixtures that match the design style while ensuring durability, hygiene, and long-term performance.",
    img: "/images/customized.webp",
  },
  {
    id: "04",
    title: "Technical Drawings & Design Detailing",
    desc: "Our designers and technical team prepare sauna and hammam layouts, ceiling plans, bench details, lighting drawings, utility coordination, waterproofing details, and other technical documents required for accurate planning and smooth execution.",
    img: "/images/mission.webp",
  },
  {
    id: "05",
    title: "Execution, Fit-Out & Installation",
    desc: "Once the design is finalized, our craftsmen and project team begin the transformation. From waterproofing and surface preparation to seating, lighting, finishes, heating and steam coordination, every element is executed with precision and care.",
    img: "/images/material.webp",
  },
  {
    id: "06",
    title: "Final Finishing & Handover",
    desc: "Before handover, we complete final checks, finishing touches, fixture review, cleaning, and quality inspection so your sauna and hammam space feels polished, relaxing, and ready for daily use.",
    img: "/images/customized.webp",
  },
];

const faqs = [
  {
    question: "How long does a sauna and hammam design project in Dubai usually take?",
    answer:
      "The timeline depends on the project size, technical complexity, material selection, and level of customization involved. In most cases, sauna and hammam design projects in Dubai can take from a few weeks to a few months from concept to completion.",
  },
  {
    question: "Can you design sauna and hammam spaces for homes and commercial properties?",
    answer:
      "Yes, we design sauna and hammam spaces for villas, private residences, spas, hotels, wellness centers, gyms, and other residential and commercial properties across Dubai.",
  },
  {
    question: "Do you provide both sauna and hammam design and fit-out execution?",
    answer:
      "Yes, we offer complete sauna and hammam design support including concept development, space planning, material selection, technical drawings, waterproofing coordination, and fit-out execution.",
  },
  {
    question: "What affects the cost of sauna and hammam design in Dubai?",
    answer:
      "The cost depends on the room size, materials, stone or tile finishes, benches, lighting, waterproofing requirements, heating and steam systems, decorative details, and the overall level of customization involved.",
  },
  {
    question: "Can you make the sauna and hammam feel both luxurious and practical?",
    answer:
      "Yes, our sauna and hammam design approach focuses on combining wellness comfort, elegant finishes, technical practicality, durable materials, and calming atmosphere so the space feels both luxurious and highly functional.",
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
                Luxury sauna and hammam design services in Dubai
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                Are you looking for
                <a
                  href="https://radyinterior.ae/"
                  className=" ml-1"
                >
                  sauna and hammam design services in Dubai <span></span>
                </a>
                that combine wellness, elegance, and relaxation. You are at the
                right place.
                <br />
                With 15+ years of experience in interior design and fit-out,
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                creates sauna and hammam interiors that feel serene, refined, and
                tailored to luxury wellness living and hospitality experiences.
                <br />
                Whether you want a private home wellness room, a spa-inspired
                hammam, or a premium sauna and steam area for a commercial space,
                our team helps shape interiors that feel calming, practical, and
                beautifully finished. Keep reading to discover how
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                delivers sauna and hammam design solutions in Dubai tailored to
                your wellness goals, property type, and design vision.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                15 Years of Experience
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37]">
                Get Best Sauna and Hammam Design Services in Dubai
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
          Sauna and Hammam Design Dubai Services We Provide
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
            for Your Sauna and Hammam Design in Dubai?
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
            <p>
              With years of experience in luxury residential and wellness design,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              helps clients in Dubai create sauna and hammam interiors that feel
              elegant, calming, and beautifully suited to wellness-focused living.
            </p>

            <p>
              A successful sauna and hammam space is not only about appearance.
              It should support relaxation, privacy, heat and steam comfort,
              durable performance, and a truly elevated wellness experience.
            </p>

            <p>
              Our design process starts with understanding your space, lifestyle,
              wellness goals, material preferences, and technical requirements so
              we can create an environment that feels both luxurious and practical.
            </p>

            <p>
              From private home sauna rooms to premium hammam spaces and
              integrated wellness zones,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              creates tailored interiors that combine strong spatial planning,
              refined materials, and long-term performance.
              <br />
              <br />
              We thoughtfully choose stone finishes, tiles, benches, lighting,
              timber details, decorative features, and moisture-resistant
              materials that create visual harmony while maintaining hygiene,
              comfort, and technical suitability.
              <br />
              <br />
              Our team focuses on wellness ambiance, material durability, and
              clean execution so the final sauna and hammam interior feels
              polished, restorative, and ready for daily use.
              <br />
              <br />
              When you choose
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              you choose a professional team dedicated to delivering sauna and
              hammam design services in Dubai with quality, care, and refined
              wellness expertise.
            </p>
          </div>
        </div>

        <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
          <div className="w-full lg:w-2/3 space-y-4">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Our Dubai Sauna and Hammam Projects
            </h2>
            <p className="text-sm sm:text-base">
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              works on luxury wellness and residential interior projects in
              Dubai, including sauna and hammam spaces designed for relaxation,
              comfort, and refined spa-like experiences.
            </p>
            <p className="text-sm sm:text-base">
              Every sauna and hammam project is planned with attention to layout,
              thermal comfort, material performance, lighting, seating, finish
              quality, and the overall atmosphere of the wellness space.
            </p>
            <p className="text-sm sm:text-base">
              Clients trust
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              to create wellness interiors that feel luxurious, practical, and
              deeply calming without compromising technical quality or visual
              elegance.
            </p>
            <p className="text-sm sm:text-base">
              From compact private sauna rooms to larger hammam environments,
              our work focuses on serenity, performance, and premium finishing
              suited to homes, spas, and wellness spaces in Dubai.
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

        <div className="bg-[#141517] py-16 mt-10">
          <div className="max-w-6xl mx-auto text-center px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax mb-2 text-[#d4af37]">
              6-Step Process For Our Sauna and Hammam Design Services In Dubai
            </h2>
            <p className="font-play text-sm sm:text-base max-w-2xl mx-auto">
              We follow a clear and transparent 6-step process to deliver
              well-planned sauna and hammam design services in Dubai.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 place-items-center">
              {villaSteps.map((step) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center text-center font-play"
                >
                  <div className="relative w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full border-[6px] border-[#8c6b1f] overflow-hidden flex items-center justify-center shadow-md bg-white">
                    <Image
                      src={step.img}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <span className="relative text-3xl sm:text-4xl font-conthrax text-white drop-shadow-lg">
                      {step.id}
                    </span>
                  </div>

                  <h3 className="mt-6 text-base sm:text-lg font-conthrax text-[#d4af37]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-conthrax py-12 text-[#d4af37]">
            Bespoke Sauna and Hammam Design Dubai, Crafted for Wellness and Relaxation
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-6 font-play">
              <h2 className="text-xl font-conthrax mb-4 text-[#d4af37]">
                Our Sauna and Hammam Design Services in Dubai
              </h2>
              <p>
                Our sauna and hammam design services are tailored to create
                calming, elegant, and highly functional wellness spaces that
                support relaxation, comfort, and luxurious daily use. Whether you
                want a private home wellness room or a spa-focused steam and heat
                environment, we design according to your needs and property style.
              </p>
              <p>Our Featured Services:</p>
              <ul className="list-decimal pl-5 space-y-2">
                <li>
                  <p className="font-play">
                    <b>Sauna and Hammam Layout Planning – </b>
                    Thoughtful space planning for comfort, movement, privacy, and
                    wellness use
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Bench, Seating & Wellness Fixture Coordination –</b>
                    Functional and elegant seating solutions tailored to the
                    space and user experience
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Stone, Tile & Premium Surface Selection – </b>
                    Carefully chosen materials that enhance luxury, durability,
                    and spa-like atmosphere
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Lighting & Ceiling Design –</b> Soft and practical
                    lighting solutions that improve relaxation and wellness ambiance
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Custom Joinery & Decorative Wellness Details – </b>
                    Refined design elements, shelving, and features for a polished
                    and calming environment
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Sauna and Hammam Fit-Out & Installation –</b> Complete
                    execution with careful detailing, technical coordination, and
                    final setup
                  </p>
                </li>
              </ul>

              <p>
                We are among the trusted companies for sauna and hammam design
                in Dubai, helping clients create wellness spaces that feel
                luxurious, functional, and beautifully tailored for relaxation
                and long-term comfort.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/vservice1.webp"
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
            Sauna and Hammam Design Dubai – FAQs
          </h2>
          <p className="font-play text-sm sm:text-base mb-6 text-center">
            Find quick answers to common questions about our sauna and hammam
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