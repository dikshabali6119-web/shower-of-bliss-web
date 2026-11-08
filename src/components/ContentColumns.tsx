'use client';

import React from 'react';
import { 
  Calendar, 
  Clock, 
  BookOpen, 
  Radio, 
  Users, 
  ArrowRight, 
  Sparkles, 
  Bell, 
  CheckCircle 
} from 'lucide-react';
import { UPCOMING_EVENTS } from '@/data/events';
import { MUST_READ_ARTICLES } from '@/data/articles';
import { LiveEvent, Article } from '@/types';

interface ContentColumnsProps {
  onSelectEvent: (event: LiveEvent) => void;
  onSelectArticle: (article: Article) => void;
}

export default function ContentColumns({
  onSelectEvent,
  onSelectArticle,
}: ContentColumnsProps) {
  return (
    <section id="content-columns" className="py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* LEFT COLUMN: Upcoming Live Events List (5 cols on lg) */}
        <div id="events" className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Section Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#2d5a4c]/10 dark:bg-[#3d7866]/30 text-[#2d5a4c] dark:text-[#d4af37]">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-bliss text-xl sm:text-2xl font-bold text-[#1c3b31] dark:text-[#f4fbf7]">
                  Upcoming Live Events
                </h3>
                <p className="text-xs text-[#5f7d72] dark:text-[#97b8aa]">
                  Global Satsangs &amp; Discourse with Swami Amarjit Singh
                </p>
              </div>
            </div>
            
            <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              Live Online
            </span>
          </div>

          {/* Events List Cards */}
          <div className="flex flex-col gap-4">
            {UPCOMING_EVENTS.map((event) => (
              <div
                key={event.id}
                className="glass-panel rounded-3xl p-5 gold-glow-card flex flex-col gap-3 group relative overflow-hidden transition-all duration-300"
              >
                {/* Event Type & Days Left Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#2d5a4c] text-white">
                    {event.type}
                  </span>

                  {event.isLiveSoon ? (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-amber-700 dark:text-[#f7e089] bg-amber-500/15 dark:bg-[#d4af37]/20 px-2 py-0.5 rounded-full border border-[#d4af37]/40">
                      <Radio className="w-3 h-3 text-red-500 animate-pulse" />
                      Live in {event.daysRemaining} days
                    </span>
                  ) : (
                    <span className="text-[11px] font-medium text-[#5f7d72] dark:text-[#97b8aa]">
                      In {event.daysRemaining} days
                    </span>
                  )}
                </div>

                {/* Date & Title */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#8b6e16] dark:text-[#d4af37] mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{event.date}</span>
                    <span>•</span>
                    <Clock className="w-3.5 h-3.5 ml-1" />
                    <span>{event.time}</span>
                  </div>

                  <h4 className="font-serif-bliss text-base sm:text-lg font-bold text-[#1c3b31] dark:text-[#f4fbf7] leading-snug group-hover:text-[#2d5a4c] dark:group-hover:text-[#d4af37] transition-colors">
                    {event.title}
                  </h4>

                  <p className="text-xs text-[#3d6355] dark:text-[#b4d2c4] line-clamp-2 mt-1 leading-relaxed">
                    {event.subtitle}
                  </p>
                </div>

                {/* Footer with RSVP trigger & Attendees count */}
                <div className="pt-3 border-t border-[#2d5a4c]/10 dark:border-[#d4af37]/15 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#5f7d72] dark:text-[#97b8aa] font-medium">
                    <Users className="w-3.5 h-3.5 text-[#2d5a4c] dark:text-[#d4af37]" />
                    <span>{event.attendeesCount.toLocaleString()} RSVP&apos;d</span>
                  </div>

                  <button
                    onClick={() => onSelectEvent(event)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2d5a4c]/10 dark:bg-[#3d7866]/30 hover:bg-[#2d5a4c] hover:text-white dark:hover:bg-[#2d5a4c] text-xs font-semibold text-[#2d5a4c] dark:text-[#e4f3eb] transition-all border border-[#2d5a4c]/20 hover:border-[#d4af37]"
                  >
                    <Bell className="w-3 h-3 text-[#d4af37]" />
                    <span>RSVP Free</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN: Must-Read Articles Grid (7 cols on lg) */}
        <div id="articles" className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Section Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#2d5a4c]/10 dark:bg-[#3d7866]/30 text-[#2d5a4c] dark:text-[#d4af37]">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-bliss text-xl sm:text-2xl font-bold text-[#1c3b31] dark:text-[#f4fbf7]">
                  Must-Read Reflections
                </h3>
                <p className="text-xs text-[#5f7d72] dark:text-[#97b8aa]">
                  Essays on Vedanta, Guruvani, and the Path to Mukti
                </p>
              </div>
            </div>

            <span className="text-xs text-[#8b6e16] dark:text-[#d4af37] font-semibold hidden sm:inline">
              By Swami Amarjit Singh
            </span>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MUST_READ_ARTICLES.map((article) => (
              <div
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="group cursor-pointer glass-panel rounded-3xl p-5 gold-glow-card flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Category & Reading Time */}
                  <div className="flex items-center justify-between text-[11px] text-[#5f7d72] dark:text-[#97b8aa] mb-2.5">
                    <span className="font-semibold text-[#8b6e16] dark:text-[#d4af37]">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3 text-[#2d5a4c] dark:text-[#d4af37]" />
                      {article.readingTime}
                    </span>
                  </div>

                  {/* Article Title */}
                  <h4 className="font-serif-bliss text-base font-bold text-[#1c3b31] dark:text-[#f4fbf7] leading-snug group-hover:text-[#2d5a4c] dark:group-hover:text-[#d4af37] transition-colors mb-2">
                    {article.title}
                  </h4>

                  {/* Excerpt */}
                  <p className="text-xs text-[#3d6355] dark:text-[#b4d2c4] line-clamp-3 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                </div>

                {/* Key takeaway preview & Action */}
                <div className="pt-3 border-t border-[#2d5a4c]/10 dark:border-[#d4af37]/15 flex items-center justify-between">
                  <span className="text-[11px] text-[#5f7d72] dark:text-[#97b8aa] font-medium">
                    {article.publishDate}
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#2d5a4c] dark:text-[#d4af37] group-hover:translate-x-0.5 transition-transform">
                    <span>Read reflection</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
