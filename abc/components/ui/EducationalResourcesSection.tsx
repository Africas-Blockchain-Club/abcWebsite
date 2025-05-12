"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { contactUsData } from "@/data";
import { BookOpen, Video, Code } from "lucide-react";
import PolygonBorderBackground from "./pollyygon";

const iconMap = {
  BookOpen: BookOpen,
  Video: Video,
  Code: Code,
};

type AvatarType = keyof typeof iconMap;

const EducationalResourcesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();

  return (
    <div className="w-full px-8 py-16 flex justify-center relative">
      <div className="h-[100vh] " />

      <div
        className="relative w-full max-w-[240rem] rounded-[12px] flex flex-col gap-10 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #2d2d2d, #1c1c1c, #1e3a8a)",
          boxShadow: "0 0 24px rgba(250, 204, 21, 0.3)",
          textAlign: "center",
          alignItems: "center",
          minHeight: "590px",
          padding: "90px 104px 104px",
        }}
      >
        <PolygonBorderBackground />

        <h2 className="relative z-10 text-6xl font-semibold mb-16 bg-white text-transparent bg-clip-text">
          Educational Resources
        </h2>

        <div className="relative z-10 flex w-full gap-10 justify-center">
          {contactUsData.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;
            const AvatarIcon = iconMap[item.avatarType as AvatarType];

            return (
              <motion.div
                key={index}
                onClick={() => router.push(item.link)}
                className="relative flex-1 rounded-2xl p-6 text-white cursor-pointer transition-all duration-300 shadow-lg overflow-hidden bg-[#555555]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  filter: isHovered
                    ? "brightness(1.1)"
                    : isOtherHovered
                    ? "brightness(0.7)"
                    : "brightness(1)",
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
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

                  <motion.h2
                    className="text-2xl font-semibold transition-all duration-300"
                    animate={{ x: isHovered ? 10 : 0 }}
                    transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  >
                    {item.title}
                  </motion.h2>
                </div>

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