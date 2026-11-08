'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Sparkles, 
  Shield, 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Eye, 
  ExternalLink 
} from 'lucide-react';
import { YoutubeIcon } from '@/components/SocialIcons';
import { VideoItem } from '@/types';

export interface GuruCardItem {
  id: string;
  youtubeId: string;
  guruName: string;
  guruRole: string;
  sacredQuote: string;
  title: string;
  duration: string;
  views: string;
  badge: string;
  thumbnailUrl: string;
  category: 'sikh-heritage';
  categoryLabel: string;
  instructor: string;
  tags: string[];
}

export const GURU_SLIDER_ITEMS: GuruCardItem[] = [
  {
    id: 'guru-nanak-dev-ji',
    youtubeId: 'b9k1c0l2y3m',
    guruName: 'श्री गुरु नानक देव जी',
    guruRole: 'प्रथम पातशाह • संस्थापक',
    sacredQuote: 'ੴ सतिनामु करता पुरखु निरभउ निरवैरु अकाल मूरति',
    title: 'श्री गुरु नानक देव जी - ੴ (एक ओंकार) का अद्वैत रहस्य',
    duration: '08:12',
    views: '2.5K',
    badge: 'प्रथम पातशाह • ੴ प्रकाश',
    thumbnailUrl: '/thumbnails/upadesa-saram.jpg',
    category: 'sikh-heritage',
    categoryLabel: 'गुरु नानक देव जी • मूल मंतर',
    instructor: 'Swami Amarjit Singh',
    tags: ['Guru Nanak Dev Ji', 'Ik Onkar', 'Mool Mantar']
  },
  {
    id: 'guru-gobind-singh-ji-nirmala',
    youtubeId: 'Z1BCujX3pw8',
    guruName: 'श्री गुरु गोबिन्द सिंह जी',
    guruRole: 'दशम पातशाह • निर्मला संस्थापक',
    sacredQuote: 'मानस की जात सभै एकै पहिचानबो',
    title: 'श्री गुरु गोबिन्द सिंह जी - पंच निर्मला परंपरा व काशी यात्रा',
    duration: '06:45',
    views: '1.2K',
    badge: 'दशम पातशाह • निर्मला संस्थापक',
    thumbnailUrl: '/thumbnails/fields.jpg',
    category: 'sikh-heritage',
    categoryLabel: 'दशम पातशाह • काशी परंपरा',
    instructor: 'Swami Amarjit Singh',
    tags: ['Guru Gobind Singh Ji', 'Nirmala Lineage', 'Kashi Yatra']
  },
  {
    id: 'sant-nikka-singh-ji-virakt',
    youtubeId: 'x7w8v9u0t1s',
    guruName: 'संत निक्का सिंह जी "विरक्त"',
    guruRole: 'परम पूज्य गुरुदेव • निर्मला परंपरा',
    sacredQuote: 'वेदांत का ज्ञान और गुरुवाणी का सिमरन ही जीव की परम मुक्ति है',
    title: 'संत निक्का सिंह जी महाराज - पावन जीवन व वैराग्य',
    duration: '09:30',
    views: '3.1K',
    badge: 'पूज्य गुरुदेव • पूर्ण ब्रह्मज्ञानी',
    thumbnailUrl: '/swami-amarjit.jpg',
    category: 'sikh-heritage',
    categoryLabel: 'संत निक्का सिंह जी • पूर्ण ब्रह्मज्ञानी',
    instructor: 'Swami Amarjit Singh',
    tags: ['Sant Nikka Singh Ji', 'Nirmala Master', 'Guruvani']
  },
  {
    id: 'guru-arjan-dev-ji-sukhmani',
    youtubeId: 'p1q2r3s4t5u',
    guruName: 'श्री गुरु अर्जुन देव जी',
    guruRole: 'पंचम पातशाह • सुखमनी साहिब',
    sacredQuote: 'प्रभ कै सिमरनि मन की मलु जाइ ॥ अम्रित नामु रिदै समाइ ॥',
    title: 'सुखमनी साहिब - मन की शांति व जन्म-मरण से मुक्ति',
    duration: '11:05',
    views: '4.2K',
    badge: 'पंचम पातशाह • सुखमनी साहिब',
    thumbnailUrl: '/thumbnails/ved-katha.jpg',
    category: 'sikh-heritage',
    categoryLabel: 'पंचम पातशाह • सुखमनी साहिब',
    instructor: 'Swami Amarjit Singh',
    tags: ['Sukhmani Sahib', 'Guru Arjan Dev Ji', 'Mind Healing']
  },
  {
    id: 'guru-amar-das-ji-anand',
    youtubeId: 's9t0u1v2w3x',
    guruName: 'श्री गुरु अमरदास जी',
    guruRole: 'तीसरे पातशाह • आनंद साहिब',
    sacredQuote: 'मन तूं जोति सरूपु है आपणा मूलु पछाणु ॥',
    title: 'आनंदु साहिब - अंतःकरण में परम आनंद की प्राप्ति',
    duration: '10:20',
    views: '3.4K',
    badge: 'तीसरे पातशाह • आनंद साहिब',
    thumbnailUrl: '/thumbnails/fields.jpg',
    category: 'sikh-heritage',
    categoryLabel: 'तीसरे पातशाह • आनंद साहिब',
    instructor: 'Swami Amarjit Singh',
    tags: ['Anand Sahib', 'Inner Peace', 'Bliss']
  },
  {
    id: 'guru-tegh-bahadur-ji-vairagya',
    youtubeId: 'c2d3e4f5g6h',
    guruName: 'श्री गुरु तेग बहादुर जी',
    guruRole: 'नवम पातशाह • वैराग्य प्रकाश',
    sacredQuote: 'जो नरु दुख मै दुखु नही मानै ॥ सुख सनेहु अरु भै नही जा कै ॥',
    title: 'श्री गुरु तेग बहादुर जी के पावन सलोक - वैराग्य व मुक्ति',
    duration: '07:45',
    views: '1.9K',
    badge: 'नवम पातशाह • वैराग्य व शांति',
    thumbnailUrl: '/thumbnails/gita.jpg',
    category: 'sikh-heritage',
    categoryLabel: 'नवम पातशाह • वैराग्य सलोक',
    instructor: 'Swami Amarjit Singh',
    tags: ['Guru Tegh Bahadur Ji', 'Vairagya', 'Salok']
  },
  {
    id: 'guru-granth-sahib-ji-jot',
    youtubeId: 'm4n5o6p7q8r',
    guruName: 'श्री गुरु ग्रन्थ साहिब जी',
    guruRole: 'शाश्वत शब्द गुरु • सर्वव्यापक',
    sacredQuote: 'सभ महि जोति जोति है सोइ ॥ तिस दै चानणि सभ महि चानणु होइ ॥',
    title: 'श्री गुरु ग्रन्थ साहिब जी - सर्वव्यापक परमात्मा का प्रकाश',
    duration: '07:18',
    views: '1.8K',
    badge: 'शब्द गुरु • शाश्वत प्रकाश',
    thumbnailUrl: '/thumbnails/upadesa-saram.jpg',
    category: 'sikh-heritage',
    categoryLabel: 'श्री गुरु ग्रन्थ साहिब • अद्वैत ज्ञान',
    instructor: 'Swami Amarjit Singh',
    tags: ['Guru Granth Sahib', 'Divine Light', 'Gurbani']
  },
  {
    id: 'swami-amarjit-singh-disciple',
    youtubeId: 'v8w9x0y1z2a',
    guruName: 'स्वामी अमरजीत सिंह जी',
    guruRole: 'निर्मला शिष्य • @amarjit311',
    sacredQuote: 'ज्ञान, भक्ति और गुरुवाणी सिमरन ही परम आनंद व मुक्ति का मार्ग है',
    title: 'स्वामी अमरजीत सिंह - गुरुवाणी सिमरन व ध्यान साधना',
    duration: '05:50',
    views: '2.9K',
    badge: 'निर्मला शिष्य • @amarjit311',
    thumbnailUrl: '/swami-amarjit.jpg',
    category: 'sikh-heritage',
    categoryLabel: 'स्वामी अमरजीत सिंह • @amarjit311',
    instructor: 'Swami Amarjit Singh',
    tags: ['Swami Amarjit Singh', 'Meditation', 'Simran']
  }
];

