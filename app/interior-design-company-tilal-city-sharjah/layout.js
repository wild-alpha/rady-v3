import "../globals.css";

export const metadata = {
  title: "Best Interior Design Company in Tilal City Sharjah - Rady Interiors",
  description:
    "Luxury interior design company in Tilal City Sharjah delivering villa interior design & turnkey fit-out solutions. Book your free consultation today.",
  keywords: [
    "interior design company Tilal City Sharjah",
    "interior design company in Tilal City Sharjah",
    "villa interior design Tilal City Sharjah",
    "luxury interior design Tilal City Sharjah",
    "modern interior design Tilal City Sharjah",
    "interior fit out company Tilal City Sharjah",
    "turnkey fit out Tilal City Sharjah",
    "residential interior design Tilal City Sharjah",
    "high-end villa interiors Sharjah",
    "modern villa interiors Tilal City Sharjah"
  ],
  metadataBase: new URL("https://radyinterior.ae/"),
  openGraph: {
    title: "Interior Design Projects Tilal City Sharjah | Rady Interiors",
    description:
      "Explore modern luxury interior design and villa fit-out projects in Tilal City Sharjah by Rady Interiors. Discover elegant residential living spaces.",
    url: "https://radyinterior.ae/interior-design-company-tilal-city-sharjah",
    siteName: "Rady Interiors",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tilal City Sharjah Interior Design Projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Projects Tilal City Sharjah | Rady Interiors",
    description:
      "Luxury villa interior design in Tilal City Sharjah by Rady Interiors.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/interior-design-company-tilal-city-sharjah",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Rady Interiors",
              url: "https://radyinterior.ae/",
              logo: {
                "@type": "ImageObject",
                url: "https://radyinterior.ae/logo.png",
              },
              sameAs: [
                "https://www.instagram.com/radyinterior",
                "https://www.facebook.com/radyinterior",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+971 58 807 5603",
                contactType: "Customer Service",
                areaServed: "AE",
                availableLanguage: ["English", "Arabic"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Tilal City Sharjah",
                addressLocality: "Sharjah",
                addressRegion: "Sharjah",
                postalCode: "00000",
                addressCountry: "AE",
              },
            }),
          }}
        />

        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Interior Design Company in Tilal City Sharjah",
              url: "https://radyinterior.ae//interior-design-company-tilal-city-sharjah",
              description:
                "Luxury interior design services in Tilal City Sharjah including modern villas and residential developments.",
            }),
          }}
        />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id":
                "https://radyinterior.ae/interior-design-company-tilal-city-sharjah",
              name: "Rady Interiors",
              image: "https://radyinterior.ae/og-image.jpg",
              url: "https://radyinterior.ae/interior-design-company-tilal-city-sharjah",
              telephone: "+971 58 807 5603",
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Tilal City Sharjah",
                addressLocality: "Sharjah",
                addressRegion: "Sharjah",
                postalCode: "00000",
                addressCountry: "AE",
              },
              areaServed: [
                "Tilal City Sharjah",
                "Sharjah Sustainable City",
                "Muwaileh",
                "University City Sharjah",
                "Al Rahmaniya",
              ],
              serviceOffered: [
                {
                  "@type": "Service",
                  name: "Villa Interior Design in Tilal City Sharjah",
                },
                {
                  "@type": "Service",
                  name: "Luxury Residential Interior Design",
                },
                {
                  "@type": "Service",
                  name: "Modern Villa Interior Design",
                },
                {
                  "@type": "Service",
                  name: "Turnkey Fit-Out Solutions",
                },
              ],
            }),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How long does a villa fit-out in Tilal City Sharjah take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Villa interior fit-outs typically take 6–14 weeks depending on design complexity and approvals.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide turnkey interior design services in Tilal City Sharjah?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Rady Interiors offers complete turnkey solutions including design, execution, approvals, and handover.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you design modern villas in Tilal City Sharjah?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, we specialize in modern luxury villas and residential interiors in Tilal City Sharjah.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Rady Interiors a trusted interior design company in Tilal City Sharjah?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Rady Interiors is a leading interior design company known for high-end villa interiors and modern residential projects.",
                  },
                },
              ],
            }),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}