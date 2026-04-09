import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "./Components/Hero";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import SBody from "./Components/SBody";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>

   
      <div className="relative flex flex-col min-h-screen bg-[#121212]">
        <Navbar />
        <Hero />
        <WhatsAppButton />
        <CallButton />
        <SBody />
        
        <Footer />
      </div>
    </>
  );
}
