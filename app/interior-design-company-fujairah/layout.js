import "../globals.css";

export const metadata = {
  title: "Best Interior Design Company in Fujairah | Rady Interiors",
  description:
    "Luxury interior design company in Fujairah delivering villa interior design & turnkey fit-out solutions. Book your free consultation today.",
  keywords: [
    "interior design company Fujairah",
    "villa interior design Fujairah",
    "luxury villa interior Fujairah",
    "interior fit out company Fujairah",
    "modern interior design Fujairah",
    "turnkey fit out Fujairah",
    "residential interior design Fujairah",
    "high end interior design Fujairah",
  ],
  metadataBase: new URL("https://radyinterior.ae/"),
  alternates: {
    canonical: "/interior-design-company-fujairah",
  },
  openGraph: {
    title: "Interior Design Company in Fujairah | Rady Interiors",
    description:
      "Explore luxury villa interior design and fit-out services in Fujairah by Rady Interiors.",
    url: "https://radyinterior.ae/interior-design-company-fujairah",
    siteName: "Rady Interiors",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fujairah Interior Design Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Company in Fujairah | Rady Interiors",
    description:
      "Luxury villa interior design and fit-out services in Fujairah.",
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
                streetAddress: "Fujairah",
                addressLocality: "Fujairah",
                addressRegion: "Fujairah",
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
              name: "Interior Design Company in Fujairah",
              url: "https://radyinterior.ae/interior-design-company-fujairah",
              description:
                "Luxury villa interior design and fit-out services in Fujairah.",
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
              url: "https://radyinterior.ae/interior-design-company-fujairah",
              telephone: "+971 58 807 5603",
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Fujairah",
                addressLocality: "Fujairah",
                addressRegion: "Fujairah",
                addressCountry: "AE",
              },
              areaServed: [
                "Dibba Al Fujairah",
                "Al Faseel",
                "Al Hayl",
                "Sakamkam",
                "Fujairah Corniche",
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
                  name: "How long does a villa fit-out take in Fujairah?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Villa interior fit-outs in Fujairah typically take 6–14 weeks depending on design complexity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer interior design services in Fujairah?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, we provide luxury villa interior design and turnkey fit-out services in Fujairah.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you design modern luxury villas in Fujairah?",
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