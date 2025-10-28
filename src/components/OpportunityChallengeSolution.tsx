"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import CryptoIcon from "./CryptoIcons";

export default function OpportunityChallengeSolution() {
  const [activeSection, setActiveSection] = useState(1);
  const [showJourneyHeader, setShowJourneyHeader] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  
  // Refs for each section
  const opportunityRef = useRef<HTMLElement>(null);
  const challengeRef = useRef<HTMLElement>(null);
  const solutionRef = useRef<HTMLElement>(null);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all sections
    if (opportunityRef.current) observer.observe(opportunityRef.current);
    if (challengeRef.current) observer.observe(challengeRef.current);
    if (solutionRef.current) observer.observe(solutionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const opportunitySection = document.getElementById('opportunity');
      const challengeSection = document.getElementById('challenge');
      const solutionSection = document.getElementById('solution');
      
      if (opportunitySection && challengeSection && solutionSection) {
        const scrollY = window.scrollY;
        
        // Show journey header from the very beginning until we're past the solution section
        // Disappear 100px before the end of the solution section
        const solutionBottom = solutionSection.offsetTop + solutionSection.offsetHeight - 100;
        const inJourneyArea = scrollY < solutionBottom;
        setShowJourneyHeader(inJourneyArea);
        
        // Determine active section - transition when BOTTOM of sticky nav hits the next section
        const stickyNavHeight = 80; // h-20 = 80px
        const opportunityTop = opportunitySection.offsetTop;
        const challengeTop = challengeSection.offsetTop;
        const solutionTop = solutionSection.offsetTop;
        
        // Adjust thresholds so transition happens when bottom of sticky nav hits the section
        const opportunityThreshold = opportunityTop - stickyNavHeight;
        const challengeThreshold = challengeTop - stickyNavHeight;
        const solutionThreshold = solutionTop - stickyNavHeight;
        
        if (scrollY < opportunityThreshold) {
          setActiveSection(1); // Hero section - show "01. The Opportunity" as active
        } else if (scrollY < challengeThreshold) {
          setActiveSection(1); // Opportunity section
        } else if (scrollY < solutionThreshold) {
          setActiveSection(2); // Challenge section
        } else if (scrollY < solutionBottom) {
          setActiveSection(3); // Solution section
        } else {
          setActiveSection(3); // Stay on solution until we're past the section
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Small delay to ensure sticky nav is rendered
      setTimeout(() => {
        // Account for sticky header height (h-20 = 80px) + some padding for better positioning
        const stickyHeaderHeight = 80; // h-20 = 80px
        const padding = 40; // Increased padding to position content better
        const totalOffset = stickyHeaderHeight + padding;
        
        const elementPosition = element.offsetTop - totalOffset;
        window.scrollTo({
          top: Math.max(0, elementPosition), // Ensure we don't scroll to negative position
          behavior: 'smooth'
        });
      }, 50); // Small delay to ensure layout is stable
    }
  };

  // Helper functions for cleaner logic
  const isDarkTheme = activeSection === 2;
  const getActiveColor = (sectionNum: number) => {
    if (activeSection === sectionNum) {
      return isDarkTheme ? 'bg-[#6cb3e3]' : 'bg-[#6cb3e3]';
    }
    return 'bg-gray-300';
  };

  const getActiveTextColor = (sectionNum: number) => {
    if (activeSection === sectionNum) {
      return isDarkTheme ? 'text-[#6cb3e3]' : 'text-[#6cb3e3]';
    }
    return isDarkTheme ? 'text-white/80' : 'text-gray-600';
  };

  const getConnectorColor = (sectionNum: number) => {
    if (activeSection >= sectionNum) {
      return isDarkTheme ? 'bg-[#6cb3e3]/50' : 'bg-[#6cb3e3]/50';
    }
    return 'bg-gray-300';
  };

  return (
    <>
      {/* Sticky Journey Indicator - Only show when in journey sections */}
      {showJourneyHeader && (
        <div className={`sticky top-0 z-50 h-20 px-4 sm:px-6 lg:px-8 border-b transition-all duration-500 ${
          isDarkTheme ? 'bg-gradient-to-br from-[#1a1a1a] to-[#6cb3e3] border-[#6cb3e3]/20' : 'bg-gradient-to-b from-white via-[#f8fbff] to-[#eef4fa] border-gray-200'
        }`}>
          <div className="max-w-7xl mx-auto h-full">
            <div className="flex items-center justify-center space-x-8 h-full">
              {/* Section 1 */}
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${getActiveColor(1)}`}>
                  <span className={`font-bold text-sm transition-colors duration-300 ${
                    activeSection === 1 ? 'text-white' : 'text-gray-600'
                  }`}>01</span>
                </div>
                <button 
                  onClick={() => scrollToSection('opportunity')}
                  className={`font-semibold transition-colors duration-300 hover:opacity-80 ${getActiveTextColor(1)}`}
                >
                  The Opportunity
                </button>
              </div>
              
              {/* Connector */}
              <div className={`w-12 h-0.5 transition-colors duration-300 ${getConnectorColor(2)}`}></div>
              
              {/* Section 2 */}
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${getActiveColor(2)}`}>
                  <span className={`font-bold text-sm transition-colors duration-300 ${
                    activeSection === 2 ? 'text-white' : 'text-gray-600'
                  }`}>02</span>
                </div>
                <button 
                  onClick={() => scrollToSection('challenge')}
                  className={`font-semibold transition-colors duration-300 hover:opacity-80 ${getActiveTextColor(2)}`}
                >
                  The Challenge
                </button>
              </div>
              
              {/* Connector */}
              <div className={`w-12 h-0.5 transition-colors duration-300 ${getConnectorColor(3)}`}></div>
              
              {/* Section 3 */}
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${getActiveColor(3)}`}>
                  <span className={`font-bold text-sm transition-colors duration-300 ${
                    activeSection === 3 ? 'text-white' : 'text-gray-600'
                  }`}>03</span>
                </div>
                <button 
                  onClick={() => scrollToSection('solution')}
                  className={`font-semibold transition-colors duration-300 hover:opacity-80 ${getActiveTextColor(3)}`}
                >
                  The Solution
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section 1: The Opportunity */}
      <section 
        ref={opportunityRef}
        id="opportunity" 
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a1a1a] to-[#6cb3e3] transition-all duration-1000 ${
          visibleSections.has('opportunity') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block border border-white/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[10px] xs:text-xs sm:text-sm font-medium tracking-wider uppercase text-white/80 mb-3 sm:mb-4">
                The Opportunity
              </span>

              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-white px-4">
                <span className="bg-gradient-to-r from-white via-[#8ffcf3] to-white bg-clip-text text-transparent">
                  A Growing Market
                </span>
              </h2>
              
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto px-4">
                The estimated growth metrics within the crypto industry are clear, the best is yet to come. Nothing is growing quite like the stablecoin industry.
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Chart */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <Image
                  src="/market.png"
                  alt="Global Cryptocurrency Market Size Chart 2018-2030"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                <div className="space-y-8">
                  {/* Crypto Market */}
                  <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#8ffcf3]/20">
                    <div className="absolute -left-4 top-6 w-1 h-16 bg-gradient-to-b from-[#8ffcf3] to-[#8ffcf3]/50 rounded-full"></div>
                    <div className="pl-8">
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-5xl font-bold text-white">$11T</span>
                        <span className="text-lg text-white font-medium">crypto market (projected 2030)</span>
                      </div>
                      <p className="text-white/80 mb-3">2x growth from today&apos;s market cap</p>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Bitcoin&apos;s institutional adoption, Ethereum&apos;s ecosystem growth, 
                        and emerging layer-2 solutions are driving this expansion.
                      </p>
                    </div>
                  </div>
                  
                  {/* Stablecoin Market */}
                  <div className="relative p-6 bg-[#6cb3e3]/10 backdrop-blur-sm rounded-2xl border border-[#6cb3e3]/30">
                    <div className="absolute -left-4 top-6 w-1 h-16 bg-gradient-to-b from-[#6cb3e3] to-[#6cb3e3]/50 rounded-full"></div>
                    <div className="pl-8">
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-5xl font-bold text-white">$3.7T</span>
                        <span className="text-lg text-white font-medium">stablecoin market (projected 2030)</span>
                      </div>
                      <p className="text-white/80 mb-3">15x explosive growth opportunity</p>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Stablecoins are becoming the backbone of DeFi, cross-border payments, 
                        and digital commerce. This is where TemporAI excels.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Challenge */}
      <section 
        ref={challengeRef}
        id="challenge" 
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#f8fbff] to-[#eef4fa] relative overflow-hidden transition-all duration-1000 ${
          visibleSections.has('challenge') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Enhanced Spotlight effect */}
        <div className="absolute -top-10 left-0 h-screen w-screen opacity-30 sm:opacity-40 md:opacity-50 pointer-events-none">
          <svg
            className="animate-spotlight h-[169%] w-[138%] lg:w-[84%] opacity-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3787 2842"
            fill="none"
          >
            <g filter="url(#filter)">
              <ellipse
                cx="1924.71"
                cy="273.501"
                rx="1924.71"
                ry="273.501"
                transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
                fill="#6cb3e3"
                fillOpacity="0.3"
              ></ellipse>
            </g>
            <defs>
              <filter
                id="filter"
                x="0.860352"
                y="0.838989"
                width="3785.16"
                height="2840.26"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="151"
                  result="effect1_foregroundBlur_1065_8"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
        </div>

        {/* Additional color stripe - right side */}
        <div className="absolute -top-20 right-0 h-screen w-screen opacity-25 sm:opacity-35 md:opacity-40 pointer-events-none">
          <svg
            className="animate-spotlight h-[169%] w-[138%] lg:w-[84%] opacity-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3787 2842"
            fill="none"
          >
            <g filter="url(#filter2)">
              <ellipse
                cx="1924.71"
                cy="273.501"
                rx="1924.71"
                ry="273.501"
                transform="matrix(0.822377 -0.568943 0.568943 0.822377 3631.88 2291.09)"
                fill="#9a84be"
                fillOpacity="0.25"
              ></ellipse>
            </g>
            <defs>
              <filter
                id="filter2"
                x="0.860352"
                y="0.838989"
                width="3785.16"
                height="2840.26"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="151"
                  result="effect1_foregroundBlur_1065_8"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
        </div>

        {/* Third color stripe - center */}
        <div className="absolute -top-30 left-1/4 h-screen w-screen opacity-20 sm:opacity-30 md:opacity-35 pointer-events-none">
          <svg
            className="animate-spotlight h-[169%] w-[138%] lg:w-[84%] opacity-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3787 2842"
            fill="none"
          >
            <g filter="url(#filter3)">
              <ellipse
                cx="1924.71"
                cy="273.501"
                rx="1924.71"
                ry="273.501"
                transform="matrix(-0.5 -0.866 0.866 -0.5 3631.88 2291.09)"
                fill="#6cb3e3"
                fillOpacity="0.2"
              ></ellipse>
            </g>
            <defs>
              <filter
                id="filter3"
                x="0.860352"
                y="0.838989"
                width="3785.16"
                height="2840.26"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="151"
                  result="effect1_foregroundBlur_1065_8"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
        </div>

        {/* Purple hue circle effect - bottom right (inspired by ProductSpotlight) */}
        <div className="absolute bottom-[-40px] sm:bottom-[-80px] right-[-40px] sm:right-[-80px] w-80 sm:w-96 md:w-[28rem] h-80 sm:h-96 md:h-[28rem] bg-[#9a84be]/25 rounded-full blur-3xl pointer-events-none"></div>

        {/* Blue/Purple hue effects - linear streaks instead of circles */}
        {/* Top-left blue streak */}
        <div className="absolute top-[-50px] sm:top-[-80px] left-[-50px] sm:left-[-80px] w-96 sm:w-[28rem] md:w-[32rem] h-32 sm:h-40 md:h-48 bg-gradient-to-r from-[#6cb3e3]/20 via-[#6cb3e3]/25 to-transparent rounded-full blur-2xl pointer-events-none"></div>
        
        {/* Bottom-right purple streak */}
        <div className="absolute bottom-[-40px] sm:bottom-[-80px] right-[-40px] sm:right-[-80px] w-80 sm:w-96 md:w-[28rem] h-32 sm:h-40 md:h-48 bg-gradient-to-l from-[#9a84be]/25 via-[#9a84be]/30 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        
        {/* Center-right vertical purple streak */}
        <div className="absolute top-1/3 right-[-30px] sm:right-[-50px] w-32 sm:w-40 md:w-48 h-96 sm:h-[28rem] md:h-[32rem] bg-gradient-to-b from-[#9a84be]/15 via-[#6cb3e3]/20 to-[#9a84be]/15 rounded-full blur-2xl pointer-events-none"></div>
        
        {/* Bottom-left blue streak */}
        <div className="absolute bottom-[-30px] sm:bottom-[-60px] left-[-30px] sm:left-[-60px] w-64 sm:w-80 md:w-96 h-24 sm:h-32 md:h-40 bg-gradient-to-r from-[#6cb3e3]/18 via-[#6cb3e3]/22 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        
        {/* Top-center purple wave */}
        <div className="absolute top-[-40px] sm:top-[-60px] left-1/2 -translate-x-1/2 w-96 sm:w-[28rem] md:w-[32rem] h-32 sm:h-40 md:h-48 bg-gradient-to-r from-transparent via-[#9a84be]/12 to-transparent rounded-full blur-2xl pointer-events-none"></div>

        {/* Floating shapes with professional crypto icons */}
        <div className="absolute top-[15%] left-[8%] w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-[2px] sm:border-[3px] border-[#6cb3e3]/40 rounded-lg rotate-12 shadow-lg shadow-[#6cb3e3]/10 backdrop-blur-sm bg-white/30 hover:bg-white/50 transition-all duration-500 group cursor-pointer flex items-center justify-center animate-float">
          <div className="group-hover:scale-110 transition-transform duration-300 animate-rotate-slow">
            <CryptoIcon symbol="near" size={60} />
          </div>
        </div>
        
        <div className="absolute top-[25%] left-[15%] w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-[2px] sm:border-[3px] border-[#6cb3e3]/30 rounded-lg rotate-[30deg] shadow-lg shadow-[#6cb3e3]/8 backdrop-blur-sm bg-white/20 hover:bg-white/40 transition-all duration-500 group cursor-pointer flex items-center justify-center animate-float-delayed">
          <div className="group-hover:scale-110 transition-transform duration-300 animate-rotate-slow">
            <CryptoIcon symbol="ada" size={50} />
          </div>
        </div>
        
        
        <div className="hidden sm:block absolute top-1/2 right-[15%] w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-br from-[#6cb3e3]/30 to-[#9a84be]/20 rounded-lg rotate-[60deg] shadow-xl shadow-[#6cb3e3]/20 backdrop-blur-md flex items-center justify-center group cursor-pointer hover:rotate-90 transition-all duration-700 animate-float">
          <div className="group-hover:scale-110 transition-transform duration-300 animate-rotate-slow">
            <CryptoIcon symbol="grt" size={40} />
          </div>
        </div>

        {/* Additional floating shapes for white space - positioned above image */}
        <div className="absolute top-[15%] right-[8%] w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-[2px] sm:border-[3px] border-[#6cb3e3]/40 rounded-lg rotate-12 shadow-lg shadow-[#6cb3e3]/10 backdrop-blur-sm hover:bg-white/50 transition-all duration-500 group cursor-pointer flex items-center justify-center animate-float">
          <div className="group-hover:scale-110 transition-transform duration-300 animate-rotate-slow">
            <CryptoIcon symbol="dai" size={60} />
          </div>
        </div>
        
        <div className="absolute top-[25%] right-[15%] w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-[2px] sm:border-[3px] border-[#6cb3e3]/30 rounded-lg rotate-[30deg] shadow-lg shadow-[#6cb3e3]/8 backdrop-blur-sm hover:bg-white/40 transition-all duration-500 group cursor-pointer flex items-center justify-center animate-float-delayed">
          <div className="group-hover:scale-110 transition-transform duration-300 animate-rotate-slow">
            <CryptoIcon symbol="avax" size={50} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block border border-[#b9aad2] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[10px] xs:text-xs sm:text-sm font-medium tracking-wider uppercase text-[#b9aad2] mb-3 sm:mb-4">
                The Challenge
              </span>

              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-gray-900 px-4">
                <span className="bg-gradient-to-r from-gray-900 via-[#6cb3e3] to-gray-900 bg-clip-text text-transparent">
                  A Fragmented Reality
                </span>
              </h2>

              <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed px-4 sm:px-6">
                Navigating the stablecoin and DeFi sector is no simple feat. You have to manage various networks, tabs, and bridges to successfully manage your portfolio. This process is overly complicated, time consuming, and risky.
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
                <div className="order-1 lg:order-1">
                  <div className="space-y-8">
                    {/* Multi-Chain Chaos */}
                    <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#6cb3e3]/20">
                      <div className="absolute -left-4 top-6 w-1 h-16 bg-gradient-to-b from-[#6cb3e3] to-[#6cb3e3]/50 rounded-full"></div>
                      <div className="pl-8">
                        <div className="flex items-baseline gap-2 mb-3">
                          <span className="text-4xl font-bold text-black">Network</span>
                          <span className="text-lg text-black font-medium">Chaos</span>
                        </div>
                        <p className="text-black mb-3">Ethereum, Polygon, Arbitrum, Optimism, Base — each with different gas costs, bridge risks, and yield opportunities.</p>
                      </div>
                    </div>

                    {/* Exchange Sprawl */}
                    <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#9a84be]/30">
                      <div className="absolute -left-4 top-6 w-1 h-16 bg-gradient-to-b from-[#9a84be] to-[#9a84be]/50 rounded-full"></div>
                      <div className="pl-8">
                        <div className="flex items-baseline gap-2 mb-3">
                          <span className="text-4xl font-bold text-black">Exchange</span>
                          <span className="text-lg text-black font-medium">Sprawl</span>
                        </div>
                        <p className="text-black mb-3">CEX vs DEX, centralized vs decentralized, each with different liquidity, fees, and yield rates.</p>
                      </div>
                    </div>

                    {/* Duplicate Network Chaos for better spacing */}
                    <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#6cb3e3]/20">
                      <div className="absolute -left-4 top-6 w-1 h-16 bg-gradient-to-b from-[#6cb3e3] to-[#6cb3e3]/50 rounded-full"></div>
                      <div className="pl-8">
                        <div className="flex items-baseline gap-2 mb-3">
                          <span className="text-4xl font-bold text-black">Network</span>
                          <span className="text-lg text-black font-medium">Chaos</span>
                        </div>
                        <p className="text-black mb-3">Ethereum, Polygon, Arbitrum, Optimism, Base — each with different gas costs, bridge risks, and yield opportunities.</p>
                      </div>
                    </div>
                  </div>
                </div>

            {/* Right - Character Image */}
            <div className="order-2 lg:order-2">
              <div className="relative">
                <img
                  src="/losingMind.png"
                  alt="Overwhelmed by DeFi Complexity"
                  width={600}
                  height={600}
                  className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Solution */}
      <section 
        ref={solutionRef}
        id="solution" 
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a1a1a] to-[#6cb3e3] transition-all duration-1000 ${
          visibleSections.has('solution') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block border border-white/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[10px] xs:text-xs sm:text-sm font-medium tracking-wider uppercase text-white/80 mb-3 sm:mb-4">
                The Solution
              </span>

              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-white px-4">
                <span className="bg-gradient-to-r from-white via-[#8ffcf3] to-white bg-clip-text text-transparent">
                  Crypto UX needs a makeover
                </span>
              </h2>
              
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto px-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Character Image */}
            <div className="order-1 lg:order-1">
              <div className="relative">
                <Image
                  src="/drake.png"
                  alt="Drake - The Solution"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-2 lg:order-2">
              <div className="space-y-8 -mt-20">
                <div className="space-y-8">
                  {/* Current Way: ManualFI */}
                  <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-400/20">
                    <div className="absolute -left-4 top-6 w-1 h-16 bg-gradient-to-b from-gray-400 to-gray-400/50 rounded-full"></div>
                    <div className="pl-8">
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-4xl font-bold text-white">Current Way:</span>
                        <span className="text-lg text-white font-medium">ManualFI</span>
                      </div>
                      <p className="text-white leading-relaxed">
                        You open up multiple browsers, manage dozens of tabs, and navigate through multiple extensions just to have the chance to participate in DeFi. It&apos;s overwhelming, it&apos;s constantly changing, and it&apos;s a major headache. 
                      </p>
                    </div>
                  </div>

                  {/* New Way: AgentFi */}
                  <div className="relative p-6 bg-[#8ffcf3]/10 backdrop-blur-sm rounded-2xl border border-[#8ffcf3]/30">
                    <div className="absolute -left-4 top-6 w-1 h-16 bg-gradient-to-b from-[#8ffcf3] to-[#8ffcf3]/50 rounded-full"></div>
                    <div className="pl-8">
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-4xl font-bold text-white">New Way:</span>
                        <span className="text-lg text-white font-medium">AgentFi</span>
                      </div>
                      <p className="text-white leading-relaxed">
                        You let an AI agent automatically invest for you! 
                        Set your preferences once, and watch as your portfolio optimizes itself 24/7 across the entire DeFi ecosystem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
