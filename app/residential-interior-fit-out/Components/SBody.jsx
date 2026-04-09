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
                Luxury Residential interior Fit out services in Dubai
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                Making a house feel truly your own is about more than looks. It starts with understanding what makes your everyday life comfortable and easy. At RadyInterior, we turn spaces into homes by providing thoughtful residential interior fit out Dubai services. As a trusted residential interior fit out company in Dubai, we blend practical design with your personal style. <br /> <br />
                Our approach to interior fit-out Dubai focuses on both comfort and functionality. Every detail is planned to reflect your taste while making daily living better. From quiet bedrooms to inviting living rooms, we create spaces where your personality shines through and comfort feels natural. Let your home feel like it was made just for you, with solutions designed for how you live.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                15 Years of Experience
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37]">
                Get Best Residential Interior Fit Out in Dubai
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
          Residential Interior Fit out Services in Dubai
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
            Renovate Your House with RadyInterior
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
            <p>
              The residential fit out services in Dubai provided by RadyInterior are aimed at transforming your house into a welcoming space that meets your needs. We recognize that your home represents both your personal space and an extension of who you are. It includes customizing our fitting-out solutions down to the smallest detail in order to make them truly yours, thus turning them from mere structure to paradise, where glamor and elegance blend seamlessly.
            </p>

            <h3 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Our Expertise in Fit Outs
            </h3>
            <p>
              RadyInterior as a leading residential fit out contractor in Dubai and Sharjah brings years of experience to each residential fit out project in UAE, resulting in a functional and inviting space for its clients. We can effectively handle all phases of interior fit out: effective space planning, design services, efficient electrical installations, plumbing fixtures and fittings, etc. With high-quality materials, while the walls have custom materials as well as partitions made according to customer orders; our carpentry solutions also strive to meet their requirements. Additionally, our total lighting and HVAC packages enhance productivity as well as style, thereby ensuring seamless merging between functions and fashions.
            </p>

            <h3 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Customized Fit Out Solutions
            </h3>
            <p>
              We insist on the point that your residence should reflect who you are and your taste. The approach we use in our fit outs is individualistic, so it can well suit you. Perhaps you wish to have a small, cozy home, a modern retreat or maybe a stylish urban space. In essence, therefore, our designs are created in such a way as to enable us to customize everything. Throughout, our team works hand in hand with you to ensure that all the little things are kept consistent with what you want.
            </p>

            <h3 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Creating Comfortable and Inviting Spaces
            </h3>
            <p>
              We design houses that not only look visually appealing but also offer comfort and warmth the moment someone walks in. Our central concern is safety, efficient space utilization and warm, inviting colors, creating places where people can truly relax and feel comfortable. By enhancing comfort levels within homes through their fitting-out solutions, we help create homes for families who look forward to relaxing after work.
            </p>

            <h3 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Experience the RadyInterior Difference
            </h3>
            <p>
              We love changing your house into a happy home. We take up the difficult task of completing the interiors to give you time to relish in its brillance. Reach out today to RadyInterior a leading residential fit out contractor in Dubai and Sharjah, and we will collectively actualize your dream as it captures your way of life and choices.
            </p>
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

      </section>
    </section>
  );
};

export default SBody;