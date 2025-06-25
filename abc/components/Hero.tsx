'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import BlockchainHeroBg from './ui/blockchain.-hero-bg';
import BlockchainNetwork from './ui/blockchain-network';
import FloatingElements from './animations/floating-elements';
import FadeIn from './animations/fade-in';
import ScaleIn from './animations/scale-in';
import StaggerContainer from './animations/stagger-container';
import SlideIn from './animations/slide-in';
import Link from 'next/link';


export default function Hero() {
  return (
    <section className="relative overflow-hidden text-whiteb px-4 flex-col md:flex-row">
    
      <BlockchainHeroBg />
      <FloatingElements />


      <div className="container mx-auto grid grid-cols-1 items-center px-2 py-6 md:grid-cols-2 md:py-18 lg:py-20">
      <FadeIn direction="left" delay={300}>
        <div className="space-y-4 pt-2">
        <ScaleIn delay={500}>
          <div className="inline-block rounded-full bg-neutral-600/80 px-4 py-1 text-s font-medium">
            The Future of Web3 in Africa
          </div>
          </ScaleIn>
          <FadeIn direction="up" delay={700}>
          <h1 className="font-mono text-5xl font-bold leading-tight md:text-6xl lg:text-7xl max-w-[20ch]">
            Building <br />
            Africa&apos;s <br />
            Blockchain <br />
            Future
          </h1>
          </FadeIn>
          <FadeIn direction="up" delay={900}>
          <p className="max-w-2xl text-lg text-neutral-200">
            Join our community of passionate developers and innovators shaping the decentralized web across Africa.
          </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={1100}>
          <div className="flex flex-wrap gap-4">
            
            <Button variant="outline" className="bg-black text-white hover:bg-white/80 hover:text-black">
            <Link href={"/about"}> Learn More</Link>
            </Button>
          </div>
          </FadeIn>

        </div>
        </FadeIn>

        <SlideIn direction="right" delay={400}>
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
        </SlideIn>
      </div>
    </section>
  );
}
