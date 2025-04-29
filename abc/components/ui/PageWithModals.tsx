"use client";

import { useState } from "react";
import CodeModal from "@/components/ui/CodeModal";
import ImageTextCardPopUp from "./ImageTextCardPopUp";
import { imageCards } from "@/data";

export default function PageWithModals() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openCardModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white font-mono">
      {/* Starfield / Matrix dot effect */}
      <div className="absolute inset-0 z-0 animate-pulse opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

      {/* Gradient glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-purple-800/10 z-0 pointer-events-none" />

      {/* Blurred spotlights */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-yellow-400 opacity-10 rounded-full filter blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500 opacity-10 rounded-full filter blur-[150px]" />

      {/* Example trigger */}
      <button
        className="m-8 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-full text-black z-10"
        onClick={() => setIsModalOpen(true)}
      >
        Open Code Modal
      </button>

      {/* Code modal */}
      <CodeModal />

      {/* Cards grid */}
      <div className="flex gap-8 flex-wrap justify-center p-16 z-10 relative">
        {imageCards.map((card, idx) => (
          <div key={idx} onClick={() => openCardModal(card)}>
            <img src={card.imageSrc} alt={card.title} className="w-[200px] h-[120px] object-cover rounded-lg cursor-pointer" />
          </div>
        ))}
      </div>

      {/* ImageTextCardPopUp */}
      <ImageTextCardPopUp
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        card={selectedCard}
      />
    </div>
  );
}
