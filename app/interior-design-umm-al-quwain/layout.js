import "../globals.css";

export const metadata = {
  title: "Best Interior Design Company in Umm Al Quwain | Rady Interiors",
  description:
    "Luxury interior design company in Umm Al Quwain delivering villa interior design & turnkey fit-out solutions. Book your free consultation today.",
  keywords: [
    "interior design company Umm Al Quwain",
    "villa interior design Umm Al Quwain",
    "luxury villa interior Umm Al Quwain",
    "interior fit out company Umm Al Quwain",
    "modern interior design Umm Al Quwain",
    "turnkey fit out Umm Al Quwain",
    "residential interior design Umm Al Quwain",
    "high end interior design Umm Al Quwain",
  ],
  metadataBase: new URL("https://radyinterior.ae/"),
  alternates: {
    canonical: "/interior-design-umm-al-quwain",
  },
  openGraph: {
    title: "Interior Design Company in Umm Al Quwain | Rady Interiors",
    description:
      "Explore luxury villa interior design and fit-out services in Umm Al Quwain by Rady Interiors.",
    url: "https://radyinterior.ae/interior-design-umm-al-quwain",
    siteName: "Rady Interiors",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Umm Al Quwain Interior Design Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Company in Umm Al Quwain | Rady Interiors",
    description:
      "Luxury villa interior design and fit-out services in Umm Al Quwain.",
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
                streetAddress: "Umm Al Quwain",
                addressLocality: "Umm Al Quwain",
                addressRegion: "Umm Al Quwain",
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
              name: "Interior Design Company in Umm Al Quwain",
              url: "https://radyinterior.ae/interior-design-umm-al-quwain",
              description:
                "Luxury villa interior design and fit-out services in Umm Al Quwain.",
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
              url: "https://radyinterior.ae/interior-design-umm-al-quwain",
              telephone: "+971 58 807 5603",
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Umm Al Quwain",
                addressLocality: "Umm Al Quwain",
                addressRegion: "Umm Al Quwain",
                addressCountry: "AE",
              },
              areaServed: [
                "Umm Al Quwain City",
                "Al Salamah",
                "Al Raas",
                "Al Humrah",
                "Falaj Al Mualla",
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
                  name: "How long does a villa fit-out take in Umm Al Quwain?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Villa interior fit-outs in Umm Al Quwain typically take 6–14 weeks depending on design complexity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer interior design services in Umm Al Quwain?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, we provide luxury villa interior design and turnkey fit-out services in Umm Al Quwain.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you design modern luxury villas in Umm Al Quwain?",
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