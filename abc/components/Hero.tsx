"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { heroImage } from "@/data";

export default function Hero() {
  return (
    <div className="relative overflow-hidden h-screen flex flex-col justify-start">
      <div className="relative max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8 h-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-full">
          
          {/* Text Section */}
          <div className="text-center lg:text-left flex flex-col justify-center w-[40vw] h-[67vw] relative" style={{ transform: "translateX(-80px)" }}>
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
          </div>

          {/* Buttons Section */}
<div className="relative w-[40vw] h-[67vw]">
  <div className="absolute top-[55%] left-[40%] transform -translate-y-1/2">
    <div className="flex gap-4">
      <Link href="/#events">
        <Button size="lg" className="bg-[#4A4A4A] hover:bg-[#D8CFC4] text-white">
          Get Started
        </Button>
      </Link>
      <Link href="/#events">
        <Button size="lg" variant="outline" className="bg-[#4A4A4A] hover:bg-[#D8CFC4] text-white">
          Learn More
        </Button>
      </Link>
    </div>
  </div>
</div>


          {/* Image Section */}
          <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[75vw] h-[75vw] flex items-center justify-center">
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
  );
}
