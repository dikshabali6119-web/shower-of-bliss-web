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
import { IkOnkarSymbol } from '@/components/SikhSymbols';
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
    const savedTheme = localStorage.getItem('bliss-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
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

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('bliss-theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('bliss-theme', 'dark');
      setIsDark(true);
    }
  };

  const toggleAmbientSound = () => {
    const state = soundSynth.toggleAmbient((playing) => setIsAmbientPlaying(playing));
    setIsAmbientPlaying(state);
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Swami Ji', href: '#about-swamiji' },
    { name: 'Meditations', href: '#meditations' },
    { name: 'Topics', href: '#topics' },
    { name: 'Satsangs', href: '#events' },
    { name: 'Articles', href: '#articles' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-nav shadow-sm py-2.5' 
          : 'bg-transparent py-3.5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Sikh Dharma Symbol + Channel Branding */}
          <Link href="#hero" className="flex items-center gap-3 group">
            
            {/* Official Channel Lotus Emblem */}
            <div className="relative w-11 h-11 rounded-2xl overflow-hidden border-2 border-[#d4af37] shadow-sm transition-transform duration-300 group-hover:scale-105 bg-stone-900 shrink-0">
              <Image
                src="/logo.jpg"
                alt="Shower of Bliss Channel Emblem"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Sacred Sikh Dharma Ik Onkar (ੴ) Emblem in Header */}
            <div 
              className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#2d5a4c] to-[#1c382f] text-[#d4af37] border border-[#d4af37]/60 shadow-xs shrink-0 transition-transform group-hover:scale-105"
              title="Sacred Sikh Dharma Ik Onkar (ੴ)"
            >
              <span className="font-serif text-2xl font-bold leading-none select-none drop-shadow-[0_1px_3px_rgba(212,175,55,0.6)]">
                ੴ
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif-bliss text-xl md:text-2xl font-bold tracking-tight text-[#1c3b31] dark:text-[#f0f7f3] transition-colors group-hover:text-[#2d5a4c] dark:group-hover:text-[#d4af37]">
                  Shower of Bliss
                </span>
                <span className="hidden lg:inline-flex text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#d4af37]/20 text-[#8b6e16] dark:text-[#f4db89] border border-[#d4af37]/40">
                  Nirmala Lineage
                </span>
              </div>
              <span className="text-[11px] font-medium tracking-wide text-[#5f7d72] dark:text-[#a1c2b3]">
                Swami Amarjit Singh <span className="text-[#d4af37] font-semibold">@amarjit311</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium text-[#2d5a4c] dark:text-[#d3e6dc] hover:text-[#1c3b31] hover:bg-[#e4ede7] dark:hover:bg-[#183327] dark:hover:text-[#f0f7f3] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Tools & Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* Ambient Sound Drone Toggle */}
            <button
              onClick={toggleAmbientSound}
              title={isAmbientPlaying ? 'Mute 432Hz ambient soundscape' : 'Play 432Hz ambient soundscape'}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                isAmbientPlaying
                  ? 'bg-[#d4af37]/15 border-[#d4af37] text-[#9b7818] dark:text-[#f6d860] animate-gold-pulse'
                  : 'bg-white/70 dark:bg-[#142820]/70 border-[#2d5a4c]/20 text-[#2d5a4c] dark:text-[#b4d0c3] hover:border-[#d4af37]'
              }`}
            >
              {isAmbientPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 animate-pulse text-[#d4af37]" />
                  <span className="hidden sm:inline">432Hz Playing</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Ambient Off</span>
                </>
              )}
            </button>

            {/* Guided Breathing Quick Trigger */}
            <button
              onClick={onOpenBreathing}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#2d5a4c]/10 dark:bg-[#3d7866]/20 text-[#2d5a4c] dark:text-[#e4f2ea] border border-[#2d5a4c]/20 hover:border-[#d4af37] transition-colors"
              title="Quick 1-minute calming breathwork"
            >
              <Wind className="w-3.5 h-3.5 text-[#2d5a4c] dark:text-[#d4af37]" />
              <span>Simran Breath</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle serene dark mode"
              className="p-2 rounded-full text-[#2d5a4c] dark:text-[#d4af37] hover:bg-[#e4ede7] dark:hover:bg-[#173026] border border-transparent hover:border-[#d4af37]/40 transition-colors"
            >
              {isDark ? <Sun className="w-4 h-4 text-[#f6d860]" /> : <Moon className="w-4 h-4 text-[#2d5a4c]" />}
            </button>

            {/* YouTube Channel Button */}
            <a
              href="https://www.youtube.com/@amarjit311"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#cc0000] hover:bg-[#b00000] text-white text-xs font-semibold shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
              <span>Subscribe</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#2d5a4c] dark:text-[#d4af37] hover:bg-[#e4ede7] dark:hover:bg-[#173026]"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-[#2d5a4c]/15 dark:border-[#d4af37]/20 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-[#2d5a4c] dark:text-[#d3e6dc] hover:bg-[#e4ede7] dark:hover:bg-[#183327]"
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
                className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg text-sm font-medium bg-[#2d5a4c]/10 dark:bg-[#3d7866]/20 text-[#2d5a4c] dark:text-[#e4f2ea] border border-[#2d5a4c]/20"
              >
                <Wind className="w-4 h-4 text-[#d4af37]" />
                <span>Quick Guided Simran Breath</span>
              </button>
              
              <a
                href="https://www.youtube.com/@amarjit311"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-[#cc0000] text-white text-sm font-medium shadow-sm"
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
