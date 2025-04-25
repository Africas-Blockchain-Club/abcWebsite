"use client";

import React from 'react';

// Define an interface for the card data structure (can be imported if shared)
interface CardData {
  imageSrc: string;
  title: string;
  description: string;
}

// Define props for the modal
interface ImageTextCardPopUpProps {
  isOpen: boolean;
  onClose: () => void;
  card: CardData | null; // Pass the specific card data to the modal
}

const ImageTextCardPopUp: React.FC<ImageTextCardPopUpProps> = ({ isOpen, onClose, card }) => {
  if (!isOpen || !card) return null; // Don't render if not open or no card data

  // Handle clicks outside the modal content to close it
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 transition-opacity duration-300"
      onClick={handleBackdropClick} // Close on backdrop click
    >
      <div className="bg-gray-900 rounded-lg shadow-xl p-8 max-w-md w-full relative transform transition-all duration-300 scale-100">
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <h2 className="text-2xl font-semibold mb-4 text-white">Register for: {card.title}</h2>
        
        {/* Sign-up Form Placeholder */}
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="your.email@example.com" />
          </div>
          {/* Add more fields as needed (e.g., phone, organization) */}
          
          <button 
            type="submit" 
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-md transition-colors duration-300"
          >
            Submit Registration
          </button>
        </form>
        
        {/* Optional: Display card description or other info */}
        <p className="text-sm text-gray-400 mt-4">{card.description}</p>
      </div>
    </div>
  );
};

export default ImageTextCardPopUp;
