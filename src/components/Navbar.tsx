'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Volume2, 
  VolumeX, 
  Wind,
} from 'lucide-react';
import { YoutubeIcon } from '@/components/SocialIcons';
import { soundSynth } from '@/utils/soundSynth';

interface NavbarProps {
  onOpenBreathing: () => void;
}

export default function Navbar({ onOpenBreathing }: NavbarProps) {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAmbientPlaying, setIsAmbientPlaying] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('bliss-sky-theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('bliss-sky-theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('bliss-sky-theme', 'dark');
      setIsDark(true);
    }
  };

  const toggleAmbientSound = () => {
    const state = soundSynth.toggleAmbient((playing) => setIsAmbientPlaying(playing));
    setIsAmbientPlaying(state);
  };

  // Nav Items in Clean English as requested by user
  const navLinks = [
    { name: 'Home', href: '/#hero' },
    { name: 'About Swami Ji', href: '/#about-swamiji' },
    { name: 'Video Carousel', href: '/#featured-slider' },
    { name: 'Discourses', href: '/#discourses' },
    { name: 'Pillars of Wisdom', href: '/#pillars' },
    { name: 'Live Satsangs', href: '/#events' },
    { name: 'Articles', href: '/#articles' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-nav shadow-lg py-2.5 bg-white/95 dark:bg-[#0c1524]/95 border-b-2 border-[#eab308]/40' 
          : 'bg-transparent py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Channel Branding (Header has NO Ik Onkar icon as user requested) */}
          <Link href="/#hero" className="flex items-center gap-3 group">
            
            {/* Official Channel Lotus Emblem */}
            <div className="relative w-11 h-11 rounded-2xl overflow-hidden border-2 border-[#eab308] shadow-[0_0_15px_rgba(234,179,8,0.35)] transition-transform duration-300 group-hover:scale-105 bg-slate-900 shrink-0">
              <Image
                src="/logo.jpg"
                alt="Shower of Bliss Channel Emblem"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif-bliss text-xl md:text-2xl font-bold tracking-tight text-[#0284c7] dark:text-[#38bdf8] transition-colors group-hover:text-[#0369a1] dark:group-hover:text-[#facc15]">
                  Shower of Bliss
                </span>
                <span className="hidden sm:inline-flex text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#fef08a] dark:bg-[#1e293b] text-[#854d0e] dark:text-[#fde047] border border-[#eab308]/50">
                  Nirmala Lineage
                </span>
              </div>
              <span className="text-[11px] font-medium tracking-wide text-slate-600 dark:text-slate-300">
                Swami Amarjit Singh <span className="text-[#0284c7] dark:text-[#38bdf8] font-bold">@amarjit311</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links in Clean English */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-bold text-slate-800 dark:text-white hover:text-[#0284c7] dark:hover:text-[#facc15] hover:bg-[#e0f2fe] dark:hover:bg-[#162540] transition-all border border-transparent hover:border-[#0284c7]/30 dark:hover:border-[#facc15]/40"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Tools & Buttons (Sky Blue & Golden Yellow Theme) */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* Ambient Sound Drone Toggle */}
            <button
              onClick={toggleAmbientSound}
              title={isAmbientPlaying ? 'Mute 432Hz ambient soundscape' : 'Play 432Hz ambient soundscape'}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                isAmbientPlaying
                  ? 'bg-[#eab308] text-[#0f172a] border-[#eab308] shadow-[0_0_15px_rgba(234,179,8,0.6)] font-bold animate-pulse'
                  : 'bg-white/90 dark:bg-[#1e293b]/90 border-[#0284c7]/30 text-[#0284c7] dark:text-[#38bdf8] hover:border-[#eab308]'
              }`}
            >
              {isAmbientPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#0f172a]" />
                  <span className="hidden sm:inline">432Hz On</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                  <span className="hidden sm:inline">432Hz Drone</span>
                </>
              )}
            </button>

            {/* Simran Breath Reset Trigger */}
            <button
              onClick={onOpenBreathing}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] text-white border border-[#eab308]/60 hover:border-[#eab308] shadow-sm hover:shadow-md transition-all hover:scale-105 active:scale-95"
              title="Practice 1-Minute Guided Breathwork"
            >
              <Wind className="w-3.5 h-3.5 text-[#fef08a]" />
              <span>Simran Breath</span>
            </button>

            {/* Theme Toggle (Gentle Dusk Mode / Clear Sky Mode) */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme mode"
              title={isDark ? "Switch to Day Mode" : "Switch to Evening Mode"}
              className={`p-2 rounded-full border transition-all ${
                isDark 
                  ? "bg-[#162540] text-[#facc15] border-[#facc15]/80 shadow-[0_0_15px_rgba(250,204,21,0.5)]" 
                  : "bg-white/90 text-[#0284c7] border-[#0284c7]/30 hover:border-[#eab308]"
              }`}
            >
              {isDark ? <Sun className="w-4 h-4 text-[#facc15]" /> : <Moon className="w-4 h-4 text-[#0284c7]" />}
            </button>

            {/* YouTube Channel Button */}
            <a
              href="https://www.youtube.com/@amarjit311"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
              <span>Subscribe</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#0284c7] dark:text-[#facc15] hover:bg-[#e0f2fe] dark:hover:bg-[#1e293b]"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t-2 border-[#eab308]/30 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200 bg-white/95 dark:bg-[#0f172a]/95 rounded-2xl p-4 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-[#e0f2fe] dark:hover:bg-[#1e293b] hover:text-[#0284c7]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenBreathing();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-bold bg-[#0284c7] text-white border border-[#eab308]/40 shadow-sm"
              >
                <Wind className="w-4 h-4 text-[#fef08a]" />
                <span>Simran Breathing Reset</span>
              </button>
              
              <a
                href="https://www.youtube.com/@amarjit311"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-red-600 text-white text-sm font-bold shadow-sm"
              >
                <YoutubeIcon className="w-4 h-4" />
                <span>Visit YouTube Channel (@amarjit311)</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
