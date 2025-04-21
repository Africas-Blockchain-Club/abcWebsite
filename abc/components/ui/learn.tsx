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

const ContactUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full px-8 py-16 flex justify-center">
            <div className="h-[100vh]" />

      <div
        className="w-full max-w-[240rem] border-[0.5px] border-yellow-400 rounded-[12px] flex gap-10"
        style={{
          backgroundColor: "transparent",
          boxShadow: `inset 0 0 74px 2px #facc15`,
          textAlign: "center",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "590px",
          padding: "118px 104px 104px",
          display: "flex",
        }}
      >
        {contactUsData.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

          const AvatarIcon = iconMap[item.avatarType as AvatarType];

          return (
            <motion.div
              key={index}
              className="relative flex-1 rounded-2xl p-6 text-white cursor-pointer transition-all duration-300 shadow-lg bg-[#1B1B1B] overflow-hidden"
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
              <span
                className={`absolute bottom-0 left-0 w-full transition-all duration-300 bg-gradient-to-t from-yellow-300/40 to-transparent ${
                  isHovered ? "h-10" : "h-[3px]"
                }`}
              />

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
  );
};

export default ContactUs;
