import '../globals.css';

export const metadata = {
  title: " Downtown Dubai Apartment Interior Design & Fit Out",
  description:
    " Downtown Dubai Apartment Interior Design in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/downtown-dubai-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
