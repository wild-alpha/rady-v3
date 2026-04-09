import "../globals.css";

export const metadata = {
  title: "Best Interior Design Company in Al Suyoh, Sharjah | Rady Interiors",
  description:
    "Luxury interior design company in Al Suyoh, Sharjah delivering villa interior design & turnkey fit-out solutions. Book your free consultation today.",
  keywords: [
    "interior design company Al Suyoh Sharjah",
    "villa interior design Al Suyoh",
    "luxury villa interior Al Suyoh Sharjah",
    "interior fit out company Al Suyoh",
    "modern interior design Al Suyoh Sharjah",
    "turnkey fit out Al Suyoh Sharjah",
    "residential interior design Al Suyoh",
    "high end interior design Sharjah Al Suyoh",
  ],
  metadataBase: new URL("https://radyinterior.ae/"),
  alternates: {
    canonical: "/interior-design-company-al-suyoh",
  },
  openGraph: {
    title: "Interior Design Company in Al Suyoh, Sharjah | Rady Interiors",
    description:
      "Explore luxury villa interior design and fit-out services in Al Suyoh, Sharjah by Rady Interiors.",
    url: "https://radyinterior.ae/interior-design-company-al-suyoh",
    siteName: "Rady Interiors",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Al Suyoh Sharjah Interior Design Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Company in Al Suyoh, Sharjah | Rady Interiors",
    description:
      "Luxury villa interior design and fit-out services in Al Suyoh, Sharjah.",
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
                streetAddress: "Al Suyoh",
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
              name: "Interior Design Company in Al Suyoh, Sharjah",
              url: "https://radyinterior.ae/interior-design-company-al-suyoh",
              description:
                "Luxury villa interior design and fit-out services in Al Suyoh, Sharjah.",
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
              url: "https://radyinterior.ae/interior-design-company-al-suyoh",
              telephone: "+971 58 807 5603",
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Al Suyoh",
                addressLocality: "Sharjah",
                addressRegion: "Sharjah",
                addressCountry: "AE",
              },
              areaServed: [
                "Al Suyoh",
                "Al Rahmaniya",
                "Tilal City",
                "Al Khawaneej Border Area",
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
                  name: "How long does a villa fit-out take in Al Suyoh, Sharjah?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Villa interior fit-outs typically take 6–14 weeks depending on design complexity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer interior design services in Al Suyoh?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, we provide luxury villa interior design and turnkey fit-out services in Al Suyoh, Sharjah.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you design modern luxury villas in Al Suyoh?",
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