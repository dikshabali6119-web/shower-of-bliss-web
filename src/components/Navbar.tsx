
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
  Sparkles,
  ChevronDown,
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

    const dark = savedTheme === 'dark';
    setIsDark(dark);
    document.documentElement.classList.toggle('dark', dark);

    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;

    setIsDark(nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme);

    localStorage.setItem(
      'bliss-sky-theme',
      nextTheme ? 'dark' : 'light'
    );
  };

  const toggleAmbientSound = () => {
    const state = soundSynth.toggleAmbient((playing) => {
      setIsAmbientPlaying(playing);
    });

    setIsAmbientPlaying(state);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '/#hero' },
    { name: 'About Swami Ji', href: '/#about-swamiji' },
    { name: 'Videos', href: '/#featured-slider' },
    { name: 'Discourses', href: '/#discourses' },
    { name: 'Wisdom', href: '/#pillars' },
    { name: 'Live Satsangs', href: '/#events' },
    { name: 'Articles', href: '/#articles' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 dark:bg-[#091426]/95 backdrop-blur-2xl shadow-[0_8px_35px_rgba(15,23,42,0.10)] border-b border-amber-400/30 py-2'
            : 'bg-white/65 dark:bg-[#091426]/65 backdrop-blur-lg border-b border-white/20 py-4'
        }`}
      >
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 xl:px-8">

          <div className="flex items-center justify-between gap-4">

            {/* BRAND LOGO */}
            <Link
              href="/#hero"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 shrink-0 group"
            >
              <div className="logo-orbit relative w-12 h-12 md:w-14 md:h-14 rounded-full p-[3px] shrink-0">

                <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-white dark:border-slate-800 shadow-xl">
                  <Image
                    src="/logo.jpg"
                    alt="Shower of Bliss"
                    fill
                    priority
                    sizes="56px"
                    className="object-cover logo-image"
                  />
                </div>

                <span className="absolute -top-1 -right-1 text-amber-400 animate-pulse">
                  <Sparkles size={15} fill="currentColor" />
                </span>
              </div>

              <div className="flex flex-col gap-0.5">

                <div className="flex items-center gap-2">
                  <span className="brand-name text-xl md:text-2xl font-bold tracking-tight">
                    Shower of Bliss
                  </span>
                </div>

                <span className="text-[9px] md:text-[10px] tracking-[2px] uppercase font-semibold text-slate-500 dark:text-slate-400">
                  Nirmala Lineage
                </span>

                <span className="text-[10px] md:text-[11px] font-medium text-slate-600 dark:text-slate-300">
                  Swami Amarjit Singh
                  <span className="text-sky-600 dark:text-sky-400 font-bold">
                    {' '}@amarjit311
                  </span>
                </span>

              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden xl:flex items-center gap-0.5">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link relative px-2.5 py-2 text-[12px] font-semibold text-slate-700 dark:text-slate-200 whitespace-nowrap transition-all duration-300 rounded-lg hover:text-sky-600 dark:hover:text-amber-400 hover:bg-sky-50 dark:hover:bg-slate-800/70"
                >
                  {link.name}
                  <span className="nav-underline" />
                </a>
              ))}
            </nav>

            {/* ACTION BUTTONS */}
            <div className="flex items-center gap-2 shrink-0">

              {/* AMBIENT SOUND */}
              <button
                onClick={toggleAmbientSound}
                aria-label="Toggle ambient sound"
                title="432Hz Ambient Sound"
                className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-bold border transition-all duration-300 ${
                  isAmbientPlaying
                    ? 'bg-amber-400 text-slate-900 border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.4)]'
                    : 'bg-white/80 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-amber-400'
                }`}
              >
                {isAmbientPlaying ? (
                  <Volume2 size={16} className="animate-pulse" />
                ) : (
                  <VolumeX size={16} />
                )}
                <span className="hidden 2xl:inline">
                  {isAmbientPlaying ? '432Hz ON' : '432Hz'}
                </span>
              </button>

              {/* BREATHING */}
              <button
                onClick={onOpenBreathing}
                className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-500 hover:from-sky-700 hover:to-blue-600 text-white text-xs font-bold shadow-md hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Wind size={16} className="text-amber-200" />
                <span className="hidden 2xl:inline">
                  Simran Breath
                </span>
              </button>

              {/* THEME */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                title={isDark ? 'Day Mode' : 'Night Mode'}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800 text-sky-600 dark:text-amber-400 hover:rotate-12 hover:border-amber-400 transition-all duration-300"
              >
                {isDark ? <Sun size={17} /> : <Moon size={17} />}
              </button>

              {/* YOUTUBE */}
              <a
                href="https://www.youtube.com/@amarjit311"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <YoutubeIcon className="w-4 h-4" />
                <span>Subscribe</span>
              </a>

              {/* MOBILE MENU */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
                className="xl:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-sky-50 dark:bg-slate-800 text-sky-700 dark:text-amber-400 hover:bg-sky-100 dark:hover:bg-slate-700 transition-all"
              >
                {isMobileMenuOpen ? (
                  <X size={22} />
                ) : (
                  <Menu size={22} />
                )}
              </button>

            </div>
          </div>

          {/* MOBILE NAVIGATION */}
          {isMobileMenuOpen && (
            <div className="mobile-dropdown xl:hidden mt-4 mb-2 p-4 rounded-2xl bg-white/95 dark:bg-[#101d32]/95 backdrop-blur-2xl border border-amber-400/20 shadow-2xl">

              <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-200 dark:border-slate-700">
                <span className="text-xs font-bold tracking-widest uppercase text-sky-700 dark:text-amber-400">
                  Explore Shower of Bliss
                </span>
                <ChevronDown size={16} className="text-amber-500" />
              </div>

              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-slate-800 hover:text-sky-600 dark:hover:text-amber-400 transition-all duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">

                <button
                  onClick={() => {
                    onOpenBreathing();
                    closeMobileMenu();
                  }}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-500 text-white text-sm font-bold"
                >
                  <Wind size={17} />
                  Simran Breath
                </button>

                <a
                  href="https://www.youtube.com/@amarjit311"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-red-600 text-white text-sm font-bold"
                >
                  <YoutubeIcon className="w-4 h-4" />
                  Subscribe on YouTube
                </a>

              </div>
            </div>
          )}

        </div>
      </header>

      {/* LOGO ANIMATION & NAVBAR EFFECTS */}
      <style jsx>{`
        .logo-orbit {
          background: conic-gradient(
            from 0deg,
            #fbbf24,
            #ffffff,
            #38bdf8,
            #f59e0b,
            #fbbf24
          );
          animation: orbitRotate 7s linear infinite,
                     logoFloat 4s ease-in-out infinite;
          box-shadow: 0 0 15px rgba(245, 158, 11, 0.25);
        }

        .logo-image {
          transition: transform 0.6s ease;
        }

        .group:hover .logo-image {
          transform: scale(1.13);
        }

        .brand-name {
          background: linear-gradient(
            100deg,
            #0369a1 0%,
            #0ea5e9 35%,
            #d97706 65%,
            #0369a1 100%
          );
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: brandShimmer 6s ease-in-out infinite;
        }

        .nav-underline {
          position: absolute;
          bottom: 2px;
          left: 50%;
          width: 0;
          height: 2px;
          border-radius: 10px;
          background: linear-gradient(90deg, #0284c7, #eab308);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link:hover .nav-underline {
          width: 65%;
        }

        .mobile-dropdown {
          animation: dropdownIn 0.3s ease-out;
        }

        @keyframes orbitRotate {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes logoFloat {
          0%, 100% {
            translate: 0 0;
          }
          50% {
            translate: 0 -4px;
          }
        }

        @keyframes brandShimmer {
          0%, 100% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
        }

        @keyframes dropdownIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-orbit,
          .brand-name {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
