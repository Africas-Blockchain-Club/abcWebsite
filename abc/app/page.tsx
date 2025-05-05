import Image from "next/image";
import { navItems } from "@/data";
import Learn from "@/components/ui/EducationalResourcesSection";
import Collaborate from "@/components/ui/Collaborate"; 
import Team from "@/components/Team";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Testimonials from "@/components/aWordFromOurSponsor";
import ProjectsDrawer from "@/components/ui/files";
import ImageTextCard from "@/components/ui/ImageTextCard";
import Footer from "@/components/ui/footer";
import { aboutImages } from "@/data";


export default function Home() {
  return (
    <div className="relative">
      <main className="relative z-0" style={{ background: "#1B1B1B" }}>
        
        {/* Floating Nav stays on top */}

          <Hero />
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
          <div className="fixed bottom-[-20px] right-[-10px] flex items-center space-x-2 z-[9999]">
  <div className="w-52 h-52 relative">
    <Image
      src="/header/ABC.png"
      alt="ABC Spirit Animal"
      fill
      className="object-contain"
    />
  </div>
</div>


      </main>
    </div>
  );
}
