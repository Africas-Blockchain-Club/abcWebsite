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
      {/* Background with Code Snippet */}
      <main
        className=""
        style={{
          background: "#1B1B1B",
        }}
      >

        <FloatingNav navItems={navItems} />

        <div className=" px-8">
          <Hero />
        </div>

        <div className="pt-32 px-8">
          <ContactUs />
        </div>

        <div className="pt-32 px-8">
          <Carousel />
        </div>

        {/* <div className="pt-32 px-8">
          <SecretElephant />
        </div> */}
        
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
