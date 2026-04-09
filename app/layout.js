import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Interior Design Dubai - Luxury Interior Fit Out Company, UAE",
  description:
    "Luxury interior design and fit-out company in Dubai & Sharjah. Villas, offices, retail, hospitality and turnkey execution across the UAE.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://radyinterior.ae/wp-content/plugins/elementor/assets/css/frontend.min.css"
        />
        <link
          rel="stylesheet"
          href="https://radyinterior.ae/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://radyinterior.ae/wp-content/uploads/elementor/css/global.css"
        />
        <link
          rel="stylesheet"
          href="https://radyinterior.ae/wp-content/themes/hello-elementor/style.min.css"
        />
        <link
          rel="stylesheet"
          href="https://radyinterior.ae/wp-content/uploads/elementor/css/post-5.css?ver=1771751588"
        />
      </head>

      <body className="elementor-default elementor-page">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}