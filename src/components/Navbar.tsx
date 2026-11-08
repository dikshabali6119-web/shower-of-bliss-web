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
    { name: 'मुख्य पृष्ठ', en: 'Home', href: '#hero' },
    { name: 'स्वामी जी', en: 'About Swami Ji', href: '#about-swamiji' },
    { name: 'सत्संग व वीडियो', en: 'Discourses', href: '#meditations' },
    { name: 'आध्यात्मिक विषय', en: 'Topics', href: '#topics' },
    { name: 'विचार व लेख', en: 'Articles', href: '#articles' },
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
          
          {/* Logo & Channel Branding (Header mein se Ekumkar hta diya hai user ki demand ke according) */}
          <Link href="#hero" className="flex items-center gap-3 group">
            
            {/* Official Channel Lotus Emblem */}
            <div className="relative w-11 h-11 rounded-2xl overflow-hidden border-2 border-[#d97706] shadow-sm transition-transform duration-300 group-hover:scale-105 bg-stone-900 shrink-0">
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
                <span className="font-serif-bliss text-xl md:text-2xl font-bold tracking-tight text-[#1f1b16] dark:text-[#faf6ed] transition-colors group-hover:text-[#c25e00] dark:group-hover:text-[#fbbf24]">
                  Shower of Bliss
                </span>
                <span className="hidden sm:inline-flex text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#fef3e2] dark:bg-[#362719] text-[#c25e00] dark:text-[#fcd34d] border border-[#d97706]/40">
                  निर्मला परंपरा
                </span>
              </div>
              <span className="text-[11px] font-medium tracking-wide text-[#857865] dark:text-[#d3c9b7]">
                Swami Amarjit Singh <span className="text-[#d97706] font-semibold">@amarjit311</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Spiritual Indian style with Devanagari) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium text-[#574d3f] dark:text-[#d3c9b7] hover:text-[#c25e00] hover:bg-[#fef3e2] dark:hover:bg-[#28211b] dark:hover:text-[#faf6ed] transition-colors"
              >
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Action Tools & Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* Ambient Sound Drone Toggle */}
            <button
              onClick={toggleAmbientSound}
              title={isAmbientPlaying ? 'शांत 432Hz ध्वनि बंद करें' : 'शांत 432Hz ध्वनि चालू करें'}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                isAmbientPlaying
                  ? 'bg-[#d97706]/20 border-[#d97706] text-[#b45309] dark:text-[#fbbf24] animate-gold-pulse'
                  : 'bg-white/80 dark:bg-[#1c2334]/80 border-[#d97706]/25 text-[#574d3f] dark:text-[#d3c9b7] hover:border-[#d97706]'
              }`}
            >
              {isAmbientPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 animate-pulse text-[#d97706]" />
                  <span className="hidden sm:inline">432Hz चालू</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#857865]" />
                  <span className="hidden sm:inline">शांत ध्वनि</span>
                </>
              )}
            </button>

            {/* Simran Breath Reset Trigger */}
            <button
              onClick={onOpenBreathing}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#fef3e2] dark:bg-[#28211b] text-[#c25e00] dark:text-[#fcd34d] border border-[#d97706]/35 hover:border-[#d97706] transition-colors"
              title="1-मिनट शांत सिमरन श्वास"
            >
              <Wind className="w-3.5 h-3.5 text-[#c25e00] dark:text-[#fbbf24]" />
              <span>सिमरन श्वास</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle spiritual night mode"
              title={isDark ? "दिन का प्रकाश" : "शांत रात्रि स्वरूप"}
              className="p-2 rounded-full text-[#574d3f] dark:text-[#fbbf24] hover:bg-[#fef3e2] dark:hover:bg-[#28211b] border border-transparent hover:border-[#d97706]/40 transition-colors"
            >
              {isDark ? <Sun className="w-4 h-4 text-[#fbbf24]" /> : <Moon className="w-4 h-4 text-[#c25e00]" />}
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
              className="md:hidden p-2 rounded-lg text-[#574d3f] dark:text-[#fbbf24] hover:bg-[#fef3e2] dark:hover:bg-[#28211b]"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-[#d97706]/20 dark:border-[#d97706]/30 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-[#574d3f] dark:text-[#d3c9b7] hover:bg-[#fef3e2] dark:hover:bg-[#28211b] flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#857865]">{link.en}</span>
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenBreathing();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg text-sm font-medium bg-[#fef3e2] dark:bg-[#28211b] text-[#c25e00] dark:text-[#fcd34d] border border-[#d97706]/30"
              >
                <Wind className="w-4 h-4 text-[#d97706]" />
                <span>1-मिनट शांत सिमरन श्वास (Simran Breath)</span>
              </button>
              
              <a
                href="https://www.youtube.com/@amarjit311"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-[#cc0000] text-white text-sm font-medium shadow-sm"
              >
                <YoutubeIcon className="w-4 h-4" />
                <span>YouTube चैनल देखें (@amarjit311)</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
