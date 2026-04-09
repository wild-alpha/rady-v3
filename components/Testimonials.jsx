"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";

import "swiper/css";
import "swiper/css/navigation";

const reviews = [
  {
    id: 1,
    name: "SOS Asad",
    time: "10 months ago",
    text: "I had the pleasure of working with one of the best interior design companies in Dubai Marina for my luxury apartment. Their team delivered a beautiful result with excellent attention to detail.",
    initials: "S",
    color: "bg-[#d95d1f]",
  },
  {
    id: 2,
    name: "Людмила АльАйта",
    time: "10 months ago",
    text: "I recently hired Oumair and his team for a luxury apartment interior design project in Palm Jumeirah, and the result exceeded expectations. Very professional and creative.",
    initials: "П",
    color: "bg-[#1b77c8]",
  },
  {
    id: 3,
    name: "Mohammad Alc...",
    time: "11 months ago",
    text: "Our Downtown Dubai apartment was transformed by the best interior design company in the area. The execution quality, design sense, and communication were all excellent.",
    initials: "M",
    color: "bg-[#6a3fc8]",
  },
  {
    id: 4,
    name: "Areeba Khan",
    time: "9 months ago",
    text: "From concept to completion, the fit out journey was smooth and highly professional. Their team understood our requirements perfectly and created a sophisticated final space.",
    initials: "A",
    color: "bg-[#b85b14]",
  },
  {
    id: 5,
    name: "Rizwan Ahmed",
    time: "8 months ago",
    text: "Excellent company for premium fit out and renovation work in Dubai. The materials, detailing, and finishing were all outstanding. Highly recommended for luxury interiors.",
    initials: "R",
    color: "bg-[#0f8a5f]",
  },
];

function GoogleIcon() {
  return (
    <div className="text-[18px] font-bold leading-none">
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </div>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-1 text-[#ffb400]">
      <FaStar className="text-[14px]" />
      <FaStar className="text-[14px]" />
      <FaStar className="text-[14px]" />
      <FaStar className="text-[14px]" />
      <FaStarHalfAlt className="text-[14px]" />
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="h-full rounded-[10px] bg-[#1b1b1b] p-4 text-white">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[16px] font-semibold text-white ${review.color}`}
          >
            {review.initials}
          </div>

          <div>
            <div className="flex items-center gap-1">
              <h3 className="max-w-[140px] truncate font-roboto text-[14px] font-semibold text-white">
                {review.name}
              </h3>
            </div>
            <p className="mt-0.5 font-roboto text-[12px] text-white/55">
              {review.time}
            </p>
          </div>
        </div>

        <GoogleIcon />
      </div>

      <div className="mt-3 flex items-center gap-1">
        <Stars />
        <IoCheckmarkCircle className="text-[14px] text-[#4da3ff]" />
      </div>

      <p className="mt-3 line-clamp-4 font-roboto text-[14px] leading-[1.65] text-white/78">
        {review.text}
      </p>

      <button className="mt-3 font-roboto text-[13px] text-white/45 transition hover:text-[#d4af37]">
        Read more
      </button>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-black py-14 lg:py-20">
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8 2xl:px-16">
        <h2 className="text-center font-khand font-semibold text-[18px] text-white sm:text-[26px] lg:text-[34px]">
          Client Testimonials
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-center">
          {/* Left business info */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo-y.png"
                alt="Rady Interior"
                width={120}
                height={70}
                className="h-auto w-[90px] sm:w-[110px]"
              />
              <div>
                <h3 className="max-w-[220px] font-khand text-[20px] font-semibold leading-[1.25] text-white sm:text-[22px]">
                  Rady Interiors | Premium Interior Design Company In Dubai, UAE
                </h3>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <Stars />
            </div>

            <p className="mt-2 font-roboto text-[16px] font-semibold text-white">
              64 Google reviews
            </p>

            <Link
              href="#"
              className="mt-5 inline-flex items-center justify-center rounded-md border border-white/60 px-5 py-2.5 font-roboto text-[14px] font-medium text-white transition duration-300 hover:border-[#d4af37] hover:text-[#d4af37]"
            >
              Write a review
            </Link>
          </div>

          {/* Reviews slider */}
          <div className="relative">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={16}
              slidesPerView={1}
              loop={true}
              speed={1600}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 1.2,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2.2,
                },
                1280: {
                  slidesPerView: 3,
                },
              }}
              className="testimonials-swiper"
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id} className="h-auto">
                  <ReviewCard review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-swiper {
          padding-right: 36px;
        }

        .testimonials-swiper .swiper-slide {
          height: auto;
        }

        .testimonials-swiper .swiper-button-prev,
        .testimonials-swiper .swiper-button-next {
          color: rgba(255, 255, 255, 0.75);
          width: 28px;
          height: 28px;
        }

        .testimonials-swiper .swiper-button-prev::after,
        .testimonials-swiper .swiper-button-next::after {
          font-size: 18px;
          font-weight: 700;
        }

        .testimonials-swiper .swiper-button-prev {
          left: -6px;
        }

        .testimonials-swiper .swiper-button-next {
          right: -6px;
        }

        @media (max-width: 1023px) {
          .testimonials-swiper {
            padding-right: 0;
          }

          .testimonials-swiper .swiper-button-prev,
          .testimonials-swiper .swiper-button-next {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}