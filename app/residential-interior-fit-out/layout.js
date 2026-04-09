import '../globals.css';

export const metadata = {
  title: "Residential Interior Fit Out | Fit-Out Contractors in Dubai, UAE",
  description:
    "With fit out contractors upgrade your villa or home, Rady Interior give residential interior fit-out services in Dubai, Sharjah and the UAE.",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/residential-interior-fit-out/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
