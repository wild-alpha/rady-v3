import Image from "next/image";

export default function VHeroSection() {
  return (
    <section className="relative min-h-[42vh] overflow-hidden sm:min-h-[50vh] md:min-h-[62vh]">
      <div className="absolute inset-0">
        <Image
          src="/images/about-us.webp"
          alt="Luxury living room interior by RadyInterior"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[42vh] max-w-7xl items-center px-4 sm:min-h-[50vh] sm:px-6 md:min-h-[62vh] lg:px-8">
        <div className="max-w-6xl">
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-2xl md:text-4xl lg:text-5xl">
            Designed With Purpose, Built With Precision.
          </h1>
        </div>
      </div>
    </section>
  );
}