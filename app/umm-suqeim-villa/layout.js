import '../globals.css';

export const metadata = {
  title: "Umm Suqeim Villa interior in Dubai",
  description:
    "Umm Suqeim Villa Interior Fit Out in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/umm-suqeim-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
