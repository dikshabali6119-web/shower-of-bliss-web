'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import DynamicFooter from '@/components/DynamicFooter';
import ArticleModal from '@/components/ArticleModal';
import BreathingModal from '@/components/BreathingModal';
import { MUST_READ_ARTICLES } from '@/data/articles';
import { Article } from '@/types';
import { BookOpen, Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';

export default function ArticlesPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isBreathingOpen, setIsBreathingOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <Navbar onOpenBreathing={() => setIsBreathingOpen(true)} />

      <main className="flex-1 py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0284c7]/15 dark:bg-[#162540] text-[#0369a1] dark:text-[#38bdf8] border border-[#0284c7]/30 text-xs font-bold mb-3">
            <BookOpen className="w-4 h-4 text-[#eab308]" />
            <span>Spiritual Essays • वेदांत व ज्ञान गंगा</span>
          </div>

          <h1 className="font-serif-bliss text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            Must-Read Reflections &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#eab308] dark:from-[#38bdf8] dark:via-[#facc15] dark:to-[#fde047]">
              Spiritual Wisdom
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            Essays on Non-Dual Vedanta, Sri Guru Granth Sahib&apos;s Gurbani, and the experiential path to Mukti (Liberation).
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {MUST_READ_ARTICLES.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group cursor-pointer glass-panel rounded-3xl p-6 sm:p-7 gold-glow-card flex flex-col justify-between transition-all duration-300 border-2 border-[#eab308]/40 dark:border-[#eab308]/30 bg-white/95 dark:bg-[#111d33]/95 shadow-xl hover:border-[#0284c7]"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="font-bold text-[#0284c7] dark:text-[#38bdf8] px-3 py-0.5 rounded-full bg-[#e0f2fe] dark:bg-[#162540] border border-[#0284c7]/30">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 font-mono font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#eab308]" />
                    {article.readingTime}
                  </span>
                </div>

                <h3 className="font-serif-bliss text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-[#0284c7] dark:group-hover:text-[#facc15] transition-colors mb-3">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#0284c7]/20 dark:border-[#eab308]/20 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {article.publishDate}
                </span>

                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0284c7] dark:text-[#facc15] group-hover:translate-x-1 transition-transform">
                  <span>Read Full Essay</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </main>

      <DynamicFooter />
      <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
      <BreathingModal isOpen={isBreathingOpen} onClose={() => setIsBreathingOpen(false)} />
    </div>
  );
}
