import Image from "next/image";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Learn from "@/components/ui/EducationalResourcesSection";
import Collaborate from "@/components/ui/Collaborate"; 
import Team from "@/components/Team";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Testimonials from "@/components/aWordFromOurSponsor";
import ProjectsDrawer from "@/components/ui/files";
import MakeUpCode from "@/components/ui/codeMakeUp";
import ImageTextCard from "@/components/ui/ImageTextCard";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="relative">
      <main className="relative z-0" style={{ background: "#716D67" }}>
        {/* Circle Background + Stronger Fade */}
        <div className="absolute top-[9.5%] left-1/2 w-[80vw] h-[80vw] bg-yellow-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1B00] via-[#1B1B1B99] to-[#1B1B1B]" />
        </div>
        {/* Floating Nav stays on top */}
        <FloatingNav navItems={navItems} />

        <div className="px-8">
          <Hero />
        </div>

          <Team />
          <About />
          <div className="pb-40 pt-20">  
            <Testimonials />
          </div>
          <div className="pb-40 pt-20"> 
            <ProjectsDrawer />
          </div>
          <Learn />
          {/* <MakeUpCode /> */}
          <Collaborate />

          <ImageTextCard />

          <Footer />
      </main>
    </div>
  );
}
