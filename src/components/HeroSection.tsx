'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Play, 
  Wind, 
  Bell, 
  Sparkles,
  BookOpen, 
  ShieldCheck, 
  Radio
} from 'lucide-react';
import { CenteredRotatingIkOnkar } from '@/components/SikhSymbols';
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
    <section id="hero" className="relative pt-6 pb-14 md:pt-10 md:pb-20 overflow-hidden">
      
      {/* Background Celestial Sky Blue & Golden Yellow Spiritual Mists */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] md:w-[1050px] md:h-[600px] bg-gradient-to-tr from-[#38bdf8]/20 via-[#facc15]/20 to-[#0284c7]/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-8 left-10 w-80 h-80 bg-[#7dd3fc]/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#fde047]/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Channel Tag Badge in Sky Blue & Yellow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-[#15233c]/90 border-2 border-[#eab308]/60 shadow-[0_0_20px_rgba(234,179,8,0.3)] mb-3 animate-fade-in">
            <span className="font-serif font-bold text-sm text-[#eab308]">ੴ</span>
            <span className="text-xs font-bold tracking-wide text-[#0284c7] dark:text-[#38bdf8]">
              Nirmala Tradition • Vedanta &amp; Guruvani
            </span>
            <span className="text-xs text-[#eab308] font-black">• @amarjit311</span>
          </div>

          {/* CENTERED ROTATING SACRED IK ONKAR MANDALA (User Requested: Center me gol gol ghume) */}
          <div className="w-full my-2 flex items-center justify-center">
            <CenteredRotatingIkOnkar className="w-60 h-60 sm:w-72 sm:h-72" />
          </div>

          {/* High-Contrast Bold Headline in Sky Blue & Golden Yellow */}
          <h1 className="font-serif-bliss text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0f172a] dark:text-white leading-[1.2] mb-4 drop-shadow-sm">
            वेदांत, गुरुवाणी और साधना से{' '}
            <span className="block mt-1 sm:inline text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#eab308] dark:from-[#38bdf8] dark:via-[#facc15] dark:to-[#fde047] drop-shadow-[0_2px_15px_rgba(2,132,199,0.3)]">
              परम आनंद व मुक्ति का मार्ग
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-200 font-medium max-w-2xl leading-relaxed mb-6">
            The Integrated Path to Inner Liberation (Mukti) through the divine synthesis of Non-Dual Vedanta, Gurbani Hymns, and Contemplative Meditation.
          </p>

          {/* Swami Amarjit Singh Official Bio Card with Real Portrait */}
          <div className="w-full max-w-3xl my-2 p-6 sm:p-7 rounded-3xl glass-panel border-2 border-[#eab308]/60 shadow-xl text-left relative overflow-hidden gold-glow-card bg-white/95 dark:bg-[#111d33]/95">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
              
              {/* Real Portrait Photo of Swami Amarjit Singh */}
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-3 border-[#eab308] shrink-0 bg-slate-900 shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                <Image
                  src="/swami-amarjit.jpg"
                  alt="Swami Amarjit Singh"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-serif-bliss text-xl sm:text-2xl font-bold text-[#0f172a] dark:text-white">
                    Swami Amarjit Singh
                  </h3>
                  <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-[#0284c7] text-white border border-[#eab308]/50 shadow-xs">
                    निर्मला परंपरा
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-1">
                  YouTube Creator at &quot;Shower of Bliss&quot; (<span className="text-[#0284c7] dark:text-[#38bdf8] font-bold">@amarjit311</span>)
                </p>
                <p className="text-xs text-[#b45309] dark:text-[#facc15] font-bold mt-1">
                  Revered Master: Sant Nikka Singh Ji &apos;Virakt&apos; (Nirmala Lineage)
                </p>
              </div>
            </div>

            {/* Exact Quote from Swami Amarjit Singh */}
            <blockquote className="font-serif-bliss text-sm sm:text-base text-slate-800 dark:text-slate-100 leading-relaxed italic border-l-4 border-[#eab308] pl-4 py-2.5 my-3 bg-[#f0f9ff] dark:bg-[#172554]/70 rounded-r-2xl border border-slate-100 dark:border-transparent">
              &ldquo;Hi! My name is <strong>Swami Amarjit Singh</strong>. My Guru&apos;s name is <strong>Sant Nikka Singh Ji</strong>. He was an enlightened saint from the Nirmalas line. So what I learned from him about knowledge of <strong>Vedanta, Guruvani, and Meditation</strong>, that I want to share with people, because it can lead us towards liberation.&rdquo;
            </blockquote>

            {/* Real Channel Topics Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-bold">
              <span className="bg-[#e0f2fe] dark:bg-[#1e293b] text-[#0369a1] dark:text-[#7dd3fc] border border-[#0284c7]/30 px-3 py-1 rounded-full">
                📖 Upadesa Saram (Maharishi Ramana)
              </span>
              <span className="bg-[#fef08a] dark:bg-[#1e293b] text-[#854d0e] dark:text-[#fde047] border border-[#eab308]/40 px-3 py-1 rounded-full">
                🕉️ Bhagavad Gita (Chapter 4)
              </span>
              <span className="bg-[#e0f2fe] dark:bg-[#1e293b] text-[#0369a1] dark:text-[#7dd3fc] border border-[#0284c7]/30 px-3 py-1 rounded-full">
                📜 Vedic Stories &amp; Katha
              </span>
              <span className="bg-[#fef08a] dark:bg-[#1e293b] text-[#854d0e] dark:text-[#fde047] border border-[#eab308]/40 px-3 py-1 rounded-full">
                🌹 Poetry of Sultan Bahu
              </span>
              <span className="bg-[#e0f2fe] dark:bg-[#1e293b] text-[#0369a1] dark:text-[#7dd3fc] border border-[#0284c7]/30 px-3 py-1 rounded-full">
                🌾 Sacred Fields of India
              </span>
            </div>
          </div>

          {/* Interactive Hero CTAs in Sky Blue & Golden Yellow */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 my-8 w-full">
            
            {/* Primary Action: Explore Meditations */}
            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#0284c7] via-[#0284c7] to-[#0369a1] hover:from-[#0369a1] hover:to-[#0284c7] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-[#eab308] hover:scale-105 active:scale-95 group"
            >
              <Play className="w-4 h-4 fill-current text-[#fef08a] group-hover:scale-110 transition-transform" />
              <span>Explore YouTube Discourses</span>
            </button>

            {/* Secondary Action: 5-Min Guided Breathwork */}
            <button
              onClick={onOpenBreathing}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white dark:bg-[#15233c] hover:bg-[#e0f2fe] dark:hover:bg-[#1e3352] text-[#0f172a] dark:text-white font-bold text-sm sm:text-base transition-all duration-200 border-2 border-[#eab308]/50 hover:border-[#eab308] shadow-sm hover:scale-105 active:scale-95"
            >
              <Wind className="w-4 h-4 text-[#0284c7] dark:text-[#38bdf8]" />
              <span>Simran Breath Reset</span>
            </button>

            {/* Tertiary Action: Play 432Hz Sound */}
            <button
              onClick={handleRingBowl}
              title="Ring 432Hz harmonic bell chime"
              className={`inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 border ${
                bowlChimed
                  ? 'bg-[#eab308] text-[#0f172a] border-[#eab308] animate-gold-pulse shadow-md'
                  : 'bg-white/90 dark:bg-[#15233c]/90 text-slate-700 dark:text-slate-200 border-[#0284c7]/30 hover:border-[#eab308]'
              }`}
            >
              <Bell className={`w-4 h-4 ${bowlChimed ? 'animate-bounce text-[#0f172a]' : 'text-[#eab308]'}`} />
              <span>{bowlChimed ? '432Hz Bell Resonating...' : 'Chime 432Hz Bell'}</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
