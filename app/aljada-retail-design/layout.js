import '../globals.css';

export const metadata = {
  title: "Aljada Retail Interior Design in Sharjah",
  description:
   "Aljada Retail Interior Design in Sharjah with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/aljada-retail-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
