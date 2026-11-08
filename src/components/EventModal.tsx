'use client';

import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, Bell, Sparkles, Download } from 'lucide-react';
import { LiveEvent } from '@/types';
import confetti from 'canvas-confetti';

interface EventModalProps {
  event: LiveEvent | null;
  onClose: () => void;
}

export default function EventModal({ event, onClose }: EventModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!event) return null;

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSuccess(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#2d5a4c', '#d4af37', '#e2f0e8', '#ffd700']
      });
    } catch {
      // ignore
    }
  };

  const downloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Shower of Bliss//Meditation Events//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Shower of Bliss: ${event.title}`,
      `DESCRIPTION:${event.description.replace(/\n/g, ' ')} - YouTube Channel @amarjit311`,
      'LOCATION:YouTube Live Stream (@amarjit311)',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${event.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg glass-panel rounded-3xl border border-[#d4af37]/60 shadow-2xl p-6 sm:p-8 bg-[#f4f8f5]/95 dark:bg-[#0c1813]/95 text-[#1c3b31] dark:text-[#f4fbf7] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#2d5a4c]/10 dark:border-[#d4af37]/20">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#2d5a4c]/10 dark:bg-[#3d7866]/30 text-[#2d5a4c] dark:text-[#d4af37]">
              <Calendar className="w-4 h-4" />
            </span>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#8b6e16] dark:text-[#d4af37]">
                Live Satsang RSVP
              </span>
              <h3 className="font-serif-bliss text-base font-bold text-[#1c3b31] dark:text-[#f4fbf7]">
                Shower of Bliss Community
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-stone-500 hover:text-stone-900 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-8 text-center flex flex-col items-center animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-[#2d5a4c] text-[#f4e297] flex items-center justify-center mb-4 border border-[#d4af37] shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif-bliss text-2xl font-bold text-[#1c3b31] dark:text-[#f4fbf7] mb-2">
              Your Seat is Reserved
            </h4>
            <p className="text-xs sm:text-sm text-[#3d6355] dark:text-[#b4d2c4] max-w-sm mb-6">
              A private reminder link has been sent for <strong>{event.title}</strong>. We look forward to meditating in unity.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button
                onClick={downloadIcs}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#2d5a4c] text-white text-xs font-semibold hover:bg-[#23483c] transition-colors border border-[#d4af37]/40"
              >
                <Download className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Add to Calendar (.ics)</span>
              </button>
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2.5 rounded-full glass-panel text-xs font-semibold text-[#1c3b31] dark:text-[#f4fbf7] hover:bg-white dark:hover:bg-[#1a382c] border border-[#2d5a4c]/20"
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          <div className="pt-4 flex flex-col gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded-md bg-[#2d5a4c] text-white text-[10px] font-semibold">
                  {event.type}
                </span>
                <span className="text-xs text-[#8b6e16] dark:text-[#d4af37] font-semibold">
                  {event.date}
                </span>
              </div>
              <h4 className="font-serif-bliss text-lg sm:text-xl font-bold text-[#1c3b31] dark:text-[#f4fbf7] leading-snug">
                {event.title}
              </h4>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/50 dark:bg-[#163026]/50 border border-[#2d5a4c]/10 dark:border-[#d4af37]/20 flex flex-col gap-2 text-xs text-[#3d6355] dark:text-[#b4d2c4]">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#2d5a4c] dark:text-[#d4af37]" />
                <span>Time: <strong>{event.time}</strong> ({event.timezone})</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#2d5a4c] dark:text-[#d4af37]" />
                <span>Platform: YouTube Live Stream (@amarjit311)</span>
              </div>
            </div>

            <p className="text-xs text-[#5f7d72] dark:text-[#97b8aa] leading-relaxed">
              {event.description}
            </p>

            <form onSubmit={handleRegister} className="flex flex-col gap-3 pt-2">
              <div>
                <label className="block text-[11px] font-semibold text-[#1c3b31] dark:text-[#d4e8de] mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Radhika Sharma"
                  className="w-full px-3.5 py-2 text-xs rounded-xl glass-panel border border-[#2d5a4c]/20 dark:border-[#d4af37]/30 focus:outline-hidden focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#1c3b31] dark:text-[#d4e8de] mb-1">
                  Email for Stream Reminder Link *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@bliss.com"
                  className="w-full px-3.5 py-2 text-xs rounded-xl glass-panel border border-[#2d5a4c]/20 dark:border-[#d4af37]/30 focus:outline-hidden focus:border-[#d4af37]"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#2d5a4c] hover:bg-[#23483c] text-white text-xs font-semibold shadow-md transition-transform hover:scale-[1.01] border border-[#d4af37]/40"
              >
                <Bell className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Reserve Free Seat & Reminder</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
