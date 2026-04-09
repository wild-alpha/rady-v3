import Navbar from "@/components/Navbar";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Fitout from "@/components/Fitout";
import DesignProjects from "@/components/DesignProjects";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Blogs from "@/components/Blogs";
import ContactUs from "@/components/ContactUs";

import Footer from "@/components/Footer";



export default function Home() {
  return (
    <>
    <main className="relative flex flex-col min-h-screen bg-[#121212]">
        <Navbar className="absolute top-0 z-10 w-screen" />
       
        <HeroSection />
        <AboutSection />
        <Fitout />
        <DesignProjects />
        <Features />
        <Testimonials />
        <Faq />
        <Blogs />
       
        <div className="px-20">
         <ContactUs />
         </div>
         
         <div className="bg-[#f5ede5]">
          <Footer />

         </div>

    </main>

    </>
  );
}