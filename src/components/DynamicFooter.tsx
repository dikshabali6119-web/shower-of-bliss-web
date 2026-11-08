'use client';

import React, { useState } from 'react';
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
import { SAGE_QUOTES } from '@/data/quotes';

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
    <footer className="relative mt-20 pt-16 pb-12 border-t-2 border-[#f59e0b]/30 bg-gradient-to-b from-[#0a0f1d] via-[#080d1a] to-[#04070e] text-white">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-gradient-to-t from-[#1d4ed8]/20 via-[#f59e0b]/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP SECTION: Daily Quote from Sages & Gurus Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border-2 border-[#f59e0b]/50 shadow-2xl relative overflow-hidden gold-glow-card bg-[#0f172a]/95">
            
            {/* Watermark Sikh Ik Onkar */}
            <span className="absolute right-6 -bottom-6 font-serif text-9xl text-[#facc15]/10 pointer-events-none select-none font-bold">
              ੴ
            </span>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-[#f59e0b]/25">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-[#1e3a8a] text-[#facc15] font-serif font-bold text-base leading-none border border-[#f59e0b]/40">
                  ੴ
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#facc15]">
                  Daily Wisdom from Gurus &amp; Sages
                </span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#1e3a8a] text-[#facc15] border border-[#f59e0b]/40">
                  {currentQuote.tag}
                </span>
              </div>

              {/* Action Buttons for Quote */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyQuote}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-slate-200 bg-[#1e293b] border border-[#f59e0b]/30 hover:border-[#facc15] hover:text-[#facc15] transition-all"
                  title="Copy this quote"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>

                <button
                  onClick={handleNextQuote}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#1e3a8a] text-[#facc15] hover:bg-[#1d4ed8] transition-all border border-[#f59e0b]/50 active:scale-95 shadow-md"
                  title="Inspire me with another quote"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Next Reflection</span>
                </button>
              </div>
            </div>

            {/* Quote Text & Author */}
            <div className="my-3">
              <blockquote className="font-serif-bliss text-lg sm:text-xl md:text-2xl font-medium text-white leading-relaxed italic drop-shadow-sm">
                &ldquo;{currentQuote.text}&rdquo;
              </blockquote>
              
              <div className="mt-4 flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="font-bold text-sm sm:text-base text-[#facc15]">
                    — {currentQuote.author}
                  </span>
                  <span className="text-xs text-slate-300 ml-2">
                    ({currentQuote.source})
                  </span>
                </div>
                
                <span className="text-[11px] text-slate-400 font-mono">
                  Wisdom {quoteIndex + 1} of {SAGE_QUOTES.length}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* MIDDLE SECTION: 4-Column Footer Navigation & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#f59e0b]/20">
          
          {/* Brand Info (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-2xl overflow-hidden border-2 border-[#facc15] bg-slate-900 shrink-0 shadow-[0_0_15px_rgba(250,204,21,0.4)]">
                <Image
                  src="/logo.jpg"
                  alt="Shower of Bliss official emblem"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-serif-bliss text-xl font-bold text-white">
                  Shower of Bliss
                </span>
                <span className="text-xs font-bold text-[#facc15]">
                  Swami Amarjit Singh (@amarjit311)
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
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
            <h5 className="font-serif-bliss text-sm font-bold text-[#facc15]">
              Discourses
            </h5>
            <ul className="flex flex-col gap-2 text-xs text-slate-300">
              <li><a href="#featured-slider" className="hover:text-[#facc15] transition-colors">Video Slider</a></li>
              <li><a href="#discourses" className="hover:text-[#facc15] transition-colors">Upadesa Saram (रमण)</a></li>
              <li><a href="#discourses" className="hover:text-[#facc15] transition-colors">Bhagavad Gita (गीता)</a></li>
              <li><a href="#discourses" className="hover:text-[#facc15] transition-colors">Vedic Stories (वेद कथा)</a></li>
              <li><a href="#discourses" className="hover:text-[#facc15] transition-colors">Sultan Bahu (सूफी कलाम)</a></li>
            </ul>
          </div>

          {/* Resources & Lineage (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <h5 className="font-serif-bliss text-sm font-bold text-[#facc15]">
              Nirmala Heritage
            </h5>
            <ul className="flex flex-col gap-2 text-xs text-slate-300">
              <li><a href="#about-swamiji" className="hover:text-[#facc15] transition-colors">Sant Nikka Singh Ji</a></li>
              <li><a href="#pillars" className="hover:text-[#facc15] transition-colors">4 Pillars of Wisdom</a></li>
              <li><a href="#events" className="hover:text-[#facc15] transition-colors">Live Global Satsangs</a></li>
              <li><a href="#articles" className="hover:text-[#facc15] transition-colors">Vedanta Essays</a></li>
              <li><a href="https://www.youtube.com/@amarjit311" target="_blank" rel="noopener noreferrer" className="hover:text-[#facc15] transition-colors">YouTube @amarjit311</a></li>
            </ul>
          </div>

          {/* Newsletter Signup (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h5 className="font-serif-bliss text-sm font-bold text-[#facc15]">
              Join the Nirmala Sangha
            </h5>
            <p className="text-xs text-slate-300">
              Receive Swami Amarjit Singh&apos;s weekly Guruvani reflections, Vedanta discourses, and live Satsang announcements.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-2xl bg-[#1e3a8a] border border-[#facc15]/50 text-[#facc15] text-xs flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0 text-[#facc15]" />
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
                  className="flex-1 px-4 py-2.5 text-xs rounded-full bg-[#1e293b] border border-[#f59e0b]/40 text-white placeholder-slate-400 focus:outline-hidden focus:border-[#facc15]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#1e3a8a] text-white text-xs font-bold shadow-md flex items-center gap-1.5 transition-transform hover:scale-105 border border-[#facc15]/60 hover:border-[#facc15]"
                >
                  <Send className="w-3.5 h-3.5 text-[#facc15]" />
                  <span>Join</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* BOTTOM SECTION: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            © 2026 <strong>Shower of Bliss</strong> by Swami Amarjit Singh (
            <a 
              href="https://www.youtube.com/@amarjit311" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#facc15] hover:underline font-semibold"
            >
              @amarjit311
            </a>
            ) • In divine reverence to Sant Nikka Singh Ji (Nirmala Lineage).
          </p>

          <p className="flex items-center gap-1.5 text-xs text-[#facc15]">
            <span className="font-serif font-bold text-sm">ੴ</span>
            <span>Vedanta, Guruvani &amp; Meditation for True Liberation</span>
            <Heart className="w-3 h-3 text-red-500 fill-current inline" />
          </p>
        </div>

      </div>
    </footer>
  );
}
