'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, ExternalLink, Sparkles, Clock, BookOpen, MoveRight, Circle } from 'lucide-react';

const sampleArticles = [
  {
    id: 1,
    image: '/Articles/1.jpg',
    title: 'The Future of Fintech in Africa',
    description: 'Exploring how blockchain and mobile technology are revolutionizing financial services across the continent.',
    category: 'Industry Insights',
    accentColor: '#0ea5e9',
    gradient: 'from-blue-500/80 via-cyan-400/60 to-teal-300/40',
    readTime: '5 min read'
  },
  {
    id: 2,
    image: '/Articles/2.jpg',
    title: 'Innovative SME Lending Models',
    description: 'How peer-to-peer lending platforms are bridging the funding gap for small businesses in emerging markets.',
    category: 'Lending',
    accentColor: '#10b981',
    gradient: 'from-emerald-500/80 via-green-400/60 to-lime-300/40',
    readTime: '4 min read'
  },
  {
    id: 3,
    image: '/Articles/3.jpg',
    title: 'Building Trust Through Data',
    description: 'Advanced algorithms and alternative data sources creating more accurate creditworthiness assessments.',
    category: 'Technology',
    accentColor: '#8b5cf6',
    gradient: 'from-purple-500/80 via-violet-400/60 to-fuchsia-300/40',
    readTime: '6 min read'
  },
  {
    id: 4,
    image: '/Articles/4.png',
    title: 'Navigating the Regulatory Landscape',
    description: 'Understanding compliance requirements for fintech platforms in multiple African jurisdictions.',
    category: 'Compliance',
    accentColor: '#f59e0b',
    gradient: 'from-amber-500/80 via-orange-400/60 to-yellow-300/40',
    readTime: '7 min read'
  }
];

export default function ArtisticArticlesSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const FADE_DURATION = 500; // Fade animation duration

  const fadeTransition = useCallback((direction = 'next') => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setIsVisible(false);
    
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentIndex((prev) => (prev + 1) % sampleArticles.length);
      } else if (direction === 'prev') {
        setCurrentIndex((prev) => (prev - 1 + sampleArticles.length) % sampleArticles.length);
      } else {
        setCurrentIndex(direction);
      }
      
      setTimeout(() => {
        setIsVisible(true);
        setIsTransitioning(false);
      }, 50);
    }, FADE_DURATION);
  }, [isTransitioning]);

  const nextArticle = useCallback(() => {
    fadeTransition('next');
  }, [fadeTransition]);

  const prevArticle = useCallback(() => {
    fadeTransition('prev');
  }, [fadeTransition]);

  const goToArticle = useCallback((index) => {
    if (index === currentIndex || isTransitioning) return;
    fadeTransition(index);
  }, [currentIndex, isTransitioning, fadeTransition]);

  // Auto-fading effect
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextArticle();
    }, 5000); // Auto-advance every 5 seconds
    
    return () => clearInterval(interval);
  }, [isPaused, nextArticle]);

  const currentArticle = sampleArticles[currentIndex];

  return (
    <div className="relative w-full bg-[#2B2B2B] p-4 md:p-6">
      {/* Content */}
      <div className="relative z-10">
        {/* Creative Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                <BookOpen size={20} className="text-white/80" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Sparkles size={10} className="text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Innovation Spotlight</h2>
              <p className="text-white/60 text-sm">Discover insights shaping Africa's financial future</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 transition-all duration-300"
              aria-label={isPaused ? "Resume rotation" : "Pause rotation"}
            >
              {isPaused ? (
                <Play size={18} className="text-white" />
              ) : (
                <Pause size={18} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Main Article Display */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevArticle}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-16 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center hover:bg-black/80 transition-all duration-300"
            aria-label="Previous article"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>

          <button
            onClick={nextArticle}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-16 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center hover:bg-black/80 transition-all duration-300"
            aria-label="Next article"
          >
            <ChevronRight size={20} className="text-white" />
          </button>

          {/* Article Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Preview Rail */}
            <div className="lg:col-span-4">
              <div className="relative h-full rounded-xl bg-white/5 border border-white/10 p-4">
                <h3 className="text-sm font-semibold text-white/70 mb-4 flex items-center gap-2">
                  <Circle size={8} className="fill-current text-blue-400" />
                  Article Series
                </h3>
                
                <div className="space-y-2">
                  {sampleArticles.map((article, index) => (
                    <div
                      key={article.id}
                      onClick={() => goToArticle(index)}
                      className={`relative p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-white/10'
                          : 'hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          index === currentIndex 
                            ? 'bg-gradient-to-r from-blue-400 to-cyan-400'
                            : 'bg-white/30'
                        }`}></div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <span className={`text-xs font-medium ${
                              index === currentIndex ? 'text-white' : 'text-white/60'
                            }`}>
                              {article.category}
                            </span>
                            <Clock size={10} className="text-white/40" />
                          </div>
                          <p className={`text-sm font-medium truncate ${
                            index === currentIndex ? 'text-white' : 'text-white/70'
                          }`}>
                            {article.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured Article */}
            <div className="lg:col-span-8">
              <div 
                className="relative bg-black/20 rounded-xl border border-white/10 overflow-hidden"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transition: `opacity ${FADE_DURATION}ms ease-in-out`
                }}
              >
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Image Section */}
                    <div className="md:col-span-1 relative">
                      <div className="relative aspect-square rounded-xl overflow-hidden">
                        <div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${currentArticle.image})` }}
                        />
                        
                        <div className="absolute top-4 left-4">
                          <div className="px-3 py-1.5 rounded-full bg-black/50 border border-white/20">
                            <span className="text-xs font-semibold text-white flex items-center gap-2">
                              <Sparkles size={10} className="text-blue-300" />
                              {currentArticle.category}
                            </span>
                          </div>
                        </div>
                        
                        <div className="absolute bottom-4 right-4">
                          <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-black/40">
                            <Clock size={10} className="text-white/80" />
                            <span className="text-xs text-white/90">{currentArticle.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:col-span-2">
                      <div className="h-full flex flex-col justify-between">
                        <div>
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 mb-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                            <span className="text-sm font-medium text-white/90">Featured Analysis</span>
                          </div>
                          
                          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                            {currentArticle.title}
                          </h2>
                          
                          <p className="text-white/80 leading-relaxed mb-6">
                            {currentArticle.description}
                          </p>
                        </div>

                        {/* Action Area */}
                        <div className="space-y-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              {sampleArticles.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => goToArticle(index)}
                                  className={`transition-all duration-300 ${
                                    index === currentIndex 
                                      ? 'w-8 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500'
                                      : 'w-4 h-1.5 rounded-full bg-white/30 hover:bg-white/50'
                                  }`}
                                  aria-label={`Go to article ${index + 1}`}
                                />
                              ))}
                            </div>
                            
                            <span className="text-sm text-white/50">
                              {currentIndex + 1} / {sampleArticles.length}
                            </span>
                          </div>
                          
                          <button className="group w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:shadow-lg transition-all duration-300">
                            <span>Explore Full Analysis</span>
                            <MoveRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}