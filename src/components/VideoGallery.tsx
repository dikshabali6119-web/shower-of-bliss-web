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
    { label: 'सभी वीडियो (All)', value: 'all' },
    { label: 'उपदेश सारम् (Upadesa Saram)', value: 'spiritual' },
    { label: 'भगवद्गीता (Gita)', value: 'mindful' },
    { label: 'सुलतान बाहू (Sufi)', value: 'sound-healing' },
    { label: 'खेत व सादगी (Fields)', value: 'beginner' },
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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#fef3e2] dark:bg-[#28211b] text-[#c25e00] dark:text-[#fcd34d] border border-[#d97706]/30 mb-2">
              <span className="font-serif font-bold text-xs text-[#d97706]">ੴ</span>
              <span>आध्यात्मिक सत्संग व वीडियो गैलरी</span>
            </div>
            <h2 className="font-serif-bliss text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f1b16] dark:text-[#faf6ed]">
              स्वामी अमरजीत सिंह जी के पावन प्रवचन
            </h2>
            <p className="text-xs sm:text-sm text-[#857865] dark:text-[#d3c9b7] mt-1">
              यूट्यूब चैनल <span className="font-semibold text-[#c25e00] dark:text-[#fbbf24]">@amarjit311</span> • उपदेश सारम्, भगवद्गीता, वेद-कथा व सुलतान बाहू
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#857865] dark:text-[#d3c9b7]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="सत्संग खोजें (गीता, उपदेश सारम्...)"
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-full glass-panel border border-[#d97706]/25 dark:border-[#d97706]/35 focus:outline-hidden focus:border-[#d97706] text-[#1f1b16] dark:text-white placeholder-[#9e9381]"
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
                  ? 'bg-[#c25e00] text-white border-[#d97706] shadow-xs'
                  : 'bg-white/80 dark:bg-[#1c2334]/80 text-[#574d3f] dark:text-[#d3c9b7] border-[#d97706]/20 hover:border-[#d97706] hover:bg-[#fef3e2] dark:hover:bg-[#28211b]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Video Grid */}
      {filteredVideos.length === 0 ? (
        <div className="glass-panel rounded-3xl p-12 text-center flex flex-col items-center justify-center border border-[#d97706]/30">
          <SlidersHorizontal className="w-10 h-10 text-[#d4a055] mb-3" />
          <h3 className="font-serif-bliss text-lg font-bold text-[#1f1b16] dark:text-[#faf6ed]">
            &quot;{searchQuery}&quot; के लिए कोई सत्संग नहीं मिला
          </h3>
          <p className="text-xs text-[#857865] dark:text-[#d3c9b7] mt-1 max-w-sm">
            कृपया दूसरे शब्द से खोजें या &quot;सभी वीडियो&quot; चुनकर पूरे पावन संग्रह को देखें।
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              onCategoryChange('all');
            }}
            className="mt-4 px-4 py-2 rounded-full text-xs font-semibold bg-[#c25e00] text-white hover:bg-[#a34f00]"
          >
            सभी सत्संग देखें
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => onSelectVideo(video)}
              className="group cursor-pointer glass-panel rounded-3xl overflow-hidden gold-glow-card flex flex-col transition-all duration-300 border border-[#d97706]/30"
            >
              {/* Thumbnail Container with Real Video Still */}
              <div className="relative aspect-video w-full overflow-hidden bg-stone-900">
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
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-xs text-white text-[11px] font-mono font-medium flex items-center gap-1 border border-white/10">
                  <Clock className="w-3 h-3 text-[#fbbf24]" />
                  <span>{video.duration}</span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#c25e00]/90 backdrop-blur-xs text-white text-[10px] font-bold border border-[#fbbf24]/50 flex items-center gap-1">
                  <span>{video.categoryLabel}</span>
                </div>

                {/* YouTube Icon */}
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 backdrop-blur-xs text-white">
                  <YoutubeIcon className="w-3.5 h-3.5 text-red-500" />
                </div>

                {/* Center Play Button Overlay on Hover */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-13 h-13 rounded-full bg-[#c25e00]/95 text-white border-2 border-[#fbbf24] flex items-center justify-center shadow-lg transition-all duration-300 transform scale-90 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.7)]">
                    <Play className="w-5 h-5 fill-current ml-0.5 text-[#fef3e2]" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#857865] dark:text-[#d3c9b7] mb-2 font-medium">
                    <span className="text-[#c25e00] dark:text-[#fbbf24] font-semibold">
                      {video.frequency || 'सत्संग'}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3 text-[#d97706]" />
                      {video.views} दर्शन
                    </span>
                  </div>

                  <h3 className="font-serif-bliss text-base sm:text-lg font-bold text-[#1f1b16] dark:text-[#faf6ed] leading-snug line-clamp-2 group-hover:text-[#c25e00] dark:group-hover:text-[#fbbf24] transition-colors mb-2">
                    {video.title}
                  </h3>

                  <p className="text-xs text-[#574d3f] dark:text-[#d3c9b7] line-clamp-2 leading-relaxed mb-4">
                    {video.description}
                  </p>
                </div>

                {/* Tags & Action Footer */}
                <div className="pt-3 border-t border-[#d97706]/15 flex items-center justify-between">
                  <span className="text-[11px] text-[#857865] dark:text-[#d3c9b7] font-medium">
                    Swami Amarjit Singh
                  </span>

                  <span className="text-xs font-semibold text-[#c25e00] dark:text-[#fbbf24] group-hover:underline flex items-center gap-1">
                    सत्संग सुनें →
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
