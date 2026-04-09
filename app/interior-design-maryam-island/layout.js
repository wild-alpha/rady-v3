import "../globals.css";

export const metadata = {
  title: "Best Interior Design Company in Maryam Island Sharjah - Rady Interiors",
  description:
    "Luxury interior design company in Maryam Island Sharjah delivering waterfront apartment & turnkey fit-out solutions. Book your free consultation today.",
  keywords: [
    "interior design company Maryam Island Sharjah",
    "interior design company in Maryam Island Sharjah",
    "apartment interior design Maryam Island Sharjah",
    "waterfront interior design Maryam Island Sharjah",
    "luxury interior design Maryam Island Sharjah",
    "interior fit out company Maryam Island Sharjah",
    "turnkey fit out Maryam Island Sharjah",
    "luxury interior design Sharjah waterfront",
    "modern interiors Maryam Island Sharjah",
    "high-end interior design Maryam Island Sharjah"
  ],
  metadataBase: new URL("https://radyinterior.ae/"),
  openGraph: {
    title: "Interior Design Projects Maryam Island Sharjah | Rady Interiors",
    description:
      "Explore modern luxury waterfront interior design and fit-out projects in Maryam Island Sharjah by Rady Interiors. Discover elegant apartments and coastal living interiors.",
    url: "https://radyinterior.ae/interior-design-maryam-island",
    siteName: "Rady Interiors",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maryam Island Sharjah Interior Design Projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Projects Maryam Island Sharjah | Rady Interiors",
    description:
      "Luxury waterfront apartment interior design in Maryam Island Sharjah by Rady Interiors.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/interior-design-maryam-island",
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
                streetAddress: "Maryam Island Sharjah",
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
              name: "Interior Design Company in Maryam Island Sharjah",
              url: "https://radyinterior.ae/interior-design-maryam-island",
              description:
                "Luxury waterfront interior design services in Maryam Island Sharjah including apartments and coastal residences.",
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
                "https://radyinterior.ae/interior-design-company-maryam-island-sharjah",
              name: "Rady Interiors",
              image: "https://radyinterior.ae/og-image.jpg",
              url: "https://radyinterior.ae/interior-design-company-maryam-island-sharjah",
              telephone: "+971 58 807 5603",
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Maryam Island Sharjah",
                addressLocality: "Sharjah",
                addressRegion: "Sharjah",
                postalCode: "00000",
                addressCountry: "AE",
              },
              areaServed: [
                "Maryam Island Sharjah",
                "Al Khan",
                "Al Majaz",
                "Al Qasba",
                "Al Taawun",
              ],
              serviceOffered: [
                {
                  "@type": "Service",
                  name: "Waterfront Apartment Interior Design in Maryam Island",
                },
                {
                  "@type": "Service",
                  name: "Luxury Apartment Interior Design in Maryam Island Sharjah",
                },
                {
                  "@type": "Service",
                  name: "Modern Residential Interior Design",
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
                  name: "How long does a waterfront apartment fit-out in Maryam Island take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Waterfront apartment fit-outs typically take 6–12 weeks depending on design complexity and approvals.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide turnkey interior design services in Maryam Island Sharjah?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Rady Interiors offers complete turnkey solutions including design, execution, approvals, and handover.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you design luxury waterfront apartments in Maryam Island?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, we specialize in modern luxury waterfront apartments and coastal interiors in Maryam Island Sharjah.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Rady Interiors a trusted interior design company in Maryam Island Sharjah?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Rady Interiors is a leading luxury interior design company in Maryam Island Sharjah known for premium waterfront projects.",
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