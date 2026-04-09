import '../globals.css';

export const metadata = {
  title: "Restaurant Fit-out Dubai - Modern Interior Design",
  description:
    "Luxury Restaurant Fit-out in Dubai by RadyInteriors. Modern, classic, or creative styles, beautiful spaces made for you. Call now to start your project!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/restaurant-fit-out',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
