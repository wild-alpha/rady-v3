import '../globals.css';

export const metadata = {
  title: "Best Interior Design Company in Emirates Hills, Dubai - Rady Interiors",
  description:
    "Luxury interior design company in Emirates Hills delivering villa, mansion & turnkey fit-out solutions. Book your free consultation today.",
  keywords: [
    "interior design company Emirates Hills",
    "interior design company in Emirates Hills Dubai",
    "villa interior design Emirates Hills",
    "mansion interior design Emirates Hills",
    "luxury interior design Emirates Hills",
    "interior fit out company Emirates Hills",
    "turnkey fit out Emirates Hills",
    "luxury interior design Dubai",
    "villa renovation Emirates Hills",
    "high-end interior design Dubai"
  ],
  metadataBase: new URL('https://radyinterior.ae/'),
  openGraph: {
    title: 'Interior Design Projects Emirates Hills | Rady Interiors',
    description:
      'Explore ultra-luxury interior design and fit-out projects in Emirates Hills by Rady Interiors. Discover villas, mansions, and bespoke residences.',
    url: 'https://radyinterior.ae/interior-design-company-emirates-hills',
    siteName: 'Rady Interiors',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Emirates Hills Interior Design Projects',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Design Projects Emirates Hills | Rady Interiors',
    description:
      'Luxury villa and mansion interior design in Emirates Hills by Rady Interiors.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/interior-design-company-emirates-hills',
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
                "streetAddress": "Emirates Hills",
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
              "name": "Interior Design Company in Emirates Hills",
              "url": "https://radyinterior.ae/interior-design-company-emirates-hills",
              "description":
                "Luxury interior design services in Emirates Hills Dubai including villas, mansions, and bespoke luxury residences."
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
              "@id": "https://radyinterior.ae/interior-design-company-emirates-hills",
              "name": "Rady Interiors",
              "image": "https://radyinterior.ae/og-image.jpg",
              "url": "https://radyinterior.ae/interior-design-company-emirates-hills",
              "telephone": "+971 58 807 5603",
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Emirates Hills",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "postalCode": "00000",
                "addressCountry": "AE"
              },
              "areaServed": [
                "Emirates Hills",
                "Dubai Marina",
                "JBR",
                "Downtown Dubai",
                "Dubai Hills",
                "Palm Jumeirah"
              ],
              "serviceOffered": [
                { "@type": "Service", "name": "Villa Interior Design in Emirates Hills" },
                { "@type": "Service", "name": "Mansion Interior Design in Emirates Hills" },
                { "@type": "Service", "name": "Luxury Interior Design in Emirates Hills" },
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
                  "name": "How long does a villa fit-out in Emirates Hills take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Villa and mansion fit-outs typically take 8–16 weeks depending on design complexity and approvals."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide turnkey interior design services in Emirates Hills?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Rady Interiors offers complete turnkey solutions including design, execution, approvals, and handover."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you design luxury mansions in Emirates Hills?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in ultra-luxury mansion and villa interior design in Emirates Hills."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Rady Interiors a trusted interior design company in Emirates Hills?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Rady Interiors is a leading luxury interior design company in Emirates Hills known for premium residential projects."
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