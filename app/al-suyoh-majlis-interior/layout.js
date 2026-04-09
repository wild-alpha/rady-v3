import '../globals.css';

export const metadata = {
  title: "Al Suyoh Majlis interior Design in Sharjah",
  description:
    "Al Suyoh Majlis interior Design in Sharjah with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/al-suyoh-majlis-interior',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
