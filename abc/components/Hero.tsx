"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { heroImage } from "@/data";

export default function Hero() {
  return (
    <div className="relative overflow-hidden px-40 py-4">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Section */}
          <div className="text-center lg:text-left " style={{ transform: "translateX(-80px)" }}>
            <div className="inline-block">
              <p className="mb-4 inline-block backdrop-blur-lg bg-orange-100/50 text-white px-4 py-1.5 rounded-full text-sm font-Plush">
                The Future of Web3 in Africa
              </p>
            </div>

            <h1 className="text-4xl font-Plush tracking-tight sm:text-5xl lg:text-6xl mb-4 bg-clip-text text-white">
              Building Africa&apos;s
              <span className="block">Blockchain Future</span>
            </h1>
            <p className="mt-4 text-xl max-w-3xl text-white">
              Join our community of passionate developers and innovators shaping the decentralized web across Africa.
            </p>
            
            <div className="mt-10 flex gap-4 justify-center lg:justify-start">
  <Link href="/#events" passHref>
    <Button
      size="lg"
      className="bg-black text-white hover:bg-yellow-500 transition-transform duration-500 hover:scale-105 animate-pulse cursor-pointer"
    >
      Get Started
    </Button>
  </Link>
  <Link href="/#events" passHref>
    <Button
      size="lg"
      className=" text-white hover:bg-yellow-500 transition-transform duration-500 hover:scale-105 animate-pulse cursor-pointer"
    >
      Learn More
    </Button>
  </Link>
</div>


          </div>



          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
          <div className="absolute top-[50%] -translate-y-1/2 w-[40vw] h-[40vw] flex ">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              width={heroImage.width}
              height={heroImage.height}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
