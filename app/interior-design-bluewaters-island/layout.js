import "../globals.css";

export const metadata = {
  title: "Best Interior Design Company in Bluewaters Island - Rady Interiors",
  description:
    "Luxury interior design company in Bluewaters Island delivering apartment, penthouse & turnkey fit-out solutions. Book your free consultation today.",
  keywords: [
    "interior design company Bluewaters Island",
    "interior design company in Bluewaters Island",
    "apartment interior design Bluewaters Island",
    "penthouse interior design Bluewaters Island",
    "luxury interior design Bluewaters Island",
    "interior fit out company Bluewaters Island",
    "turnkey fit out Bluewaters Island",
    "luxury interior design Dubai",
    "island waterfront interiors Dubai",
    "high-end interior design Bluewaters"
  ],
  metadataBase: new URL("https://radyinterior.ae/"),
  openGraph: {
    title: "Interior Design Projects Bluewaters Island | Rady Interiors",
    description:
      "Explore ultra-luxury interior design and fit-out projects in Bluewaters Island by Rady Interiors. Discover exclusive island apartments and penthouses.",
    url: "https://radyinterior.ae/interior-design-bluewaters-island",
    siteName: "Rady Interiors",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bluewaters Island Interior Design Projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Projects Bluewaters Island | Rady Interiors",
    description:
      "Luxury apartment and penthouse interior design in Bluewaters Island by Rady Interiors.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/interior-design-bluewaters-island",
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
                streetAddress: "Bluewaters Island",
                addressLocality: "Dubai",
                addressRegion: "Dubai",
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
              name: "Interior Design Company in Bluewaters Island",
              url: "https://radyinterior.ae/interior-design-bluewaters-island",
              description:
                "Luxury interior design services in Bluewaters Island including apartments, penthouses, and waterfront island residences.",
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
                "https://radyinterior.ae/interior-design-company-bluewaters-island",
              name: "Rady Interiors",
              image: "https://radyinterior.ae/og-image.jpg",
              url: "https://radyinterior.ae/interior-design-company-bluewaters-island",
              telephone: "+971 58 807 5603",
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Bluewaters Island",
                addressLocality: "Dubai",
                addressRegion: "Dubai",
                postalCode: "00000",
                addressCountry: "AE",
              },
              areaServed: [
                "Bluewaters Island",
                "Dubai Marina",
                "JBR",
                "Palm Jumeirah",
                "Jumeirah Lakes Towers",
                "Media City",
              ],
              serviceOffered: [
                {
                  "@type": "Service",
                  name: "Apartment Interior Design in Bluewaters Island",
                },
                {
                  "@type": "Service",
                  name: "Penthouse Interior Design in Bluewaters Island",
                },
                {
                  "@type": "Service",
                  name: "Luxury Island Interior Design",
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
                  name: "How long does an apartment fit-out in Bluewaters Island take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Apartment and penthouse fit-outs typically take 6–14 weeks depending on design complexity and approvals.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide turnkey interior design services in Bluewaters Island?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Rady Interiors offers complete turnkey solutions including design, execution, approvals, and handover.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you design waterfront island apartments in Bluewaters Island?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, we specialize in ultra-luxury apartments and penthouses with sea and Ain Dubai views in Bluewaters Island.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Rady Interiors a trusted interior design company in Bluewaters Island?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Rady Interiors is a leading luxury interior design company in Bluewaters Island known for premium island projects.",
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