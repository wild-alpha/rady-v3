import '../globals.css';

export const metadata = {
  title: "Al Riqaibah Café Interior Design in Dubai",
  description:
    "Al Riqaibah Café Interior Design in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/al-riqaibah-cafe',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
