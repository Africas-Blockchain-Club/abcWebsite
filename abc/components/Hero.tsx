"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { heroImage } from "@/data";

export default function Hero() {
  return (
    <div className="relative overflow-hidden h-screen flex flex-col justify-start">
      {/* Orange Circle */}
      <div className="absolute top-[70%] left-1/2 w-[50vw] h-[50vw] bg-orange-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0" />

      <div className="relative max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8 h-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-full">
          

          <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[50vw] h-[50vw] flex items-center justify-center">
  <Image
    src={heroImage.src}
    alt={heroImage.alt}
    width={heroImage.width}
    height={heroImage.height}
    priority
  />
</div>

        </div>
      </div>
    </div>
  );
}
