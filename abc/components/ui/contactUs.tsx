"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contactUsData } from "@/data";

const ContactUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex justify-between gap-6 w-full px-8 py-16 bg-black">
      {contactUsData.map((item, index) => {
        const isHovered = hoveredIndex === index;
        const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

        return (
          <motion.div
            key={index}
            className="relative flex-1 rounded-2xl p-6 text-white cursor-pointer transition-all duration-300 shadow-lg bg-neutral-900 overflow-hidden group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ scale: 1 }}
            animate={{
              scale: isHovered ? 1.05 : 1,
              filter: isHovered
                ? "brightness(1.1)"
                : isOtherHovered
                ? "brightness(0.85)"
                : "brightness(1)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Border glow element */}
            <span
              className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-white/20 to-transparent transition-all duration-300 ${
                isHovered ? "h-10" : "h-[3px]"
              }`}
            />

            <h2
              className={`text-xl font-semibold mb-3 z-10 relative transition-all duration-300 ${
                isHovered ? "text-2xl" : "text-xl"
              }`}
            >
              {item.title}
            </h2>
            <p
              className={`text-base text-gray-300 z-10 relative transition-all duration-300 ${
                isHovered ? "text-lg" : "text-base"
              }`}
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
