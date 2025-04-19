import Image from "next/image";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ContactUs from "@/components/ui/contactUs";
import Carousel from "@/components/ui/Carousel"; 
import SecretElephant from "@/components/secretElephant"; 
import Team from "@/components/Team";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="relative">
      {/* Background with Code Snippet */}
      

      <main
        className=""
        style={{
          background: "#1B1B1B",
          minHeight: "300vh",
        }}
      >
        <FloatingNav navItems={navItems} />

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


        <div className="code-bg pt-32 px-8">
        <pre className="text-white text-xs md:text-sm font-mono code-snippet">
          {`pragma solidity ^0.8.0;

contract MySmartContract {
    // MIT License
    string public license = "MIT";
    // Other contract declarations...
}`}
        </pre>
      </div>
      </main>
    </div>
  );
}
