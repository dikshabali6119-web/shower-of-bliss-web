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
  ArrowRight
} from 'lucide-react';
import { YoutubeIcon } from '@/components/SocialIcons';
import { VideoItem } from '@/types';
import Link from 'next/link';

export const SIKH_DHARMIK_VIDEOS: VideoItem[] = [
  {
    id: 'sikh-guru-gobind-singh-nirmala',
    youtubeId: 'Z1BCujX3pw8',
    title: 'श्री गुरु गोबिन्द सिंह जी - पंच निर्मला परंपरा व काशी यात्रा',
    description: 'दशम पातशाह श्री गुरु गोबिन्द सिंह जी द्वारा पांच सिखों को काशी भेजकर संस्कृत, उपनिषद् और अद्वैत वेदांत का अध्ययन कराकर निर्मला संप्रदाय की स्थापना का पावन इतिहास।',
    duration: '06:45',
    views: '1.2K',
    category: 'sikh-heritage',
    categoryLabel: 'श्री गुरु गोबिन्द सिंह जी • काशी परंपरा',
    thumbnailUrl: '/thumbnails/fields.jpg',
    instructor: 'Swami Amarjit Singh',
    frequency: '432Hz Simran',
    tags: ['Guru Gobind Singh Ji', 'Nirmala Lineage', 'Vedanta']
  },
  {
    id: 'sikh-guru-nanak-ik-onkar',
    youtubeId: 'b9k1c0l2y3m',
    title: 'श्री गुरु नानक देव जी - ੴ (एक ओंकार) का अद्वैत रहस्य',
    description: 'प्रथम पातशाह श्री गुरु नानक देव जी द्वारा उद्घाटित "ੴ सतिनामु करता पुरखु" का गहन वेदांतिक अर्थ। कैसे सर्वव्यापी ब्रह्म ही समस्त सृष्टि में एकरस व्याप्त है।',
    duration: '08:12',
    views: '2.5K',
    category: 'sikh-heritage',
    categoryLabel: 'श्री गुरु नानक देव जी • मूल मंतर',
    thumbnailUrl: '/thumbnails/upadesa-saram.jpg',
    instructor: 'Swami Amarjit Singh',
    frequency: '528Hz Meditation',
    tags: ['Guru Nanak Dev Ji', 'Ik Onkar', 'Mool Mantar']
  },
  {
    id: 'sant-nikka-singh-virakt-jeevan',
    youtubeId: 'x7w8v9u0t1s',
    title: 'संत निक्का सिंह जी महाराज - वैराग्य व निर्मला परंपरा',
    description: 'निर्मला परंपरा के परम ब्रह्मज्ञानी संत पूज्य संत निक्का सिंह जी महाराज की पावन साधना, वैराग्य, गुरुवाणी चिंतन और वेदांत ज्ञान का सार।',
    duration: '09:30',
    views: '3.1K',
    category: 'sikh-heritage',
    categoryLabel: 'संत निक्का सिंह जी • पूर्ण ब्रह्मज्ञानी',
    thumbnailUrl: '/gurus/sant-nikka-singh.jpg',
    instructor: 'Swami Amarjit Singh',
    frequency: '432Hz Ambient',
    tags: ['Sant Nikka Singh Ji', 'Nirmala Master', 'Guruvani']
  },
  {
    id: 'sri-guru-granth-sahib-jot',
    youtubeId: 'c2d3e4f5g6h',
    title: 'श्री गुरु ग्रन्थ साहिब जी - "सभ महि जोति जोति है सोइ"',
    description: 'गुरुवाणी की अमर पंक्ति "सभ महि जोति जोति है सोइ तिस दै चानणि सभ महि चानणु होइ" पर स्वामी अमरजीत सिंह जी का गहन सत्संग विचार।',
    duration: '07:18',
    views: '1.8K',
    category: 'sikh-heritage',
    categoryLabel: 'श्री गुरु ग्रन्थ साहिब जी • अद्वैत ज्ञान',
    thumbnailUrl: '/thumbnails/gita.jpg',
    instructor: 'Swami Amarjit Singh',
    frequency: '432Hz Sound',
    tags: ['Guru Granth Sahib', 'Gurbani', 'Divine Light']
  },
  {
    id: 'sukhmani-sahib-simran',
    youtubeId: 'p1q2r3s4t5u',
    title: 'सुखमनी साहिब - मन की शांति व जन्म-मरण से मुक्ति',
    description: 'पंचम पातशाह श्री गुरु अर्जुन देव जी द्वारा रचित सुखमनी साहिब से मन की शुद्धि, मानसिक शांति और प्रभु सिमरन से जन्म-मरण के भय से मुक्ति।',
    duration: '11:05',
    views: '4.2K',
    category: 'sikh-heritage',
    categoryLabel: 'पंचम पातशाह • सुखमनी साहिब',
    thumbnailUrl: '/thumbnails/ved-katha.jpg',
    instructor: 'Swami Amarjit Singh',
    frequency: '432Hz Simran',
    tags: ['Sukhmani Sahib', 'Guru Arjan Dev Ji', 'Mind Healing']
  },
  {
    id: 'swami-amarjit-gurbani-simran',
    youtubeId: 'v8w9x0y1z2a',
    title: 'स्वामी अमरजीत सिंह - गुरुवाणी सिमरन व ध्यान साधना',
    description: 'श्वास-श्वास में वाहेगुरु व ੴ का सिमरन कैसे करें। मन के विकारों से मुक्त होकर अंतरात्मा के परम आनंद में लीन होने की सरल विधि।',
    duration: '05:50',
    views: '2.9K',
    category: 'sikh-heritage',
    categoryLabel: 'स्वामी अमरजीत सिंह • @amarjit311',
    thumbnailUrl: '/swami-amarjit.jpg',
    instructor: 'Swami Amarjit Singh',
    frequency: '528Hz Transformation',
    tags: ['Swami Amarjit Singh', 'Meditation', 'Simran']
  },
  {
    id: 'japuji-sahib-hukam',
    youtubeId: 'm4n5o6p7q8r',
    title: 'जपुजी साहिब विचार - हुकम व समर्पण का मार्ग',
    description: 'प्रथम पातशाह श्री गुरु नानक देव जी द्वारा प्रकटित जपुजी साहिब की पावन पौड़ी "हुकमि रजाई चलणा" पर अद्वैत वेदांतिक सत्संग।',
    duration: '08:45',
    views: '2.1K',
    category: 'sikh-heritage',
    categoryLabel: 'श्री गुरु नानक देव जी • जपुजी साहिब',
    thumbnailUrl: '/thumbnails/upadesa-saram.jpg',
    instructor: 'Swami Amarjit Singh',
    frequency: '432Hz Simran',
    tags: ['Japuji Sahib', 'Hukam', 'Guru Nanak Dev Ji']
  },
  {
    id: 'anand-sahib-bliss',
    youtubeId: 's9t0u1v2w3x',
    title: 'आनंदु साहिब - अंतःकरण में परम आनंद की प्राप्ति',
    description: 'तीसरे पातशाह श्री गुरु अमरदास जी द्वारा रचित आनंदु साहिब का आध्यात्मिक रहस्य — मन को पूर्ण तृप्ति और आनंदमय स्वरूप में कैसे स्थिर करें।',
    duration: '10:20',
    views: '3.4K',
    category: 'sikh-heritage',
    categoryLabel: 'तीसरे पातशाह • आनंद साहिब',
    thumbnailUrl: '/thumbnails/fields.jpg',
    instructor: 'Swami Amarjit Singh',
    frequency: '528Hz Bliss',
    tags: ['Anand Sahib', 'Inner Peace', 'Bliss']
  }
];

