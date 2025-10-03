import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#03071E]">
      <Navbar/>
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeroSection/>
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
