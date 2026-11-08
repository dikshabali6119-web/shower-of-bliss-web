'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Play, 
  Wind, 
  Bell, 
  BookOpen, 
  Heart, 
  Radio, 
  Music,
  Compass,
  Sparkles
} from 'lucide-react';
import { RotatingIkOnkarMandala } from '@/components/SikhSymbols';
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
    <section id="hero" className="relative pt-4 pb-14 md:pt-8 md:pb-20 overflow-hidden">
      
      {/* Decorative Warm Saffron & Gold Floating Spiritual Mists (No green!) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] md:w-[950px] md:h-[550px] bg-gradient-to-tr from-[#f59e0b]/20 via-[#d97706]/15 to-[#b45309]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#f59e0b]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#d97706]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ROTATING SACRED IK ONKAR (ੴ) MANDALA IN BACKGROUND (User Requested) */}
      <div className="absolute top-4 right-4 sm:right-10 lg:right-20 opacity-85 dark:opacity-60 pointer-events-none">
        <RotatingIkOnkarMandala className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Sacred Lineage & YouTube Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-[#d97706]/50 shadow-xs mb-5 animate-fade-in">
            <span className="font-serif font-bold text-sm text-[#d97706]">ੴ</span>
            <span className="text-xs font-semibold tracking-wide text-[#574d3f] dark:text-[#fcd34d]">
              संत निक्का सिंह जी (निर्मला परंपरा) • वेदांत, गुरुवाणी व मुक्ति का मार्ग
            </span>
            <span className="text-xs text-[#d97706] font-bold">• @amarjit311</span>
          </div>

          {/* Bold Headline (Spiritual Indian Aesthetic) */}
          <h1 className="font-serif-bliss text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1f1b16] dark:text-[#faf6ed] leading-[1.2] mb-4">
            वेदांत, गुरुवाणी और साधना से{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#c25e00] via-[#d97706] to-[#b45309] dark:from-[#fbbf24] dark:via-[#f59e0b] dark:to-[#d97706]">
              परम आनंद व मुक्ति का मार्ग
            </span>
          </h1>

          {/* Swami Amarjit Singh Authentic Bio Card with his Real Photo */}
          <div className="my-3 p-5 sm:p-6 rounded-3xl glass-panel border border-[#d97706]/45 shadow-sm text-left relative overflow-hidden gold-glow-card max-w-2xl">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-3">
              
              {/* Real Portrait Photo of Swami Amarjit Singh */}
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#d97706] shrink-0 bg-stone-900 shadow-md">
                <Image
                  src="/swami-amarjit.jpg"
                  alt="Swami Amarjit Singh ji"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-serif-bliss text-lg sm:text-xl font-bold text-[#1f1b16] dark:text-[#faf6ed]">
                    Swami Amarjit Singh
                  </h3>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#c25e00] text-white">
                    निर्मला शिष्य
                  </span>
                </div>
                <p className="text-xs text-[#857865] dark:text-[#d3c9b7] font-medium mt-0.5">
                  यूट्यूब चैनल &quot;Shower of Bliss&quot; (<span className="text-[#d97706] font-semibold">@amarjit311</span>)
                </p>
                <p className="text-[11px] text-[#c25e00] dark:text-[#fbbf24] font-semibold mt-1">
                  पूज्य गुरुदेव: संत निक्का सिंह जी &apos;विरक्त&apos; (निर्मला संप्रदाय)
                </p>
              </div>
            </div>

            {/* Exact Quote from Swami Amarjit Singh */}
            <blockquote className="font-serif-bliss text-sm sm:text-base text-[#1f1b16] dark:text-[#faf6ed] leading-relaxed italic border-l-3 border-[#d97706] pl-3.5 my-3 bg-[#fef3e2]/60 dark:bg-[#28211b]/60 py-2 rounded-r-xl">
              &ldquo;Hi! My name is <strong>Swami Amarjit Singh</strong>. My Guru&apos;s name is <strong>Sant Nikka Singh Ji</strong>. He was an enlightened saint from the Nirmalas line. So what I learned from him about knowledge of <strong>Vedanta, Guruvani, and Meditation</strong>, that I want to share with people, because it can lead us towards liberation.&rdquo;
            </blockquote>

            {/* Real channel topics tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-semibold text-[#8c4200] dark:text-[#fcd34d]">
              <span className="bg-[#fef3e2] dark:bg-[#28211b] px-2.5 py-1 rounded-full border border-[#d97706]/30">
                📖 उपदेश सारम् (महर्षि रमण)
              </span>
              <span className="bg-[#fef3e2] dark:bg-[#28211b] px-2.5 py-1 rounded-full border border-[#d97706]/30">
                🕉️ श्रीमद्भगवद्गीता (अध्याय ४)
              </span>
              <span className="bg-[#fef3e2] dark:bg-[#28211b] px-2.5 py-1 rounded-full border border-[#d97706]/30">
                📜 वेद-कथा व उपनिषद
              </span>
              <span className="bg-[#fef3e2] dark:bg-[#28211b] px-2.5 py-1 rounded-full border border-[#d97706]/30">
                🌹 सुलतान बाहू का कलाम
              </span>
              <span className="bg-[#fef3e2] dark:bg-[#28211b] px-2.5 py-1 rounded-full border border-[#d97706]/30">
                🌾 भारत के पावन खेत
              </span>
            </div>
          </div>

          {/* Interactive Hero CTAs (Kesari / Gold theme) */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 my-7 w-full">
            
            {/* Primary Action: Explore Meditations */}
            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#c25e00] hover:bg-[#a34f00] text-white font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 border border-[#d97706]/50 hover:scale-[1.02] active:scale-[0.98] group"
            >
              <Play className="w-4 h-4 fill-current text-[#fef3e2] group-hover:scale-110 transition-transform" />
              <span>सत्संग व वीडियो देखें</span>
            </button>

            {/* Secondary Action: 5-Min Guided Breathwork */}
            <button
              onClick={onOpenBreathing}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full glass-panel hover:bg-white dark:hover:bg-[#28211b] text-[#1f1b16] dark:text-[#faf6ed] font-medium text-sm sm:text-base transition-all duration-200 border border-[#d97706]/35 hover:border-[#d97706] shadow-xs hover:scale-[1.02] active:scale-[0.98]"
            >
              <Wind className="w-4 h-4 text-[#c25e00] dark:text-[#fbbf24]" />
              <span>सिमरन श्वास साधना</span>
            </button>

            {/* Tertiary Action: Play 432Hz Sound */}
            <button
              onClick={handleRingBowl}
              title="432Hz शांत घंटी बजाएँ"
              className={`inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border ${
                bowlChimed
                  ? 'bg-[#d97706]/20 border-[#d97706] text-[#b45309] dark:text-[#fbbf24] animate-gold-pulse'
                  : 'bg-white/80 dark:bg-[#1c2334]/80 text-[#574d3f] dark:text-[#d3c9b7] border-[#d97706]/20 hover:border-[#d97706]'
              }`}
            >
              <Bell className={`w-4 h-4 ${bowlChimed ? 'animate-bounce text-[#d97706]' : ''}`} />
              <span>{bowlChimed ? '432Hz गूंज रही है...' : 'शांत घंटी बजाएँ'}</span>
            </button>
          </div>

          {/* Three Core Spiritual Pillars (Devanagari + English) */}
          <div id="about-swamiji" className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 pt-2 text-left">
            
            <div className="glass-panel p-4 rounded-3xl border border-[#d97706]/35 gold-glow-card">
              <div className="flex items-center gap-2 text-[#c25e00] dark:text-[#fbbf24] font-bold text-xs uppercase tracking-wider mb-1.5">
                <BookOpen className="w-4 h-4" />
                <span>१. वेदांत व उपदेश सारम्</span>
              </div>
              <p className="text-xs text-[#574d3f] dark:text-[#d3c9b7] leading-relaxed">
                महर्षि रमण का आत्म-विचार और उपनिषदों का अद्वैत दर्शन। यह जानना कि जीव और ब्रह्म में कोई भेद नहीं है (तत्वमसि)।
              </p>
            </div>

            <div className="glass-panel p-4 rounded-3xl border border-[#d97706]/35 gold-glow-card">
              <div className="flex items-center gap-2 text-[#c25e00] dark:text-[#fbbf24] font-bold text-xs uppercase tracking-wider mb-1.5">
                <Music className="w-4 h-4" />
                <span>२. गुरुवाणी व भगवद्गीता</span>
              </div>
              <p className="text-xs text-[#574d3f] dark:text-[#d3c9b7] leading-relaxed">
                गीता के गूढ़ श्लोक और श्री गुरु ग्रंथ साहिब जी का पावन संदेश। अहंकार (हउमै) को त्यागकर परमात्मा के शरणागत होना।
              </p>
            </div>

            <div className="glass-panel p-4 rounded-3xl border border-[#d97706]/35 gold-glow-card">
              <div className="flex items-center gap-2 text-[#c25e00] dark:text-[#fbbf24] font-bold text-xs uppercase tracking-wider mb-1.5">
                <Compass className="w-4 h-4" />
                <span>३. नाम सिमरन से मुक्ति</span>
              </div>
              <p className="text-xs text-[#574d3f] dark:text-[#d3c9b7] leading-relaxed">
                श्वास-श्वास में प्रभु का सिमरन और ध्यान। मन की चंचलता को मिटाकर जीवन-मुक्ति (जीवित रहते परम स्वतंत्रता) प्राप्त करना।
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
