import '../globals.css';

export const metadata = {
  title: "La Mer Beach Restaurant interior in Dubai",
  description:
    "La Mer Beach Restaurant Interior in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/la-mer-beach-restaurant',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
