'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import DynamicFooter from '@/components/DynamicFooter';
import BreathingModal from '@/components/BreathingModal';
import { CenteredRotatingIkOnkar } from '@/components/SikhSymbols';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function TeachingsPage() {
  const [isBreathingOpen, setIsBreathingOpen] = useState(false);

  const pillars = [
    {
      id: 'upadesa-saram',
      number: '01',
      title: 'Upadesa Saram (उपदेश सारम्)',
      sage: 'Bhagavan Sri Ramana Maharshi',
      subtitle: 'The Essence of Self-Inquiry & Non-Dual Absorption',
      summary: 'Swami Amarjit Singh illuminates the 30 sacred verses of Upadesa Saram. By investigating "Who Am I?" (आत्म-विचार), the mind returns to its spiritual source in the spiritual heart, dissolving compulsive thought patterns and realizing unbroken Sahaj Samadhi.',
      takeaways: [
        'The breath and mind originate from the same single energetic source.',
        'Worshipping the supreme without sense of otherness (Advaita) is the highest devotion.',
        'Silence (Mouna) is not inactive void, but the pure presence of the Self.'
      ]
    },
    {
      id: 'bhagavad-gita',
      number: '02',
      title: 'Bhagavad Gita (श्रीमद्भगवद्गीता)',
      sage: 'Bhagavan Sri Krishna to Arjuna',
      subtitle: 'Chapter 4 Shloka 34: The Sacred Alchemy of Guru-Seva',
      summary: '"तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया..." — Through humble surrender, sincere inquiry, and selfless service, the enlightened seers of Truth impart supreme wisdom. Swami Amarjit Singh explains how to live Gita\'s wisdom in modern work and relationships.',
      takeaways: [
        'Nishkam Karma: Acting with excellence without emotional clinging to results.',
        'Discrimination (Viveka) between the eternal Knower (Kshetrajna) and the temporary field (Kshetra).',
        'Direct guidance of an enlightened Guru (Tattvadarshi) accelerates liberation.'
      ]
    },
    {
      id: 'vedic-stories',
      number: '03',
      title: 'Vedic Stories & Upanishadic Katha (वेद-कथा)',
      sage: 'Ancient Vedic Rishis & Nirmala Commentators',
      subtitle: 'Timeless Parables Revealing the Indwelling Light',
      summary: 'Drawn from the Chandogya, Mandukya, and Katha Upanishads as preserved in the Nirmala ashrams. These allegorical stories dismantle the illusion of separation and reveal the cosmic unity of Brahman and Atman.',
      takeaways: [
        'Tat Tvam Asi: "Thou Art That" — the eternal non-dual truth.',
        'The parable of the two birds upon the same tree: the experiencer and the silent witness.',
        'How ancient Vedic stories provide immediate psychological peace today.'
      ]
    },
    {
      id: 'sultan-bahu',
      number: '04',
      title: 'Poetry of Hazrat Sultan Bahu (हज़रत सुलतान बाहू)',
      sage: 'Hazrat Sultan Bahu (Sufi Mystic)',
      subtitle: 'Divine Ecstatic Love (Ishq-e-Haqeeqi) & Inward Surrender',
      summary: '"दिल विच रब वसदा..." — Renowned for singing the holy fragrance of "Hoo" (the Divine Essence). Swami Amarjit Singh explores how deep devotional longing and purity of heart dissolve the wall of ego, welcoming the unceasing Shower of Bliss.',
      takeaways: [
        'Planting the jasmine cutting of God\'s Name (Chambe Di Booti) in the heart.',
        'Transcending external religious orthodoxy into universal oceanic divine love.',
        'Merging the seeker (Aashiq) into the Beloved (Mashooq).'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <Navbar onOpenBreathing={() => setIsBreathingOpen(true)} />

      <main className="flex-1 py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0284c7]/15 dark:bg-[#162540] text-[#0369a1] dark:text-[#38bdf8] border border-[#0284c7]/30 text-xs font-bold mb-3">
            <Sparkles className="w-4 h-4 text-[#eab308]" />
            <span>The 4 Core Pillars • मूल आध्यात्मिक सिद्धांत</span>
          </div>

          <CenteredRotatingIkOnkar className="w-48 h-48 sm:w-56 sm:h-56 my-2" />

          <h1 className="font-serif-bliss text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight mt-2">
            The 4 Pillars of Wisdom Taught by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#eab308] dark:from-[#38bdf8] dark:via-[#facc15] dark:to-[#fde047]">
              Swami Amarjit Singh
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
            Every talk, video, and guided session on <strong>@amarjit311</strong> is rooted in these four timeless traditions handed down through Sant Nikka Singh Ji (Nirmala Lineage).
          </p>
        </div>

        {/* Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="glass-panel rounded-3xl p-6 sm:p-8 border-2 border-[#eab308]/40 dark:border-[#eab308]/30 bg-white/95 dark:bg-[#111d33]/95 shadow-xl flex flex-col justify-between hover:border-[#0284c7] transition-all hover:shadow-2xl gold-glow-card"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[#eab308] font-mono">
                    {pillar.number}
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#0284c7]/15 dark:bg-[#162540] text-[#0369a1] dark:text-[#38bdf8] border border-[#0284c7]/30">
                    {pillar.sage}
                  </span>
                </div>

                <h3 className="font-serif-bliss text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs font-bold text-[#0284c7] dark:text-[#38bdf8] mb-4">
                  {pillar.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {pillar.summary}
                </p>

                {/* Key Insights */}
                <div className="p-4 rounded-2xl bg-[#e0f2fe]/60 dark:bg-[#162540]/60 border border-[#0284c7]/20 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0284c7] dark:text-[#facc15] mb-2">
                    Key Spiritual Insights:
                  </h4>
                  <ul className="flex flex-col gap-2 text-xs text-slate-700 dark:text-slate-200">
                    {pillar.takeaways.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#eab308] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href="/videos"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-gradient-to-r from-[#0284c7] to-[#0369a1] hover:from-[#0369a1] hover:to-[#0284c7] text-white text-xs font-bold shadow-md transition-all hover:scale-[1.01] active:scale-98 border border-[#eab308]/40"
              >
                <span>Watch Discourses on This Topic</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#fef08a]" />
              </Link>
            </div>
          ))}
        </div>

      </main>

      <DynamicFooter />
      <BreathingModal isOpen={isBreathingOpen} onClose={() => setIsBreathingOpen(false)} />
    </div>
  );
}
