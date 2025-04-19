"use client";

import * as React from "react";
import Image from "next/image";
import { aboutText, aboutImages } from "@/data";

export default function FullscreenCarousel() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center text-center py-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          About Africa's Blockchain Club
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
          We are a community-driven organization dedicated to advancing Web3 technology and fostering innovation in
          the blockchain space across Africa.
        </p>
      </div>

      {/* Islands Section */}
      <div className="flex justify-center gap-8 px-8">
        {aboutText.map((item, index) => {
          const [isHovered, setIsHovered] = React.useState(false);

          return (
            <div
              key={index}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`min-w-[400px] max-w-[600px] h-full flex flex-col items-center justify-center snap-start pt-16 pb-10 rounded-2xl overflow-hidden border-2 border-blue-500 shadow-[0_0_30px_10px_rgba(59,130,246,0.5)] transition-all duration-300 ease-in-out ${
                isHovered ? "bg-amber-50 text-black" : "bg-transparent text-white"
              }`}
            >
              <div className="mb-6 rounded-full overflow-hidden">
                <Image
                  src={isHovered ? aboutImages[index].inverted : aboutImages[index].src}
                  alt={aboutImages[index].alt}
                  width={aboutImages[index].width}
                  height={aboutImages[index].height}
                  className="rounded-full transition duration-300 ease-in-out"
                />
              </div>

              <dt className="text-5xl font-Plush text-center transition-colors duration-300">
                {item.title1}
              </dt>
              <dt className="text-5xl font-Plush text-center mt-4 transition-colors duration-300">
                {item.title2}
              </dt>
              <dd className="mt-6 text-xl font-mono text-center max-w-xl px-4 transition-colors duration-300">
                _{item.description}_
              </dd>
            </div>
          );
        })}
      </div>
    </div>
  );
}
