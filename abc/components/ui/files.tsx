"use client";

import { useState } from "react";
import { projectsData } from "@/data";
import Image from "next/image";
import clsx from "clsx";
import { FaLocationArrow } from "react-icons/fa";


export default function ProjectsDrawer() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative w-full left-0 right-0 px-10 z-50 overflow-hidden custom-scrollbar">
      
      {/* Large text above the modal */}
      <div className="absolute top-[-1.8cm] left-0 w-full text-center z-10">
        <h1 className="lg:text-[13rem] text-bold font-extrabold mt-8">Collections</h1>
      </div>

      {/* Main modal moved down */}
      <div
        className="w-full flex py-10 gap-8 w-[680px] items-stretch min-h-[30vh] h-[85vh] relative z-10 rounded-xl bg-[#555555]"
        style={{
          marginTop: '4cm',
          boxShadow: `
            0 0 80px rgba(0, 0, 0, 0.8), 
            0 40px 80px rgba(0, 0, 0, 0.6), 
            0 20px 60px rgba(0, 0, 0, 0.5), 
            inset 0 0 100px rgba(0, 0, 0, 0.7)
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
              "linear-gradient(135deg,rgb(33, 16, 126),rgb(6, 17, 171)) border-box"
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
        <div className="flex overflow-x-auto pr-2 scrollbar-thin scrollbar-thumb-yellow-500 hover:scrollbar-thumb-yellow-400">
          {projectsData.map((project, index) => {
            const isHovered = hoveredIndex === index;
            const isNextCard = hoveredIndex !== null && index === hoveredIndex + 1;

            return (
              <div
  key={index}
  className={clsx(
    "flex-shrink-0 h-[100%] bg-[#262626] rounded-xl transition-all duration-300 ease-in-out border-2 border-gray-700 p-8 relative flex flex-col", // <- added flex-col
    {
      "z-50": isHovered,
    }
  )}
  style={{
    width: "27rem",
    marginLeft: index === 0 ? "0" : "-5cm",
    zIndex: index + 10,
    transform: isNextCard ? "translateX(10rem)" : "none",
    transformStyle: "preserve-3d",
    transformOrigin: "bottom left",
    boxShadow: `
      0 80px 160px rgb(15, 1, 1),
      0 40px 100px rgba(2, 0, 0, 0.8),
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
        className="z-10 bg-[#262626] sm:w-64 w-[60vw] overflow-hidden h-full lg:h-[15vh] lg:rounded-lg absolute object-cover"
      />
    </div>
  )}

  {/* Top Content */}
  <div className="flex-1 flex flex-col">
    <h3 className="text-xl font-semibold mb-3 text-white z-10 relative px-2">
      {project.title}
    </h3>
    <p className="text-gray-400 text-sm px-2 mb-4">
      {project.description.length > 25
        ? `${project.description.slice(0, 100)}...`
        : project.description}
    </p>
  </div>

  {/* Static Bottom Message */}
  <div className="flex justify-center items-center mt-4">
    <p className="flex items-center lg:text-xl md:text-xs text-sm text-purple border border-[#CBACF9] px-4 py-1 rounded-full hover:bg-[#CBACF9]/10 transition cursor-pointer">
      {project.message}
      <FaLocationArrow className="ms-3" color="#CBACF9" />
    </p>
  </div>
</div>

            );
          })}
        </div>
      </div>
    </div>
  );
}
