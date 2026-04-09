import '../globals.css';

export const metadata = {
  title: "Meadows Villa Interior Design in Dubai",
  description:
    "Meadows Villa Interior Designin Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/meadows-villa-interior',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
