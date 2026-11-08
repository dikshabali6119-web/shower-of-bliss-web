'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Sparkles, 
  Play, 
  Wind, 
  Bell, 
  ShieldCheck, 
  Heart, 
  Radio, 
  Music,
  BookOpen,
  Compass
} from 'lucide-react';
import { RotatingIkOnkarMandala, IkOnkarSymbol } from '@/components/SikhSymbols';
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
    <section id="hero" className="relative pt-4 pb-14 md:pt-10 md:pb-20 overflow-hidden">
      
      {/* Decorative Atmospheric Floating Orbs & Golden Mists */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] md:w-[950px] md:h-[550px] bg-gradient-to-tr from-[#9ec4b3]/25 via-[#d4af37]/20 to-[#3b7260]/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#3b7260]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ROTATING SACRED IK ONKAR (ੴ) MANDALA (Background Animation requested by user) */}
      <div className="absolute top-4 right-4 sm:right-10 lg:right-24 opacity-80 dark:opacity-60 pointer-events-none">
        <RotatingIkOnkarMandala className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Sacred Sikh Dharma & Lineage Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-[#d4af37]/50 shadow-xs mb-6 animate-fade-in">
            <span className="font-serif font-bold text-sm text-[#d4af37]">ੴ</span>
            <span className="text-xs font-semibold tracking-wide text-[#2d5a4c] dark:text-[#d8ecdf]">
              Nirmala Tradition • Vedanta &amp; Guruvani
            </span>
            <span className="text-xs text-[#d4af37] font-bold">• @amarjit311</span>
          </div>

          {/* Bold Main Headline */}
          <h1 className="font-serif-bliss text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1c3b31] dark:text-[#f4fbf7] leading-[1.18] mb-5">
            Discover Your Integrated Path to{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#2d5a4c] via-[#468370] to-[#bfa136] dark:from-[#b6e3cf] dark:via-[#f3dc8f] dark:to-[#d4af37]">
              Inner Bliss &amp; Liberation
            </span>
          </h1>

          {/* Authentic Guru & Disciple Mission Statement (exact message from Swami Amarjit Singh) */}
          <div className="my-3 p-5 sm:p-6 rounded-3xl glass-panel border border-[#d4af37]/45 shadow-sm text-left relative overflow-hidden gold-glow-card max-w-2xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#d4af37]/15 to-transparent rounded-bl-3xl pointer-events-none" />
            
            <div className="flex items-start gap-3.5 mb-2.5">
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-[#d4af37] shrink-0 bg-stone-900 shadow-xs">
                <Image
                  src="/logo.jpg"
                  alt="Shower of Bliss official emblem"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif-bliss text-base sm:text-lg font-bold text-[#1c3b31] dark:text-[#f4fbf7]">
                    Swami Amarjit Singh
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#2d5a4c] text-white">
                    Disciple of Sant Nikka Singh Ji
                  </span>
                </div>
                <p className="text-[11px] text-[#5f7d72] dark:text-[#9bc4b3] font-medium">
                  Shower of Bliss YouTube Sanctuary (@amarjit311)
                </p>
              </div>
            </div>

            <p className="font-serif-bliss text-sm sm:text-base text-[#234538] dark:text-[#d3e8de] leading-relaxed italic border-l-2 border-[#d4af37] pl-3.5 my-2">
              &ldquo;Hi! My name is <strong>Swami Amarjit Singh</strong>. My Guru&apos;s name is <strong>Sant Nikka Singh Ji</strong>. He was an enlightened saint from the revered Nirmala lineage. What I learned from him about the supreme knowledge of <strong>Vedanta, Guruvani, and Meditation</strong>, I want to share with everyone, because it can lead us towards true liberation (Mukti).&rdquo;
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] font-semibold text-[#8b6e16] dark:text-[#f4db89]">
              <span className="flex items-center gap-1 bg-[#d4af37]/15 px-2.5 py-1 rounded-full border border-[#d4af37]/30">
                <span>ੴ</span> Ik Onkar
              </span>
              <span className="flex items-center gap-1 bg-[#2d5a4c]/10 dark:bg-[#3d7866]/30 px-2.5 py-1 rounded-full text-[#2d5a4c] dark:text-[#d8ecdf]">
                <span>📜</span> Non-Dual Vedanta
              </span>
              <span className="flex items-center gap-1 bg-[#2d5a4c]/10 dark:bg-[#3d7866]/30 px-2.5 py-1 rounded-full text-[#2d5a4c] dark:text-[#d8ecdf]">
                <span>🕊️</span> Guruvani &amp; Naam Simran
              </span>
              <span className="flex items-center gap-1 bg-[#d4af37]/15 px-2.5 py-1 rounded-full border border-[#d4af37]/30">
                <span>✨</span> Path to Liberation (Mukti)
              </span>
            </div>
          </div>

          {/* Interactive Hero CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 my-8 w-full">
            
            {/* Primary Action: Explore Meditations */}
            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#2d5a4c] hover:bg-[#23483c] text-[#f4f8f5] font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 border border-[#d4af37]/50 hover:scale-[1.02] active:scale-[0.98] group"
            >
              <Play className="w-4 h-4 fill-current text-[#f4e297] group-hover:scale-110 transition-transform" />
              <span>Explore Guided Simran</span>
            </button>

            {/* Secondary Action: 5-Min Guided Breathwork */}
            <button
              onClick={onOpenBreathing}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full glass-panel hover:bg-white/90 dark:hover:bg-[#1a382c]/90 text-[#1c3b31] dark:text-[#e4f3eb] font-medium text-sm sm:text-base transition-all duration-200 border border-[#d4af37]/30 hover:border-[#d4af37] shadow-xs hover:scale-[1.02] active:scale-[0.98]"
            >
              <Wind className="w-4 h-4 text-[#2d5a4c] dark:text-[#d4af37]" />
              <span>Simran Breath Reset</span>
            </button>

            {/* Tertiary Action: Play 432Hz Singing Bowl Bell */}
            <button
              onClick={handleRingBowl}
              title="Ring sacred 432Hz meditative bell chime"
              className={`inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border ${
                bowlChimed
                  ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#9b7818] dark:text-[#f8e08b] animate-gold-pulse'
                  : 'bg-white/60 dark:bg-[#152a21]/60 text-[#3d6355] dark:text-[#b4d2c4] border-[#2d5a4c]/15 hover:border-[#d4af37]'
              }`}
            >
              <Bell className={`w-4 h-4 ${bowlChimed ? 'animate-bounce text-[#d4af37]' : ''}`} />
              <span>{bowlChimed ? 'Bell Resonating at 432Hz...' : 'Chime 432Hz Sound'}</span>
            </button>
          </div>

          {/* Three Core Spiritual Pillars of Swami Amarjit Singh */}
          <div id="about-swamiji" className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 pt-2 text-left">
            
            <div className="glass-panel p-4 rounded-3xl border border-[#d4af37]/35 gold-glow-card">
              <div className="flex items-center gap-2 text-[#8b6e16] dark:text-[#d4af37] font-bold text-xs uppercase tracking-wider mb-1.5">
                <BookOpen className="w-4 h-4 text-[#2d5a4c] dark:text-[#d4af37]" />
                <span>1. Knowledge of Vedanta</span>
              </div>
              <p className="text-xs text-[#3d6355] dark:text-[#b4d2c4] leading-relaxed">
                The Upanishadic truth of Non-Duality (Advaita). Sant Nikka Singh Ji taught how the individual soul realizes its oneness with Supreme Consciousness (Ik Onkar).
              </p>
            </div>

            <div className="glass-panel p-4 rounded-3xl border border-[#d4af37]/35 gold-glow-card">
              <div className="flex items-center gap-2 text-[#8b6e16] dark:text-[#d4af37] font-bold text-xs uppercase tracking-wider mb-1.5">
                <Music className="w-4 h-4 text-[#2d5a4c] dark:text-[#d4af37]" />
                <span>2. Wisdom of Guruvani</span>
              </div>
              <p className="text-xs text-[#3d6355] dark:text-[#b4d2c4] leading-relaxed">
                The divine nectar of Sri Guru Granth Sahib. Sacred hymns like Anand Sahib and Japji Sahib that uplift the mind above worldly suffering into Sahaj Anand.
              </p>
            </div>

            <div className="glass-panel p-4 rounded-3xl border border-[#d4af37]/35 gold-glow-card">
              <div className="flex items-center gap-2 text-[#8b6e16] dark:text-[#d4af37] font-bold text-xs uppercase tracking-wider mb-1.5">
                <Compass className="w-4 h-4 text-[#2d5a4c] dark:text-[#d4af37]" />
                <span>3. Meditation for Mukti</span>
              </div>
              <p className="text-xs text-[#3d6355] dark:text-[#b4d2c4] leading-relaxed">
                Naam Simran, breath awareness, and Shabad Surat Dhyan. Practical meditation methods that quiet the agitated ego and lead the soul directly to liberation.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
