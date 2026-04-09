"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const designImages = [
  "/images/IMG_4410.jpg",
  "/images/IMG_4396.jpg",
  "/images/IMG_4416.jpg",
];

const textImage = {
  src: "/images/IMG_4394.jpg",
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
];



const faqs = [
  {
    question: "How long does a villa renovation project in Dubai usually take?",
    answer:
      "The timeline depends on the villa size, existing condition, renovation scope, and level of customization involved. In most cases, villa renovation projects in Dubai can take from a few months to longer depending on the scale of works.",
  },
  {
    question: "Can you renovate both old villas and recently built villas?",
    answer:
      "Yes, we provide villa renovation services for older villas, recently built villas needing upgrades, partially finished properties, and luxury residences that require a full visual or functional transformation.",
  },
  {
    question: "Do you provide both villa design updates and renovation execution?",
    answer:
      "Yes, we offer complete villa renovation solutions including design direction, space planning, material selection, technical drawings, fit-out execution, custom joinery, and final finishing.",
  },
  {
    question: "What affects the cost of villa renovation in Dubai?",
    answer:
      "The cost depends on the villa size, demolition and structural changes, material quality, MEP upgrades, bathrooms, kitchens, flooring, ceilings, joinery, smart features, and the overall level of finishing involved.",
  },
  {
    question: "Can you renovate a villa to make it look more modern and luxurious?",
    answer:
      "Yes, our villa renovation approach focuses on improving layout quality, visual appeal, comfort, materials, lighting, and finishing details so the property feels more elegant, modern, and aligned with your lifestyle.",
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
                Luxury villa renovation services in Dubai
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                Are you looking for
                <a
                  href="https://radyinterior.ae/"
                  className=" ml-1"
                >
                  villa renovation services in Dubai <span></span>
                </a>
                that combine elegant design, practical upgrades, and quality
                execution. You are at the right place.
                <br />
                With 15+ years of experience in interior design and fit-out,
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                transforms existing villas into refined, modern, and highly
                functional living spaces tailored to luxury lifestyles in Dubai.
                <br />
                Whether you want to renovate an old villa, upgrade selected
                spaces, or completely transform your property from inside out,
                our team helps bring new life, comfort, and sophistication to
                your home. Keep reading to discover how
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                delivers villa renovation solutions in Dubai tailored to your
                property, lifestyle, and vision.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                15 Years of Experience
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37]">
                Get Best Villa Renovation Services in Dubai
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/IMG_4400.jpg"
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
                    OUR Villa Renovation PROJECTS IN DUBAI</h2>
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
            for Your Villa Renovation in Dubai?
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
            <p>
              With years of experience in luxury renovation and interior
              transformation,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              helps villa owners in Dubai transform outdated properties into
              sophisticated and highly functional living environments.
            </p>

            <p>
              Villa renovation is not only about updating finishes. It is about
              improving the way your home looks, feels, and performs for modern
              family living while increasing comfort, elegance, and long-term
              value.
            </p>

            <p>
              Our process starts by understanding your current villa condition,
              renovation goals, spatial challenges, lifestyle requirements, and
              design preferences so we can create a renovation plan that truly
              improves your home.
            </p>

            <p>
              From layout upgrades and structural changes to kitchens, bathrooms,
              living areas, bedrooms, ceilings, flooring, joinery, and lighting,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              delivers villa renovation solutions that balance beauty,
              practicality, and long-term residential performance.
              <br />
              <br />
              We carefully select premium materials, refined finishes, and
              practical design solutions so every renovated villa feels fresh,
              elegant, and better aligned with luxury living in Dubai.
              <br />
              <br />
              Our team manages villa renovation with attention to detail,
              technical coordination, and careful execution so the process remains
              smooth, clear, and stress-free for homeowners.
              <br />
              <br />
              When you choose
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              you choose a professional team dedicated to delivering villa
              renovation services in Dubai with quality workmanship, creativity,
              and reliable project handling.
            </p>
          </div>
        </div>

        <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
          <div className="w-full lg:w-2/3 space-y-4">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Our Dubai Villa Renovation Projects
            </h2>
            <p className="text-sm sm:text-base">
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              works on residential renovation projects in Dubai, helping clients
              transform existing villas into elegant, updated, and better-planned
              luxury homes.
            </p>
            <p className="text-sm sm:text-base">
              Every villa renovation project is approached with attention to the
              existing condition, family needs, layout opportunities, technical
              scope, finishing quality, and the practical improvements needed for
              better daily living.
            </p>
            <p className="text-sm sm:text-base">
              Clients trust
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              to renovate villas through careful planning, quality material
              selection, and precise execution that reflects luxury living
              standards in Dubai.
            </p>
            <p className="text-sm sm:text-base">
              From selected villa upgrades to complete property transformations,
              our work focuses on improving comfort, appearance, functionality,
              and long-term value for homeowners across Dubai.
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
          Villa Renovation Dubai Services We Provide
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
            Villa Renovation Dubai, Designed for Better Luxury Living
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-6 font-play">
              <h2 className="text-xl font-conthrax mb-4 text-[#d4af37]">
                Our Villa Renovation Services in Dubai
              </h2>
              <p>
                Our villa renovation services are designed to improve the
                functionality, appearance, and overall living experience of your
                property. Whether you want a complete villa transformation or
                selected upgrades, we help renew your home with practical and
                elegant design solutions.
              </p>
              <p>Our Featured Services:</p>
              <ul className="list-decimal pl-5 space-y-2">
                <li>
                  <p className="font-play">
                    <b>Full Villa Renovation – </b>
                    Complete renovation solutions for outdated, poorly planned,
                    or visually tired luxury villas
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Space Planning & Layout Upgrades –</b> Practical and
                    elegant layout improvements that enhance comfort and flow
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Kitchen, Bathroom & Room Renovation – </b>
                    Refined upgrades for important daily-use spaces with better
                    function and premium finishing
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Flooring, Ceilings & Lighting Improvements –</b> Better
                    visual atmosphere and more polished interior quality for the
                    whole villa
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Custom Joinery & Interior Enhancements – </b>
                    Smart upgrades that improve storage, elegance, and overall
                    design presentation
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Villa Fit-Out & Finishing Works –</b> Complete execution
                    with careful detailing, finishing, and final setup support
                  </p>
                </li>
              </ul>

              <p>
                We are among the trusted companies for villa renovation services
                in Dubai, helping homeowners upgrade their properties with
                quality finishes, practical planning, and modern luxury design
                solutions.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/38.png"
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
            Villa Renovation Dubai – FAQs
          </h2>
          <p className="font-play text-sm sm:text-base mb-6 text-center">
            Find quick answers to common questions about our villa renovation
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