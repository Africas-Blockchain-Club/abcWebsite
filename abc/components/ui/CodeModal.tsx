"use client";

import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useEffect, useRef } from "react";

export default function CodeModal() {
  const shimmerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!shimmerRef.current) return;
    let pos = -100;
    const animate = () => {
      pos = (pos + 2) % 200;
      shimmerRef.current!.style.backgroundPosition = `${pos}% 0%`;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  const codeString = `pragma solidity ^0.8.0;

contract MySmartContract {
    // MIT License
    string public license = "MIT";
    // Other declarations...
}`;

  return (
    <div
      className="fixed inset-0 z-10 pointer-events-none"
      style={{ perspective: "1500px", overflow: "visible" }}
    >
      {/* Shimmer overlay */}
      <div
        ref={shimmerRef}
        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        style={{
          transform: "translateZ(100px)",
          backgroundSize: "200% 100%",
        }}
      />

      {/* Full code plane (clipPath removed for debug) */}
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
          /* TEMPORARILY COMMENT CLIPPATH TO SEE FULL PLANE */
          /* clipPath: "inset(20% 0 40% 0)", */
        }}
      >
        <SyntaxHighlighter
          language="solidity"
          style={atomDark}
          customStyle={{
            background: "transparent",
            fontSize: "0.7rem",
            lineHeight: "1",
            fontFamily: '"Fira Code", monospace',
            margin: 0,
            padding: "2rem 4rem",
            height: "100%",
            width: "100%",
            border: "none",
            boxShadow: "none",
            color: "#f8f8f2",
          }}
          showLineNumbers
          lineNumberStyle={{
            minWidth: "3em",
            color: "#6272a477",
            paddingRight: "2em",
          }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
