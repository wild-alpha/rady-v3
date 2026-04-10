"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

// Updated Data Arrays based on your new content
const designImages = [
  "/images/luxury-villa-interior-design-dubai.jpg",
  "/images/contemporary-villa-bedroom-interior-dubai.jpg",
  "/images/modern-villa-living-room-design-dubai.jpg",
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
    title: "PALM JUMEIRAH VILLA",
  },
  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "EMIRATES HILLS VILLA",
  },
  {
    src: "/images/vservice1.webp",
    link: "/emirates-hills-villa",
    title: "DISTRICT ONE MBR VILLA",
  },
  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "DUBAI HILLS ESTATE VILLA",
  },
  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "AL BARARI VILLA",
  },
];

const villaSteps = [
  {
    id: "01",
    title: "Explore Your Future Space Before It’s Built",
    desc: "Our immersive 3D and VR environments allow clients to evaluate color palettes, lighting conditions, materials, furniture placement, and layout variations in a virtual setting. This hands on experience ensures every design decision truly reflects their preferences.",
    img: "/images/3d-eval.webp",
  },
  {
    id: "02",
    title: "Collaborative, Client-Centered 3D Design",
    desc: "We integrate client feedback directly into our 3D models, refining each version until the design fully aligns with their goals. This collaborative process ensures that every element from finishes to furniture is tailored to their personal style.",
    img: "/images/3d-collab.webp",
  },
  {
    id: "03",
    title: "Bridging Imagination & Reality",
    desc: "By closing the gap between concept and execution, RadyInterior empowers clients to actively participate in shaping their spaces. This results in interiors that are not only visually stunning but also functional, practical, and customized to their lifestyle ensuring the final project meets expectations with precision.",
    img: "/images/3d-reality.webp",
  },
];

const faqs = [
  {
    question: "What is 3D visualization in interior design?",
    answer: "It is the process of creating highly accurate digital models of your space. It allows you to see the final look, including materials and lighting, before any physical work starts.",
  },
  {
    question: "Do you offer VR or virtual walkthroughs?",
    answer: "Yes, RadyInterior provides immersive VR-enabled design services. You can take a virtual walk through your future home to experience the scale and feel of the space.",
  },
  {
    question: "How does 3D visualization help reduce project risk?",
    answer: "By detecting design issues early in the digital phase, we prevent costly on-site errors, reduce project delays, and eliminate expensive modifications.",
  },
  {
    question: "Can I request revisions after seeing the 3D design?",
    answer: "Absolutely. Our process is collaborative. We refine the 3D models based on your feedback until every detail aligns with your goals and personal style.",
  },
  {
    question: "Do you provide 3D visuals for existing designs from other firms?",
    answer: "We primarily provide visualization for our own design and fit-out projects to ensure the highest quality and technical accuracy from concept to execution.",
  },
];

