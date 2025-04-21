"use client";

import { User } from "lucide-react";
import { testimonials } from "@/data";
import { useEffect, useRef } from "react";

const TestimonialCard = ({ text, name, role }: any) => (
  <div className="bg-white text-black p-6 rounded-[30px] w-[460px] text-left shadow-[0_10px_50px_rgba(0,0,0,0.35)]">
    <p className="text-sm italic mb-4 leading-relaxed">{`"${text}"`}</p>
    <div className="flex items-center gap-4">
      <div className="w-[80px] h-[80px] flex items-center justify-center bg-gray-200 rounded-full">
        <User size={40} className="text-gray-600" />
      </div>
      <div>
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

const EmptyModal = ({ className }: { className: string }) => (
  <div className={`bg-[#FFF8F0] w-[460px] h-[220px] border-2 border-gray-300 rounded-[30px] shadow-[0_10px_50px_rgba(0,0,0,0.35)] ${className}`} />
);

const FadeOverlay = ({ className, gradient }: { className: string; gradient: string }) => (
  <div className={`pointer-events-none absolute ${className} ${gradient}`} />
);

export default function TestimonialsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Create IntersectionObserver to detect when the testimonials section is in the viewport
  useEffect(() => {
    const handleScrollEffect = () => {
      if (containerRef.current) {
        containerRef.current.style.transition = "transform 0.5s ease-in-out";
        containerRef.current.style.transform = "translateY(-40px)"; // Slight scroll effect (about 4cm)
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleScrollEffect(); // Trigger effect when section is in view
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current); // Observe the container
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current); // Clean up observer
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Top testimonial */}
      <div className="absolute top-[2cm] left-1/2 transform -translate-x-1/2">
        <TestimonialCard {...testimonials.find(t => t.id === "top")} />
      </div>

      {/* Bottom testimonial */}
      <div className="absolute bottom-[2cm] left-1/2 transform -translate-x-1/2">
        <TestimonialCard {...testimonials.find(t => t.id === "bottom")} />
      </div>

      {/* Left testimonial */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <TestimonialCard {...testimonials.find(t => t.id === "left")} />
      </div>

      {/* Right testimonial */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <TestimonialCard {...testimonials.find(t => t.id === "right")} />
      </div>

      {/* Empty modals */}
      <EmptyModal className="absolute top-[-0.5cm] left-[0cm]" />
      <EmptyModal className="absolute top-[-0.5cm] right-[0cm]" />
      <EmptyModal className="absolute bottom-[-0.5cm] left-[0cm]" />
      <EmptyModal className="absolute bottom-[-0.5cm] right-[0cm]" />

      {/* Soft black fade overlays */}
      <FadeOverlay
        className="top-0 left-0 w-full h-[20%]"
        gradient="bg-gradient-to-b from-black/60 to-transparent"
      />
      <FadeOverlay
        className="bottom-0 left-0 w-full h-[20%]"
        gradient="bg-gradient-to-t from-black/60 to-transparent"
      />
      <FadeOverlay
        className="top-0 left-0 h-full w-[20%]"
        gradient="bg-gradient-to-r from-black/60 to-transparent"
      />
      <FadeOverlay
        className="top-0 right-0 h-full w-[20%]"
        gradient="bg-gradient-to-l from-black/60 to-transparent"
      />
    </div>
  );
}
