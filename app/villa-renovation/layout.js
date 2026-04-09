import '../globals.css';

export const metadata = {
  title: "Villa Renovation Dubai - Modern Interior Design",
  description:
    "Villa Renovation in Dubai by RadyInterior. Modern, classic, or creative styles, beautiful spaces made for you. Call now to start your project!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/villa-renovation',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
