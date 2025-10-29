"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

type Slide = {
  src: string;
  alt: string;
  title: string;
  blurb?: string;
  ctaLabel?: string;
  href: string;
};

interface AutoSlideshowProps {
  slides: Slide[];
  className?: string;
}

export default function AutoSlideshow({ slides, className = "" }: AutoSlideshowProps) {
  // New/updated state for infinite center mode
  const [realIndex, setRealIndex] = useState(0);  // 0..N-1
  const [vIndex, setVIndex] = useState(1);        // visual index inside extended
  const [isAnimating, setIsAnimating] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Measurement state
  const [gapPx, setGapPx] = useState(24); // default; will be measured
  const [slideW, setSlideW] = useState(0);
  const [containerW, setContainerW] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const N = slides.length;
  
  // Extended array with head/tail clones
  const extended = useMemo(() => {
    if (N === 0) return [];
    return [slides[N - 1], ...slides, slides[0]];
  }, [slides, N]);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Handle visibility change (pause when tab is hidden)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Measure slide width, container width, and computed gap from rail
  useEffect(() => {
    if (!containerRef.current || !slideRef.current || !railRef.current) return;

    const ro = new ResizeObserver(() => {
      const c = containerRef.current!;
      const s = slideRef.current!;
      const r = railRef.current!;
      setContainerW(c.clientWidth);
      setSlideW(s.clientWidth);

      // Read computed gap from flex container
      const cs = getComputedStyle(r);
      const gap = parseFloat(cs.columnGap || cs.gap || "24");
      setGapPx(Number.isFinite(gap) ? gap : 24);
    });

    ro.observe(containerRef.current);
    ro.observe(slideRef.current);
    return () => ro.disconnect();
  }, []);

  // Next/Prev with clone boundaries
  const goToReal = useCallback((i: number) => {
    // normalize 0..N-1
    const ni = (i + N) % N;
    setRealIndex(ni);
    setVIndex(ni + 1); // map to extended
  }, [N]);

  const next = useCallback(() => {
    setVIndex((vi) => vi + 1);
  }, []);

  const prev = useCallback(() => {
    setVIndex((vi) => vi - 1);
  }, []);

  // Initialize indices
  useEffect(() => {
    setRealIndex(0);
    setVIndex(1); // first real slide position inside extended
  }, [N]);

  // Auto-advance functionality
  useEffect(() => {
    if (prefersReducedMotion || isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      next();
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [prefersReducedMotion, isPaused, next]);

  // Progress bar animation
  useEffect(() => {
    if (prefersReducedMotion || isPaused || !progressRef.current) return;

    const progressBar = progressRef.current;
    progressBar.style.width = '0%';
    
    // Trigger animation
    setTimeout(() => {
      progressBar.style.width = '100%';
    }, 50);

    return () => {
      progressBar.style.width = '0%';
    };
  }, [realIndex, prefersReducedMotion, isPaused]);

  // After each animated move, if we're on a clone, snap without animation
  const onTransitionEnd = () => {
    if (vIndex === 0) {
      // We moved onto the head clone (last). Snap to real last (N-1) at vIndex=N
      setTimeout(() => {
        setIsAnimating(false);
        setRealIndex(N - 1);
        setVIndex(N); // snap target (no animation)
        setTimeout(() => setIsAnimating(true), 10);
      }, 10);
    } else if (vIndex === N + 1) {
      // We moved onto the tail clone (first). Snap to real first (0) at vIndex=1
      setTimeout(() => {
        setIsAnimating(false);
        setRealIndex(0);
        setVIndex(1);
        setTimeout(() => setIsAnimating(true), 10);
      }, 10);
    } else {
      // Normal slide: update real index from visual index
      setRealIndex(vIndex - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [prev, next]);

  // Translate to center the active visual slide
  const translateX = useMemo(() => {
    // Active slide center position within the rail
    const cardWidth = slideW;
    const step = cardWidth + gapPx;
    // Visual index vIndex card center X (from rail left)
    const activeCenterX = vIndex * step + cardWidth / 2;
    // Container center X
    const containerCenterX = containerW / 2;
    // We want rail to shift so that activeCenter aligns with containerCenter
    return containerCenterX - activeCenterX;
  }, [vIndex, slideW, gapPx, containerW]);

  // Returns 0 for active, 1 for neighbors, 2+ for far
  const distFromActive = (iReal: number) => {
    const d = Math.abs(iReal - realIndex);
    return Math.min(d, N - d);
  };

  return (
    <>
      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .progress-bar {
          animation: progress 4000ms linear forwards;
        }
      `}</style>
      
      <section 
        ref={containerRef}
        className={`relative w-full h-[350px] sm:h-[400px] lg:h-[500px] overflow-hidden bg-gray-100 ${className}`}
        aria-roledescription="carousel"
        aria-label="Featured posts"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides rail */}
        <div 
          ref={railRef}
          className={`absolute inset-0 flex items-stretch gap-3 sm:gap-4 lg:gap-6 ${
            isAnimating ? "transition-transform duration-500 ease-in-out" : ""
          }`}
          style={{ transform: `translateX(${translateX}px)` }}
          onTransitionEnd={onTransitionEnd}
          aria-live="polite"
        >
          {extended.map((slide, vi) => {
            // extended index vi -> real index:
            // vi=0   -> real N-1
            // vi=1..N -> real vi-1
            // vi=N+1 -> real 0
            let iReal = 0;
            if (vi === 0) iReal = N - 1;
            else if (vi === N + 1) iReal = 0;
            else iReal = vi - 1;

            const dist = distFromActive(iReal);
            const tone =
              dist === 0
                ? "opacity-100 grayscale-0 scale-100"
                : dist === 1
                ? "opacity-70 grayscale scale-95"
                : "opacity-40 grayscale scale-95";

            return (
              <article
                key={vi}
                ref={vi === 1 ? slideRef : undefined} // measure one real card
                className={`relative shrink-0 grow-0 basis-full md:basis-[90%] lg:basis-[85%] rounded-2xl border border-white/15 bg-black/10 overflow-hidden ${tone} transition-opacity transition-transform`}
                aria-hidden={dist !== 0}
              >
              {/* Aspect ratio container */}
              <div className="relative aspect-[16/10] sm:aspect-[21/10] lg:aspect-[24/10]">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={vi === 1}
                  sizes="100vw"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Content overlay */}
                <div className="absolute bottom-[15px] left-0 right-0 p-6 sm:p-8 lg:p-12">
                  <div className="max-w-4xl">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4 leading-tight">
                      {slide.title}
                    </h2>
                    
                    {slide.blurb && (
                      <p className="text-lg sm:text-xl text-gray-200 mb-6 max-w-2xl leading-relaxed">
                        {slide.blurb}
                      </p>
                    )}
                    
                    {slide.ctaLabel && slide.href && (
                      <Link
                        href={slide.href}
                        className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                      >
                        {slide.ctaLabel}
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>

                {/* Progress bar for active slide - Hidden to prevent visual artifacts */}
                {/* {dist === 0 && !prefersReducedMotion && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
                    <div
                      ref={progressRef}
                      className="h-full bg-white transition-all duration-100 ease-linear"
                      style={{ width: isPaused ? '0%' : '100%' }}
                    />
                  </div>
                )} */}
              </div>
              </article>
            );
          })}
        </div>

        {/* Navigation controls */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
          {/* Previous button */}
          <button
            onClick={prev}
            className="pointer-events-auto ml-4 sm:ml-6 lg:ml-8 p-3 bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/40 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={next}
            className="pointer-events-auto mr-4 sm:mr-6 lg:mr-8 p-3 bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/40 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true);
                setVIndex(index + 1); // jump to that real item in extended
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === realIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
