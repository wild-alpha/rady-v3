import '../globals.css';

export const metadata = {
  title: " Jumeirah Bay Island Mansion Interior Design & Fit Out",
  description:
    " Jumeirah Bay Island Mansion Interior Design in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/jumeirah-bay-island-mansion',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
