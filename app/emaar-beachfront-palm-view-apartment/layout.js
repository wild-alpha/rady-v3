import '../globals.css';

export const metadata = {
  title: " Emaar Beachfront Palm View Apartment Interior Design",
  description:
    "  Emaar Beachfront Palm View Apartment Interior Design in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/emaar-beachfront-palm-view-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
