import '../globals.css';

export const metadata = {
  title: "Jumeirah Islands Villa Renovation in Dubai",
  description:
    "Jumeirah Islands Villa Renovation in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/jumeirah-islands-villa-renovation',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
