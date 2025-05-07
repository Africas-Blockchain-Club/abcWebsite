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
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed z-[5000] w-full px-8 py-3 transition-all duration-500",
        scrolled
          ? "top-6 mx-auto w-fit rounded-xl shadow-md border border-white/20 backdrop-blur-lg"
          : "top-0 border-b border-white/10 backdrop-blur-sm",
        className
      )}
      style={{
        left: scrolled ? "50%" : "0",
        transform: scrolled ? "translateX(-50%)" : "none",
      }}
    >
      <div className={cn(
        "flex items-center w-full",
        scrolled ? "justify-center" : "justify-end"
      )}>
        {/* Navigation items - right aligned when regular, centered when floating */}
        <div className="flex items-center space-x-8">
          {navItems.map((navItem, idx) => (
            <Link
              key={`nav-${idx}`}
              href={navItem.link}
              className="flex items-center space-x-2 text-sm font-semibold text-white hover:text-neutral-300 transition"
            >
              {navItem.icon && <span className="text-sm">{navItem.icon}</span>}
              <span>{navItem.name}</span>
            </Link>
          ))}
          
          {/* Logo - only visible when not scrolled and positioned after nav items */}
          {!scrolled && (
            <Link href="/" className="flex items-center ml-8">
              <Image
                src="/About/whiteABC.png"
                alt="ABC Logo"
                width={60}
                height={60}
                className="object-contain"
              />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};