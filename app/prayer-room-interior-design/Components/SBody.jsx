"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const serviceCards = [
  {
    src: "/images/WhatsApp Image 2026-03-03 at 12.30.32 PM copy.jpg",
    link: "/prayer-room-interior-design-dubai",
    title: "Prayer Room Interior Design",
  },
  {
    src: "/images/1 (8).jpg",
    link: "/home-prayer-room-design-dubai",
    title: "Home Prayer Room Design",
  },
  {
    src: "/images/2 (8).jpg",
    link: "/modern-prayer-room-design-dubai",
    title: "Modern Prayer Room Design",
  },
];

const textImage = {
  src: "/images/5 (7).jpg",
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

const villaSteps = [
  {
    id: "01",
    title: "Initial Consultation & Design Brief",
    desc: "We begin with a detailed consultation to understand your prayer room needs, spiritual preferences, daily usage, privacy expectations, design taste, and budget. This helps us shape a prayer room concept that feels peaceful, elegant, and deeply personal.",
    img: "/images/mission.webp",
  },
  {
    id: "02",
    title: "Site Study & Space Planning",
    desc: "Our team studies the prayer room layout, circulation, natural light, wall orientation, storage needs, seating possibilities, and available space. We then prepare a layout plan that improves calmness, comfort, and functional simplicity.",
    img: "/images/material.webp",
  },
  {
    id: "03",
    title: "Material, Lighting & Finish Selection",
    desc: "We help you choose wall finishes, flooring, carpets, lighting, shelving, decorative details, and soft interior elements that match the spiritual atmosphere you want while ensuring comfort, durability, and refined beauty.",
    img: "/images/customized.webp",
  },
  {
    id: "04",
    title: "Technical Drawings & Design Detailing",
    desc: "Our designers and technical team prepare prayer room layouts, ceiling plans, lighting drawings, wall feature details, joinery plans, and other documents required for accurate planning and smooth execution.",
    img: "/images/mission.webp",
  },
  {
    id: "05",
    title: "Fit-Out Execution & Installation",
    desc: "Once the design is finalized, our craftsmen and project team begin the transformation. From wall finishes and custom shelving to lighting, flooring, carpets, and decorative detailing, every element is executed with care and precision.",
    img: "/images/material.webp",
  },
  {
    id: "06",
    title: "Final Styling & Handover",
    desc: "Before handover, we complete final styling, finishing checks, accessory placement, cleaning, and quality review so your prayer room feels serene, polished, and ready for peaceful daily worship.",
    img: "/images/customized.webp",
  },
];

const faqs = [
  {
    question: "How long does a prayer room interior design project in Dubai usually take?",
    answer:
      "The timeline depends on the room size, design scope, and level of customization involved. In most cases, prayer room interior design projects in Dubai can take from a few weeks to a couple of months from concept to final setup.",
  },
  {
    question:
      "Can you design both compact prayer rooms and larger dedicated worship spaces?",
    answer:
      "Yes, we design all types of prayer spaces, from compact private prayer corners and home musalla rooms to larger dedicated prayer rooms in villas and residences across Dubai.",
  },
  {
    question: "Do you provide both prayer room design and fit-out execution?",
    answer:
      "Yes, we offer complete prayer room interior design support including concept development, space planning, material selection, technical drawings, custom shelving or joinery, and fit-out coordination.",
  },
  {
    question:
      "What affects the cost of prayer room interior design in Dubai?",
    answer:
      "The cost depends on the room size, wall finishes, ceiling details, lighting, carpets, shelving, decorative features, custom joinery, and the overall level of customization involved in the project.",
  },
  {
    question: "Can you make a prayer room feel both peaceful and elegant?",
    answer:
      "Yes, our prayer room design approach focuses on combining soft layouts, calm lighting, refined finishes, spiritual simplicity, and thoughtful styling so the space feels both peaceful and beautifully designed.",
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
                Peaceful prayer room interior design services in Dubai
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                Are you looking for
                <a href="https://radyinterior.ae/" className=" ml-1">
                  prayer room interior design services in Dubai <span></span>
                </a>
                that combine serenity, elegance, and spiritual comfort. You are
                at the right place.
                <br />
                With 15+ years of experience in residential interior design,
                <a href="https://radyinterior.ae/" className="ml-1">
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                creates prayer room interiors that feel calm, refined, and
                tailored to peaceful daily worship and reflection.
                <br />
                Whether you want a dedicated home prayer room or a beautifully
                designed prayer corner within your residence, our team helps shape
                spaces that feel spiritually uplifting, comfortable, and visually
                balanced. Keep reading to discover how
                <a href="https://radyinterior.ae/" className="ml-1">
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                delivers prayer room interior design solutions in Dubai tailored
                to your spiritual needs, comfort, and design vision.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                15 Years of Experience
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37]">
                Get Best Prayer Room Interior Design Services in Dubai
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/WhatsApp Image 2026-03-03 at 12.30.29 PM.jpeg"
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
          Prayer Room Interior Design Dubai Services We Provide
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
            for Your Prayer Room Interior Design in Dubai?
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
            <p>
              With years of experience in residential interior design,
              <a href="https://radyinterior.ae/" className="ml-1">
                Rady Interior Design & Fit Out <span></span>
              </a>
              helps homeowners in Dubai create prayer room interiors that feel
              peaceful, elegant, and deeply personal.
            </p>

            <p>
              A prayer room should be more than just a quiet space. It should
              support reflection, spiritual comfort, privacy, and calmness while
              maintaining visual simplicity and refined interior balance.
            </p>

            <p>
              We begin by understanding your spiritual routine, room size,
              preferred atmosphere, material taste, and layout needs so we can
              create a prayer room that truly supports peaceful daily worship.
            </p>

            <p>
              From compact prayer corners to dedicated home prayer rooms,
              <a href="https://radyinterior.ae/" className="ml-1">
                Rady Interior Design & Fit Out <span></span>
              </a>
              creates tailored interiors that combine thoughtful planning, soft
              materials, and carefully selected details.
              <br />
              <br />
              We thoughtfully choose carpets, lighting, wall treatments, shelving,
              ceiling details, and decorative features that create visual harmony
              while maintaining comfort, simplicity, and spiritual calmness.
              <br />
              <br />
              Our team focuses on serenity, elegance, and clean execution so the
              final prayer room feels polished, uplifting, and truly restful.
              <br />
              <br />
              When you choose
              <a href="https://radyinterior.ae/" className="ml-1">
                Rady Interior Design & Fit Out, <span></span>
              </a>
              you choose a professional team dedicated to delivering prayer room
              interior design services in Dubai with quality, care, and spiritual
              sensitivity.
            </p>
          </div>
        </div>

        <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
          <div className="w-full lg:w-2/3 space-y-4">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Our Dubai Prayer Room Design Projects
            </h2>
            <p className="text-sm sm:text-base">
              <a href="https://radyinterior.ae/" className="ml-1">
                Rady Interior Design & Fit Out, <span></span>
              </a>
              works on residential interior projects in Dubai, including prayer
              rooms designed for peace, comfort, and spiritual reflection.
            </p>
            <p className="text-sm sm:text-base">
              Every prayer room design project is planned with attention to room
              calmness, simplicity, lighting, material softness, storage,
              decorative restraint, and the overall atmosphere of the home.
            </p>
            <p className="text-sm sm:text-base">
              Clients trust
              <a href="https://radyinterior.ae/" className="ml-1">
                Rady Interior Design & Fit Out <span></span>
              </a>
              to create prayer room interiors that feel peaceful, practical, and
              deeply comforting without compromising elegance.
            </p>
            <p className="text-sm sm:text-base">
              From minimal prayer corners to more luxurious dedicated prayer
              spaces, our work focuses on serenity, personalization, and premium
              finishing suited to homes in Dubai.
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

        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-conthrax py-12 text-[#d4af37]">
            Bespoke Prayer Room Interior Design Dubai, Crafted for Peace and Reflection
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-6 font-play">
              <h2 className="text-xl font-conthrax mb-4 text-[#d4af37]">
                Our Prayer Room Interior Design Services in Dubai
              </h2>
              <p>
                Our prayer room interior design services are tailored to create
                calm, elegant, and highly personal spiritual spaces that support
                worship, reflection, and peace. Whether you want a compact prayer
                corner or a dedicated prayer room, we design according to your
                home and spiritual lifestyle.
              </p>
              <p>Our Featured Services:</p>
              <ul className="list-decimal pl-5 space-y-2">
                <li>
                  <p className="font-play">
                    <b>Prayer Room Layout Planning – </b>
                    Thoughtful space planning for calm movement, comfort, and
                    peaceful daily worship
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Wall Features & Spiritual Interior Coordination –</b>
                    Elegant design elements planned to support serenity and
                    refined simplicity
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Lighting, Carpets & Soft Interior Selection – </b>
                    Carefully chosen finishes and materials that enhance peace,
                    warmth, and comfort
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Shelving & Custom Joinery Solutions –</b> Functional and
                    beautiful storage or display elements tailored to your prayer
                    room needs
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Decorative Finishes & Calm Styling – </b>
                    Refined details and styling choices that create a spiritually
                    uplifting atmosphere
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Prayer Room Fit-Out & Installation –</b> Complete execution
                    with careful detailing, elegant finishing, and final styling
                    support
                  </p>
                </li>
              </ul>

              <p>
                We are among the trusted companies for prayer room interior
                design in Dubai, helping homeowners create spaces that feel
                peaceful, functional, and beautifully tailored for worship and
                reflection.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/01_Post.jpg"
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
            Prayer Room Interior Design Dubai – FAQs
          </h2>
          <p className="font-play text-sm sm:text-base mb-6 text-center">
            Find quick answers to common questions about our prayer room interior
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