import Image from "next/image";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Learn from "@/components/ui/learn";
import Carousel from "@/components/ui/Collaborate"; 
import SecretElephant from "@/components/secretElephant"; 
import Team from "@/components/Team";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Testimonials from "@/components/aWordFromOurSponsor";
import ProjectsDrawer from "@/components/ui/files";
import MakeUpCode from "@/components/ui/codeMakeUp";

export default function Home() {
  return (
    <div className="relative">
      <main className="relative z-0" style={{ background: "#1B1B1B" }}>
        {/* Circle Background + Stronger Fade */}
        <div className="absolute top-[11%] left-1/2 w-[80vw] h-[80vw] bg-yellow-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1B00] via-[#1B1B1B99] to-[#1B1B1B]" />
        </div>
        {/* Floating Nav stays on top */}
        <FloatingNav navItems={navItems} />

        <div className="px-8">
          <Hero />
        </div>

          <Carousel />
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
      </main>
    </div>
  );
}
