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
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border border-[#d97706]/60 shadow-2xl bg-[#fcf9f2]/98 dark:bg-[#141722]/98 text-[#1f1b16] dark:text-[#faf6ed] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 glass-nav px-6 py-4 flex items-center justify-between border-b border-[#d97706]/20">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#fef3e2] dark:bg-[#28211b] text-[#c25e00] dark:text-[#fbbf24]">
              <BookOpen className="w-4 h-4" />
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#b45309] dark:text-[#fbbf24]">
              आध्यात्मिक विचार • Shower of Bliss
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-black/5 dark:hover:bg-white/10 text-[#c25e00] dark:text-[#fbbf24] border border-[#d97706]/20"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'कॉपी हुआ' : 'साझा करें'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-stone-500 hover:text-stone-900 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 flex flex-col gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#857865] dark:text-[#d3c9b7] mb-3">
              <span className="px-2.5 py-0.5 rounded-full font-semibold bg-[#c25e00] text-white">
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#d97706]" />
                {article.readingTime}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#d97706]" />
                {article.publishDate}
              </span>
            </div>

            <h1 className="font-serif-bliss text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f1b16] dark:text-[#faf6ed] leading-tight mb-4">
              {article.title}
            </h1>

            <p className="text-base text-[#574d3f] dark:text-[#d3c9b7] italic leading-relaxed border-l-2 border-[#d97706] pl-4 py-1">
              {article.excerpt}
            </p>
          </div>

          {/* Key Takeaways Box */}
          <div className="rounded-2xl p-5 bg-[#fef3e2] dark:bg-[#28211b] border border-[#d97706]/35">
            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c25e00] dark:text-[#fbbf24] mb-3">
              <Sparkles className="w-4 h-4 text-[#d97706]" />
              मुख्य आध्यात्मिक बिंदु (Core Insights)
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-[#1f1b16] dark:text-[#faf6ed]">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#d97706] font-bold mt-0.5">•</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Paragraphs */}
          <div className="flex flex-col gap-4 text-sm sm:text-base text-[#1f1b16] dark:text-[#faf6ed] leading-relaxed">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Author Box */}
          <div className="pt-6 mt-6 border-t border-[#2d5a4c]/10 dark:border-[#d4af37]/20 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#2d5a4c] text-[#f4e297] flex items-center justify-center font-serif text-2xl font-bold border border-[#d4af37]">
              ੴ
            </div>
            <div>
              <h5 className="font-serif-bliss text-base font-bold text-[#1c3b31] dark:text-[#f4fbf7]">
                Swami Amarjit Singh
              </h5>
              <p className="text-xs text-[#5f7d72] dark:text-[#97b8aa]">
                Disciple of Sant Nikka Singh Ji (Nirmala Lineage) • Shower of Bliss (@amarjit311)
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
