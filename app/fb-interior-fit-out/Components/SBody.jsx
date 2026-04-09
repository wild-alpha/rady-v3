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
               F&B Interior Fit out Services

              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
               In the world of interior fit out, the food and beverage (F&B) industry is a challenging yet rapidly flourishing field that offers numerous prospects for imaginative functionality. These establishments, including restaurants, cafés, bars, and other eating places, have varying needs and challenges they face. <br /> <br />

              Therefore, commercial fit out designs within this area revolve around crafting distinctive environments that can lure customers and at the same time improve their general experience. A well executed restaurant fit out in Dubai not only enhances the visual appeal of the space but also optimizes layout efficiency, ensures seamless workflow for staff, and creates a welcoming atmosphere that aligns with the brand identity. 

             </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                15 Years of Experience
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37]">
                Get Best FB Interior Fit Out in Dubai & Sharjah
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
                    title="YouTube Video"
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
         FB Commercial Fit-Out Services
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

        {/* FULL WIDTH CTA */}
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
              className="px-6 py-3 bg-[#d4af37] text-black font-play text-sm rounded w-full sm:w-auto text-center"
            >
              Request availability by WhatsApp
            </a>

            <a
              href="mailto:info@example.com"
              className="px-6 py-3 bg-[#8c6b1f] text-white font-play text-sm rounded w-full sm:w-auto text-center"
            >
              Request availability by E-mail
            </a>
          </div>
        </div>
      </section>

      {/* Section 3 - REPLACED CONTENT */}
      <section className="px-6 py-10 sm:px-10 md:px-16 lg:px-28 xl:px-40">

        <div className="lg:max-w-[80%] mx-auto bg-[#141517] p-6 sm:p-10 rounded shadow space-y-6 mb-12">
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
            F&B Interior Fit out Experts in Dubai & Sharjah
          </h2>
          <p className="text-sm sm:text-base font-play"> From selecting the right materials and lighting to incorporating innovative seating arrangements, every detail contributes to a restaurant’s success. By balancing aesthetics with functionality, a thoughtfully designed (f&b) restaurant fit out in Dubai, Sharjah can significantly impact customer satisfaction and business profitability.</p>
          
          

          <p className="text-sm sm:text-base font-play">
            In the world of interior fit out, the food and beverage (F&B) industry is a challenging yet rapidly flourishing field that offers numerous prospects for imaginative functionality. These establishments, including restaurants, cafés, bars, and other eating places, have varying needs and challenges they face.
          </p>

          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
            Original Dining Spaces
          </h2>

          <p className="text-sm sm:text-base font-play">
            In UAE f&b businesses that compete with one another, it is important to make sure that your space is unique. RadyInterior is an interior fit out company in Dubai and Sharjah, whose services are targeted at transforming any venue into an invitingly inclusive setting.

           In order to ensure a balanced space made up of even the layout, furniture, lighting, and finishes, our desire is to create lasting impressions on customers so they always want to be back.
          </p>

          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
            Unique Custom F&B Fit Out For Different Venues
          </h2>

          <p className="text-sm sm:text-base font-play">
            Various types of f&b (the food and beverage) venues have specific needs and challenges. For instance, a small café may need a floor plan fit out that promotes relaxation and conversation, whereas a vibrant restaurant would require one that accommodates high-traffic flow and encourages social interaction among guests. Elegant finishes, along with a classy atmosphere, are typical features found in fine dining restaurants. <br /><br />
            A well planned restaurant fit out ensures that every design element, from lighting and furniture to spatial layout and acoustics, contributes to a seamless dining experience.  Accordingly, our fit out are designed according to individual specifications for each type of outlet, allowing us to deliver results aligned with the client’s concept while enhancing both functionality and customer satisfaction.
          </p>

          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
            Putting Customers First
          </h2>

          <p className="text-sm sm:text-base font-play">
            At the core of our f&b fit out process lies comprehension of what exactly our client wants to achieve and where he or she envisions their customers being. We take time to listen as well as collaborate with clients so that we have every single detail matching their goals. Selecting appropriate materials, arranging the venue, and designing the space so that it is aesthetically pleasing while remaining inviting to consumers are our main areas of focus during this process.
          </p>

          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
            Lasting Impressions
          </h2>

          <p className="text-sm sm:text-base font-play">
           A perfect f&b fit out should leave a lasting memory in visitors’ minds. Our the food and beverage spaces are designed to be places where people want to go for dinner or drinks. Therefore, we take care of every aspect, starting from the layout and fixtures up to finishes and decor, in order for each place to give a positive experience that will make them come back again.

          </p>

          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
            Modern Trends and Innovations Integration
          </h2>

          <p className="text-sm sm:text-base font-play">
           The F&B industry un Dubai is not static but is fast evolving, with new trends and technologies popping up regularly. In order to keep our fit out designs current and relevant, we need to be aware of all recent developments within this sphere of business. This means also making use of eco-friendly building materials, energy-saving devices, or even smart buildings whenever required, among other things. Thus, every fit out done by us reflects modernity alongside trendiness being integrated therein. <br /><br />

          The conclusion is that the interior fit out of F&B venues is an opportunity for both creativity and functionality. We work with clients to create spaces where they can dine and socialize by creating unique and practical environments. Every fit-out project we undertake is successful because our team keeps up with trends in the market and gives priority to understanding the client’s needs; this guarantees that each space is operational and captivating during implementation.
          </p>

        </div>

        {/* GALLERY (KEPT SAME) */}
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

        {/* CTA (unchanged) */}
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
              className="px-6 py-3 bg-[#d4af37] text-black font-play text-sm rounded w-full sm:w-auto text-center"
            >
              Request availability by WhatsApp
            </a>

            <a
              href="mailto:info@radyinterior.ae"
              className="px-6 py-3 bg-[#8c6b1f] text-white font-play text-sm rounded w-full sm:w-auto text-center"
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