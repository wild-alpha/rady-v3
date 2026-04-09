"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  "All",
  "Dubai",
  "Sharjah",
  "Ajman",
  "Umm Al Quwain",
  "Ras Al Khaimah",
  "Fujairah",
];

const areas = [
  {
    title: "Palm Jumeirah",
    subtitle: "Interior Design Company in Palm Jumeirah",
    category: "Dubai",
    image: "/images/interior-design-company-palm-jumeirah.webp",
    href: "/interior-design-company-palm-jumeirah",
  },
  {
    title: "Emirates Hills",
    subtitle: "Interior Design Company in Emirates Hills",
    category: "Dubai",
    image: "/images/interior-design-company-emirates-hills.webp",
    href: "/interior-design-company-emirates-hills",
  },
  {
    title: "Jumeirah Bay Island",
    subtitle: "Interior Design in Jumeirah Bay Island",
    category: "Dubai",
    image: "/images/interior-design-jumeirah-bay-island.webp",
    href: "/interior-design-jumeirah-bay-island",
  },
  {
    title: "District One Dubai",
    subtitle: "Interior Design in District One Dubai",
    category: "Dubai",
    image: "/images/interior-design-district-one-dubai.webp",
    href: "/interior-design-district-one-dubai",
  },
  {
    title: "Dubai Hills Estate",
    subtitle: "Interior Design in Dubai Hills Estate",
    category: "Dubai",
    image: "/images/interior-design-dubai-hills-estate.webp",
    href: "/interior-design-dubai-hills-estate",
  },
  {
    title: "Al Barari",
    subtitle: "Interior Design Company in Al Barari",
    category: "Dubai",
    image: "/images/interior-design-company-al-barari.webp",
    href: "/interior-design-company-al-barari",
  },
  {
    title: "Jumeirah Golf Estates",
    subtitle: "Interior Design in Jumeirah Golf Estates",
    category: "Dubai",
    image: "/images/interior-design-jumeirah-golf-estates.webp",
    href: "/interior-design-jumeirah-golf-estates",
  },
  {
    title: "Downtown Dubai",
    subtitle: "Interior Design in Downtown Dubai",
    category: "Dubai",
    image: "/images/interior-design-downtown-dubai.webp",
    href: "/interior-design-downtown-dubai",
  },
  {
    title: "Dubai Marina",
    subtitle: "Interior Design in Dubai Marina",
    category: "Dubai",
    image: "/images/interior-design-dubai-marina.webp",
    href: "/interior-design-dubai-marina",
  },
  {
    title: "Bluewaters Island",
    subtitle: "Interior Design in Bluewaters Island",
    category: "Dubai",
    image: "/images/interior-design-bluewaters-island.webp",
    href: "/interior-design-bluewaters-island",
  },
  {
    title: "Emaar Beachfront",
    subtitle: "Interior Design in Emaar Beachfront",
    category: "Dubai",
    image: "/images/interior-design-emaar-beachfront.webp",
    href: "/interior-design-emaar-beachfront",
  },
  {
    title: "Aljada Sharjah",
    subtitle: "Interior Design in Aljada Sharjah",
    category: "Sharjah",
    image: "/images/interior-design-aljada-sharjah.webp",
    href: "/interior-design-aljada-sharjah",
  },
  {
    title: "Al Zahia",
    subtitle: "Interior Design Company in Al Zahia",
    category: "Sharjah",
    image: "/images/interior-design-company-al-zahia.webp",
    href: "/interior-design-company-al-zahia",
  },
  {
    title: "Maryam Island",
    subtitle: "Interior Design in Maryam Island",
    category: "Sharjah",
    image: "/images/interior-design-maryam-island.webp",
    href: "/interior-design-maryam-island",
  },
  {
    title: "Sharjah Sustainable City",
    subtitle: "Interior Design in Sharjah Sustainable City",
    category: "Sharjah",
    image: "/images/interior-design-sharjah-sustainable-city.webp",
    href: "/interior-design-sharjah-sustainable-city",
  },
  {
    title: "Tilal City Sharjah",
    subtitle: "Interior Design in Tilal City Sharjah",
    category: "Sharjah",
    image: "/images/interior-design-tilal-city-sharjah.webp",
    href: "/interior-design-tilal-city-sharjah",
  },
  {
    title: "Al Rahmaniya",
    subtitle: "Interior Design in Al Rahmaniya",
    category: "Sharjah",
    image: "/images/interior-design-al-rahmaniya.webp",
    href: "/interior-design-al-rahmaniya",
  },
  {
    title: "Al Tai",
    subtitle: "Interior Design Company in Al Tai",
    category: "Sharjah",
    image: "/images/interior-design-company-al-tai.webp",
    href: "/interior-design-company-al-tai",
  },
  {
    title: "Al Suyoh",
    subtitle: "Interior Design Company in Al Suyoh",
    category: "Sharjah",
    image: "/images/interior-design-company-al-suyoh.webp",
    href: "/interior-design-company-al-suyoh",
  },
  {
    title: "Barashi",
    subtitle: "Interior Design Company in Barashi",
    category: "Sharjah",
    image: "/images/interior-design-company-barashi.webp",
    href: "/interior-design-company-barashi",
  },
  {
    title: "Al Qarayen",
    subtitle: "Interior Design in Al Qarayen",
    category: "Sharjah",
    image: "/images/interior-design-al-qarayen.webp",
    href: "/interior-design-al-qarayen",
  },
  {
    title: "Ajman",
    subtitle: "Interior Design Company in Ajman",
    category: "Ajman",
    image: "/images/interior-design-company-ajman.webp",
    href: "/interior-design-company-ajman",
  },
  {
    title: "Umm Al Quwain",
    subtitle: "Interior Design in Umm Al Quwain",
    category: "Umm Al Quwain",
    image: "/images/interior-design-umm-al-quwain.webp",
    href: "/interior-design-umm-al-quwain",
  },
  {
    title: "Ras Al Khaimah",
    subtitle: "Interior Design in Ras Al Khaimah",
    category: "Ras Al Khaimah",
    image: "/images/interior-design-ras-al-khaimah.webp",
    href: "/interior-design-ras-al-khaimah",
  },
  {
    title: "Fujairah",
    subtitle: "Interior Design Company in Fujairah",
    category: "Fujairah",
    image: "/images/interior-design-company-fujairah.webp",
    href: "/interior-design-company-fujairah",
  },
];

