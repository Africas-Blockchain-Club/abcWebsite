"use client";

import Learn from "@/components/ui/EducationalResourcesSection";
import Collaborate from "@/components/ui/Collaborate"; 
import Hero from "@/components/Hero";
import Logos from "@/components/logos";
import ProjectsDrawerMobile from "@/components/ui/FilesComponentMobile";
import ProjectsDrawerDesktop from "@/components/ui/FilesComponentDesktop";
import About1 from "./About1/page";
import UpcomingEvents from "@/components/upcoming-events";
import PageLoader from "@/components/animations/page-loader";
import BuildOnBlockchain from "@/components/BuildOnBlockchain";
import Carousel from "@/components/Team";
import PartnersSection from "@/components/partners";
import Cursor from "@/components/CircularCursor";
import useIsMobile from "@/hooks/useIsMobile";

export default function Home() {
  const isMobile = useIsMobile();
  return (
    <div className="relative">
\      <div className="hidden md:block">
        <Cursor/>
      </div>
      
      <main className="relative z-0 overflow-x-hidden" style={{ background: "#2B2B2B" }}>
        <section className="relative">
          <Hero />
        </section>

        <section className="px-2">
          <Logos />
        </section>

        {/* About Section */}
        <section className="px-2 py-8 md:py-12">
          <About1 />
        </section>

        {/* Team Section */}
        <section id="team" className="px-2 py-8 md:py-12">
          <Carousel/>
        </section>

        {/* Projects Section */}
        {isMobile ? <ProjectsDrawerMobile/> : <ProjectsDrawerDesktop/>}

        {/* Learn Section */}
        <section id="learn" className="px-2 py-8 md:py-12">
          <Learn />
        </section>

        {/* Get Started Section */}
        <section id="getStarted" className="px-2 py-8 md:py-12">
          <BuildOnBlockchain />
        </section>

        {/* Events Section */}
        <section id="events" className="px-2 py-8 md:py-12">
          <div className="container mx-auto">
            <UpcomingEvents />
          </div>
        </section>

        {/* Partners Section */}
        {/* <section className="px-2 py-8 md:py-12">
          <PartnersSection/>
        </section> */}

        {/* Contact Section */}
        {/* <section id="contact" className="px-2 py-8 md:py-12">
          <Collaborate />
        </section> */}
      </main>

      {/* Mobile-specific styles */}
      <style jsx global>{`
        /* Improve touch targets for mobile */
        @media (max-width: 768px) {
          button, 
          a, 
          [role="button"] {
            min-height: 44px;
            min-width: 44px;
          }
          
          /* Smooth scrolling for anchor links */
          html {
            scroll-behavior: smooth;
          }
          
          /* Prevent horizontal scroll */
          body {
            overflow-x: hidden;
          }
        }
        
        /* Optimize animations for mobile performance */
        @media (max-width: 768px) and (prefers-reduced-motion: no-preference) {
          .reduce-motion-on-mobile {
            animation-duration: 0.5s !important;
            transition-duration: 0.3s !important;
          }
        }
      `}</style>
    </div>
  );
}