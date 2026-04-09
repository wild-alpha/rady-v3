import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-img.jpg"
          alt="Interior Design Dubai"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="w-full px-4 pt-28 pb-12 sm:px-6 md:px-8 lg:px-10 xl:px-5 2xl:px-6">
          <div className="max-w-[1200px]">
            <p className="font-roboto text-[16px] font-bold text-[#d4af37] md:text-[16px]">
              Welcome to Radyinterior
            </p>

            <h1 className="mt-6 max-w-[1000px] font-khand text-[40px] font-semibold leading-[1.1] text-white sm:text-[16px] md:text-[20px] lg:text-[28px] xl:text-[36px] 2xl:text-[48px]">
            Interior Design Dubai - Luxury Interior Design & Fit-Out Company, UAE
            </h1>

           <h2 className="mt-10 max-w-[1200px] font-khand text-[18px] font-medium leading-[1.1] text-white sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[32px]">Premium Residential & Commercial Interior Designers In Dubai, UAE
            </h2>

            <p className="mt-8 max-w-[1150px] font-roboto leading-[1.6] text-white/95">
               Rady Interiors is a leading interior design company across the UAE including Dubai and Sharjah, delivering premium<br /> interior design for residential and commercial spaces.
            </p>
            <div className="mt-8 md:mt-6">
            <Link
             href="/gallery"
              className="inline-flex items-center justify-center rounded-[8px] bg-[#e9c35f] px-8 py-3 font-roboto text-[18px] font-medium text-black transition hover:bg-[#d4af37]"
            >
              Our Projects
            </Link>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}