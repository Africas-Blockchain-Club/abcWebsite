import Image from "next/image";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ContactUs from "@/components/ui/contactUs";
import Carousel from "@/components/ui/Carousel"; // Import the Carousel component

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

        {/* Add spacing if needed */}
        <div className="pt-32 px-8">
          <ContactUs />
        </div>

        <div className="pt-32 px-8">
          <Carousel /> {/* Call the Carousel component here */}
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
