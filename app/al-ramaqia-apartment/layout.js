import '../globals.css';

export const metadata = {
  title: "Al Ramaqia Apartment Interior Design in Sharjah",
  description:
    "Al Ramaqia Apartment Interior Design in Sharjah with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/al-ramaqia-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
