import '../globals.css';

export const metadata = {
  title: " Emirates Hills Villa Interior Design & Fit Out",
  description:
    " Emirates Hills Villa Interior Design in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/emirates-hills-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
