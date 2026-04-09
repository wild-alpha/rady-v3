import '../globals.css';

export const metadata = {
  title: "Sauna & Hammam Design Dubai - Modern Interior Design",
  description:
    "Sauna & Hammam Design in Dubai by RadyInteriors. Modern, classic, or creative styles, beautiful spaces made for you. Call now to start your project!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/sauna-and-hammam-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
