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
  ExternalLink,
  BookOpen,
  ArrowRight,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { YoutubeIcon } from '@/components/SocialIcons';
import { VideoItem } from '@/types';
import Link from 'next/link';

export const SIKH_DHARMIK_VIDEOS: VideoItem[] = [
  {
    id: 'sikh-guru-gobind-singh-nirmala',
    youtubeId: 'Z1BCujX3pw8',
    title: 'श्री गुरु गोबिन्द सिंह जी और काशी में पंच निर्मला परंपरा की स्थापना',
    description: 'दशम पातशाह श्री गुरु गोबिन्द सिंह जी द्वारा पांच सिखों को काशी भेजकर संस्कृत, उपनिषद् और अद्वैत वेदांत का अध्ययन कराकर निर्मला संप्रदाय की स्थापना का पावन इतिहास।',
    duration: '06:45',
    views: '1.2K',
    category: 'sikh-heritage',
    categoryLabel: 'श्री गुरु गोबिन्द सिंह जी • काशी परंपरा',
    thumbnailUrl: '/thumbnails/fields.jpg',
    instructor: 'Swami Amarjit Singh',
    frequency: '432Hz Simran',
    tags: ['Guru Gobind Singh Ji', 'Nirmala Lineage', 'Vedanta', 'Kashi Yatra']
  },
  {
    id: 'sikh-guru-nanak-ik-onkar',
    youtubeId: 'b9k1c0l2y3m',
    title: 'श्री गुरु नानक देव जी का मूल मंतर - ੴ (एक ओंकार) का अद्वैत रहस्य',
    description: 'प्रथम पातशाह श्री गुरु नानक देव जी द्वारा उद्घाटित "ੴ सतिनामु करता पुरखु" का गहन वेदांतिक अर्थ। कैसे सर्वव्यापी ब्रह्म ही समस्त सृष्टि में एकरस व्याप्त है।',
    duration: '08:12',
    views: '2.5K',
    category: 'sikh-heritage',
    categoryLabel: 'श्री गुरु नानक देव जी • मूल मंतर',
    thumbnailUrl: '/thumbnails/upadesa-saram.jpg',
    instructor: 'Swami Amarjit Singh',
    frequency: '528Hz Meditation',
    tags: ['Guru Nanak Dev Ji', 'Ik Onkar', 'Mool Mantar', 'Advaita']
  },
  {
    id: 'sant-nikka-singh-virakt-jeevan',
    youtubeId: 'x7w8v9u0t1s',
    title: 'परम पूज्य संत निक्का सिंह जी "विरक्त" - पावन जीवन गाथा व उपदेश',
    description: 'निर्मला परंपरा के परम ब्रह्मज्ञानी संत पूज्य संत निक्का सिंह जी महाराज की पावन साधना, वैराग्य, गुरुवाणी चिंतन और वेदांत ज्ञान का सार।',
    duration: '09:30',
    views: '3.1K',
    category: 'sikh-heritage',
    categoryLabel: 'संत निक्का सिंह जी • पूर्ण ब्रह्मज्ञानी',
    thumbnailUrl: '/swami-amarjit.jpg',
    instructor: 'Swami Amarjit Singh',
    frequency: '432Hz Ambient',
    tags: ['Sant Nikka Singh Ji', 'Nirmala Master', 'Guruvani', 'Liberation']
  },
  {
    id: 'sri-guru-granth-sahib-jot',
    youtubeId: 'c2d3e4f5g6h',
    title: 'श्री गुरु ग्रन्थ साहिब जी - "सभ महि जोति जोति है सोइ" (अद्वैत प्रकाश)',
    description: 'गुरुवाणी की अमर पंक्ति "सभ महि जोति जोति है सोइ तिस दै चानणि सभ महि चानणु होइ" पर स्वामी अमरजीत सिंह जी का गहन सत्संग विचार।',
    duration: '07:18',
    views: '1.8K',
    category: 'sikh-heritage',
    categoryLabel: 'श्री गुरु ग्रन्थ साहिब जी • अद्वैत ज्ञान',
    thumbnailUrl: '/thumbnails/gita.jpg',
    instructor: 'Swami Amarjit Singh',
    frequency: '432Hz Sound',
    tags: ['Guru Granth Sahib', 'Gurbani', 'Divine Light', 'Advaita']
  },
  {
    id: 'sukhmani-sahib-simran',
    youtubeId: 'p1q2r3s4t5u',
    title: 'सुखमनी साहिब विचार - "प्रभ कै सिमरनि मन की मलु जाइ"',
    description: 'पंचम पातशाह श्री गुरु अर्जुन देव जी द्वारा रचित सुखमनी साहिब से मन की शुद्धि, मानसिक शांति और प्रभु सिमरन से जन्म-मरण के भय से मुक्ति।',
    duration: '11:05',
    views: '4.2K',
    category: 'sikh-heritage',
    categoryLabel: 'पंचम पातशाह • सुखमनी साहिब',
    thumbnailUrl: '/thumbnails/ved-katha.jpg',
    instructor: 'Swami Amarjit Singh',
    frequency: '432Hz Simran',
    tags: ['Sukhmani Sahib', 'Guru Arjan Dev Ji', 'Mind Healing', 'Simran']
  },
  {
    id: 'swami-amarjit-gurbani-simran',
    youtubeId: 'v8w9x0y1z2a',
    title: 'स्वामी अमरजीत सिंह - गुरुवाणी सिमरन व आत्म-साक्षात्कार ध्यान साधना',
    description: 'श्वास-श्वास में वाहेगुरु व ੴ का सिमरन कैसे करें। मन के विकारों से मुक्त होकर अंतरात्मा के परम आनंद में लीन होने की सरल विधि।',
    duration: '05:50',
    views: '2.9K',
    category: 'sikh-heritage',
    categoryLabel: 'स्वामी अमरजीत सिंह • @amarjit311',
    thumbnailUrl: '/thumbnails/sultan-bahu.jpg',
    instructor: 'Swami Amarjit Singh',
    frequency: '528Hz Transformation',
    tags: ['Swami Amarjit Singh', 'Meditation', 'Simran', 'Shower of Bliss']
  }
];

