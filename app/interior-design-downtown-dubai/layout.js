import "../globals.css";

export const metadata = {
  title: "Best Interior Design Company in Downtown Dubai - Rady Interiors",
  description:
    "Luxury interior design company in Downtown Dubai delivering apartment, penthouse & turnkey fit-out solutions. Book your free consultation today.",
  keywords: [
    "interior design company Downtown Dubai",
    "interior design company in Downtown Dubai",
    "apartment interior design Downtown Dubai",
    "penthouse interior design Downtown Dubai",
    "luxury interior design Downtown Dubai",
    "interior fit out company Downtown Dubai",
    "turnkey fit out Downtown Dubai",
    "luxury interior design Dubai",
    "Burj Khalifa view interiors Dubai",
    "high-end interior design Dubai"
  ],
  metadataBase: new URL("https://radyinterior.ae/"),
  openGraph: {
    title: "Interior Design Projects Downtown Dubai | Rady Interiors",
    description:
      "Explore ultra-luxury interior design and fit-out projects in Downtown Dubai by Rady Interiors. Discover high-rise apartments and penthouses.",
    url: "https://radyinterior.ae/interior-design-downtown-dubai",
    siteName: "Rady Interiors",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Downtown Dubai Interior Design Projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Projects Downtown Dubai | Rady Interiors",
    description:
      "Luxury apartment and penthouse interior design in Downtown Dubai by Rady Interiors.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/interior-design-downtown-dubai",
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
                streetAddress: "Downtown Dubai",
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
              name: "Interior Design Company in Downtown Dubai",
              url: "https://radyinterior.ae/interior-design-downtown-dubai",
              description:
                "Luxury interior design services in Downtown Dubai including apartments, penthouses, and high-rise residences.",
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
                "https://radyinterior.ae/interior-design-company-downtown-dubai",
              name: "Rady Interiors",
              image: "https://radyinterior.ae/og-image.jpg",
              url: "https://radyinterior.ae/interior-design-company-downtown-dubai",
              telephone: "+971 58 807 5603",
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Downtown Dubai",
                addressLocality: "Dubai",
                addressRegion: "Dubai",
                postalCode: "00000",
                addressCountry: "AE",
              },
              areaServed: [
                "Downtown Dubai",
                "Business Bay",
                "Dubai Marina",
                "City Walk",
                "Sheikh Zayed Road",
                "Jumeirah",
              ],
              serviceOffered: [
                {
                  "@type": "Service",
                  name: "Apartment Interior Design in Downtown Dubai",
                },
                {
                  "@type": "Service",
                  name: "Penthouse Interior Design in Downtown Dubai",
                },
                {
                  "@type": "Service",
                  name: "Luxury Interior Design in Downtown Dubai",
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
                  name: "How long does an apartment fit-out in Downtown Dubai take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Apartment and penthouse fit-outs typically take 6–14 weeks depending on design complexity and approvals.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide turnkey interior design services in Downtown Dubai?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Rady Interiors offers complete turnkey solutions including design, execution, approvals, and handover.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you design Burj Khalifa view apartments in Downtown Dubai?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, we specialize in ultra-luxury apartments and penthouses with Burj Khalifa views in Downtown Dubai.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Rady Interiors a trusted interior design company in Downtown Dubai?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Rady Interiors is a leading luxury interior design company in Downtown Dubai known for premium high-rise projects.",
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