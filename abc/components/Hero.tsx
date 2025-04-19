"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { heroImage } from "@/data";

export default function Hero() {
  return (
    <div className="relative overflow-hidden opacity-80 via-purple-50 to-orange-50 h-screen flex flex-col justify-start">
      <div className="relative max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-full">
          <div className="text-center lg:text-left">
            <div className="inline-block">
              <p className="mb-4 inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold">
                The Future of Web3 in Africa
              </p>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#2E2E2E] to-[#4A4A4A]">
              Building Africa&apos;s
              <span className="block">Blockchain Future</span>
            </h1>
            <p className="mt-4 text-xl max-w-3xl text-gray-600">
              Join our community of passionate developers and innovators shaping the decentralized web across Africa.
            </p>
            <div className="mt-6 flex gap-4 justify-center lg:justify-start">
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

          <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[1000px] h-auto">
  <Image
    src={heroImage.src}
    alt={heroImage.alt}
    width={heroImage.width}
    height={heroImage.height}
    className="w-full h-auto relative z-10 rounded-[12px]"
    priority
  />
</div>

        </div>
        </div>
      </div>
    </div>
  );
}
