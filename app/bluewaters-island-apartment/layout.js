import '../globals.css';

export const metadata = {
  title: "Bluewaters Island Apartment Interior Design",
  description:
   "Bluewaters Island Apartment Interior Design with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/bluewaters-island-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
