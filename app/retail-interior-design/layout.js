import '../globals.css';

export const metadata = {
  title: "Retail Interior Design Dubai - Modern Interior Design",
  description:
    "Luxury Retail interior design in Dubai by RadyInteriors. Modern, classic, or creative styles, beautiful spaces made for you. Call now!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/retail-interior-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
