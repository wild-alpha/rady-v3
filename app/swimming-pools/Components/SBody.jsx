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
    title: "Initial Consultation & Renovation Brief",
    desc: "We begin with a detailed consultation to understand your existing pool condition, renovation goals, design preferences, safety needs, feature upgrade requirements, and budget. This helps us define a swimming pool renovation direction that is practical, elegant, and suited to your property.",
    img: "/images/mission.webp",
  },
  {
    id: "02",
    title: "Site Inspection & Pool Assessment",
    desc: "Our team carefully studies the current pool structure, surrounding deck, finishes, edge details, lighting, water features, circulation, and outdoor integration. We then identify the best renovation opportunities to improve aesthetics, comfort, safety, and functionality.",
    img: "/images/material.webp",
  },
  {
    id: "03",
    title: "Material, Finish & Feature Selection",
    desc: "We help you choose new pool finishes, coping materials, deck surfaces, lighting, water features, edge treatments, and surrounding elements that match your renovation goals while ensuring durability, safety, and long-term outdoor performance.",
    img: "/images/customized.webp",
  },
  {
    id: "04",
    title: "Technical Drawings & Renovation Planning",
    desc: "Our designers and technical team prepare updated swimming pool layouts, section details, lighting plans, water feature coordination, edge details, and other renovation documents needed for smooth execution and accurate installation.",
    img: "/images/mission.webp",
  },
  {
    id: "05",
    title: "Renovation Execution & Installation",
    desc: "Once the design and materials are finalized, our project team and craftsmen begin the renovation process. From removing old finishes to upgrading surfaces, lighting, decking, edge treatments, and feature elements, every stage is handled with precision and care.",
    img: "/images/material.webp",
  },
  {
    id: "06",
    title: "Final Finishing & Handover",
    desc: "Before handover, we complete final checks, finishing touches, alignment review, cleaning, and quality inspection so your renovated swimming pool area feels polished, functional, and ready for relaxation and outdoor living.",
    img: "/images/customized.webp",
  },
];

