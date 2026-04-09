import '../globals.css';

export const metadata = {
  title: "Bathroom Renovation - Modern Interior Design",
  description:
    "Luxury villa  interior design in Dubai by RadyInteriors. Modern, classic, or creative styles, beautiful spaces made for you. Call now!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/bathroom-renovation',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
