import '../globals.css';

export const metadata = {
  title: "Palm Jumeirah Villa Interior Design & Fit Out",
  description:
    "Palm Jumeirah Villa Interior Design in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/palm-jumeirah-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
