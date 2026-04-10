"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const designImages = [
  
  "/images/fb7ff5ef-cbe5-4c5b-bdaa-609029145d29.jpeg",
  "/images/IMG_20220227_110502.jpg",
  "/images/UC_01199.jpg",
];

const textImage = {
  src: "/images/Ferrero-7-01192019_084111.jpg",
  link: "/villa-damac-hills-5-bedroom",
  title: "Office Interior Fit-out",
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
    question: "How long does an office fit out project in Dubai usually take?",
    answer:
      "The timeline depends on the office size, layout complexity, approval process, and level of fit out work involved. In most cases, office fit out projects in Dubai can take from a few weeks to a few months from planning to handover.",
  },
  {
    question: "Can you handle fit out projects for small offices and large corporate spaces?",
    answer:
      "Yes, we work on different types of office spaces, from compact business units and executive offices to larger corporate offices, co-working spaces, and full-floor commercial workplaces across Dubai.",
  },
  {
    question: "Do you provide both office design and fit out execution?",
    answer:
      "Yes, we offer complete office fit out solutions including concept development, space planning, material selection, technical drawings, coordination, and full on-site execution.",
  },
  {
    question: "What affects the cost of office fit out in Dubai?",
    answer:
      "The cost depends on the office size, partitions, ceilings, flooring, MEP requirements, custom joinery, furniture, reception design, meeting room requirements, branding elements, and the overall level of finishing involved.",
  },
  {
    question: "Can you design the office to improve both appearance and productivity?",
    answer:
      "Yes, our office fit out approach focuses on both visual presentation and workplace performance, including workflow, staff comfort, meeting functionality, customer-facing areas, storage, branding, and efficient daily use.",
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
                Professional office fit out services in Dubai
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                Are you looking for
                <a
                  href="https://radyinterior.ae/"
                  className=" ml-1"
                >
                  office fit out services in Dubai <span></span>
                </a>
                that create a productive, branded, and business-ready workspace.
                You are at the right place.
                <br />
                With 15+ years of experience in interior design and fit out,
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                delivers office fit out solutions that combine operational
                efficiency, professional appearance, quality workmanship, and
                practical planning.
                <br />
                Whether you are setting up a new office, upgrading an existing
                workspace, or transforming a shell and core unit into a fully
                functional office, our team helps turn your space into a polished
                and efficient working environment. Keep reading to discover how
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                delivers office fit out services in Dubai tailored to your
                business needs, workflow, and brand identity.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                15 Years of Experience
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37]">
                Get Best Office Fit Out Services in Dubai
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/UC_01304.jpg"
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
      OUR OFFICE PROJECTS IN DUBAI</h2>


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
            for Your Office Fit Out in Dubai?
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
            <p>
              With years of experience in commercial interiors,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              helps businesses in Dubai create office spaces that are practical,
              professional, and aligned with their workplace goals.
            </p>

            <p>
              A successful office fit out is not only about appearance. It is about
              creating a workspace that supports productivity, staff comfort,
              collaboration, privacy, meetings, storage, and a strong company
              image.
            </p>

            <p>
              Our process begins with understanding your business operations, team
              structure, workflow, brand identity, and spatial requirements so we
              can develop an office fit out solution that supports both performance
              and presentation.
            </p>

            <p>
              From executive offices and open workstations to reception areas,
              meeting rooms, breakout zones, and custom office joinery,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              delivers office fit out solutions that balance functionality,
              flexibility, and long-term usability.
              <br />
              <br />
              We carefully plan partitions, ceilings, flooring, lighting,
              workstations, storage, MEP works, and finishing details to ensure
              every office feels complete, efficient, and visually strong.
              <br />
              <br />
              Our team focuses on proper coordination, site management, technical
              accuracy, and clean execution so your office project moves forward
              smoothly and is ready for operations with confidence.
              <br />
              <br />
              When you choose
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              you choose a professional team dedicated to delivering office fit out
              services in Dubai with reliability, quality workmanship, and strong
              project understanding.
            </p>
          </div>
        </div>

        <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
          <div className="w-full lg:w-2/3 space-y-4">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Our Dubai Office Fit Out Projects
            </h2>
            <p className="text-sm sm:text-base">
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              works on a variety of office fit out projects in Dubai, helping
              businesses transform empty or outdated units into efficient and
              professional workspaces.
            </p>
            <p className="text-sm sm:text-base">
              Every office fit out project is planned with attention to workflow,
              staff movement, collaboration zones, private office needs, technical
              requirements, and the overall image of the business.
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
          Office Fit Out Dubai Services We Provide
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
            Office Fit Out Dubai, Built for Productivity and Professional Growth
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-6 font-play">
              <h2 className="text-xl font-conthrax mb-4 text-[#d4af37]">
                Our Office Fit Out Services in Dubai
              </h2>
              <p>
                Our office fit out services are tailored to create practical,
                visually strong, and fully functional workspaces. Whether you are
                setting up a new office or upgrading an existing workplace, we
                deliver fit out solutions that support your team, workflow, and
                business image.
              </p>
              <p>Our Featured Services:</p>
              <ul className="list-decimal pl-5 space-y-2">
                <li>
                  <p className="font-play">
                    <b>Office Space Planning – </b>
                    Efficient workplace layouts designed for workflow, team
                    comfort, and productivity
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Reception & Meeting Room Fit Out –</b> Professional office
                    spaces designed to improve client experience and daily business
                    interaction
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Workstations, Cabins & Partition Works – </b>
                    Functional office zones planned for privacy, collaboration, and
                    smooth daily operations
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Ceilings, Flooring & Lighting Works –</b> Technical and
                    finishing elements delivered with precision and long-term
                    durability
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Custom Joinery & Storage Solutions – </b>
                    Tailored office counters, shelving, cabinetry, and storage
                    systems made for organized workplaces
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Complete Turnkey Office Fit Out –</b> End-to-end office fit
                    out delivery from planning and drawings to final handover
                  </p>
                </li>
              </ul>

              <p>
                We are among the trusted companies for office fit out in Dubai,
                helping businesses create workplaces that feel practical, polished,
                and ready for long-term performance.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/01f00ae4-3343-4b6b-8a28-5eb26b8a4d0f.jpeg"
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
            Office Fit Out Dubai – FAQs
          </h2>
          <p className="font-play text-sm sm:text-base mb-6 text-center">
            Find quick answers to common questions about our office fit out
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