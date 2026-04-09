import "../globals.css";

export const metadata = {
  title: "Best Interior Design Company in Al Zahia Sharjah - Rady Interiors",
  description:
    "Luxury interior design company in Al Zahia Sharjah delivering apartment, townhouse & turnkey fit-out solutions. Book your free consultation today.",
  keywords: [
    "interior design company Al Zahia Sharjah",
    "interior design company in Al Zahia Sharjah",
    "apartment interior design Al Zahia Sharjah",
    "townhouse interior design Al Zahia Sharjah",
    "luxury interior design Al Zahia Sharjah",
    "interior fit out company Al Zahia Sharjah",
    "turnkey fit out Al Zahia Sharjah",
    "luxury interior design Sharjah",
    "modern interiors Al Zahia Sharjah",
    "high-end interior design Al Zahia Sharjah"
  ],
  metadataBase: new URL("https://radyinterior.ae/"),
  openGraph: {
    title: "Interior Design Projects Al Zahia Sharjah | Rady Interiors",
    description:
      "Explore modern luxury interior design and fit-out projects in Al Zahia Sharjah by Rady Interiors. Discover elegant apartments and townhouses.",
    url: "https://radyinterior.ae/interior-design-al-zahia-sharjah",
    siteName: "Rady Interiors",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Al Zahia Sharjah Interior Design Projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Projects Al Zahia Sharjah | Rady Interiors",
    description:
      "Luxury apartment and townhouse interior design in Al Zahia Sharjah by Rady Interiors.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/interior-design-al-zahia-sharjah",
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
                streetAddress: "Al Zahia Sharjah",
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
              name: "Interior Design Company in Al Zahia Sharjah",
              url: "https://radyinterior.ae/interior-design-al-zahia-sharjah",
              description:
                "Luxury interior design services in Al Zahia Sharjah including apartments and townhouses.",
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
                "https://radyinterior.ae/interior-design-company-al-zahia-sharjah",
              name: "Rady Interiors",
              image: "https://radyinterior.ae/og-image.jpg",
              url: "https://radyinterior.ae/interior-design-company-al-zahia-sharjah",
              telephone: "+971 58 807 5603",
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Al Zahia Sharjah",
                addressLocality: "Sharjah",
                addressRegion: "Sharjah",
                postalCode: "00000",
                addressCountry: "AE",
              },
              areaServed: [
                "Al Zahia Sharjah",
                "Muwaileh",
                "University City Sharjah",
                "Tilal City",
                "Sharjah Sustainable City",
              ],
              serviceOffered: [
                {
                  "@type": "Service",
                  name: "Apartment Interior Design in Al Zahia Sharjah",
                },
                {
                  "@type": "Service",
                  name: "Townhouse Interior Design in Al Zahia Sharjah",
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
                  name: "How long does an apartment fit-out in Al Zahia Sharjah take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Apartment and townhouse fit-outs typically take 5–12 weeks depending on design complexity and approvals.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide turnkey interior design services in Al Zahia Sharjah?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Rady Interiors offers complete turnkey solutions including design, execution, approvals, and handover.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you design modern apartments in Al Zahia Sharjah?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, we specialize in modern luxury apartments and townhouses in Al Zahia Sharjah.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Rady Interiors a trusted interior design company in Al Zahia Sharjah?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Rady Interiors is a leading luxury interior design company in Al Zahia Sharjah known for modern residential projects.",
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