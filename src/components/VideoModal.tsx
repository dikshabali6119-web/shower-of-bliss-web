'use client';

import React, { useEffect } from 'react';
import { X, Clock, Eye, Sparkles, Volume2, ExternalLink } from 'lucide-react';
import { YoutubeIcon } from '@/components/SocialIcons';
import { VideoItem } from '@/types';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (video) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  const timestamps = [
    { time: '00:00', label: 'Grounding & Posture Setup' },
    { time: '03:45', label: 'Conscious Pranayama Breath Pacing' },
    { time: '11:20', label: '432Hz Sound Immersion & Stillness' },
    { time: '18:50', label: 'Heartfelt Gratitude & Awaken' }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto glass-panel rounded-3xl border border-[#d97706]/60 shadow-2xl bg-[#fcf9f2]/98 dark:bg-[#141722]/98 text-[#1f1b16] dark:text-[#faf6ed] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#d97706]/20">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#fef3e2] dark:bg-[#28211b] text-[#c25e00] dark:text-[#fbbf24]">
              <Sparkles className="w-4 h-4" />
            </span>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#b45309] dark:text-[#fbbf24]">
                Shower of Bliss Video Sanctuary
              </span>
              <span className="text-xs text-[#857865] dark:text-[#d3c9b7]">
                Swami Amarjit Singh (@amarjit311) • निर्मला परंपरा
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Frame */}
        <div className="relative w-full aspect-video bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Video Details & Meta */}
        <div className="p-5 sm:p-7 flex flex-col gap-5">
          
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#c25e00] text-white">
                  {video.categoryLabel}
                </span>
                {video.frequency && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#fef3e2] dark:bg-[#28211b] text-[#b45309] dark:text-[#fcd34d] border border-[#d97706]/40 flex items-center gap-1">
                    <Volume2 className="w-3 h-3 text-[#d97706]" />
                    {video.frequency}
                  </span>
                )}
              </div>
              <h2 className="font-serif-bliss text-xl sm:text-2xl font-bold text-[#1f1b16] dark:text-[#faf6ed] leading-snug">
                {video.title}
              </h2>
            </div>

            <a
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#cc0000] hover:bg-[#b00000] text-white text-xs font-semibold shadow-sm shrink-0 transition-transform hover:scale-105"
            >
              <YoutubeIcon className="w-4 h-4" />
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="flex items-center gap-4 text-xs text-[#857865] dark:text-[#d3c9b7] border-y border-[#d97706]/15 py-3">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#c25e00] dark:text-[#fbbf24]" />
              अवधि: {video.duration}
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Eye className="w-3.5 h-3.5 text-[#c25e00] dark:text-[#fbbf24]" />
              {video.views} दर्शन
            </span>
            <span className="hidden sm:inline font-medium">
              चैनल: @amarjit311
            </span>
          </div>

          <p className="text-sm text-[#574d3f] dark:text-[#d3c9b7] leading-relaxed">
            {video.description}
          </p>

          {/* Timestamps & Guided Phases */}
          <div className="rounded-2xl p-4 bg-[#fef3e2]/60 dark:bg-[#28211b]/60 border border-[#d97706]/20">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#c25e00] dark:text-[#fbbf24] mb-2.5">
              प्रवचन के मुख्य अंग व अध्याय
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {timestamps.map((stamp) => (
                <div key={stamp.time} className="flex items-center gap-2 text-[#574d3f] dark:text-[#d3c9b7]">
                  <span className="font-mono font-semibold text-[#b45309] dark:text-[#fcd34d] bg-[#d97706]/15 px-1.5 py-0.5 rounded">
                    {stamp.time}
                  </span>
                  <span>{stamp.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-1.5">
            {video.tags.map((tag) => (
              <span 
                key={tag}
                className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#fef3e2] dark:bg-[#28211b] text-[#c25e00] dark:text-[#fcd34d]"
              >
                #{tag}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
