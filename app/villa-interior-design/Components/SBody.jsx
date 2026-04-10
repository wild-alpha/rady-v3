"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const serviceCards = [
  {
    title: "Al Zahia Villa Interior",
    src: "/images/al-zahia-villa-interior.webp",
    link: "/al-zahia-villa-interior",
  },
  {
    title: "Sharjah Sustainable City Villa",
    src: "/images/sharjah-sustainable-city-villa.png",
    link: "/sharjah-sustainable-city-villa",
  },
  {
    title: "Tilal City Villa Interior",
    src: "/images/tilal-city-villa-interior.webp",
    link: "/tilal-city-villa-interior",
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
    title: "PALM JUMEIRAH VILLA",
  },
  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "EMIRATES HILLS VILLA",
  },

  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "PALM JUMEIRAH VILLA",
  },
  {
    src: "/images/vservice1.webp",
    link: "/emirates-hills-villa",
    title: "DISTRICT ONE MBR VILLA",
  },
  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "DUBAI HILLS ESTATE VILLA",
  },

  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "AL BARARI VILLA",
  },
];

const villaSteps = [
  {
    id: "01",
    title: "Initial Consultation & Concept",
    desc: "At the beginning, we usually do a thoughtful and in-depth consultation to understand your needs, lifestyle and design expectations. This enables us to set an exclusive and unique creative direction for your vision.",
    img: "/images/mission.webp",
  },
  {
    id: "02",
    title: "Site Study & Space Planning",
    desc: "Efficient architectures and building engineers conduct a comprehensive assessment of your villa after initial consultation. They also make assessment for architectural features, natural light. We create customized space plans.",
    img: "/images/material.webp",
  },
  {
    id: "03",
    title: "Material, Furniture & Finishing Selection",
    desc: "For the material sources we have an efficient suppliers/manufacturers within Dubai and outside Dubai. From our trusted suppliers/manufacturers we source premium materials, high end fabrics and unique decor pieces.",
    img: "/images/customized.webp",
  },
  {
    id: "04",
    title: "Technical Drawings",
    desc: "Our team of draftsmen and architectural designers prepare full set of architectural drawings, lighting layouts, joinery plans and technical documents that are required and aligned with Dubai design standard.",
    img: "/images/mission.webp",
  },
  {
    id: "05",
    title: "Project Execution, Fit-Out & Installation",
    desc: "Now it comes execution, the part which transforms vision into reality. Here our site specialists and dedicated craftsmen blend magic with colors and materials. From flooring to interior finishes we take care of each details.",
    img: "/images/material.webp",
  },
  {
    id: "06",
    title: "Final Styling & Handover",
    desc: "At the completion and just before delivery, we curated artworks, accessories and interior finishes to bring the decided design into life in your villa. The handover unwrap a space that reflects your vision.",
    img: "/images/customized.webp",
  },
];

