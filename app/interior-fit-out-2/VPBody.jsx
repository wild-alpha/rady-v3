import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Corporate Office Fitout",
    image: "/images/interior-fitout/project-1.jpg",
    href: "/projects/corporate-office-fitout",
  },
  {
    title: "Luxury Living Room",
    image: "/images/interior-fitout/project-2.jpg",
    href: "/projects/luxury-living-room",
  },
  {
    title: "Elegant Lounge Interior",
    image: "/images/interior-fitout/project-3.jpg",
    href: "/projects/elegant-lounge-interior",
  },
  {
    title: "Dining Space Fitout",
    image: "/images/interior-fitout/project-4.jpg",
    href: "/projects/dining-space-fitout",
  },
  {
    title: "Grand Staircase Interior",
    image: "/images/interior-fitout/project-5.jpg",
    href: "/projects/grand-staircase-interior",
  },
  {
    title: "Cafe Interior Fitout",
    image: "/images/interior-fitout/project-6.jpg",
    href: "/projects/cafe-interior-fitout",
  },
  {
    title: "Modern Dining Interior",
    image: "/images/interior-fitout/project-7.jpg",
    href: "/projects/modern-dining-interior",
  },
];

export default function VBody() {
  return (
    <section className="relative overflow-hidden bg-black py-14 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,166,61,0.07)_1px,transparent_1px)] bg-[size:14px_100%] opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group relative overflow-hidden bg-neutral-900"
            >
              <div className="relative aspect-[4/4.3] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition duration-300 group-hover:bg-black/10" />
              </div>

              <div className="absolute inset-0 flex items-center justify-center p-4">
                <h2 className="text-center text-lg font-medium leading-snug text-white sm:text-xl md:text-2xl">
                  {project.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}