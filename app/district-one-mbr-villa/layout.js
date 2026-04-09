import '../globals.css';

export const metadata = {
  title: "  District One MBR Villa Interior Interior Design & Fit Out",
  description:
    "  District One MBR Villa  Interior Design in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/district-one-mbr-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
