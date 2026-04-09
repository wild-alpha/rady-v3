"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const designProjects = [
  {
    title: "Mansion Interior Design",
    image: "/images/10.webp",
    href: "/services/mansion-interior-design",
  },
  {
    title: "Palace Interior design",
    image: "/images/11.webp",
    href: "/services/palace-interior-design",
  },
  {
    title: "Villa Interior Design Dubai",
    image: "/images/12.webp",
    href: "/services/villa-interior-design-dubai",
  },
  {
    title: "Townhouse Design Dubai",
    image: "/images/13.webp",
    href: "/services/townhouse-design-dubai",
  },
  {
    title: "Penthouse Interior Design Dubai",
    image: "/images/14.webp",
    href: "/services/penthouse-interior-design-dubai",
  },
  {
    title: "Apartment Interior Design Dubai",
    image: "/images/15.webp",
    href: "/services/apartment-interior-design-dubai",
  },
  {
    title: "Restaurant Design Dubai",
    image: "/images/16.webp",
    href: "/services/restaurant-design-dubai",
  },
  {
    title: "Landscape Design Dubai",
    image: "/images/17.webp",
    href: "/services/landscape-design-dubai",
  },
  {
    title: "Office Fit Out Dubai",
    image: "/images/18.webp",
    href: "/services/office-fit-out-dubai",
  },
  {
    title: "Villa Renovation Dubai",
    image: "/images/19.webp",
    href: "/services/villa-renovation-dubai",
  },
  {
    title: "Apartment Renovation Dubai",
    image: "/images/20.webp",
    href: "/services/apartment-renovation-dubai",
  },
  {
    title: "Kitchen Renovation Dubai, UAE",
    image: "/images/21.webp",
    href: "/services/kitchen-renovation-dubai-uae",
  },
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