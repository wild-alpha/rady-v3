"use client";

import Image from "next/image";
import Link from "next/link";

const featuresCards = [
  {
    title: "Villa Renovation",
    image: "/images/villa-rennovation.jpg",
    href: "/villa-renovation",
  },
  {
    title: "Apartment Renovation",
    image: "/images/apartment.jpg",
    href: "/apartment-renovation",
  },
  {
    title: "Office Renovation",
    image: "/images/office-interior.webp",
    href: "/office-renovation",
  },
  {
    title: "Kitchen Renovation",
    image: "/images/kitchen-renovation.jpg",
    href: "/kitchen-renovation",
  },
  {
    title: "Bathroom Renovation",
    image: "/images/bathroom-renovation.jpg",
    href: "/bathroom-renovation",
  },
  {
    title: "Villa Contracting",
    image: "/images/arabian-ranches-villa-interior-fit-out.webp",
    href: "/villa-contracting",
  }
];

export default function Features() {
  return (
    <section className="bg-black py-14 lg:py-20">
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8 2xl:px-16">
        
        {/* Gold Line */}
        <div className="mx-auto mb-6 h-[2px] w-[160px] bg-[#caa446] sm:mb-8 sm:w-[300px]" />

        {/* Heading */}
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="font-khand font-semibold text-[24px] text-white sm:text-[28px] lg:text-[34px]">
            Our Interior Fit Out Services In Dubai
          </h2>

          <p className="mt-4 font-roboto text-[12px] leading-[1.9] text-white sm:text-[13px] lg:text-[16px]">
            RadyInterior is an experienced and trusted interior fit out company
            in Dubai, UAE, offering complete fit out solutions tailored to both
            residential and commercial spaces. With years of expertise, we have
            proudly positioned ourselves as a leading interior fit out firm in
            Dubai renowned for our excellent craftsmanship, innovative design
            approach, and exceptional project execution.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuresCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group block"
            >
              
              {/* Image */}
              <div className="relative overflow-hidden bg-[#111]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Title below image */}
              <h3 className="mt-3 text-center font-roboto text-[13px] font-medium leading-[1.5] text-[#d4af37] transition duration-300 group-hover:text-white sm:text-[14px]">
                {card.title}
              </h3>

            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}