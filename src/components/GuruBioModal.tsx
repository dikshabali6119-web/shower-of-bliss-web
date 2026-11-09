'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, Sparkles, BookOpen, Heart, Shield, Check, Share2, Award } from 'lucide-react';

export interface GuruBioData {
  id: string;
  name: string;
  gurmukhiName: string;
  title: string;
  period: string;
  image: string;
  badge: string;
  motto: string;
  lifeStory: string[];
  teachings: string[];
  nirmalaConnection: string;
  sacredGurbani: {
    shloka: string;
    meaning: string;
  };
}

interface GuruBioModalProps {
  guru: GuruBioData | null;
  onClose: () => void;
}

export default function GuruBioModal({ guru, onClose }: GuruBioModalProps) {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (guru) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [guru, onClose]);

  if (!guru) return null;

  const handleShare = () => {
    const text = `${guru.name} (${guru.title})\n"${guru.sacredGurbani.shloka}"\n\nShower of Bliss - Swami Amarjit Singh (@amarjit311)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl border-2 border-[#eab308]/60 shadow-2xl bg-white/98 dark:bg-[#0c1628]/98 text-slate-900 dark:text-white flex flex-col gold-glow-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Title & Close Button */}
        <div className="sticky top-0 z-20 px-6 py-4 flex items-center justify-between border-b border-[#0284c7]/20 dark:border-[#eab308]/30 bg-white/95 dark:bg-[#0c1628]/95 backdrop-blur-xl">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-[#0284c7] text-[#fef08a] flex items-center justify-center font-serif font-extrabold text-base shadow-xs">
              ੴ
            </span>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#0284c7] dark:text-[#facc15] block">
                {guru.badge}
              </span>
              <h2 className="font-serif-bliss text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-tight">
                {guru.name} • पावन दर्शन व जीवन गाथा
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#e0f2fe] dark:bg-[#162540] text-[#0284c7] dark:text-[#facc15] border border-[#0284c7]/30 hover:scale-105 transition-all shadow-xs"
              title="Copy details"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'कॉपी हुआ' : 'साझा करें'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          
          {/* Top Hero Section: Authentic Portrait + Holy Titles */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center p-5 rounded-3xl bg-gradient-to-br from-[#e0f2fe]/60 via-[#f0f7ff] to-white dark:from-[#13233e] dark:via-[#0e1b30] dark:to-[#0a1424] border-2 border-[#eab308]/40 shadow-md">
            
            {/* Real Authentic Portrait */}
            <div className="sm:col-span-4 flex justify-center">
              <div className="relative w-36 h-44 sm:w-44 sm:h-52 rounded-2xl overflow-hidden border-3 border-[#eab308] shadow-[0_0_25px_rgba(234,179,8,0.35)] bg-slate-900 shrink-0">
                <Image
                  src={guru.image}
                  alt={guru.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Title & Holy Motto */}
            <div className="sm:col-span-8 flex flex-col gap-2 text-center sm:text-left">
              <span className="inline-flex items-center gap-1.5 self-center sm:self-start px-3 py-1 rounded-full text-xs font-bold bg-[#0284c7]/15 dark:bg-[#162540] text-[#0284c7] dark:text-[#38bdf8] border border-[#0284c7]/30">
                <Shield className="w-3.5 h-3.5 text-[#eab308]" />
                <span>{guru.title}</span>
              </span>

              <h1 className="font-serif-bliss text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {guru.name}
              </h1>

              <p className="text-sm font-semibold text-[#0284c7] dark:text-[#facc15]">
                {guru.period}
              </p>

              <blockquote className="mt-2 font-serif italic text-xs sm:text-sm text-slate-800 dark:text-slate-100 border-l-4 border-[#eab308] pl-3 py-1 bg-white/70 dark:bg-[#162540]/60 rounded-r-xl">
                &ldquo;{guru.motto}&rdquo;
              </blockquote>
            </div>

          </div>

          {/* Section 1: पावन गुरुवाणी श्लोक व अर्थ (Gurbani Hymn) */}
          <div className="p-5 rounded-2xl bg-[#fef08a]/30 dark:bg-[#1e293b]/70 border-2 border-[#eab308]/50 shadow-xs">
            <span className="text-[11px] uppercase font-bold tracking-wider text-[#854d0e] dark:text-[#fde047] flex items-center gap-1.5 mb-2">
              <Sparkles className="w-4 h-4 text-[#eab308]" />
              पावन वाणी व श्लोक (Sacred Verse)
            </span>
            <p className="font-serif text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-relaxed">
              &ldquo;{guru.sacredGurbani.shloka}&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              <strong>आध्यात्मिक भावार्थ:</strong> {guru.sacredGurbani.meaning}
            </p>
          </div>

          {/* Section 2: जीवन गाथा (Life Story) */}
          <div className="flex flex-col gap-3">
            <h3 className="font-serif-bliss text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 border-b border-[#0284c7]/20 dark:border-[#eab308]/20 pb-2">
              <BookOpen className="w-5 h-5 text-[#0284c7] dark:text-[#facc15]" />
              <span>पावन जीवन गाथा व इतिहास</span>
            </h3>
            {guru.lifeStory.map((para, idx) => (
              <p key={idx} className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Section 3: मुख्य आध्यात्मिक उपदेश (Core Teachings) */}
          <div className="p-5 rounded-2xl bg-[#e0f2fe]/50 dark:bg-[#13233e]/60 border border-[#0284c7]/30">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0284c7] dark:text-[#facc15] mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#eab308]" />
              <span>मुख्य आध्यात्मिक उपदेश (Core Teachings for Liberation)</span>
            </h4>
            <ul className="flex flex-col gap-2">
              {guru.teachings.map((teaching, tIdx) => (
                <li key={tIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] dark:bg-[#facc15] shrink-0 mt-2" />
                  <span>{teaching}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: संत निक्का सिंह जी व निर्मला परंपरा से संबंध (Connection to Sant Nikka Singh Ji) */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#e0f2fe]/80 to-[#fef08a]/40 dark:from-[#172744] dark:to-[#1a2d4d] border-2 border-[#eab308]/50 shadow-sm">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0284c7] dark:text-[#facc15] mb-2 flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>संत निक्का सिंह जी व निर्मला परंपरा से पावन संबंध</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-medium">
              {guru.nirmalaConnection}
            </p>
          </div>

          {/* Footer Note */}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
            Shower of Bliss • स्वामी अमरजीत सिंह (@amarjit311) • इन पावन गुरुओं के उपदेशों को जन-जन तक पहुँचाने का समर्पित मार्ग
          </div>

        </div>

      </div>
    </div>
  );
}
