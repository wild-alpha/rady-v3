import '../globals.css';

export const metadata = {
  title: "Sharjah Sustainable City Villa interior in Dubai",
  description:
    "Sharjah Sustainable City Villa interior in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/sharjah-sustainable-city-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
