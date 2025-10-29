"use client";

import React, { useState, useEffect, useRef } from "react";
import CryptoIcon from "./CryptoIcons";

interface HorizontalScrollSectionProps {
  className?: string;
}

export default function HorizontalScrollSection({ className = "" }: HorizontalScrollSectionProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const opsHeaderRef = useRef<HTMLDivElement>(null);
  const slides = ['Opportunity', 'Challenge', 'Solution'];

  // Track when OPS section reaches top to replace navbar
  useEffect(() => {
    const handleScroll = () => {
      const component = document.querySelector('[data-ops-section]') as HTMLElement;
      if (!component) return;

      const rect = component.getBoundingClientRect();
      const shouldShowOPSNav = rect.top <= 0 && rect.bottom > 0;
      
      const navbar = document.querySelector('nav');
      if (navbar) {
        navbar.style.display = shouldShowOPSNav ? 'none' : '';
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Track scroll position to update current section
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const slideWidth = containerWidth * 0.85; // Each slide is 85% of container
      
      // Calculate which slide is currently in view
      let newSection = 0;
      if (scrollLeft > slideWidth * 0.5) newSection = 1;
      if (scrollLeft > slideWidth * 1.5) newSection = 2;
      
      setCurrentSection(newSection);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation functions using scroll
  const nextSlide = () => {
    const container = scrollContainerRef.current;
    if (!container || currentSection >= slides.length - 1) return;
    
    const containerWidth = container.clientWidth;
    const slideWidth = containerWidth * 0.85;
    container.scrollTo({
      left: slideWidth * (currentSection + 1),
      behavior: 'smooth'
    });
  };

  const prevSlide = () => {
    const container = scrollContainerRef.current;
    if (!container || currentSection <= 0) return;
    
    const containerWidth = container.clientWidth;
    const slideWidth = containerWidth * 0.85;
    container.scrollTo({
      left: slideWidth * (currentSection - 1),
      behavior: 'smooth'
    });
  };

  const goToSlide = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const containerWidth = container.clientWidth;
    const slideWidth = containerWidth * 0.85;
    container.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth'
    });
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    }
  };

  const sections = [
    {
      id: 'opportunity',
      title: 'The Opportunity',
      subtitle: 'A Growing Market',
      bg: 'bg-gradient-to-br from-[#1a1a1a] to-[#6cb3e3]',
      textColor: 'text-white',
      cardBg: 'bg-white/10 border-white/20',
      borderColor: 'border-white/30',
      stats: [
        { 
          label: '', 
          value: '$11T',
          desc: 'crypto market (projected 2030)',
          paragraph: 'The total cryptocurrency market is expected to reach $11 trillion by 2030, driven by institutional adoption, regulatory clarity, and the growing demand for decentralized financial services.'
        },
        { 
          label: '', 
          value: '$2.8T',
          desc: 'stablecoin market (projected 2030)',
          paragraph: 'Stablecoins are projected to reach $2.8 trillion by 2030, becoming the primary medium for crypto transactions, payments, and DeFi protocols.'
        },
      ],
      image: '/Untitled design (2).gif',
      imageAlt: 'Market growth chart',
    },
    {
      id: 'challenge',
      title: 'The Challenge',
      subtitle: 'A Fragmented Reality',
      bg: 'bg-gradient-to-b from-white via-[#f8fbff] to-[#eef4fa]',
      textColor: 'text-gray-900',
      cardBg: 'bg-gray-50 border-gray-200',
      borderColor: 'border-[#b9aad2]',
      stats: [
        { 
          label: 'Network Chaos', 
          desc: 'Multiple networks, bridges, and protocols create complexity and security risks. Users navigate dozens of different blockchains each with unique mechanics, fees, and risks.'
        },
        { 
          label: 'Exchange Fragmentation', 
          desc: 'Different exchanges, different interfaces, different risks. Every platform has unique policies, fees, and user experiences that make portfolio management overwhelming.'
        },
      ],
      image: '/Untitled design (3).gif',
      imageAlt: 'Drake pointing',
    },
    {
      id: 'solution',
      title: 'The Solution',
      subtitle: 'Crypto UX needs a makeover',
      bg: 'bg-gradient-to-br from-[#1a1a1a] to-[#6cb3e3]',
      textColor: 'text-white',
      cardBg: 'bg-white/10 border-white/20',
      borderColor: 'border-white/30',
      stats: [
        { label: 'Current Way: ManualFi', desc: 'You open up several tabs, extensions, and wallets to invest in Crypto and Defi yourself.' },
        { label: 'New Way: AgentFi', desc: 'You let an AI agent automatically invest for you! Reduced friction, less stress, and more efficient.' },
      ],
      image: '/drake.png',
      imageAlt: 'Solution illustration',
    },
  ];

  return (
    <div className={`relative ${className}`} data-ops-section>
      {/* OPS Header */}
      <div ref={opsHeaderRef} className={`sticky top-0 h-20 backdrop-blur-sm border-b z-50 transition-all duration-300 ${
        currentSection === 1 
          ? 'bg-gradient-to-r from-[#1a1a1a] to-[#6cb3e3] border-gray-500' 
          : 'bg-white/95 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-20">
            <nav className="flex space-x-16">
              {slides.map((section, index) => (
                <button
                  key={section}
                  onClick={() => goToSlide(index)}
                  className={`text-base font-medium transition-colors duration-200 ${
                    currentSection === index
                      ? 'text-[#6cb3e3] border-b-2 border-[#6cb3e3]'
                      : currentSection === 1 
                        ? 'text-white/70 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {section}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        className="relative"
        style={{ height: 'calc(100vh - 70px)' }}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel" 
        aria-label="Opportunity Problem Solution slides"
      >
        {/* Left edge gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white via-white/70 to-transparent dark:from-neutral-950 dark:via-neutral-950/70 pointer-events-none z-10" />
        
        {/* Right edge gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white via-white/70 to-transparent dark:from-neutral-950 dark:via-neutral-950/70 pointer-events-none z-10" />

        {/* Arrow Navigation */}
        {currentSection > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white hover:bg-gray-50 rounded-full p-4 shadow-lg border-2 border-gray-200 hover:border-[#19B4A8] transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none group"
            aria-label="Previous slide"
          >
            <svg className="w-7 h-7 text-gray-800 group-hover:text-[#19B4A8] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {currentSection < slides.length - 1 && (
          <button
            onClick={nextSlide}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white hover:bg-gray-50 rounded-full p-4 shadow-lg border-2 border-gray-200 hover:border-[#19B4A8] transition-all duration-300 hover:scale-110 group ${
              currentSection === 0 
                ? 'animate-bounce hover:animate-none' 
                : 'animate-pulse hover:animate-none'
            }`}
            aria-label="Next slide"
          >
            <svg className="w-7 h-7 text-gray-800 group-hover:text-[#19B4A8] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="flex h-full overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {sections.map((section, index) => {
            // Configure snap alignment and width for peek effect
            let snapAlign, slideWidth, marginConfig;
            
            if (index === 0) {
              // First slide: 85% width, snap-start, 15% peek right
              snapAlign = 'snap-start';
              slideWidth = 'w-[85vw]';
              marginConfig = 'mr-0';
            } else if (index === 1) {
              // Middle slide: 85% width, snap-center, 7.5% peek on each side  
              snapAlign = 'snap-center';
              slideWidth = 'w-[85vw]';
              marginConfig = 'mx-0';
            } else {
              // Last slide: 85% width, snap-end, 15% peek left
              snapAlign = 'snap-end';
              slideWidth = 'w-[85vw]';
              marginConfig = 'ml-0';
            }
            
            return (
              <article 
                key={section.id}
                className={`${slideWidth} ${snapAlign} ${marginConfig} h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 flex-shrink-0 ${section.bg} relative overflow-hidden`}
                aria-roledescription="slide"
                aria-label={`${section.title} (${index + 1} of ${sections.length})`}
              >
              {/* Decorative crypto icons for challenge section */}
              {index === 1 && (
                <>
                  <div className="absolute top-[8%] left-[3%] w-20 sm:w-24 border-[3px] border-[#6cb3e3]/50 rounded-lg rotate-12 shadow-lg shadow-[#6cb3e3]/10 backdrop-blur-sm bg-white/40 animate-float flex items-center justify-center">
                    <CryptoIcon symbol="eth" size={80} />
              </div>
                  <div className="absolute top-[18%] left-[12%] w-16 sm:w-20 border-[3px] border-[#6cb3e3]/40 rounded-lg shadow-lg shadow-[#6cb3e3]/10 backdrop-blur-sm bg-white/30 animate-float-delayed flex items-center justify-center">
                    <CryptoIcon symbol="usdt" size={65} />
                  </div>
                  <div className="absolute top-[8%] right-[3%] w-20 sm:w-24 border-[3px] border-[#b9aad2]/50 rounded-lg shadow-lg shadow-[#b9aad2]/10 backdrop-blur-sm bg-gradient-to-br from-white/50 to-[#ede7f6]/30 animate-float flex items-center justify-center">
                    <CryptoIcon symbol="near" size={80} />
                  </div>
                  <div className="absolute top-[12%] right-[12%] w-16 sm:w-20 border-[3px] border-[#6cb3e3]/40 rounded-lg rotate-6 backdrop-blur-sm bg-white/30 animate-float-delayed flex items-center justify-center">
                    <CryptoIcon symbol="usdc" size={65} />
                </div>
                </>
              )}
              
              <div className="max-w-7xl mx-auto w-full relative z-10">
              <div className="text-center mb-6">
                  <span className={`inline-block border ${section.borderColor} px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[10px] xs:text-xs sm:text-sm font-medium tracking-wider uppercase mb-2 ${section.textColor === 'text-white' ? 'text-white' : 'text-[#b9aad2]'}`}>
                    {section.title}
                </span>
                  <h2 className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 px-4 ${section.textColor}`}>
                    <span className={section.textColor === 'text-white' 
                      ? 'bg-gradient-to-r from-white via-[#6cb3e3] to-white bg-clip-text text-transparent'
                      : 'bg-gradient-to-r from-gray-900 via-[#6cb3e3] to-gray-900 bg-clip-text text-transparent'
                    }>
                      {section.subtitle}
                  </span>
                </h2>
              </div>
              
              <div className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${index === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {index === 1 ? (
                    <>
                      <div className="relative w-full bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden h-[360px]">
                        <img src={section.image} alt={section.imageAlt} className="w-full h-full object-cover rounded-2xl" />
                      </div>
                      <div className="space-y-8">
                        {section.stats.map((stat, idx) => (
                          <div key={idx} className={`${section.cardBg} backdrop-blur-sm rounded-2xl p-6 border h-full`}>
                            {stat.label && (
                              <h3 className={`text-2xl font-bold mb-4 ${section.textColor === 'text-white' ? 'text-white' : 'text-gray-900'}`}>
                                {stat.label}
                              </h3>
                            )}
                            {'value' in stat && stat.value && (
                              <div className="flex items-baseline gap-2 mb-3">
                                <div className={`text-4xl font-bold ${
                                  section.textColor === 'text-white' ? 'text-white' : 'text-gray-900'
                                }`}>{stat.value}</div>
                                {stat.desc && (
                                  <span className={`text-lg ${
                                    section.textColor === 'text-white' ? 'text-white/80' : 'text-gray-700'
                                  }`}>{stat.desc}</span>
                                )}
                              </div>
                            )}
                            {!('value' in stat) && stat.desc && (
                              <p className={`mb-3 ${section.textColor === 'text-white' ? 'text-white/80' : 'text-gray-700'}`}>{stat.desc}</p>
                            )}
                            {'paragraph' in stat && stat.paragraph && (
                              <p className={`leading-relaxed ${
                                section.textColor === 'text-white' ? 'text-white/90' : 'text-gray-800'
                              }`}>{stat.paragraph}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-8">
                        {section.stats.map((stat, idx) => (
                          <div key={idx} className={`${section.cardBg} backdrop-blur-sm rounded-2xl p-6 border h-full`}>
                            {stat.label && (
                              <h3 className={`text-2xl font-bold mb-4 ${section.textColor === 'text-white' ? 'text-white' : 'text-gray-900'}`}>
                                {stat.label}
                              </h3>
                            )}
                            {'value' in stat && stat.value && (
                              <div className="flex items-baseline gap-2 mb-3">
                                <div className={`text-4xl font-bold ${
                                  section.textColor === 'text-white' ? 'text-white' : 'text-gray-900'
                                }`}>{stat.value}</div>
                                {stat.desc && (
                                  <span className={`text-lg ${
                                    section.textColor === 'text-white' ? 'text-white/80' : 'text-gray-700'
                                  }`}>{stat.desc}</span>
                                )}
                              </div>
                            )}
                            {!('value' in stat) && stat.desc && (
                              <p className={`mb-3 ${section.textColor === 'text-white' ? 'text-white/80' : 'text-gray-700'}`}>{stat.desc}</p>
                            )}
                            {'paragraph' in stat && stat.paragraph && (
                              <p className={`leading-relaxed ${
                                section.textColor === 'text-white' ? 'text-white/90' : 'text-gray-800'
                              }`}>{stat.paragraph}</p>
                            )}
                  </div>
                        ))}
                  </div>
                      <div className="relative w-full bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden h-[400px]">
                        <img src={section.image} alt={section.imageAlt} className="w-full h-full object-contain rounded-2xl p-4" />
                </div>
                    </>
                  )}
                </div>
              </div>
              </article>
            );
          })}
        </div>
              
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-50">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                currentSection === index ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Hide scrollbars */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </div>
  );
}