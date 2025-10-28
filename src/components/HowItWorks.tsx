"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, Sparkles as Sparkle, Wallet, Bot, ArrowRight, BadgeCheck } from "lucide-react";
import CryptoIcon from "./CryptoIcons";

const steps = [
  { icon: MessageSquare, title: "Access via Telegram mini-app.", body: "Sign up to chat with your AI portfolio manager." },
  { icon: Bot, title: "State your portfolio intent.", body: "Write in plain English — e.g., \"Earn ~8% on stablecoins with low risk.\"" },
  { icon: Sparkle, title: "Get your portfolio plan.", body: "DR HIRO drafts a personalized allocation; ask questions and refine." },
  { icon: Wallet, title: "Approve & deploy onchain.", body: "With a tap, your plan executes and becomes a live portfolio." },
  { icon: BadgeCheck, title: "Autopilot rebalancing.", body: "Positions adjust using real-time data; you can view, modify, or withdraw anytime." },
  { icon: ArrowRight, title: "Enjoy diversified yield.", body: "A calm, risk-mitigated, yield-generating crypto portfolio. 🙂" },
];

const features = [
  {
    title: "Portfolio-Level Intent Engine",
    body: "Turn one natural-language request into multiple onchain txs with complex conditions.",
  },
  {
    title: "Modular Multi-Agent Framework",
    body: "Composable agents coordinating tasks (provisional patent filing).",
  },
  {
    title: "Copilot & Autonomous Modes",
    body: "Guided confirmations for power users, or full automation for hands-off investors.",
  },
  {
    title: "Competitive Yields",
    body: "6%+ APY on stablecoins; 12%+ on advanced DeFi products (where available).",
  },
];

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section 
      ref={sectionRef}
      id="how-it-works" 
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#f8fbff] to-[#eef4fa] relative overflow-hidden transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Enhanced floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#6cb3e3]/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#6cb3e3]/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-[#6cb3e3]/25 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-[#6cb3e3]/35 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-[#6cb3e3]/20 rounded-full animate-pulse delay-1500"></div>
      </div>

      {/* Floating geometric shapes with professional crypto icons */}
      <div className="absolute top-[15%] left-[8%] w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-[2px] sm:border-[3px] border-[#6cb3e3]/40 rounded-lg rotate-12 shadow-lg shadow-[#6cb3e3]/10 backdrop-blur-sm hover:bg-white/50 transition-all duration-500 group cursor-pointer flex items-center justify-center animate-float">
        <div className="group-hover:scale-110 transition-transform duration-300 animate-rotate-slow">
          <CryptoIcon symbol="sol" size={60} />
        </div>
      </div>
      
      <div className="absolute top-[15%] right-[8%] w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-[2px] sm:border-[3px] border-[#6cb3e3]/40 rounded-lg rotate-12 shadow-lg shadow-[#6cb3e3]/10 backdrop-blur-sm hover:bg-white/50 transition-all duration-500 group cursor-pointer flex items-center justify-center animate-float">
        <div className="group-hover:scale-110 transition-transform duration-300 animate-rotate-slow">
          <CryptoIcon symbol="avax" size={60} />
        </div>
      </div>
      
      <div className="absolute top-[25%] right-[15%] w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-[2px] sm:border-[3px] border-[#6cb3e3]/30 rounded-lg rotate-[30deg] shadow-lg shadow-[#6cb3e3]/8 backdrop-blur-sm hover:bg-white/40 transition-all duration-500 group cursor-pointer flex items-center justify-center animate-float-delayed">
        <div className="group-hover:scale-110 transition-transform duration-300 animate-rotate-slow">
          <CryptoIcon symbol="link" size={50} />
        </div>
      </div>

      {/* New upper right crypto icon shape - Moved further right */}
      <div className="absolute top-[8%] right-[15%] w-14 sm:w-18 md:w-22 h-14 sm:h-18 md:h-22 border-[2px] sm:border-[3px] border-[#9a84be]/35 rounded-full shadow-lg shadow-[#9a84be]/10 backdrop-blur-sm hover:bg-white/45 transition-all duration-500 group cursor-pointer flex items-center justify-center animate-float">
        <div className="group-hover:scale-110 transition-transform duration-300 animate-rotate-slow">
          <CryptoIcon symbol="eth" size={55} />
        </div>
      </div>

      {/* Additional middle and bottom floating shapes - Made Bigger */}
      <div className="absolute top-[55%] right-[10%] w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-[2px] sm:border-[3px] border-[#6cb3e3]/40 rounded-lg rotate-[45deg] shadow-lg shadow-[#6cb3e3]/8 backdrop-blur-sm hover:bg-white/40 transition-all duration-500 group cursor-pointer flex items-center justify-center animate-float-delayed">
        <div className="group-hover:scale-110 transition-transform duration-300 animate-rotate-slow">
          <CryptoIcon symbol="uni" size={60} />
        </div>
      </div>
      
      <div className="absolute top-[65%] left-[6%] w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-[2px] sm:border-[3px] border-[#9a84be]/30 rounded-full shadow-lg shadow-[#9a84be]/8 backdrop-blur-sm hover:bg-white/45 transition-all duration-500 group cursor-pointer flex items-center justify-center animate-float">
        <div className="group-hover:scale-110 transition-transform duration-300 animate-rotate-slow">
          <CryptoIcon symbol="aave" size={60} />
        </div>
      </div>
      
      <div className="absolute top-[75%] right-[8%] w-14 sm:w-18 md:w-22 h-14 sm:h-18 md:h-22 border-[2px] sm:border-[3px] border-[#6cb3e3]/35 rounded-lg rotate-[60deg] shadow-lg shadow-[#6cb3e3]/6 backdrop-blur-sm hover:bg-white/35 transition-all duration-500 group cursor-pointer flex items-center justify-center animate-float-delayed">
        <div className="group-hover:scale-110 transition-transform duration-300 animate-rotate-slow">
          <CryptoIcon symbol="comp" size={50} />
        </div>
      </div>

      {/* Blue/Purple hue effects - linear streaks instead of circles */}
      {/* Top-left blue streak - Made Bigger */}
      <div className="absolute top-[-100px] sm:top-[-120px] left-[-100px] sm:left-[-120px] w-[32rem] sm:w-[40rem] md:w-[48rem] h-48 sm:h-56 md:h-64 bg-gradient-to-r from-[#6cb3e3]/25 via-[#6cb3e3]/30 to-transparent rounded-full blur-2xl pointer-events-none"></div>
      
      {/* Bottom-right purple streak */}
      <div className="absolute bottom-[-40px] sm:bottom-[-80px] right-[-40px] sm:right-[-80px] w-80 sm:w-96 md:w-[28rem] h-32 sm:h-40 md:h-48 bg-gradient-to-l from-[#9a84be]/25 via-[#9a84be]/30 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Center-right vertical purple streak */}
      <div className="absolute top-1/3 right-[-30px] sm:right-[-50px] w-32 sm:w-40 md:w-48 h-96 sm:h-[28rem] md:h-[32rem] bg-gradient-to-b from-[#9a84be]/15 via-[#6cb3e3]/20 to-[#9a84be]/15 rounded-full blur-2xl pointer-events-none"></div>
      
      {/* Bottom-left blue streak */}
      <div className="absolute bottom-[-30px] sm:bottom-[-60px] left-[-30px] sm:left-[-60px] w-64 sm:w-80 md:w-96 h-24 sm:h-32 md:h-40 bg-gradient-to-r from-[#6cb3e3]/18 via-[#6cb3e3]/22 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Top-center purple wave */}
      <div className="absolute top-[-40px] sm:top-[-60px] left-1/2 -translate-x-1/2 w-96 sm:w-[28rem] md:w-[32rem] h-32 sm:h-40 md:h-48 bg-gradient-to-r from-transparent via-[#9a84be]/12 to-transparent rounded-full blur-2xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block border border-[#b9aad2] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[10px] xs:text-xs sm:text-sm font-medium tracking-wider uppercase text-[#b9aad2] mb-3 sm:mb-4">
              How Temporai Works
            </span>

            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-gray-900 px-4">
              <span className="bg-gradient-to-r from-gray-900 via-[#6cb3e3] to-gray-900 bg-clip-text text-transparent">
                Let your AI portfolio manager handle your DeFi headaches.
              </span>
            </h2>
          </div>
        </div>

        {/* Timeline + Live mock */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Timeline */}
          <ol className="relative">
            {/* dotted connector */}
            <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-gray-300/50 via-gray-300/50 to-transparent" />
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative pl-16 pb-8 last:pb-0"
              >
                <div className="absolute left-0 top-0 grid h-12 w-12 place-items-center rounded-xl border border-white/50 bg-white/70 backdrop-blur shadow-sm">
                  <step.icon className="h-6 w-6 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-1 text-gray-600">{step.body}</p>
              </li>
            ))}
          </ol>

          {/* Live chat mock */}
          <div className="rounded-2xl border border-white/40 bg-white/70 p-5 shadow-lg backdrop-blur">
            <ChatMock />
          </div>
        </div>

        {/* Features */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-bold text-gray-900">Under the Hood</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/40 bg-white/70 p-5 shadow-sm backdrop-blur hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-1.5 w-14 rounded-full bg-gradient-to-r from-[#6cb3e3] to-[#9a84be] mb-3" />
                <h4 className="text-lg font-semibold text-gray-900">{f.title}</h4>
                <p className="mt-1 text-gray-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <div className="rounded-2xl p-8 border border-white/40 bg-white/70 backdrop-blur shadow-lg bg-gradient-to-r from-[#6cb3e3]/10 to-[#9a84be]/10">
            <h3 className="text-center text-2xl font-bold text-gray-900 mb-4">
              Ready to let our Agents <span className="text-[#6cb3e3]">Work for You</span>?
            </h3>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the waitlist and be among the first to experience the power of AI-driven stablecoin optimization.
            </p>
            <div className="text-center">
              <a
                href="/getstarted"
                className="inline-flex items-center justify-center rounded-xl px-8 py-3 font-semibold shadow-sm transition hover:shadow-lg hover:scale-105 bg-gradient-to-r from-[#6cb3e3] to-[#9a84be] hover:from-[#5a9fd1] hover:to-[#8a74ae] text-white"
              >
                Join the Waitlist →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatMock() {
  const lines = [
    { you: "I want ~8% APY on stablecoins with low risk. Can you allocate on Base?" },
    { bot: "Excellent choice! I've analyzed current market conditions and found several high-yield opportunities on Base. Here's what I recommend:" },
    { bot: "• USDC: 4.2% APY in Aave V3\n• USDC: 6.8% APY in Compound\n• USDC: 8.1% APY in Yearn vault\n• DAI: 7.3% APY in Maker stability fee" },
    { you: "That looks good, but can you diversify across multiple protocols for safety?" },
    { bot: "Absolutely! I've created a balanced allocation:\n• 40% in Aave (most liquid)\n• 30% in Yearn (highest yield)\n• 20% in Compound (stable)\n• 10% in Maker (conservative)\n\nExpected APY: 7.9% with lower risk. Execute?" },
    { you: "Perfect! Execute with 0.5% slippage tolerance and set up auto-rebalancing." },
    { bot: "🚀 Executing now! Transactions deployed across 4 protocols. Your portfolio will auto-rebalance weekly and alert you to any significant changes. Welcome to optimized DeFi!" },
  ];

  const [idx, setIdx] = useState(0);
  
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % lines.length), 4500);
    return () => clearInterval(t);
  }, [lines.length]);

  return (
    <div className="mx-auto max-w-lg">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#6cb3e3]/30 to-[#6cb3e3]/20 flex items-center justify-center">
          <span className="text-[#6cb3e3] font-bold text-sm">DH</span>
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-900">DR HIRO</div>
          <div className="text-xs text-gray-600">AI Portfolio Manager</div>
        </div>
        <div className="ml-auto">
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-600 font-medium">Online</span>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-white to-white/50 rounded-2xl p-4 border border-white/40 shadow-lg">
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {lines.map((l, i) => {
            // Only show messages up to the current index
            if (i > idx) return null;
            
            const isYou = "you" in l;
            return (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line transition-all duration-400 ${
                  isYou 
                    ? "ml-auto bg-gradient-to-br from-[#6cb3e3] to-[#9a84be] text-white font-medium" 
                    : "bg-white/90 text-gray-900 border border-white/60"
                }`}
              >
                {isYou ? (l as { you: string }).you : (l as { bot: string }).bot}
              </div>
            );
          })}
        </div>
        
        {/* Typing indicator */}
        <div className={`mt-3 flex items-center gap-2 text-xs text-gray-600 transition-opacity duration-300 ${idx === 0 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-1">
            <div className="h-1 w-1 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="h-1 w-1 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="h-1 w-1 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
          <span>DR HIRO is typing...</span>
        </div>
      </div>
    </div>
  );
}