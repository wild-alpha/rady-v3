import '../globals.css';

export const metadata = {
  title: "Ras Al Khaimah Resort Restaurant interior in Dubai",
  description:
    "Ras Al Khaimah Resort Restaurant in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/ras-al-khaimah-resort-restaurant',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
