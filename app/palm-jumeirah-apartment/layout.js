import '../globals.css';

export const metadata = {
  title: "Five Palm Jumeirah Apartment Interior Design in Dubai",
  description:
    "Five Palm Jumeirah Apartment Interior Design in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('http://radyinterior.ae/'),
  alternates: {
    canonical: '/palm-jumeirah-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
