import "../globals.css";

export const metadata = {
  title: "Best Interior Design Company in Jumeirah Golf Estates Dubai - Rady Interiors",
  description:
    "Luxury interior design company in Jumeirah Golf Estates Dubai delivering villa, mansion & turnkey fit-out solutions. Book your free consultation today.",
  keywords: [
    "interior design company Jumeirah Golf Estates Dubai",
    "interior design company in Jumeirah Golf Estates",
    "villa interior design Jumeirah Golf Estates Dubai",
    "mansion interior design Jumeirah Golf Estates Dubai",
    "luxury interior design Jumeirah Golf Estates",
    "interior fit out company Jumeirah Golf Estates Dubai",
    "turnkey fit out Jumeirah Golf Estates Dubai",
    "luxury interior design Dubai",
    "golf course villa interior Dubai",
    "high-end interior design Dubai"
  ],
  metadataBase: new URL("https://radyinterior.ae/"),
  openGraph: {
    title: "Interior Design Projects Jumeirah Golf Estates Dubai | Rady Interiors",
    description:
      "Explore ultra-luxury interior design and fit-out projects in Jumeirah Golf Estates Dubai by Rady Interiors. Discover golf course villas and mansions.",
    url: "https://radyinterior.ae/interior-design-jumeirah-golf-estates",
    siteName: "Rady Interiors",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jumeirah Golf Estates Interior Design Projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Projects Jumeirah Golf Estates Dubai | Rady Interiors",
    description:
      "Luxury villa and mansion interior design in Jumeirah Golf Estates Dubai by Rady Interiors.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/interior-design-jumeirah-golf-estates",
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
                streetAddress: "Jumeirah Golf Estates",
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
              name: "Interior Design Company in Jumeirah Golf Estates Dubai",
              url: "https://radyinterior.ae/interior-design-jumeirah-golf-estates-dubai",
              description:
                "Luxury interior design services in Jumeirah Golf Estates Dubai including villas, mansions, and golf course residences.",
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
                "https://radyinterior.ae/interior-design-company-jumeirah-golf-estates-dubai",
              name: "Rady Interiors",
              image: "https://radyinterior.ae/og-image.jpg",
              url: "https://radyinterior.ae/interior-design-company-jumeirah-golf-estates-dubai",
              telephone: "+971 58 807 5603",
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jumeirah Golf Estates",
                addressLocality: "Dubai",
                addressRegion: "Dubai",
                postalCode: "00000",
                addressCountry: "AE",
              },
              areaServed: [
                "Jumeirah Golf Estates",
                "Dubai Sports City",
                "Motor City",
                "Arabian Ranches",
                "Dubai Hills Estate",
                "Emirates Hills",
              ],
              serviceOffered: [
                {
                  "@type": "Service",
                  name: "Villa Interior Design in Jumeirah Golf Estates",
                },
                {
                  "@type": "Service",
                  name: "Mansion Interior Design in Jumeirah Golf Estates",
                },
                {
                  "@type": "Service",
                  name: "Luxury Interior Design in Jumeirah Golf Estates",
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
                  name: "How long does a villa fit-out in Jumeirah Golf Estates take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Villa and mansion fit-outs typically take 8–16 weeks depending on design complexity and approvals.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide turnkey interior design services in Jumeirah Golf Estates?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Rady Interiors offers complete turnkey solutions including design, execution, approvals, and handover.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you design golf course villas in Jumeirah Golf Estates?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, we specialize in ultra-luxury villas and mansions in Jumeirah Golf Estates overlooking golf course views.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Rady Interiors a trusted interior design company in Jumeirah Golf Estates?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Rady Interiors is a leading luxury interior design company in Jumeirah Golf Estates known for premium villa and mansion projects.",
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