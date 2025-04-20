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
    <div className="relative w-full" style={{ 
      height: '50vh',
      perspective: '2000px',
      overflow: 'hidden'
    }}>
      {/* Pure backward-slanted plane - now transparent */}
      <div 
        className="absolute left-[25%] top-[25%] w-[50%] h-[50%]"
        style={{
          transform: 'rotateX(45deg)',
          transformStyle: 'preserve-3d',
          clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)',
          background: 'transparent'
        }}
      >
        <div className="relative w-full h-full">
          <SyntaxHighlighter
            language="solidity"
            style={atomDark}
            customStyle={{
              background: 'transparent',
              fontSize: '0.7rem',
              lineHeight: '1',
              fontFamily: '"Fira Code", monospace',
              margin: '0',
              padding: '3rem',
              height: '100%',
              width: '100%',
              border: 'none',
              boxShadow: 'none'
            }}
            showLineNumbers
            lineNumberStyle={{
              minWidth: '3em',
              color: '#6272a477',
              paddingRight: '2em'
            }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}