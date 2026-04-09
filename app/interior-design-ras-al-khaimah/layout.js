import "../globals.css";

export const metadata = {
  title: "Best Interior Design Company in Ras Al Khaimah | Rady Interiors",
  description:
    "Luxury interior design company in Ras Al Khaimah delivering villa interior design & turnkey fit-out solutions. Book your free consultation today.",
  keywords: [
    "interior design company Ras Al Khaimah",
    "villa interior design Ras Al Khaimah",
    "luxury villa interior RAK",
    "interior fit out company Ras Al Khaimah",
    "modern interior design RAK",
    "turnkey fit out Ras Al Khaimah",
    "residential interior design RAK",
    "high end interior design Ras Al Khaimah",
  ],
  metadataBase: new URL("https://radyinterior.ae/"),
  alternates: {
    canonical: "/interior-design-ras-al-khaimah",
  },
  openGraph: {
    title: "Interior Design Company in Ras Al Khaimah | Rady Interiors",
    description:
      "Explore luxury villa interior design and fit-out services in Ras Al Khaimah by Rady Interiors.",
    url: "https://radyinterior.ae/interior-design-ras-al-khaimah",
    siteName: "Rady Interiors",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ras Al Khaimah Interior Design Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Company in Ras Al Khaimah | Rady Interiors",
    description:
      "Luxury villa interior design and fit-out services in Ras Al Khaimah.",
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
                streetAddress: "Ras Al Khaimah",
                addressLocality: "Ras Al Khaimah",
                addressRegion: "Ras Al Khaimah",
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
              name: "Interior Design Company in Ras Al Khaimah",
              url: "https://radyinterior.ae/interior-design-ras-al-khaimah",
              description:
                "Luxury villa interior design and fit-out services in Ras Al Khaimah.",
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
              url: "https://radyinterior.ae/interior-design-ras-al-khaimah",
              telephone: "+971 58 807 5603",
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ras Al Khaimah",
                addressLocality: "Ras Al Khaimah",
                addressRegion: "Ras Al Khaimah",
                addressCountry: "AE",
              },
              areaServed: [
                "Al Nakheel",
                "Al Hamra",
                "Al Marjan Island",
                "Al Dhait",
                "Ras Al Khaimah Corniche",
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
                  name: "How long does a villa fit-out take in Ras Al Khaimah?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Villa interior fit-outs in Ras Al Khaimah typically take 6–14 weeks depending on design complexity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer interior design services in Ras Al Khaimah?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, we provide luxury villa interior design and turnkey fit-out services in Ras Al Khaimah.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you design modern luxury villas in Ras Al Khaimah?",
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