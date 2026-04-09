import '../globals.css';

export const metadata = {
  title: "Interior Renovation Company in Dubai | Villas & Offices",
  description:
    "Interior renovation and refurbishment company in Dubai for villas, offices and commercial spaces. Cost controlled, turnkey delivery.",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/interior-refurbishment-and-renovation',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
