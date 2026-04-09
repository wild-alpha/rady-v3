import '../globals.css';

export const metadata = {
  title: "Mowradda Villa Renovation in Shajrah",
  description:
    "Mowradda Villa Renovation in Shajrah with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/mowradda-villa-renovation',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
