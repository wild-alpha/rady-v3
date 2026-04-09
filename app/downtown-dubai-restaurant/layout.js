import '../globals.css';

export const metadata = {
  title: "Downtown Dubai Restaurant interior Design in Dubai",
  description:
    "Downtown Dubai Restaurant interior Design in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/downtown-dubai-restaurant',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
