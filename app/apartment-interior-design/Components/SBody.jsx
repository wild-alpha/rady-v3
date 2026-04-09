"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const serviceCards = [
  {
    src: "/images/apartment-living-room-interior-design.jpg",
    link: "/modern-apartment-interior-design",
    title: "Modern Apartment Interior Design",
  },
  {
    src: "/images/dining-table-apartment-interior-design.jpg",
    link: "/luxury-apartment-renovation-dubai",
    title: "Luxury Apartment Renovation",
  },
  {
    src: "/images/bathroom-interior-design-of-apartment.jpg",
    link: "/contemporary-apartment-fit-out-dubai",
    title: "Contemporary Apartment Fit Out",
  },
];

const textImage = {
  src: "/images/apartment-interior-design-service.jpg",
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
    title: "Initial Consultation & Concept",
    desc: "We begin with a detailed consultation to understand your apartment layout, lifestyle needs, design preferences, and budget. This helps us define a creative direction that reflects your personality and modern urban living.",
    img: "/images/mission.webp",
  },
  {
    id: "02",
    title: "Site Study & Space Planning",
    desc: "Our team carefully evaluates your apartment’s layout, structural elements, storage possibilities, circulation, and natural light. We then create efficient space plans that maximize comfort, function, and visual flow.",
    img: "/images/material.webp",
  },
  {
    id: "03",
    title: "Material, Furniture & Finishing Selection",
    desc: "We help you select premium materials, elegant finishes, space-saving furniture, lighting, and décor that complement your apartment design style while maintaining comfort, sophistication, and everyday practicality.",
    img: "/images/customized.webp",
  },
  {
    id: "04",
    title: "Technical Drawings",
    desc: "Our designers and draftsmen prepare layout plans, reflected ceiling plans, lighting drawings, joinery details, and other technical documents required for a smooth and well-coordinated apartment design and fit-out process.",
    img: "/images/mission.webp",
  },
  {
    id: "05",
    title: "Project Execution, Fit-Out & Installation",
    desc: "At this stage, our project team and craftsmen bring the approved design to life. From flooring and wall finishes to custom joinery and installation, every element is executed with precision and attention to detail.",
    img: "/images/material.webp",
  },
  {
    id: "06",
    title: "Final Styling & Handover",
    desc: "Before handover, we complete the final styling with furniture placement, accessories, décor touches, and finishing adjustments to ensure your apartment feels polished, welcoming, and ready for modern luxury living.",
    img: "/images/customized.webp",
  },
];

