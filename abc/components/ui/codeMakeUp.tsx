"use client";

import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function CodeModal() {
  const codeString = `pragma solidity ^0.8.0;

contract MySmartContract {
    // MIT License
    string public license = "MIT";
    // Other contract declarations...
}`;

  return (
    <div className="relative w-full" style={{ height: '60vh' }}>
      {/* Light source positioned carefully */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute left-[10%] top-[10%] bottom-[10%] w-[30%]"
          style={{
            background: 'linear-gradient(90deg, rgba(100,200,255,0.2), transparent)',
            filter: 'blur(40px)',
            zIndex: 0,
            transform: 'skewX(-5deg)'
          }}
        />
      </div>

      {/* Code container with precise dimensions */}
      <div 
        className="absolute left-[15%] top-[15%] w-[70%] h-[70%] overflow-hidden"
        style={{
          transform: 'perspective(1000px) rotateX(5deg)',
          clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'
        }}
      >
        <div className="relative w-full h-full">
          <SyntaxHighlighter
            language="solidity"
            style={atomDark}
            customStyle={{
              background: 'transparent',
              fontSize: '0.8rem',
              lineHeight: '1.6',
              fontFamily: '"Fira Code", monospace',
              textShadow: '0 0 15px rgba(100, 200, 255, 0.4)',
              margin: '0',
              padding: '2rem',
              height: '100%',
              width: '200%',
              overflow: 'hidden'
            }}
            showLineNumbers
          >
            {codeString}
          </SyntaxHighlighter>
          
          {/* Subtle edge glow that doesn't touch boundaries */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-[5%]"
            style={{
              background: 'linear-gradient(90deg, rgba(100,200,255,0.1), transparent)',
              zIndex: 2
            }}
          />
        </div>
      </div>
    </div>
  );
}