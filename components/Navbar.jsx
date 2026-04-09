"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineChevronDown, HiOutlineChevronRight } from "react-icons/hi";

const navLinks = [
  {
    name: "ABOUT US",
    href: "/about",
    dropdown: [
      { name: "About Us", href: "/about" },
      { name: "Certification & Awards", href: "/certification-award" },
    ],
  },
  {
    name: "DESIGN SERVICES",
    href: "/",
    dropdown: [
      { name: "PALACE INTERIOR DESIGN", href: "/palace-interior-design" },
      { name: "VILLA INTERIOR DESIGN", href: "/villa-interior-design" },
      { name: "APARTMENT INTERIOR DESIGN", href: "/apartment-interior-design" },
      { name: "PENTHOUSE INTERIOR DESIGN", href: "/penthouse-interior-design" },
      { name: "RESTAURANT DESIGN", href: "/restaurant-design" },
      { name: "CAFE INTERIOR DESIGN", href: "/cafe-interior-design" },
      { name: "OFFICE INTERIOR DESIGN", href: "/office-interior-design" },
      { name: "BEAUTY SALON DESIGN", href: "/beauty-salon-design" },
      { name: "RETAIL INTERIOR DESIGN", href: "/retail-interior-design" },
      { name: "EXTERIOR DESIGN", href: "/exterior-design" },
      { name: "PUBLIC SPACE DESIGN", href: "/public-space-design" },
      { name: "GYM INTERIOR DESIGN", href: "/gym-interior-design" },
      { name: "PRAYER ROOM INTERIOR DESIGN", href: "/prayer-room-interior-design" },
      { name: "MAJLIS INTERIOR DESIGN", href: "/majlis-interior-design" },
      { name: "LIVING ROOM DESIGN", href: "/living-room-design" },
      { name: "BEDROOM DESIGN", href: "/bedroom-design" },
      { name: "DRESSING ROOM DESIGN", href: "/dressing-room-design" },
      { name: "KIDS ROOM DESIGN", href: "/kids-room-design" },
      { name: "SWIMMING POOL DESIGN", href: "/swimming-pool-design" },
      { name: "SAUNA AND HAMMAM DESIGN", href: "/sauna-and-hammam-design" },
      { name: "KITCHEN INTERIOR DESIGN", href: "/kitchen-interior-design" },
      { name: "BATHROOM DESIGN", href: "/bathroom-design" },
    ],
  },
  {
    name: "FIT OUT WORKS",
    href: "/fit-out-works",
    dropdown: [
      { name: "COMMERCIAL FIT-OUT", href: "/commercial-fit-out" },
      { name: "OFFICE FIT-OUT", href: "/office-fit-out" },
      { name: "RESTAURANT FIT-OUT", href: "/restaurant-fit-out" },
      { name: "RETAIL FIT-OUT", href: "/retail-fit-out" },
      { name: "CUSTOMIZED JOINERY", href: "/customized-joinery" },
      { name: "BESPOKE FURNITURE", href: "/bespoke-furniture" },
      { name: "TURNKEY SOLUTIONS", href: "/turnkey-solutions" },
    ],
  },
  {
    name: "RENOVATION",
    href: "/",
    dropdown: [
      { name: "VILLA RENOVATION", href: "/villa-renovation" },
      { name: "APARTMENT RENOVATION", href: "/apartment-renovation" },
      { name: "OFFICE RENOVATION", href: "/office-renovation" },
      { name: "KITCHEN RENOVATION", href: "/kitchen-renovation" },
      { name: "BATHROOM RENOVATION", href: "/bathroom-renovation" },
      { name: "VILLA CONTRACTING", href: "/villa-contracting" },
    ],
  },
  {
    name: "AREAS WE SERVE",
    href: "/areas-we-serve",
    dropdown: [
      { name: "DUBAI", href: "/areas-we-serve?category=dubai" },
      { name: "SHARJAH", href: "/areas-we-serve?category=sharjah" },
      { name: "AJMAN", href: "/areas-we-serve?category=ajman" },
      { name: "UMM AL QUWAIN", href: "/areas-we-serve?category=umm%20al%20quwain" },
      { name: "RAS AL KHAIMAH", href: "/areas-we-serve?category=ras%20al%20khaimah" },
      /*{ name: "ABU DHABI", href: "/areas-we-serve?category=abudhabi" },*/
      { name: "FUJAIRAH", href: "/areas-we-serve?category=fujairah" },
    ],
  },
  {
    name: "LANDSCAPE",
    href: "/",
    dropdown: [
      { name: "LANDSCAPE SERVICES", href: "/" },
      { name: "OUTDOOR KITCHENS", href: "/outdoor-kitchens" },
      { name: "BARBECUE (BBQ) AREAS", href: "/barbecue" },
      { name: "SWIMMING POOLS", href: "/swimming-pools" },
      { name: "DECKING", href: "/decking" },
      { name: "OUTDOOR PLANTERS", href: "/outdoor-planters" },
    ],
  },
  {
    name: "GALLERY",
    href: "/gallery",
    dropdown: [],
  },
  {
    name: "CONTACT US",
    href: "/contact",
    dropdown: [
      { name: "CONTACT US", href: "/contact" },
      { name: "BLOGS", href: "/blog" },
    ],
  },
];

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaPinterestP, href: "#", label: "Pinterest" },
];

