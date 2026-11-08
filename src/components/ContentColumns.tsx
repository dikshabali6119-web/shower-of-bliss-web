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
  Bell 
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
    <section id="content-columns" className="py-10 md:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* LEFT COLUMN: Upcoming Live Satsangs List (5 cols on lg) */}
        <div id="events" className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Section Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#fef3e2] dark:bg-[#28211b] text-[#c25e00] dark:text-[#fbbf24]">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-bliss text-xl sm:text-2xl font-bold text-[#1f1b16] dark:text-[#faf6ed]">
                  आगामी लाइव सत्संग
                </h3>
                <p className="text-xs text-[#857865] dark:text-[#d3c9b7]">
                  स्वामी अमरजीत सिंह जी के साथ पावन विचार
                </p>
              </div>
            </div>
            
            <span className="flex items-center gap-1 text-[11px] font-semibold text-[#b45309] dark:text-[#fbbf24] bg-[#fef3e2] dark:bg-[#28211b] px-2.5 py-1 rounded-full border border-[#d97706]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] animate-ping" />
              ऑनलाइन
            </span>
          </div>

          {/* Events List Cards */}
          <div className="flex flex-col gap-4">
            {UPCOMING_EVENTS.map((event) => (
              <div
                key={event.id}
                className="glass-panel rounded-3xl p-5 gold-glow-card flex flex-col gap-3 group relative overflow-hidden transition-all duration-300 border border-[#d97706]/25"
              >
                {/* Event Type & Days Left Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#c25e00] text-white">
                    {event.type}
                  </span>

                  {event.isLiveSoon ? (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-[#b45309] dark:text-[#fcd34d] bg-[#fef3e2] dark:bg-[#28211b] px-2 py-0.5 rounded-full border border-[#d97706]/40">
                      <Radio className="w-3 h-3 text-red-500 animate-pulse" />
                      {event.daysRemaining} दिन शेष
                    </span>
                  ) : (
                    <span className="text-[11px] font-medium text-[#857865] dark:text-[#d3c9b7]">
                      {event.daysRemaining} दिन बाद
                    </span>
                  )}
                </div>

                {/* Date & Title */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#c25e00] dark:text-[#fbbf24] mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{event.date}</span>
                    <span>•</span>
                    <Clock className="w-3.5 h-3.5 ml-1" />
                    <span>{event.time}</span>
                  </div>

                  <h4 className="font-serif-bliss text-base sm:text-lg font-bold text-[#1f1b16] dark:text-[#faf6ed] leading-snug group-hover:text-[#c25e00] dark:group-hover:text-[#fbbf24] transition-colors">
                    {event.title}
                  </h4>

                  <p className="text-xs text-[#574d3f] dark:text-[#d3c9b7] line-clamp-2 mt-1 leading-relaxed">
                    {event.subtitle}
                  </p>
                </div>

                {/* Footer with RSVP trigger & Attendees count */}
                <div className="pt-3 border-t border-[#d97706]/15 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#857865] dark:text-[#d3c9b7] font-medium">
                    <Users className="w-3.5 h-3.5 text-[#d97706]" />
                    <span>{event.attendeesCount.toLocaleString()} भक्त जुड़े</span>
                  </div>

                  <button
                    onClick={() => onSelectEvent(event)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fef3e2] dark:bg-[#28211b] hover:bg-[#c25e00] hover:text-white dark:hover:bg-[#c25e00] text-xs font-semibold text-[#c25e00] dark:text-[#fcd34d] transition-all border border-[#d97706]/30 hover:border-[#d97706]"
                  >
                    <Bell className="w-3 h-3 text-[#d97706]" />
                    <span>सत्संग से जुड़ें</span>
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
              <div className="p-2 rounded-xl bg-[#fef3e2] dark:bg-[#28211b] text-[#c25e00] dark:text-[#fbbf24]">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-bliss text-xl sm:text-2xl font-bold text-[#1f1b16] dark:text-[#faf6ed]">
                  पावन विचार व लेख
                </h3>
                <p className="text-xs text-[#857865] dark:text-[#d3c9b7]">
                  वेदांत, गुरुवाणी, उपदेश सारम् व मुक्ति का मार्ग
                </p>
              </div>
            </div>

            <span className="text-xs text-[#c25e00] dark:text-[#fbbf24] font-semibold hidden sm:inline">
              स्वामी अमरजीत सिंह जी द्वारा
            </span>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MUST_READ_ARTICLES.map((article) => (
              <div
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="group cursor-pointer glass-panel rounded-3xl p-5 gold-glow-card flex flex-col justify-between transition-all duration-300 border border-[#d97706]/25"
              >
                <div>
                  {/* Category & Reading Time */}
                  <div className="flex items-center justify-between text-[11px] text-[#857865] dark:text-[#d3c9b7] mb-2.5">
                    <span className="font-semibold text-[#c25e00] dark:text-[#fbbf24]">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3 text-[#d97706]" />
                      {article.readingTime}
                    </span>
                  </div>

                  {/* Article Title */}
                  <h4 className="font-serif-bliss text-base font-bold text-[#1f1b16] dark:text-[#faf6ed] leading-snug group-hover:text-[#c25e00] dark:group-hover:text-[#fbbf24] transition-colors mb-2">
                    {article.title}
                  </h4>

                  {/* Excerpt */}
                  <p className="text-xs text-[#574d3f] dark:text-[#d3c9b7] line-clamp-3 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                </div>

                {/* Key takeaway preview & Action */}
                <div className="pt-3 border-t border-[#d97706]/15 flex items-center justify-between">
                  <span className="text-[11px] text-[#857865] dark:text-[#d3c9b7] font-medium">
                    {article.publishDate}
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#c25e00] dark:text-[#fbbf24] group-hover:translate-x-0.5 transition-transform">
                    <span>पूरा लेख पढ़ें</span>
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
