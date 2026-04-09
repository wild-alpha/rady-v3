import "../globals.css";

export const metadata = {
  title: "Best Interior Design Company in Emaar Beachfront - Rady Interiors",
  description:
    "Luxury interior design company in Emaar Beachfront delivering apartment, penthouse & turnkey fit-out solutions. Book your free consultation today.",
  keywords: [
    "interior design company Emaar Beachfront",
    "interior design company in Emaar Beachfront",
    "apartment interior design Emaar Beachfront",
    "penthouse interior design Emaar Beachfront",
    "luxury interior design Emaar Beachfront",
    "interior fit out company Emaar Beachfront",
    "turnkey fit out Emaar Beachfront",
    "luxury interior design Dubai",
    "beachfront interiors Dubai",
    "high-end interior design Emaar Beachfront"
  ],
  metadataBase: new URL("https://radyinterior.ae/"),
  openGraph: {
    title: "Interior Design Projects Emaar Beachfront | Rady Interiors",
    description:
      "Explore ultra-luxury interior design and fit-out projects in Emaar Beachfront by Rady Interiors. Discover exclusive beachfront apartments and penthouses.",
    url: "https://radyinterior.ae/interior-design-emaar-beachfront",
    siteName: "Rady Interiors",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Emaar Beachfront Interior Design Projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Projects Emaar Beachfront | Rady Interiors",
    description:
      "Luxury apartment and penthouse interior design in Emaar Beachfront by Rady Interiors.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/interior-design-emaar-beachfront",
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
                streetAddress: "Emaar Beachfront",
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
              name: "Interior Design Company in Emaar Beachfront",
              url: "https://radyinterior.ae/interior-design-emaar-beachfront",
              description:
                "Luxury interior design services in Emaar Beachfront including apartments, penthouses, and beachfront residences.",
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
                "https://radyinterior.ae/interior-design-company-emaar-beachfront",
              name: "Rady Interiors",
              image: "https://radyinterior.ae/og-image.jpg",
              url: "https://radyinterior.ae/interior-design-company-emaar-beachfront",
              telephone: "+971 58 807 5603",
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Emaar Beachfront",
                addressLocality: "Dubai",
                addressRegion: "Dubai",
                postalCode: "00000",
                addressCountry: "AE",
              },
              areaServed: [
                "Emaar Beachfront",
                "Dubai Marina",
                "Palm Jumeirah",
                "JBR",
                "Dubai Harbour",
                "Media City",
              ],
              serviceOffered: [
                {
                  "@type": "Service",
                  name: "Apartment Interior Design in Emaar Beachfront",
                },
                {
                  "@type": "Service",
                  name: "Penthouse Interior Design in Emaar Beachfront",
                },
                {
                  "@type": "Service",
                  name: "Luxury Beachfront Interior Design",
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
                  name: "How long does an apartment fit-out in Emaar Beachfront take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Apartment and penthouse fit-outs typically take 6–14 weeks depending on design complexity and approvals.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide turnkey interior design services in Emaar Beachfront?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Rady Interiors offers complete turnkey solutions including design, execution, approvals, and handover.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you design beachfront apartments in Emaar Beachfront?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, we specialize in ultra-luxury apartments and penthouses with sea and Palm Jumeirah views in Emaar Beachfront.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Rady Interiors a trusted interior design company in Emaar Beachfront?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Rady Interiors is a leading luxury interior design company in Emaar Beachfront known for premium beachfront projects.",
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