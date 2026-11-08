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
              <div className="p-2.5 rounded-2xl bg-[#e0f2fe] dark:bg-[#162540] text-[#0284c7] dark:text-[#38bdf8] border border-[#0284c7]/30">
                <Calendar className="w-5 h-5 text-[#0284c7] dark:text-[#38bdf8]" />
              </div>
              <div>
                <h3 className="font-serif-bliss text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  आगामी लाइव सत्संग
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  स्वामी अमरजीत सिंह जी के साथ पावन विचार
                </p>
              </div>
            </div>
            
            <span className="flex items-center gap-1.5 text-xs font-bold text-[#0369a1] dark:text-[#7dd3fc] bg-[#e0f2fe] dark:bg-[#162540] px-3 py-1 rounded-full border border-[#0284c7]/40 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              ऑनलाइन
            </span>
          </div>

          {/* Events List Cards */}
          <div className="flex flex-col gap-4">
            {UPCOMING_EVENTS.map((event) => (
              <div
                key={event.id}
                className="glass-panel rounded-3xl p-5 sm:p-6 gold-glow-card flex flex-col gap-3 group relative overflow-hidden transition-all duration-300 border-2 border-[#eab308]/40 dark:border-[#eab308]/30 bg-white/90 dark:bg-[#111d33]/90"
              >
                {/* Event Type & Days Left Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full bg-[#0284c7] text-white shadow-xs">
                    {event.type}
                  </span>

                  {event.isLiveSoon ? (
                    <span className="flex items-center gap-1.5 text-xs font-bold text-[#854d0e] dark:text-[#fde047] bg-[#fef08a] dark:bg-[#1e293b] px-2.5 py-0.5 rounded-full border border-[#eab308]/60">
                      <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                      {event.daysRemaining} दिन शेष
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {event.daysRemaining} दिन बाद
                    </span>
                  )}
                </div>

                {/* Date & Title */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0284c7] dark:text-[#38bdf8] mb-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#eab308]" />
                    <span>{event.date}</span>
                    <span>•</span>
                    <Clock className="w-3.5 h-3.5 text-[#eab308]" />
                    <span>{event.time}</span>
                  </div>

                  <h4 className="font-serif-bliss text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-[#0284c7] dark:group-hover:text-[#facc15] transition-colors">
                    {event.title}
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mt-1.5 leading-relaxed">
                    {event.subtitle}
                  </p>
                </div>

                {/* Footer with RSVP trigger & Attendees count */}
                <div className="pt-3 border-t border-[#0284c7]/20 dark:border-[#eab308]/20 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 font-medium">
                    <Users className="w-3.5 h-3.5 text-[#eab308]" />
                    <span>{event.attendeesCount.toLocaleString()} भक्त जुड़े</span>
                  </div>

                  <button
                    onClick={() => onSelectEvent(event)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#e0f2fe] dark:bg-[#1e293b] hover:bg-[#0284c7] hover:text-white dark:hover:bg-[#0284c7] text-xs font-bold text-[#0284c7] dark:text-[#7dd3fc] transition-all border border-[#0284c7]/40 hover:border-[#0284c7] shadow-xs active:scale-95"
                  >
                    <Bell className="w-3.5 h-3.5 text-[#eab308] group-hover:text-white" />
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
              <div className="p-2.5 rounded-2xl bg-[#fef08a] dark:bg-[#162540] text-[#854d0e] dark:text-[#fde047] border border-[#eab308]/40">
                <BookOpen className="w-5 h-5 text-[#854d0e] dark:text-[#fde047]" />
              </div>
              <div>
                <h3 className="font-serif-bliss text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  पावन विचार व लेख
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  वेदांत, गुरुवाणी, उपदेश सारम् व मुक्ति का मार्ग
                </p>
              </div>
            </div>

            <span className="text-xs text-[#0284c7] dark:text-[#38bdf8] font-bold hidden sm:inline bg-[#e0f2fe] dark:bg-[#1e293b] px-3 py-1 rounded-full border border-[#0284c7]/30">
              स्वामी अमरजीत सिंह जी द्वारा
            </span>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MUST_READ_ARTICLES.map((article) => (
              <div
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="group cursor-pointer glass-panel rounded-3xl p-5 sm:p-6 gold-glow-card flex flex-col justify-between transition-all duration-300 border-2 border-[#eab308]/40 dark:border-[#eab308]/30 bg-white/90 dark:bg-[#111d33]/90"
              >
                <div>
                  {/* Category & Reading Time */}
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2.5">
                    <span className="font-bold text-[#0284c7] dark:text-[#38bdf8]">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[11px] font-semibold">
                      <Clock className="w-3 h-3 text-[#eab308]" />
                      {article.readingTime}
                    </span>
                  </div>

                  {/* Article Title */}
                  <h4 className="font-serif-bliss text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-[#0284c7] dark:group-hover:text-[#facc15] transition-colors mb-2">
                    {article.title}
                  </h4>

                  {/* Excerpt */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                </div>

                {/* Key takeaway preview & Action */}
                <div className="pt-3 border-t border-[#0284c7]/20 dark:border-[#eab308]/20 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    {article.publishDate}
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] dark:text-[#facc15] group-hover:translate-x-1 transition-transform">
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
