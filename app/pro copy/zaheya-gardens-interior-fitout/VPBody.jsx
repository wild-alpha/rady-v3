import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  {
    src: "/images/zaheya-gardens/gallery-1.jpg",
    alt: "Zaheya Gardens interior fitout bedroom view",
  },
  {
    src: "/images/zaheya-gardens/gallery-2.jpg",
    alt: "Zaheya Gardens interior fitout dining area",
  },
  {
    src: "/images/zaheya-gardens/gallery-3.jpg",
    alt: "Zaheya Gardens interior fitout dining room detail",
  },
  {
    src: "/images/zaheya-gardens/gallery-4.jpg",
    alt: "Zaheya Gardens interior fitout bedroom renovation",
  },
];

const relatedProjects = [
  {
    title: "Al Yasmeen Villa Interior Fitout",
    image: "/images/zaheya-gardens/related-1.jpg",
    href: "/pro/al-yasmeen-villa-interior-fitout",
  },
];

export default function VBody() {
  return (
    <section className="bg-black sm:py-4 lg:py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Gallery */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative overflow-hidden bg-neutral-900 sm:col-span-1 lg:col-span-1">
                <div className="relative aspect-[4/4.2] w-full">
                  <Image
                    src={galleryImages[0].src}
                    alt={galleryImages[0].alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="relative overflow-hidden bg-neutral-900 sm:col-span-1 lg:col-span-1">
                <div className="relative aspect-[4/4.2] w-full">
                  <Image
                    src={galleryImages[1].src}
                    alt={galleryImages[1].alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="relative overflow-hidden bg-neutral-900 sm:col-span-2 lg:col-span-1">
                <div className="relative aspect-[4/4.2] w-full">
                  <Image
                    src={galleryImages[2].src}
                    alt={galleryImages[2].alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="relative overflow-hidden bg-neutral-900 sm:col-span-1 lg:col-span-1">
                <div className="relative aspect-[4/4.2] w-full">
                  <Image
                    src={galleryImages[3].src}
                    alt={galleryImages[3].alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-5">
            <div className="max-w-xl">
              <h1 className="text-4xl font-semibold leading-tight text-[#d4a63d] sm:text-5xl lg:text-6xl">
                Zaheya Gardens
                <br />
                Interior Fitout
              </h1>

              <p className="mt-8 text-base leading-8 text-white/75">
                Experience refined dining through our exclusive fit-out project at
                Zaheya Gardens. We create a sophisticated space that enhances your
                dining experience. We use premium materials, focus on every detail,
                and mix exquisite furniture, captivating lighting, and tailored
                arrangements. Your dining room becomes a sanctuary of flawless
                design.
              </p>

              <h2 className="mt-10 text-3xl font-semibold leading-tight text-[#d4a63d] sm:text-4xl">
                Project Execution
              </h2>

              <p className="mt-5 text-base leading-8 text-white/75">
                RadyInterior recently undertook a captivating
                refurbishment/renovation project for a dining room, infusing it
                with a contemporary style that seamlessly blends elegance and
                functionality. Our talented team of designers meticulously curated
                the space, incorporating sleek furniture, artistic lighting
                fixtures, and refined color schemes. Through careful attention to
                detail and aesthetics, we transformed the dining room into a
                sophisticated sanctuary that exudes modern charm. The result is a
                captivating space that invites memorable dining experiences and
                showcases our commitment to delivering exceptional interior design
                solutions.
              </p>

              <div className="mt-12 space-y-4 border-t border-[#d4a63d]/15 pt-8">
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                  <span className="min-w-[110px] text-xs font-semibold uppercase tracking-[0.35em] text-[#d4a63d]">
                    Client:
                  </span>
                  <span className="text-white/70">Zaheya Gardens</span>
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                  <span className="min-w-[110px] text-xs font-semibold uppercase tracking-[0.35em] text-[#d4a63d]">
                    Category:
                  </span>
                  <span className="text-white/70">
                    Refurbishment/Renovation, Contemporary, Dining Room
                  </span>
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                  <span className="min-w-[110px] text-xs font-semibold uppercase tracking-[0.35em] text-[#d4a63d]">
                    Location:
                  </span>
                  <span className="text-white/70">Al Zahya, Ajman</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <div className="pt-20 sm:pt-24 lg:pt-28">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold text-[#d4a63d] sm:text-4xl">
              Related Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((project, index) => (
              <Link
                key={index}
                href={project.href}
                className="group relative overflow-hidden bg-neutral-900"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 transition duration-300 group-hover:bg-black/15" />
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
      </div>
    </section>
  );
}