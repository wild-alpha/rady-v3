import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "UAQ Coffee Corner",
    image: "/images/umm-al-quwain/project-1.jpg",
    href: "/projects/uaq-coffee-corner",
  },
  {
    title: "UAQ Living Room",
    image: "/images/umm-al-quwain/project-2.jpg",
    href: "/projects/uaq-living-room",
  },
  {
    title: "UAQ Majlis",
    image: "/images/umm-al-quwain/project-3.jpg",
    href: "/projects/uaq-majlis",
  },
  {
    title: "UAQ Glass Room",
    image: "/images/umm-al-quwain/project-4.jpg",
    href: "/projects/uaq-glass-room",
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
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/umm-al-quwain/about.jpg"
                  alt="Luxury dining interior fit out in Umm Al Quwain"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="mb-5 text-3xl font-semibold leading-snug text-[#d4a63d] sm:text-4xl">
              Best Interior Fit Out In Umm Al Quwain | RadyInterior
            </h2>

            <p className="mb-5 text-sm leading-7 text-gray-300 sm:text-base">
              RadyInterior is one of the leading interior design and fit out
              companies in Umm Al Quwain, known for delivering refined services
              for residential and commercial interior projects. Our team creates
              spaces that blend beauty with usability, ensuring perfect execution
              in every detail.
            </p>

            <p className="mb-8 text-sm leading-7 text-gray-300 sm:text-base">
              From luxury homes to business-oriented interiors, our fit out
              solutions are developed to meet high standards of quality and
              craftsmanship. We focus on elegant materials, smart layout planning,
              and durable finishes that improve the visual appeal and practicality
              of every environment.
            </p>

            <h3 className="mb-4 text-2xl font-semibold leading-snug text-[#d4a63d] sm:text-3xl">
              Unique Needs Customized Designs
            </h3>

            <p className="text-sm leading-7 text-gray-300 sm:text-base">
              Our approach in Umm Al Quwain is centered on custom-made interior
              fit out solutions tailored to the exact needs of each client. By
              combining high-quality materials with thoughtful design execution,
              we create interiors that are visually elegant, long-lasting, and
              functional for modern living and business use.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-14">
            <h2 className="text-3xl font-semibold uppercase tracking-wide text-[#d4a63d] sm:text-4xl">
              Our Fit Out Projects In Umm Al Quwain
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.href}
                className={`group relative overflow-hidden bg-neutral-900 ${
                  index === 3 ? "sm:col-span-2 lg:col-span-1" : ""
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