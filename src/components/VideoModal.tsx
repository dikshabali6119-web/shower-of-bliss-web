'use client';

import React, { useEffect } from 'react';
import { X, Clock, Eye, Sparkles, Volume2, ExternalLink, Play } from 'lucide-react';
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
    { time: '00:00', label: 'प्रस्तावना व गुरु वंदना' },
    { time: '01:15', label: 'मूल श्लोक / दोहे का गायन' },
    { time: '02:30', label: 'वेदांतिक व आध्यात्मिक अर्थ' },
    { time: '03:20', label: 'दैनिक जीवन में मुक्ति का अभ्यास' }
  ];

  const directChannelUrl = `https://www.youtube.com/@amarjit311/videos`;
  const directSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent('@amarjit311 ' + video.title)}`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[94vh] overflow-y-auto rounded-3xl border-2 border-[#facc15]/60 shadow-2xl bg-[#0a0f1d] text-white flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#f59e0b]/30 bg-[#0f172a]">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-[#1e3a8a] text-[#facc15] border border-[#f59e0b]/40">
              <Sparkles className="w-4 h-4" />
            </span>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wider font-bold text-[#facc15]">
                Shower of Bliss • Official Video Sanctuary
              </span>
              <span className="text-xs text-slate-300">
                Swami Amarjit Singh (@amarjit311) • निर्मला परंपरा
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Frame with Verified YouTube Embed */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Action Banner for Guaranteeing Smooth Playback */}
        <div className="bg-[#1e3a8a]/70 px-5 py-3 border-y border-[#f59e0b]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-200">
            <span className="w-2 h-2 rounded-full bg-[#facc15] animate-ping" />
            <span>यदि ब्राउज़र में YouTube एम्बेड प्रतिबंधित हो, तो सीधे चैनल पर देखें:</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={directSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#facc15] text-[#0f172a] font-bold text-xs hover:bg-[#fde047] transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Watch This Video</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={directChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold text-xs transition-all"
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
              <span>@amarjit311 Channel</span>
            </a>
          </div>
        </div>

        {/* Video Details & Meta */}
        <div className="p-5 sm:p-7 flex flex-col gap-5 bg-[#0a0f1d]">
          
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-[#1e3a8a] text-[#facc15] border border-[#f59e0b]/40">
                  {video.categoryLabel}
                </span>
                {video.frequency && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#f59e0b]/20 text-[#facc15] border border-[#f59e0b]/50 flex items-center gap-1">
                    <Volume2 className="w-3 h-3" />
                    {video.frequency}
                  </span>
                )}
              </div>
              <h2 className="font-serif-bliss text-xl sm:text-2xl font-bold text-white leading-snug">
                {video.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-300 border-y border-[#f59e0b]/20 py-3">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#facc15]" />
              अवधि: {video.duration}
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Eye className="w-3.5 h-3.5 text-[#facc15]" />
              {video.views} दर्शन
            </span>
            <span className="hidden sm:inline font-medium text-[#facc15]">
              चैनल: Swami Amarjit Singh (@amarjit311)
            </span>
          </div>

          <p className="text-sm text-slate-200 leading-relaxed">
            {video.description}
          </p>

          {/* Timestamps & Guided Phases */}
          <div className="rounded-2xl p-4 bg-[#111827] border border-[#f59e0b]/30">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#facc15] mb-2.5">
              प्रवचन के मुख्य चरण (Timestamps)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {timestamps.map((stamp) => (
                <div key={stamp.time} className="flex items-center gap-2 text-slate-300">
                  <span className="font-mono font-bold text-[#facc15] bg-[#1e3a8a] px-2 py-0.5 rounded border border-[#f59e0b]/30">
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
                className="text-[11px] font-medium px-3 py-1 rounded-full bg-[#1e3a8a]/70 text-[#facc15] border border-[#f59e0b]/30"
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
