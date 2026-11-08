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
        colors: ['#c25e00', '#d97706', '#f59e0b', '#fbbf24', '#fef3e2']
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
        className="relative w-full max-w-lg glass-panel rounded-3xl border border-[#d97706]/60 shadow-2xl p-6 sm:p-8 bg-[#fcf9f2]/98 dark:bg-[#141722]/98 text-[#1f1b16] dark:text-[#faf6ed] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#d97706]/20">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#fef3e2] dark:bg-[#28211b] text-[#c25e00] dark:text-[#fbbf24]">
              <Calendar className="w-4 h-4" />
            </span>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#b45309] dark:text-[#fbbf24]">
                लाइव सत्संग पंजीयन
              </span>
              <h3 className="font-serif-bliss text-base font-bold text-[#1f1b16] dark:text-[#faf6ed]">
                स्वामी अमरजीत सिंह सत्संग संगम
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
            <div className="w-14 h-14 rounded-full bg-[#c25e00] text-white flex items-center justify-center mb-4 border border-[#fbbf24] shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif-bliss text-2xl font-bold text-[#1f1b16] dark:text-[#faf6ed] mb-2">
              सत्संग पंजीयन सफल रहा!
            </h4>
            <p className="text-xs sm:text-sm text-[#574d3f] dark:text-[#d3c9b7] max-w-sm mb-6">
              <strong>{event.title}</strong> के लिए आपका स्थान सुरक्षित कर लिया गया है। सत्संग का लिंक आपके ईमेल पर भेज दिया गया है।
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button
                onClick={downloadIcs}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#c25e00] text-white text-xs font-semibold hover:bg-[#a34f00] transition-colors border border-[#fbbf24]/40"
              >
                <Download className="w-3.5 h-3.5 text-[#fbbf24]" />
                <span>कैलेंडर में जोड़ें (.ics)</span>
              </button>
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2.5 rounded-full glass-panel text-xs font-semibold text-[#1f1b16] dark:text-[#faf6ed] hover:bg-white dark:hover:bg-[#28211b] border border-[#d97706]/20"
              >
                वेबसाइट पर लौटें
              </button>
            </div>
          </div>
        ) : (
          <div className="pt-4 flex flex-col gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded-md bg-[#c25e00] text-white text-[10px] font-semibold">
                  {event.type}
                </span>
                <span className="text-xs text-[#b45309] dark:text-[#fbbf24] font-semibold">
                  {event.date}
                </span>
              </div>
              <h4 className="font-serif-bliss text-lg sm:text-xl font-bold text-[#1f1b16] dark:text-[#faf6ed] leading-snug">
                {event.title}
              </h4>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#fef3e2]/70 dark:bg-[#28211b]/70 border border-[#d97706]/20 flex flex-col gap-2 text-xs text-[#574d3f] dark:text-[#d3c9b7]">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#c25e00] dark:text-[#fbbf24]" />
                <span>समय: <strong>{event.time}</strong> ({event.timezone})</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c25e00] dark:text-[#fbbf24]" />
                <span>माध्यम: YouTube Live Stream (@amarjit311)</span>
              </div>
            </div>

            <p className="text-xs text-[#857865] dark:text-[#d3c9b7] leading-relaxed">
              {event.description}
            </p>

            <form onSubmit={handleRegister} className="flex flex-col gap-3 pt-2">
              <div>
                <label className="block text-[11px] font-semibold text-[#1f1b16] dark:text-[#faf6ed] mb-1">
                  आपका शुभ नाम
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="उदा. हरप्रीत सिंह"
                  className="w-full px-3.5 py-2 text-xs rounded-xl glass-panel border border-[#d97706]/25 dark:border-[#d97706]/40 focus:outline-hidden focus:border-[#d97706]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#1f1b16] dark:text-[#faf6ed] mb-1">
                  सत्संग लिंक हेतु ईमेल *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@bliss.com"
                  className="w-full px-3.5 py-2 text-xs rounded-xl glass-panel border border-[#d97706]/25 dark:border-[#d97706]/40 focus:outline-hidden focus:border-[#d97706]"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#c25e00] hover:bg-[#a34f00] text-white text-xs font-semibold shadow-md transition-transform hover:scale-[1.01] border border-[#fbbf24]/40"
              >
                <Bell className="w-3.5 h-3.5 text-[#fbbf24]" />
                <span>निःशुल्क स्थान आरक्षित करें</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
