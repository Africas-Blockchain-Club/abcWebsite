"use client";

import { Mail, X, Github, Linkedin, Send, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="relative mt-20">
      {/* WE MOVE text with animated gradient */}
      <div className="absolute -top-[6.4rem] left-0 w-full text-center overflow-hidden">
        <h1 className="text-[8rem] md:text-[12rem] lg:text-[15rem] font-extrabold tracking-tighter leading-none whitespace-nowrap 
              bg-[linear-gradient(to_top,black_0%,black_57%,#facc15_57%,#facc15_100%)] 
              bg-clip-text text-transparent animate-gradient">
          WE MOVE
        </h1>
      </div>

      {/* Footer */}
      <footer className="relative bg-gray-900 text-white px-4 pt-36 pb-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/About/AbcmapLogo.png"
                  alt="Africa Blockchain Club"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="font-bold text-xl">ABC</span>
              </div>
              <p className="text-gray-400 mb-4">Empowering Africa through blockchain innovation and education.</p>
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

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
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

            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
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

            <div>
              <h3 className="font-bold text-lg mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-4">Stay updated with our latest news and events.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent w-full"
                />
                <Button className="bg-teal-600 text-white hover:bg-teal-700">Subscribe</Button>
              </div>
            </div>
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