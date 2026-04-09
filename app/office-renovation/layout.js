import '../globals.css';

export const metadata = {
  title: "Office Renovation in Dubai - Modern Interior Design",
  description:
    "Office Renovation in Dubai by RadyInteriors. Modern, classic, or creative styles, beautiful spaces made for you. Call now to start your project!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/office-renovation',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
