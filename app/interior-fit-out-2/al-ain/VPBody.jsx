import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Al Sidrah Al Khabisi",
    image: "/images/al-ain/project-1.jpg",
    href: "/projects/al-sidrah-al-khabisi",
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
                  src="/images/al-ain/about.jpg"
                  alt="Luxury interior fit out project in Al Ain"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="mb-5 text-3xl font-semibold leading-snug text-[#d4a63d] sm:text-4xl">
              Best Interior Fit Out Company In Al Ain
            </h2>

            <p className="mb-5 text-sm leading-7 text-gray-300 sm:text-base">
              The ongoing demand for quality interior design and fit out services
              in Al Ain makes RadyInterior a trusted choice for delivering
              outstanding residential and commercial solutions. We create spaces
              that combine beauty, comfort, and purpose through refined detailing
              and smart execution.
            </p>

            <p className="mb-8 text-sm leading-7 text-gray-300 sm:text-base">
              Our team provides innovative fit out solutions for villas,
              apartments, and commercial properties, using elegant finishes,
              functional layouts, and premium materials. Every project is shaped
              to reflect the client’s vision while maintaining a high standard of
              craftsmanship and practical value.
            </p>

            <h3 className="mb-4 text-2xl font-semibold leading-snug text-[#d4a63d] sm:text-3xl">
              Consumer-Based Conceptualization
            </h3>

            <p className="text-sm leading-7 text-gray-300 sm:text-base">
              We design interior fit out spaces in Al Ain with close attention to
              each client’s preferences, lifestyle, and environment. From elegant
              residential interiors to sophisticated commercial spaces, our
              solutions are tailored to inspire, perform efficiently, and deliver
              a timeless visual impact.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-14">
            <h2 className="text-3xl font-semibold uppercase tracking-wide text-[#d4a63d] sm:text-4xl">
              Our Fit Out Projects In Al Ain
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