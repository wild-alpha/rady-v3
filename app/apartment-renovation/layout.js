import '../globals.css';

export const metadata = {
  title: " Apartment renovation, UAE - Modern Interior Design",
  description:
    "Apartment renovation in Dubai by RadyInteriors. Modern, classic, or creative styles, beautiful spaces made for you. Call now to start your project!",
  metadataBase: new URL('hhttps://radyinterior.ae/'),
  alternates: {
    canonical: '/apartment-renovation',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
