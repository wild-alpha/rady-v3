"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const serviceItems = [
  "Interior Design",
  "Interior Fit Out",
  "Landscape Design-Build",
  "Interior Design 360 VR",
];

const chooseUsFaqs = [
  {
    question: "Why Do Clients Choose Us For Interior Design And Fit-Out.",
    answer:
      "Clients choose us because we simplify the full journey from concept and space planning to execution and handover, while maintaining quality, elegance, and functionality throughout the project.",
  },
  {
    question: "How Experienced Is The RadyInterior Team?",
    answer:
      "Our team brings strong experience across residential, commercial, office, villa, and retail interiors, combining creative thinking with practical project delivery.",
  },
  {
    question: "What Is RadyInterior’s Approach To Quality?",
    answer:
      "We focus on thoughtful detailing, premium materials, controlled execution, and refined finishing to ensure each project meets a high standard of craftsmanship.",
  },
  {
    question:
      "What Services Make RadyInterior Different From Other Dubai Interior Design Companies?",
    answer:
      "Our value lies in combining interior design, fit-out, turnkey execution, planning, and client-focused customization under one coordinated workflow.",
  },
  {
    question: "How Does RadyInterior Ensure Client Satisfaction?",
    answer:
      "We align every stage with the client’s goals, maintain clear communication, and carefully manage timelines, materials, and execution quality.",
  },
  {
    question: "What Style Defines RadyInterior’s Design Philosophy?",
    answer:
      "Our style is modern, elegant, balanced, and purposeful, designed to create interiors that are visually refined and highly functional.",
  },
];

const generalFaqs = [
  {
    question:
      "1. What Makes RadyInterior Different From Other Interior Design Companies In Dubai?",
    answer:
      "RadyInterior combines design expertise, precise project execution, and a client-first approach, delivering bespoke interiors that are both visually striking and highly functional for UAE lifestyles and businesses.",
  },
  {
    question: "2. What Kind Of Clients Do You Usually Work With?",
    answer:
      "We work with homeowners, villa owners, businesses, offices, retail brands, hospitality spaces, and clients looking for tailored turnkey interior solutions.",
  },
  {
    question: "3. Do You Manage Projects From Concept To Completion?",
    answer:
      "Yes, we handle projects from initial design thinking and planning through execution, detailing, coordination, and handover.",
  },
  {
    question: "4. Who Leads The Design Team At RadyInterior?",
    answer:
      "RadyInterior is led by Mohammad Rady, whose design direction and leadership help shape the company’s commitment to refined and practical interiors.",
  },
  {
    question: "5. Can You Work With Existing Architects Or Consultants?",
    answer:
      "Yes, we can coordinate with architects, consultants, and project stakeholders to support smooth design and fit-out execution.",
  },
];

