"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  "All",
  "Apartments",
  "Villas",
  "Townhouses",
  "Offices",
  "Restaurants",
  "Retail",
  "Prayer Rooms",
  "Majlis",
  "Kitchens",
];
const projects = [
  {
    title: "Palm Jumeirah Villa",
    subtitle: "Villa Interior Design",
    category: "Villas",
    image: "/images/palm-jumeirah-villa.webp",
    href: "/palm-jumeirah-villa",
  },
  {
    title: "Emirates Hills Villa",
    subtitle: "Luxury Villa Interior",
    category: "Villas",
    image: "/images/emirates-hills-villa.webp",
    href: "/emirates-hills-villa",
  },
  {
    title: "Jumeirah Bay Island Mansion",
    subtitle: "Mansion Interior Design",
    category: "Villas",
    image: "/images/jumeirah-bay-island-mansion.webp",
    href: "/jumeirah-bay-island-mansion",
  },
  {
    title: "District One MBR Villa",
    subtitle: "Villa Interior Fit-Out",
    category: "Villas",
    image: "/images/district-one-mbr-villa.webp",
    href: "/district-one-mbr-villa",
  },
  {
    title: "Dubai Hills Estate Villa Interior",
    subtitle: "Villa Interior Design",
    category: "Villas",
    image: "/images/dubai-hills-estate-villa-interior.webp",
    href: "/dubai-hills-estate-villa-interior",
  },
  {
    title: "Al Barari Villa",
    subtitle: "Luxury Villa Interior",
    category: "Villas",
    image: "/images/al-barari-villa.jpg",
    href: "/al-barari-villa",
  },
  {
    title: "Jumeirah Golf Estates Villa",
    subtitle: "Villa Interior Design",
    category: "Villas",
    image: "/images/jumeirah-golf-estates-villa.png",
    href: "/jumeirah-golf-estates-villa",
  },
  {
    title: "Downtown Dubai Apartment",
    subtitle: "Luxury Apartment Interior",
    category: "Apartments",
    image: "/images/downtown-dubai-apartment.webp",
    href: "/downtown-dubai-apartment",
  },
  {
    title: "Dubai Marina Office Fitout",
    subtitle: "Office Interior Design",
    category: "Offices",
    image: "/images/dubai-marina-office-fitout.webp",
    href: "/dubai-marina-office-fitout",
  },
  {
    title: "Bluewaters Island Retail",
    subtitle: "Retail Interior Fit-Out",
    category: "Retail",
    image: "/images/bluewaters-island-retail.webp",
    href: "/bluewaters-island-retail",
  },
  {
    title: "Emaar Beachfront Palm View Apartment",
    subtitle: "Apartment Interior Design",
    category: "Apartments",
    image: "/images/emaar-beachfront-palm-view-apartment.webp",
    href: "/emaar-beachfront-palm-view-apartment",
  },
  {
    title: "Al Zahia Villa Interior",
    subtitle: "Villa Interior Design",
    category: "Villas",
    image: "/images/al-zahia-villa-interior.webp",
    href: "/al-zahia-villa-interior",
  },
  {
    title: "Aljada Sharjah Office Interior",
    subtitle: "Office Fit-Out",
    category: "Offices",
    image: "/images/aljada-sharjah-office-interior.jpg",
    href: "/aljada-sharjah-office-interior",
  },
  {
    title: "Maryam Island Apartment Fit-Out",
    subtitle: "Apartment Interior",
    category: "Apartments",
    image: "/images/maryam-island-apartment-fit-out.webp",
    href: "/maryam-island-apartment-fit-out",
  },
  {
    title: "Sharjah Sustainable City Villa",
    subtitle: "Villa Interior Design",
    category: "Villas",
    image: "/images/sharjah-sustainable-city-villa.png",
    href: "/sharjah-sustainable-city-villa",
  },
  {
    title: "Tilal City Villa Interior",
    subtitle: "Villa Interior Fit-Out",
    category: "Villas",
    image: "/images/tilal-city-villa-interior.webp",
    href: "/tilal-city-villa-interior",
  },
  {
    title: "Ras Al Khaimah Resort Restaurant",
    subtitle: "Restaurant Interior Design",
    category: "Restaurants",
    image: "/images/ras-al-khaimah-resort-restaurant.webp",
    href: "/ras-al-khaimah-resort-restaurant",
  },
  {
    title: "Royal Atlantis 2 Bedroom Apartment",
    subtitle: "Luxury Apartment Interior",
    category: "Apartments",
    image: "/images/royal-atlantis-2-bedroom-apartment.webp",
    href: "/royal-atlantis-2-bedroom-apartment",
  },
  {
    title: "Dubai South Apartment",
    subtitle: "Apartment Interior Fit-Out",
    category: "Apartments",
    image: "/images/dubai-south-apartment.webp",
    href: "/dubai-south-apartment",
  },
  {
    title: "Al Noaf Cafe Interior",
    subtitle: "Cafe Interior Design",
    category: "Restaurants",
    image: "/images/al-noaf-cafe-interior.jpg",
    href: "/al-noaf-cafe-interior",
  },
  {
    title: "Al Riqaibah Cafe",
    subtitle: "Cafe Interior Fit-Out",
    category: "Restaurants",
    image: "/images/al-riqaibah-cafe.webp",
    href: "/al-riqaibah-cafe",
  },
  {
    title: "Al Suyoh Majlis Interior",
    subtitle: "Majlis Interior Design",
    category: "Majlis",
    image: "/images/al-suyoh-majlis-interior.webp",
    href: "/al-suyoh-majlis-interior",
  },
  {
    title: "Al Tai Sharjah Kitchen Fit-Out",
    subtitle: "Kitchen Interior Design",
    category: "Kitchens",
    image: "/images/al-tai-sharjah-kitchen-fit-out.webp",
    href: "/al-tai-sharjah-kitchen-fit-out",
  },
  {
    title: "Al Qarayen Prayer Room",
    subtitle: "Prayer Room Interior",
    category: "Prayer Rooms",
    image: "/images/al-qarayen-prayer-room.webp",
    href: "/al-qarayen-prayer-room",
  },
];
const ProjectsGallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="bg-black pb-16">
      <div className="mx-auto max-w-[1250px] px-6 sm:px-10 lg:px-16">
        {/* Filter Bar */}
        <div className="border-y border-[#8c6b1f]/60 py-4">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-play transition duration-300 ${
                    isActive
                      ? "bg-[#1a1408] text-[#d4af37] border border-[#8c6b1f]"
                      : "text-white hover:text-[#d4af37]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredProjects.map((project, i) => (
            <div
              key={i}
              className="group mx-auto w-full max-w-[320px] bg-[#0d0a05] overflow-hidden transition duration-300 hover:-translate-y-1"
            >
              <div className="relative h-[180px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="bg-[#100b04] px-4 py-4 text-center border-t border-[#8c6b1f]/20">
                <h3 className="text-white text-[17px] font-play">
                  {project.title}
                </h3>
                <p className="text-white/50 text-xs mt-1">{project.subtitle}</p>
                <Link href={project.href}>
                  <button className="mt-3 w-full border border-[#8c6b1f]/60 text-[#d4af37] py-2 rounded-md text-sm transition duration-300 hover:bg-[#1a1408] hover:text-[#f0c95a]">
                    View Project →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallerySection;