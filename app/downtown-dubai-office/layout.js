import '../globals.css';

export const metadata = {
  title: "Downtown Dubai Office Interior Design",
  description:
   "Downtown Dubai Office Interior Design with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/downtown-dubai-office',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
