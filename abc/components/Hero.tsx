'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { heroImage } from '@/data';
import BlockchainHeroBg from './ui/blockchain.-hero-bg';
import BlockchainNetwork from './ui/blockchain-network';
import { FloatingNav } from './ui/FloatingNav';
import FloatingElements from './animations/floating-elements';


const navItems = [
  { name: 'About', link: '/about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
  { name: 'Media', link: '/media' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      <FloatingNav navItems={navItems} />
      <BlockchainHeroBg />
      <FloatingElements />


      <div className="container mx-auto grid grid-cols-1 items-center px-2 py-6 md:grid-cols-2 md:py-18 lg:py-20">
        
        <div className="space-y-4 pt-2">
   
          <div className="inline-block rounded-full bg-neutral-600/80 px-4 py-1 text-s font-medium">
            The Future of Web3 in Africa
          </div>

          <h1 className="font-mono text-5xl font-bold leading-tight md:text-6xl lg:text-7xl max-w-[20ch]">
            Building <br />
            Africa&apos;s <br />
            Blockchain <br />
            Future
          </h1>
          <p className="max-w-2xl text-lg text-neutral-200">
            Join our community of passionate developers and innovators shaping the decentralized web across Africa.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="bg-black text-white hover:bg-white/80 hover:text-black">Get Started</Button>
            <Button variant="outline" className="bg-black text-white hover:bg-white/80 hover:text-black">
              Learn More
            </Button>
          </div>
        </div>


        <div className="relative mt-10 md:mt-0">
          <BlockchainNetwork className="w-full h-full" />
          
          <div className="absolute top-[65%] left-[-10%] w-[990px] -translate-y-1/2 rounded-full">
            <Image
              src="/header/ABC.png"
              alt="Africa's Blockchain Club Logo"
              width={500}
              height={500}
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
