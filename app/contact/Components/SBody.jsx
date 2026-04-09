import Image from "next/image";
import Link from "next/link";

const offices = [
  {
    title: "HQ Office",
    image: "/images/shj.webp",
    address:
      "Business Tower – Corniche St – Al Majaz 2 – Al Majaz – Sharjah",
    href: "https://maps.google.com",
  },
  {
    title: "Dubai Office",
    image: "/images/Dubai-metro-3.webp",
    address: "The Binary Tower – Business Bay – Dubai",
    href: "https://maps.google.com",
  },
];

export default function VBody() {
  return (
    <>
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
          <div className="max-w-5xl">
            <h2 className="text-3xl font-semibold text-[#d4a63d] sm:text-4xl">
              Feel Free To Contact Us
            </h2>

            <form className="mt-10 space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block text-sm text-white/60 sm:text-base"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full border-0 border-b border-white/20 bg-transparent px-0 py-3 text-white placeholder:text-white/35 focus:border-[#d4a63d] focus:outline-none focus:ring-0"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-sm text-white/60 sm:text-base"
                >
                  Your E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full border-0 border-b border-white/20 bg-transparent px-0 py-3 text-white placeholder:text-white/35 focus:border-[#d4a63d] focus:outline-none focus:ring-0"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-3 block text-sm text-white/60 sm:text-base"
                >
                  Your Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full border-0 border-b border-white/20 bg-transparent px-0 py-3 text-white placeholder:text-white/35 focus:border-[#d4a63d] focus:outline-none focus:ring-0"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-3 block text-sm text-white/60 sm:text-base"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="w-full border-0 border-b border-white/20 bg-transparent px-0 py-3 text-white placeholder:text-white/35 focus:border-[#d4a63d] focus:outline-none focus:ring-0"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-3 block text-sm text-white/60 sm:text-base"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full resize-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-white placeholder:text-white/35 focus:border-[#d4a63d] focus:outline-none focus:ring-0"
                />
              </div>

              <button
                type="submit"
                className="inline-flex min-w-[140px] items-center justify-center border border-[#d4a63d] px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4a63d] transition hover:bg-[#d4a63d] hover:text-black"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {offices.map((office) => (
              <article key={office.title}>
                <div className="overflow-hidden rounded-2xl bg-neutral-900">
                  <div className="relative aspect-[4/2.4] w-full">
                    <Image
                      src={office.image}
                      alt={office.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                    {office.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">
                    {office.address}
                  </p>

                  <Link
                    href={office.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex min-w-[260px] items-center justify-center bg-[#d4a63d] px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-black transition hover:opacity-90"
                  >
                    View Location In Google Map
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-white/80 sm:text-base">
            learn how interior design projects are planned before you start
          </p>
        </div>
      </section>
    </>
  );
}