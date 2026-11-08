'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, BookOpen, Compass, Award, Heart, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function NirmalaHeritageSection() {
  const lineageSteps = [
    {
      title: 'Origin with Sri Guru Gobind Singh Ji',
      period: 'Circa 1686 CE',
      description: 'Sri Guru Gobind Singh Ji Maharaj sent five devoted Sikhs (The Panj Nirmalas) to Kashi (Varanasi) to master Sanskrit, ancient Upanishads, and Advaita Vedanta, establishing the scholarly Nirmala contemplative order.'
    },
    {
      title: 'Synthesis of Vedanta & Guruvani',
      period: 'Continuous Living Tradition',
      description: 'Nirmala saints demonstrated that non-dual Advaita ("Aham Brahmasmi") and Gurbani ("Sabh Mah Jot Jot Hai So-e") illuminate the exact same supreme reality of Ik Onkar (ੴ).'
    },
    {
      title: 'Sant Nikka Singh Ji \'Virakt\'',
      period: 'Enlightened Master',
      description: 'Revered as an embodiment of renunciation, compassion, and divine scholarship. He imparted experiential knowledge of Vedanta, Guruvani katha, and deep meditative silence across India.'
    },
    {
      title: 'Swami Amarjit Singh (@amarjit311)',
      period: 'Carrying the Sacred Flame',
      description: 'Carrying forward his Guru\'s mandate through "Shower of Bliss", making the supreme wisdom of Vedanta, Guruvani, and meditation accessible worldwide on YouTube.'
    }
  ];

  return (
    <section id="about-swamiji" className="py-12 md:py-20 relative">
      
      {/* Background Soft Sky Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-72 bg-[#0284c7]/10 dark:bg-[#0284c7]/20 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0284c7]/15 dark:bg-[#15233c] text-[#0369a1] dark:text-[#38bdf8] border border-[#0284c7]/30 text-xs font-bold mb-3">
            <Shield className="w-3.5 h-3.5 text-[#eab308]" />
            <span>Sacred Lineage • निर्मला संप्रदाय व गुरु परंपरा</span>
          </div>

          <h2 className="font-serif-bliss text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] dark:text-white tracking-tight leading-tight">
            The Guru-Shishya Heritage:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#eab308] dark:from-[#38bdf8] dark:via-[#facc15] dark:to-[#fde047]">
              Sant Nikka Singh Ji
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            Discover the profound spiritual foundation behind Shower of Bliss and the lineage that bridged non-dual Vedanta with Guruvani devotion.
          </p>
        </div>

        {/* Feature Cards Grid (Sky Blue & Yellow Theme) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {lineageSteps.map((step, idx) => (
            <div 
              key={idx}
              className="glass-panel rounded-3xl p-6 gold-glow-card flex flex-col justify-between border-2 border-[#eab308]/40 bg-white/95 dark:bg-[#111d33]/95 relative overflow-hidden shadow-lg"
            >
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-[#0284c7] text-[#fef08a] flex items-center justify-center font-bold text-sm border-2 border-[#eab308] shadow-md">
                0{idx + 1}
              </div>

              <div>
                <span className="text-[11px] font-bold text-[#0284c7] dark:text-[#38bdf8] uppercase tracking-wider block mb-1">
                  {step.period}
                </span>
                <h3 className="font-serif-bliss text-lg font-bold text-[#0f172a] dark:text-white mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#eab308]/20 flex items-center gap-2 text-xs text-[#b45309] dark:text-[#facc15] font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#eab308]" />
                <span>Nirmala Heritage</span>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Pillars of Teaching Section Banner */}
        <div id="pillars" className="glass-panel rounded-3xl p-6 sm:p-10 border-2 border-[#eab308]/60 bg-gradient-to-br from-white via-[#f0f9ff] to-[#e0f2fe] dark:from-[#0f172a] dark:via-[#111d33] dark:to-[#0284c7]/20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7] dark:text-[#38bdf8] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#eab308]" />
                Core Curriculum of Awakening
              </span>
              <h3 className="font-serif-bliss text-2xl sm:text-3xl font-bold text-[#0f172a] dark:text-white leading-tight">
                The 4 Pillars Taught by Swami Amarjit Singh
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Every video, discourse, and guided session on the YouTube channel <strong>@amarjit311</strong> is rooted in these four timeless pillars:
              </p>
              
              <Link 
                href="/teachings" 
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0284c7] dark:text-[#facc15] hover:underline"
              >
                <span>Read in-depth study of all 4 pillars</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-4 rounded-2xl bg-white/90 dark:bg-[#15233c] border-2 border-[#eab308]/40 shadow-sm">
                <h4 className="font-serif-bliss text-base font-bold text-[#0284c7] dark:text-[#38bdf8] mb-1">
                  1. Upadesa Saram (महर्षि रमण)
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Direct Self-Inquiry ("Who Am I?"). Dissolving the mind in the heart cave to abide in natural Samadhi.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/90 dark:bg-[#15233c] border-2 border-[#eab308]/40 shadow-sm">
                <h4 className="font-serif-bliss text-base font-bold text-[#0284c7] dark:text-[#38bdf8] mb-1">
                  2. Bhagavad Gita (श्रीमद्भगवद्गीता)
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Chapter 4 Shloka 34, Nishkam Karma, and Guru-Seva to awaken the light of supreme wisdom.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/90 dark:bg-[#15233c] border-2 border-[#eab308]/40 shadow-sm">
                <h4 className="font-serif-bliss text-base font-bold text-[#0284c7] dark:text-[#38bdf8] mb-1">
                  3. Vedic Wisdom &amp; Katha (वेद कथा)
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Ancient Upanishadic allegories explaining the non-dual Truth of Atman, Maya, and Mukti.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/90 dark:bg-[#15233c] border-2 border-[#eab308]/40 shadow-sm">
                <h4 className="font-serif-bliss text-base font-bold text-[#0284c7] dark:text-[#38bdf8] mb-1">
                  4. Poetry of Sultan Bahu (सूफी वाणी)
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Cultivating divine ecstatic love ("Ishq-e-Haqeeqi") and rooting the plant of God's Name in the heart.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
