import '../globals.css';

export const metadata = {
  title: "Best Interior Design Company in Palm Jumeirah, Dubai - Rady Interiors",
  description:
    "Luxury interior design company in Palm Jumeirah delivering villa, apartment & turnkey fit-out solutions. Book your free consultation",
  keywords: [
    "interior design company Palm Jumeirah",
    "interior design company in Palm Jumeirah Dubai",
    "villa interior design Palm Jumeirah",
    "apartment interior design Palm Jumeirah",
    "luxury interior design Palm Jumeirah",
    "interior fit out company Palm Jumeirah",
    "turnkey fit out Palm Jumeirah",
    "commercial interior design Dubai",
    "luxury interior design Dubai",
    "renovation services Palm Jumeirah"
  ],
  metadataBase: new URL('https://radyinterior.ae/'),
  openGraph: {
    title: 'Interior Design Projects Palm Jumeirah | Rady Interiors',
    description:
      'Explore luxury interior design and fit-out projects in Palm Jumeirah by Rady Interiors. Discover villas, apartments, and premium waterfront interiors.',
    url: 'https://radyinterior.ae/interior-design-company-palm-jumeirah',
    siteName: 'Rady Interiors',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Palm Jumeirah Interior Design Projects',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Design Projects Palm Jumeirah | Rady Interiors',
    description:
      'Luxury villa and apartment interior design in Palm Jumeirah by Rady Interiors.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/interior-design-company-palm-jumeirah',
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
              "name": "Rady Interiors",
              "url": "https://radyinterior.ae/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://radyinterior.ae/logo.png"
              },
              "sameAs": [
                "https://www.instagram.com/radyinterior",
                "https://www.facebook.com/radyinterior"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+971 58 807 5603",
                "contactType": "Customer Service",
                "areaServed": "AE",
                "availableLanguage": ["English", "Arabic"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Palm Jumeirah",
                "addressLocality": "Dubai",
                "postalCode": "00000",
                "addressCountry": "AE"
              }
            })
          }}
        />

        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Interior Design Company in Palm Jumeirah",
              "url": "https://radyinterior.ae/interior-design-company-palm-jumeirah",
              "description":
                "Luxury interior design services in Palm Jumeirah Dubai including villas, apartments, penthouses, and waterfront homes."
            })
          }}
        />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://radyinterior.ae/interior-design-company-palm-jumeirah",
              "name": "Rady Interiors",
              "image": "https://radyinterior.ae/og-image.jpg",
              "url": "https://radyinterior.ae/interior-design-company-palm-jumeirah",
              "telephone": "+971 58 807 5603",
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Palm Jumeirah",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "postalCode": "00000",
                "addressCountry": "AE"
              },
              "areaServed": [
                "Palm Jumeirah",
                "Dubai Marina",
                "JBR",
                "Downtown Dubai",
                "Dubai Hills",
                "Bluewaters Island"
              ],
              "serviceOffered": [
                { "@type": "Service", "name": "Villa Interior Design in Palm Jumeirah" },
                { "@type": "Service", "name": "Apartment Interior Design in Palm Jumeirah" },
                { "@type": "Service", "name": "Luxury Interior Design in Palm Jumeirah" },
                { "@type": "Service", "name": "Turnkey Fit-Out Solutions" }
              ]
            })
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How long does a villa fit-out in Palm Jumeirah take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Villa fit-outs typically take 6–14 weeks depending on size, design complexity, and approvals."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide turnkey interior design services in Palm Jumeirah?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Rady Interiors provides complete turnkey solutions including design, approvals, execution, and handover."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you design luxury apartments in Palm Jumeirah?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in luxury apartment interior design in Palm Jumeirah with modern and elegant finishes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Rady Interiors a trusted interior design company in Palm Jumeirah?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Rady Interiors is a leading interior design company in Palm Jumeirah known for luxury residential and commercial projects."
                  }
                }
              ]
            })
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}