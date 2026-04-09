"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const socialLinks = [
  { icon: FaFacebookF, href: "https://www.facebook.com/rady.interior/", label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/rady.interior/", label: "Instagram" },
  { icon: FaYoutube, href: "https://www.youtube.com/@RadyInterior", label: "YouTube" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/rady-interior/?originalSubdomain=ae", label: "LinkedIn" },
  { icon: FaPinterestP, href: "https://www.pinterest.com/radyinterior/", label: "Pinterest" },
];

const importantLinks = [
  { name: "About us", href: "/about" },
  { name: "Our Services", href: "/" },
  { name: "Portfolio", href: "/gallery" },
  { name: "Design Works", href: "/" },
  { name: "Testimonials", href: "/" },
  { name: "Careers", href: "/" },
  { name: "Contact Us", href: "/contact" },
];

const serviceLocations = [
   { name: "DUBAI", href: "/areas-we-serve?category=dubai" },
      { name: "SHARJAH", href: "/areas-we-serve?category=sharjah" },
      { name: "AJMAN", href: "/areas-we-serve?category=ajman" },
      { name: "UMM AL QUWAIN", href: "/areas-we-serve?category=umm%20al%20quwain" },
      { name: "RAS AL KHAIMAH", href: "/areas-we-serve?category=ras%20al%20khaimah" },
      /*{ name: "ABU DHABI", href: "/areas-we-serve?category=abudhabi" },*/
      { name: "FUJAIRAH", href: "/areas-we-serve?category=fujairah" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Top thin line */}
      <div className="h-px w-full bg-[#8c6b1f]" />

      {/* Main Footer */}
      <div className="mx-auto max-w-[1920px] px-6 py-12 sm:px-8 lg:px-14 lg:py-20 2xl:px-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-16">
          {/* About */}
          <div className="max-w-[360px]">
            <h3 className="font-khand text-[16px] leading-none text-[#d4af37] sm:text-[28px]">
              About RadyInterior
            </h3>

            <p className="mt-6 max-w-[360px] font-roboto font-thin text-[12px] leading-[1.75] text-white/70 sm:text-[15px]">
              RadyInterior is a luxury interior design and fit-out company in
              the UAE, delivering premium villa, penthouse, and commercial
              space transformations. Our team specializes in bespoke design,
              turnkey fit-out, and high-end renovation across all emirates.
            </p>

            <div className="mt-14 flex items-center gap-5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-[20px] text-[#f0c95a] transition duration-300 hover:scale-110 hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-khand font-semibold text-[16px] leading-none text-[#d4af37] sm:text-[20px]">
              Contact Information
            </h3>

            <div className="mt-12 space-y-10 font-roboto font-thin text-[12px] leading-[1.7] text-white/70 sm:text-[15px]">
              <p>
                Address: The Binary Tower
                <br />
                Business Bay - Dubai
              </p>

              <p>Email: info@radyinterior.ae</p>

              <p>Phone: +971 50 818 1824</p>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-khand font-semibold text-[16px] leading-none text-[#d4af37] sm:text-[20px]">
              Important Links
            </h3>

            <div className="mt-6 flex flex-col gap-2">
              {importantLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="w-fit font-roboto font-thin text-[15px] text-white/70 transition duration-300 hover:text-[#d4af37]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Service Locations */}
          <div>
            <h3 className="font-khand font-semibold text-[16px] leading-none text-[#d4af37] sm:text-[20px]">
              Service Locations
            </h3>

            <div className="mt-6 flex flex-col gap-2">
              {serviceLocations.map((location) => (
                <Link
                  key={location.name}
                  href={location.href}
                  className="w-fit font-roboto font-thin text-[15px] text-white/70 transition duration-300 hover:text-[#d4af37]"
                >
                  {location.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative dashed line */}
      <div className="overflow-hidden">
        <div
          className="h-5 w-full bg-repeat-x"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, #8c6b1f 0, #8c6b1f 1px, transparent 1px, transparent 14px)",
            backgroundSize: "10px 100%",
          }}
        />
      </div>

      {/* Bottom Footer */}
      <div className="mx-auto max-w-[1920px] px-6 py-10 sm:px-8 lg:px-14 lg:py-14 2xl:px-20">
        <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <Image
              src="/images/logo-y.png"
              alt="Rady Interior"
              width={220}
              height={120}
              className="h-auto w-[60px] sm:w-[100px] lg:w-[130px]"
            />
          </div>

          {/* Copyright + policy */}
          <div className="xl:text-right">
            <p className="font-roboto font-thin text-[12px] leading-relaxed text-white/70 sm:text-[15px]">
              © 2026 Rady Interior, All Rights Reserved
            </p>

            <div className="mt-1 flex flex-wrap gap-x-3 gap-y-2 xl:justify-end">
              <Link
                href="/privacy-policy"
                className="font-roboto font-thin text-[12px] text-white/70 transition hover:text-[#d4af37] sm:text-[15px]"
              >
                Privacy Policy
              </Link>
              <span className="text-white/40">|</span>
              <Link
                href="/terms-and-conditions"
                className="font-roboto font-thin text-[12px] text-white/70 transition hover:text-[#d4af37] sm:text-[15px]"
              >
                Terms & Conditions
              </Link>
              <span className="text-white/40">|</span>
              <Link
                href="/sitemap"
                className="font-roboto font-thin text-[12px] text-white/70 transition hover:text-[#d4af37] sm:text-[15px]"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}