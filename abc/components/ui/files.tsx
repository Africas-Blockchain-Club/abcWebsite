"use client";

import { useState } from "react";
import { projectsData } from "@/data";
import Image from "next/image";
import clsx from "clsx";

export default function ProjectsDrawer() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative w-full left-0 right-0 px-10 z-50 overflow-hidden">
      
      {/* Giant Scrolling Text - Now with smooth infinite scroll */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-0 pointer-events-none">
        <div className="scrolling-text animate-marquee-fast text-yellow-500 font-bold  whitespace-nowrap">
          {Array(4).fill("Projects & Research Papers /").map((text, i) => (
            <span key={i} className="mx-8 text-[17vw] leading-[0.8]">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Main modal moved down */}
      <div
      className="w-full bg-[#1B1B1B] flex py-10 gap-8 w-[680px] items-stretch min-h-[30vh] h-[80vh] relative z-10 rounded-xl"
      style={{
        marginTop: '4cm',
        boxShadow: `
          0 80px 160px rgba(0, 0, 0, 0.95),
          0 40px 100px rgba(0, 0, 0, 0.8),
          0 0 100px rgba(0, 0, 0, 1),
          inset 0 0 60px rgba(0, 0, 0, 0.9)
        `,
      }}
    >

        {/* Description card */}
        <div 
          className="flex-shrink-0 h-full text-white p-6 shadow-md w-[240px] flex flex-col justify-end"
          style={{
            border: "4px solid transparent",
            borderRadius: "0.5rem",
            background: 
              "linear-gradient(#111, #111) padding-box, " +
              "linear-gradient(135deg,rgb(219, 242, 14),rgb(6, 17, 171)) border-box"
          }}
        >
          <div>
            <h2 className="text-2xl font-bold mb-3">Projects & Research</h2>
            <p className="text-sm text-gray-400">
              Discover our latest work—cutting-edge blockchain projects and insightful research papers.
            </p>
          </div>
        </div>

        {/* Scrollable modals */}
        <div className="flex overflow-x-auto pr-6">
          {projectsData.map((project, index) => {
            const isHovered = hoveredIndex === index;
            const isNextCard = hoveredIndex !== null && index === hoveredIndex + 1;

            return (
              <div
                key={index}
                className={clsx(
                  "flex-shrink-0 h-[100%] bg-[#1B1B1B] rounded-xl transition-all duration-300 ease-in-out border-2 border-gray-700 p-4 relative",
                  {
                    "z-50": isHovered,
                  }
                )}
                style={{
                  width: "25rem",
                  marginLeft: index === 0 ? "0" : "-2cm",
                  zIndex: index + 10,
                  transform: isNextCard ? "translateX(4rem)" : "none",
                  transformStyle: "preserve-3d",
                  transformOrigin: "bottom left",
                  boxShadow: `
          0 80px 160px rgba(184, 209, 20, 0.95),
          0 40px 100px rgba(0, 0, 0, 0.8),
          0 0 100px rgba(0, 0, 0, 1),
          inset 0 0 60px rgba(0, 0, 0, 0.9)
        `,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Lighting effect */}
                <div
                  className="absolute inset-0 pointer-events-none z-0 rounded-xl"
                  style={{
                    background: "radial-gradient(ellipse at bottom left, rgba(255, 255, 255, 0.08), transparent 60%)",
                  }}
                />

              {/* Image */}
              {project.image && (
                <div className="relative w-full h-[35vh] mb-4 rounded-xl overflow-hidden z-10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    className="z-10 bg-cover sm:w-64 w-[60vw] overflow-hidden h-full lg:h-[15vh] lg:rounded-lg absolute object-cover"
                  />
                </div>
              )}


                {/* Content */}
                <h3 className="text-xl font-semibold mb-2 text-white z-10 relative px-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm px-4 pb-4">
                  {project.description.length > 50
                    ? `${project.description.slice(0, 117)}...`
                    : project.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}