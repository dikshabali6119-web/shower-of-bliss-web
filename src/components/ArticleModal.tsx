'use client';

import React, { useEffect, useState } from 'react';
import { X, BookOpen, Clock, Calendar, Share2, Check, Sparkles } from 'lucide-react';
import { Article } from '@/types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border-2 border-[#eab308]/60 shadow-2xl bg-white/95 dark:bg-[#111d33]/98 text-slate-900 dark:text-white flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 glass-nav px-6 py-4 flex items-center justify-between border-b border-[#0284c7]/20 dark:border-[#eab308]/20 bg-white/95 dark:bg-[#111d33]/95">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-[#e0f2fe] dark:bg-[#162540] text-[#0284c7] dark:text-[#38bdf8] border border-[#0284c7]/30">
              <BookOpen className="w-4 h-4 text-[#0284c7] dark:text-[#38bdf8]" />
            </span>
            <span className="text-xs uppercase tracking-wider font-bold text-[#0284c7] dark:text-[#facc15]">
              आध्यात्मिक विचार • Shower of Bliss
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 text-[#0284c7] dark:text-[#facc15] border border-[#0284c7]/30 transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'कॉपी हुआ' : 'साझा करें'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 flex flex-col gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-300 mb-3">
              <span className="px-3 py-0.5 rounded-full font-bold bg-[#0284c7] text-white">
                {article.category}
              </span>
              <span className="flex items-center gap-1 font-semibold">
                <Clock className="w-3.5 h-3.5 text-[#eab308]" />
                {article.readingTime}
              </span>
              <span className="flex items-center gap-1 font-semibold">
                <Calendar className="w-3.5 h-3.5 text-[#eab308]" />
                {article.publishDate}
              </span>
            </div>

            <h1 className="font-serif-bliss text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
              {article.title}
            </h1>

            <p className="text-base text-slate-700 dark:text-slate-200 italic leading-relaxed border-l-4 border-[#eab308] pl-4 py-1.5 bg-[#f0f9ff] dark:bg-[#162540]/60 rounded-r-2xl">
              {article.excerpt}
            </p>
          </div>

          {/* Key Takeaways Box */}
          <div className="rounded-2xl p-5 bg-[#e0f2fe]/60 dark:bg-[#162540]/60 border-2 border-[#eab308]/40">
            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0284c7] dark:text-[#facc15] mb-3">
              <Sparkles className="w-4 h-4 text-[#eab308]" />
              मुख्य आध्यात्मिक बिंदु (Core Insights)
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#eab308] font-bold mt-0.5">•</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Paragraphs */}
          <div className="flex flex-col gap-4 text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Author Box */}
          <div className="pt-6 mt-6 border-t border-[#0284c7]/20 dark:border-[#eab308]/20 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#0284c7] text-[#facc15] flex items-center justify-center font-serif text-2xl font-bold border-2 border-[#eab308] shadow-md">
              ੴ
            </div>
            <div>
              <h5 className="font-serif-bliss text-base font-bold text-slate-900 dark:text-white">
                Swami Amarjit Singh
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Disciple of Sant Nikka Singh Ji (Nirmala Lineage) • Shower of Bliss (@amarjit311)
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