const faqs = [
  {
    question: "How long does a villa interior design project in Dubai usually take?",
    answer:
      "The timeline depends on the villa size, scope and level of customization. On average, a full villa interior design and fit out in Dubai can take anywhere from 3 to 9 months from concept to final handover.",
  },
  {
    question: "Do you only work on complete villas, or can you design specific rooms?",
    answer:
      "We work on both complete villas and specific spaces such as living rooms, bedrooms, majlis, kitchens or basements. However, we always ensure that every space remains aligned with the overall villa design language.",
  },
  {
    question: "Can you work with my existing furniture and decor?",
    answer:
      "Yes, if there are certain pieces you love, we can integrate them into the new design. Our team carefully evaluates what can be reused, refinished or reupholstered while still maintaining a premium overall look.",
  },
  {
    question: "What is the typical budget range for villa interior design in Dubai?",
    answer:
      "Budgets vary based on villa size, finishes and brand preferences. During the initial consultation, we discuss your expectations and provide a realistic budget bracket that matches your lifestyle and the level of luxury you want to achieve.",
  },
  {
    question: "Do you handle approvals and coordination with contractors?",
    answer:
      "Yes, our team supports you with technical drawings, authority-related requirements where applicable, and complete coordination with contractors, suppliers and site teams to ensure a smooth and stress-free process.",
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
                Luxury modern villa interior design services in Dubai
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                Are you looking for
                <a href="https://radyinterior.ae/" className=" ml-1">
                  premium villa interior design services in Dubai <span></span>
                </a>
                that reflect ease of living and a luxury lifestyle. You are on right
                spot.
                <br />
                From the founders having 15+ years of experience transforming
                living spaces into premium livings especially villas in Dubai's most
                high end communities,
                <a href="https://radyinterior.ae/" className="ml-1">
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                crafts creative originality and upscale your villa from vision to a
                living reality.
                <br />
                Our vision showcase contemporary and modern luxury with functional
                living to create specific spaces that feel you exclusive, polished
                and personal. Keep reading to unfold that
                <a href="https://radyinterior.ae/" className="ml-1">
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                how to craft your Dubai villa into a living reality from your
                visions and exclusively designed for your personalized lifestyle.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                15 Years of Experience
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37]">
                Get Best Villa Interior Design and Fit Out in Dubai
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
          Villa Interior Design Dubai Services We Provide
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
            for Your Villa Interior Design in Dubai?
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
            <p>
              With the credible background and 15+ years of experience from the
              founders,
              <a href="https://radyinterior.ae/" className="ml-1">
                Rady Interior Design & Fit Out <span></span>
              </a>
              has unique position of trust from the homeowners, developers and
              high profile clients in Dubai, where we have delivered premium and
              customized villa interiors.
            </p>

            <p>
              <a href="https://radyinterior.ae/" className="ml-1">
                Rady Interior Design & Fit Out <span></span>
              </a>
              built many projects in Dubai Marina, Palm Jumeirah, Emirates Hills,
              MBR City and in other high end living communities in Dubai. We have
              built a strong portfolio and reputation for excellence based on
              creative and consist on time project deliveries.
            </p>

            <p>
              Our work process so simple as it starts with a thoughtful
              conversation about design that enable us to understand your
              customized needs, lifestyle, vision and expectations from us.
            </p>

            <p>
              This step secures that the concept we built is on the basis of
              client's thoughts, meaningful and bespoke. Opposite the studio
              apartments that depends on pre-defined design for all.
              <a href="https://radyinterior.ae/" className="ml-1">
                Rady Interior Design & Fit Out <span></span>
              </a>
              creates your villa from ground level to up precisely, enables your
              living space feel as-only-yours but not a copy of standard
              template.
              <br />
              <br />
              R&D department of
              <a href="https://radyinterior.ae/" className="ml-1">
                Rady Interior Design & Fit Out <span></span>
              </a>
              continuously works to explore latest global trends, fine and premium
              materials and premium furnishings to develop interior options for
              clients.
              <br />
              <br />
              From exclusive designs, developing custom-joinery to integrating
              smart home solutions, we go beyond the limits to upscale your
              villa's character and comfort. To start from exclusive design, we
              are committed to responsible and future-focused practices.
              <br />
              <br />
              <a href="https://radyinterior.ae/" className="ml-1">
                Rady Interior Design & Fit Out <span></span>
              </a>
              a modern interior design studio, where we focus on premium but
              sustainable materials, excellent project management and seamless
              workflow to ensure that your villa is not only luxury in living but
              reflects conscious long term-term value.
              <br />
              <br />
              While choosing
              <a href="https://radyinterior.ae/" className="ml-1">
                Rady Interior Design & Fit Out, <span></span>
              </a>
              actually you are choosing an efficient team of professionals which
              is dedicated to crafting elegant living spaces.
            </p>
          </div>
        </div>

        <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
          <div className="w-full lg:w-2/3 space-y-4">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Our Dubai Villa Projects
            </h2>
            <p className="text-sm sm:text-base">
              <a href="https://radyinterior.ae/" className="ml-1">
                Rady Interior Design & Fit Out, <span></span>
              </a>
              completed many signature projects in Dubai's high end living
              communities like Palm Jumeirah, Emirates hills, MBR city and in
              other premium living communities.
            </p>
            <p className="text-sm sm:text-base">
              One of our villa project is located on the iconic Emirates Hills
              Dubai, we specially designed this villa for a client who believes in
              exclusivity and elevated luxury lifestyle.
            </p>
            <p className="text-sm sm:text-base">
              Villa owners approached us with clear brief: Team
              <a href="https://radyinterior.ae/" className="ml-1">
                Rady Interior Design & Fit Out! <span></span>
              </a>
              develop interiors that is aligned with refined luxury and something
              elegant. Especially for those who travelled abroad and experienced
              the world's finest settings.
            </p>
            <p className="text-sm sm:text-base">
              Every detail of villa projects was boarded to celebrate Dubai's
              luxury while delivering comfort, craftsmanship, and a sense of
              perfect home aligned with Dubai's luxury lifestyle.
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
          OUR VILLA INTERIOR DESIGN PROJECTS IN DUBAI
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
            Bespoke Villa Interior Design Dubai, Crafted for Luxury Living
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-6 font-play">
              <h2 className="text-xl font-conthrax mb-4 text-[#d4af37]">
                Our Interior Villa Design Services in Dubai
              </h2>
              <p>
                Our villa interior design services are tailored to fit your
                specific needs and preferences. Whether you are designing new
                villa or renovating an existing one, our services ensure luxury
                and comfort at every step.
              </p>
              <p>Our Featured Services:</p>
              <ul className="list-decimal pl-5 space-y-2">
                <li>
                  <p className="font-play">
                    <b>Architectural Design – </b>
                    Thoughtful layouts for luxury and practicality
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Landscape Design –</b> Luxury villa landscape design
                    service Dubai creating harmony between indoor and outdoor
                    spaces
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Electrical & Plumbing Design – </b>
                    Efficient, safe systems integrated for modern living
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Furniture & Decor Selection –</b> Curated, custom-made
                    pieces for a refined interior look
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Interior Fit Out in Dubai – </b>
                    Complete premium fit-out in Dubai, ensuring perfect
                    execution of design vision
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Smart Home Integration –</b> Advanced home automation for
                    lighting, climate, and security
                  </p>
                </li>
              </ul>

              <p>
                We rank among one of the best villa interior design companies in
                several areas of Dubai and we have completed our projects like{" "}
                <b>
                  <a href="https://wedointerior.ae/al-manara-luxury-villa">
                    Al Manara luxury Villa
                  </a>
                </b>
                ,{" "}
                <b>
                  <a href="https://wedointerior.ae/majan-villa-design">
                    Majan Villa Interior Design
                  </a>
                </b>{" "}
                and{" "}
                <b>
                  <a href="https://wedointerior.ae/district-1-mbr-city-contemporary-villa">
                    District one MBR (Muhammad Bin Rashid) City Villa
                  </a>
                </b>
                etc
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/08 (2).jpg"
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
            Villa Interior Design Dubai – FAQs
          </h2>
          <p className="font-play text-sm sm:text-base mb-6 text-center">
            Find quick answers to common questions about our villa interior
            design and fit-out services in Dubai.
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