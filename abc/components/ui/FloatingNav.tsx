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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when scrolling
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [scrolled]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed z-[5000] w-full transition-all duration-500",
          scrolled
            ? "top-4 mx-auto w-[95%] md:w-fit rounded-xl shadow-2xl border border-white/30 backdrop-blur-xl bg-black/70" // Enhanced contrast
            : "top-0 border-b border-white/20 backdrop-blur-lg bg-black/40", // Stronger backdrop
          className
        )}
        style={{
          left: scrolled ? "50%" : "0",
          transform: scrolled ? "translateX(-50%)" : "none",
        }}
      >
        <div className={cn(
          "flex items-center w-full px-4 py-3 md:px-8 md:py-1",
          scrolled ? "justify-center" : "justify-between md:justify-end"
        )}>
          {/* Logo - visible on mobile when not scrolled, always on left */}
          {(!scrolled || isMobileMenuOpen) && (
            <Link href="/" className="flex items-center md:ml-0 z-50">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((navItem, idx) => (
              <Link
                key={`nav-${idx}`}
                href={navItem.link}
                className={cn(
                  "flex items-center space-x-2 text-sm font-semibold transition-all duration-300 px-4 py-2 rounded-lg",
                  "text-white hover:text-white border border-transparent",
                  "hover:bg-white/10 hover:border-white/20 hover:shadow-lg" // Better hover states
                )}
              >
                {navItem.icon && <span className="text-sm">{navItem.icon}</span>}
                <span className="relative z-10">{navItem.name}</span>
              </Link>
            ))}
            
            {/* Logo - only visible when not scrolled on desktop */}
            {!scrolled && (
              <Link href="/" className="flex items-center ml-8">
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

          {/* Mobile Menu Button - Improved contrast */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-50 ml-auto bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            <span className={cn(
              "bg-white h-0.5 w-6 rounded-full transition-all duration-300 shadow-sm",
              isMobileMenuOpen ? "rotate-45 translate-y-1.5 bg-white" : "-translate-y-1 bg-white"
            )} />
            <span className={cn(
              "bg-white h-0.5 w-6 rounded-full transition-all duration-300 my-1.5 shadow-sm",
              isMobileMenuOpen ? "opacity-0" : "opacity-100 bg-white"
            )} />
            <span className={cn(
              "bg-white h-0.5 w-6 rounded-full transition-all duration-300 shadow-sm",
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5 bg-white" : "translate-y-1 bg-white"
            )} />
          </button>
        </div>

        {/* Mobile Menu Overlay - Enhanced backdrop */}
        <div className={cn(
          "md:hidden fixed inset-0 bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-2xl z-40 transition-all duration-500",
          isMobileMenuOpen 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-full pointer-events-none"
        )}>
          <div className="flex flex-col items-center justify-center h-full space-y-6 pt-20 px-6">
            {navItems.map((navItem, idx) => (
              <Link
                key={`mobile-nav-${idx}`}
                href={navItem.link}
                className={cn(
                  "flex items-center space-x-4 text-xl font-semibold transition-all duration-300 w-full max-w-xs",
                  "text-white hover:text-white px-6 py-4 rounded-2xl border border-white/20",
                  "hover:bg-white/10 hover:border-white/30 hover:shadow-xl backdrop-blur-sm",
                  "mobile-nav-item" // For touch targets
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {navItem.icon && <span className="text-xl">{navItem.icon}</span>}
                <span className="relative z-10">{navItem.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile-specific styles */}
      <style jsx global>{`
        @media (max-width: 768px) {
          /* Improve touch targets */
          .mobile-nav-item {
            min-height: 60px;
            min-width: 60px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-left: 20px;
          }
          
          /* Smooth transitions for mobile */
          .floating-nav-mobile {
            transition: all 0.3s ease-in-out;
          }

          /* Glow effect for better visibility */
          .backdrop-blur-xl {
            backdrop-filter: blur(24px) saturate(180%);
            -webkit-backdrop-filter: blur(24px) saturate(180%);
          }
        }

        /* Enhanced scrollbar for mobile menu */
        @media (max-height: 700px) {
          .mobile-menu-container {
            overflow-y: auto;
            padding-top: 80px;
            padding-bottom: 40px;
          }
        }
      `}</style>
    </>
  );
};