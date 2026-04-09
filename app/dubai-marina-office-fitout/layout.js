import '../globals.css';

export const metadata = {
  title: "Dubai Marina Office Fit-Out in Dubai",
  description:
    "Dubai Marina Office Fit-Out in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/dubai-marina-office-fitout',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
