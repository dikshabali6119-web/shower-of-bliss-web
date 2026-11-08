'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import DynamicFooter from '@/components/DynamicFooter';
import VideoSlider from '@/components/VideoSlider';
import VideoGallery from '@/components/VideoGallery';
import VideoModal from '@/components/VideoModal';
import BreathingModal from '@/components/BreathingModal';
import { VideoItem } from '@/types';
import { Sparkles } from 'lucide-react';
import { YoutubeIcon } from '@/components/SocialIcons';

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isBreathingOpen, setIsBreathingOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <Navbar onOpenBreathing={() => setIsBreathingOpen(true)} />

      <main className="flex-1 py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0284c7]/15 dark:bg-[#162540] text-[#0369a1] dark:text-[#38bdf8] border border-[#0284c7]/30 text-xs font-bold mb-3">
            <Sparkles className="w-4 h-4 text-[#eab308]" />
            <span>Discourses Library • @amarjit311</span>
          </div>

          <h1 className="font-serif-bliss text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            Sacred Video Sanctuary &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#eab308] dark:from-[#38bdf8] dark:via-[#facc15] dark:to-[#fde047]">
              Discourses
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            Watch authentic talks by Swami Amarjit Singh on Upadesa Saram, Bhagavad Gita, Vedic Katha, and Sufi Wisdom.
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <a
              href="https://www.youtube.com/@amarjit311/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-lg transition-transform hover:scale-105 active:scale-95 border border-white/20"
            >
              <YoutubeIcon className="w-4 h-4" />
              <span>Watch All on YouTube (@amarjit311)</span>
            </a>
          </div>
        </div>

        {/* Featured Video Slider */}
        <VideoSlider onSelectVideo={(video) => setSelectedVideo(video)} />

        {/* Full Gallery Grid */}
        <div className="mt-12">
          <VideoGallery
            activeCategory={activeCategory}
            onSelectVideo={(video) => setSelectedVideo(video)}
            onCategoryChange={(cat) => setActiveCategory(cat)}
          />
        </div>

      </main>

      <DynamicFooter />
      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
      <BreathingModal isOpen={isBreathingOpen} onClose={() => setIsBreathingOpen(false)} />
    </div>
  );
}
