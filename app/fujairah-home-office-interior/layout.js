import '../globals.css';

export const metadata = {
  title: "Fujairah Home Office Interior Design in Sharjah",
  description:
    "Fujairah Home Office Interior Design in Sharjah with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/fujairah-home-office-interior',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
