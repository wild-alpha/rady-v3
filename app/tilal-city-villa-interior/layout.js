import '../globals.css';

export const metadata = {
  title: "Tilal City Villa Interior Fit Out in Dubai",
  description:
    "Tilal City Villa Interior Fit Out in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/tilal-city-villa-interior',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
