"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiPlus, HiMinus } from "react-icons/hi";

const faqs = [
  {
    question: "What does RadyInterior specialize in?",
    answer:
      "RadyInterior specializes in premium interior design, fit-out works, renovation services, and bespoke space transformations for residential, commercial, hospitality, and office projects across Dubai and the UAE.",
  },
  {
    question: "Do you only work in Dubai, or across the UAE?",
    answer:
      "We primarily serve Dubai, but we also handle selected projects across the UAE including Sharjah, Ajman, Abu Dhabi, Umm Al Quwain, Ras Al Khaimah, Fujairah, and Al Ain.",
  },
  {
    question: "What types of projects do you usually handle?",
    answer:
      "We work on villas, apartments, penthouses, offices, retail stores, restaurants, cafes, hospitality spaces, and luxury renovations, always tailored to the client’s style and operational needs.",
  },
  {
    question: "How does the RadyInterior design process work?",
    answer:
      "Our process usually starts with consultation, concept development, space planning, material selection, visualization, approvals, fit-out execution, and final styling. We manage every step carefully for a smooth experience.",
  },
  {
    question: "Can RadyInterior handle both design and fit-out?",
    answer:
      "Yes, we provide complete turnkey solutions, which means we can handle both the creative design phase and the technical fit-out execution under one roof.",
  },
  {
    question: "Do you provide free initial consultations?",
    answer:
      "Yes, we offer an initial discussion to understand your project goals, style preferences, and budget direction before recommending the most suitable next steps.",
  },
  {
    question: "What type of clients do you work with?",
    answer:
      "We work with homeowners, property investors, landlords, business owners, hospitality brands, and clients looking for luxury residential or commercial interior solutions.",
  },
  {
    question: "Do you work with tight timelines?",
    answer:
      "Yes, depending on project scope, we can structure the workflow efficiently and prioritize deliverables to meet tighter timelines without compromising quality.",
  },
  {
    question: "How much does interior design cost in Dubai?",
    answer:
      "Interior design cost depends on project size, complexity, finishes, design scope, and execution requirements. We usually provide a customized quotation after understanding your needs.",
  },
  {
    question:
      "What’s the difference between interior design, fit-out, and renovation?",
    answer:
      "Interior design focuses on planning aesthetics and functionality, fit-out covers the actual execution and construction of the interior space, and renovation involves upgrading or remodeling an existing space.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-black py-14 lg:py-20">
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8 2xl:px-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_320px]">
          {/* FAQ Left */}
          <div>
            <h2 className="font-khand font-semibold text-[28px] text-white sm:text-[34px] lg:text-[40px]">
              FAQs
            </h2>

            <div className="mt-6">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="border-b border-[#3f3415]"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-start justify-between gap-4 py-5 text-left"
                    >
                      <span className="font-khand text-[18px] font-medium leading-[1.35] text-[#d4af37] sm:text-[20px]">
                        {index + 1}. {faq.question}
                      </span>

                      <span className="mt-1 shrink-0 text-[22px] text-[#d4af37]">
                        {isOpen ? <HiMinus /> : <HiPlus />}
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-5 pr-8 font-roboto text-[15px] leading-[1.9] text-white sm:text-[16px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mx-auto mt-12 h-[2px] w-[180px] bg-[#caa446] sm:w-[220px]" />
          </div>

          {/* Right Images + CTA */}
          <div className="flex flex-col">
            {/* Main image */}
            <Link href="/design-works" className="group block overflow-hidden">
              <div className="relative aspect-[4/4.8] w-full overflow-hidden">
                <Image
                  src="/images/26.webp"
                  alt="Luxury interior design"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </Link>

            <p className="mt-5 font-roboto text-[15px] font-medium text-[#d4af37]">
              Our Design Works
            </p>

            {/* Small images */}
            <div className="mt-5 grid grid-cols-2 gap-4">
              <Link href="/design-works" className="group block overflow-hidden">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src="/images/27.webp"
                    alt="Interior design project 1"
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>

              <Link href="/design-works" className="group block overflow-hidden">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src="/images/28.webp"
                    alt="Interior design project 2"
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>

              <Link href="/design-works" className="group block overflow-hidden">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src="/images/29.webp"
                    alt="Interior design project 3"
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>

              <Link href="/design-works" className="group block overflow-hidden">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src="/images/30.webp"
                    alt="Interior design project 4"
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="mt-5 block border border-[#3f3415] bg-transparent px-5 py-5 transition duration-300 hover:border-[#caa446] hover:bg-[#111111]"
            >
              <p className="font-roboto text-[15px] font-medium text-[#d4af37]">
                Contact Us
              </p>
              <p className="mt-1 font-roboto text-[16px] text-white/80">
                +971 50 818 1824
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}