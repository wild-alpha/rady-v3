"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const designImages = [
  "/images/luxury-modern-majlis-dubai.jpg",
  "/images/traditional-arabic-majlis-design.jpg",
  "/images/moroccan-majlis-interior-uae.jpg",
];

const textImage = {
  src: "/images/majlis-hero.webp",
  link: "/contact-us",
  title: "Rady Interior Majlis Design",
};

const galleryImages = [
  {
    src: "/images/majlis-1.webp",
    link: "/traditional-majlis-design",
    title: "TRADITIONAL ARABIC MAJLIS",
  },
  {
    src: "/images/majlis-2.webp",
    link: "/modern-majlis-design",
    title: "LUXURY MODERN MAJLIS",
  },
  {
    src: "/images/majlis-3.webp",
    link: "/moroccan-majlis-design",
    title: "MOROCCAN STYLE MAJLIS",
  },
  {
    src: "/images/majlis-4.webp",
    link: "/mens-majlis-dubai",
    title: "MEN'S MAJLIS DUBAI",
  },
  {
    src: "/images/majlis-5.webp",
    link: "/womens-majlis-dubai",
    title: "WOMEN'S MAJLIS DESIGNS",
  },
  {
    src: "/images/majlis-6.webp",
    link: "/minimalist-majlis-design",
    title: "MINIMALIST MAJLIS",
  },
];

