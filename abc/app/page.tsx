import Image from "next/image";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ContactUs from "@/components/ui/contactUs";
import Carousel from "@/components/ui/Carousel"; 
import SecretElephant from "@/components/secretElephant"; 
import Team from "@/components/Team";


export default function Home() {
  return (
    <div className="">
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



        {Array(100)
          .fill(null)
          .map((_, i) => (
            <p key={i}>.</p>
          ))}
      </main>
    </div>
  );
}
