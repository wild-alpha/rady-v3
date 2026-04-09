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
    title: "Initial Consultation & Outdoor Concept",
    desc: "We begin with a detailed consultation to understand your outdoor space, usage requirements, style preferences, material expectations, and budget. This helps us shape a decking concept that is both practical and visually appealing.",
    img: "/images/mission.webp",
  },
  {
    id: "02",
    title: "Site Inspection & Decking Layout Planning",
    desc: "Our team studies the outdoor area, levels, access points, drainage conditions, circulation, surrounding landscaping, and functional needs. We then prepare a decking layout that supports comfort, durability, and efficient use of the space.",
    img: "/images/material.webp",
  },
  {
    id: "03",
    title: "Material, Finish & Detail Selection",
    desc: "We help you choose decking materials, finishes, railing options, skirting details, lighting elements, and border treatments that match your outdoor design style while ensuring weather resistance and long-term performance.",
    img: "/images/customized.webp",
  },
  {
    id: "04",
    title: "Technical Drawings & Build Planning",
    desc: "Our designers and technical team prepare decking layouts, construction details, level plans, edge treatments, support structure drawings, and other technical documents needed for accurate planning and smooth execution.",
    img: "/images/mission.webp",
  },
  {
    id: "05",
    title: "Decking Construction & Installation",
    desc: "Once the design is approved, our craftsmen and site team begin the build process. From substructure preparation and leveling to deck board installation, edging, and finishing, every stage is executed with precision and care.",
    img: "/images/material.webp",
  },
  {
    id: "06",
    title: "Final Finishing & Handover",
    desc: "Before handover, we complete finishing checks, alignment review, detail corrections, cleaning, and quality control to ensure your decking area is polished, durable, and ready for outdoor use.",
    img: "/images/customized.webp",
  },
];

