'use client';

import React, { useState, forwardRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  RotateCw, 
  Copy, 
  Check, 
  Send, 
  Heart, 
  Quote, 
  Radio 
} from 'lucide-react';
import { 
  YoutubeIcon, 
  FacebookIcon, 
  InstagramIcon, 
  SpotifyIcon 
} from '@/components/SocialIcons';
import { SacredKhandaMandala } from '@/components/SikhSymbols';
import { SAGE_QUOTES } from '@/data/quotes';
import SlotItem from '@/components/SlotItem';

interface DynamicFooterProps {
  className?: string;
}

export default function DynamicFooter() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const currentQuote = SAGE_QUOTES[quoteIndex];

  const handleNextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % SAGE_QUOTES.length);
  };

  const handleCopyQuote = () => {
    const textToCopy = `"${currentQuote.text}" — ${currentQuote.author} (${currentQuote.source}) via Shower of Bliss (Swami Amarjit Singh @amarjit311)`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <>
      <footer 
        className="relative mt-20 pt-16 pb-20 w-full max-w-full border-t-2 border-[#eab308]/40 dark:border-[#eab308]/30 bg-gradient-to-b from-[#e0f2fe]/90 via-[#f0f7ff] to-white dark:from-[#0c1524] dark:via-[#111d33] dark:to-[#080d1a] text-slate-800 dark:text-white transition-colors duration-300 overflow-hidden"
        style={{ contain: 'paint', isolation: 'isolate' }}
      >
        
        {/* SIKH DHARMA ANIMATED BACKGROUND: Sacred Khanda Mandalas, Shower of Bliss Animated Logo & Bubbles */}
        <div 
          className="absolute inset-0 pointer-events-none overflow-hidden z-0"
          style={{ contain: 'strict' }}
        >
          
          {/* Prominent Sacred Animated Shower of Bliss Emblem (User Requested: shower of bliss ki pic animation hoti ayegi) */}
          <div className="absolute top-28 sm:top-20 right-4 sm:right-12 md:right-16 lg:right-24 pointer-events-none select-none">
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#eab308] shadow-[0_0_60px_rgba(250,204,21,0.55),0_0_100px_rgba(56,189,248,0.45)] animate-bliss-logo opacity-40 dark:opacity-50">
              <Image
                src="/logo.jpg"
                alt="Shower of Bliss background emblem"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Mini Floating Shower of Bliss Emblems Rising With Bubbles */}
          <div className="absolute bottom-6 left-[14%] animate-bubble-4 pointer-events-none">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#eab308] shadow-[0_0_20px_rgba(250,204,21,0.7)] bg-white/30 backdrop-blur-xs">
              <Image src="/logo.jpg" alt="Mini bliss logo" fill className="object-cover" />
            </div>
          </div>

          <div className="absolute bottom-12 right-[20%] animate-bubble-6 pointer-events-none">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#38bdf8] shadow-[0_0_20px_rgba(56,189,248,0.7)] bg-white/30 backdrop-blur-xs">
              <Image src="/logo.jpg" alt="Mini bliss logo" fill className="object-cover" />
            </div>
          </div>

          {/* Luminous Rising Bliss Bubbles (User Requested: bublesss b lgaooooo) */}
          <span className="bubble-bliss w-6 h-6 left-[7%] bottom-6 animate-bubble-1" />
          <span className="bubble-bliss w-11 h-11 left-[18%] bottom-12 animate-bubble-2" />
          <span className="bubble-bliss w-5 h-5 left-[28%] bottom-4 animate-bubble-3" />
          <span className="bubble-bliss w-9 h-9 left-[39%] bottom-10 animate-bubble-4" />
          <span className="bubble-bliss w-4 h-4 left-[50%] bottom-5 animate-bubble-5" />
          <span className="bubble-bliss w-10 h-10 left-[62%] bottom-14 animate-bubble-6" />
          <span className="bubble-bliss w-12 h-12 left-[73%] bottom-8 animate-bubble-7" />
          <span className="bubble-bliss w-7 h-7 left-[84%] bottom-16 animate-bubble-8" />
          <span className="bubble-bliss w-6 h-6 left-[90%] bottom-6 animate-bubble-9" />
          <span className="bubble-bliss w-8 h-8 left-[33%] bottom-20 animate-bubble-2" />

          {/* Right Sacred Rotating Khanda Mandala (Strictly contained) */}
          <div className="absolute -bottom-16 -right-10 md:right-4 lg:right-12 opacity-20 dark:opacity-25 transition-opacity overflow-hidden pointer-events-none">
            <SacredKhandaMandala className="w-80 h-80 sm:w-96 sm:h-96" />
          </div>

          {/* Left Ethereal Counter-Rotating Sacred Mandala (Strictly contained) */}
          <div className="absolute -top-16 -left-12 md:left-2 opacity-15 dark:opacity-20 transition-opacity overflow-hidden pointer-events-none">
            <SacredKhandaMandala className="w-64 h-64 sm:w-80 sm:h-80" />
          </div>

          {/* Floating Golden Simran Light Embers */}
          <span className="absolute bottom-12 left-1/4 w-3 h-3 rounded-full bg-[#facc15] blur-xs animate-simran-spark-1" />
          <span className="absolute bottom-8 left-1/3 w-2 h-2 rounded-full bg-[#38bdf8] blur-xs animate-simran-spark-2" />
          <span className="absolute bottom-16 left-1/2 w-3.5 h-3.5 rounded-full bg-[#eab308] blur-xs animate-simran-spark-3" />
          <span className="absolute bottom-10 right-1/3 w-2.5 h-2.5 rounded-full bg-[#fde047] blur-xs animate-simran-spark-4" />
          <span className="absolute bottom-20 right-1/4 w-3 h-3 rounded-full bg-[#0ea5e9] blur-xs animate-simran-spark-5" />

          {/* Ambient celestial mist */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-72 bg-gradient-to-t from-[#38bdf8]/15 via-[#facc15]/10 to-transparent blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* TOP SECTION: Daily Quote from Sages & Gurus Card */}
          <SlotItem delay={30} className="max-w-4xl mx-auto mb-16">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border-2 border-[#eab308]/50 shadow-2xl relative overflow-hidden gold-glow-card bg-white/95 dark:bg-[#111d33]/95">

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-[#0284c7]/20 dark:border-[#eab308]/20">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="p-1.5 rounded-lg bg-[#0284c7] text-[#fef08a] font-serif font-bold text-base leading-none border border-[#eab308]/60 shadow-xs">
                    ੴ
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7] dark:text-[#facc15]">
                    Daily Wisdom from Gurus &amp; Sages
                  </span>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#e0f2fe] dark:bg-[#162540] text-[#0369a1] dark:text-[#7dd3fc] border border-[#0284c7]/30">
                    {currentQuote.tag}
                  </span>
                </div>

                {/* Action Buttons for Quote */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyQuote}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 dark:text-slate-200 bg-[#e0f2fe] dark:bg-[#162540] border border-[#0284c7]/30 hover:bg-[#0284c7] hover:text-white transition-all shadow-xs"
                    title="Copy this quote"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>

                  <button
                    onClick={handleNextQuote}
                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-[#0284c7] hover:bg-[#0369a1] text-white transition-all border border-[#eab308]/60 active:scale-95 shadow-md"
                    title="Inspire me with another quote"
                  >
                    <RotateCw className="w-3.5 h-3.5 text-[#fef08a]" />
                    <span>Next Reflection</span>
                  </button>
                </div>
              </div>

              {/* Quote Text & Author */}
              <div className="my-3">
                <blockquote className="font-serif-bliss text-lg sm:text-xl md:text-2xl font-medium text-slate-900 dark:text-white leading-relaxed italic drop-shadow-xs">
                  &ldquo;{currentQuote.text}&rdquo;
                </blockquote>
                
                <div className="mt-4 flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <span className="font-bold text-sm sm:text-base text-[#0284c7] dark:text-[#facc15]">
                      — {currentQuote.author}
                    </span>
                    <span className="text-xs text-slate-600 dark:text-slate-300 ml-2">
                      ({currentQuote.source})
                    </span>
                  </div>
                  
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono font-bold">
                    Wisdom {quoteIndex + 1} of {SAGE_QUOTES.length}
                  </span>
                </div>
              </div>

            </div>
          </SlotItem>

          {/* MIDDLE SECTION: 4-Column Footer Navigation & Newsletter */}
          <SlotItem delay={60} className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-6 border-b border-[#0284c7]/20 dark:border-[#eab308]/20">
            
            {/* Brand Info (lg:col-span-4) */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-2xl overflow-hidden border-2 border-[#eab308] bg-slate-900 shrink-0 shadow-[0_0_15px_rgba(234,179,8,0.4)]">
                  <Image
                    src="/logo.jpg"
                    alt="Shower of Bliss official emblem"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="font-serif-bliss text-xl font-bold text-slate-900 dark:text-white">
                    Shower of Bliss
                  </span>
                  <span className="text-xs font-bold text-[#0284c7] dark:text-[#facc15]">
                    Swami Amarjit Singh (@amarjit311)
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm">
                Sharing the supreme spiritual knowledge of <strong>Vedanta, Guruvani, and Meditation</strong> transmitted by enlightened master <strong>Sant Nikka Singh Ji</strong> (Nirmala Lineage) to guide souls toward true liberation (Mukti).
              </p>

              {/* Social Media Links */}
              <div className="flex items-center gap-2 pt-1">
                <a
                  href="https://www.youtube.com/@amarjit311"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                  aria-label="YouTube Channel @amarjit311"
                  title="Shower of Bliss on YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#1877f2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#1db954] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                  aria-label="Spotify Meditations"
                >
                  <SpotifyIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links (lg:col-span-2) */}
            <div className="lg:col-span-2 flex flex-col gap-2.5">
              <h5 className="font-serif-bliss text-sm font-bold text-[#0284c7] dark:text-[#facc15]">
                Discourses
              </h5>
              <ul className="flex flex-col gap-2 text-xs text-slate-600 dark:text-slate-300">
                <li><a href="#featured-slider" className="hover:text-[#0284c7] dark:hover:text-[#facc15] transition-colors">Video Slider</a></li>
                <li><a href="#discourses" className="hover:text-[#0284c7] dark:hover:text-[#facc15] transition-colors">Upadesa Saram (रमण)</a></li>
                <li><a href="#discourses" className="hover:text-[#0284c7] dark:hover:text-[#facc15] transition-colors">Bhagavad Gita (गीता)</a></li>
                <li><a href="#discourses" className="hover:text-[#0284c7] dark:hover:text-[#facc15] transition-colors">Vedic Stories (वेद कथा)</a></li>
                <li><a href="#discourses" className="hover:text-[#0284c7] dark:hover:text-[#facc15] transition-colors">Sultan Bahu (सूफी कलाम)</a></li>
              </ul>
            </div>

            {/* Resources & Lineage (lg:col-span-2) */}
            <div className="lg:col-span-2 flex flex-col gap-2.5">
              <h5 className="font-serif-bliss text-sm font-bold text-[#0284c7] dark:text-[#facc15]">
                Nirmala Heritage
              </h5>
              <ul className="flex flex-col gap-2 text-xs text-slate-600 dark:text-slate-300">
                <li><a href="#about-swamiji" className="hover:text-[#0284c7] dark:hover:text-[#facc15] transition-colors">Sant Nikka Singh Ji</a></li>
                <li><a href="#pillars" className="hover:text-[#0284c7] dark:hover:text-[#facc15] transition-colors">4 Pillars of Wisdom</a></li>
                <li><a href="#events" className="hover:text-[#0284c7] dark:hover:text-[#facc15] transition-colors">Live Global Satsangs</a></li>
                <li><a href="#articles" className="hover:text-[#0284c7] dark:hover:text-[#facc15] transition-colors">Vedanta Essays</a></li>
                <li><a href="https://www.youtube.com/@amarjit311" target="_blank" rel="noopener noreferrer" className="hover:text-[#0284c7] dark:hover:text-[#facc15] transition-colors">YouTube @amarjit311</a></li>
              </ul>
            </div>

            {/* Newsletter Signup (lg:col-span-4) */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <h5 className="font-serif-bliss text-sm font-bold text-[#0284c7] dark:text-[#facc15]">
                Join the Nirmala Sangha
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Receive Swami Amarjit Singh&apos;s weekly Guruvani reflections, Vedanta discourses, and live Satsang announcements.
              </p>

              {subscribed ? (
                <div className="p-3.5 rounded-2xl bg-[#e0f2fe] dark:bg-[#162540] border-2 border-[#0284c7]/40 text-[#0284c7] dark:text-[#facc15] text-xs flex items-center gap-2 font-bold shadow-xs">
                  <Check className="w-4 h-4 shrink-0 text-[#0284c7] dark:text-[#facc15]" />
                  <span>Waheguru Ji Ka Khalsa! You are subscribed to our weekly peace letters.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2.5 text-xs rounded-full bg-white dark:bg-[#162540] border-2 border-[#0284c7]/30 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:border-[#0284c7]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0284c7] to-[#0369a1] text-white text-xs font-bold shadow-md flex items-center gap-1.5 transition-transform hover:scale-105 border border-[#eab308]/60 hover:border-[#eab308]"
                  >
                    <Send className="w-3.5 h-3.5 text-[#fef08a]" />
                    <span>Join</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </SlotItem>

          {/* NORMAL FOOTER BOTTOM: In-flow copyright for users at the very end */}
          <div className="pt-6 pb-2 text-center text-xs text-slate-400 dark:text-slate-500">
            <span>Shower of Bliss • Sacred Wisdom Portal</span>
          </div>

        </div>
      </footer>

      {/* FIXED BOTTOM BAR: Sirf Last 2026 Line Fixed (User Requested: sirf last 2026 vali fix karrr) */}
      <div className="fixed bottom-0 left-0 w-full z-40 bg-white/95 dark:bg-[#091322]/95 backdrop-blur-md border-t border-[#0284c7]/20 dark:border-[#eab308]/30 py-2.5 px-4 shadow-[0_-4px_25px_rgba(15,23,42,0.12)]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600 dark:text-slate-300">
          <p className="text-center sm:text-left text-[11px] sm:text-xs">
            © 2026 <strong>Shower of Bliss</strong> by Swami Amarjit Singh (
            <a 
              href="https://www.youtube.com/@amarjit311" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#0284c7] dark:text-[#facc15] hover:underline font-bold"
            >
              @amarjit311
            </a>
            ) • In divine reverence to Sant Nikka Singh Ji (Nirmala Lineage).
          </p>

          <p className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#0284c7] dark:text-[#facc15] font-semibold shrink-0">
            <span className="font-serif font-bold text-sm">ੴ</span>
            <span>Vedanta, Guruvani &amp; Meditation for True Liberation</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current inline" />
          </p>
        </div>
      </div>
    </>
  );
}
