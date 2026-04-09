import '../globals.css';

export const metadata = {
  title: "F&B Interior Fit Out Company in Dubai | RadyInterior",
  description:
    "Transform your restaurant or café with RadyInterior expert F&B interior fit out service. We design stylish, functional spaces for your brand.",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/retail-interior-fit-out',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