const faqs = [
  {
    question: "How long does an apartment interior design project in Dubai usually take?",
    answer:
      "The timeline depends on the apartment size, design scope, and level of customization. In most cases, apartment interior design and fit-out projects in Dubai take between 6 weeks and 4 months from concept to handover.",
  },
  {
    question: "Do you work on both full apartments and selected rooms?",
    answer:
      "Yes, we work on complete apartment interiors as well as selected spaces such as living rooms, bedrooms, kitchens, dining areas, or home offices. We always ensure the final design remains visually consistent throughout the apartment.",
  },
  {
    question: "Can you redesign my apartment using some of my existing furniture?",
    answer:
      "Yes, we can incorporate selected existing furniture and décor pieces if they suit the new concept. We evaluate what can be retained, upgraded, or restyled to maintain a refined and cohesive interior look.",
  },
  {
    question: "What is the typical budget for apartment interior design in Dubai?",
    answer:
      "Apartment interior design costs vary depending on the size of the unit, materials, level of detailing, and fit-out requirements. During the consultation, we help define a realistic budget range based on your goals and desired finish level.",
  },
  {
    question: "Do you handle execution and contractor coordination?",
    answer:
      "Yes, we manage the design process, technical drawings, site coordination, and communication with contractors and suppliers where required. Our goal is to make your apartment renovation or fit-out process smooth and stress-free.",
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
                Luxury modern apartment interior design services in Dubai
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                Are you looking for
                <a
                  href="https://radyinterior.ae/"
                  className=" ml-1"
                >
                  premium apartment interior design services in Dubai <span></span>
                </a>
                that reflect comfort, elegance, and smart urban living. You are at
                the right place.
                <br />
                With 15+ years of experience in transforming residential spaces in
                Dubai,
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                creates stylish apartment interiors tailored to modern lifestyles,
                premium living standards, and functional everyday comfort.
                <br />
                Our design approach blends luxury, practicality, and creativity to
                deliver apartment interiors that feel elegant, efficient, and truly
                personal. Keep reading to discover how
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                transforms apartments in Dubai into refined living spaces designed
                around your lifestyle and vision.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                15 Years of Experience
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37]">
                Get Best Apartment Interior Design and Fit Out in Dubai
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/apartment-renovation.jpg"
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
          Apartment Interior Design Dubai Services We Provide
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
          <h2 className="text-sm sm:text-xl md:text-xl font-bold tracking-widest font-conthrax text-[#d4af37]">
            Why Choose
            <a
              href="https://radyinterior.ae/"
              className="text-[#d4af37] hover:text-[#f0c95a] ml-1"
            >
              Rady Interior Design <span></span>
            </a>
            for Your Apartment Interior Design in Dubai?
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
            <p>
              Backed by 15+ years of experience,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              has earned the trust of homeowners and property investors looking for
              elegant, practical, and premium apartment interiors in Dubai.
            </p>

            <p>
              We understand that apartment design in Dubai requires a smart balance
              of aesthetics, efficient layouts, storage planning, and refined
              finishing. Our team creates interiors that maximize available space
              while maintaining a sophisticated and luxurious feel.
            </p>

            <p>
              Our process begins with understanding your lifestyle, daily routines,
              design taste, and functional needs so we can create an apartment
              interior that feels tailored rather than generic.
            </p>

            <p>
              Whether you own a studio apartment, a family residence, or a luxury
              penthouse,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              develops custom interior concepts that reflect your personal style
              while improving comfort, flow, and usability.
              <br />
              <br />
              Our team continuously explores modern trends, quality materials,
              premium finishes, and smart interior solutions to offer apartment
              interiors that feel current, durable, and visually impressive.
              <br />
              <br />
              From bespoke joinery and lighting concepts to furniture styling and
              fit-out execution, we focus on every detail that helps elevate your
              apartment into a well-designed modern home.
              <br />
              <br />
              With
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              you choose a professional team committed to delivering apartment
              interiors in Dubai with creativity, quality, and lasting value.
            </p>
          </div>
        </div>

        <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
          <div className="w-full lg:w-2/3 space-y-4">
            <h2 className="text-sm font-bold sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Our Dubai Apartment Projects
            </h2>
            <p className="text-sm sm:text-base">
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              has worked on stylish residential interiors across Dubai, creating
              apartment spaces that combine functionality, elegance, and modern
              luxury.
            </p>
            <p className="text-sm sm:text-base">
              Our apartment projects are tailored to the unique character of each
              property, whether the goal is a contemporary city apartment, a warm
              family home, or a luxury high-rise residence.
            </p>
            <p className="text-sm sm:text-base">
              Clients approach
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              to create apartment interiors that feel refined, welcoming, and
              practical for day-to-day life, while also reflecting high design
              standards.
            </p>
            <p className="text-sm sm:text-base">
              Every apartment interior is planned with careful attention to detail,
              ensuring a balance of comfort, storage, visual harmony, and premium
              living suited to Dubai’s modern lifestyle.
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
          OUR APARTMENT INTERIOR DESIGN PROJECTS IN DUBAI
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
            Bespoke Apartment Interior Design Dubai, Crafted for Modern Living
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-6 font-play">
              <h2 className="text-xl font-conthrax mb-4 text-[#d4af37]">
                Our Apartment Interior Design Services in Dubai
              </h2>
              <p>
                Our apartment interior design services are tailored to fit your
                lifestyle, space requirements, and design preferences. Whether you
                are furnishing a new apartment or renovating an existing one, we
                create interiors that combine comfort, luxury, and functionality.
              </p>
              <p>Our Featured Services:</p>
              <ul className="list-decimal pl-5 space-y-2">
                <li>
                  <p className="font-play">
                    <b>Space Planning – </b>
                    Smart layouts designed for flow, comfort, and efficient use of
                    apartment space
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Living Room Interior Design –</b> Stylish and welcoming
                    interiors tailored for relaxation and everyday living
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Bedroom Interior Design – </b>
                    Calm, elegant, and practical bedroom concepts for modern
                    apartment lifestyles
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Kitchen & Dining Design –</b> Functional and aesthetically
                    balanced spaces for cooking, dining, and entertaining
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Interior Fit Out in Dubai – </b>
                    Complete apartment fit-out services with accurate execution and
                    quality finishing
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Custom Furniture & Joinery –</b> Bespoke storage and furniture
                    solutions made to suit your apartment perfectly
                  </p>
                </li>
              </ul>

              <p>
                We rank among one of the best apartment interior design companies
                in Dubai, delivering carefully planned interiors that enhance space,
                comfort, and luxury for modern city living.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/apartment-study-area-dubai.jpg"
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
            Apartment Interior Design Dubai – FAQs
          </h2>
          <p className="font-play text-sm sm:text-base mb-6 text-center">
            Find quick answers to common questions about our apartment interior
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