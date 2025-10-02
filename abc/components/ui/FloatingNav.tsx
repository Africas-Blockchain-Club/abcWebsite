"use client";

import React, { useEffect, useState, JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";


export const FloatingNav = (
  {
  navItems,
  className,
}: {
  navItems: { name: string; link: string; icon?: JSX.Element }[];
  className?: string;
}): JSX.Element => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when scrolling
  useEffect(() => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  }, [scrolled]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

return (
  <>
    <nav
      className={cn(
        "fixed z-[5000] w-full transition-all duration-500",
        scrolled
          ? "top-4 mx-auto w-[95%] md:w-fit rounded-xl shadow-2xl border border-white/30 backdrop-blur-xl bg-black/70"
          : "top-0 border-b border-white/20 bg-black/40",
        className
      )}
      style={{
        left: scrolled ? "50%" : "0",
        transform: scrolled ? "translateX(-50%)" : "none",
      }}
    >
      <div
        className={cn(
          "flex items-center w-full px-4 py-3 md:px-8 md:py-1",
          scrolled ? "justify-center" : "justify-between md:justify-end"
        )}
      >
        {(!scrolled ) && (
          <Link href="/" className="flex items-center md:ml-0 z-50 md:hidden">
            <Image
              src="/About/ABC_HD_White.png"
              alt="ABC Logo"
              width={35}
              height={30}
              className="object-contain"
              priority
            />
          </Link>
        )}

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((navItem, idx) => (
            <Link
              key={`nav-${idx}`}
              href={navItem.link}
              className={cn(
                "flex items-center space-x-2 text-sm font-semibold transition-all duration-300 px-4 py-2 rounded-lg",
                "text-white hover:text-white border border-transparent",
                "hover:bg-white/10 hover:border-white/20 hover:shadow-lg"
              )}
            >
              {navItem.icon && <span className="text-sm">{navItem.icon}</span>}
              <span className="relative z-10">{navItem.name}</span>
            </Link>
          ))}

          {!scrolled && (
            <Link href="/" className="hidden md:flex items-center ml-8">
              <Image
                src="/About/ABC_HD_White.png"
                alt="ABC Logo"
                width={35}
                height={30}
                className="object-contain"
              />
            </Link>
          )}
        </div>

        <button
          onClick={() => setIsMobileMenuOpen((s) => !s)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-50 ml-auto bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm"
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "bg-white h-0.5 w-6 rounded-full transition-all duration-300 shadow-sm",
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
            )}
          />
          <span
            className={cn(
              "bg-white h-0.5 w-6 rounded-full transition-all duration-300 my-1.5 shadow-sm",
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            )}
          />
          <span
            className={cn(
              "bg-white h-0.5 w-6 rounded-full transition-all duration-300 shadow-sm",
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
            )}
          />
        </button>
      </div>

      {/* Mobile overlay - NOW INSIDE THE <nav> */}
      <div
        className={cn(
          "md:hidden fixed inset-0 transition-all duration-300 flex items-center justify-center",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto backdrop-blur-xl bg-black/50 z-40"
            : "opacity-0 pointer-events-none -translate-y-full z-10"
        )}
        style={{ backdropFilter: isMobileMenuOpen ? "blur(10px)" : "none" }}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 pt-20 px-6 w-full">
          {navItems.map((navItem, idx) => (
            <Link
              key={`mobile-nav-${idx}`}
              href={navItem.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "flex items-center space-x-4 text-xl font-semibold transition-all duration-300 w-full max-w-xs",
                "text-white hover:text-white px-6 py-4 rounded-2xl border border-white/20",
                "hover:bg-white/10 hover:border-white/30 hover:shadow-xl backdrop-blur-sm"
              )}
            >
              {navItem.icon && <span className="text-xl">{navItem.icon}</span>}
              <span className="relative z-10">{navItem.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>

    <style jsx global>{`
      @media (max-width: 768px) {
        .mobile-nav-item { min-height: 60px; min-width: 60px; display: flex; align-items: center; justify-content: flex-start; padding-left: 20px; }
        .backdrop-blur-xl { backdrop-filter: blur(24px) saturate(180%); -webkit-backdrop-filter: blur(24px) saturate(180%); }
      }
    `}</style>
  </>
);
};
