"use client";

import { useState, useEffect, useRef } from "react";

export default function Roadmap() {
  const [milestonesAnimated, setMilestonesAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for section fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Intersection Observer for milestones animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !milestonesAnimated) {
            setMilestonesAnimated(true);
            
            // Animate timeline fill
            const timelineFill = document.querySelector('.timeline-fill') as HTMLElement;
            const timelineFillMobile = document.querySelector('.timeline-fill-mobile') as HTMLElement;
            
            if (timelineFill) {
              setTimeout(() => {
                timelineFill.style.width = '100%';
              }, 500);
            }
            
            if (timelineFillMobile) {
              setTimeout(() => {
                timelineFillMobile.style.height = '100%';
              }, 500);
            }
            
            // Animate milestone cards
            const milestoneCards = document.querySelectorAll('.milestone-card');
            milestoneCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-in');
              }, 800 + (index * 200));
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    const milestonesSection = document.getElementById('roadmap');
    if (milestonesSection) {
      observer.observe(milestonesSection);
    }

    return () => observer.disconnect();
  }, [milestonesAnimated]);

  return (
    <section 
      ref={sectionRef}
      id="roadmap" 
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#f8fbff] to-[#eef4fa] relative overflow-hidden transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#6cb3e3]/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#6cb3e3]/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-[#6cb3e3]/25 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-[#6cb3e3]/35 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-[#6cb3e3]/20 rounded-full animate-pulse delay-1500"></div>
      </div>

      {/* Background hue effects - matching Hero section style */}
      {/* Top-left blue streak */}
      <div className="absolute top-[-50px] sm:top-[-80px] left-[-50px] sm:left-[-80px] w-96 sm:w-[28rem] md:w-[32rem] h-32 sm:h-40 md:h-48 bg-gradient-to-r from-[#6cb3e3]/20 via-[#6cb3e3]/25 to-transparent rounded-full blur-2xl pointer-events-none"></div>
      
      {/* Bottom-right purple streak */}
      <div className="absolute bottom-[-40px] sm:bottom-[-80px] right-[-40px] sm:right-[-80px] w-80 sm:w-96 md:w-[28rem] h-32 sm:h-40 md:h-48 bg-gradient-to-l from-[#9a84be]/25 via-[#9a84be]/30 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Center-right vertical purple streak */}
      <div className="absolute top-1/3 right-[-30px] sm:right-[-50px] w-32 sm:w-40 md:w-48 h-96 sm:h-[28rem] md:h-[32rem] bg-gradient-to-b from-[#9a84be]/15 via-[#6cb3e3]/20 to-[#9a84be]/15 rounded-full blur-2xl pointer-events-none"></div>
      
      {/* Bottom-left blue streak */}
      <div className="absolute bottom-[-30px] sm:bottom-[-60px] left-[-30px] sm:left-[-60px] w-64 sm:w-80 md:w-96 h-24 sm:h-32 md:h-40 bg-gradient-to-r from-[#6cb3e3]/18 via-[#6cb3e3]/22 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Top-center horizontal purple streak */}
      <div className="absolute top-[-40px] sm:top-[-60px] left-1/2 -translate-x-1/2 w-96 sm:w-[28rem] md:w-[32rem] h-32 sm:h-40 md:h-48 bg-gradient-to-r from-transparent via-[#9a84be]/12 to-transparent rounded-full blur-2xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block border border-[#b9aad2] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[10px] xs:text-xs sm:text-sm font-medium tracking-wider uppercase text-[#b9aad2] mb-3 sm:mb-4">
              Roadmap
            </span>

            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-gray-900 px-4">
              <span className="bg-gradient-to-r from-gray-900 via-[#6cb3e3] to-gray-900 bg-clip-text text-transparent">
                Our Journey To Launch
              </span>
            </h2>
            
            <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed px-4 sm:px-6">
              Navigating the stablecoin and DeFi sector is no simple feat. You have to manage various networks, tabs, and bridges to successfully manage your portfolio. This process is overly complicated, time consuming, and risky.
            </p>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#6cb3e3]/30 to-transparent transform -translate-y-1/2"></div>
          <div className="hidden lg:block absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-[#6cb3e3] via-[#9a84be] to-[#6cb3e3] transform -translate-y-1/2 timeline-fill transition-all duration-2000 ease-out" style={{width: '0%'}}></div>
          
          {/* Mobile Timeline Line */}
          <div className="lg:hidden absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#6cb3e3]/30 to-transparent transform -translate-x-1/2"></div>
          <div className="lg:hidden absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-[#6cb3e3] via-[#9a84be] to-[#6cb3e3] transform -translate-x-1/2 timeline-fill-mobile transition-all duration-2000 ease-out" style={{height: '0%'}}></div>

          {/* Milestones Grid */}
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
            {/* Milestone 1: Pre-Alpha */}
            <div className="milestone-card group">
              <div className="milestone-node bg-gradient-to-br from-[#6cb3e3] to-[#5a9fd1] border-4 border-white shadow-xl group-hover:shadow-2xl group-hover:shadow-[#6cb3e3]/25 transition-all duration-300">
                <div className="w-full h-full bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
              </div>
              <div className="milestone-content bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-[#6cb3e3] rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold text-gray-900">Pre-Alpha</h3>
                  <span className="ml-auto text-sm font-semibold text-[#6cb3e3] bg-[#6cb3e3]/10 px-3 py-1 rounded-full">Now</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  <strong>MVP1:</strong> Basic portfolio allocation and withdrawal functionality with initial Telegram mini-app.
                </p>
                <div className="space-y-2 text-xs text-gray-500">
                  <div className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#6cb3e3]/60 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>Limited to 20-30 external partners</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#6cb3e3]/60 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>Small USDC amounts on Base for testing</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#6cb3e3]/60 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>Highly experimental phase</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Milestone 2: Alpha */}
            <div className="milestone-card group">
              <div className="milestone-node bg-gradient-to-br from-[#a7d3f0] to-[#8bc5e8] border-4 border-white shadow-xl group-hover:shadow-2xl group-hover:shadow-[#a7d3f0]/25 transition-all duration-300">
                <div className="w-full h-full bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
              </div>
              <div className="milestone-content bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-[#a7d3f0] rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold text-gray-900">Alpha</h3>
                  <span className="ml-auto text-sm font-semibold text-[#a7d3f0] bg-[#a7d3f0]/10 px-3 py-1 rounded-full">2025 Q4</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  <strong>MVP2:</strong> Advanced portfolio rebalancing with expanded asset features and liquidity protocols.
                </p>
                <div className="space-y-2 text-xs text-gray-500">
                  <div className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#a7d3f0]/60 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>Limited to &lt;100 external partners</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#a7d3f0]/60 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>Including institutional allocators</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#a7d3f0]/60 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>Enhanced USDC testing on Base</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Milestone 3: Beta */}
            <div className="milestone-card group">
              <div className="milestone-node bg-gradient-to-br from-[#9a84be] to-[#8a74ae] border-4 border-white shadow-xl group-hover:shadow-2xl group-hover:shadow-[#9a84be]/25 transition-all duration-300">
                <div className="w-full h-full bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
              </div>
              <div className="milestone-content bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-[#9a84be] rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold text-gray-900">Beta</h3>
                  <span className="ml-auto text-sm font-semibold text-[#9a84be] bg-[#9a84be]/10 px-3 py-1 rounded-full">2026 Q1</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  <strong>MVP3:</strong> Mature risk management with refined mini-app and website waitlist signup.
                </p>
                <div className="space-y-2 text-xs text-gray-500">
                  <div className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#9a84be]/60 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>Beta users from website waitlist</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#9a84be]/60 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>Larger (but capped) USDC amounts</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#9a84be]/60 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>Onchain cost optimization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Milestone 4: Launch */}
            <div className="milestone-card group">
              <div className="milestone-node bg-gradient-to-br from-[#6a5285] to-[#5a4269] border-4 border-white shadow-xl group-hover:shadow-2xl group-hover:shadow-[#6a5285]/25 transition-all duration-300">
                <div className="w-full h-full bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
              </div>
              <div className="milestone-content bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-[#6a5285] rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold text-gray-900">Launch</h3>
                  <span className="ml-auto text-sm font-semibold text-[#6a5285] bg-[#6a5285]/10 px-3 py-1 rounded-full">2026 Q2</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  <strong>Full Platform:</strong> Domain-specific LLMs, on/off-ramp support, and public retail access.
                </p>
                <div className="space-y-2 text-xs text-gray-500">
                  <div className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#6a5285]/60 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>Public retail user signup</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#6a5285]/60 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>Goal: $1M AUM at launch</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#6a5285]/60 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>$10M AUM by end of 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
