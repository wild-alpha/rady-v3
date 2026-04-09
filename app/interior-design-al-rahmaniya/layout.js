import "../globals.css";

export const metadata = {
  title: "Best Interior Design Company in Al Rahmaniya Sharjah - Rady Interiors",
  description:
    "Luxury interior design company in Al Rahmaniya Sharjah specializing in villa interior design, modern home interiors & turnkey fit-out solutions. Book your consultation today.",
  keywords: [
    "interior design company Al Rahmaniya Sharjah",
    "interior design company in Al Rahmaniya Sharjah",
    "villa interior design Al Rahmaniya",
    "luxury villa interior Al Rahmaniya Sharjah",
    "modern home interiors Al Rahmaniya",
    "interior fit out company Al Rahmaniya Sharjah",
    "turnkey fit out Al Rahmaniya",
    "residential interior design Sharjah",
    "high-end interior design Sharjah villas",
    "custom villa interiors Al Rahmaniya"
  ],
  metadataBase: new URL("https://radyinterior.ae/"),
  openGraph: {
    title: "Interior Design Projects in Al Rahmaniya Sharjah | Rady Interiors",
    description:
      "Explore luxury villa interior design and modern home fit-out projects in Al Rahmaniya Sharjah by Rady Interiors.",
    url: "https://radyinterior.ae/interior-design-al-rahmaniya",
    siteName: "Rady Interiors",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Al Rahmaniya Sharjah Interior Design Projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Projects in Al Rahmaniya Sharjah | Rady Interiors",
    description:
      "Luxury villa interior design in Al Rahmaniya Sharjah by Rady Interiors.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/interior-design-al-rahmaniya",
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
                streetAddress: "Al Rahmaniya",
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
              name: "Interior Design Company in Al Rahmaniya Sharjah",
              url: "https://radyinterior.ae/interior-design-al-rahmaniya",
              description:
                "Luxury villa interior design services in Al Rahmaniya Sharjah including modern homes and turnkey fit-out solutions.",
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
                "https://radyinterior.ae/interior-design-al-rahmaniya",
              name: "Rady Interiors",
              image: "https://radyinterior.ae/og-image.jpg",
              url: "https://radyinterior.ae/interior-design-al-rahmaniya",
              telephone: "+971 58 807 5603",
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Al Rahmaniya",
                addressLocality: "Sharjah",
                addressRegion: "Sharjah",
                postalCode: "00000",
                addressCountry: "AE",
              },
              areaServed: [
                "Al Rahmaniya",
                "Sharjah Sustainable City",
                "Muwaileh",
                "University City Sharjah",
                "Tilal City",
              ],
              serviceOffered: [
                {
                  "@type": "Service",
                  name: "Villa Interior Design in Al Rahmaniya Sharjah",
                },
                {
                  "@type": "Service",
                  name: "Luxury Residential Interior Design",
                },
                {
                  "@type": "Service",
                  name: "Modern Home Interior Design",
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
                  name: "Do you provide villa interior design in Al Rahmaniya Sharjah?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Rady Interiors specializes in luxury villa interior design and turnkey fit-out solutions in Al Rahmaniya Sharjah.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does a villa interior project take in Al Rahmaniya?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Most villa interior projects take 6–14 weeks depending on design complexity and customization level.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer modern home interior design in Al Rahmaniya?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, we design modern and luxury home interiors tailored to family living and contemporary lifestyles.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Rady Interiors a trusted interior design company in Al Rahmaniya Sharjah?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Rady Interiors is known for delivering high-end villa interiors and professional fit-out services across Sharjah.",
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