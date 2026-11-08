'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import DynamicFooter from '@/components/DynamicFooter';
import BreathingModal from '@/components/BreathingModal';
import NirmalaHeritageSection from '@/components/NirmalaHeritageSection';
import Image from 'next/image';
import { CenteredRotatingIkOnkar } from '@/components/SikhSymbols';
import { Sparkles } from 'lucide-react';

export default function AboutPage() {
  const [isBreathingOpen, setIsBreathingOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <Navbar onOpenBreathing={() => setIsBreathingOpen(true)} />

      <main className="flex-1 py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0284c7]/15 dark:bg-[#162540] text-[#0369a1] dark:text-[#38bdf8] border border-[#0284c7]/30 text-xs font-bold mb-4">
            <Sparkles className="w-4 h-4 text-[#eab308]" />
            <span>Sacred Lineage • निर्मला गुरु परंपरा</span>
          </div>
          
          <CenteredRotatingIkOnkar className="w-48 h-48 sm:w-56 sm:h-56 my-2" />

          <h1 className="font-serif-bliss text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight mt-2">
            Swami Amarjit Singh &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#eab308] dark:from-[#38bdf8] dark:via-[#facc15] dark:to-[#fde047]">
              Sant Nikka Singh Ji
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
            The Living Heritage of the Nirmala Order — Harmonizing classical Advaita Vedanta with the celestial nectar of Guruvani for human liberation (Mukti).
          </p>
        </div>

        {/* Swami Amarjit Singh Biography Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border-2 border-[#eab308]/50 bg-white/95 dark:bg-[#111d33]/95 shadow-2xl mb-16 gold-glow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-44 h-44 rounded-3xl overflow-hidden border-4 border-[#eab308] shadow-[0_0_30px_rgba(234,179,8,0.4)] mb-4 bg-slate-900">
                <Image
                  src="/swami-amarjit.jpg"
                  alt="Swami Amarjit Singh"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif-bliss text-2xl font-bold text-slate-900 dark:text-white">
                Swami Amarjit Singh
              </h3>
              <p className="text-xs text-[#0284c7] dark:text-[#facc15] font-bold mt-1">
                Discourses on Vedanta, Guruvani &amp; Meditation
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Channel: <span className="text-[#0284c7] dark:text-white font-bold">@amarjit311</span>
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-4 text-slate-700 dark:text-slate-200 leading-relaxed text-sm sm:text-base">
              <h4 className="font-serif-bliss text-xl font-bold text-[#0284c7] dark:text-[#facc15]">
                In Swami Ji&apos;s Own Words:
              </h4>
              <blockquote className="font-serif-bliss text-base sm:text-lg text-slate-900 dark:text-white italic border-l-4 border-[#eab308] pl-4 py-2 bg-[#f0f9ff] dark:bg-[#162540]/60 rounded-r-2xl">
                &ldquo;Hi! My name is <strong>Swami Amarjit Singh</strong>. My Guru&apos;s name is <strong>Sant Nikka Singh Ji</strong>. He was an enlightened saint from the Nirmalas line. So what I learned from him about knowledge of <strong>Vedanta, Guruvani, and Meditation</strong>, that I want to share with people, because it can lead us towards liberation.&rdquo;
              </blockquote>
              <p>
                Having spent years under the holy guidance of enlightened saint <strong>Sant Nikka Singh Ji &apos;Virakt&apos;</strong>, Swami Amarjit Singh was trained in the classical contemplation of the Upanishads, the Brahma Sutras, Bhagavad Gita, and Sri Guru Granth Sahib.
              </p>
              <p>
                His YouTube sanctuary <strong>Shower of Bliss</strong> was founded to preserve and transmit these profound teachings without commercialization or dogma, guiding seekers toward living liberation (Jeevan Mukti).
              </p>
            </div>

          </div>
        </div>

        {/* Detailed Nirmala Heritage Component */}
        <NirmalaHeritageSection />

      </main>

      <DynamicFooter />
      <BreathingModal isOpen={isBreathingOpen} onClose={() => setIsBreathingOpen(false)} />
    </div>
  );
}
