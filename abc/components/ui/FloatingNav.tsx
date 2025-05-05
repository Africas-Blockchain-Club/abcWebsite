"use client";

import React, { useEffect, useState, JSX } from "react";
import Link from "next/link";
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
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      const scrollY = window.scrollY;

      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsFloating(scrollY > heroBottom - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-[5000] w-full px-6 py-4 transition-all duration-500",
        isFloating
          ? "top-6 mx-auto w-fit rounded-lg shadow-md border border-white/20 backdrop-blur-lg"
          : "border-b border-white/10 backdrop-blur-sm",
        className
      )}
    >
      <div className="flex items-center justify-center space-x-6">
        {navItems.map((navItem, idx) => (
          <Link
            key={`nav-${idx}`}
            href={navItem.link}
            className="flex items-center space-x-1 text-sm font-medium text-white hover:text-neutral-300 transition"
          >
            {navItem.icon && <span>{navItem.icon}</span>}
            <span>{navItem.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};
