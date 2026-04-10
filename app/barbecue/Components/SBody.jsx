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
    desc: "We start with a detailed consultation to understand your outdoor space, cooking preferences, entertainment needs, style direction, and budget. This helps us shape a barbecue area that is both practical and visually impressive.",
    img: "/images/mission.webp",
  },
  {
    id: "02",
    title: "Site Inspection & Layout Planning",
    desc: "Our team evaluates the available outdoor area, access points, ventilation requirements, utility connections, circulation, and seating possibilities. We then prepare a layout that supports comfort, safety, and efficient outdoor use.",
    img: "/images/material.webp",
  },
  {
    id: "03",
    title: "Material, Finish & Fixture Selection",
    desc: "We help you choose durable outdoor materials, countertops, cladding, cabinetry, appliances, lighting, and finishes that can handle weather conditions while matching the design style of your villa or outdoor space.",
    img: "/images/customized.webp",
  },
  {
    id: "04",
    title: "Technical Drawings & Build Planning",
    desc: "Our designers and technical team prepare barbecue area drawings, counter layouts, service points, joinery details, and other build documents needed for proper planning, coordination, and smooth execution.",
    img: "/images/mission.webp",
  },
  {
    id: "05",
    title: "Construction, Installation & Finishing",
    desc: "Once the design is approved, our craftsmen and site team begin construction and installation. From masonry and cladding to counters, storage units, utility connections, and appliances, every detail is executed with care.",
    img: "/images/material.webp",
  },
  {
    id: "06",
    title: "Final Setup & Handover",
    desc: "Before handover, we complete the final detailing, finishing checks, cleaning, and setup to ensure your barbecue area is ready for cooking, entertaining, and enjoying outdoor living in style.",
    img: "/images/customized.webp",
  },
];