export default function Navbar() {
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [showStickyNavbar, setShowStickyNavbar] = useState(false);

  const middleIndex = Math.ceil(navLinks.length / 2);
  const leftNavLinks = navLinks.slice(0, middleIndex);
  const rightNavLinks = navLinks.slice(middleIndex);

  const toggleMobileDropdown = (name) => {
    setOpenMobileDropdown((prev) => (prev === name ? null : name));
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 140 && currentScrollY > lastScrollY) {
        setShowStickyNavbar(true);
      } else if (currentScrollY < lastScrollY - 5 || currentScrollY <= 100) {
        setShowStickyNavbar(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderDesktopDropdown = (link) => (
    <div className="absolute left-0 top-full pt-4">
      <div className="inline-block bg-black/95 px-4 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-md">
        <div className="flex max-h-[70vh] min-w-[300px] max-w-[360px] flex-col gap-3 overflow-y-auto pr-2">
          {link.dropdown.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group/item flex items-center justify-between gap-5 whitespace-nowrap font-roboto text-[13px] uppercase text-white/90 transition hover:text-[#d4af37]"
            >
              <span>{item.name}</span>
              <HiOutlineChevronRight className="text-[16px] text-[#d4af37] opacity-0 transition group-hover/item:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDesktopNavItems = (links, align = "left") =>
    links.map((link, index) => (
      <div
        key={link.name}
        className="group relative flex min-w-0 items-center"
        onMouseEnter={() => setActiveDesktopDropdown(link.name)}
        onMouseLeave={() => setActiveDesktopDropdown(null)}
      >
        <Link
          href={link.href}
          className="relative inline-flex whitespace-nowrap px-3 pb-2 font-roboto text-[11px] font-medium tracking-[1.2px] text-white transition-colors duration-300 hover:text-[#d4af37] 2xl:px-5 2xl:text-[12px]"
        >
          <span>{link.name}</span>
          <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#d4af37] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
        </Link>

        {index !== links.length - 1 && (
          <span className="h-9 w-px shrink-0 bg-white/20" />
        )}

        {link.dropdown?.length > 0 &&
          activeDesktopDropdown === link.name &&
          renderDesktopDropdown(link)}
      </div>
    ));

  const renderDesktopNav = (isSticky = false) => (
    <div
      className={`hidden xl:block ${
        isSticky ? "bg-black shadow-[0_10px_30px_rgba(0,0,0,0.35)]" : ""
      }`}
    >
      {!isSticky && (
        <>
          <div className="px-[72px] py-2 2xl:px-20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 2xl:gap-10">
                <a
                  href="mailto:info@radyinterior.ae"
                  className="font-roboto text-[16px] text-white/95 transition hover:text-[#d4af37]"
                >
                  info@radyinterior.ae
                </a>

                <a
                  href="tel:+971508181824"
                  className="font-roboto text-[16px] text-white/95 transition hover:text-[#d4af37]"
                >
                  +971 50 818 1824
                </a>

                <button
                  aria-label="Search"
                  className="text-[24px] text-white transition hover:text-[#d4af37]"
                >
                  <IoSearchOutline />
                </button>
              </div>

              <div className="flex items-center gap-4 2xl:gap-5">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="text-[22px] text-white transition hover:text-[#d4af37]"
                  >
                    <Icon />
                  </a>
                ))}

                <div className="ml-2 flex items-center gap-2">
                  <button className="overflow-hidden rounded-sm">
                    <Image
                      src="/images/flags/arabic.png"
                      alt="Arabic"
                      width={24}
                      height={16}
                      className="h-[16px] w-[24px] object-cover"
                    />
                  </button>

                  <button className="overflow-hidden rounded-sm">
                    <Image
                      src="/images/flags/english.png"
                      alt="English"
                      width={24}
                      height={16}
                      className="h-[16px] w-[24px] object-cover"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-[72px] 2xl:px-16">
            <div className="border-b border-white/60" />
          </div>
        </>
      )}

      <div
        className={`${
          isSticky
            ? "border-b border-[#d4af37] px-10 py-5 2xl:px-16"
            : "px-8 py-4 2xl:px-16"
        }`}
      >
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <nav className="flex min-w-0 items-center justify-start">
            {renderDesktopNavItems(leftNavLinks, "left")}
          </nav>

          <Link
            href="/"
            className="mx-4 flex shrink-0 justify-center 2xl:mx-6"
          >
            <Image
              src="/images/logo.png"
              alt="Rady Interior"
              width={220}
              height={120}
              priority
              className={`${
                isSticky
                  ? "h-auto w-[100px] 2xl:w-[120px]"
                  : "h-auto w-[110px] 2xl:w-[160px]"
              }`}
            />
          </Link>

          <div className="flex min-w-0 items-center justify-end">
            {renderDesktopNavItems(rightNavLinks, "right")}

            <button
              aria-label="Search"
              className="ml-4 shrink-0 text-[24px] text-white transition hover:text-[#d4af37] 2xl:ml-5"
            >
              <IoSearchOutline />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMobileNav = (isSticky = false) => (
    <div
      className={`w-full xl:hidden ${
        isSticky ? "bg-black/95 shadow-[0_10px_30px_rgba(0,0,0,0.35)]" : ""
      }`}
    >
      <div className="flex items-center justify-between border-b border-white/20 bg-black/90 px-4 py-4 backdrop-blur-md sm:px-6">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo-y.png"
            alt="Rady Interior"
            width={160}
            height={90}
            priority
            className="h-auto w-[110px] sm:w-[130px]"
          />
        </Link>

        <div className="flex items-center gap-3">
          <button className="overflow-hidden rounded-sm">
            <Image
              src="/images/flags/arabic.png"
              alt="Arabic"
              width={22}
              height={14}
              className="h-[14px] w-[22px] object-cover"
            />
          </button>

          <button className="overflow-hidden rounded-sm">
            <Image
              src="/images/flags/english.png"
              alt="English"
              width={22}
              height={14}
              className="h-[14px] w-[22px] object-cover"
            />
          </button>

          <button
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center"
          >
            <div className="relative flex h-5 w-6 flex-col justify-between">
              <span
                className={`block h-[2px] w-full bg-white transition ${
                  mobileMenuOpen ? "translate-y-[9px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-full bg-white transition ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-full bg-white transition ${
                  mobileMenuOpen ? "-translate-y-[9px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden bg-black/95 backdrop-blur-md transition-all duration-300 ${
          mobileMenuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 sm:px-6">
          <div className="mb-4 flex flex-col gap-3 border-b border-white/10 pb-4">
            <a
              href="mailto:info@radyinterior.ae"
              className="font-roboto text-[15px] text-white/90 transition hover:text-[#d4af37]"
            >
              info@radyinterior.ae
            </a>

            <a
              href="tel:+971508181824"
              className="font-roboto text-[15px] text-white/90 transition hover:text-[#d4af37]"
            >
              +971 50 818 1824
            </a>
          </div>

          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-white/10">
                <div className="flex items-center justify-between py-4">
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-roboto text-[15px] font-medium tracking-[1.5px] text-white transition hover:text-[#d4af37]"
                  >
                    {link.name}
                  </Link>

                  {link.dropdown?.length > 0 && (
                    <button
                      aria-label={`Toggle ${link.name} dropdown`}
                      onClick={() => toggleMobileDropdown(link.name)}
                      className="p-1 text-white transition hover:text-[#d4af37]"
                    >
                      <HiOutlineChevronDown
                        className={`text-[20px] transition-transform ${
                          openMobileDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {link.dropdown?.length > 0 &&
                  openMobileDropdown === link.name && (
                    <div className="pb-4 pl-4">
                      <div className="flex flex-col gap-3">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="font-roboto text-[15px] text-white/75 transition hover:text-[#d4af37]"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4 pt-5">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-[20px] text-white transition hover:text-[#d4af37]"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header className="absolute left-0 top-0 z-50 w-full text-white">
        <div className="mx-auto w-full max-w-[1920px]">
          {renderDesktopNav(false)}
          {renderMobileNav(false)}
        </div>
      </header>

      <div
        className={`fixed left-0 top-0 z-[60] hidden w-full transition-all duration-500 ease-out xl:block ${
          showStickyNavbar
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        }`}
      >
        <div className="mx-auto w-full max-w-[1920px]">
          {renderDesktopNav(true)}
        </div>
      </div>

      <div
        className={`fixed left-0 top-0 z-[60] w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] xl:hidden ${
          showStickyNavbar
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        }`}
      >
        <div className="mx-auto w-full max-w-[1920px]">
          {renderMobileNav(true)}
        </div>
      </div>
    </>
  );
}