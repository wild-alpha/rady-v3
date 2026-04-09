import Navbar from "@/components/Navbar";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import PHeroSection from "./PHeroSection";
import ProjectsGallerySection from "./ProjectsGallerySection"
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-[#121212]">
      {/* Sticky Top Navbar */}
      <Navbar className="absolute top-0 z-10 w-screen" />

      {/* Hero Image Section */}
      <PHeroSection />

      {/* Floating Action Buttons */}
      <CallButton />
      <WhatsAppButton />

      {/* Projects Grid Section */}
      <ProjectsGallerySection />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
