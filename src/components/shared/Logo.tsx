"use client";

import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "gradient" | "white" | "segmented";
}

const Logo = ({
  className = "",
  size = "md",
  variant = "gradient",
}: LogoProps) => {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl",
  };

  if (variant === "white") {
    return (
      <div
        className={`font-bold tracking-tight ${sizeClasses[size]} ${className}`}
      >
        <span className="text-black">TEMPORAI</span>
      </div>
    );
  }

  if (variant === "segmented") {
    return (
      <div className={`font-mono font-bold ${sizeClasses[size]} ${className}`}>
        <span className="text-black/90">T</span>
        <span className="text-black/80">E</span>
        <span className="text-black/90">M</span>
        <span className="text-black/60">P</span>
        <span className="text-black/90">O</span>
        <span className="text-black/80">R</span>
        <span className="text-black/90">A</span>
        <span className="text-black/70">I</span>
      </div>
    );
  }

  // Default gradient variant
  return (
    <div
      className={`font-bold tracking-tight ${sizeClasses[size]} ${className}`}
    >
      <span className="bg-gradient-to-r from-black via-black/90 to-black/70 bg-clip-text text-transparent">
        TEMPORAI
      </span>
    </div>
  );
};

export default Logo;