interface NirmalaHeritageSectionProps {
  onSelectVideo?: (video: VideoItem) => void;
}

export default function NirmalaHeritageSection({ onSelectVideo }: NirmalaHeritageSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const totalVideos = SIKH_DHARMIK_VIDEOS.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalVideos);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalVideos - 1 : prev - 1));
  };

  // Automatic Smooth Sliding (User Requested: Automatic swipe hona chahiye)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500); // changes every 4.5 seconds automatically
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const handleCardClick = (video: VideoItem) => {
    if (onSelectVideo) {
      onSelectVideo(video);
    } else {
      window.open(`https://www.youtube.com/@amarjit311/search?query=${encodeURIComponent(video.title)}`, '_blank');
    }
  };

  return (
    <section id="about-swamiji" className="scroll-mt-28 py-12 md:py-20 relative">
      
      {/* Background Soft Sky Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-80 bg-[#38bdf8]/15 dark:bg-[#0284c7]/25 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0284c7]/15 dark:bg-[#162540] text-[#0284c7] dark:text-[#38bdf8] border-2 border-[#0284c7]/40 dark:border-[#38bdf8]/50 text-xs font-bold mb-3 shadow-sm">
            <Shield className="w-3.5 h-3.5 text-[#eab308] dark:text-[#facc15]" />
            <span className="dark:text-[#facc15]">Sacred Sikh Lineage • निर्मला संप्रदाय व सिख गुरु परंपरा</span>
          </div>

          <h2 className="font-serif-bliss text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            The Guru-Shishya Heritage:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#eab308] dark:from-[#38bdf8] dark:via-[#facc15] dark:to-[#fde047]">
              Sant Nikka Singh Ji
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-100 font-medium mt-3 leading-relaxed">
            Discover the sacred Sikh Gurus tradition behind Shower of Bliss through authentic YouTube discourses on Sri Guru Nanak Dev Ji, Sri Guru Gobind Singh Ji, Sant Nikka Singh Ji, and Guruvani meditation.
          </p>
        </div>

        {/* AUTOMATIC SIKH GURU YOUTUBE VIDEO CAROUSEL */}
        <div 
          className="relative mb-16"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          
          {/* Header Bar with Next / Prev Controls */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#0284c7]/20 dark:border-[#eab308]/30">
            <div className="flex items-center gap-2.5">
              <span className="p-1.5 rounded-xl bg-[#0284c7] text-[#fef08a] font-serif font-extrabold text-sm shadow-xs border border-[#eab308]/50">
                ੴ
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#0284c7] dark:text-[#facc15] uppercase tracking-wide">
                सिख गुरु व निर्मला परंपरा पावन प्रवचन (Sikh Sacred Discourses)
              </span>
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setIsAutoPlaying(false);
                  prevSlide();
                }}
                aria-label="Previous Sikh video"
                className="w-10 h-10 rounded-full bg-white dark:bg-[#162540] hover:bg-[#0284c7] hover:text-white text-[#0284c7] dark:text-[#facc15] flex items-center justify-center border-2 border-[#eab308]/60 transition-all hover:scale-105 active:scale-95 shadow-md"
              >
                <ChevronLeft className="w-5 h-5 text-[#eab308] dark:text-[#facc15]" />
              </button>

              <span className="text-xs font-mono font-bold text-[#0284c7] dark:text-[#facc15] px-3 py-1 rounded-full bg-[#e0f2fe] dark:bg-[#1e293b] border border-[#0284c7]/30 dark:border-[#facc15]/40">
                {currentIndex + 1} / {totalVideos}
              </span>

              <button
                onClick={() => {
                  setIsAutoPlaying(false);
                  nextSlide();
                }}
                aria-label="Next Sikh video"
                className="w-10 h-10 rounded-full bg-white dark:bg-[#162540] hover:bg-[#0284c7] hover:text-white text-[#0284c7] dark:text-[#facc15] flex items-center justify-center border-2 border-[#eab308]/60 transition-all hover:scale-105 active:scale-95 shadow-md"
              >
                <ChevronRight className="w-5 h-5 text-[#eab308] dark:text-[#facc15]" />
              </button>
            </div>
          </div>

          {/* Automatic Sliding Track */}
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {SIKH_DHARMIK_VIDEOS.map((video) => (
                <div
                  key={video.id}
                  className="w-full shrink-0"
                >
                  <div className="glass-panel rounded-3xl p-6 sm:p-8 border-2 border-[#eab308]/60 dark:border-[#facc15]/60 shadow-2xl bg-white/95 dark:bg-[#111d33]/95 gold-glow-card">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                      
                      {/* Video Thumbnail with Hover Play Button (5 cols on lg) */}
                      <div 
                        className="relative lg:col-span-5 w-full h-56 sm:h-64 rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border-2 border-[#eab308]/60 dark:border-[#facc15]/60 group/thumb shadow-lg"
                        onClick={() => handleCardClick(video)}
                      >
                        <Image
                          src={video.thumbnailUrl}
                          alt={video.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                        
                        {/* Play Center Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-[#0284c7] text-[#fef08a] border-2 border-[#facc15] shadow-[0_0_25px_rgba(250,204,21,0.6)] flex items-center justify-center group-hover/thumb:scale-115 transition-transform duration-300">
                            <Play className="w-6 h-6 fill-current ml-0.5" />
                          </div>
                        </div>

                        {/* Top Sikh Sacred Emblem */}
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-[#facc15] text-xs font-bold border border-[#eab308]/50 flex items-center gap-1.5 shadow-md">
                          <span className="font-serif font-extrabold text-sm">ੴ</span>
                          <span>सिख धर्म साधना</span>
                        </div>

                        {/* Duration Pill */}
                        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-white text-xs font-mono font-bold flex items-center gap-1.5 border border-white/20">
                          <Clock className="w-3.5 h-3.5 text-[#facc15]" />
                          <span>{video.duration}</span>
                        </div>
                      </div>

                      {/* Video Discourse Details (7 cols on lg) */}
                      <div className="lg:col-span-7 flex flex-col justify-between">
                        <div>
                          
                          {/* Badges */}
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#e0f2fe] dark:bg-[#162540] text-[#0284c7] dark:text-[#38bdf8] border border-[#0284c7]/30 dark:border-[#38bdf8]/40">
                              {video.categoryLabel}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#fef08a] dark:bg-[#1e293b] text-[#854d0e] dark:text-[#fde047] border border-[#eab308]/50 flex items-center gap-1">
                              <Sparkles className="w-3.5 h-3.5 text-[#eab308] dark:text-[#facc15]" />
                              {video.frequency}
                            </span>
                          </div>

                          <h3 className="font-serif-bliss text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-snug mb-3 drop-shadow-xs">
                            {video.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-100 font-medium leading-relaxed mb-6">
                            {video.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap items-center gap-1.5 mb-6">
                            {video.tags.map((tag, tIdx) => (
                              <span 
                                key={tIdx} 
                                className="text-[11px] font-bold text-[#0284c7] dark:text-[#7dd3fc] bg-[#e0f2fe]/80 dark:bg-[#162540] px-3 py-0.5 rounded-full border border-[#0284c7]/20 dark:border-[#38bdf8]/30"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="pt-4 border-t border-[#0284c7]/20 dark:border-[#eab308]/30 flex flex-wrap items-center justify-between gap-3">
                          <button
                            onClick={() => handleCardClick(video)}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#0284c7] to-[#0369a1] hover:from-[#0369a1] text-white text-xs sm:text-sm font-extrabold shadow-lg hover:scale-105 active:scale-95 transition-all border-2 border-[#facc15]"
                          >
                            <Play className="w-4 h-4 fill-current text-[#fef08a]" />
                            <span>सत्संग वीडियो देखें (Play Video)</span>
                          </button>

                          <a
                            href={`https://www.youtube.com/@amarjit311/videos`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-md border border-white/20 hover:scale-105"
                          >
                            <YoutubeIcon className="w-3.5 h-3.5" />
                            <span>YouTube @amarjit311</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {SIKH_DHARMIK_VIDEOS.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(dotIdx);
                }}
                aria-label={`Slide ${dotIdx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === dotIdx
                    ? 'w-8 bg-[#0284c7] dark:bg-[#facc15] shadow-xs'
                    : 'w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>

        {/* 4 Pillars of Teaching Section Banner */}
        <div id="pillars" className="scroll-mt-28 glass-panel rounded-3xl p-6 sm:p-10 border-2 border-[#eab308]/60 bg-gradient-to-br from-white via-[#f0f9ff] to-[#e0f2fe] dark:from-[#0f172a] dark:via-[#111d33] dark:to-[#0284c7]/20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7] dark:text-[#38bdf8] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#eab308] dark:text-[#facc15]" />
                Core Curriculum of Awakening
              </span>
              <h3 className="font-serif-bliss text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                The 4 Pillars Taught by Swami Amarjit Singh
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-100 font-medium leading-relaxed">
                Every video, discourse, and guided session on the YouTube channel <strong>@amarjit311</strong> is rooted in these four timeless pillars:
              </p>
              
              <Link 
                href="/teachings" 
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0284c7] dark:text-[#facc15] hover:underline"
              >
                <span>Read in-depth study of all 4 pillars</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-4 rounded-2xl bg-white/95 dark:bg-[#15233c] border-2 border-[#eab308]/40 shadow-sm">
                <h4 className="font-serif-bliss text-base font-bold text-[#0284c7] dark:text-[#38bdf8] mb-1">
                  1. Upadesa Saram (महर्षि रमण)
                </h4>
                <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                  Direct Self-Inquiry ("Who Am I?"). Dissolving the mind in the heart cave to abide in natural Samadhi.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/95 dark:bg-[#15233c] border-2 border-[#eab308]/40 shadow-sm">
                <h4 className="font-serif-bliss text-base font-bold text-[#0284c7] dark:text-[#38bdf8] mb-1">
                  2. Bhagavad Gita (श्रीमद्भगवद्गीता)
                </h4>
                <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                  Chapter 4 Shloka 34, Nishkam Karma, and Guru-Seva to awaken the light of supreme wisdom.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/95 dark:bg-[#15233c] border-2 border-[#eab308]/40 shadow-sm">
                <h4 className="font-serif-bliss text-base font-bold text-[#0284c7] dark:text-[#38bdf8] mb-1">
                  3. Vedic Wisdom &amp; Katha (वेद कथा)
                </h4>
                <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                  Ancient Upanishadic allegories explaining the non-dual Truth of Atman, Maya, and Mukti.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/95 dark:bg-[#15233c] border-2 border-[#eab308]/40 shadow-sm">
                <h4 className="font-serif-bliss text-base font-bold text-[#0284c7] dark:text-[#38bdf8] mb-1">
                  4. Poetry of Sultan Bahu (सूफी वाणी)
                </h4>
                <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                  Cultivating divine ecstatic love ("Ishq-e-Haqeeqi") and rooting the plant of God's Name in the heart.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
