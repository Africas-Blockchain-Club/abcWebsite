'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { heroImage } from '@/data';
import BlockchainHeroBg from './ui/blockchain.-hero-bg';
import BlockchainNetwork from './ui/blockchain-network';
import { FloatingNav } from './ui/FloatingNav';
import WavyLines from "@/components/ui/wavylines";


const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden  text-white">
      <FloatingNav navItems={navItems} />
      <BlockchainHeroBg />

      <div className="container mx-auto grid grid-cols-1 items-center px-2 py-6 md:grid-cols-2 md:py-18 lg:py-20">
        <div className="z-10 space-y-6">
          <div className="inline-block rounded-full bg-neutral-600/80 px-4 py-1 text-sm font-medium">
            The Future of Web3 in Africa
          </div>
          <h1 className="font-mono text-5xl font-bold leading-tight md:text-6xl lg:text-7xl max-w-[20ch]">
            Building <br />
            Africa&apos;s <br />
            Blockchain <br />
            Future
          </h1>
          <p className="max-w-xl text-lg text-neutral-200">
            Join our community of passionate developers and innovators shaping the decentralized web across Africa.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="bg-black text-white hover:bg-white/80 hover:text-black">Get Started</Button>
            <Button variant="outline" className="bg-black text-white hover:bg-white/80 hover:text-black">
              Learn More
            </Button>
          </div>
        </div>
        {/* <WavyLines 
  lineCount={7}
  height={100}
  amplitude={25}
  frequency={0.015}
  lineWidth={1}
/> */}


        <div className="relative mt-10 md:mt-0">
          <BlockchainNetwork className="w-full h-full" />
          
          <div className="absolute top-[35%] right-[-60px] w-[460px] -translate-y-1/2 rounded-full">
            <Image
              src="/header/ABC.png"
              alt="Africa's Blockchain Club Logo"
              width={500}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="absolute top-[55%] left-[-60px] w-[300px] -translate-y-1/2 rounded-full">
          <Image
            src="/About/whiteABC.png"
            alt="Africa's Blockchain Club Logo"
            width={400}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>
                  <BlockchainNetwork className="w-full h-full" />

        </div>
        
      </div>
    </section>
  );
}
