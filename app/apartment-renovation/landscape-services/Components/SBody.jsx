"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const designImages = [
  "/images/vservice1.webp",
  "/images/vservice2.webp",
  "/images/vservice3.webp",
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
    title: "Initial Consultation & Landscape Concept",
    desc: "We begin with a detailed consultation to understand your outdoor space, lifestyle needs, design preferences, functional requirements, maintenance expectations, and budget. This helps us create a landscape direction that feels elegant, practical, and suited to your property.",
    img: "/images/mission.webp",
  },
  {
    id: "02",
    title: "Site Study & Landscape Planning",
    desc: "Our team studies the outdoor layout, levels, circulation, sun exposure, drainage conditions, existing features, and planting opportunities. We then prepare a landscape plan that improves usability, comfort, and the overall outdoor experience.",
    img: "/images/material.webp",
  },
  {
    id: "03",
    title: "Material, Planting & Feature Selection",
    desc: "We help you select paving materials, softscape elements, plants, lighting, pergolas, water features, decking, boundary treatments, and decorative elements that match your landscape style while ensuring durability and outdoor suitability.",
    img: "/images/customized.webp",
  },
  {
    id: "04",
    title: "Technical Drawings & Design Detailing",
    desc: "Our designers and technical team prepare landscape layouts, planting plans, hardscape drawings, irrigation coordination, lighting layouts, and other technical documents required for accurate planning and smooth execution.",
    img: "/images/mission.webp",
  },
  {
    id: "05",
    title: "Execution, Build & Installation",
    desc: "Once the design is approved, our project team and craftsmen begin the transformation. From paving and decking to planting, lighting, pergolas, irrigation, and outdoor feature installation, every stage is executed with care and precision.",
    img: "/images/material.webp",
  },
  {
    id: "06",
    title: "Final Styling & Handover",
    desc: "Before handover, we complete final checks, planting review, finishing touches, cleaning, and quality inspection to ensure your landscaped space feels polished, functional, and ready for outdoor living.",
    img: "/images/customized.webp",
  },
];

