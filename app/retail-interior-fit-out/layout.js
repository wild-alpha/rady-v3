import '../globals.css';

export const metadata = {
  title: "Retail Fit Out Company in Dubai | Retail Interior Fit Out Company",
  description:
    "Create an attractive commercial space with expert retail interior fit out service in Dubai. RadyInterior designs stylish retail environments.",
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
