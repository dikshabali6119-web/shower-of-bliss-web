'use client';

import React from 'react';
import { 
  Calendar, 
  Clock, 
  Radio, 
  Users, 
  ArrowRight, 
  Sparkles, 
  Bell,
  Play
} from 'lucide-react';
import { UPCOMING_EVENTS } from '@/data/events';
import { LiveEvent } from '@/types';

interface LiveSatsangsSectionProps {
  onSelectEvent: (event: LiveEvent) => void;
}

export default function LiveSatsangsSection({ onSelectEvent }: LiveSatsangsSectionProps) {
  return (
    <section id="events" className="scroll-mt-28 py-12 md:py-18 relative">
      
      {/* Background Soft Sky Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-80 bg-[#38bdf8]/15 dark:bg-[#0284c7]/20 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0284c7]/15 dark:bg-[#162540] text-[#0284c7] dark:text-[#38bdf8] border border-[#0284c7]/30 text-xs font-bold mb-2 shadow-xs">
              <Calendar className="w-3.5 h-3.5 text-[#eab308] dark:text-[#facc15]" />
              <span>विश्वव्यापी सत्संग सभाएँ • 4 Live Gatherings</span>
            </div>

            <h2 className="font-serif-bliss text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Live Global Satsangs &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#eab308] dark:from-[#38bdf8] dark:via-[#facc15] dark:to-[#fde047]">
                Spiritual Gatherings
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium mt-1">
              Join Swami Amarjit Singh live for non-dual Vedanta discourse, Guruvani katha, and collective silence
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="flex items-center gap-1.5 text-xs font-bold text-[#0369a1] dark:text-[#7dd3fc] bg-[#e0f2fe] dark:bg-[#162540] px-3.5 py-1.5 rounded-full border border-[#0284c7]/40 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
              <span>यूट्यूब लाइव प्रसारण (@amarjit311)</span>
            </span>
          </div>
        </div>

        {/* 4 Satsang Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {UPCOMING_EVENTS.slice(0, 4).map((event) => (
            <div
              key={event.id}
              onClick={() => onSelectEvent(event)}
              className="glass-panel rounded-3xl p-6 gold-glow-card flex flex-col justify-between group relative overflow-hidden transition-all duration-300 border-2 border-[#eab308]/40 dark:border-[#eab308]/30 bg-white/95 dark:bg-[#111d33]/95 shadow-md hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              <div>
                {/* Event Type & Days Left Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0284c7] text-white shadow-xs">
                    {event.type}
                  </span>

                  {event.isLiveSoon ? (
                    <span className="flex items-center gap-1.5 text-[11px] font-bold text-[#854d0e] dark:text-[#fde047] bg-[#fef08a] dark:bg-[#1e293b] px-2.5 py-0.5 rounded-full border border-[#eab308]/60">
                      <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                      {event.daysRemaining} दिन शेष
                    </span>
                  ) : (
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                      {event.daysRemaining} दिन बाद
                    </span>
                  )}
                </div>

                {/* Date & Time */}
                <div className="flex items-center gap-2 text-xs font-bold text-[#0284c7] dark:text-[#38bdf8] mb-2.5">
                  <Calendar className="w-3.5 h-3.5 text-[#eab308]" />
                  <span>{event.date}</span>
                  <span>•</span>
                  <Clock className="w-3.5 h-3.5 text-[#eab308]" />
                  <span>{event.time}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif-bliss text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-[#0284c7] dark:group-hover:text-[#facc15] transition-colors mb-2">
                  {event.title}
                </h3>

                {/* Subtitle / Excerpt */}
                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                  {event.subtitle}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-[#0284c7]/15 dark:border-[#eab308]/20 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1 font-semibold">
                  <Users className="w-3.5 h-3.5 text-[#eab308]" />
                  {event.attendeesCount.toLocaleString()} साधक
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectEvent(event);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-bold shadow-xs transition-transform group-hover:scale-105 border border-[#facc15]"
                >
                  <Bell className="w-3 h-3 text-[#fef08a]" />
                  <span>RSVP</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
