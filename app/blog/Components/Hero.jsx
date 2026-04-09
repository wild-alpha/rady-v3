import Image from "next/image";

export default function VHeroSection() {
  return (
    <section className="relative min-h-[40vh] overflow-hidden md:min-h-[55vh]">
      <div className="absolute inset-0">
        <Image
          src="/images/office-renovation.jpg"
          alt="Interior design blog hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl items-center px-4 md:min-h-[55vh] sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-white sm:text-2xl md:text-4xl lg:text-5xl">
          Blog
        </h1>
      </div>
    </section>
  );
}