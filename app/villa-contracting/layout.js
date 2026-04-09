import '../globals.css';

export const metadata = {
  title: "Villa Contracting Services Dubai - Modern Interior Design",
  description:
    "Luxury Villa Contracting Services in Dubai by RadyInteriors. Modern, classic, or creative styles, beautiful spaces made for you. Call now!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/villa-contracting',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
