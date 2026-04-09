import '../globals.css';

export const metadata = {
  title: "Maryam Island Apartment Fit-Out in Dubai",
  description:
    "Maryam Island Apartment Fit-Out in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/maryam-island-apartment-fit-out',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
