"use client";

import React from "react";
import { teamImages } from "@/data";
import Image from "next/image";
import BlockchainBlocks from "./ui/blockchain-blocks";

export default function Team() {
  return (
    
    <div className="relative w-full overflow-hidden">
      <BlockchainBlocks className="h-full w-full" />
      {/* Giant Text Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-start ml-[50px] pointer-events-none py-[20vh] pt-[43vh]">
  <h2 className="text-white text-6xl md:text-8xl font-text opacity-90 drop-shadow-lg leading-tight">
    <span>Meet the</span>
    <br />
    <span>Team</span>
  </h2>
</div>
      {/* Dark Overlay over Carousel */}
      <div className="absolute inset-0 opacity-40 z-0 pointer-events-none" />

      {/* Carousel with Skew and Perspective */}
      <div className="relative perspective-[800px] z-0">
        <div className="skewed-carousel animate-carousel-fast">
          {[...teamImages, ...teamImages].map((img, i) => (
            <div
            key={i}
            className="relative flex-shrink-0 mx-3 w-[270px] h-[270px]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
          <BlockchainBlocks className="h-full w-full" />
      </div>
    </div>
  );
}