const SBody = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="bg-[#000000] text-[#ffffff]">
      {/* Hero Section */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 font-sans">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2 flex flex-col justify-start">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-widest py-2 text-[#d4af37] uppercase">
                Majlis Interior Design Dubai
              </h1>
              <h2 className="text-lg font-semibold mb-6 text-white">
                Authentic Arabic Heritage. Contemporary Luxury. Expertly Delivered.
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                Transform your Majlis into a refined cultural statement with{" "}
               
                 Rady Interior , a leading  <a href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline">
                 Majlis interior design company in Dubai.
                </a>  We design elegant Arabic sitting rooms that respect tradition while seamlessly integrating modern luxury, comfort, and technology.
                <br /><br />
                Our Majlis interiors are not decorative spaces alone—they are thoughtfully designed environments for hospitality, prestige, and meaningful gatherings.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                Authentic. Luxurious. Functional.
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37] uppercase">
                Expert Majlis Design & Fit Out
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/majlis-cover.webp"
                    alt="Majlis Design Video"
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
                    src="https://www.youtube.com/embed/F1tjU-4YMmg?autoplay=1&rel=0"
                    title="Majlis Interior Design"
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
                REQUEST A FREE CONSULTATION
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Styles Grid Section */}
      <section className="py-10 px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          Popular Majlis Interior Styles We Create
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {designImages.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={src}
                alt={`Majlis Style ${index + 1}`}
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
              href="mailto:info@radyinterior.ae"
              className="px-6 py-3 bg-[#8c6b1f] text-white font-play text-sm rounded w-full sm:w-auto text-center hover:bg-[#d4af37] hover:text-black transition"
            >
              Request availability by E-mail
            </a>
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="px-6 py-10 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        {/* Why Choose Us Box */}
        <div className="lg:max-w-[80%] mx-auto bg-[#141517] p-6 sm:p-10 rounded shadow text-center space-y-6 mb-12">
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
            Why Choose Rady Interior for Majlis Design in Dubai?
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
            <p>
              Rady Interior is a trusted name in  <a href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline">
                 Arabic interior  design
                </a>  across Dubai and the UAE, known for delivering Majlis spaces that balance cultural authenticity with contemporary refinement.
            </p>
            <p>
              What sets us apart is our deep understanding of Emirati lifestyle, architectural proportions, material craftsmanship, and modern living expectations. Every Majlis we design reflects status, comfort, and timeless elegance.
            </p>
            <p className="text-[#d4af37] font-bold">Our promise:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Authentic Arabic design principles</li>
              <li>High end materials and finishes</li>
              <li>Precision planning and flawless execution</li>
              <li>Turnkey delivery with full accountability</li>
            </ul>
          </div>
        </div>

        {/* Services Detail Section */}
        <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-12 mb-12">
          <div className="w-full lg:w-2/3 space-y-6">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Our Majlis Interior Design Services
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-[#d4af37] font-bold text-lg mb-2">Traditional Arabic Majlis Design</h3>
                <p className="text-sm sm:text-base">
                  We create classic Arabic Majlis interiors inspired by Islamic geometry and regional heritage. These designs feature rich color palettes—gold, deep blue, warm brown—combined with premium fabrics, handcrafted details, and traditional low seating arrangements that embody true Arabian hospitality. 
                  <strong> Ideal for villas and heritage inspired homes across Dubai and the UAE.</strong>
                </p>
              </div>

              <div>
                <h3 className="text-[#d4af37] font-bold text-lg mb-2">Modern Majlis Interior Design</h3>
                <p className="text-sm sm:text-base">
                  Our modern Majlis designs reinterpret tradition through a contemporary lens. Clean architectural lines, subtle Arabic motifs, integrated lighting, smart climate control, and eco-conscious materials define these spaces. 
                  <strong> Perfect for clients seeking a  <a href="https://radyinterior.ae/" className="text-[#d4af37] hover:underline">
                 luxury modern Majlis in Dubai
                </a>  that aligns with today’s lifestyle without losing cultural depth.</strong>
                </p>
              </div>

              <div>
                <h3 className="text-[#d4af37] font-bold text-lg mb-2">Custom Majlis Solutions</h3>
                <p className="text-sm sm:text-base mb-4">Every Majlis is personal. We design:</p>
                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                  <li><strong>Men’s Majlis in Dubai</strong> with bold layouts, darker tones, and strong architectural elements</li>
                  <li><strong>Women’s Majlis designs</strong> featuring softer palettes, refined detailing, and elegant textures</li>
                  <li><strong>Small Majlis interior design solutions</strong> that maximize comfort and prestige in apartments and compact spaces</li>
                </ul>
                <p className="text-sm sm:text-base mt-4 italic">Each project is fully tailored to the client’s preferences, space, and usage.</p>
              </div>
            </div>
          </div>
           
          <div className="w-full lg:w-1/3 group relative overflow-hidden rounded-lg shadow-lg border-2 border-[#8c6b1f]">
            <Image
              src={textImage.src}
              alt={textImage.title}
              width={500}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Interior Styles Detailed */}
        <div className="lg:max-w-[80%] mx-auto bg-[#141517] p-6 sm:p-10 rounded mb-12">
          <h2 className="text-center text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37] mb-8">
            Popular Majlis Interior Styles We Create
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h4 className="text-[#d4af37] font-bold">Luxury Modern Majlis</h4>
              <p className="text-xs sm:text-sm">Designed for Dubai’s high-end residences, these Majlis interiors combine marble, metallic accents, premium upholstery, and minimal layouts. The result is a sophisticated space that feels luxurious yet culturally grounded.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-[#d4af37] font-bold">Moroccan Majlis Design</h4>
              <p className="text-xs sm:text-sm">Highly popular across Dubai, Sharjah, and the UAE, Moroccan Majlis interiors feature arches, layered textures, handcrafted patterns, and warm earth tones creating an inviting atmosphere for family gatherings.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-[#d4af37] font-bold">Minimalist Majlis</h4>
              <p className="text-xs sm:text-sm">For clients who prefer understated luxury, our minimalist Majlis designs focus on spatial clarity, refined materials, and intelligent lighting. Less ornamentation, more elegance without compromising cultural identity.</p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          OUR MAJLIS DESIGN PROJECTS
        </h2>
        <div className="lg:max-w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto mb-16">
          {galleryImages.map(({ src, title }, i) => (
            <div key={i} className="group block relative overflow-hidden rounded shadow border border-white/10">
              <Image
                src={src}
                alt={title}
                width={400}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs sm:text-sm font-conthrax text-center uppercase px-4">
                  {title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Detailed Info */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start mb-16">
          <div className="space-y-6 font-play">
            <h2 className="text-xl font-conthrax mb-4 text-[#d4af37]">
              What Makes Rady Interior Different
            </h2>
            <p className="text-sm sm:text-base">We don’t just design Majlis interiors—we deliver complete, functional, and future-ready spaces.</p>
            <ul className="space-y-4 text-sm sm:text-base">
              <li><strong>Dubai & UAE expertise:</strong> Deep understanding of local culture, lifestyle, and architectural standards</li>
              <li><strong>End to end service:</strong> Design, 3D visualization, fit-out, furniture, and final styling</li>
              <li><strong>Premium materials:</strong> Marble, natural wood, gold accents, custom fabrics, and bespoke joinery</li>
              <li><strong>Smart integration:</strong> Lighting, climate, and smart home features discreetly built in</li>
              <li><strong>Transparent value:</strong> Luxury results with clear pricing and professional project management</li>
            </ul>
          </div>

          <div className="bg-[#141517] p-8 rounded-lg">
            <h2 className="text-xl font-conthrax mb-6 text-[#d4af37]">
              Our Majlis Design Process
            </h2>
            <div className="space-y-6">
              <div className="border-l-2 border-[#d4af37] pl-4">
                <h4 className="font-bold text-[#d4af37]">Free Consultation</h4>
                <p className="text-sm">Site visit, lifestyle understanding, and budget alignment</p>
              </div>
              <div className="border-l-2 border-[#d4af37] pl-4">
                <h4 className="font-bold text-[#d4af37]">Concept & 3D Design</h4>
                <p className="text-sm">Detailed layouts and realistic 3D visualizations</p>
              </div>
              <div className="border-l-2 border-[#d4af37] pl-4">
                <h4 className="font-bold text-[#d4af37]">Material & Furniture Selection</h4>
                <p className="text-sm">Curated premium fabrics, finishes, and custom furniture</p>
              </div>
              <div className="border-l-2 border-[#d4af37] pl-4">
                <h4 className="font-bold text-[#d4af37]">Turnkey Execution</h4>
                <p className="text-sm">Construction, installation, lighting, and final styling handled by our expert team</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-16 text-center space-y-6">
          <h2 className="text-black text-2xl sm:text-3xl font-conthrax uppercase">
            Ready to Design Your Majlis?
          </h2>
          <p className="text-black max-w-2xl mx-auto px-4 font-play">
            Partner with Rady Interior, a trusted Majlis interior design company in Dubai, to create a space that reflects heritage, prestige, and modern luxury.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 px-4">
            <div className="text-black text-left space-y-2">
              <p className="flex items-center gap-2 font-bold"><span className="text-[#d4af37]">✔</span> Free consultation & quotation</p>
              <p className="flex items-center gap-2 font-bold"><span className="text-[#d4af37]">✔</span> 3D design visualization</p>
            </div>
            <div className="text-black text-left space-y-2">
              <p className="flex items-center gap-2 font-bold"><span className="text-[#d4af37]">✔</span> Transparent pricing</p>
              <p className="flex items-center gap-2 font-bold"><span className="text-[#d4af37]">✔</span> Complete project management</p>
            </div>
          </div>
          <Link
            href="/contact-us"
            className="inline-block px-10 py-4 bg-[#8c6b1f] text-white font-conthrax rounded hover:bg-[#d4af37] transition-all"
          >
            GET STARTED NOW
          </Link>
        </div>
      </section>
    </section>
  );
};

export default SBody;