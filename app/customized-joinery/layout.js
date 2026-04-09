import '../globals.css';

export const metadata = {
  title: "Customized Joinery services Dubai - Modern Interior Design",
  description:
    "Customized Joinery services in Dubai by RadyInteriors. Modern, classic, or creative styles, beautiful spaces made for you. Call now to start your project!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/customized-joinery',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
