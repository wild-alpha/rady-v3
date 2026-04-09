import '../globals.css';

export const metadata = {
  title: "Turnkey Solutions in  Dubai - Modern Interior Design",
  description:
    "Turnkey Solutions in Dubai by RadyInteriors. Modern, classic, or creative styles, beautiful spaces made for you. Call now to start your project!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/turnkey-solutions',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
