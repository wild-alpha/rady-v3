"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const serviceCards = [
  {
    src: "/images/1 (2).JPG",
    link: "/dressing-room-interior-design-dubai",
    title: "Dressing Room Interior Design",
  },
  {
    src: "/images/1 (11).JPG",
    link: "/walk-in-closet-design-dubai",
    title: "Walk In Closet Design",
  },
  {
    src: "/images/1 (4).JPG",
    link: "/luxury-dressing-room-design-dubai",
    title: "Luxury Dressing Room Design",
  },
];

const textImage = {
  src: "/images/5.PNG",
  link: "/villa-damac-hills-5-bedroom",
  title: "Damac Hills Villa",
};

const galleryImages = [
  {
    src: "/images/vservice1.webp",
    link: "/emirates-hills-villa",
    title: "EMIRATES HILLS VILLA",
  },
  {
    src: "/images/vservice1.webp",
    link: "/emirates-hills-villa",
    title: "EMIRATES HILLS VILLA",
  },
  {
    src: "/images/vservice1.webp",
    link: "/emirates-hills-villa",
    title: "EMIRATES HILLS VILLA",
  },
  {
    src: "/images/vservice1.webp",
    link: "/emirates-hills-villa",
    title: "EMIRATES HILLS VILLA",
  },
  {
    src: "/images/vservice1.webp",
    link: "/emirates-hills-villa",
    title: "EMIRATES HILLS VILLA",
  },
  {
    src: "/images/vservice1.webp",
    link: "/emirates-hills-villa",
    title: "EMIRATES HILLS VILLA",
  },
];

