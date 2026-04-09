import '../globals.css';

export const metadata = {
  title: "Emaar Beachfront Restaurant interior in Dubai",
  description:
    "Emaar Beachfront Restaurant in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/emaar-beachfront-restaurant',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
