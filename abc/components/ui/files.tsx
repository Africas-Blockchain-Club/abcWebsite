"use client";

import { useState } from "react";
import { projectsData } from "@/data";
import Image from "next/image";
import clsx from "clsx";

export default function ProjectsDrawer() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative w-full left-0 right-0 px-10 z-50">
      {/* Modal wrapper */}
      <div className="w-full bg-black/90 shadow-[0_0_40px_rgba(255,255,255,0.1)] backdrop-blur-md flex py-10 gap-8 items-stretch min-h-[35vh] h-[80vh]">
        {/* Description card */}
        <div className="flex-shrink-0 h-full bg-[#111] text-white p-6 shadow-md w-[280px] flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-3">Projects & Research</h2>
            <p className="text-sm text-gray-400">
              Discover our latest work—cutting-edge blockchain projects and insightful research papers.
            </p>
          </div>
        </div>

        {/* Individual modals */}
        <div className="flex gap-6 overflow-x-auto pr-6 ">
          {projectsData.map((project, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className={clsx(
                  "flex-shrink-0 w-[80vw] lg:w-[20rem] h-[100%] bg-[#111] rounded-xl shadow-2xl transition-transform duration-300 ease-in-out relative z-10",
                  {
                    "z-30 -translate-y-4 rotate-x-2": isHovered,
                  }
                )}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "bottom left",
                  boxShadow: "0 6px 16px rgba(255, 255, 255, 0.08)",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Lighting effect */}
                <div
                  className="absolute inset-0 pointer-events-none z-0 rounded-xl"
                  style={{
                    background: `radial-gradient(ellipse at bottom left, rgba(255, 255, 255, 0.08), transparent 60%)`,
                  }}
                />

                {/* Image */}
                {project.image && (
                  <div className="relative w-full h-2/3 mb-4 rounded overflow-hidden z-10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2 text-white z-10 relative px-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm px-4 pb-4">
                  {project.description.length > 80
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
