'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Play, 
  Wind, 
  Bell, 
  ShieldCheck, 
  Heart, 
  Radio, 
  Music
} from 'lucide-react';
import { YoutubeIcon } from '@/components/SocialIcons';
import { soundSynth } from '@/utils/soundSynth';

interface HeroSectionProps {
  onOpenBreathing: () => void;
  onExploreClick: () => void;
}

export default function HeroSection({ onOpenBreathing, onExploreClick }: HeroSectionProps) {
  const [bowlChimed, setBowlChimed] = useState(false);

  const handleRingBowl = () => {
    soundSynth.playSingingBowl(432);
    setBowlChimed(true);
    setTimeout(() => setBowlChimed(false), 3000);
  };

  return (
    <section id="hero" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      
      {/* Decorative Atmospheric Floating Orbs & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] md:w-[900px] md:h-[500px] bg-gradient-to-tr from-[#9ec4b3]/25 via-[#d4af37]/15 to-[#3b7260]/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#d4af37]/15 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#3b7260]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Sacred Geometry Vector / Lotus Motif */}
      <div className="absolute top-8 right-6 md:right-20 opacity-20 dark:opacity-10 pointer-events-none animate-spin-slow">
        <svg width="220" height="220" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-[#2d5a4c] dark:text-[#d4af37]">
          <circle cx="50" cy="50" r="44" strokeWidth="0.8" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="32" strokeWidth="0.8" />
          <polygon points="50,14 62,38 88,50 62,62 50,86 38,62 12,50 38,38" strokeWidth="0.8" />
          <polygon points="50,22 59,41 78,50 59,59 50,78 41,59 22,50 41,41" strokeWidth="0.6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Channel Tag Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-[#d4af37]/40 shadow-xs mb-6 animate-fade-in">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2d5a4c] dark:bg-[#d4af37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2d5a4c] dark:bg-[#d4af37]"></span>
            </span>
            <span className="text-xs font-medium tracking-wide text-[#2d5a4c] dark:text-[#d8ecdf]">
              YouTube Channel <span className="font-semibold text-[#1c3b31] dark:text-[#f7e4a4]">@amarjit311</span>
            </span>
            <span className="text-xs text-[#d4af37] font-semibold">• 432Hz Sound Immersion</span>
          </div>

          {/* Bold Main Headline */}
          <h1 className="font-serif-bliss text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-[#1c3b31] dark:text-[#f4fbf7] leading-[1.15] mb-6">
            Discover Your Integrated Path to{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#2d5a4c] via-[#3f7a67] to-[#bfa136] dark:from-[#b6e3cf] dark:via-[#f3dc8f] dark:to-[#d4af37]">
              Inner Bliss
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-[#3d6355] dark:text-[#b4d2c4] font-normal leading-relaxed mb-8 max-w-2xl">
            Immerse in transcendental guided meditations, sacred 432Hz harmonic sound healing, and Vedic mindfulness curated by <strong className="font-semibold text-[#1c3b31] dark:text-[#f5f9f6]">Amarjit</strong> to quiet anxiety, dissolve overthinking, and awaken your highest consciousness.
          </p>

          {/* Interactive Hero CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-12 w-full">
            
            {/* Primary Action: Explore Meditations */}
            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#2d5a4c] hover:bg-[#23483c] text-[#f4f8f5] font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 border border-[#d4af37]/40 hover:scale-[1.02] active:scale-[0.98] group"
            >
              <Play className="w-4 h-4 fill-current text-[#f4e297] group-hover:scale-110 transition-transform" />
              <span>Explore Meditations</span>
            </button>

            {/* Secondary Action: 5-Min Guided Breathwork */}
            <button
              onClick={onOpenBreathing}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full glass-panel hover:bg-white/90 dark:hover:bg-[#1a382c]/90 text-[#1c3b31] dark:text-[#e4f3eb] font-medium text-sm sm:text-base transition-all duration-200 border border-[#d4af37]/30 hover:border-[#d4af37] shadow-xs hover:scale-[1.02] active:scale-[0.98]"
            >
              <Wind className="w-4 h-4 text-[#2d5a4c] dark:text-[#d4af37]" />
              <span>5-Min Breath Reset</span>
            </button>

            {/* Tertiary Action: Play 432Hz Singing Bowl Bell */}
            <button
              onClick={handleRingBowl}
              title="Ring sacred 432Hz Himalayan singing bowl"
              className={`inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border ${
                bowlChimed
                  ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#9b7818] dark:text-[#f8e08b] animate-gold-pulse'
                  : 'bg-white/60 dark:bg-[#152a21]/60 text-[#3d6355] dark:text-[#b4d2c4] border-[#2d5a4c]/15 hover:border-[#d4af37]'
              }`}
            >
              <Bell className={`w-4 h-4 ${bowlChimed ? 'animate-bounce text-[#d4af37]' : ''}`} />
              <span>{bowlChimed ? 'Singing Bowl Resonating...' : 'Chime 432Hz Bowl'}</span>
            </button>
          </div>

          {/* Floating Feature Indicators / Stats Bar */}
          <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-2">
            
            <div className="glass-panel p-3.5 rounded-2xl flex flex-col items-center justify-center text-center gold-glow-card">
              <div className="flex items-center gap-1.5 text-[#2d5a4c] dark:text-[#d4af37] mb-1">
                <YoutubeIcon className="w-4 h-4 text-red-500" />
                <span className="font-serif-bliss text-lg sm:text-xl font-bold text-[#1c3b31] dark:text-[#f4fbf7]">45,000+</span>
              </div>
              <span className="text-[11px] sm:text-xs text-[#5f7d72] dark:text-[#9cbdb0] font-medium">Souls Awakened</span>
            </div>

            <div className="glass-panel p-3.5 rounded-2xl flex flex-col items-center justify-center text-center gold-glow-card">
              <div className="flex items-center gap-1.5 text-[#2d5a4c] dark:text-[#d4af37] mb-1">
                <Radio className="w-4 h-4 text-[#d4af37]" />
                <span className="font-serif-bliss text-lg sm:text-xl font-bold text-[#1c3b31] dark:text-[#f4fbf7]">100+</span>
              </div>
              <span className="text-[11px] sm:text-xs text-[#5f7d72] dark:text-[#9cbdb0] font-medium">Guided Practices</span>
            </div>

            <div className="glass-panel p-3.5 rounded-2xl flex flex-col items-center justify-center text-center gold-glow-card">
              <div className="flex items-center gap-1.5 text-[#2d5a4c] dark:text-[#d4af37] mb-1">
                <Music className="w-4 h-4 text-emerald-500" />
                <span className="font-serif-bliss text-lg sm:text-xl font-bold text-[#1c3b31] dark:text-[#f4fbf7]">432 Hz</span>
              </div>
              <span className="text-[11px] sm:text-xs text-[#5f7d72] dark:text-[#9cbdb0] font-medium">Harmonic Tuning</span>
            </div>

            <div className="glass-panel p-3.5 rounded-2xl flex flex-col items-center justify-center text-center gold-glow-card">
              <div className="flex items-center gap-1.5 text-[#2d5a4c] dark:text-[#d4af37] mb-1">
                <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                <span className="font-serif-bliss text-lg sm:text-xl font-bold text-[#1c3b31] dark:text-[#f4fbf7]">100% Free</span>
              </div>
              <span className="text-[11px] sm:text-xs text-[#5f7d72] dark:text-[#9cbdb0] font-medium">Vedic Wisdom</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
