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
    title: "Initial Consultation & Outdoor Kitchen Brief",
    desc: "We begin with a detailed consultation to understand your outdoor cooking needs, entertainment style, space requirements, preferred appliances, material expectations, and budget. This helps us create an outdoor kitchen concept that feels practical, elegant, and suited to your lifestyle.",
    img: "/images/mission.webp",
  },
  {
    id: "02",
    title: "Site Study & Space Planning",
    desc: "Our team studies the outdoor area, circulation, weather exposure, utility points, seating possibilities, ventilation, and available layout options. We then prepare a space plan that improves functionality, comfort, and the overall outdoor cooking experience.",
    img: "/images/material.webp",
  },
  {
    id: "03",
    title: "Material, Countertop & Finish Selection",
    desc: "We help you choose outdoor-friendly cabinetry, countertops, cladding, storage solutions, lighting, sink areas, and finishing materials that match your design style while ensuring durability, weather resistance, and easy maintenance.",
    img: "/images/customized.webp",
  },
  {
    id: "04",
    title: "Technical Drawings & Build Detailing",
    desc: "Our designers and technical team prepare outdoor kitchen layouts, countertop details, utility coordination, joinery drawings, appliance positioning, and other technical documents required for accurate planning and smooth execution.",
    img: "/images/mission.webp",
  },
  {
    id: "05",
    title: "Build Execution & Installation",
    desc: "Once the design is approved, our craftsmen and project team begin the build process. From structure preparation and finishes to countertops, cabinetry, appliances, lighting, and fittings, every element is executed with care and precision.",
    img: "/images/material.webp",
  },
  {
    id: "06",
    title: "Final Finishing & Handover",
    desc: "Before handover, we complete final checks, finishing touches, alignment review, cleaning, and quality inspection so your outdoor kitchen feels polished, functional, and ready for cooking and entertaining.",
    img: "/images/customized.webp",
  },
];

