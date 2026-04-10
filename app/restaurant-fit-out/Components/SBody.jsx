"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const designImages = [
  "/images/WhatsApp Image 2019-09-19 at 7.34.37 AM.jpeg",
  "/images/IMG-20190613-WA0040.jpg",
  "/images/463508757_414346.jpg",
];

const textImage = {
  src: "/images/WhatsApp Image 2019-09-19 at 7.34.40 AM.jpeg",
  link: "/villa-damac-hills-5-bedroom",
  title: "Restaurant Fit-out Dubai",
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
];


const faqs = [
  {
    question: "How long does a restaurant fit out project in Dubai usually take?",
    answer:
      "The timeline depends on the restaurant size, layout complexity, approval process, kitchen coordination, and level of fit out work involved. In most cases, restaurant fit out projects in Dubai can take from a few weeks to a few months from planning to handover.",
  },
  {
    question: "Can you handle fit out projects for small restaurants and larger dining spaces?",
    answer:
      "Yes, we work on different types of restaurant spaces, from compact dining units and casual eateries to fine dining restaurants, themed venues, and larger hospitality environments across Dubai.",
  },
  {
    question: "Do you provide both restaurant design and fit out execution?",
    answer:
      "Yes, we offer complete restaurant fit out solutions including concept development, space planning, material selection, technical drawings, coordination, and full on-site execution.",
  },
  {
    question: "What affects the cost of restaurant fit out in Dubai?",
    answer:
      "The cost depends on the restaurant size, partitions, ceilings, flooring, MEP requirements, lighting, counters, joinery, seating, kitchen coordination, decorative elements, and the overall level of finishing involved.",
  },
  {
    question: "Can you design the restaurant to improve both ambiance and operations?",
    answer:
      "Yes, our restaurant fit out approach focuses on both visual presentation and hospitality performance, including guest flow, seating comfort, staff movement, service efficiency, branding, and practical daily operations.",
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
                Professional restaurant fit out services in Dubai
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                Are you looking for
                <a
                  href="https://radyinterior.ae/"
                  className=" ml-1"
                >
                  restaurant fit out services in Dubai <span></span>
                </a>
                that create a functional, branded, and guest-ready dining space.
                You are at the right place.
                <br />
                With 15+ years of experience in hospitality interior design and fit out,
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                delivers restaurant fit out solutions that combine operational
                efficiency, memorable ambiance, quality workmanship, and practical planning.
                <br />
                Whether you are launching a new restaurant, upgrading an existing venue,
                or transforming a shell unit into a fully functional dining destination,
                our team helps turn your concept into a polished and efficient hospitality space.
                Keep reading to discover how
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                delivers restaurant fit out services in Dubai tailored to your
                concept, service style, and guest experience goals.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                15 Years of Experience
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37]">
                Get Best Restaurant Fit Out Services in Dubai
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/IMG-20190613-WA0040.jpg"
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
 <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
              OUR RESTAURANT INTERIOR FIT-OUT PROJECTS IN DUBAI</h2>
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
      {/* Section 2 */}
      <section className="py-10 px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        
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
            for Your Restaurant Fit Out in Dubai?
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
            <p>
              With years of experience in hospitality interiors,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              helps restaurant owners in Dubai create spaces that are practical,
              memorable, and aligned with their dining concept.
            </p>

            <p>
              A successful restaurant fit out is not only about appearance. It is about
              creating a dining environment that supports guest comfort, staff movement,
              service speed, kitchen coordination, and a strong brand image.
            </p>

            <p>
              Our process begins with understanding your concept, customer profile,
              operational flow, seating capacity, and brand identity so we can develop
              a restaurant fit out solution that supports both experience and performance.
            </p>

            <p>
              From entrances and waiting areas to dining halls, service counters,
              private seating zones, and custom restaurant joinery,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              delivers restaurant fit out solutions that balance ambiance,
              functionality, and long-term usability.
              <br />
              <br />
              We carefully plan partitions, ceilings, flooring, lighting,
              seating layouts, counters, storage, MEP works, and finishing details
              to ensure every restaurant feels complete, efficient, and visually distinctive.
              <br />
              <br />
              Our team focuses on proper coordination, site management, technical
              accuracy, and clean execution so your restaurant project moves forward
              smoothly and is ready to operate with confidence.
              <br />
              <br />
              When you choose
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              you choose a professional team dedicated to delivering restaurant fit out
              services in Dubai with reliability, quality workmanship, and strong hospitality understanding.
            </p>
          </div>
        </div>

        <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
          <div className="w-full lg:w-2/3 space-y-4">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Our Dubai Restaurant Fit Out Projects
            </h2>
            <p className="text-sm sm:text-base">
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              works on a variety of restaurant fit out projects in Dubai, helping
              owners transform empty or outdated units into efficient and visually appealing dining spaces.
            </p>
            <p className="text-sm sm:text-base">
              Every restaurant fit out project is planned with attention to guest flow,
              seating comfort, service routes, kitchen support, branding needs,
              and the overall experience the restaurant is meant to deliver.
            </p>
            <p className="text-sm sm:text-base">
              Clients trust
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              to deliver restaurant environments that feel functional, polished,
              and better suited to the demands of daily hospitality operations.
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
          Restaurant Fit Out Dubai Services We Provide
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
            Restaurant Fit Out Dubai, Built for Hospitality and Business Growth
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-6 font-play">
              <h2 className="text-xl font-conthrax mb-4 text-[#d4af37]">
                Our Restaurant Fit Out Services in Dubai
              </h2>
              <p>
                Our restaurant fit out services are tailored to create functional,
                visually strong, and fully operational dining spaces. Whether you
                are opening a new restaurant or upgrading an existing one, we
                deliver fit out solutions that support your concept, guest flow,
                and business performance.
              </p>
              <p>Our Featured Services:</p>
              <ul className="list-decimal pl-5 space-y-2">
                <li>
                  <p className="font-play">
                    <b>Restaurant Space Planning – </b>
                    Efficient dining layouts designed for guest comfort, service flow, and operational ease
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Reception, Counters & Waiting Area Fit Out –</b> Professional
                    front-of-house spaces designed to improve first impressions and guest management
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Dining Areas, Seating & Partition Works – </b>
                    Functional restaurant zones planned for atmosphere, comfort, and smooth service
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Ceilings, Flooring & Lighting Works –</b> Technical and
                    finishing elements delivered with precision and long-term durability
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Custom Joinery & Hospitality Features – </b>
                    Tailored counters, shelving, feature walls, and restaurant details made for memorable dining environments
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Complete Turnkey Restaurant Fit Out –</b> End-to-end restaurant fit
                    out delivery from planning and drawings to final handover
                  </p>
                </li>
              </ul>

              <p>
                We are among the trusted companies for restaurant fit out in Dubai,
                helping owners create hospitality spaces that feel practical, polished,
                and ready for long-term business success.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/WhatsApp Image 2019-09-19 at 7.34.39 AM (1).jpeg"
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
            Restaurant Fit Out Dubai – FAQs
          </h2>
          <p className="font-play text-sm sm:text-base mb-6 text-center">
            Find quick answers to common questions about our restaurant fit out
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