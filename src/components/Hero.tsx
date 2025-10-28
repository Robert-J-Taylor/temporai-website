"use client";

import { useRouter } from "next/navigation";
import CryptoIcon from "./CryptoIcons";
import CTAPair from "./shared/CTAPair";
import { Spotlight } from "./shared/Spotlight";

export default function Hero() {
  const router = useRouter();

  return (
    <div id="hero" className="relative h-full min-h-[100vh] bg-gradient-to-b from-white via-[#f8fbff] to-[#eef4fa] overflow-hidden">
      {/* Navbar spacer */}
      <div className="h-20"></div>
      
      {/* Animated floating shapes with enhanced movement */}
      <div className="absolute top-[20%] sm:top-1/4 left-[5%] sm:left-[15%] w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 border-[2px] sm:border-[3px] border-[#6cb3e3]/50 rounded-lg rotate-12 shadow-lg shadow-[#6cb3e3]/10 backdrop-blur-sm bg-white/40 hover:bg-white/60 transition-all duration-500 group cursor-pointer flex items-center justify-center animate-float">
          <div className="group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
            <CryptoIcon symbol="eth" size={100} />
          </div>
      </div>
      
      <div className="absolute bottom-[20%] sm:bottom-1/4 right-[5%] sm:right-[12%] w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-[2px] sm:border-[3px] border-[#b9aad2]/50 rounded-full shadow-lg shadow-[#b9aad2]/10 backdrop-blur-sm bg-gradient-to-br from-white/50 to-[#ede7f6]/30 flex items-center justify-center group cursor-pointer hover:shadow-2xl hover:shadow-[#b9aad2]/30 transition-all duration-500 animate-float-delayed">
        <div className="group-hover:scale-125 transition-all duration-300 animate-rotate-slow">
          <CryptoIcon symbol="btc" size={80} />
        </div>
      </div>
      
      <div className="hidden sm:block absolute top-1/2 left-[8%] w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-[#6cb3e3]/30 to-[#b9aad2]/20 rounded-lg rotate-[60deg] shadow-xl shadow-[#6cb3e3]/20 backdrop-blur-md flex items-center justify-center group cursor-pointer hover:rotate-90 transition-all duration-700 animate-float">
        <div className="group-hover:brightness-125 transition-all duration-300 animate-pulse-glow">
          <CryptoIcon symbol="usdt" size={60} />
        </div>
      </div>
      
      <div className="md:block absolute top-[20%] right-[30%] w-16 sm:w-20 h-16 sm:h-20 border-[2px] sm:border-[3px] border-[#6cb3e3]/40 rounded-xl rotate-6 backdrop-blur-sm bg-white/30 flex items-center justify-center group cursor-pointer hover:border-[#6cb3e3]/80 hover:shadow-2xl hover:shadow-[#6cb3e3]/20 transition-all duration-500 animate-float">
        <div className="group-hover:scale-110 transition-transform duration-300 animate-rotate-slow">
          <CryptoIcon symbol="usdc" size={80} />
        </div>
      </div>

      <div className="relative z-10 pb-12 sm:pb-16 md:pb-20 pt-6 sm:pt-8 md:pt-12 lg:pt-16">
        {/* Optional animated soft light */}
        <Spotlight className="-top-10 left-0 h-screen w-screen opacity-30 sm:opacity-40 md:opacity-50" fill="#6cb3e3" />

        <section className="flex max-w-7xl flex-col items-center justify-center min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-10rem)] mx-auto px-4 sm:px-6 text-center">
          {/* Intro tag */}
          <div className="mb-3 sm:mb-4 md:mb-6 animate-fade-in">
            <span className="inline-block px-3 sm:px-4 py-1 rounded-full text-[10px] xs:text-xs sm:text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-[#e3f2fd] to-[#ede7f6] text-[#6b5fbf] border border-[#d1c4e9]/50 shadow-sm">
              DR HIRO — Stablecoin Yield Co-pilot
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-[-0.05em] bg-gradient-to-br from-[#1a1a1a] to-[#6cb3e3] bg-clip-text text-transparent mb-4 sm:mb-6 md:mb-8 px-4 animate-slide-up">
            Build safer, explainable DeFi portfolios with AI
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-[-0.2px] text-gray-600 mb-6 sm:mb-8 md:mb-12 px-4 animate-slide-up">
            You set the goal. We plan. You confirm. Grow your capital with
            full audit trail.
          </p>

          {/* CTA Buttons */}
          <div className="w-full max-w-2xl px-4 animate-slide-up">
            <CTAPair
              primaryTitle="Get Started"
              secondaryTitle="Meet The Team"
              primaryOnClick={() => {
                router.push("/getstarted")
              }}
              secondaryOnClick={() => {
                router.push("/about")
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
