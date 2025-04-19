"use client";

import { useState, useRef, useEffect } from "react";

export default function ImageHoverEffect() {
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new Image();
    img.src = "aa.png";
    img.onload = () => {
      setImageSize({ width: img.width, height: img.height });
      setIsLoaded(true);
      drawCanvas(img);
    };
  }, []);

  const drawCanvas = (img, mouseX = -100, mouseY = -100) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw the original image
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
    // Create a clipping path for the visible area
    ctx.globalCompositeOperation = 'destination-in';
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 19, 0, Math.PI * 2); // 38px diameter (≈1cm)
    ctx.fill();
    
    // Add dark overlay everywhere except the circle
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = '#1B1B1B';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const handleMouseMove = (e) => {
    if (!isLoaded) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const img = new Image();
    img.src = "aa.png";
    img.onload = () => drawCanvas(img, x, y);
  };

  const handleMouseLeave = () => {
    if (!isLoaded) return;
    
    const img = new Image();
    img.src = "aa.png";
    img.onload = () => drawCanvas(img);
  };

  return (
    <div className="relative w-full max-w-[1000px] mx-auto">
      <canvas
        ref={canvasRef}
        width={imageSize.width}
        height={imageSize.height}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full h-full cursor-none"
      />
    </div>
  );
}