interface NirmalaHeritageSectionProps {
  onSelectVideo?: (video: VideoItem) => void;
}

export default function NirmalaHeritageSection({ onSelectVideo }: NirmalaHeritageSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);

  const totalVideos = SIKH_DHARMIK_VIDEOS.length;

  // Responsive visible cards count (1 on mobile, 2 on tablet, 3 on desktop, 4 on xl)
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

  const maxIndex = Math.max(0, totalVideos - visibleCount);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Automatic Smooth Sliding (Every 3.8s, slides 1 card at a time)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3800);
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex, currentIndex]);

  const handleCardClick = (video: VideoItem) => {
    if (onSelectVideo) {
      onSelectVideo(video);
    } else {
      window.open(`https://www.youtube.com/@amarjit311/search?query=${encodeURIComponent(video.title)}`, '_blank');
    }
  };

  return (
    <section id="about-swamiji" className="scroll-mt-28 py-10 md:py-16 relative">
      
      {/* Background Soft Sky Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-80 bg-[#38bdf8]/15 dark:bg-[#0284c7]/25 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0284c7]/15 dark:bg-[#162540] text-[#0284c7] dark:text-[#38bdf8] border-2 border-[#0284c7]/30 dark:border-[#38bdf8]/40 text-xs font-bold mb-2 shadow-xs">
              <Shield className="w-3.5 h-3.5 text-[#eab308] dark:text-[#facc15]" />
              <span className="dark:text-[#facc15]">Sacred Sikh Lineage • निर्मला गुरु परंपरा</span>
            </div>

            <h2 className="font-serif-bliss text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              The Guru-Shishya Heritage:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#eab308] dark:from-[#38bdf8] dark:via-[#facc15] dark:to-[#fde047]">
                Sant Nikka Singh Ji
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-100 font-medium mt-1">
              Discourses on Sri Guru Nanak Dev Ji, Sri Guru Gobind Singh Ji, Sant Nikka Singh Ji, and Guruvani
            </p>
          </div>

          {/* Controls: Prev / Next Buttons & Position Counter */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                setIsAutoPlaying(false);
                prevSlide();
              }}
              aria-label="Previous videos"
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
              aria-label="Next videos"
              className="w-9 h-9 rounded-full bg-white dark:bg-[#162540] hover:bg-[#0284c7] hover:text-white text-[#0284c7] dark:text-[#facc15] flex items-center justify-center border-2 border-[#eab308]/60 transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              <ChevronRight className="w-5 h-5 text-[#eab308] dark:text-[#facc15]" />
            </button>
          </div>
        </div>

        {/* 3-4 CARDS SLIDER TRACK (User Requested: Ek bar me 3 se 4 card dikhe aur automatic slide ho) */}
        <div 
          className="relative mb-14 overflow-hidden rounded-3xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div 
            className="flex transition-transform duration-600 ease-in-out -mx-2.5"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {SIKH_DHARMIK_VIDEOS.map((video) => (
              <div
                key={video.id}
                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 shrink-0 px-2.5"
              >
                <div 
                  onClick={() => handleCardClick(video)}
                  className="glass-panel rounded-2xl overflow-hidden gold-glow-card flex flex-col justify-between h-full border-2 border-[#eab308]/50 dark:border-[#facc15]/50 bg-white/95 dark:bg-[#111d33]/95 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                >
                  {/* 16:9 Thumbnail Container */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                    <Image
                      src={video.thumbnailUrl}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 group-hover:from-black/75 transition-colors" />

                    {/* Center Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-12 h-12 rounded-full bg-[#0284c7] text-[#fef08a] border-2 border-[#facc15] flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover:scale-115 group-hover:shadow-[0_0_20px_rgba(250,204,21,0.7)]">
                        <Play className="w-5 h-5 fill-current ml-0.5 text-[#fef08a]" />
                      </div>
                    </div>

                    {/* Top ੴ Sikh Heritage Badge */}
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-xs text-[#facc15] text-[10px] font-bold border border-[#eab308]/40 flex items-center gap-1 shadow-xs">
                      <span className="font-serif">ੴ</span>
                      <span>सिख सत्संग</span>
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/85 backdrop-blur-xs text-white text-[10px] font-mono font-bold flex items-center gap-1 border border-white/20">
                      <Clock className="w-3 h-3 text-[#facc15]" />
                      <span>{video.duration}</span>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-4 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Category / Guru Tag */}
                      <div className="flex items-center justify-between gap-1 mb-2">
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#e0f2fe] dark:bg-[#162540] text-[#0284c7] dark:text-[#38bdf8] border border-[#0284c7]/30 truncate max-w-[80%]">
                          {video.categoryLabel}
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-300 font-bold flex items-center gap-1 shrink-0">
                          <Eye className="w-3 h-3 text-[#eab308]" />
                          {video.views}
                        </span>
                      </div>

                      {/* Video Title */}
                      <h3 className="font-serif-bliss text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug line-clamp-2 group-hover:text-[#0284c7] dark:group-hover:text-[#facc15] transition-colors mb-3">
                        {video.title}
                      </h3>
                    </div>

                    {/* Action Footer Buttons */}
                    <div className="pt-3 border-t border-[#0284c7]/15 dark:border-[#eab308]/20 flex items-center justify-between gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(video);
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
          <div className="flex items-center justify-center gap-2 mt-5">
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
                    ? 'w-7 bg-[#0284c7] dark:bg-[#facc15] shadow-xs'
                    : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
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
