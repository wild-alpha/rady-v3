import Navbar from "@/components/Navbar";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import PHeroSection from "./PHeroSection";
import PProjects from "./PProjects";
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
      <PProjects />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
