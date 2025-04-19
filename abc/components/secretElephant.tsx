"use client";

export default function ImageHoverEffect() {
  return (
    <div className="relative w-full max-w-[500px] mx-auto">
      <div className="relative group">
        <img
          src="https://your-image-url.jpg"
          alt="Image"
          className="w-full h-full object-cover transition-all duration-300"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-80 transition-all duration-300 group-hover:opacity-0 z-10"></div>

        {/* Light Effect on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100 z-20"></div>
      </div>
    </div>
  );
}
