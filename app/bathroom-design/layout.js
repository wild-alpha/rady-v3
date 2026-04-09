import '../globals.css';

export const metadata = {
  title: "Bathroom Interior Design UAE - Modern Interior Design",
  description:
    "Bathroom interior design in Dubai by Rady Interior. Modern, classic, or creative styles, beautiful spaces made for you. Call now to start your project!",
  metadataBase: new URL('https://radyinterior.ae/'),
  alternates: {
    canonical: '/bathroom-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
