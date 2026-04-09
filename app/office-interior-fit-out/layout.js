import '../globals.css';

export const metadata = {
  title: "Office Fit Out Dubai | Office Fit Out Company in Sharjah, UAE",
  description:
    "Get office interior fit out services in Dubai and Sharjah. RadyInterior creates office fit-out inspiring workspaces customized to your need.",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/office-interior-fit-out/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
