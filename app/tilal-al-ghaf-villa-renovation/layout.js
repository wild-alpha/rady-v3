import '../globals.css';

export const metadata = {
  title: " Tilal Al Ghaf Villa Renovation in Dubai",
  description:
    "Tilal Al Ghaf Villa Renovation in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/tilal-al-ghaf-villa-renovation',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
