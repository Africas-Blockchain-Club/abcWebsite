"use client";

import Learn from "@/components/ui/EducationalResourcesSection";
import Collaborate from "@/components/ui/Collaborate"; 
import Hero from "@/components/Hero";
import Logos from "@/components/logos";
import ProjectsDrawer from "@/components/ui/files";
import About1 from "./About1/page";
import UpcomingEvents from "@/components/upcoming-events";
import PageLoader from "@/components/animations/page-loader";
import BuildOnBlockchain from "@/components/BuildOnBlockchain";
import Carousel from "@/components/Team";
import PartnersSection from "@/components/partners";


export default function Home() {


  return (
    <div className="relative">
      <PageLoader />
      <main className="relative z-0" style={{ background: "#2B2B2B" }}>
          <Hero />
          <Logos/>
          <About1 />
        <div id="team">
          <Carousel/>
        </div>
        <div id="projects" className="pb-8 pt-0"> 
          <ProjectsDrawer />
        </div>
        <div id="learn" className="pb-8">
          <Learn />
        </div>
        <div id="getStarted">
          <BuildOnBlockchain />
        </div>
        <div id="events" className="container mx-auto py-10">
          <UpcomingEvents />
        </div>
        <div>
          <PartnersSection/>
        </div>
        <div id="contact">
        <Collaborate />
        </div>
      </main>
    </div>
  );
}
