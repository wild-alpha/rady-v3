import '../globals.css';

export const metadata = {
  title: "Al Rahmaniya Retail Interior Design in Sharjah",
  description:
    "Al Rahmaniya Retail Interior Design in Sharjah with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/al-rahmaniya-retail-interior',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