const faqs = [
  {
    question: "How long do landscape services in Dubai usually take?",
    answer:
      "The timeline depends on the project size, site condition, design scope, and the type of landscape features involved. In most cases, landscape projects in Dubai can take from a few weeks to a few months from concept to completion.",
  },
  {
    question: "Do you provide landscape services for both residential and commercial properties?",
    answer:
      "Yes, we provide landscape services for villas, townhouses, apartment outdoor areas, offices, restaurants, cafes, retail spaces, and other residential and commercial properties across Dubai.",
  },
  {
    question: "Do you provide both landscape design and execution?",
    answer:
      "Yes, we offer complete landscape services including concept development, space planning, material and planting selection, technical drawings, and on-site execution.",
  },
  {
    question: "What affects the cost of landscape services in Dubai?",
    answer:
      "The cost depends on the size of the outdoor area, paving, planting, irrigation, lighting, decking, pergolas, water features, custom elements, and the overall level of design and execution involved.",
  },
  {
    question: "Can you make my outdoor space look more luxurious and functional?",
    answer:
      "Yes, our landscape approach focuses on improving layout, greenery, circulation, comfort, lighting, and outdoor features so the space feels more elegant, usable, and visually impressive.",
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
                Premium landscape services in Dubai
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                Are you looking for
                <a
                  href="https://radyinterior.ae/"
                  className=" ml-1"
                >
                  landscape services in Dubai <span></span>
                </a>
                that transform your outdoor space into something elegant,
                functional, and inviting. You are at the right place.
                <br />
                With 15+ years of experience in design and fit-out,
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                creates landscape solutions that combine greenery, hardscape
                elements, outdoor comfort, and refined visual appeal.
                <br />
                Whether you want to upgrade a villa garden, create a relaxing
                outdoor seating area, or enhance the landscape of a residential
                or commercial property, our team helps shape spaces that feel
                polished, practical, and beautifully planned. Keep reading to
                discover how
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                delivers landscape services in Dubai tailored to your lifestyle,
                property type, and outdoor vision.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                15 Years of Experience
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37]">
                Get Best Landscape Services in Dubai
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
          Landscape Services Dubai We Provide
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
            for Your Landscape Services in Dubai?
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
            <p>
              With years of experience in outdoor design and enhancement,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              helps property owners in Dubai create landscape spaces that feel
              elegant, functional, and beautifully connected to the architecture.
            </p>

            <p>
              Landscape design is not only about plants and greenery. It is about
              creating a complete outdoor experience with circulation, comfort,
              visual harmony, and features that improve how the space is used
              every day.
            </p>

            <p>
              Our process starts by understanding your property, outdoor goals,
              lifestyle needs, maintenance preferences, and design direction so
              we can create a landscape solution that feels both refined and
              practical.
            </p>

            <p>
              From gardens and pathways to pergolas, seating areas, lighting,
              irrigation, decking, and decorative outdoor features,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              develops landscape solutions that balance beauty, usability, and
              long-term outdoor performance.
              <br />
              <br />
              We carefully select paving materials, plants, feature elements,
              finishes, and lighting details that enhance the outdoor environment
              while standing up to local climate conditions and daily use.
              <br />
              <br />
              Our team focuses on proper planning, visual proportion, and clean
              execution so the final landscape feels complete, welcoming, and
              naturally integrated into the property.
              <br />
              <br />
              When you choose
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              you choose a professional team dedicated to delivering landscape
              services in Dubai with quality, creativity, and lasting outdoor
              value.
            </p>
          </div>
        </div>

        <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
          <div className="w-full lg:w-2/3 space-y-4">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Our Dubai Landscape Projects
            </h2>
            <p className="text-sm sm:text-base">
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              works on residential and commercial outdoor projects in Dubai,
              helping clients improve the comfort, beauty, and functionality of
              their exterior spaces.
            </p>
            <p className="text-sm sm:text-base">
              Every landscape project is planned with attention to circulation,
              paving, greenery, lighting, seating, shade features, and the
              overall outdoor experience of the property.
            </p>
            <p className="text-sm sm:text-base">
              Clients trust
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              to create landscapes that feel polished, practical, and more
              visually balanced than standard outdoor layouts.
            </p>
            <p className="text-sm sm:text-base">
              From villa gardens to commercial outdoor settings, our work focuses
              on greenery, structure, comfort, and premium finishing suited to
              properties across Dubai.
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
              6-Step Process For Our Landscape Services In Dubai
            </h2>
            <p className="font-play text-sm sm:text-base max-w-2xl mx-auto">
              We follow a clear and transparent 6-step process to deliver
              well-planned landscape services in Dubai.
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
            Landscape Services Dubai, Crafted for Outdoor Comfort and Beauty
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-6 font-play">
              <h2 className="text-xl font-conthrax mb-4 text-[#d4af37]">
                Our Landscape Services in Dubai
              </h2>
              <p>
                Our landscape services are tailored to improve the appearance,
                function, and overall outdoor experience of your property.
                Whether you want a modern garden, a luxury villa landscape, or a
                more usable commercial outdoor area, we design according to your
                space and lifestyle needs.
              </p>
              <p>Our Featured Services:</p>
              <ul className="list-decimal pl-5 space-y-2">
                <li>
                  <p className="font-play">
                    <b>Garden Design & Planting Solutions – </b>
                    Outdoor concepts created to improve greenery, comfort, and
                    visual balance
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Paving, Pathways & Hardscape Design –</b> Practical and
                    elegant outdoor surfaces planned for movement and style
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Pergolas, Seating & Outdoor Feature Design – </b>
                    Carefully planned elements that improve relaxation and outdoor
                    functionality
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Landscape Lighting & Irrigation Coordination –</b>
                    Well-planned systems that improve nighttime appeal and plant
                    performance
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Decking, Water Features & Enhancements – </b>
                    Landscape additions designed to elevate comfort and outdoor
                    character
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Landscape Execution & Finishing –</b> Complete support from
                    concept and detailing to final outdoor installation and
                    finishing
                  </p>
                </li>
              </ul>

              <p>
                We are among the trusted companies for landscape services in
                Dubai, helping property owners create outdoor spaces that feel
                elegant, functional, and beautifully tailored to the site.
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
            Landscape Services Dubai – FAQs
          </h2>
          <p className="font-play text-sm sm:text-base mb-6 text-center">
            Find quick answers to common questions about our landscape services
            in Dubai.
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