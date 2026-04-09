import Image from "next/image";

export default function VHeroSection() {
  return (
    <section className="relative min-h-[40vh] overflow-hidden md:min-h-[55vh]">
      <div className="absolute inset-0">
        <Image
          src="/images/blog/hero.jpg"
          alt="Interior design blog hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[40vh] max-w-7xl items-center px-4 md:min-h-[55vh] sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Blog
        </h1>
      </div>
    </section>
  );
}