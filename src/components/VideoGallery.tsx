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
    { label: 'All Discourses', value: 'all' },
    { label: 'Upadesa Saram (रमण)', value: 'spiritual' },
    { label: 'Bhagavad Gita (गीता)', value: 'mindful' },
    { label: 'Sultan Bahu (सूफी)', value: 'sound-healing' },
    { label: 'Fields & Simplicity', value: 'beginner' },
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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0284c7]/15 dark:bg-[#1e293b] text-[#0369a1] dark:text-[#38bdf8] border border-[#0284c7]/30 mb-2">
              <span className="font-serif font-bold text-xs text-[#eab308]">ੴ</span>
              <span>Discourses &amp; Video Sanctuary</span>
            </div>
            <h2 className="font-serif-bliss text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f172a] dark:text-white">
              Discourses by Swami Amarjit Singh
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
              Official YouTube Library <span className="font-bold text-[#0284c7] dark:text-[#38bdf8]">@amarjit311</span> • In the Nirmala Lineage of Sant Nikka Singh Ji
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search talks (Gita, Upadesa...)"
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-full glass-panel border border-[#0284c7]/30 focus:outline-hidden focus:border-[#eab308] text-[#0f172a] dark:text-white placeholder-slate-400 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
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
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border ${
                activeCategory === tab.value
                  ? 'bg-[#0284c7] text-white border-[#eab308] shadow-md scale-102'
                  : 'bg-white dark:bg-[#15233c] text-slate-700 dark:text-slate-200 border-[#0284c7]/20 hover:border-[#eab308] hover:bg-[#e0f2fe] dark:hover:bg-[#1e3352]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Video Grid */}
      {filteredVideos.length === 0 ? (
        <div className="glass-panel rounded-3xl p-12 text-center flex flex-col items-center justify-center border-2 border-[#eab308]/40 bg-white/90 dark:bg-[#111d33]/90">
          <SlidersHorizontal className="w-10 h-10 text-[#0284c7] mb-3" />
          <h3 className="font-serif-bliss text-lg font-bold text-[#0f172a] dark:text-white">
            No discourses found for &quot;{searchQuery}&quot;
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-sm">
            Try adjusting your search terms or select &quot;All Discourses&quot; to view our full collection.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              onCategoryChange('all');
            }}
            className="mt-4 px-5 py-2 rounded-full text-xs font-bold bg-[#0284c7] text-white hover:bg-[#0369a1] shadow-sm"
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
              className="group cursor-pointer glass-panel rounded-3xl overflow-hidden gold-glow-card flex flex-col transition-all duration-300 border-2 border-[#eab308]/40 bg-white/95 dark:bg-[#111d33]/95 shadow-md hover:shadow-xl"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                <Image
                  src={video.thumbnailUrl}
                  alt={video.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                />

                {/* Dark Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35 group-hover:from-black/75 transition-colors" />

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-xs text-white text-[11px] font-mono font-bold flex items-center gap-1 border border-white/10">
                  <Clock className="w-3 h-3 text-[#facc15]" />
                  <span>{video.duration}</span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0284c7]/95 backdrop-blur-xs text-white text-[10px] font-bold border border-[#facc15]/60 flex items-center gap-1 shadow-sm">
                  <span>{video.categoryLabel}</span>
                </div>

                {/* YouTube Icon */}
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 backdrop-blur-xs text-white">
                  <YoutubeIcon className="w-3.5 h-3.5 text-red-500" />
                </div>

                {/* Center Play Button Overlay on Hover */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-13 h-13 rounded-full bg-[#0284c7]/95 text-white border-2 border-[#facc15] flex items-center justify-center shadow-lg transition-all duration-300 transform scale-90 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(250,204,21,0.7)]">
                    <Play className="w-5 h-5 fill-current ml-0.5 text-[#fef08a]" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-300 mb-2 font-bold">
                    <span className="text-[#0284c7] dark:text-[#38bdf8]">
                      {video.frequency || 'Discourse'}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3 text-[#eab308]" />
                      {video.views}
                    </span>
                  </div>

                  <h3 className="font-serif-bliss text-base sm:text-lg font-bold text-[#0f172a] dark:text-white leading-snug line-clamp-2 group-hover:text-[#0284c7] dark:group-hover:text-[#facc15] transition-colors mb-2">
                    {video.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed mb-4">
                    {video.description}
                  </p>
                </div>

                {/* Action Footer */}
                <div className="pt-3 border-t border-[#eab308]/20 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 dark:text-slate-300 font-medium">
                    Swami Amarjit Singh
                  </span>

                  <span className="text-xs font-bold text-[#0284c7] dark:text-[#facc15] group-hover:underline flex items-center gap-1">
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
