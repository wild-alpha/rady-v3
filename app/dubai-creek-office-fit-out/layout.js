import '../globals.css';

export const metadata = {
  title: "Dubai Creek Office Fit Out in Dubai",
  description:
    "Dubai Creek Office Fit-Out in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/dubai-creek-office-fit-out',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