const SBody = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="bg-[#000000] text-[#ffffff]">
      {/* Section 1: Hero & Intro */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 font-sans">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2 flex flex-col justify-start">
              <h2 className="text-sm sm:text-xl md:text-xl font-bold tracking-widest py-2 text-[#d4af37]">
                3D Visualization and Interior Design in Dubai
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                At RadyInterior, we elevate interior design through advanced 3D visualization and virtual reality (VR) technologies, helping clients across Dubai and the UAE clearly visualize their future spaces before construction begins. This is not just a design trend it's a smarter, immersive approach that enhances communication, accelerates decision making, and ensures every detail aligns with your vision. Our VR enabled <a href="/interior-design-services-dubai" className="text-[#d4af37] font-bold hover:underline mx-1">
    interior design services
  </a> allow clients to explore layouts, materials, lighting, and finishes in lifelike detail, creating a seamless and collaborative design experience.<br /><br />

                Our 3D visualization services use cutting edge design software to build highly accurate digital models of interiors. This approach delivers exceptional precision, reduces costly revisions, and shortens the overall design timeline. Clients can explore their spaces through interactive 3D walkthroughs, view intricate material details, and experience true to life lighting and layouts helping them make confident decisions and ensuring the final result aligns perfectly with their vision.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                Leading 3D Visualization in Dubai
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/villa-cover.webp"
                    alt="Watch our 3D process"
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
                    src="https://www.youtube.com/embed/F1tjU-4YMmg?autoplay=1"
                    title="Interior Design Video"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 3D Visualization Details */}
      <section className="py-10 px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <h2 className="text-center text-xl sm:text-3xl font-conthrax text-[#d4af37] mb-8">
          EXPLORING THE FUTURE OF DESIGN
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {villaSteps.map((step) => (
            <div key={step.id} className="bg-[#141517] p-6 rounded-lg border border-[#8c6b1f]/20">
              <span className="text-4xl font-conthrax text-[#8c6b1f]/30">{step.id}</span>
              <h3 className="text-lg font-bold text-[#d4af37] my-3">{step.title}</h3>
              <p className="text-sm font-play leading-6">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xl font-conthrax uppercase text-[#d4af37]">Experience the Future Today</h3>
          <p className="text-black text-sm sm:text-base font-semibold px-4">
            Transform your vision into a precise, realistic virtual experience with RadyInterior.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
            <a href="https://wa.me/971508181824" className="px-6 py-3 bg-[#d4af37] text-black font-play text-sm rounded hover:bg-[#f0c95a] transition">
              Request via WhatsApp
            </a>
            <a href="mailto:info@radyinterior.ae" className="px-6 py-3 bg-[#8c6b1f] text-white font-play text-sm rounded hover:bg-[#d4af37] hover:text-black transition">
              Email Us Today
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: Benefits & Gallery */}
      <section className="px-6 py-10 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 font-play">
            <h2 className="text-2xl font-conthrax text-[#d4af37]">Key Benefits of Our Approach</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li><b>Enhanced Client Engagement & Satisfaction:</b> Our advanced 3D visualization and VR interior design services give clients a fully immersive experience, allowing them to participate in every step of the design process. By visually exploring layouts, materials, lighting, and textures, clients gain clarity and confidence resulting in more personalized, satisfying, and accurate outcomes.</li>
              <li><b>Reduced Design Errors & Costly Revisions:</b>High-precision 3D models allow us to detect design issues long before construction begins. By identifying errors early, we prevent unnecessary changes, reduce project delays, and eliminate expensive on site modifications ensuring a smoother, more efficient workflow for both <a href="/interior-design-services-dubai" className="text-[#d4af37] font-bold hover:underline mx-1">
    residential and commercial interior design projects in Dubai
  </a>  and across the UAE.</li>
              </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl border border-[#8c6b1f]">
            <Image src="/images/modern-villa-living-room-design-dubai.jpg" alt="3D Design" width={600} height={400} className="w-full h-auto" />
          </div>
        </div>

        {/* --- NAYA ALAG SECTION YAHAN SE SHURU HAI --- */}
      <div className="max-w-7xl mx-auto py-12 border-t border-[#8c6b1f]/20">
  <div className="grid md:grid-cols-2 gap-12">
    {/* Box 1 */}
    <div className="space-y-4">
      <h3 className="text-[#d4af37] font-conthrax text-xl uppercase">
        Accelerated Design Process
      </h3>
      <p className="text-sm font-play leading-7">
        Digitizing the entire concept through VR and 3D visualization speeds up
        communication, supports faster iterations, and shortens overall project
        timelines.
      </p>
    </div>

    {/* Box 2 */}
    <div className="space-y-4">
      <h3 className="text-[#d4af37] font-conthrax text-xl uppercase">
        Experience the Future Today
      </h3>
       <p className="text-sm font-play leading-7">
        A streamlined digital workflow reduces unnecessary revisions, saving
        both time and cost, while maintaining premium design quality.
      </p>
      <p className="text-sm font-play leading-7">
        At RadyInterior, we continuously adopt cutting edge tools to stay ahead
        of industry advancements. The integration of VR with 3D visualization
        allows us to deliver innovative designs that align perfectly with our
        clients’ needs and lifestyle.
      </p>
      
    </div>

    {/* Box 3 - Isko col-span-full diya hai taake ye dono ke niche center mein aaye */}
    <div className="space-y-4 md:col-span-2 md:max-w-3xl md:mx-auto md:text-center">
      <h3 className="text-[#d4af37] font-conthrax text-xl uppercase">
        Cost Effective & Efficient Workflow
      </h3>
     <p className="text-sm font-play leading-7">
        Discover how RadyInterior, one of the leading 3D visualization companies
        in Dubai, can transform your vision into a precise, realistic virtual
        experience. Our advanced technology and collaborative approach ensure
        your design is executed with unmatched accuracy and creativity.
      </p>
    </div>
  </div>
</div>
        {/* --- NAYA SECTION KHATAM --- */}

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-16 bg-[#141517] rounded-lg p-6 sm:p-10 border border-[#8c6b1f]/30">
          <h2 className="text-center text-2xl font-conthrax mb-8 text-[#d4af37]">FAQs – 3D Visualization</h2>
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <details key={index} className="group border-b border-gray-700 py-4">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-play font-semibold text-[#d4af37]">{item.question}</span>
                  <span className="text-[#d4af37] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm font-play text-gray-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default SBody;