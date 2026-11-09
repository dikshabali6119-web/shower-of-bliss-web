'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Eye, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { YoutubeIcon } from '@/components/SocialIcons';
import { VideoItem } from '@/types';
import { MEDITATIONS_DATA } from '@/data/meditations';

interface VideoSliderProps {
  onSelectVideo: (video: VideoItem) => void;
}

export default function VideoSlider({ onSelectVideo }: VideoSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? MEDITATIONS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === MEDITATIONS_DATA.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const current = MEDITATIONS_DATA[currentIndex];

  return (
    <section className="w-full py-6 md:py-10">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#0284c7]/15 dark:bg-[#162540] text-[#0284c7] dark:text-[#38bdf8] border border-[#0284c7]/30 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#eab308] dark:text-[#facc15]" />
            <span>पावन सत्संग विचार • आत्मज्ञान वाणी</span>
          </div>
          <h2 className="font-serif-bliss text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0f172a] dark:text-white tracking-tight">
            Divine Discourses &amp; Spiritual Wisdom
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 mt-1 font-medium">
            Non-Dual Vedanta, Maharishi Ramana Teachings, Bhagavad Gita &amp; Sufi Poetry by Swami Amarjit Singh
          </p>
        </div>
      </div>

      {/* Main Slide Card */}
      <div 
        className="relative rounded-3xl overflow-hidden glass-panel border-2 border-[#eab308]/60 shadow-2xl transition-all duration-500 group bg-white/95 dark:bg-[#111d33]/95"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px] sm:min-h-[440px]">
          
          {/* Visual Showcase (7 cols on lg) */}
          <div 
            className="relative lg:col-span-7 w-full h-64 sm:h-80 lg:h-full cursor-pointer overflow-hidden bg-slate-900"
            onClick={() => onSelectVideo(current)}
          >
            <Image
              src={current.thumbnailUrl}
              alt={current.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/30 lg:to-black/80" />

            {/* Pulsing Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#0284c7]/90 text-white border-2 border-[#facc15] shadow-[0_0_30px_rgba(250,204,21,0.6)] flex items-center justify-center transition-transform duration-300 group-hover:scale-115">
                <Play className="w-6 h-6 fill-current text-[#fef08a] ml-1" />
              </div>
            </div>

            {/* Duration Tag */}
            <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-mono font-bold flex items-center gap-1.5 border border-white/20">
              <Clock className="w-3.5 h-3.5 text-[#facc15]" />
              <span>{current.duration}</span>
            </div>
          </div>

          {/* Slide Details Panel (5 cols on lg) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white dark:bg-[#111d33] text-slate-800 dark:text-white">
            <div>
              
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#e0f2fe] dark:bg-[#1e293b] text-[#0284c7] dark:text-[#38bdf8] border border-[#0284c7]/30">
                  {current.categoryLabel}
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-1 font-bold">
                  <Eye className="w-3.5 h-3.5 text-[#eab308]" />
                  {current.views}
                </span>
              </div>

              <h3 
                className="font-serif-bliss text-xl sm:text-2xl font-bold text-[#0f172a] dark:text-white leading-snug mb-3 hover:text-[#0284c7] dark:hover:text-[#facc15] transition-colors cursor-pointer min-h-[3.5rem] line-clamp-2" 
                onClick={() => onSelectVideo(current)}
              >
                {current.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 line-clamp-4 min-h-[4.5rem]">
                {current.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#eab308]/25 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onSelectVideo(current)}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#0284c7] to-[#0369a1] hover:from-[#0369a1] hover:to-[#0284c7] text-white text-xs sm:text-sm font-bold border-2 border-[#eab308]/60 shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Play className="w-4 h-4 fill-current text-[#fef08a]" />
                <span>Play Discourse</span>
              </button>

              <a
                href={`https://www.youtube.com/watch?v=${current.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md transition-transform hover:scale-105"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
                <span>Open YouTube</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Pagination Dots */}
        <div className="bg-[#f0f9ff] dark:bg-[#0d1a30] py-3 px-6 flex items-center justify-center gap-2 border-t border-[#eab308]/20">
          {MEDITATIONS_DATA.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx 
                  ? 'w-8 bg-[#0284c7] dark:bg-[#facc15] shadow-sm' 
                  : 'w-2.5 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
