import '../globals.css';

export const metadata = {
  title: "Al Qarayen Prayer Room Interior Design in Sharjah",
  description:
    "Al Qarayen Prayer Room Interior Design in Sharjah with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/al-qarayen-prayer-room',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
