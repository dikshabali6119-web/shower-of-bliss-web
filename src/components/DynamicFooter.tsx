'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
    const textToCopy = `"${currentQuote.text}" — ${currentQuote.author} (${currentQuote.source}) via Shower of Bliss (@amarjit311)`;
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
    <footer className="relative mt-20 pt-16 pb-12 border-t border-[#2d5a4c]/10 dark:border-[#d4af37]/20 bg-gradient-to-b from-transparent via-[#eaf2ed]/60 to-[#ddece2] dark:via-[#09140f]/60 dark:to-[#060e0a]">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-gradient-to-t from-[#d4af37]/10 via-[#2d5a4c]/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP SECTION: Daily Quote from Sages Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-[#d4af37]/50 shadow-md relative overflow-hidden gold-glow-card">
            
            {/* Watermark Quote Icon */}
            <Quote className="absolute right-6 -bottom-4 w-32 h-32 text-[#2d5a4c]/5 dark:text-[#d4af37]/5 pointer-events-none rotate-12" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-[#2d5a4c]/10 dark:border-[#d4af37]/15">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-[#2d5a4c]/10 dark:bg-[#3d7866]/30 text-[#2d5a4c] dark:text-[#d4af37]">
                  <Sparkles className="w-4 h-4" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8b6e16] dark:text-[#d4af37]">
                  Daily Wisdom from the Sages
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#2d5a4c] text-white">
                  {currentQuote.tag}
                </span>
              </div>

              {/* Action Buttons for Quote */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyQuote}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-[#2d5a4c] dark:text-[#d4af37] bg-white/70 dark:bg-[#183327]/70 border border-[#2d5a4c]/15 hover:border-[#d4af37] transition-all"
                  title="Copy this quote"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>

                <button
                  onClick={handleNextQuote}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#2d5a4c] text-white hover:bg-[#23483c] transition-all border border-[#d4af37]/40 active:scale-95"
                  title="Inspire me with another quote"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Next Sage</span>
                </button>
              </div>
            </div>

            {/* Quote Text & Author */}
            <div className="my-3">
              <blockquote className="font-serif-bliss text-lg sm:text-xl md:text-2xl font-medium text-[#1c3b31] dark:text-[#f4fbf7] leading-relaxed italic">
                &ldquo;{currentQuote.text}&rdquo;
              </blockquote>
              
              <div className="mt-4 flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="font-bold text-sm sm:text-base text-[#2d5a4c] dark:text-[#f3de94]">
                    — {currentQuote.author}
                  </span>
                  <span className="text-xs text-[#5f7d72] dark:text-[#97b8aa] ml-2">
                    ({currentQuote.source})
                  </span>
                </div>
                
                <span className="text-[11px] text-[#5f7d72] dark:text-[#97b8aa]">
                  Quote {quoteIndex + 1} of {SAGE_QUOTES.length}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* MIDDLE SECTION: 4-Column Footer Navigation & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2d5a4c]/10 dark:border-[#d4af37]/15">
          
          {/* Brand Info (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#2d5a4c] to-[#437a67] text-[#d4af37] flex items-center justify-center border border-[#d4af37]/50 shadow-xs">
                <Sparkles className="w-4 h-4 text-[#f6d860]" />
              </div>
              <span className="font-serif-bliss text-xl font-bold text-[#1c3b31] dark:text-[#f4fbf7]">
                Shower of Bliss
              </span>
            </div>

            <p className="text-xs text-[#3d6355] dark:text-[#b4d2c4] leading-relaxed max-w-sm">
              The official sanctuary of YouTube creator <strong>Amarjit (@amarjit311)</strong>. Dedicated to spreading stillness, 432Hz sound immersion, and Vedic introspection across the world.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://www.youtube.com/@amarjit311"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#cc0000] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
                aria-label="YouTube Channel @amarjit311"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1877f2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href="https://spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1db954] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
                aria-label="Spotify Meditations"
              >
                <SpotifyIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <h5 className="font-serif-bliss text-sm font-bold text-[#1c3b31] dark:text-[#f4fbf7]">
              Meditations
            </h5>
            <ul className="flex flex-col gap-2 text-xs text-[#3d6355] dark:text-[#b4d2c4]">
              <li><a href="#meditations" className="hover:text-[#2d5a4c] dark:hover:text-[#d4af37] transition-colors">Morning Mindfulness</a></li>
              <li><a href="#meditations" className="hover:text-[#2d5a4c] dark:hover:text-[#d4af37] transition-colors">Forest Calm 432Hz</a></li>
              <li><a href="#meditations" className="hover:text-[#2d5a4c] dark:hover:text-[#d4af37] transition-colors">Deep Sleep Delta Waves</a></li>
              <li><a href="#meditations" className="hover:text-[#2d5a4c] dark:hover:text-[#d4af37] transition-colors">Tibetan Sound Bowls</a></li>
              <li><a href="#meditations" className="hover:text-[#2d5a4c] dark:hover:text-[#d4af37] transition-colors">Chakra Realignment</a></li>
            </ul>
          </div>

          {/* Resources & Events (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <h5 className="font-serif-bliss text-sm font-bold text-[#1c3b31] dark:text-[#f4fbf7]">
              Sangha & Events
            </h5>
            <ul className="flex flex-col gap-2 text-xs text-[#3d6355] dark:text-[#b4d2c4]">
              <li><a href="#events" className="hover:text-[#2d5a4c] dark:hover:text-[#d4af37] transition-colors">Upcoming Live Satsangs</a></li>
              <li><a href="#articles" className="hover:text-[#2d5a4c] dark:hover:text-[#d4af37] transition-colors">Spiritual Wisdom Essays</a></li>
              <li><a href="#topics" className="hover:text-[#2d5a4c] dark:hover:text-[#d4af37] transition-colors">Explore by Topic</a></li>
              <li><a href="https://www.youtube.com/@amarjit311" target="_blank" rel="noopener noreferrer" className="hover:text-[#2d5a4c] dark:hover:text-[#d4af37] transition-colors">Channel Community (@amarjit311)</a></li>
            </ul>
          </div>

          {/* Newsletter Signup (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h5 className="font-serif-bliss text-sm font-bold text-[#1c3b31] dark:text-[#f4fbf7]">
              Join the Shower of Bliss Sangha
            </h5>
            <p className="text-xs text-[#3d6355] dark:text-[#b4d2c4]">
              Receive Amarjit&apos;s weekly audio reflection, unreleased 432Hz sound baths, and live event invitations directly in your inbox.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>Namaste! You are subscribed to our Sunday peace letter.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your sacred email"
                  className="flex-1 px-3.5 py-2 text-xs rounded-full glass-panel border border-[#2d5a4c]/20 dark:border-[#d4af37]/30 text-[#1c3b31] dark:text-white placeholder-[#7f9e91] focus:outline-hidden focus:border-[#d4af37]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-full bg-[#2d5a4c] hover:bg-[#23483c] text-white text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-transform hover:scale-105 border border-[#d4af37]/40"
                >
                  <Send className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Join</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* BOTTOM SECTION: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5f7d72] dark:text-[#97b8aa]">
          <p className="text-center sm:text-left">
            © 2026 <strong>Shower of Bliss</strong> by Amarjit (
            <a 
              href="https://www.youtube.com/@amarjit311" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#8b6e16] dark:text-[#d4af37] hover:underline font-semibold"
            >
              @amarjit311
            </a>
            ). All rights reserved.
          </p>

          <p className="flex items-center gap-1 text-[11px]">
            <span>Radiating peace, stillness & divine presence</span>
            <Heart className="w-3 h-3 text-rose-500 fill-current inline" />
          </p>
        </div>

      </div>
    </footer>
  );
}
