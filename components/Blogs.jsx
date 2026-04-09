"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    title: "Office Interior Design",
    date: "Published: 12.02.2026",
    excerpt:
      "Explore the latest office interior design trends in Business Bay for 2026, including flexible layouts.",
    image: "/images/30.webp",
    link: "/office-interior-design-trends-in-business-bay",
  },
  {
    title: "Villa Construction in Dubai",
    date: "Published: 05.01.2026",
    excerpt:
      "Luxury villa construction in Dubai with complete construction execution, design & build, interior design",
    image: "/images/31.webp",
    link: "/complete-villa-construction-dubai",
  },
  {
    title: "5 Modern Apartment Interiors",
    date: "Published: 11.09.2025",
    excerpt:
      "Discover modern apartment interior designs in 2025. Explore 5 trending styles in Dubai, from minimalism.",
    image: "/images/32.webp",
    link: "/modern-apartment-interior-design",
  },
];

const splitTitle = (title) => {
  const words = title.split(" ");
  return (
    <>
      {words.slice(0, 2).join(" ")} <br />
      {words.slice(2).join(" ")}
    </>
  );
};

const Blogs = () => {
  return (
    <section
      id="blogs"
      className="overflow-hidden bg-black py-20 text-white bg-[url('/images/ftrs-bg-m.webp')] sm:bg-[url('/images/bg-dt-d.webp')] bg-cover bg-center bg-no-repeat"
    >
      <div className="mx-auto w-[80%] sm:w-[85%] md:w-[80%] lg:w-[70%]">
       

        <h2 className="mt-10 mb-10 text-center font-conthrax text-sm tracking-widest text-white sm:text-xl">
          OUR BLOGS
        </h2>

        {/* Mobile slider */}
        <div className="md:hidden">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {blogPosts.map((post, index) => (
              <Link
                href={post.link}
                key={index}
                className="block min-w-full snap-center"
              >
                <div className="group cursor-pointer rounded-md border border-[#caa446]/60 bg-[#111111] p-4 transition-all duration-500 hover:border-[#caa446] hover:shadow-[0_0_25px_rgba(202,164,70,0.12)]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="h-auto w-full rounded object-cover"
                  />

                  <div className="mt-4 flex h-full flex-col">
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <h3 className="text-xs font-conthrax uppercase leading-snug text-[#caa446] sm:text-[13px]">
                        {splitTitle(post.title)}
                      </h3>

                      <div className="ml-4 shrink-0 text-right">
                        <span className="font-play text-xs text-white/80">
                          {post.date}
                        </span>
                     
                      </div>
                    </div>

                    <p className="mt-2 mb-4 font-play text-sm leading-relaxed text-white/70">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto text-right">
                      <span className="font-play text-sm text-[#caa446] transition-colors duration-300 group-hover:text-white">
                        Read More <span className="text-base">»</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Link href={post.link} key={index}>
              <div className="group cursor-pointer rounded-md border border-[#caa446]/60 bg-[#111111] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-[#caa446] hover:shadow-[0_0_25px_rgba(202,164,70,0.12)]">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="h-auto w-full rounded object-cover"
                />

                <div className="mt-4 flex h-full flex-col">
                  <div className="mb-2 flex items-start justify-between gap-4">
                    <h3 className="text-xs font-conthrax uppercase leading-snug text-[#caa446] sm:text-[13px]">
                      {splitTitle(post.title)}
                    </h3>

                    <div className="ml-4 shrink-0 text-right">
                      <span className="font-play text-xs text-white/80">
                        {post.date}
                      </span>
                      <div className="mt-1 flex justify-end">
                    
                      </div>
                    </div>
                  </div>

                  <p className="mt-2 mb-4 font-play text-sm leading-relaxed text-white/70">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto text-right">
                    <span className="font-play text-sm text-[#caa446] transition-colors duration-300 group-hover:text-white">
                      Read More <span className="text-base">»</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/blogs">
            <button className="border border-[#caa446] bg-[#caa446] px-8 py-3 font-khand font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:bg-transparent hover:text-[#caa446]">
              VIEW ALL BLOGS
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;