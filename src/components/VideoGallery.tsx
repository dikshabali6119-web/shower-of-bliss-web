'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { 
  Play, 
  Clock, 
  Eye, 
  Search, 
  SlidersHorizontal, 
  Volume2, 
  Sparkles
} from 'lucide-react';
import { YoutubeIcon } from '@/components/SocialIcons';
import { VideoItem } from '@/types';
import { MEDITATIONS_DATA } from '@/data/meditations';

interface VideoGalleryProps {
  activeCategory: string;
  onSelectVideo: (video: VideoItem) => void;
  onCategoryChange: (cat: string) => void;
}

export default function VideoGallery({
  activeCategory,
  onSelectVideo,
  onCategoryChange,
}: VideoGalleryProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { label: 'All', value: 'all' },
    { label: 'Morning & Mindful', value: 'mindful' },
    { label: 'Beginner Guides', value: 'beginner' },
    { label: 'Sound Healing', value: 'sound-healing' },
    { label: 'Deep Sleep', value: 'sleep' },
    { label: 'Spiritual Wisdom', value: 'spiritual' },
  ];

  const filteredVideos = useMemo(() => {
    return MEDITATIONS_DATA.filter((video) => {
      const matchesCategory =
        activeCategory === 'all' || video.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="meditations" className="w-full">
      
      {/* Header & Search Controls */}
      <div className="flex flex-col gap-5 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#2d5a4c]/10 dark:bg-[#3d7866]/25 text-[#2d5a4c] dark:text-[#d4af37] border border-[#2d5a4c]/20 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Video Sanctuary</span>
            </div>
            <h2 className="font-serif-bliss text-2xl sm:text-3xl md:text-4xl font-bold text-[#1c3b31] dark:text-[#f4fbf7]">
              Guided Meditations by Amarjit
            </h2>
            <p className="text-xs sm:text-sm text-[#5f7d72] dark:text-[#97b8aa] mt-1">
              Curated for YouTube channel <span className="font-semibold text-[#1c3b31] dark:text-[#e2f0e8]">@amarjit311</span> • Tuned to natural 432Hz harmonics
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5f7d72] dark:text-[#97b8aa]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search practices (sleep, 432Hz...)"
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-full glass-panel border border-[#2d5a4c]/20 dark:border-[#d4af37]/30 focus:outline-hidden focus:border-[#d4af37] dark:focus:border-[#d4af37] text-[#1c3b31] dark:text-white placeholder-[#7f9e91]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => onCategoryChange(tab.value)}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
                activeCategory === tab.value
                  ? 'bg-[#2d5a4c] text-white border-[#d4af37] shadow-xs'
                  : 'bg-white/60 dark:bg-[#163026]/60 text-[#3d6355] dark:text-[#cde5da] border-[#2d5a4c]/15 hover:border-[#d4af37] hover:bg-white dark:hover:bg-[#1d3d31]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Video Grid */}
      {filteredVideos.length === 0 ? (
        <div className="glass-panel rounded-3xl p-12 text-center flex flex-col items-center justify-center border border-[#d4af37]/30">
          <SlidersHorizontal className="w-10 h-10 text-[#a0beae] mb-3" />
          <h3 className="font-serif-bliss text-lg font-bold text-[#1c3b31] dark:text-[#f4fbf7]">
            No meditations found for &quot;{searchQuery}&quot;
          </h3>
          <p className="text-xs text-[#5f7d72] dark:text-[#97b8aa] mt-1 max-w-sm">
            Try adjusting your search terms or select &quot;All&quot; to view our full collection of guided sessions.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              onCategoryChange('all');
            }}
            className="mt-4 px-4 py-2 rounded-full text-xs font-semibold bg-[#2d5a4c] text-white hover:bg-[#23483c]"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => onSelectVideo(video)}
              className="group cursor-pointer glass-panel rounded-3xl overflow-hidden gold-glow-card flex flex-col transition-all duration-300"
            >
              {/* Thumbnail Container with Hover Zoom */}
              <div className="relative aspect-video w-full overflow-hidden bg-stone-900">
                <Image
                  src={video.thumbnailUrl}
                  alt={video.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-95"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 group-hover:from-black/70 transition-colors" />

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-xs text-white text-[11px] font-mono font-medium flex items-center gap-1 border border-white/10">
                  <Clock className="w-3 h-3 text-[#d4af37]" />
                  <span>{video.duration}</span>
                </div>

                {/* Frequency Tag Badge */}
                {video.frequency && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#1c382f]/85 backdrop-blur-xs text-[#f6d860] text-[10px] font-bold border border-[#d4af37]/50 flex items-center gap-1">
                    <Volume2 className="w-3 h-3" />
                    <span>{video.frequency}</span>
                  </div>
                )}

                {/* YouTube Icon Badge */}
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 backdrop-blur-xs text-white">
                  <YoutubeIcon className="w-3.5 h-3.5 text-red-500" />
                </div>

                {/* Center Play Button Overlay on Hover */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-13 h-13 rounded-full bg-[#2d5a4c]/90 text-[#f4e297] border-2 border-[#d4af37] flex items-center justify-center shadow-lg transition-all duration-300 transform scale-90 group-hover:scale-110 group-hover:bg-[#2d5a4c] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.7)]">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#5f7d72] dark:text-[#97b8aa] mb-2 font-medium">
                    <span className="text-[#8b6e16] dark:text-[#d4af37] font-semibold uppercase tracking-wider">
                      {video.categoryLabel}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3 text-[#2d5a4c] dark:text-[#d4af37]" />
                      {video.views} views
                    </span>
                  </div>

                  <h3 className="font-serif-bliss text-base sm:text-lg font-bold text-[#1c3b31] dark:text-[#f4fbf7] leading-snug line-clamp-2 group-hover:text-[#2d5a4c] dark:group-hover:text-[#d4af37] transition-colors mb-2">
                    {video.title}
                  </h3>

                  <p className="text-xs text-[#3d6355] dark:text-[#b4d2c4] line-clamp-2 leading-relaxed mb-4">
                    {video.description}
                  </p>
                </div>

                {/* Tags & Action Footer */}
                <div className="pt-3 border-t border-[#2d5a4c]/10 dark:border-[#d4af37]/15 flex items-center justify-between">
                  <span className="text-[11px] text-[#5f7d72] dark:text-[#97b8aa] font-medium">
                    by Amarjit (@amarjit311)
                  </span>

                  <span className="text-xs font-semibold text-[#2d5a4c] dark:text-[#d4af37] group-hover:underline flex items-center gap-1">
                    Play Session →
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}

    </section>
  );
}
