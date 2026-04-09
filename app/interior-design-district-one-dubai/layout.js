import "../globals.css";

export const metadata = {
  title: "Best Interior Design Company in District One Dubai - Rady Interiors",
  description:
    "Luxury interior design company in District One Dubai delivering villa, mansion & turnkey fit-out solutions. Book your free consultation today.",
  keywords: [
    "interior design company District One Dubai",
    "interior design company in District One",
    "villa interior design District One Dubai",
    "mansion interior design District One Dubai",
    "luxury interior design District One",
    "interior fit out company District One Dubai",
    "turnkey fit out District One Dubai",
    "luxury interior design Dubai",
    "waterfront interior design Dubai",
    "high-end interior design Dubai"
  ],
  metadataBase: new URL("https://radyinterior.ae/"),
  openGraph: {
    title: "Interior Design Projects District One Dubai | Rady Interiors",
    description:
      "Explore ultra-luxury interior design and fit-out projects in District One Dubai by Rady Interiors. Discover lagoon-side villas and mansions.",
    url: "https://radyinterior.ae/interior-design-company-district-one-dubai",
    siteName: "Rady Interiors",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "District One Dubai Interior Design Projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Projects District One Dubai | Rady Interiors",
    description:
      "Luxury villa and mansion interior design in District One Dubai by Rady Interiors.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/interior-design-district-one-dubai",
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
                streetAddress: "District One",
                addressLocality: "Dubai",
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
              name: "Interior Design Company in District One Dubai",
              url: "https://radyinterior.ae/interior-design-district-one-dubai",
              description:
                "Luxury interior design services in District One Dubai including villas, mansions, and waterfront residences.",
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
                "https://radyinterior.ae/interior-design-company-district-one-dubai",
              name: "Rady Interiors",
              image: "https://radyinterior.ae/og-image.jpg",
              url: "https://radyinterior.ae/interior-design-company-district-one-dubai",
              telephone: "+971 58 807 5603",
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "District One",
                addressLocality: "Dubai",
                addressRegion: "Dubai",
                postalCode: "00000",
                addressCountry: "AE",
              },
              areaServed: [
                "District One Dubai",
                "Mohammed Bin Rashid City",
                "Downtown Dubai",
                "Business Bay",
                "Dubai Hills Estate",
                "Emirates Hills",
              ],
              serviceOffered: [
                {
                  "@type": "Service",
                  name: "Villa Interior Design in District One Dubai",
                },
                {
                  "@type": "Service",
                  name: "Mansion Interior Design in District One Dubai",
                },
                {
                  "@type": "Service",
                  name: "Luxury Interior Design in District One Dubai",
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
                  name: "How long does a villa fit-out in District One Dubai take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Villa and mansion fit-outs typically take 8–16 weeks depending on design complexity and approvals.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide turnkey interior design services in District One Dubai?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Rady Interiors offers complete turnkey solutions including design, execution, approvals, and handover.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you design luxury waterfront properties in District One Dubai?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, we specialize in ultra-luxury villas and mansions in District One Dubai.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Rady Interiors a trusted interior design company in District One Dubai?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Rady Interiors is a leading luxury interior design company in District One Dubai known for premium waterfront projects.",
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