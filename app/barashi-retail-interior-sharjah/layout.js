import '../globals.css';

export const metadata = {
  title: "Barashi Retail Interior Design in Sharjah",
  description:
    "Barashi Retail Interior Design in Sharjah with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/barashi-retail-interior-sharjah',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
