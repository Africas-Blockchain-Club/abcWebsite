"use client";

import { Mail, X, Github, Linkedin, Send } from "lucide-react";

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
      <footer className="relative bg-yellow-400 text-black px-6 sm:px-10 pt-36 pb-10 border-t-2 border-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Contact */}
          <div className="flex items-center gap-4 text-lg font-medium group">
            <Mail className="w-6 h-6" />
            <span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 group-hover:after:w-full">
              contact@abcplatform.io
            </span>
          </div>

          {/* Socials */}
          <div className="flex gap-6">
            <a
              href="https://x.com/africasblock"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <X className="w-6 h-6 hover:text-white transition-colors" />
            </a>
            <a
              href="https://github.com/Africas-Blockchain-Club"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Github className="w-6 h-6 hover:text-white transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/company/africa-s-blockchain-club/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Linkedin className="w-6 h-6 hover:text-white transition-colors" />
            </a>
            <a
              href="https://x.com/africasblock"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Send className="w-6 h-6 hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
