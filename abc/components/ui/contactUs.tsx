"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contactUsData } from "@/data";
// Import Lucide icons
import { BookOpen, Video, Code } from "lucide-react";

// Map avatarType to Lucide icons
const iconMap = {
  BookOpen: BookOpen,
  Video: Video,
  Code: Code,
};

type AvatarType = keyof typeof iconMap;

const ContactUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex justify-between gap-8 w-full px-8 py-16">
      {contactUsData.map((item, index) => {
        const isHovered = hoveredIndex === index;
        const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

        const AvatarIcon = iconMap[item.avatarType as AvatarType];

        return (
          <motion.div
            key={index}

            // No border
            className="relative flex-1 rounded-2xl p-10 text-white cursor-pointer transition-all duration-300 shadow-lg bg-[#1B1B1B] overflow-hidden"
          
            // With border
            // className={`relative flex-1 rounded-2xl p-10 text-white cursor-pointer transition-all duration-300 shadow-lg bg-[#1B1B1B] overflow-hidden ${
            //   isHovered ? "border border-white/40" : "border border-transparent"
            // }`} 
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              filter: isHovered
                ? "brightness(1.1)"  // Lighter effect for hovered modal
                : isOtherHovered
                ? "brightness(0.7)" // Darker effect for non-hovered modals
                : "brightness(1)",
              scale: isHovered ? 1.05 : 1,  // Slightly bigger on hover
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >

            {/* Border glow element */}
<span
  className={`absolute bottom-0 left-0 w-full transition-all duration-300 bg-gradient-to-t from-white/20 to-transparent ${
    isHovered ? "h-10" : "h-[3px]"
  }`}
/>

            {/* Avatar + Title Row */}
      <div className="flex items-center mb-8">
        <motion.div
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mr-2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 0.8 : 0,
          }}
          transition={{ type: "spring", stiffness: 250, damping: 15 }}
        >
          <AvatarIcon className="text-black" size={20} />
        </motion.div>

        <motion.h2
          className="text-3xl font-semibold transition-all duration-300"
          animate={{
            x: isHovered ? 10 : 0, // Push right slightly when avatar is visible
          }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
        >
          {item.title}
        </motion.h2>
      </div>


            {/* Text */}
            <p
              className={`text-lg text-gray-300 z-10 relative transition-all duration-300`}
            >
              {item.text}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ContactUs;
