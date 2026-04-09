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
    src: "/images/vservice3.webp",
    link: "/palm-jumeirah-villa",
    title: "PALM JUMEIRAH VILLA",
  },
  {
    src: "/images/vservice3.webp",
    link: "/palm-jumeirah-villa",
    title: "PALM JUMEIRAH VILLA",
  },
  {
    src: "/images/vservice3.webp",
    link: "/palm-jumeirah-villa",
    title: "PALM JUMEIRAH VILLA",
  },
];


const faqs = [
  {
    question: "How long does an office renovation project in Dubai usually take?",
    answer:
      "The timeline depends on the office size, renovation scope, approval requirements, and level of customization involved. In most cases, office renovation projects in Dubai can take from a few weeks to a few months from planning to handover.",
  },
  {
    question: "Can you renovate both small offices and larger corporate spaces?",
    answer:
      "Yes, we handle office renovation projects of different sizes, from compact office units and executive cabins to larger corporate offices, co-working spaces, and full-floor workplaces across Dubai.",
  },
  {
    question: "Do you provide both office design and renovation execution?",
    answer:
      "Yes, we offer complete office renovation solutions including design direction, layout improvements, material selection, technical drawings, coordination, and full on-site execution.",
  },
  {
    question: "What affects the cost of office renovation in Dubai?",
    answer:
      "The cost depends on the office size, partitions, ceilings, flooring, MEP upgrades, lighting, furniture, reception area updates, joinery, meeting room requirements, and the overall level of finishing involved.",
  },
  {
    question: "Can you improve office functionality during renovation?",
    answer:
      "Yes, our office renovation approach focuses on improving workflow, staff comfort, meeting functionality, storage, branding, lighting, and efficient use of space so the office performs better and looks more professional.",
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
                Professional office renovation services in Dubai
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                Are you looking for
                <a
                  href="https://radyinterior.ae/"
                  className=" ml-1"
                >
                  office renovation services in Dubai <span></span>
                </a>
                that upgrade your workspace with better functionality, style, and
                productivity. You are at the right place.
                <br />
                With 15+ years of experience in commercial interior
                transformation,
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                delivers office renovation solutions that improve layout,
                finishes, workflow, and the overall professional feel of your
                workplace.
                <br />
                Whether you want a complete office makeover or selected upgrades,
                our team helps transform outdated offices into modern, efficient,
                and better-planned working environments. Keep reading to discover
                how
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                renovates offices in Dubai with a focus on quality, detail, and
                long-term business functionality.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                15 Years of Experience
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37]">
                Get Best Office Renovation Services in Dubai
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
      OUR OFFICE RENOVATION PROJECTS IN DUBAI</h2>

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
            for Your Office Renovation in Dubai?
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
            <p>
              With years of experience in commercial renovation,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              helps businesses in Dubai transform outdated offices into spaces
              that are modern, practical, and better aligned with daily operations.
            </p>

            <p>
              Office renovation is not only about changing finishes or replacing
              furniture. It is about improving the way the workplace functions,
              feels, and supports productivity, collaboration, and professional
              presentation.
            </p>

            <p>
              We start by understanding your renovation goals, office challenges,
              team requirements, workflow needs, and brand expectations so we can
              develop a renovation plan that truly improves your workplace.
            </p>

            <p>
              From upgrading layouts and work zones to renewing ceilings,
              partitions, flooring, lighting, joinery, and office furniture,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              delivers office renovation services that balance functionality,
              durability, and professional design.
              <br />
              <br />
              We carefully select quality materials, practical workspace solutions,
              and efficient layouts so every renovated office feels fresh,
              organized, and visually refined.
              <br />
              <br />
              Our team manages office renovation with attention to detail,
              technical coordination, and careful execution so the process remains
              smooth, clear, and stress-free for your business.
              <br />
              <br />
              When you choose
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              you choose a professional team dedicated to delivering office
              renovation services in Dubai with quality workmanship and reliable
              project handling.
            </p>
          </div>
        </div>

        <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
          <div className="w-full lg:w-2/3 space-y-4">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Our Dubai Office Renovation Projects
            </h2>
            <p className="text-sm sm:text-base">
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              works on commercial renovation projects in Dubai, helping clients
              transform old and inefficient offices into stylish and better-planned
              workplaces.
            </p>
            <p className="text-sm sm:text-base">
              Every office renovation project is approached with attention to the
              existing condition, business goals, staff requirements, meeting
              spaces, workflow, and the practical improvements needed for better
              daily use.
            </p>
            <p className="text-sm sm:text-base">
              Clients trust
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              to renovate office spaces through careful planning, quality
              material selection, and precise execution that reflects modern
              workplace standards in Dubai.
            </p>
            <p className="text-sm sm:text-base">
              From simple office updates to complete workplace transformations, our
              work focuses on improving productivity, appearance, comfort, and
              long-term value for businesses across Dubai.
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
          Office Renovation Dubai Services We Provide
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
            Office Renovation Dubai, Designed for Better Performance
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-6 font-play">
              <h2 className="text-xl font-conthrax mb-4 text-[#d4af37]">
                Our Office Renovation Services in Dubai
              </h2>
              <p>
                Our office renovation services are designed to improve the
                functionality, appearance, and overall efficiency of your
                workplace. Whether you want a complete office transformation or
                selected upgrades, we help renew your office with practical and
                modern solutions.
              </p>
              <p>Our Featured Services:</p>
              <ul className="list-decimal pl-5 space-y-2">
                <li>
                  <p className="font-play">
                    <b>Full Office Renovation – </b>
                    Complete renovation solutions for outdated, inefficient, or
                    poorly planned office interiors
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Workstation & Space Upgrades –</b> Practical and stylish
                    workspace solutions that improve office productivity and daily
                    use
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Partitions, Ceilings & Flooring Renewal – </b>
                    Durable and professional upgrades for a refreshed office look
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Lighting & Utility Improvements –</b> Better illumination
                    and more efficient office functionality for daily operations
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Reception, Meeting & Joinery Updates – </b>
                    Smart renovations that improve brand image, workflow, and
                    workplace presentation
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Office Fit-Out & Finishing –</b> Complete execution with
                    careful detailing, installation, and final finishing support
                  </p>
                </li>
              </ul>

              <p>
                We are among the trusted companies for office renovation services
                in Dubai, helping businesses upgrade their workplaces with quality
                finishes, practical planning, and modern design solutions.
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
            Office Renovation Dubai – FAQs
          </h2>
          <p className="font-play text-sm sm:text-base mb-6 text-center">
            Find quick answers to common questions about our office renovation
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