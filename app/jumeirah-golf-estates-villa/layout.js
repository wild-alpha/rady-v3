import '../globals.css';

export const metadata = {
  title: " Jumeirah Golf Estates Villa Interior Design & Fit Out",
  description:
    " Jumeirah Golf Estates Villa Interior Design in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/jumeirah-golf-estates-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
