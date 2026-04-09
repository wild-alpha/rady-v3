import Navbar from "@/components/Navbar";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import PHeroSection from "./PHeroSection";
import AreasGallerySection from "./AreasGallerySection";
import Footer from "@/components/Footer";

export default async function ProjectsPage({ searchParams }) {
  const params = await searchParams;
  const category = params?.category || "All";

  return (
    <main className="relative flex min-h-screen flex-col bg-[#121212]">
      <Navbar className="absolute top-0 z-10 w-screen" />

      <PHeroSection />

      <CallButton />
      <WhatsAppButton />

      <AreasGallerySection initialCategory={category} />

      <Footer />
    </main>
  );
}