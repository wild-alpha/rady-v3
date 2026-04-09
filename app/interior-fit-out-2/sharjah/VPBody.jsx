import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Maryam Island Fitout",
    image: "/images/sharjah/project-1.jpg",
    href: "/projects/maryam-island-fitout",
  },
  {
    title: "Al Zahia Majlis",
    image: "/images/sharjah/project-2.jpg",
    href: "/projects/al-zahia-majlis",
  },
  {
    title: "Al Zahia Community",
    image: "/images/sharjah/project-3.jpg",
    href: "/projects/al-zahia-community",
  },
  {
    title: "Al Khan Lagoon Apartment Interior Fit Out",
    image: "/images/sharjah/project-4.jpg",
    href: "/projects/al-khan-lagoon-apartment-fitout",
  },
  {
    title: "Tilal City Villa Interior Fit Out",
    image: "/images/sharjah/project-5.jpg",
    href: "/projects/tilal-city-villa-fitout",
  },
];

export default function VBody() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-14 sm:py-16 lg:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="mx-auto h-full max-w-7xl bg-[radial-gradient(circle_at_center,rgba(212,166,61,0.18),transparent_50%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm border border-[#d4a63d]/20 bg-neutral-900 shadow-2xl">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/sharjah/about.jpg"
                  alt="Luxury office interior fit out in Sharjah"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="mb-5 text-3xl font-semibold leading-snug text-[#d4a63d] sm:text-4xl">
              Best Interior Fit Out Company In Sharjah
            </h2>

            <p className="mb-5 text-sm leading-7 text-gray-300 sm:text-base">
              We deliver premium interior fit out services in Sharjah for villas,
              apartments, offices, retail spaces, and hospitality environments.
              Our approach blends elegant aesthetics with practical functionality
              to create refined spaces that reflect modern lifestyle needs.
            </p>

            <p className="mb-8 text-sm leading-7 text-gray-300 sm:text-base">
              From concept development to execution, our team focuses on quality
              finishes, smart space planning, and tailored design solutions. Each
              project is handled with attention to detail so the final result feels
              luxurious, comfortable, and highly functional.
            </p>

            <h3 className="mb-4 text-2xl font-semibold leading-snug text-[#d4a63d] sm:text-3xl">
              Harmonious Designs For Every Client
            </h3>

            <p className="text-sm leading-7 text-gray-300 sm:text-base">
              Whether you need a sophisticated residential interior or a polished
              commercial fit out, we customize every detail around your brand,
              vision, and daily use. Our goal is to create timeless interiors that
              improve both visual appeal and user experience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-14">
            <h2 className="text-3xl font-semibold uppercase tracking-wide text-[#d4a63d] sm:text-4xl">
              Our Fit Out Projects In Sharjah
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.href}
                className={`group relative overflow-hidden bg-neutral-900 ${
                  index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/35 transition duration-300 group-hover:bg-black/20" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <h3 className="text-center text-xl font-medium leading-snug text-white sm:text-2xl">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}