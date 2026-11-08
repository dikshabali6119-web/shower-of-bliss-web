'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import VideoSlider from '@/components/VideoSlider';
import NirmalaHeritageSection from '@/components/NirmalaHeritageSection';
import FloatingSidebar from '@/components/FloatingSidebar';
import VideoGallery from '@/components/VideoGallery';
import ContentColumns from '@/components/ContentColumns';
import DynamicFooter from '@/components/DynamicFooter';
import VideoModal from '@/components/VideoModal';
import BreathingModal from '@/components/BreathingModal';
import EventModal from '@/components/EventModal';
import ArticleModal from '@/components/ArticleModal';
import { VideoItem, LiveEvent, Article } from '@/types';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
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
    <div className="min-h-screen flex flex-col relative selection:bg-[#facc15]/30 selection:text-[#0284c7] bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      
      {/* Glassmorphic Top Navbar with English Links */}
      <Navbar onOpenBreathing={() => setIsBreathingOpen(true)} />

      {/* Main Page Body */}
      <main className="flex-1">
        
        {/* Hero Section with CENTERED Rotating Ik Onkar */}
        <HeroSection
          onOpenBreathing={() => setIsBreathingOpen(true)}
          onExploreClick={handleExploreClick}
        />

        {/* Featured Video Slider / Carousel (User Requested) */}
        <div id="featured-slider" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VideoSlider onSelectVideo={(video) => setSelectedVideo(video)} />
        </div>

        {/* The Guru-Shishya Tradition & Nirmala Heritage Section */}
        <NirmalaHeritageSection />

        {/* Discourses & Topic Explorer Section */}
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

        {/* Content Columns: Live Satsangs (Left) & Must-Read Articles (Right) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContentColumns
            onSelectEvent={(event) => setSelectedEvent(event)}
            onSelectArticle={(article) => setSelectedArticle(article)}
          />
        </div>

      </main>

      {/* Dynamic Footer with Daily Sages Quote & Social Links */}
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

    </div>
  );
}
