'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Wind, Bell, Sparkles } from 'lucide-react';

import { CenteredRotatingIkOnkar } from '@/components/SikhSymbols';
import { soundSynth } from '@/utils/soundSynth';

interface HeroSectionProps {
  onOpenBreathing: () => void;
  onExploreClick: () => void;
}

export default function HeroSection({
  onOpenBreathing,
  onExploreClick,
}: HeroSectionProps) {
  const [bowlChimed, setBowlChimed] = useState(false);

  const handleRingBowl = () => {
    soundSynth.playSingingBowl(432);
    setBowlChimed(true);
    setTimeout(() => setBowlChimed(false), 3000);
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      {/* Background atmosphere */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] md:w-[1100px] md:h-[750px] bg-gradient-to-tr from-sky-400/20 via-amber-300/15 to-blue-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute top-10 left-[-100px] w-96 h-96 bg-sky-300/20 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-10 right-[-100px] w-96 h-96 bg-amber-300/20 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute top-[45%] right-[10%] w-3 h-3 rounded-full bg-amber-400 blur-[2px] animate-pulse pointer-events-none" />

      <div className="absolute top-[30%] left-[8%] w-2 h-2 rounded-full bg-sky-400 blur-[1px] animate-pulse pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">

          {/* Channel badge */}
          <div className="inline-flex items-center flex-wrap justify-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-[#15233c]/90 backdrop-blur-xl border border-amber-400/60 shadow-[0_5px_25px_rgba(234,179,8,0.15)] mb-4 hero-badge">
            <span className="font-serif font-bold text-base text-amber-500">
              ੴ
            </span>

            <span className="text-[10px] sm:text-xs font-bold tracking-wide text-sky-700 dark:text-sky-300">
              Nirmala Tradition • Vedanta &amp; Guruvani
            </span>

            <span className="text-xs text-amber-500 font-black">
              • @amarjit311
            </span>
          </div>

          {/* Centered animated Ik Onkar */}
          <div className="w-full flex items-center justify-center py-5 md:py-7">
            <div className="ik-onkar-stage relative flex items-center justify-center">

              {/* Aura */}
              <div className="absolute inset-[-22%] rounded-full ik-aura" />
              <div className="absolute inset-[-10%] rounded-full ik-aura-secondary" />

              {/* Rotating rings */}
              <div className="absolute inset-[-8%] rounded-full ik-ring-one" />
              <div className="absolute inset-[-15%] rounded-full ik-ring-two" />
              <div className="absolute inset-[-22%] rounded-full ik-ring-three" />

              {/* Orbit dots */}
              <div className="absolute inset-[-15%] ik-orbit">
                <span className="orbit-dot" />
              </div>

              <div className="absolute inset-[-22%] ik-orbit-reverse">
                <span className="orbit-dot orbit-dot-blue" />
              </div>

              {/* Particles */}
              <div className="absolute inset-0 ik-particles">
                {Array.from({ length: 10 }).map((_, index) => (
                  <span key={index} />
                ))}
              </div>

              {/* Main symbol - smaller and centered */}
              <div className="relative z-10 ik-symbol-reveal flex items-center justify-center">
                <CenteredRotatingIkOnkar
                  className="w-36 h-36 sm:w-44 sm:h-44 md:w-[200px] md:h-[200px]"
                />
              </div>

              {/* Sparkles */}
              <Sparkles
                className="absolute top-[5%] right-[5%] text-amber-400 animate-pulse"
                size={21}
              />

              <Sparkles
                className="absolute bottom-[8%] left-[4%] text-sky-400 animate-pulse"
                size={18}
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-serif-bliss text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0f172a] dark:text-white leading-[1.25] mb-5 drop-shadow-sm">
            वेदांत, गुरुवाणी और साधना से

            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#eab308] dark:from-[#38bdf8] dark:via-[#facc15] dark:to-[#fde047] hero-heading-shimmer">
              परम आनंद व मुक्ति का मार्ग
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-200 font-medium max-w-3xl leading-relaxed mb-8">
            The Integrated Path to Inner Liberation (Mukti) through the divine synthesis of Non-Dual Vedanta, Gurbani Hymns, and Contemplative Meditation.
          </p>

          {/* Swami Ji bio card */}
          <div className="w-full max-w-4xl my-3 p-5 sm:p-8 rounded-3xl glass-panel border border-amber-400/50 shadow-[0_15px_60px_rgba(15,23,42,0.08)] text-left relative overflow-hidden bg-white/85 dark:bg-[#111d33]/90 backdrop-blur-xl gold-glow-card">

            <div className="absolute -top-20 -right-20 w-48 h-48 bg-amber-300/10 rounded-full blur-3xl pointer-events-none" />

            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-sky-300/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-5">

                {/* Swami photo */}
                <div className="relative w-28 h-36 sm:w-32 sm:h-40 rounded-2xl overflow-hidden border-2 border-amber-400 shrink-0 bg-white shadow-[0_0_25px_rgba(234,179,8,0.35)]">
                  <Image
                    src="/swami-amarjit-portrait.jpg"
                    alt="Swami Amarjit Singh"
                    fill
                    sizes="(max-width: 640px) 112px, 128px"
                    className="object-cover object-top"
                    priority
                  />
                </div>

                {/* Bio */}
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                    <h3 className="font-serif-bliss text-xl sm:text-2xl font-bold text-[#0f172a] dark:text-white">
                      Swami Amarjit Singh
                    </h3>

                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-600 text-white border border-amber-400/50">
                      निर्मला परंपरा
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-2">
                    YouTube Creator at &quot;Shower of Bliss&quot; (
                    <span className="text-sky-600 dark:text-sky-400 font-bold">
                      @amarjit311
                    </span>
                    )
                  </p>

                  <p className="text-xs sm:text-sm text-amber-700 dark:text-amber-400 font-bold mt-2">
                    Revered Master: Sant Nikka Singh Ji &apos;Virakt&apos; (Nirmala Lineage)
                  </p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="font-serif-bliss text-sm sm:text-base text-slate-800 dark:text-slate-100 leading-relaxed italic border-l-4 border-amber-400 pl-4 py-4 my-5 bg-sky-50/80 dark:bg-[#172554]/60 rounded-r-2xl">
                &ldquo;Hi! My name is <strong>Swami Amarjit Singh</strong>. My Guru&apos;s name is <strong>Sant Nikka Singh Ji</strong>. He was an enlightened saint from the Nirmalas line. So what I learned from him about knowledge of <strong>Vedanta, Guruvani, and Meditation</strong>, that I want to share with people, because it can lead us towards liberation.&rdquo;
              </blockquote>

              {/* Channel topics */}
              <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-bold">
                <span className="bg-sky-100 dark:bg-slate-800 text-sky-800 dark:text-sky-300 border border-sky-300/50 px-3 py-2 rounded-full">
                  📖 Upadesa Saram
                </span>

                <span className="bg-amber-100 dark:bg-slate-800 text-amber-800 dark:text-amber-300 border border-amber-300/50 px-3 py-2 rounded-full">
                  🕉️ Bhagavad Gita
                </span>

                <span className="bg-sky-100 dark:bg-slate-800 text-sky-800 dark:text-sky-300 border border-sky-300/50 px-3 py-2 rounded-full">
                  📜 Vedic Stories &amp; Katha
                </span>

                <span className="bg-amber-100 dark:bg-slate-800 text-amber-800 dark:text-amber-300 border border-amber-300/50 px-3 py-2 rounded-full">
                  🌹 Poetry of Sultan Bahu
                </span>

                <span className="bg-sky-100 dark:bg-slate-800 text-sky-800 dark:text-sky-300 border border-sky-300/50 px-3 py-2 rounded-full">
                  🌾 Sacred Fields of India
                </span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-9 w-full">

            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 hover:from-blue-700 hover:to-sky-600 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-sky-500/30 transition-all duration-300 border border-amber-400 hover:-translate-y-1 active:scale-95 group"
            >
              <Play className="w-4 h-4 fill-current text-amber-200 group-hover:scale-125 transition-transform" />
              <span>Explore YouTube Discourses</span>
            </button>

            <button
              onClick={onOpenBreathing}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/90 dark:bg-[#15233c] hover:bg-sky-50 dark:hover:bg-[#1e3352] text-slate-900 dark:text-white font-bold text-sm sm:text-base transition-all duration-300 border border-amber-400/60 hover:border-amber-400 shadow-md hover:-translate-y-1 active:scale-95"
            >
              <Wind className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span>Simran Breath Reset</span>
            </button>

            <button
              onClick={handleRingBowl}
              title="Ring 432Hz harmonic bell chime"
              className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border shadow-sm hover:-translate-y-1 active:scale-95 ${
                bowlChimed
                  ? 'bg-amber-400 text-slate-900 border-amber-400 shadow-[0_0_25px_rgba(234,179,8,0.45)]'
                  : 'bg-white/90 dark:bg-[#15233c]/90 text-slate-700 dark:text-slate-200 border-sky-300/50 hover:border-amber-400'
              }`}
            >
              <Bell
                className={`w-4 h-4 ${
                  bowlChimed ? 'animate-bounce text-slate-900' : 'text-amber-500'
                }`}
              />

              <span>
                {bowlChimed ? '432Hz Bell Resonating...' : 'Chime 432Hz Bell'}
              </span>
            </button>
          </div>

          {/* Bottom divider */}
          <div className="flex items-center justify-center gap-3 mt-2 opacity-70">
            <span className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent to-amber-400" />

            <Sparkles className="text-amber-500" size={17} />

            <span className="text-[10px] tracking-[3px] font-semibold text-sky-700 dark:text-sky-300 uppercase">
              Journey Within
            </span>

            <Sparkles className="text-amber-500" size={17} />

            <span className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent to-amber-400" />
          </div>
        </div>
      </div>

      {/* Hero animations */}
      <style jsx>{`
        .ik-onkar-stage {
          width: 260px;
          height: 260px;
          max-width: 78vw;
          max-height: 78vw;
          animation: sacredFloat 5s ease-in-out infinite;
        }

        .ik-aura {
          background: radial-gradient(
            circle,
            rgba(56,189,248,0.25) 0%,
            rgba(250,204,21,0.20) 35%,
            rgba(2,132,199,0.10) 55%,
            transparent 75%
          );
          filter: blur(25px);
          animation: auraPulse 4s ease-in-out infinite;
        }

        .ik-aura-secondary {
          background: radial-gradient(
            circle,
            rgba(234,179,8,0.12),
            transparent 70%
          );
          filter: blur(35px);
          animation: auraPulse 6s ease-in-out infinite reverse;
        }

        .ik-ring-one {
          border: 2px solid transparent;
          border-top-color: rgba(234,179,8,0.9);
          border-bottom-color: rgba(56,189,248,0.8);
          border-left-color: rgba(234,179,8,0.15);
          border-right-color: rgba(56,189,248,0.15);
          animation: ringRotate 18s linear infinite;
          box-shadow: 0 0 15px rgba(234,179,8,0.12);
        }

        .ik-ring-two {
          border: 1px dashed rgba(2,132,199,0.55);
          animation: ringRotateReverse 26s linear infinite;
        }

        .ik-ring-three {
          border: 1px solid rgba(234,179,8,0.22);
          animation: ringRotate 35s linear infinite;
        }

        .ik-orbit {
          animation: ringRotate 12s linear infinite;
        }

        .ik-orbit-reverse {
          animation: ringRotateReverse 17s linear infinite;
        }

        .orbit-dot {
          position: absolute;
          top: 0;
          left: 50%;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #facc15;
          box-shadow: 0 0 15px #facc15;
        }

        .orbit-dot-blue {
          width: 7px;
          height: 7px;
          background: #38bdf8;
          box-shadow: 0 0 15px #38bdf8;
        }

        .ik-symbol-reveal {
          display: flex;
          align-items: center;
          justify-content: center;
          animation: symbolReveal 1.8s cubic-bezier(.2,.8,.2,1) both;
          filter: drop-shadow(0 0 18px rgba(234,179,8,.28));
        }

        .ik-particles span {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #facc15;
          border-radius: 50%;
          box-shadow: 0 0 12px #facc15;
          animation: particleGlow 3s ease-in-out infinite;
        }

        .ik-particles span:nth-child(1) { top: 5%; left: 50%; }
        .ik-particles span:nth-child(2) { top: 20%; right: 8%; animation-delay: .5s; }
        .ik-particles span:nth-child(3) { bottom: 20%; right: 10%; animation-delay: 1s; }
        .ik-particles span:nth-child(4) { bottom: 5%; left: 50%; animation-delay: 1.5s; }
        .ik-particles span:nth-child(5) { bottom: 20%; left: 8%; animation-delay: 2s; }
        .ik-particles span:nth-child(6) { top: 20%; left: 8%; animation-delay: .8s; }
        .ik-particles span:nth-child(7) { top: 50%; right: 0; animation-delay: 1.2s; }
        .ik-particles span:nth-child(8) { top: 50%; left: 0; animation-delay: 1.8s; }
        .ik-particles span:nth-child(9) { top: 35%; left: 2%; animation-delay: .4s; }
        .ik-particles span:nth-child(10) { top: 35%; right: 2%; animation-delay: 1.4s; }

        .hero-heading-shimmer {
          background-size: 200% auto;
          animation: headingShimmer 7s ease-in-out infinite;
        }

        .hero-badge {
          animation: badgeReveal 1s ease-out both;
        }

        @keyframes sacredFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        @keyframes auraPulse {
          0%, 100% { transform: scale(.9); opacity: .55; }
          50% { transform: scale(1.15); opacity: 1; }
        }

        @keyframes ringRotate {
          to { transform: rotate(360deg); }
        }

        @keyframes ringRotateReverse {
          to { transform: rotate(-360deg); }
        }

        @keyframes symbolReveal {
          from {
            opacity: 0;
            transform: scale(.7);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }

        @keyframes particleGlow {
          0%, 100% { opacity: .3; transform: scale(.7); }
          50% { opacity: 1; transform: scale(1.8); }
        }

        @keyframes headingShimmer {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }

        @keyframes badgeReveal {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (min-width: 768px) {
          .ik-onkar-stage {
            width: 300px;
            height: 300px;
          }
        }

        @media (max-width: 480px) {
          .ik-onkar-stage {
            width: 230px;
            height: 230px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ik-onkar-stage,
          .ik-aura,
          .ik-aura-secondary,
          .ik-ring-one,
          .ik-ring-two,
          .ik-ring-three,
          .ik-orbit,
          .ik-orbit-reverse,
          .ik-symbol-reveal,
          .ik-particles span,
          .hero-heading-shimmer,
          .hero-badge {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
