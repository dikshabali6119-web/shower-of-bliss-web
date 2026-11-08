'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import DynamicFooter from '@/components/DynamicFooter';
import EventModal from '@/components/EventModal';
import BreathingModal from '@/components/BreathingModal';
import { UPCOMING_EVENTS } from '@/data/events';
import { LiveEvent } from '@/types';
import { Calendar, Clock, Radio, Users, Bell, Sparkles } from 'lucide-react';

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<LiveEvent | null>(null);
  const [isBreathingOpen, setIsBreathingOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <Navbar onOpenBreathing={() => setIsBreathingOpen(true)} />

      <main className="flex-1 py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0284c7]/15 dark:bg-[#162540] text-[#0369a1] dark:text-[#38bdf8] border border-[#0284c7]/30 text-xs font-bold mb-3">
            <Calendar className="w-4 h-4 text-[#eab308]" />
            <span>Satsang Calendar • लाइव सत्संग समागम</span>
          </div>

          <h1 className="font-serif-bliss text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            Upcoming Live Congregations &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#eab308] dark:from-[#38bdf8] dark:via-[#facc15] dark:to-[#fde047]">
              Satsangs
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            Join Swami Amarjit Singh online for global meditations, Guruvani discourses, and interactive Q&amp;A sessions.
          </p>
        </div>

        {/* Events Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {UPCOMING_EVENTS.map((event) => (
            <div
              key={event.id}
              className="glass-panel rounded-3xl p-6 sm:p-7 gold-glow-card flex flex-col justify-between transition-all duration-300 border-2 border-[#eab308]/40 dark:border-[#eab308]/30 bg-white/95 dark:bg-[#111d33]/95 shadow-xl hover:border-[#0284c7]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0284c7] text-white">
                    {event.type}
                  </span>

                  {event.isLiveSoon ? (
                    <span className="flex items-center gap-1.5 text-xs font-bold text-[#854d0e] dark:text-[#fde047] bg-[#fef08a] dark:bg-[#1e293b] px-3 py-1 rounded-full border border-[#eab308]/60">
                      <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                      Live in {event.daysRemaining} days
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      In {event.daysRemaining} days
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-[#0284c7] dark:text-[#38bdf8] mb-2">
                  <Calendar className="w-4 h-4 text-[#eab308]" />
                  <span>{event.date}</span>
                  <span>•</span>
                  <Clock className="w-4 h-4 text-[#eab308]" />
                  <span>{event.time}</span>
                </div>

                <h3 className="font-serif-bliss text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug mb-3">
                  {event.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {event.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#0284c7]/20 dark:border-[#eab308]/20 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                  <Users className="w-4 h-4 text-[#eab308]" />
                  {event.attendeesCount.toLocaleString()} Attending
                </span>

                <button
                  onClick={() => setSelectedEvent(event)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0284c7] to-[#0369a1] hover:from-[#0369a1] text-white text-xs font-bold border-2 border-[#eab308]/60 transition-all hover:scale-105 active:scale-95 shadow-md"
                >
                  <Bell className="w-3.5 h-3.5 text-[#fef08a]" />
                  <span>Reserve Free Seat</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </main>

      <DynamicFooter />
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      <BreathingModal isOpen={isBreathingOpen} onClose={() => setIsBreathingOpen(false)} />
    </div>
  );
}
