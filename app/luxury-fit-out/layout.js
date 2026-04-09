import '../globals.css';

export const metadata = {
  title: "Luxury Fit-Out Company in Dubai | High-End Interiors",
  description:
    "Luxury fit-out services in Dubai for villas, penthouses and premium commercial projects. High-end materials, precision execution.",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/luxury-fit-out',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
