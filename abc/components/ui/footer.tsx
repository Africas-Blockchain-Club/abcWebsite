"use client";

import { Mail, X, Github, Linkedin, Send, Facebook, Instagram, Twitter, MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SlideIn from "../animations/slide-in";

const Footer = () => {
  return (
    <div className="relative">
      {/* WE MOVE text with animated gradient */}
      
      <div className="absolute -top-[3.4rem] left-0 w-full text-center overflow-hidden">
        <h1 className="text-[6rem] md:text-[10rem] lg:text-[12rem] font-extrabold tracking-tighter leading-none whitespace-nowrap 
              bg-[linear-gradient(to_top,black_0%,gray_100%)] 
              bg-clip-text text-transparent animate-gradient">
          WE MOVE
        </h1>
      </div>
    

      {/* Footer */}
      <footer className="relative bg-gray-900 text-white px-4 pt-12 pb-4">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SlideIn direction="left" delay={600}>
            <div>
              <div className=" items-center mb-4 px-15">
                <Image
                  src="/About/ABC_HD_White.png"
                  alt="Africa Blockchain Club"
                  width={90}
                  height={180}
                  className="object-contain"
                />
              </div>
                <p className="font-bold text-xl mb-2">Africa's Blockchain Club</p>
              <p className="text-gray-400 mb-2">Empowering Africa through blockchain innovation and education.</p>
              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-8 w-8 text-gray-400 hover:text-teal-400 hover:bg-gray-800"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-8 w-8 text-gray-400 hover:text-teal-400 hover:bg-gray-800"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-8 w-8 text-gray-400 hover:text-teal-400 hover:bg-gray-800"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-8 w-8 text-gray-400 hover:text-teal-400 hover:bg-gray-800"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-8 w-8 text-gray-400 hover:text-teal-400 hover:bg-gray-800"
                >
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </div>
            </SlideIn>
            <SlideIn direction="left" delay={600}>
            <div>
              <h3 className="font-bold text-lg mb-2 pt-16">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-teal-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            </SlideIn>

            <SlideIn direction="right" delay={600}>
            <div>
              <h3 className="font-bold text-lg mb-2 pt-16">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            </SlideIn>

            <SlideIn direction="right" delay={600}>
                <div>
                  <h3 className="font-bold text-lg mb-2 pt-16">Contact</h3>
                  <p className="mb-2 text-neutral-400">
                    <MapPin className="mr-2 inline-block h-4 w-4" />
                    Johannesburg, South Africa
                  </p>
                  <p className="mb-4 text-neutral-400">
                    <Calendar className="mr-2 inline-block h-4 w-4" />
                    We meet every Saturday
                  </p>
                  <Link
                    href="mailto:africablockchainclub@gmail.com"
                    className="text-amber-500 hover:underline transition-all duration-200"
                  >
                    africablockchainclub@gmail.com
                  </Link>
                </div>
              </SlideIn>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Africa Blockchain Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;