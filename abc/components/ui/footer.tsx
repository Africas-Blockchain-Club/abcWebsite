"use client";

import { Mail, X, Github, Linkedin, Send, Link, Calendar, MapPin } from "lucide-react";
import SocialLinks from "../socialLinks";

const Footer = () => {
  return (
    <div className="relative mt-20">
      {/* WE MOVE text positioned between sections */}
      <div className="absolute -top-[8.4rem] left-0 w-full text-center">
      <h1 className="text-[8rem] md:text-[12rem] lg:text-[15rem] font-extrabold tracking-tighter leading-none whitespace-nowrap 
              bg-[linear-gradient(to_top,black_0%,black_57%,#facc15_57%,#facc15_100%)] bg-clip-text text-transparent">
  WE MOVE
</h1>
      </div>

      {/* Footer content */}
      <footer className="bg-neutral-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 font-mono text-xl font-bold">Africa's Blockchain Club</h3>
              <p className="mb-4 text-neutral-400">Building Africa's decentralized future, one block at a time.</p>
              <SocialLinks />
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-neutral-400">
                <li>
                  <Link href="#about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="hover:text-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="hover:text-white">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="hover:text-white">
                    Team
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Resources</h4>
              <ul className="space-y-2 text-neutral-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Contact</h4>
              <p className="mb-2 text-neutral-400">
                <MapPin className="mr-2 inline-block h-4 w-4" />
                Johannesburg, South Africa
              </p>
              <p className="mb-4 text-neutral-400">
                <Calendar className="mr-2 inline-block h-4 w-4" />
                We meet every Saturday
              </p>
              <Link href="mailto:info@africasblockchainclub.org" className="text-amber-500 hover:underline">
                info@africasblockchainclub.org
              </Link>
            </div>
          </div>
          <div className="mt-12 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} Africa's Blockchain Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;