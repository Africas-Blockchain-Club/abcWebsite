"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { heroImage } from "@/data";
import BlockchainHeroBg from "./ui/blockchain.-hero-bg";
import BlockchainNetwork from "./ui/blockchain-network";

export default function Hero() {
  return (
<section className="relative overflow-hidden bg-neutral-800 text-white">
        <BlockchainHeroBg />
        <div className="container mx-auto grid grid-cols-1 items-center px-4 py-16 md:grid-cols-2 md:py-24 lg:py-32">
          <div className="z-10 space-y-6">
            <div className="inline-block rounded-full bg-neutral-600/80 px-4 py-1 text-sm font-medium">
              The Future of Web3 in Africa
            </div>
            <h1 className="font-mono text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Building <br />
              Africa&apos;s <br />
              Blockchain <br />
              Future
            </h1>
            <p className="max-w-md text-lg text-neutral-200">
              Join our community of passionate developers and innovators shaping the decentralized web across Africa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-black text-white hover:bg-black/80">Get Started</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative mt-10 md:mt-0">
            <BlockchainNetwork className="w-full h-full"/>
            <div className="absolute right-0 top-[55%]-[75vw] w-[75vw] -translate-y-1/2 rounded-full">
            <Image
              src="/header/ABC.png"
              alt="Africa's Blockchain Club Logo"
              width={500}
              height={500}
              className="w-full h-auto"
              priority
              />
          </div>
          </div>
        </div>
      </section>
  );
}
