import "../globals.css";

export const metadata = {
  title: "Best Interior Design Company in Al Tai, Sharjah | Rady Interiors",
  description:
    "Luxury interior design company in Al Tai, Sharjah delivering villa interior design & turnkey fit-out solutions. Book your free consultation today.",
  keywords: [
    "interior design company Al Tai Sharjah",
    "villa interior design Al Tai",
    "luxury villa interior Al Tai Sharjah",
    "interior fit out company Al Tai",
    "modern interior design Al Tai Sharjah",
    "turnkey fit out Al Tai Sharjah",
    "residential interior design Al Tai",
    "high end interior design Sharjah Al Tai",
  ],
  metadataBase: new URL("https://radyinterior.ae/"),
  alternates: {
    canonical: "/interior-design-company-al-tai",
  },
  openGraph: {
    title: "Interior Design Company in Al Tai, Sharjah | Rady Interiors",
    description:
      "Explore luxury villa interior design and fit-out services in Al Tai, Sharjah by Rady Interiors.",
    url: "https://radyinterior.ae/interior-design-company-al-tai",
    siteName: "Rady Interiors",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Al Tai Sharjah Interior Design Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Company in Al Tai, Sharjah | Rady Interiors",
    description:
      "Luxury villa interior design and fit-out services in Al Tai, Sharjah.",
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
                streetAddress: "Al Tai",
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
              name: "Interior Design Company in Al Tai, Sharjah",
              url: "https://radyinterior.ae/interior-design-company-al-tai",
              description:
                "Luxury villa interior design and fit-out services in Al Tai, Sharjah.",
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
              url: "https://radyinterior.ae/interior-design-company-al-tai",
              telephone: "+971 58 807 5603",
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Al Tai",
                addressLocality: "Sharjah",
                addressRegion: "Sharjah",
                addressCountry: "AE",
              },
              areaServed: [
                "Al Tai",
                "Tilal City",
                "Muwaileh",
                "University City Sharjah",
                "Al Rahmaniya",
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
                  name: "How long does a villa fit-out take in Al Tai, Sharjah?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Villa interior fit-outs typically take 6–14 weeks depending on design complexity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer interior design services in Al Tai?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, we provide luxury villa interior design and turnkey fit-out services in Al Tai, Sharjah.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you design modern luxury villas in Al Tai?",
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