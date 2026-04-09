import '../globals.css';

export const metadata = {
  title: "Bluewaters Island Retail interior in Dubai",
  description:
    "Bluewaters Island Retail interior in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/bluewaters-island-retail',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
