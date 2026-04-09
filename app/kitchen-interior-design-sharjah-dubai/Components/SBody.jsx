"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const designImages = [
  "/images/luxury-kitchen-design-dubai.jpg",
  "/images/modern-kitchen-interior-sharjah.jpg",
  "/images/contemporary-kitchen-uae.jpg",
];

const textImage = {
  src: "/images/kitchen-hero.webp",
  link: "/contact-us",
  title: "Rady Interior Kitchen Design",
};

const galleryImages = [
  {
    src: "/images/kitchen-1.webp",
    link: "/minimalist-kitchen-design",
    title: "MINIMALIST KITCHEN DESIGN",
  },
  {
    src: "/images/kitchen-2.webp",
    link: "/luxury-kitchen-interior",
    title: "LUXURY KITCHEN INTERIOR",
  },
  {
    src: "/images/kitchen-3.webp",
    link: "/modern-traditional-kitchen",
    title: "MODERN-TRADITIONAL MIX",
  },
  {
    src: "/images/kitchen-4.webp",
    link: "/open-layout-kitchen",
    title: "OPEN LAYOUT KITCHENS",
  },
  {
    src: "/images/kitchen-5.webp",
    link: "/bespoke-kitchen-design",
    title: "CUSTOM KITCHEN SOLUTIONS",
  },
  {
    src: "/images/kitchen-6.webp",
    link: "/premium-material-kitchen",
    title: "PREMIUM MATERIAL FINISHES",
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
                Kitchen Interior Design Dubai, Sharjah, UAE
              </h1>
             

              <div className="text-sm sm:text-base leading-7 mb-4 space-y-4">
                <p>
                  A house is a mix of components of different portions having importance and utility. Ingenuous architects never ignore the draw and design functionality of each element. Kitchen Interior Design Dubai has a variety of options.
                </p>
                <p>
                  The importance of a kitchen in a house is an essential aspect to consider. A realistic and highly efficient kitchen design is required for cooking food for the whole family and gatherings in a single area.
                </p>
                <p>
                  The choice and preferences of a house lady are integral to consider right from the time of structure design till the final interior finish. Kitchens interior can’t be designed to cater to the number of family members. It has to foresee the load and usage on days of extra visitors and occasions.
                </p>
                 <p>
                 The latest and modern kitchen fixtures and gadgets add charm and enhance the functionality of your compact or open kitchen setup. It is always good to divide a kitchen into smart portions to increase storage, hygiene, efficiency, and convenience.  </p>
                 <p>
                 The dimensions and moving space of the kitchen user should guide the designers and fixers in designing and fixing the fixtures, such as sinks, water dispensers, coffee makers, burners, and utensil containers.                 </p>
                 <p>
                 Exhaust, ventilation, and lighting of the kitchen are of high importance in maintaining the climate and comfort of the entire house. The walls’ ceramic and floor tiles must be high grade and thematic. The dullness of the kitchen has a negative impact.</p>
                 <p>
                  To create a perfect kitchen <a href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline">
  interior design 
</a> in UAE , you can seek help from our interior designers. RadyInterior promises you to enjoy yummy dishes from stylish and luxury kitchens at your home and commercial setups.  </p>
                 <p>
                  For ideas and sample work, you can see <a href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline">
  Rady’s catalog
</a>  for Luxury Kitchen Interior Design. </p>
              </div>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit uppercase tracking-wider">
                Functional. Efficient. Elegant.
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37] uppercase">
                Modern Kitchen Gadgets & Fixtures
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/kitchen-cover.webp"
                    alt="Kitchen Design Video"
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
                    title="Kitchen Interior Design Portfolio"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              <Link
                href="/contact-us"
                className="border border-[#8c6b1f] text-[#d4af37] text-xs sm:text-base font-play px-6 py-2 mt-6 w-fit uppercase rounded hover:bg-[#8c6b1f] hover:text-white transition-all duration-200"
              >
                REQUEST A FREE QUOTE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Styles Grid Section */}
      <section className="py-10 px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          Professional Kitchen Design Elements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {designImages.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg border border-[#8c6b1f]/20">
              <Image
                src={src}
                alt={`Kitchen Style ${index + 1}`}
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xs sm:text-xl font-semibold uppercase text-[#d4af37]">
            EXPLORE OUR KITCHEN CATALOG
          </h3>
          <p className="text-black text-sm sm:text-base font-semibold px-4">
            For ideas and sample work, you can see Rady’s catalog for Luxury Kitchen Interior Design.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
            <a
              href="https://wa.me/971588075603"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#d4af37] text-black font-play text-sm rounded w-full sm:w-auto text-center hover:bg-[#f0c95a] transition"
            >
              WhatsApp Consultation
            </a>
            <a
              href="mailto:info@radyinterior.ae"
              className="px-6 py-3 bg-[#8c6b1f] text-white font-play text-sm rounded w-full sm:w-auto text-center hover:bg-[#d4af37] hover:text-black transition"
            >
              Email Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="px-6 py-10 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="lg:max-w-[80%] mx-auto bg-[#141517] p-6 sm:p-10 rounded shadow text-center space-y-6 mb-12">
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37] uppercase">
            Why Kitchen Interior Design Matters in Dubai?
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left leading-relaxed">
            <p>
              The <a href="https://radyinterior.ae/" className="text-[#d4af37] font-bold hover:underline">
 kitchen interior design in Dubai
</a>  is crucial as it enhances the cooking atmosphere. The kitchen is the main area of the home where important daily activities take place. These activities involve meal preparation, dining, hosting social gatherings, and arranging kitchen utensils and appliances. An orderly kitchen allows time savings and lowers stress levels. Additionally, the design contributes to the home’s aesthetics, making it more welcoming.
            </p>
            <p>
              Aesthetic appeal creates a pleasant atmosphere that everyone can enjoy. Additionally, kitchen interior design can enhance the home’s value. Potential buyers frequently seek a kitchen that is not only practical but also aesthetically appealing.
            </p>
          </div>
        </div>

       

        {/* Variants Section */}
        <div className="lg:max-w-[80%] mx-auto bg-[#141517] p-6 sm:p-10 rounded mb-12">
          <h2 className="text-center text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37] mb-8 uppercase">
            Variants of Kitchen Interior Design
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="text-[#d4af37] font-bold border-b border-[#8c6b1f] pb-2">Modern Design</h4>
              <p className="text-xs sm:text-sm">Modern kitchen interior design is simple and clean, focusing on space. It uses neutral colors and sleek furniture to create a calm feel.</p>
              <ul className="text-xs space-y-1 italic text-gray-400">
                <li>• Minimalist Design</li>
                <li>• Open Layouts</li>
                <li>• Contemporary Style</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-[#d4af37] font-bold border-b border-[#8c6b1f] pb-2">Luxury Design</h4>
              <p className="text-xs sm:text-sm">Luxury kitchen interior design uses expensive materials and custom features. It includes high-end finishes like marble and top appliances.</p>
              <ul className="text-xs space-y-1 italic text-gray-400">
                <li>• Custom Designs</li>
                <li>• Elegant Features</li>
                <li>• Premium Materials</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-[#d4af37] font-bold border-b border-[#8c6b1f] pb-2">Functional Luxury</h4>
              <p className="text-xs sm:text-sm">Kitchen interior design in Dubai mixes luxury with practicality. Kitchens often have bold colors and modern designs. They blend tradition with new ideas.</p>
              <ul className="text-xs space-y-1 italic text-gray-400">
                <li>• Modern-Traditional Mix</li>
                <li>• Bold Colors</li>
                <li>• Functional Luxury</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          OUR KITCHEN DESIGN PROJECTS
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
            <h2 className="text-xl font-conthrax mb-4 text-[#d4af37] uppercase">
              Kitchen Interior Design Dubai
            </h2>
            <p className="text-sm sm:text-base leading-7">
              Rady Interior utilizes premium materials like marble, granite, and stainless steel. The custom designs consider each client’s individual preferences and styles. Each kitchen will have its special features and exceptional details.
            </p>
            <p className="text-sm sm:text-base leading-7">
              RadyInterior also integrates advanced appliances and contemporary technology into the culinary experience. These kitchens are not only aesthetically pleasing and functional but also modern. RadyInterior’s kitchens interior designs blend luxury with practicality.
            </p>
          </div>

         
        </div>

        {/* Final CTA */}
        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-16 text-center space-y-6">
          <h2 className="text-black text-2xl sm:text-3xl font-conthrax uppercase">
            Ready to Build Your Dream Kitchen?
          </h2>
          <p className="text-black max-w-2xl mx-auto px-4 font-play">
            Partner with Rady Interior to create a stylish and luxury kitchen that blends practicality with high-end aesthetic appeal.
          </p>
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