import '../globals.css';

export const metadata = {
  title: "Luxury Dubai South Apartment Interior Fit-out in Dubai",
  description:
    "Luxury Dubai South Apartment Interior Fit-out in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/dubai-south-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
