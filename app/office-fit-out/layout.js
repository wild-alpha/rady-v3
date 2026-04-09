import '../globals.css';

export const metadata = {
  title: "Office Fit-out Services in Dubai - Modern Interior Design",
  description:
    "Office Fit-out Services in Dubai by RadyInteriors. Modern, classic, or creative styles, beautiful spaces made for you. Call now to start your project!",
  metadataBase: new URL('https://radyinterior.ae//'),
  alternates: {
    canonical: '/office-fit-out',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
