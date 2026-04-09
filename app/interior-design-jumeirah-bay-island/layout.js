import "../globals.css";

export const metadata = {
  title: "Best Interior Design Company in Jumeirah Bay Island, Dubai - Rady Interiors",
  description:
    "Luxury interior design company in Jumeirah Bay Island delivering villa, apartment & turnkey fit-out solutions. Book your free consultation today.",
  keywords: [
    "interior design company Jumeirah Bay Island",
    "interior design company in Jumeirah Bay Island Dubai",
    "villa interior design Jumeirah Bay Island",
    "apartment interior design Jumeirah Bay Island",
    "luxury interior design Jumeirah Bay Island",
    "interior fit out company Jumeirah Bay Island",
    "turnkey fit out Jumeirah Bay Island",
    "luxury interior design Dubai",
    "waterfront interior design Dubai",
    "high-end interior design Dubai"
  ],
  metadataBase: new URL("https://radyinterior.ae/"),
  openGraph: {
    title: "Interior Design Projects Jumeirah Bay Island | Rady Interiors",
    description:
      "Explore ultra-luxury interior design and fit-out projects in Jumeirah Bay Island by Rady Interiors. Discover waterfront villas, apartments, and penthouses.",
    url: "https://radyinterior.ae/interior-design-company-jumeirah-bay-island",
    siteName: "Rady Interiors",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jumeirah Bay Island Interior Design Projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Projects Jumeirah Bay Island | Rady Interiors",
    description:
      "Luxury waterfront villa and apartment interior design in Jumeirah Bay Island by Rady Interiors.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/interior-design-jumeirah-bay-island",
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
                streetAddress: "Jumeirah Bay Island",
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
              name: "Interior Design Company in Jumeirah Bay Island",
              url: "https://radyinterior.ae/interior-design-jumeirah-bay-island",
              description:
                "Luxury interior design services in Jumeirah Bay Island Dubai including villas, apartments, and waterfront residences.",
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
                "https://radyinterior.ae/interior-design-company-jumeirah-bay-island",
              name: "Rady Interiors",
              image: "https://radyinterior.ae/og-image.jpg",
              url: "https://radyinterior.ae/interior-design-company-jumeirah-bay-island",
              telephone: "+971 58 807 5603",
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jumeirah Bay Island",
                addressLocality: "Dubai",
                addressRegion: "Dubai",
                postalCode: "00000",
                addressCountry: "AE",
              },
              areaServed: [
                "Jumeirah Bay Island",
                "Jumeirah",
                "Dubai Marina",
                "Downtown Dubai",
                "Palm Jumeirah",
                "Emirates Hills",
              ],
              serviceOffered: [
                {
                  "@type": "Service",
                  name: "Villa Interior Design in Jumeirah Bay Island",
                },
                {
                  "@type": "Service",
                  name: "Apartment Interior Design in Jumeirah Bay Island",
                },
                {
                  "@type": "Service",
                  name: "Luxury Interior Design in Jumeirah Bay Island",
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
                  name: "How long does a villa fit-out in Jumeirah Bay Island take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Villa and apartment fit-outs typically take 8–16 weeks depending on design complexity and approvals.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide turnkey interior design services in Jumeirah Bay Island?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Rady Interiors offers complete turnkey solutions including design, execution, approvals, and handover.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you design luxury waterfront properties in Jumeirah Bay Island?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, we specialize in ultra-luxury villas, apartments, and penthouses in Jumeirah Bay Island.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Rady Interiors a trusted interior design company in Jumeirah Bay Island?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Rady Interiors is a leading luxury interior design company in Jumeirah Bay Island known for premium waterfront projects.",
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