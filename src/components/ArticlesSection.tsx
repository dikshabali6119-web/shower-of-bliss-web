'use client';

import React from 'react';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  Award
} from 'lucide-react';
import { MUST_READ_ARTICLES } from '@/data/articles';
import { Article } from '@/types';

interface ArticlesSectionProps {
  onSelectArticle: (article: Article) => void;
}

export default function ArticlesSection({ onSelectArticle }: ArticlesSectionProps) {
  return (
    <section id="articles" className="scroll-mt-28 py-12 md:py-18 relative">
      
      {/* Background Soft Yellow-Sky Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-80 bg-[#facc15]/10 dark:bg-[#eab308]/15 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0284c7]/15 dark:bg-[#162540] text-[#0284c7] dark:text-[#38bdf8] border border-[#0284c7]/30 text-xs font-bold mb-2 shadow-xs">
              <BookOpen className="w-3.5 h-3.5 text-[#eab308] dark:text-[#facc15]" />
              <span>वेदांत व गुरुवाणी निबंध संग्रह • 4 Core Essays</span>
            </div>

            <h2 className="font-serif-bliss text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Sacred Articles &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#eab308] dark:from-[#38bdf8] dark:via-[#facc15] dark:to-[#fde047]">
                Spiritual Essays
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium mt-1">
              Deep contemplations on Non-Dual Advaita Vedanta, Gurbani Hymns, and Liberation by Swami Amarjit Singh
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-bold text-[#b45309] dark:text-[#facc15] bg-[#fef08a]/60 dark:bg-[#1e293b] px-3.5 py-1.5 rounded-full border border-[#eab308]/50 shadow-xs">
              मुक्ति व आत्म-साक्षात्कार मार्गदर्शक
            </span>
          </div>
        </div>

        {/* 4 Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MUST_READ_ARTICLES.slice(0, 4).map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="glass-panel rounded-3xl p-6 gold-glow-card flex flex-col justify-between group relative overflow-hidden transition-all duration-300 border-2 border-[#eab308]/40 dark:border-[#eab308]/30 bg-white/95 dark:bg-[#111d33]/95 shadow-md hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              <div>
                {/* Category & Read Time */}
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#e0f2fe] dark:bg-[#162540] text-[#0284c7] dark:text-[#38bdf8] border border-[#0284c7]/30 truncate max-w-[70%]">
                    {article.category}
                  </span>

                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1 shrink-0">
                    <Clock className="w-3.5 h-3.5 text-[#eab308]" />
                    {article.readingTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif-bliss text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-[#0284c7] dark:group-hover:text-[#facc15] transition-colors mb-2.5">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                {/* Key takeaways mini badge */}
                {article.keyTakeaways && article.keyTakeaways.length > 0 && (
                  <div className="p-2.5 rounded-xl bg-[#f0f9ff] dark:bg-[#162540]/60 border border-[#0284c7]/20 mb-3">
                    <span className="text-[10px] uppercase font-bold text-[#0284c7] dark:text-[#facc15] block mb-1">
                      मुख्य बिंदु:
                    </span>
                    <p className="text-[11px] text-slate-700 dark:text-slate-200 line-clamp-2 leading-relaxed">
                      &bull; {article.keyTakeaways[0]}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Button: Read Article */}
              <div className="pt-3 border-t border-[#0284c7]/15 dark:border-[#eab308]/20 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  {article.publishDate}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectArticle(article);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#0284c7] to-[#0369a1] text-white text-xs font-bold shadow-xs hover:scale-105 transition-transform border border-[#facc15]"
                >
                  <BookOpen className="w-3 h-3 text-[#fef08a]" />
                  <span>पढ़ें</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
