import '../globals.css';

export const metadata = {
  title: "Commercial Fit-out Dubai - Modern Interior Fit-out",
  description:
    "Commercial Fit-out in Dubai by RadyInteriors. Modern, classic, or creative styles, beautiful spaces made for you. Call now to start your project!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/commercial-fit-outi',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
