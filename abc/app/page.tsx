import Image from "next/image";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ContactUs from "@/components/ui/contactUs";
import Carousel from "@/components/ui/Carousel"; 
import SecretElephant from "@/components/secretElephant"; 
import Team from "@/components/Team";
import About from "@/components/About";
import Hero from "@/components/Hero";
import ProjectsDrawer from "@/components/ui/files";
import MakeUpCode from "@/components/ui/codeMakeUp";

export default function Home() {
  return (
    <div className="relative">
      <main className="relative z-0" style={{ background: "#1B1B1B" }}>
{/* Circle Background + Stronger Fade */}
<div className="absolute top-[16%] left-1/2 w-[80vw] h-[80vw] bg-orange-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1B00] via-[#1B1B1B99] to-[#1B1B1B]" />
</div>
        {/* Floating Nav stays on top */}
        <FloatingNav navItems={navItems} />

        <div className="px-8">
          <Hero />
        </div>

        <div className="pt-32 px-8">
          <ContactUs />
        </div>

        <div className="pt-32 px-8">
          <Carousel />
        </div>

        <div className="pt-32 px-8">
          <Team />
        </div>

        <div className="pt-32 px-8">
          <About />
        </div>

        <div className="pt-32 px-8">
          <ProjectsDrawer />
        </div>

        <div className="pt-32 px-8">
          <MakeUpCode />
        </div>
      </main>
    </div>
  );
}
