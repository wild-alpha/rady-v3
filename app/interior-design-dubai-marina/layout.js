import "../globals.css";

export const metadata = {
  title: "Best Interior Design Company in Dubai Marina - Rady Interiors",
  description:
    "Luxury interior design company in Dubai Marina delivering apartment, penthouse & turnkey fit-out solutions. Book your free consultation today.",
  keywords: [
    "interior design company Dubai Marina",
    "interior design company in Dubai Marina",
    "apartment interior design Dubai Marina",
    "penthouse interior design Dubai Marina",
    "luxury interior design Dubai Marina",
    "interior fit out company Dubai Marina",
    "turnkey fit out Dubai Marina",
    "luxury interior design Dubai",
    "waterfront interiors Dubai Marina",
    "high-end interior design Dubai"
  ],
  metadataBase: new URL("https://radyinterior.ae/"),
  openGraph: {
    title: "Interior Design Projects Dubai Marina | Rady Interiors",
    description:
      "Explore ultra-luxury interior design and fit-out projects in Dubai Marina by Rady Interiors. Discover waterfront apartments and penthouses.",
    url: "https://radyinterior.ae/interior-design-dubai-marina",
    siteName: "Rady Interiors",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dubai Marina Interior Design Projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Projects Dubai Marina | Rady Interiors",
    description:
      "Luxury apartment and penthouse interior design in Dubai Marina by Rady Interiors.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/interior-design-dubai-marina",
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
                streetAddress: "Dubai Marina",
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
              name: "Interior Design Company in Dubai Marina",
              url: "https://radyinterior.ae/interior-design-dubai-marina",
              description:
                "Luxury interior design services in Dubai Marina including apartments, penthouses, and waterfront residences.",
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
                "https://radyinterior.ae/interior-design-company-dubai-marina",
              name: "Rady Interiors",
              image: "https://radyinterior.ae/og-image.jpg",
              url: "https://radyinterior.ae/interior-design-company-dubai-marina",
              telephone: "+971 58 807 5603",
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Dubai Marina",
                addressLocality: "Dubai",
                addressRegion: "Dubai",
                postalCode: "00000",
                addressCountry: "AE",
              },
              areaServed: [
                "Dubai Marina",
                "JBR",
                "Bluewaters Island",
                "Palm Jumeirah",
                "Jumeirah Lakes Towers",
                "Media City",
              ],
              serviceOffered: [
                {
                  "@type": "Service",
                  name: "Apartment Interior Design in Dubai Marina",
                },
                {
                  "@type": "Service",
                  name: "Penthouse Interior Design in Dubai Marina",
                },
                {
                  "@type": "Service",
                  name: "Luxury Waterfront Interior Design in Dubai Marina",
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
                  name: "How long does an apartment fit-out in Dubai Marina take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Apartment and penthouse fit-outs typically take 6–14 weeks depending on design complexity and approvals.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide turnkey interior design services in Dubai Marina?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Rady Interiors offers complete turnkey solutions including design, execution, approvals, and handover.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you design waterfront apartments in Dubai Marina?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, we specialize in ultra-luxury apartments and penthouses with marina and sea views in Dubai Marina.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Rady Interiors a trusted interior design company in Dubai Marina?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Rady Interiors is a leading luxury interior design company in Dubai Marina known for premium waterfront projects.",
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