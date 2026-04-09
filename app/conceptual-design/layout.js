import '../globals.css';

export const metadata = {
  title: "Conceptual Design | Leading Interior Design Company In Dubai",
  description:
    "Luxury villa  interior design in Dubai by WE DO. Modern, classic, or creative styles, beautiful spaces made for you. Call now to start your project!",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/villa-interior-design-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