const faqs = [
  {
    question: "How long do swimming pool renovation services in Dubai usually take?",
    answer:
      "The timeline depends on the pool size, existing condition, renovation scope, and level of customization involved. In most cases, swimming pool renovation projects in Dubai can take from a few weeks to a few months from assessment to completion.",
  },
  {
    question: "Can you renovate both residential and commercial swimming pools?",
    answer:
      "Yes, we provide swimming pool renovation services for villas, private residences, hospitality properties, wellness spaces, and other residential or commercial pools across Dubai.",
  },
  {
    question: "Do you provide both pool redesign and renovation execution?",
    answer:
      "Yes, we offer complete swimming pool renovation services including design direction, layout improvements, material selection, technical drawings, feature coordination, and on-site renovation execution.",
  },
  {
    question: "What affects the cost of swimming pool renovation in Dubai?",
    answer:
      "The cost depends on the pool size, structural condition, new finishes, decking, coping, lighting, water features, surrounding upgrades, and the overall level of customization involved.",
  },
  {
    question: "Can you make an old swimming pool look modern and luxurious?",
    answer:
      "Yes, our swimming pool renovation approach focuses on improving visual appeal, comfort, safety, and outdoor harmony through upgraded finishes, refined detailing, and modern design solutions.",
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
                Professional swimming pool renovation services in Dubai
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                Are you looking for
                <a
                  href="https://radyinterior.ae/"
                  className=" ml-1"
                >
                  swimming pool renovation services in Dubai <span></span>
                </a>
                that upgrade your outdoor space with better style, comfort, and
                functionality. You are at the right place.
                <br />
                With 15+ years of experience in design and fit-out,
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                delivers swimming pool renovation solutions that improve finishes,
                deck areas, lighting, water features, and the overall outdoor
                experience of your property.
                <br />
                Whether your pool needs a modern refresh, selected upgrades, or a
                complete visual transformation, our team helps turn outdated pool
                areas into polished and luxurious outdoor environments. Keep
                reading to discover how
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                renovates swimming pools in Dubai with a focus on quality,
                precision, and long-term outdoor value.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                15 Years of Experience
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37]">
                Get Best Swimming Pool Renovation Services in Dubai
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
          Swimming Pool Renovation Dubai Services We Provide
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
            for Your Swimming Pool Renovation in Dubai?
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
            <p>
              With years of experience in luxury outdoor renovation,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              helps property owners in Dubai transform outdated swimming pools
              into elegant and better-performing outdoor spaces.
            </p>

            <p>
              Swimming pool renovation is not only about changing old finishes. It
              is about improving the full outdoor experience, including comfort,
              appearance, safety, usability, and how the pool connects with the
              surrounding landscape.
            </p>

            <p>
              We begin by understanding your renovation goals, current pool
              condition, outdoor lifestyle, design preferences, and feature
              upgrade needs so we can create a renovation plan that truly improves
              your property.
            </p>

            <p>
              From upgrading pool finishes and coping to improving deck surfaces,
              lighting, edge treatments, and surrounding visual details,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              delivers swimming pool renovation services that balance elegance,
              durability, and practical outdoor performance.
              <br />
              <br />
              We carefully select premium outdoor materials, refined feature
              upgrades, and practical solutions so every renovated pool feels
              fresh, luxurious, and visually harmonious.
              <br />
              <br />
              Our team manages swimming pool renovation with attention to detail,
              technical coordination, and careful execution so the process remains
              smooth, clear, and stress-free for you.
              <br />
              <br />
              When you choose
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              you choose a professional team dedicated to delivering swimming
              pool renovation services in Dubai with quality workmanship and
              reliable project handling.
            </p>
          </div>
        </div>

        <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
          <div className="w-full lg:w-2/3 space-y-4">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Our Dubai Swimming Pool Renovation Projects
            </h2>
            <p className="text-sm sm:text-base">
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              works on outdoor renovation projects in Dubai, helping clients
              transform aging swimming pools into visually refined and
              better-planned leisure spaces.
            </p>
            <p className="text-sm sm:text-base">
              Every swimming pool renovation project is approached with attention
              to the existing pool condition, client goals, deck areas, finishing
              quality, feature upgrades, and the practical improvements needed for
              better outdoor use.
            </p>
            <p className="text-sm sm:text-base">
              Clients trust
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              to renovate swimming pool areas through careful planning, quality
              material selection, and precise execution that reflects luxury
              outdoor living standards in Dubai.
            </p>
            <p className="text-sm sm:text-base">
              From simple pool upgrades to complete outdoor pool transformations,
              our work focuses on improving appearance, comfort, functionality,
              and long-term value for villas and premium properties across Dubai.
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
              6-Step Process For Our Swimming Pool Renovation Services In Dubai
            </h2>
            <p className="font-play text-sm sm:text-base max-w-2xl mx-auto">
              We follow a clear and transparent 6-step process to deliver smooth
              and well-managed swimming pool renovation services in Dubai.
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
            Swimming Pool Renovation Dubai, Designed for Better Outdoor Living
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-6 font-play">
              <h2 className="text-xl font-conthrax mb-4 text-[#d4af37]">
                Our Swimming Pool Renovation Services in Dubai
              </h2>
              <p>
                Our swimming pool renovation services are designed to improve the
                appearance, function, and overall outdoor experience of your pool
                area. Whether you want a complete pool transformation or selected
                upgrades, we help renew your swimming pool with practical and
                elegant solutions.
              </p>
              <p>Our Featured Services:</p>
              <ul className="list-decimal pl-5 space-y-2">
                <li>
                  <p className="font-play">
                    <b>Full Swimming Pool Renovation – </b>
                    Complete renovation solutions for outdated, worn, or visually
                    unbalanced pool areas
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Pool Finish & Surface Upgrades –</b> Stylish and durable
                    finish solutions that improve the look and feel of the pool
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Coping, Decking & Edge Improvements – </b>
                    Refined outdoor upgrades that enhance safety, movement, and
                    visual elegance
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Lighting & Water Feature Enhancements –</b> Better
                    atmosphere and more impressive outdoor appeal for day and
                    evening use
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Surrounding Pool Area Upgrades – </b>
                    Smart improvements that strengthen comfort, landscape harmony,
                    and outdoor presentation
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Swimming Pool Finishing & Installation Works –</b> Complete
                    execution with careful detailing, upgrades, and final outdoor
                    finishing support
                  </p>
                </li>
              </ul>

              <p>
                We are among the trusted companies for swimming pool renovation
                services in Dubai, helping homeowners upgrade their pool areas
                with quality finishes, practical planning, and modern luxury
                design solutions.
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
            Swimming Pool Renovation Dubai – FAQs
          </h2>
          <p className="font-play text-sm sm:text-base mb-6 text-center">
            Find quick answers to common questions about our swimming pool
            renovation services in Dubai.
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