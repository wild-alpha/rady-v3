import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Al Marjan Island",
    image: "/images/ras-al-khaimah/project-1.jpg",
    href: "/projects/al-marjan-island",
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
              <div className="relative aspect-[4/4.1] w-full">
                <Image
                  src="/images/ras-al-khaimah/about.jpg"
                  alt="Luxury interior fit out project in Ras Al Khaimah"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="mb-5 text-3xl font-semibold leading-snug text-[#d4a63d] sm:text-4xl">
              Interior Fit Out In Ras Al Khaimah | RadyInterior
            </h2>

            <p className="mb-5 text-sm leading-7 text-gray-300 sm:text-base">
              RadyInterior leads the way in interior fit out services across Ras
              Al Khaimah, offering refined solutions for modern offices, luxury
              homes, and contemporary retail environments. Every project is shaped
              around client needs, style preferences, and functional requirements
              to create spaces with a strong and distinctive identity.
            </p>

            <p className="mb-8 text-sm leading-7 text-gray-300 sm:text-base">
              We prioritize quality workmanship, premium materials, and elegant
              detailing to ensure that every residential or commercial interior
              feels polished, practical, and visually impressive. Our expertise
              allows us to deliver fit out solutions that enhance both appearance
              and long-term usability.
            </p>

            <h3 className="mb-4 text-2xl font-semibold leading-snug text-[#d4a63d] sm:text-3xl">
              Perspective On Creative Design
            </h3>

            <p className="text-sm leading-7 text-gray-300 sm:text-base">
              Our interior fit out portfolio in Ras Al Khaimah reflects a passion
              for innovative design, careful planning, and skillful execution. By
              combining modern styling with practical layouts, we transform spaces
              into interiors that are elegant, welcoming, and built to exceed
              expectations for both lifestyle and commercial use.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-14">
            <h2 className="text-3xl font-semibold uppercase tracking-wide text-[#d4a63d] sm:text-4xl">
              Our Fit Out Projects In Ras Al Khaimah
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.href}
                className="group relative max-w-md overflow-hidden bg-neutral-900"
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