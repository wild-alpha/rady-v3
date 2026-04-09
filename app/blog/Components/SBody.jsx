import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "Modern Office Furniture Solutions in UAE",
    image: "/images/blog/post-1.jpg",
    date: "21",
    href: "/blog/modern-office-furniture",
  },
  {
    title: "The Ultimate Guide to Wall Paneling in 2026",
    image: "/images/blog/post-2.jpg",
    date: "21",
    href: "/blog/wall-paneling-guide",
  },
  {
    title: "Weather-Proof Outdoor Furniture in Dubai",
    image: "/images/blog/post-3.jpg",
    date: "21",
    href: "/blog/outdoor-furniture-dubai",
  },
  {
    title: "Elegant Villa Landscape Design",
    image: "/images/blog/post-4.jpg",
    date: "21",
    href: "/blog/villa-landscape-design",
  },
  {
    title: "Modern Office Reception Design Solutions",
    image: "/images/blog/post-5.jpg",
    date: "20",
    href: "/blog/reception-design",
  },
  {
    title: "Luxury Bedroom Interior Trends 2026",
    image: "/images/blog/post-6.jpg",
    date: "18",
    href: "/blog/bedroom-trends",
  },
  {
    title: "Commercial Renovation Services in Dubai",
    image: "/images/blog/post-7.jpg",
    date: "18",
    href: "/blog/commercial-renovation",
  },
  {
    title: "Transform Your Space with Epoxy Flooring",
    image: "/images/blog/post-8.jpg",
    date: "18",
    href: "/blog/epoxy-flooring",
  },
  {
    title: "Luxury Swimming Pool Design in Dubai",
    image: "/images/blog/post-9.jpg",
    date: "18",
    href: "/blog/swimming-pool-design",
  },
  {
    title: "Interior Project Management in Dubai",
    image: "/images/blog/post-10.jpg",
    date: "18",
    href: "/blog/project-management",
  },
];

const sidebarPosts = posts.slice(0, 3);

export default function VBody() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[2fr_1fr] lg:px-8">
        
        {/* LEFT - BLOG LIST */}
        <div className="space-y-14">
          {posts.map((post, index) => (
            <article key={index}>
              <div className="relative overflow-hidden bg-neutral-900">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Date Badge */}
                <div className="absolute left-3 top-3 bg-black/80 px-3 py-1 text-sm text-white">
                  {post.date}
                </div>
              </div>

              <div className="mt-5">
                <h2 className="text-xl font-semibold text-[#d4a63d] sm:text-2xl">
                  {post.title}
                </h2>

                <Link
                  href={post.href}
                  className="mt-3 inline-block text-sm text-[#d4a63d] hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}

          {/* Pagination */}
          <div className="flex items-center justify-center gap-4 pt-10 text-sm">
            <span className="text-white/60">←</span>
            <span className="text-[#d4a63d]">1</span>
            <span className="text-white/60">2</span>
            <span className="text-white/60">3</span>
            <span className="text-white/60">→</span>
          </div>
        </div>

        {/* RIGHT - SIDEBAR */}
        <aside className="space-y-10">
          {/* Recent Posts */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#d4a63d]">
              Latest Posts
            </h3>

            <div className="space-y-4">
              {sidebarPosts.map((post, index) => (
                <Link
                  key={index}
                  href={post.href}
                  className="flex items-center gap-4"
                >
                  <div className="relative h-16 w-20 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p className="text-sm text-white/80">{post.title}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="border border-[#d4a63d]/20 p-6 text-center">
            <h4 className="text-lg font-semibold text-[#d4a63d]">
              Need Interior Design Help?
            </h4>

            <Link
              href="/contact"
              className="mt-4 inline-block border border-[#d4a63d] px-6 py-2 text-xs uppercase tracking-wider text-[#d4a63d] hover:bg-[#d4a63d] hover:text-black"
            >
              Contact Us
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}