import '../globals.css';

export const metadata = {
  title: "Arabian Ranches Villa interior fit-out Dubai",
  description:
    " Arabian Ranches Villa interior fit-out in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/arabian-ranches-villa-interior-fit-out',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
