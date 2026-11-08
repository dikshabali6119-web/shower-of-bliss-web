'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
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
    const medElement = document.getElementById('meditations');
    if (medElement) {
      medElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-[#d4af37]/30 selection:text-[#1c3b31] dark:selection:text-[#f4e297]">
      
      {/* Glassmorphic Navbar */}
      <Navbar onOpenBreathing={() => setIsBreathingOpen(true)} />

      {/* Main Page Body */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <HeroSection
          onOpenBreathing={() => setIsBreathingOpen(true)}
          onExploreClick={handleExploreClick}
        />

        {/* Content Container: Floating Sidebar + Video Gallery Grid */}
        <section id="topics" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Floating Left Sidebar (4 cols on lg screens, sticky) */}
            <div className="lg:col-span-4 xl:col-span-3">
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

            {/* Interactive Video Gallery (8 cols on lg, 9 on xl) */}
            <div className="lg:col-span-8 xl:col-span-9">
              <VideoGallery
                activeCategory={activeCategory}
                onSelectVideo={(video) => setSelectedVideo(video)}
                onCategoryChange={(cat) => setActiveCategory(cat)}
              />
            </div>

          </div>
        </section>

        {/* Content Columns: Live Events (Left) & Must-Read Articles (Right) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContentColumns
            onSelectEvent={(event) => setSelectedEvent(event)}
            onSelectArticle={(article) => setSelectedArticle(article)}
          />
        </div>

      </main>

      {/* Dynamic Footer with Daily Sages Quote & Community Links */}
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
