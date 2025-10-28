"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface CTAPairProps {
  primaryTitle?: string;
  secondaryTitle?: string;
  primaryOnClick?: () => void;
  secondaryOnClick?: () => void;
  className?: string;
}

const CTAPair = ({
  primaryTitle = "Get Started",
  secondaryTitle = "Learn More",
  primaryOnClick,
  secondaryOnClick = () => alert("navigate to early access form"),
  className = "",
}: CTAPairProps) => {
  return (
    <div
      className={`flex flex-col sm:flex-row gap-4 items-center justify-center ${className}`}
    >
      {/* Primary CTA Button */}
      <button
        onClick={primaryOnClick}
        className="relative inline-flex h-12 w-full sm:w-60 overflow-hidden rounded-lg p-[1px] focus:outline-none group"
      >
        {/* Spinning gradient border */}
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6cb3e3_0%,#9a84be_50%,#6cb3e3_100%)]" />
        
        {/* Inner button */}
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#3da3f3] px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 group-hover:bg-[#0a2747] group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-[#6cb3e3]/30 transition-all duration-300">
          {primaryTitle}
          <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-200" />
        </span>
      </button>

      {/* Secondary CTA Button */}
      <button
        onClick={secondaryOnClick}
        className="relative inline-flex h-12 w-full sm:w-60 overflow-hidden rounded-lg focus:outline-none group"
      >
        {/* Hover gradient overlay */}
        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#9a84be] via-[#6a5285] to-[#382c49] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#382c49] px-7 text-sm font-medium text-white/90 hover:text-white backdrop-blur-3xl border border-white/20 hover:border-white/40 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-[#9a84be]/30">
          {secondaryTitle}
        </span>
      </button>
    </div>
  );
};

export default CTAPair;
