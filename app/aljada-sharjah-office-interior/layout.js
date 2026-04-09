import '../globals.css';

export const metadata = {
  title: "Aljada Sharjah Office interior interior in Dubai",
  description:
    "Aljada Sharjah Office interior in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/aljada-sharjah-office-interior',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
