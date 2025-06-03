import { Button } from "@/components/ui/button";
import TechParticles from "@/components/ui/tech-particles";


export default function FutureSection(){
    return(
        
      <section className="relative bg-neutral-900 py-20 text-white overflow-hidden">
      <div className="absolute inset-0">
        <TechParticles />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-mono text-3xl font-bold md:text-4xl">The Future is Decentralized</h2>
          <p className="mb-8 text-lg text-neutral-300">
            Africa is positioned to lead the next wave of blockchain innovation, leapfrogging traditional systems and
            building a more inclusive financial future.
          </p>
          <Button className="bg-amber-500 text-white hover:bg-amber-600">Explore Our Vision</Button>
        </div>
      </div>
    </section>
    )
}