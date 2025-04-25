"use client";

import { Mail, X, Github, Linkedin, Send } from "lucide-react";

const Footer = () => {
  return (
    <div className="relative mt-20">
      {/* WE MOVE text positioned between sections */}
      <div className="absolute -top-[6.4rem] left-0 w-full text-center">
      <h1 className="text-[8rem] md:text-[12rem] lg:text-[15rem] font-extrabold tracking-tighter leading-none whitespace-nowrap 
              bg-[linear-gradient(to_top,black_0%,black_57%,#facc15_57%,#facc15_100%)] bg-clip-text text-transparent">
  WE MOVE
</h1>
      </div>

      {/* Footer content */}
      <footer className="relative bg-yellow-400 text-black px-10 pt-35 pb-10 overflow-visible">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Contact Info */}
          <div className="flex items-center gap-4 text-lg font-medium">
            <Mail className="w-6 h-6" />
            <span>contact@abcplatform.io</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a href="https://x.com/africasblock" target="_blank" rel="noopener noreferrer">
              <X className="w-6 h-6 hover:text-white transition" />
            </a>
            <a href="https://github.com/Africas-Blockchain-Club" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-white transition" />
            </a>
            <a href="https://www.linkedin.com/company/africa-s-blockchain-club/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-white transition" />
            </a>
            <a href="https://x.com/africasblock" target="_blank" rel="noopener noreferrer">
              <Send className="w-6 h-6 hover:text-white transition" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;