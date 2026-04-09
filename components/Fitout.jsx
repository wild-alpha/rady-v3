"use client";

import Image from "next/image";
import Link from "next/link";

const fitoutCards = [
  {
    title: "Office Fit Out",
    image: "/images/4.webp",
    href: "/fit-out-works/office-fit-out",
  },
  {
    title: "Villa Interior",
    image: "/images/5.webp",
    href: "/fit-out-works/villa-fit-out",
  },
  {
    title: "Apartment Design",
    image: "/images/6.webp",
    href: "/fit-out-works/apartment-fit-out",
  },
  {
    title: "Dining Interior",
    image: "/images/7.webp",
    href: "/fit-out-works/dining-interior",
  },
  {
    title: "Luxury Staircase",
    image: "/images/8.webp",
    href: "/fit-out-works/staircase-design",
  },
  {
    title: "Cafe Interior",
    image: "/images/9.webp",
    href: "/fit-out-works/cafe-fit-out",
  },
];

export default function Fitout() {
  return (
    <section className="bg-black py-14 lg:py-20">
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8 2xl:px-16">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-[850px] text-center">
          <h2 className="font-khand font-semibold text-[26px] text-white sm:text-[32px] lg:text-[36px]">
            Our Interior Fit Out Solutions
          </h2>

          <p className="mt-4 font-roboto text-[15px] leading-[1.8] text-white">
            As a leading interior fit out company in Dubai, we continue to
            pioneer innovative methods to build and renovate residential and
            <span className="text-[#d4af37]"> commercial spaces</span> that feel
            both stylish and highly functional. Our approach blends aesthetic
            vision with practical design, ensuring every environment is crafted
            for long term comfort and performance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {fitoutCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative block overflow-hidden"
            >

              {/* Image */}
              <div className="relative h-[260px] sm:h-[300px] lg:h-[260px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Luxury Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition duration-300 group-hover:from-black/50" />

              {/* Centered Title */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-roboto font-regular text-[18px] font-medium tracking-[1px] text-white text-center">
                  {card.title}
                </h3>
              </div>

            </Link>
          ))}
        </div>

        {/* Decorative Gold Line */}
        <div className="mx-auto mt-12 h-[2px] w-[300px] bg-[#d4af37]" />
      </div>
    </section>
  );
}