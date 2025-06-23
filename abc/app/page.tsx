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
import About1 from "./About1/page";
import FutureSection from "./FutureSection/page";
import UpcomingEvents from "@/components/upcoming-events";
import { Button } from "@/components/ui/button";
import CodeSnippet from "@/components/code-snippet";
import PageLoader from "@/components/animations/page-loader";




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
      <PageLoader />
      <main className="relative z-0" style={{ background: "#2B2B2B" }}>
        <Hero />
        <Logos/>
        <About1 />
      

      <div id="team">
        <Team />
      </div>

      <div id="projects" className="pb-10 pt-0"> 
        <ProjectsDrawer />
      </div>

      <div id="learn" className="pb-8">
        <Learn />
      </div>

        <section className="bg-black/30 py-16">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                      <h2 className="mb-6 font-mono text-5xl font-bold">Build on Blockchain</h2>
                      <p className="mb-4 text-white">
                        Our community develops smart contracts and decentralized applications to solve real-world problems in
                        Africa.
                      </p>
                      <p className="mb-6 text-white">
                        Join our weekly coding sessions and learn how to write secure, efficient blockchain code with
                        experienced mentors.
                      </p>
                      <Button className="bg-amber-500 text-white hover:bg-amber-600">Join Developer Community</Button>
                    </div>
                    <div>
                      <CodeSnippet />
                    </div>
                  </div>
                </div>
              </section>
        <section id="events" className="bg-neutral-800 py-20">
                <div className="container mx-auto">
                  <UpcomingEvents />
                </div>
            </section>

            <div id="contact">
              <Collaborate />
            </div>

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
