"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const designProjects = [
{
    title: "Palace Interior Design",
    image: "/images/palace-furniture-dubai.jpg",
    href: "/palace-interior-design",
  },
  {
    title: "Villa Interior Design",
    image: "/images/modern-villa-interios-in-dubai.png",
    href: "/villa-interior-design",
  },
  {
    title: "Apartment Interior Design",
    image: "/images/apartment-living-room-interior-design.jpg",
    href: "/apartment-interior-design",
  },
  {
    title: "Penthouse Interior Design",
    image: "/images/penthouse-interior-design-service.jpg",
    href: "/penthouse-interior-design",
  },
  {
    title: "Restaurant Design",
    image: "/images/restaurant-renovation.jpg",
    href: "/restaurant-design",
  },
  {
    title: "Exterior Design",
    image: "/images/exterior-design-dubai.png", // was landscape
    href: "/exterior-design",
  },
  {
    title: "Office Interior Design",
    image: "/images/executive-office-interior.tif",
    href: "/office-interior-design",
  },
  {
    title: "Kitchen Interior Design",
    image: "/images/kitchen-design.jpg",
    href: "/kitchen-interior-design",
  }
];

const INITIAL_VISIBLE_COUNT = 8;

export default function DesignProjects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? designProjects
    : designProjects.slice(0, INITIAL_VISIBLE_COUNT);

  const hasMore = designProjects.length > INITIAL_VISIBLE_COUNT;

  return (
    <section className="bg-black">
      <div className="mx-auto max-w-[1920px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:px-16">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="font-khand font-semibold text-[24px] text-white sm:text-[28px] lg:text-[34px]">
            Premium Interior Design Services In Dubai
          </h2>

          <p className="mx-auto mt-3 max-w-[900px] font-roboto text-[12px] leading-[1.8] text-white sm:text-[1px] lg:text-[15px]">
            We highlight our best villa interiors, penthouse designs, office fit
            outs, restaurant concepts, and bespoke furniture craftsmanship each
            project reflecting our commitment to luxury and excellence.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
          {visibleProjects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group block"
            >
              <div className="relative overflow-hidden bg-[#111]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <h3 className="mt-3 text-center font-roboto text-[12px] font-semibold leading-[1.5] text-[#d4af37] transition duration-300 group-hover:text-white sm:text-[13px]">
                {project.title}
              </h3>
            </Link>
          ))}
        </div>

        {hasMore && !showAll && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="border border-[#b9912f] bg-transparent px-6 py-3 font-roboto text-[12px] font-semibold uppercase tracking-[1px] text-[#d4af37] transition duration-300 hover:bg-[#b9912f] hover:text-black"
            >
              View More Services
            </button>
          </div>
        )}

        {showAll && hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(false)}
              className="border border-[#b9912f] bg-transparent px-6 py-3 font-roboto text-[12px] font-semibold uppercase tracking-[1px] text-[#d4af37] transition duration-300 hover:bg-[#b9912f] hover:text-black"
            >
              Show Less
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-[#ece7de] px-4 py-10 sm:px-6 lg:px-8 lg:py-12 2xl:px-16">
        <div className="mx-auto max-w-[900px] text-center">
          <h3 className="font-khand font-semibold text-[22px] text-black sm:text-[24px] lg:text-[30px]">
            Let&apos;s Design Something Exceptional
          </h3>

          <p className="mt-3 font-roboto text-[13px] leading-[1.7] text-black/75 sm:text-[16px]">
            Serving Dubai and Sharjah with premium interior design and fit-out
            solutions.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:gap-4 lg:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-w-[230px] items-center justify-center bg-[#2ebf59] px-6 py-3 font-roboto text-[12px] font-semibold text-white transition duration-300 hover:bg-[#24a44b]"
            >
              Request Availability by WhatsApp
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-w-[230px] items-center justify-center bg-[#9a7a2c] px-6 py-3 font-roboto text-[12px] font-semibold text-white transition duration-300 hover:bg-[#846722]"
            >
              Request Availability by E-mail
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}