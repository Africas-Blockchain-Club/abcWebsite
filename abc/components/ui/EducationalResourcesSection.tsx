"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contactUsData } from "@/data";
import { BookOpen, Video, Code } from "lucide-react";

const iconMap = {
  BookOpen: BookOpen,
  Video: Video,
  Code: Code,
};

type AvatarType = keyof typeof iconMap;

const EducationalResourcesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full px-8 py-16 flex justify-center">
      {/* Spacer div for visual offset */}
      <div className="h-[100vh]" />

      {/* Main modal container */}
      <div
        className="w-full max-w-[240rem] border-[0.5px] border-yellow-400 rounded-[12px] flex flex-col gap-10"
        style={{
          // Changed background to a subtle blue-purple gradient
          background:
            "linear-gradient(135deg, #2d2d2d, #1c1c1c, #1e3a8a)",
          boxShadow: "inset 0 0 74px 2px #facc15",
          textAlign: "center",
          alignItems: "center",
          minHeight: "590px",
          padding: "90px 104px 104px",
        }}
      >
        <div className="relative w-full max-w-[240rem] ...">
  {/* Decorative BG image */}
  <img
    src="/b5.svg"
    alt="Background"
    className="absolute top-[-25px] left-[-65px] w-[300px] opacity-30 pointer-events-none select-none"
    style={{ zIndex: 0 }}
  />

  {/* Your actual content */}
  <div className="relative z-10">
    {/* All your content goes here */}
  </div>
</div>

        {/* Section Title */}
        <h2 className="text-6xl font-semibold mb-16 bg-white text-transparent bg-clip-text">
          Educational Resources
        </h2>

        {/* Content cards row */}
        <div className="flex w-full gap-10 justify-center">
          {contactUsData.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;
            const AvatarIcon = iconMap[item.avatarType as AvatarType];

            return (
              <motion.div
                key={index}
                // Each resource card
                className="relative flex-1 rounded-2xl p-6 text-white cursor-pointer transition-all duration-300 shadow-lg overflow-hidden bg-[#555555]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  // Brightness effect on hover
                  filter: isHovered
                    ? "brightness(1.1)"
                    : isOtherHovered
                    ? "brightness(0.7)"
                    : "brightness(1)",
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Hover underline animation */}
                <span
                  className={`absolute bottom-0 left-0 w-full transition-all duration-300 bg-gradient-to-t from-yellow-300/40 to-transparent ${
                    isHovered ? "h-10" : "h-[3px]"
                  }`}
                />

                {/* Icon + Title Row */}
                <div className="flex items-center mb-6">
                  <motion.div
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md mr-2"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: isHovered ? 1 : 0,
                      opacity: isHovered ? 0.8 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 250, damping: 15 }}
                  >
                    <AvatarIcon className="text-black" size={18} />
                  </motion.div>

                  {/* Title with slide effect */}
                  <motion.h2
                    className="text-2xl font-semibold transition-all duration-300"
                    animate={{ x: isHovered ? 10 : 0 }}
                    transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  >
                    {item.title}
                  </motion.h2>
                </div>

                {/* Description text */}
                <p className="text-base text-gray-300 z-10 relative transition-all duration-300">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EducationalResourcesSection;