const normalizeCategory = (value) => {
  if (!value) return "All";

  const decodedValue = decodeURIComponent(value).trim().toLowerCase();

  const matchedCategory = categories.find(
    (cat) => cat.toLowerCase() === decodedValue
  );

  return matchedCategory || "All";
};

const AreasGallerySection = ({ initialCategory = "All" }) => {
  const [activeCategory, setActiveCategory] = useState(
    normalizeCategory(initialCategory)
  );

  useEffect(() => {
    setActiveCategory(normalizeCategory(initialCategory));
  }, [initialCategory]);

  const filteredAreas = useMemo(() => {
    if (activeCategory === "All") return areas;
    return areas.filter((area) => area.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="bg-black pb-16">
      <div className="mx-auto max-w-[1250px] px-6 sm:px-10 lg:px-16">
        <div className="border-y border-[#8c6b1f]/60 py-4">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-play transition duration-300 ${
                    isActive
                      ? "border border-[#8c6b1f] bg-[#1a1408] text-[#d4af37]"
                      : "text-white hover:text-[#d4af37]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredAreas.map((area, i) => (
            <div
              key={i}
              className="group mx-auto w-full max-w-[320px] overflow-hidden bg-[#0d0a05] transition duration-300 hover:-translate-y-1"
            >
              <div className="relative h-[180px] overflow-hidden">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="border-t border-[#8c6b1f]/20 bg-[#100b04] px-4 py-4 text-center">
                <h3 className="font-play text-[17px] text-white">
                  {area.title}
                </h3>

                <p className="mt-1 text-xs text-white/50">{area.subtitle}</p>

                <Link href={area.href}>
                  <button className="mt-3 w-full rounded-md border border-[#8c6b1f]/60 py-2 text-sm text-[#d4af37] transition duration-300 hover:bg-[#1a1408] hover:text-[#f0c95a]">
                    View Area →
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

export default AreasGallerySection;