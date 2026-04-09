import Image from "next/image";

export default function VHeroSection() {
  return (
    <section className="relative min-h-[55vh] overflow-hidden md:min-h-[70vh]">
      <div className="absolute inset-0">
        <Image
          src="/images/al-ain/hero.jpg"
          alt="Interior fit out company in Al Ain luxury dining interior"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/35" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[55vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8 md:min-h-[70vh]">
        <div className="max-w-5xl">
          <h1 className="text-4xl font-semibold leading-tight text-[#d4a63d] sm:text-5xl md:text-6xl lg:text-7xl">
            Interior Fit Out Company In Al Ain
          </h1>
        </div>
      </div>
    </section>
  );
}