const faqs = [
  {
    question: "How long does a dressing room interior design project in Dubai usually take?",
    answer:
      "The timeline depends on the size of the dressing room, level of customization, and fit-out requirements. In most cases, dressing room interior design projects in Dubai can take from a few weeks to a couple of months from concept to installation.",
  },
  {
    question: "Can you design both compact dressing areas and luxury walk-in closets?",
    answer:
      "Yes, we design all types of dressing rooms, from compact wardrobe spaces and dressing corners to spacious walk-in closets and luxury dressing suites in villas and apartments across Dubai.",
  },
  {
    question: "Do you provide both dressing room design and fit-out execution?",
    answer:
      "Yes, we offer complete dressing room interior design support including concept development, storage planning, material selection, technical drawings, custom joinery, and installation.",
  },
  {
    question: "What affects the cost of dressing room interior design in Dubai?",
    answer:
      "The cost depends on the room size, wardrobe layout, storage accessories, finishes, lighting, mirror details, glass elements, hardware, and the overall level of customization required.",
  },
  {
    question: "Can you make a dressing room more organized and luxurious at the same time?",
    answer:
      "Yes, our dressing room designs focus on combining smart storage, display-friendly layouts, elegant finishes, balanced lighting, and practical circulation so the space feels both organized and luxurious.",
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
                Premium dressing room interior design services in Dubai
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                Are you looking for
                <a
                  href="https://radyinterior.ae/"
                  className=" ml-1"
                >
                  dressing room interior design services in Dubai <span></span>
                </a>
                that combine elegance, organization, and everyday practicality.
                You are at the right place.
                <br />
                With 15+ years of experience in residential interior design,
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                creates dressing room interiors that feel refined, functional,
                and tailored to your lifestyle, storage needs, and personal taste.
                <br />
                Whether you want a compact dressing space or a luxury walk-in
                closet, our team helps shape interiors that feel organized,
                stylish, and comfortable to use every day. Keep reading to
                discover how
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                delivers dressing room interior design solutions in Dubai tailored
                to your comfort, storage needs, and design vision.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                15 Years of Experience
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37]">
                Get Best Dressing Room Interior Design Services in Dubai
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/06.jpg"
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
          Dressing Room Interior Design Dubai Services We Provide
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
            for Your Dressing Room Interior Design in Dubai?
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
            <p>
              With years of experience in residential interior design,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              helps homeowners in Dubai create dressing room interiors that feel
              elegant, organized, and tailored to modern living.
            </p>

            <p>
              A dressing room should be more than a storage area. It should
              support daily routines, make organization easier, and create a calm,
              luxurious environment where everything feels accessible and well
              arranged.
            </p>

            <p>
              We begin by understanding your wardrobe habits, storage needs, style
              preferences, layout challenges, and comfort expectations so we can
              design a dressing room that truly matches your lifestyle.
            </p>

            <p>
              From compact dressing corners to spacious walk-in dressing rooms,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              creates tailored interiors that combine smart storage planning,
              refined materials, and carefully designed joinery.
              <br />
              <br />
              We thoughtfully select finishes, shelving systems, wardrobes,
              drawers, mirrors, lighting, and display elements that create visual
              harmony while maintaining functionality and everyday comfort.
              <br />
              <br />
              Our team focuses on layout efficiency, elegant detailing, and clean
              execution so the final dressing room feels polished, practical, and
              truly personal.
              <br />
              <br />
              When you choose
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              you choose a professional team dedicated to delivering dressing room
              interior design services in Dubai with quality, creativity, and
              lasting comfort.
            </p>
          </div>
        </div>

        <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
          <div className="w-full lg:w-2/3 space-y-4">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Our Dubai Dressing Room Design Projects
            </h2>
            <p className="text-sm sm:text-base">
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              works on residential interior projects in Dubai, including dressing
              rooms designed for organization, comfort, and elegant living.
            </p>
            <p className="text-sm sm:text-base">
              Every dressing room design project is planned with attention to
              wardrobe arrangement, storage categories, lighting, mirror placement,
              finishes, and the overall style of the home.
            </p>
            <p className="text-sm sm:text-base">
              Clients trust
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              to create dressing room interiors that feel luxurious, practical,
              and highly organized without compromising visual refinement.
            </p>
            <p className="text-sm sm:text-base">
              From modern minimalist dressing areas to larger walk-in closets, our
              work focuses on smart storage, personalization, and premium finishing
              suited to homes in Dubai.
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

        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          OUR DRESSING ROOM DESIGN PROJECTS IN DUBAI
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
            Bespoke Dressing Room Interior Design Dubai, Crafted for Organization and Style
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-6 font-play">
              <h2 className="text-xl font-conthrax mb-4 text-[#d4af37]">
                Our Dressing Room Interior Design Services in Dubai
              </h2>
              <p>
                Our dressing room interior design services are tailored to improve
                organization, functionality, and the overall appearance of your
                personal storage space. Whether you want a modern dressing room, a
                luxury walk-in closet, or a compact yet efficient dressing area,
                we design according to your lifestyle and preferences.
              </p>
              <p>Our Featured Services:</p>
              <ul className="list-decimal pl-5 space-y-2">
                <li>
                  <p className="font-play">
                    <b>Dressing Room Layout Planning – </b>
                    Smart space planning for comfortable movement and efficient
                    storage use
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Wardrobe & Storage Design –</b> Functional and elegant
                    storage systems tailored to your clothing and accessory needs
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Mirror, Seating & Styling Coordination – </b>
                    Well-balanced design elements that improve comfort and everyday
                    dressing routines
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Lighting & Display Design –</b> Soft and practical lighting
                    solutions that enhance visibility and dressing room atmosphere
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Finishes & Custom Joinery Selection – </b>
                    Carefully chosen textures, materials, and joinery details for a
                    refined dressing room look
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Dressing Room Fit-Out & Installation –</b> Complete
                    execution with careful detailing, storage integration, and final
                    setup
                  </p>
                </li>
              </ul>

              <p>
                We are among the trusted companies for dressing room interior
                design in Dubai, helping homeowners create spaces that feel
                elegant, functional, and beautifully organized for daily living.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/khalifa al ali- master bedroom-dressing-back side view 2-25.01.jpg"
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
            Dressing Room Interior Design Dubai – FAQs
          </h2>
          <p className="font-play text-sm sm:text-base mb-6 text-center">
            Find quick answers to common questions about our dressing room
            interior design services in Dubai.
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