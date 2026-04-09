import '../globals.css';

export const metadata = {
  title: "Hoshi Office Interior Design in Sharjah",
  description:
    "Hoshi Office Interior Design in Sharjah with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/hoshi-office-interior-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
