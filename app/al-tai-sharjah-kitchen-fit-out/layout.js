import '../globals.css';

export const metadata = {
  title: "Al Tai Sharjah Kitchen fit-out in Sharjah",
  description:
    "Al Tai Sharjah Kitchen fit-out in Sharjah with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/al-tai-sharjah-kitchen-fit-out',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