const designWorks = [
  {
    title: "Luxury Living",
    image: "/images/29.webp",
    href: "/design-works/luxury-living",
  },
  {
    title: "Elegant Bedroom",
    image: "/images/30.webp",
    href: "/design-works/elegant-bedroom",
  },
  {
    title: "Warm Lounge",
    image: "/images/31.webp",
    href: "/design-works/warm-lounge",
  },
  {
    title: "Restaurant Interior",
    image: "/images/32.webp",
    href: "/design-works/restaurant-interior",
  },
];

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#d4a63d]/15 py-4">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 text-left text-base font-medium text-[#d4a63d] sm:text-lg"
      >
        <span>{question}</span>
        <span
          className={`text-[#d4a63d] transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-7 text-white/70 sm:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VBody() {
  return (
    <>
      {/* Intro */}
      <section className="py-12 sm:py-12 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl lg:text-2xl">
              Leading Interior Design & Fit-Out Company In Dubai, UAE
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/70 sm:text-base">
              <p>
                RadyInterior is recognized as one of the top interior design
                companies in Dubai, known for delivering high-quality,
                efficient, and detail-driven interior design solutions across
                the UAE. Our approach blends creativity, strategic planning, and
                technical expertise, making us a trusted choice for clients
                seeking luxury interiors, functional layouts, and exceptional
                design outcomes.
              </p>

              <p>
                As a full service interior design and fit out company in Dubai,
                we provide complete solutions covering interior design,
                architecture, landscape design, and turnkey fit outs for both
                residential and commercial spaces. Our team focuses on creating
                interiors that are not only visually impressive but also highly
                functional, ensuring every space aligns with the client’s
                lifestyle, brand identity, and long-term goals.
              </p>

              <p>
                Our experienced interior designers and decorators specialize in
                transforming ordinary spaces into refined, elegant, and
                personalized environments. With extensive expertise in
                residential interior design, commercial design, villa interiors,
                retail spaces, and office fit-outs, we ensure a seamless,
                enjoyable, and structured design journey from concept to
                completion.
              </p>

              <p>
                Client satisfaction is at the core of everything we do. We work
                closely with each client to understand their needs and deliver
                customized design and fit-out solutions that reflect quality and
                consistency. By using premium materials, maintaining transparent
                timelines, and ensuring cost effective project management, we
                continue to stand out among the best interior design and fit out
                companies in Dubai and the UAE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services + Accordion */}
      <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,166,61,0.06)_1px,transparent_1px)] bg-[size:12px_100%] opacity-20" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#d4a63d] sm:text-3xl">
              Area of Services
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
              We offer a wide range of services designed for every client’s
              needs. As a leading Dubai interior design company, RadyInterior
              focuses on beauty, function, and long lasting value. Our creative
              interior design solutions elevate any space, whether for luxury
              homes or corporate working environments.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
              We also craft bespoke furniture tailored to each project
              requirement, blending aesthetics with purpose. Whether you are
              searching for a trusted interior design company in Sharjah or an
              expert interior designer in Dubai, we are committed to delivering
              exceptional results with precision and professionalism.
            </p>
          </div>

          <div className="space-y-2">
            {serviceItems.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between border-b border-[#d4a63d]/15 py-5"
              >
                <h3 className="text-xl font-semibold text-[#d4a63d] sm:text-2xl">
                  {item}
                </h3>
                <span className="text-2xl text-[#d4a63d]">+</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder section */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#d4a63d] sm:text-3xl">
              RadyInterior, Mohammad Rady
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
              Eng. Mohammad Rady leads RadyInterior with strong design
              expertise and years of hands-on experience in the UAE’s evolving
              interior design landscape. His passion for creating beautiful,
              functional environments inspired the foundation of RadyInterior,
              now recognized as one of Dubai’s leading interior design firms.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
              His thoughtful, client focused approach and commitment to quality
              guide every project, ensuring each space is designed with
              intention and delivered to perfection.
            </p>
          </div>

          <div className="overflow-hidden rounded-md border border-[#d4a63d]/10 bg-neutral-900">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/ceo.webp"
                alt="Mohammad Rady at RadyInterior office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why top company */}
      <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,166,61,0.06)_1px,transparent_1px)] bg-[size:12px_100%] opacity-20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#d4a63d] sm:text-3xl lg:text-4xl">
              What Makes RadyInterior One Of The Top Interior Design Companies
              In Dubai And The UAE?
            </h2>
            <p className="mx-auto mt-4 max-w-4xl text-sm leading-7 text-white/70 sm:text-base">
              RadyInterior stands out for its ability to blend creativity,
              functionality, and luxury into every project, always with
              precision, originality, and client focused detail.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div className="overflow-hidden rounded-md border border-[#d4a63d]/10 bg-neutral-900">
              <div className="relative aspect-[4/3.4] w-full">
                <Image
                  src="/images/office-interior.webp"
                  alt="Luxury office interior design by RadyInterior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              {chooseUsFaqs.map((item) => (
                <AccordionItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + sidebar */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1.5fr_0.72fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              FAQs
            </h2>

            <div className="mt-6">
              {generalFaqs.map((faq) => (
                <AccordionItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="overflow-hidden rounded-md border border-[#d4a63d]/10 bg-neutral-900">
              <div className="relative aspect-[4/3.2] w-full">
                <Image
                  src="/images/28.webp"
                  alt="Luxury design work showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#d4a63d] sm:text-base">
                Our Design Works
              </h3>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {designWorks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group overflow-hidden rounded-md border border-[#d4a63d]/10 bg-neutral-900"
                  >
                    <div className="relative aspect-square w-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-md border border-[#d4a63d]/10 bg-[#090909] p-5">
              <h4 className="text-sm font-semibold text-[#d4a63d]">
                Contact Us
              </h4>
              <p className="mt-2 text-sm text-white/70">+971 50 818 1824</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}