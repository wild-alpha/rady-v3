import '../globals.css';

export const metadata = {
  title: " Dubai Hills Estate 3 Bedroom Apartment Interior Design & Fit Out",
  description:
    " Dubai Hills Estate 3 Bedroom Apartment Interior Design in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/dubai-hills-estate-3-bedroom-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
