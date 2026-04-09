import Image from "next/image";

export default function VHeroSection() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden sm:min-h-[40vh] md:min-h-[70vh]">
      <div className="absolute inset-0">
        <Image
          src="/images/modern-styled-entry.webp"
          alt="Contact us interior design and fit-out office background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[34vh] max-w-7xl items-center px-4 sm:min-h-[40vh] sm:px-6 md:min-h-[46vh] lg:px-8">
        <div className="max-w-4xl">
          <h1 className="mt-50 sm:mt-20 text-4xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Contact Us
          </h1>
        </div>
      </div>
    </section>
  );
}