const faqs = [
  {
    question: "How long do decking design and build services in Dubai usually take?",
    answer:
      "The timeline depends on the size of the area, design complexity, site condition, and materials selected. In most cases, decking design and build projects in Dubai can take from a few days to several weeks depending on the scope.",
  },
  {
    question: "Can you build decking for different outdoor spaces?",
    answer:
      "Yes, we provide decking design and build services for villas, gardens, terraces, balconies, poolside areas, patios, courtyards, rooftops, and commercial outdoor spaces across Dubai.",
  },
  {
    question: "Do you provide both decking design and execution?",
    answer:
      "Yes, we offer complete decking design and build services including concept planning, layout development, material selection, technical detailing, site preparation, and full on-site construction.",
  },
  {
    question: "What affects the cost of decking in Dubai?",
    answer:
      "The cost depends on the size of the area, decking material type, level differences, support structure requirements, edge detailing, railing, lighting, access conditions, and the overall complexity of the installation.",
  },
  {
    question: "Can decking be designed to match my villa or landscape style?",
    answer:
      "Yes, our decking solutions are designed to complement your villa exterior, garden layout, pool area, outdoor furniture, and overall landscape design so the final result feels cohesive and well integrated.",
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
                Premium decking design & build services in Dubai
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                Are you looking for
                <a
                  href="https://radyinterior.ae/"
                  className=" ml-1"
                >
                  decking design & build services in Dubai <span></span>
                </a>
                that transform your outdoor space into a stylish and functional
                area. You are at the right place.
                <br />
                With 15+ years of experience in design and fit-out,
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                creates decking solutions that combine durability, outdoor comfort,
                premium aesthetics, and practical planning.
                <br />
                Whether you want decking for a garden, poolside, terrace, balcony,
                patio, or a larger outdoor entertainment area, our team helps turn
                your vision into a refined and usable outdoor setting. Keep
                reading to discover how
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                delivers decking design & build services in Dubai tailored to your
                space, lifestyle, and exterior design goals.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                15 Years of Experience
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37]">
                Get Best Decking Design & Build Services in Dubai
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
          Decking Design & Build Dubai Services We Provide
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
            for Your Decking Design & Build Services in Dubai?
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
            <p>
              With years of experience in outdoor enhancement and fit-out,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              helps clients in Dubai create decking spaces that feel stylish,
              durable, and perfectly suited to outdoor living.
            </p>

            <p>
              Decking is not only about covering an outdoor surface. It is about
              improving the way the area looks, feels, and functions for everyday
              use, relaxation, entertaining, and movement.
            </p>

            <p>
              Our process starts by understanding how you want to use the space,
              your preferred design direction, site conditions, material
              expectations, and how the decking should connect with the surrounding
              outdoor elements.
            </p>

            <p>
              From poolside decks and garden pathways to terraces, balconies, and
              larger outdoor lounge areas,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              develops decking solutions that balance beauty, comfort, and
              long-term performance.
              <br />
              <br />
              We carefully select materials, finishes, support systems, edge
              details, and design features that can withstand outdoor conditions
              while maintaining a premium and polished look.
              <br />
              <br />
              Our team focuses on proper leveling, structural accuracy, installation
              quality, and finishing precision so the final decking area feels
              complete, safe, and visually integrated into the property.
              <br />
              <br />
              When you choose
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              you choose a professional team dedicated to delivering decking design
              & build services in Dubai with quality workmanship, practical
              planning, and elegant results.
            </p>
          </div>
        </div>

        <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
          <div className="w-full lg:w-2/3 space-y-4">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Our Dubai Decking Projects
            </h2>
            <p className="text-sm sm:text-base">
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              works on outdoor projects in Dubai, creating decking areas that
              improve comfort, appearance, and the usability of exterior spaces.
            </p>
            <p className="text-sm sm:text-base">
              Every decking project is planned with close attention to site
              conditions, levels, circulation, drainage, surrounding landscape, and
              the overall visual language of the property.
            </p>
            <p className="text-sm sm:text-base">
              Clients trust
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              to create decking solutions that feel elegant, practical, and far
              more refined than standard outdoor flooring approaches.
            </p>
            <p className="text-sm sm:text-base">
              From compact terraces to larger outdoor entertainment areas, our work
              focuses on durability, visual harmony, user comfort, and premium
              finishing suited to outdoor spaces across Dubai.
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
              6-Step Process For Our Decking Design & Build Services In Dubai
            </h2>
            <p className="font-play text-sm sm:text-base max-w-2xl mx-auto">
              We follow a clear and transparent 6-step process to deliver
              well-planned decking design & build services in Dubai.
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
            Decking Design & Build Services Dubai, Crafted for Outdoor Living
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-6 font-play">
              <h2 className="text-xl font-conthrax mb-4 text-[#d4af37]">
                Our Decking Design & Build Services in Dubai
              </h2>
              <p>
                Our decking design & build services are tailored to create durable,
                elegant, and highly functional outdoor surfaces that match your
                property style and practical needs. Whether you need a small deck
                or a full outdoor transformation, we design and build with
                precision and care.
              </p>
              <p>Our Featured Services:</p>
              <ul className="list-decimal pl-5 space-y-2">
                <li>
                  <p className="font-play">
                    <b>Garden & Landscape Decking – </b>
                    Tailored decking solutions designed to improve comfort and
                    appearance in outdoor garden spaces
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Poolside & Patio Decking –</b> Durable and stylish decking
                    designed for relaxation, safety, and outdoor enjoyment
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Terrace & Balcony Decking – </b>
                    Space-enhancing decking solutions created for elevated outdoor
                    living areas
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Custom Edge Details & Finishing –</b> Carefully executed
                    borders, skirting, and design details for a polished deck
                    finish
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Outdoor Lighting & Feature Integration – </b>
                    Smart additions that improve usability and visual impact in the
                    decking area
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Decking Construction & Installation –</b> Complete end-to-end
                    service from layout planning and preparation to final deck
                    installation
                  </p>
                </li>
              </ul>

              <p>
                We are among the trusted companies for decking design & build
                services in Dubai, helping clients create outdoor spaces that feel
                elegant, practical, and beautifully tailored to the property.
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
            Decking Design & Build Services Dubai – FAQs
          </h2>
          <p className="font-play text-sm sm:text-base mb-6 text-center">
            Find quick answers to common questions about our decking design &
            build services in Dubai.
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