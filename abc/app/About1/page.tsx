import { Button } from "@/components/ui/button";
import { Link, School, Trophy, Users } from "lucide-react";


export default function About1() {
    return(
      <section id="about" className="bg-black/20 py-10">
        <div className="container mx-auto px-0">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="mb-6 font-mono text-4xl font-bold md:text-5xl">Driving Web3 Adoption Across Africa</h2>
            <p className="mb-8 text-lg text-white">
              Africa's Blockchain Club (ABC) is a community dedicated to accelerating blockchain technology adoption
              throughout South Africa and the entire African continent. We bring together developers, entrepreneurs, and
              enthusiasts to build the future of Web3 in Africa.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-gray-500/30 p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Community Building</h3>
                <p className="text-sm text-white">
                  Fostering a vibrant ecosystem of blockchain enthusiasts and developers
                </p>
              </div>
              <div className="rounded-lg bg-gray-500/30 p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white">
                  <School className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Education & Training</h3>
                <p className="text-sm text-white">Providing resources and workshops to build blockchain skills</p>
              </div>
              <div className="rounded-lg bg-gray-500/30 p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white">
                  <Trophy className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Innovation</h3>
                <p className="text-sm text-white">
                  Building projects and winning hackathons to showcase African talent
                </p>
              </div>
            </div>
            <div className="pt-10">
              <Link href="/about">
              <Button variant="outline" className="bg-black text-white items-center hover:bg-white/80 hover:text-black">Learn more About Us</Button>
              </Link>
            </div>
          </div>
        </div>
    </section>
    );
}