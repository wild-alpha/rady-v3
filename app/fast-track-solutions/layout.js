import '../globals.css';

export const metadata = {
  title: "Fast Track Interior Fit Out Solutions | Fit Out Company in Dubai",
  description:
    "Fast track interior fit out services in UAE with premium quality, expert teams, and tailored solutions completed on tight deadlines.",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/fast-track-solutions',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
