import '../globals.css';

export const metadata = {
  title: "Exterior Design Dubai - Modern Exterior Design",
  description:
    "Exterior Design Dubai by RadyInterior. Modern, classic, or creative styles, beautiful spaces made for you. Call now to start your project!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/exterior-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