interface SikhGurusAutoCarouselProps {
  onSelectVideo?: (video: VideoItem) => void;
}

export default function SikhGurusAutoCarousel({ onSelectVideo }: SikhGurusAutoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4);

  const total = GURU_SLIDER_ITEMS.length;

  // Responsive cards visible (4 on xl/desktop, 3 on lg, 2 on tablet, 1 on mobile)
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1280) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };
    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  const maxIndex = Math.max(0, total - visibleCount);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // 2-SECOND AUTOMATIC SMOOTH SLIDE (User explicitly requested: automatic slide ho or 2 sec m)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // 2000ms = 2 seconds
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex, currentIndex]);

  const handleCardClick = (item: GuruCardItem) => {
    if (onSelectVideo) {
      const videoItem: VideoItem = {
        id: item.id,
        youtubeId: item.youtubeId,
        title: item.title,
        description: `${item.guruName} (${item.guruRole}) — "${item.sacredQuote}"`,
        duration: item.duration,
        views: item.views,
        category: 'sikh-heritage',
        categoryLabel: item.categoryLabel,
        thumbnailUrl: item.thumbnailUrl,
        instructor: item.instructor,
        frequency: '432Hz Simran',
        tags: item.tags
      };
      onSelectVideo(videoItem);
    } else {
      window.open(`https://www.youtube.com/@amarjit311/search?query=${encodeURIComponent(item.title)}`, '_blank');
    }
  };

  return (
    <section className="w-full py-8 md:py-12 relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-64 bg-[#38bdf8]/15 dark:bg-[#0284c7]/20 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0284c7]/15 dark:bg-[#162540] text-[#0284c7] dark:text-[#38bdf8] border border-[#0284c7]/30 text-xs font-bold mb-2">
              <span className="font-serif font-extrabold text-sm text-[#eab308] dark:text-[#facc15]">ੴ</span>
              <span>सिख गुरु परंपरा व संत निक्का सिंह जी (2s Auto-Slide)</span>
            </div>

            <h2 className="font-serif-bliss text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Sikh Gurus &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#eab308] dark:from-[#38bdf8] dark:via-[#facc15] dark:to-[#fde047]">
                Sant Nikka Singh Ji
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-100 font-medium mt-1">
              Sacred teachings of the Sikh Gurus and Nirmala tradition advancing automatically every 2 seconds
            </p>
          </div>

          {/* Controls: Prev / Next Buttons & Slide Position */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                setIsAutoPlaying(false);
                prevSlide();
              }}
              aria-label="Previous card"
              className="w-9 h-9 rounded-full bg-white dark:bg-[#162540] hover:bg-[#0284c7] hover:text-white text-[#0284c7] dark:text-[#facc15] flex items-center justify-center border-2 border-[#eab308]/60 transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              <ChevronLeft className="w-5 h-5 text-[#eab308] dark:text-[#facc15]" />
            </button>

            <span className="text-xs font-mono font-bold text-[#0284c7] dark:text-[#facc15] px-2.5 py-1 rounded-full bg-[#e0f2fe] dark:bg-[#1e293b] border border-[#0284c7]/30 dark:border-[#facc15]/40">
              {currentIndex + 1} / {maxIndex + 1}
            </span>

            <button
              onClick={() => {
                setIsAutoPlaying(false);
                nextSlide();
              }}
              aria-label="Next card"
              className="w-9 h-9 rounded-full bg-white dark:bg-[#162540] hover:bg-[#0284c7] hover:text-white text-[#0284c7] dark:text-[#facc15] flex items-center justify-center border-2 border-[#eab308]/60 transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              <ChevronRight className="w-5 h-5 text-[#eab308] dark:text-[#facc15]" />
            </button>
          </div>
        </div>

        {/* 3-4 CARDS SLIDER TRACK (Moves every 2 seconds automatically) */}
        <div 
          className="relative overflow-hidden rounded-3xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out -mx-2.5"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {GURU_SLIDER_ITEMS.map((item) => (
              <div
                key={item.id}
                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 shrink-0 px-2.5"
              >
                <div 
                  onClick={() => handleCardClick(item)}
                  className="glass-panel rounded-2xl overflow-hidden gold-glow-card flex flex-col justify-between h-full border-2 border-[#eab308]/50 dark:border-[#facc15]/50 bg-white/95 dark:bg-[#111d33]/95 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                >
                  {/* Thumbnail / Header Media */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                    <Image
                      src={item.thumbnailUrl}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35 group-hover:from-black/75 transition-colors" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-11 h-11 rounded-full bg-[#0284c7] text-[#fef08a] border-2 border-[#facc15] flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover:scale-115 group-hover:shadow-[0_0_20px_rgba(250,204,21,0.7)]">
                        <Play className="w-4 h-4 fill-current ml-0.5 text-[#fef08a]" />
                      </div>
                    </div>

                    {/* Top ੴ Sikh Sacred Badge */}
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-xs text-[#facc15] text-[10px] font-bold border border-[#eab308]/40 flex items-center gap-1 shadow-xs">
                      <span className="font-serif">ੴ</span>
                      <span>सिख परंपरा</span>
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/85 backdrop-blur-xs text-white text-[10px] font-mono font-bold flex items-center gap-1 border border-white/20">
                      <Clock className="w-3 h-3 text-[#facc15]" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Guru Title & Badge */}
                      <div className="flex items-center justify-between gap-1 mb-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#e0f2fe] dark:bg-[#162540] text-[#0284c7] dark:text-[#38bdf8] border border-[#0284c7]/30 truncate max-w-[80%]">
                          {item.guruRole}
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-300 font-bold flex items-center gap-1 shrink-0">
                          <Eye className="w-3 h-3 text-[#eab308]" />
                          {item.views}
                        </span>
                      </div>

                      {/* Guru Name */}
                      <h3 className="font-serif-bliss text-base font-extrabold text-slate-900 dark:text-white leading-snug group-hover:text-[#0284c7] dark:group-hover:text-[#facc15] transition-colors mb-1.5">
                        {item.guruName}
                      </h3>

                      {/* Sacred Quote / Shloka */}
                      <p className="text-[11px] font-serif italic text-amber-700 dark:text-[#facc15] line-clamp-2 leading-relaxed mb-3 border-l-2 border-[#eab308] pl-2 bg-[#f0f9ff]/60 dark:bg-[#162540]/60 py-0.5 rounded-r">
                        &ldquo;{item.sacredQuote}&rdquo;
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2.5 border-t border-[#0284c7]/15 dark:border-[#eab308]/20 flex items-center justify-between gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(item);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white text-[11px] font-bold shadow-xs hover:scale-105 active:scale-95 transition-all border border-[#facc15]"
                      >
                        <Play className="w-3 h-3 fill-current text-[#fef08a]" />
                        <span>Play Video</span>
                      </button>

                      <a
                        href={`https://www.youtube.com/@amarjit311/videos`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-[11px] text-red-600 dark:text-red-400 hover:underline font-bold"
                        title="Watch on YouTube"
                      >
                        <YoutubeIcon className="w-3.5 h-3.5" />
                        <span>YouTube</span>
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(dotIdx);
                }}
                aria-label={`Slide ${dotIdx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === dotIdx
                    ? 'w-6 bg-[#0284c7] dark:bg-[#facc15] shadow-xs'
                    : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
