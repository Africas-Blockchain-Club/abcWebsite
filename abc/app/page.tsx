"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navItems } from "@/data";
import Learn from "@/components/ui/EducationalResourcesSection";
import Collaborate from "@/components/ui/Collaborate"; 
import Team from "@/components/Team";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Logos from "@/components/logos";
import Testimonials from "@/components/aWordFromOurSponsor";
import ProjectsDrawer from "@/components/ui/files";
import ImageTextCard from "@/components/ui/ImageTextCard";
import Footer from "@/components/ui/footer";
import Timeline from "@/components/ui/blockchain-timeline";
import SectionDivider from "@/components/ui/SectionDivider";
import Terms from "@/components/ui/blockchain-terms";
import Modal from "@/components/ui/blockchain-modal";
import Cube from "@/components/ui/blockchain-cube";
import Block from "@/components/ui/blockchain-blocks";
import Papers from "@/components/ui/newsPaper";




export default function Home() {
  const [showFloatingImage, setShowFloatingImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowFloatingImage(scrollY > 250); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <main className="relative z-0" style={{ background: "#2B2B2B" }}>
        <Hero />
        <Logos/>
        <Timeline/>
        {/* <Terms/> */}
        {/* <Papers/> */}
        {/* <Modal/> */}
        {/* <Cube/> */}
        {/* <Block/> */}

      

<div id="team">
  <Team />
</div>



<div id="about">
  <About />
</div>

<div id="testimonials" className="pb-40 pt-20">  
  <Testimonials />
</div>

<div id="projects" className="pb-40 pt-20"> 
  <ProjectsDrawer />
</div>

<div id="learn">
  <Learn />
</div>

<div id="contact">
  <Collaborate />
</div>

<ImageTextCard />


<Footer />


        {/* Floating image after threshold */}
        <div
          className={`fixed bottom-[-20px] right-[-10px] z-[9999] transition-opacity duration-150 ease-out ${
            showFloatingImage ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
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
