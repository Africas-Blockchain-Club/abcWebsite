import FadeIn from "@/components/animations/fade-in";
import ScaleIn from "@/components/animations/scale-in";
import StaggerContainer from "@/components/animations/stagger-container";
import BlockchainPattern from "@/components/blockchain-pattern";
import { Button } from "@/components/ui/button";
import { Code, Globe, Lightbulb, Link, School, Trophy, Users } from "lucide-react";
import Image from "next/image";


export default function About1() {
    return(
      <section id="about" className="relative overflow-hidden py-20 text-white min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg_section3.jpg"
            alt="African Blockchain Innovation Background"
            fill
            className="object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/60"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          <BlockchainPattern className="opacity-15" />

          {/* Floating Tech Icons */}
          <div className="absolute top-20 left-10 animate-bounce opacity-30">
            <Users className="h-14 w-14 text-amber-500" />
          </div>
          <div className="absolute top-32 right-20 animate-bounce opacity-25" style={{ animationDelay: "1s" }}>
            <School className="h-12 w-12 text-amber-400" />
          </div>
          <div className="absolute bottom-32 left-20 animate-bounce opacity-35" style={{ animationDelay: "2s" }}>
            <Trophy className="h-16 w-16 text-amber-300" />
          </div>
          <div className="absolute bottom-20 right-10 animate-bounce opacity-30" style={{ animationDelay: "0.5s" }}>
            <Globe className="h-18 w-18 text-amber-600" />
          </div>
          <div className="absolute top-1/2 left-16 animate-bounce opacity-25" style={{ animationDelay: "1.8s" }}>
            <Code className="h-10 w-10 text-amber-500" />
          </div>
          <div className="absolute top-1/3 right-1/4 animate-bounce opacity-35" style={{ animationDelay: "0.3s" }}>
            <Lightbulb className="h-12 w-12 text-amber-400" />
          </div>

          {/* Geometric Shapes */}
          <div className="absolute top-1/4 left-1/3 h-20 w-20 rotate-45 bg-amber-500/20 animate-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/4 h-16 w-16 rotate-12 bg-amber-400/20 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 h-14 w-14 rounded-full bg-amber-300/20 animate-pulse"
            style={{ animationDelay: "0.8s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/2 h-12 w-12 rotate-45 bg-amber-600/20 animate-pulse"
            style={{ animationDelay: "2.2s" }}
          ></div>

          {/* Connecting Lines */}
          <div className="absolute top-1/4 left-1/4 w-28 h-0.5 bg-amber-500/30 rotate-45 animate-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/3 w-20 h-0.5 bg-amber-400/30 rotate-12 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>


        <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="mb-6 font-mono text-4xl font-bold md:text-5xl">Driving Web3 Adoption Across Africa</h2>
            <p className="mb-8 text-lg text-white">
              {`Africa's Blockchain Club (ABC) is a community dedicated to accelerating blockchain technology adoption
              throughout South Africa and the entire African continent. We bring together developers, entrepreneurs, and
              enthusiasts to build the future of Web3 in Africa.`}
            </p>
            <StaggerContainer staggerDelay={200} className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <ScaleIn delay={200}>
            <div className="rounded-lg bg-black/30 backdrop-blur-sm border border-amber-500/20 p-8 text-center hover:bg-black/40 transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Community Building</h3>
                <p className="text-sm text-white">
                  Fostering a vibrant ecosystem of blockchain enthusiasts and developers
                </p>
              </div>
              </ScaleIn>
            <ScaleIn delay={400}>
              <div className="rounded-lg bg-black/30 backdrop-blur-sm border border-amber-500/20 p-8 text-center hover:bg-black/40 transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white">
                  <School className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Education & Training</h3>
                <p className="text-sm text-white">Providing resources and workshops to build blockchain skills</p>
              </div>
              </ScaleIn>
            <ScaleIn delay={600}>
              <div className="rounded-lg bg-black/30 backdrop-blur-sm border border-amber-500/20 p-8 text-center hover:bg-black/40 transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white">
                  <Trophy className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Innovation</h3>
                <p className="text-sm text-white">
                  Building projects and winning hackathons to showcase African talent
                </p>
              </div>
              </ScaleIn>
              </StaggerContainer>
            <div className="pt-10">

              <Button variant="outline" className="bg-black text-white items-center hover:bg-white/80 hover:text-black">Learn more About Us</Button>
              
            </div>
          </div>
          </FadeIn>
        </div>
    </section>
    );
}