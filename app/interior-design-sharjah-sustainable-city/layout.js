import "../globals.css";

export const metadata = {
  title: "Best Interior Design Company in Sharjah Sustainable City - Rady Interiors",
  description:
    "Eco-luxury interior design company in Sharjah Sustainable City delivering villa interior design & turnkey fit-out solutions. Book your free consultation today.",
  keywords: [
    "interior design company Sharjah Sustainable City",
    "interior design company in Sharjah Sustainable City",
    "villa interior design Sharjah Sustainable City",
    "eco friendly interior design Sharjah",
    "sustainable interior design Sharjah",
    "luxury villa interior Sharjah Sustainable City",
    "interior fit out company Sharjah Sustainable City",
    "turnkey fit out Sharjah Sustainable City",
    "modern sustainable interiors Sharjah",
    "high-end eco interior design Sharjah"
  ],
  metadataBase: new URL("https://radyinterior.ae/"),
  openGraph: {
    title: "Interior Design Projects Sharjah Sustainable City | Rady Interiors",
    description:
      "Explore eco-luxury interior design and villa fit-out projects in Sharjah Sustainable City by Rady Interiors. Discover sustainable modern living spaces.",
    url: "https://radyinterior.ae/interior-design-sharjah-sustainable-city",
    siteName: "Rady Interiors",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sharjah Sustainable City Interior Design Projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Projects Sharjah Sustainable City | Rady Interiors",
    description:
      "Eco-luxury villa interior design in Sharjah Sustainable City by Rady Interiors.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/interior-design-sharjah-sustainable-city",
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
                streetAddress: "Sharjah Sustainable City",
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
              name: "Interior Design Company in Sharjah Sustainable City",
              url: "https://radyinterior.ae/interior-design-sharjah-sustainable-city",
              description:
                "Eco-friendly interior design services in Sharjah Sustainable City including luxury villas and sustainable homes.",
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
                "https://radyinterior.ae/interior-design-company-sharjah-sustainable-city",
              name: "Rady Interiors",
              image: "https://radyinterior.ae/og-image.jpg",
              url: "https://radyinterior.ae/interior-design-company-sharjah-sustainable-city",
              telephone: "+971 58 807 5603",
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sharjah Sustainable City",
                addressLocality: "Sharjah",
                addressRegion: "Sharjah",
                postalCode: "00000",
                addressCountry: "AE",
              },
              areaServed: [
                "Sharjah Sustainable City",
                "Tilal City",
                "Muwaileh",
                "University City Sharjah",
                "Al Rahmaniya",
              ],
              serviceOffered: [
                {
                  "@type": "Service",
                  name: "Villa Interior Design in Sharjah Sustainable City",
                },
                {
                  "@type": "Service",
                  name: "Eco-Friendly Interior Design",
                },
                {
                  "@type": "Service",
                  name: "Sustainable Residential Interior Design",
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
                  name: "How long does a villa fit-out in Sharjah Sustainable City take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Villa interior fit-outs typically take 6–14 weeks depending on design complexity and sustainability features.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide eco-friendly interior design services in Sharjah Sustainable City?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Rady Interiors specializes in eco-friendly and sustainable interior design solutions tailored to energy-efficient living.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you design sustainable luxury villas?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, we design eco-luxury villas combining sustainability, modern aesthetics, and premium finishes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Rady Interiors a trusted interior design company in Sharjah Sustainable City?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Rady Interiors is a leading interior design company known for sustainable villa interiors and high-end eco-friendly projects.",
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