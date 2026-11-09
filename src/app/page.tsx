'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import VideoSlider from '@/components/VideoSlider';
import SikhGurusAutoCarousel from '@/components/SikhGurusAutoCarousel';
import NirmalaHeritageSection from '@/components/NirmalaHeritageSection';
import FloatingSidebar from '@/components/FloatingSidebar';
import VideoGallery from '@/components/VideoGallery';
import LiveSatsangsSection from '@/components/LiveSatsangsSection';
import ArticlesSection from '@/components/ArticlesSection';
import DynamicFooter from '@/components/DynamicFooter';
import SlotReveal from '@/components/SlotReveal';
import VideoModal from '@/components/VideoModal';
import BreathingModal from '@/components/BreathingModal';
import EventModal from '@/components/EventModal';
import ArticleModal from '@/components/ArticleModal';
import GuruBioModal, { GuruBioData } from '@/components/GuruBioModal';
import { VideoItem, LiveEvent, Article } from '@/types';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [selectedGuru, setSelectedGuru] = useState<GuruBioData | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<LiveEvent | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isBreathingOpen, setIsBreathingOpen] = useState<boolean>(false);

  const handleSelectEvents = () => {
    const eventsElement = document.getElementById('events');
    if (eventsElement) {
      eventsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const discoursesElement = document.getElementById('discourses');
    if (discoursesElement) {
      discoursesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative pb-10 selection:bg-[#facc15]/30 selection:text-[#0284c7] bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      
      {/* Sacred Celestial Sky Blue Grid Layout (User Requested) */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-grid-blue [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_95%)] opacity-85" />

      {/* Glassmorphic Top Navbar with English Links */}
      <Navbar onOpenBreathing={() => setIsBreathingOpen(true)} />

      {/* Main Page Body */}
      <main className="flex-1">
        
        {/* Hero Section with CENTERED Rotating Ik Onkar */}
        <HeroSection
          onOpenBreathing={() => setIsBreathingOpen(true)}
          onExploreClick={handleExploreClick}
        />

        {/* Sikh Gurus & Sant Nikka Singh Ji 2-Second Automatic Carousel (Slot Animated on Scroll) */}
        <SlotReveal direction="up" delay={50}>
          <SikhGurusAutoCarousel onOpenBio={(guru) => setSelectedGuru(guru)} />
        </SlotReveal>

        {/* Featured Video Slider / Carousel (Slot Animated on Scroll) */}
        <SlotReveal direction="scale" delay={75}>
          <div id="featured-slider" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <VideoSlider onSelectVideo={(video) => setSelectedVideo(video)} />
          </div>
        </SlotReveal>

        {/* The Guru-Shishya Tradition & Nirmala Heritage Section with Sikh Video Slider (Slot Animated) */}
        <SlotReveal direction="up" delay={50}>
          <NirmalaHeritageSection onSelectVideo={(video) => setSelectedVideo(video)} />
        </SlotReveal>

        {/* Discourses & Topic Explorer Section (Slot Animated) */}
        <SlotReveal direction="up" delay={50}>
          <section id="discourses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Floating Topic Explorer (4 cols on lg screens, sticky) */}
              <div id="topics" className="lg:col-span-4 xl:col-span-3">
                <FloatingSidebar
                  activeCategory={activeCategory}
                  onSelectCategory={(cat) => {
                    setActiveCategory(cat);
                    const medElement = document.getElementById('meditations');
                    if (medElement && window.innerWidth < 1024) {
                      medElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  onSelectEvents={handleSelectEvents}
                />
              </div>

              {/* Interactive Video Gallery Grid (8 cols on lg, 9 on xl) */}
              <div className="lg:col-span-8 xl:col-span-9">
                <VideoGallery
                  activeCategory={activeCategory}
                  onSelectVideo={(video) => setSelectedVideo(video)}
                  onCategoryChange={(cat) => setActiveCategory(cat)}
                />
              </div>

            </div>
          </section>
        </SlotReveal>

        {/* Dedicated Section 1: Live Global Satsangs (Slot Animated on Scroll) */}
        <SlotReveal direction="up" delay={50}>
          <LiveSatsangsSection onSelectEvent={(event) => setSelectedEvent(event)} />
        </SlotReveal>

        {/* Dedicated Section 2: Sacred Articles & Spiritual Essays (Slot Animated on Scroll) */}
        <SlotReveal direction="up" delay={50}>
          <ArticlesSection onSelectArticle={(article) => setSelectedArticle(article)} />
        </SlotReveal>

      </main>

      {/* Dynamic Footer with Daily Sages Quote & Background Animations */}
      <DynamicFooter />

      {/* Interactive Modals */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      <BreathingModal
        isOpen={isBreathingOpen}
        onClose={() => setIsBreathingOpen(false)}
      />

      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      {/* Sikh Gurus & Sant Nikka Singh Ji Sacred Biography Reader Modal */}
      <GuruBioModal
        guru={selectedGuru}
        onClose={() => setSelectedGuru(null)}
      />

    </div>
  );
}
