import '../globals.css';

export const metadata = {
  title: "AL Zahia Villa interior interior in Dubai",
  description:
    "Bluewaters Island Retail interior in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/al-zahia-villa-interior',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
