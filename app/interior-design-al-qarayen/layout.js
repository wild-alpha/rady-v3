import "../globals.css";

export const metadata = {
  title: "Best Interior Design Company in Al Qarayen, Sharjah | Rady Interiors",
  description:
    "Luxury interior design company in Al Qarayen, Sharjah delivering villa interior design & turnkey fit-out solutions. Book your free consultation today.",
  keywords: [
    "interior design company Al Qarayen Sharjah",
    "villa interior design Al Qarayen",
    "luxury villa interior Al Qarayen Sharjah",
    "interior fit out company Al Qarayen",
    "modern interior design Al Qarayen Sharjah",
    "turnkey fit out Al Qarayen Sharjah",
    "residential interior design Al Qarayen",
    "high end interior design Sharjah Al Qarayen",
  ],
  metadataBase: new URL("https://radyinterior.ae/"),
  alternates: {
    canonical: "/interior-design-company-al-qarayen",
  },
  openGraph: {
    title: "Interior Design Company in Al Qarayen, Sharjah | Rady Interiors",
    description:
      "Explore luxury villa interior design and fit-out services in Al Qarayen, Sharjah by Rady Interiors.",
    url: "https://radyinterior.ae/interior-design-company-al-qarayen",
    siteName: "Rady Interiors",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Al Qarayen Sharjah Interior Design Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Company in Al Qarayen, Sharjah | Rady Interiors",
    description:
      "Luxury villa interior design and fit-out services in Al Qarayen, Sharjah.",
    images: ["/og-image.jpg"],
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
              logo: "https://radyinterior.ae/logo.png",
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
                streetAddress: "Al Qarayen",
                addressLocality: "Sharjah",
                addressRegion: "Sharjah",
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
              name: "Interior Design Company in Al Qarayen, Sharjah",
              url: "https://radyinterior.ae/interior-design-company-al-qarayen",
              description:
                "Luxury villa interior design and fit-out services in Al Qarayen, Sharjah.",
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
              name: "Rady Interiors",
              image: "https://radyinterior.ae/og-image.jpg",
              url: "https://radyinterior.ae/interior-design-company-al-qarayen",
              telephone: "+971 58 807 5603",
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Al Qarayen",
                addressLocality: "Sharjah",
                addressRegion: "Sharjah",
                addressCountry: "AE",
              },
              areaServed: [
                "Al Qarayen",
                "Al Suyoh",
                "Al Rahmaniya",
                "Tilal City",
                "Sharjah Suburbs",
              ],
              serviceOffered: [
                "Villa Interior Design",
                "Luxury Interior Design",
                "Residential Interior Design",
                "Turnkey Fit-Out Solutions",
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
                  name: "How long does a villa fit-out take in Al Qarayen, Sharjah?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Villa interior fit-outs typically take 6–14 weeks depending on design complexity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer interior design services in Al Qarayen?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, we provide luxury villa interior design and turnkey fit-out services in Al Qarayen, Sharjah.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you design modern luxury villas in Al Qarayen?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, we specialize in modern and luxury villa interiors tailored to client lifestyles.",
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