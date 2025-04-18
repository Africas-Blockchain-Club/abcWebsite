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

const ContactUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex justify-between gap-8 w-full px-8 py-16 bg-black">
      {contactUsData.map((item, index) => {
        const isHovered = hoveredIndex === index;
        const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

        // Dynamically select the icon based on avatarType
        const AvatarIcon = iconMap[item.avatarType];

        return (
          <motion.div
            key={index}
            className="relative flex-1 rounded-2xl p-10 text-white cursor-pointer transition-all duration-300 shadow-lg bg-neutral-900 overflow-hidden"
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
            {/* Avatar - Icon from Lucide */}
            <motion.div
              className="absolute top-4 left-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md"
              initial={{ scale: 0 }}
              animate={{
                scale: isHovered ? 1.2 : 0,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
            >
              <AvatarIcon className="text-black" size={24} />
            </motion.div>

            {/* Border glow element */}
            <span
              className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-white/20 to-transparent transition-all duration-300`}
            />

            {/* Title */}
            <h2
              className={`text-3xl font-semibold mb-8 z-10 relative transition-all duration-300 ${
                isHovered ? "ml-16" : "ml-0"
              }`}
            >
              {item.title}
            </h2>

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
