"use client";

import { projectsData } from "@/data";
import Image from "next/image";

export default function ProjectsDrawer() {
  return (
    <div className="flex overflow-x-auto px-6 py-12 gap-[-6rem] relative">
      {projectsData.map((project, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-1/3 min-w-[280px] transform transition-transform duration-300 hover:scale-105 -ml-20 relative z-10 shadow-xl bg-white rounded-xl p-4"
          style={{ zIndex: projectsData.length - index }}
        >
          {project.image && (
            <div className="relative h-40 w-full mb-4 rounded overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600 text-sm">{project.description}</p>
        </div>
      ))}
    </div>
  );
}
