"use client";

import React, { useEffect, useState, JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}): JSX.Element => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100); // Activate floating after 100px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed z-[5000] w-full px-8 py-5 transition-all duration-500", // Increased padding
        scrolled
          ? "top-6 mx-auto w-fit rounded-xl shadow-md border border-white/20 backdrop-blur-lg" // Larger rounded corners
          : "top-0 border-b border-white/10 backdrop-blur-sm",
        className
      )}
      style={{
        left: scrolled ? "50%" : "0",
        transform: scrolled ? "translateX(-50%)" : "none",
      }}
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo - only visible when not scrolled */}
        {!scrolled && (
          <div className="flex items-center">
            <Link href="/" className="mr-8"> {/* Increased margin */}
              <Image
                src="/header/ABC.png"
                alt="ABC Logo"
                width={60} // Increased size
                height={60} // Increased size
                className="object-contain"
              />
            </Link>
          </div>
        )}

        {/* Center nav items - now larger */}
        <div className="flex items-center justify-center space-x-8"> {/* Increased gap */}
          {navItems.map((navItem, idx) => (
            <Link
              key={`nav-${idx}`}
              href={navItem.link}
              className="flex items-center space-x-2 text-lg font-semibold text-white hover:text-neutral-300 transition" // Larger text
            >
              {navItem.icon && <span className="text-xl">{navItem.icon}</span>} {/* Larger icon */}
              <span>{navItem.name}</span>
            </Link>
          ))}
        </div>

        {/* Right side spacer to balance the layout when not scrolled */}
        {!scrolled && <div className="flex-1" />}
      </div>
    </nav>
  );
};