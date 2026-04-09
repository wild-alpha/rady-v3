import '../globals.css';

export const metadata = {
  title: "Damac Lagoons townhouse – Interior Fit Out ",
  description:
    "Damac Lagoons townhouse – Interior Fit Out in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/damac-hills-townhouse',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
