import '../globals.css';

export const metadata = {
  title: "Majlis Interior Design Dubai - Modern Interior Design",
  description:
    "Majlis interior design in Dubai by RadyInteriors. Modern, classic, or creative styles, beautiful spaces made for you. Call now!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/majlis-interior-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