const faqs = [
  {
    question: "How long do barbecue design and build services in Dubai usually take?",
    answer:
      "The timeline depends on the size, design complexity, and type of features included in the barbecue area. In most cases, a barbecue design and build project in Dubai can take from a few weeks to a couple of months.",
  },
  {
    question: "Can you design a barbecue area for small outdoor spaces?",
    answer:
      "Yes, we can design and build barbecue areas for a wide range of outdoor spaces, including compact terraces, backyards, rooftops, garden corners, and large villa outdoor areas.",
  },
  {
    question: "Do you provide both design and execution for barbecue areas?",
    answer:
      "Yes, we offer complete barbecue design and build services, including concept development, layout planning, material selection, technical detailing, construction, and final installation.",
  },
  {
    question: "What affects the cost of a barbecue design and build project in Dubai?",
    answer:
      "The cost depends on the size of the area, materials selected, appliances, storage requirements, utility work, custom features, and the overall complexity of the outdoor build.",
  },
  {
    question: "Can you match the barbecue area design with the rest of my villa exterior?",
    answer:
      "Yes, we can design the barbecue area to complement your villa architecture, landscape design, patio style, and overall outdoor aesthetic for a seamless and elegant look.",
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
                Premium barbecue design and build services in Dubai
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                Are you looking for
                <a
                  href="https://radyinterior.ae/"
                  className=" ml-1"
                >
                  barbecue design and build services in Dubai <span></span>
                </a>
                that transform your outdoor area into a stylish and functional
                entertainment space. You are at the right place.
                <br />
                With 15+ years of experience in creating refined residential
                environments,
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                designs and builds custom barbecue areas that combine outdoor
                comfort, smart planning, and elegant finishing.
                <br />
                Whether you want a modern barbecue corner, a luxury outdoor cooking
                station, or a full entertainment setup, our team helps bring your
                vision to life with quality materials and practical design. Keep
                reading to discover how
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                delivers barbecue design and build solutions in Dubai tailored to
                your lifestyle and outdoor space.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                15 Years of Experience
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37]">
                Get Best Barbecue Design and Build Services in Dubai
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
          Barbecue Design and Build Dubai Services We Provide
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
            for Your Barbecue Design and Build Project in Dubai?
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
            <p>
              With years of experience in premium residential design and outdoor
              enhancement,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              helps homeowners create barbecue spaces that are practical,
              long-lasting, and visually aligned with modern outdoor living.
            </p>

            <p>
              A well-designed barbecue area is more than just a cooking point. It
              should support entertaining, dining, movement, storage, and outdoor
              comfort while blending naturally with the rest of the property.
            </p>

            <p>
              Our process begins by understanding how you plan to use the space,
              whether for family gatherings, weekend cooking, social events, or a
              full outdoor lifestyle setup.
            </p>

            <p>
              From compact barbecue corners to complete custom outdoor kitchens,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              develops solutions that combine functionality, durability, and a
              premium design finish.
              <br />
              <br />
              We carefully select weather-resistant materials, practical layouts,
              quality countertops, storage solutions, cladding finishes, and
              outdoor fixtures that perform well and look elegant over time.
              <br />
              <br />
              Our team focuses on clean execution, coordinated site work, and
              attention to detail so your barbecue area feels complete, usable, and
              beautifully integrated into your outdoor environment.
              <br />
              <br />
              When you choose
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              you choose a professional team dedicated to delivering barbecue
              design and build services in Dubai with quality craftsmanship and
              thoughtful outdoor planning.
            </p>
          </div>
        </div>

        <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
          <div className="w-full lg:w-2/3 space-y-4">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Our Dubai Outdoor & Barbecue Projects
            </h2>
            <p className="text-sm sm:text-base">
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              works on outdoor enhancement projects in Dubai, helping clients
              create barbecue areas that are functional, elegant, and ideal for
              entertaining.
            </p>
            <p className="text-sm sm:text-base">
              Every barbecue design and build project is planned around the
              available outdoor area, the client’s lifestyle, and the type of
              cooking and hosting experience they want to create.
            </p>
            <p className="text-sm sm:text-base">
              Clients trust
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              to transform outdoor spaces into stylish barbecue setups with
              practical counters, durable materials, storage, seating, and strong
              visual appeal.
            </p>
            <p className="text-sm sm:text-base">
              From modern outdoor cooking stations to custom barbecue zones within
              villa gardens and terraces, our work is focused on comfort,
              functionality, and a polished finish suited to Dubai outdoor living.
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
              6-Step Process For Our Barbecue Design and Build Services In Dubai
            </h2>
            <p className="font-play text-sm sm:text-base max-w-2xl mx-auto">
              We follow a clear and transparent 6-step process to deliver
              well-planned barbecue design and build services in Dubai.
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
            Bespoke Barbecue Design and Build Services Dubai, Crafted for Outdoor Living
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-6 font-play">
              <h2 className="text-xl font-conthrax mb-4 text-[#d4af37]">
                Our Barbecue Design and Build Services in Dubai
              </h2>
              <p>
                Our barbecue design and build services are tailored to create
                stylish, durable, and highly functional outdoor cooking spaces.
                Whether you want a simple barbecue setup or a complete luxury
                outdoor station, we design and build according to your space and
                lifestyle.
              </p>
              <p>Our Featured Services:</p>
              <ul className="list-decimal pl-5 space-y-2">
                <li>
                  <p className="font-play">
                    <b>Custom Barbecue Area Design – </b>
                    Thoughtful outdoor layouts planned for cooking, serving, and
                    entertaining
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Outdoor Counter & Workstation Build –</b> Practical and
                    elegant counters designed for convenient outdoor use
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Storage & Utility Integration – </b>
                    Smart storage solutions and service planning for a smooth
                    barbecue experience
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Outdoor Cladding & Finishing –</b> Durable materials and
                    premium finishes that enhance appearance and withstand weather
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Lighting & Seating Coordination – </b>
                    Comfortable outdoor ambiance created through practical lighting
                    and seating planning
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Complete Design & Build Execution –</b> End-to-end barbecue
                    project delivery from concept to final handover
                  </p>
                </li>
              </ul>

              <p>
                We are among the trusted companies for barbecue design and build
                services in Dubai, helping homeowners create outdoor spaces that
                feel luxurious, practical, and perfect for entertaining.
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
            Barbecue Design and Build Services Dubai – FAQs
          </h2>
          <p className="font-play text-sm sm:text-base mb-6 text-center">
            Find quick answers to common questions about our barbecue design and
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