const faqs = [
  {
    question: "How long do outdoor kitchens design and build projects in Dubai usually take?",
    answer:
      "The timeline depends on the size of the outdoor kitchen, site condition, utility requirements, and level of customization involved. In most cases, outdoor kitchen design and build projects in Dubai can take from a few weeks to a couple of months.",
  },
  {
    question: "Can you design outdoor kitchens for villas and other outdoor spaces?",
    answer:
      "Yes, we design and build outdoor kitchens for villas, gardens, terraces, patios, poolside areas, rooftops, and other residential outdoor spaces across Dubai.",
  },
  {
    question: "Do you provide both outdoor kitchen design and build execution?",
    answer:
      "Yes, we offer complete outdoor kitchen design and build services including concept development, layout planning, material selection, technical drawings, utility coordination, and on-site execution.",
  },
  {
    question: "What affects the cost of outdoor kitchen design and build in Dubai?",
    answer:
      "The cost depends on the kitchen size, countertop materials, cabinetry, appliances, utility requirements, weather-resistant finishes, lighting, storage features, and the overall level of customization involved.",
  },
  {
    question: "Can you make an outdoor kitchen both stylish and practical?",
    answer:
      "Yes, our outdoor kitchen approach focuses on combining smart layout planning, durable materials, weather-resistant finishes, functional storage, and elegant design so the space feels both beautiful and highly usable.",
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
                Premium outdoor kitchens design & build services in Dubai
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                Are you looking for
                <a
                  href="https://radyinterior.ae/"
                  className=" ml-1"
                >
                  outdoor kitchens design & build services in Dubai <span></span>
                </a>
                that combine functionality, style, and outdoor living comfort.
                You are at the right place.
                <br />
                With 15+ years of experience in design and fit-out,
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                creates outdoor kitchen spaces that feel refined, practical, and
                tailored to modern entertaining, cooking, and family gatherings.
                <br />
                Whether you want a compact barbecue station or a fully equipped
                outdoor kitchen with counters, storage, and seating integration,
                our team helps shape spaces that feel durable, elegant, and ready
                for daily use. Keep reading to discover how
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                delivers outdoor kitchens design & build services in Dubai
                tailored to your outdoor lifestyle, property layout, and design
                vision.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                15 Years of Experience
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37]">
                Get Best Outdoor Kitchens Design & Build Services in Dubai
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
          Outdoor Kitchens Design & Build Dubai Services We Provide
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
            for Your Outdoor Kitchens Design & Build in Dubai?
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
            <p>
              With years of experience in outdoor enhancement and custom
              build solutions,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              helps homeowners in Dubai create outdoor kitchens that feel
              elegant, practical, and perfectly suited to outdoor living.
            </p>

            <p>
              An outdoor kitchen should do more than hold a grill or countertop.
              It should support cooking, serving, entertaining, storage, and
              movement while also adding value and visual appeal to your outdoor
              environment.
            </p>

            <p>
              Our process starts by understanding your cooking habits, hosting
              style, outdoor layout, appliance needs, material preferences, and
              how the kitchen should connect with the rest of the landscape or
              seating area.
            </p>

            <p>
              From compact barbecue counters to fully customized outdoor kitchen
              zones with storage, sinks, preparation areas, and seating
              integration,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              develops outdoor kitchen solutions that balance beauty, durability,
              and long-term performance.
              <br />
              <br />
              We carefully select weather-resistant materials, countertops,
              cabinetry, lighting, and utility-friendly layouts that improve the
              outdoor cooking experience while maintaining a premium finish.
              <br />
              <br />
              Our team focuses on proper planning, utility coordination, build
              quality, and finishing precision so the final outdoor kitchen feels
              complete, functional, and naturally integrated into the property.
              <br />
              <br />
              When you choose
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              you choose a professional team dedicated to delivering outdoor
              kitchens design & build services in Dubai with quality workmanship,
              practical planning, and elegant outdoor results.
            </p>
          </div>
        </div>

        <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
          <div className="w-full lg:w-2/3 space-y-4">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Our Dubai Outdoor Kitchen Projects
            </h2>
            <p className="text-sm sm:text-base">
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              works on outdoor living projects in Dubai, including outdoor
              kitchens designed for comfort, entertaining, and practical cooking
              use.
            </p>
            <p className="text-sm sm:text-base">
              Every outdoor kitchen project is planned with attention to layout,
              cooking flow, weather exposure, utility access, storage,
              countertops, and the overall design language of the property.
            </p>
            <p className="text-sm sm:text-base">
              Clients trust
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              to create outdoor kitchen spaces that feel elegant, practical, and
              more refined than standard outdoor cooking setups.
            </p>
            <p className="text-sm sm:text-base">
              From compact garden kitchens to larger outdoor entertainment zones,
              our work focuses on durability, visual harmony, user comfort, and
              premium finishing suited to outdoor spaces across Dubai.
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
              6-Step Process For Our Outdoor Kitchens Design & Build Services In Dubai
            </h2>
            <p className="font-play text-sm sm:text-base max-w-2xl mx-auto">
              We follow a clear and transparent 6-step process to deliver
              well-planned outdoor kitchens design & build services in Dubai.
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
            Outdoor Kitchens Design & Build Dubai, Crafted for Cooking and Entertaining
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-6 font-play">
              <h2 className="text-xl font-conthrax mb-4 text-[#d4af37]">
                Our Outdoor Kitchens Design & Build Services in Dubai
              </h2>
              <p>
                Our outdoor kitchens design & build services are tailored to
                create durable, elegant, and highly functional outdoor cooking
                spaces that match your property style and practical needs.
                Whether you need a compact cooking counter or a complete outdoor
                kitchen setup, we design and build with precision and care.
              </p>
              <p>Our Featured Services:</p>
              <ul className="list-decimal pl-5 space-y-2">
                <li>
                  <p className="font-play">
                    <b>Outdoor Kitchen Layout Planning – </b>
                    Smart space planning for comfortable cooking, serving, and
                    movement in open-air settings
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Countertops, Cabinets & Storage Solutions –</b> Practical
                    and weather-resistant outdoor kitchen elements tailored to
                    your needs
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Appliance & Utility Coordination – </b>
                    Well-planned integration for grills, sinks, preparation
                    zones, and functional outdoor use
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Lighting & Outdoor Feature Integration –</b> Carefully
                    planned lighting and support elements that improve usability
                    and visual appeal
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Weather-Resistant Materials & Finishes – </b>
                    Outdoor-friendly surfaces and details selected for durability
                    and long-term performance
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Outdoor Kitchen Construction & Installation –</b> Complete
                    end-to-end service from concept planning to final build and
                    installation
                  </p>
                </li>
              </ul>

              <p>
                We are among the trusted companies for outdoor kitchens design &
                build services in Dubai, helping clients create outdoor spaces
                that feel elegant, practical, and beautifully tailored to the
                property.
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
            Outdoor Kitchens Design & Build Dubai – FAQs
          </h2>
          <p className="font-play text-sm sm:text-base mb-6 text-center">
            Find quick answers to common questions about our outdoor kitchens
            design & build services in Dubai.
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