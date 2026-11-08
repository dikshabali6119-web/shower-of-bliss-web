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
        colors: ['#0284c7', '#38bdf8', '#eab308', '#facc15', '#fef08a']
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
        className="relative w-full max-w-lg glass-panel rounded-3xl border-2 border-[#eab308]/60 shadow-2xl p-6 sm:p-8 bg-white/95 dark:bg-[#111d33]/98 text-slate-900 dark:text-white flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#0284c7]/20 dark:border-[#eab308]/20">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-[#e0f2fe] dark:bg-[#162540] text-[#0284c7] dark:text-[#38bdf8] border border-[#0284c7]/30">
              <Calendar className="w-5 h-5 text-[#0284c7] dark:text-[#38bdf8]" />
            </span>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#0284c7] dark:text-[#facc15]">
                लाइव सत्संग पंजीयन
              </span>
              <h3 className="font-serif-bliss text-base font-bold text-slate-900 dark:text-white">
                स्वामी अमरजीत सिंह सत्संग संगम
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-8 text-center flex flex-col items-center animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-[#0284c7] text-white flex items-center justify-center mb-4 border-2 border-[#facc15] shadow-lg">
              <CheckCircle2 className="w-8 h-8 text-[#fef08a]" />
            </div>
            <h4 className="font-serif-bliss text-2xl font-bold text-slate-900 dark:text-white mb-2">
              सत्संग पंजीयन सफल रहा!
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mb-6 leading-relaxed">
              सत्संग का लिंक व रिमाइंडर आपके ईमेल (<span className="font-semibold text-[#0284c7] dark:text-[#38bdf8]">{email}</span>) पर भेज दिया गया है।
            </p>

            <button
              onClick={downloadIcs}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0284c7] to-[#0369a1] text-white text-xs font-bold border border-[#eab308]/60 hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              <Download className="w-4 h-4 text-[#fef08a]" />
              <span>कैलेंडर में जोड़ें (.ics)</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleRegister} className="mt-5 flex flex-col gap-4">
            
            {/* Event Summary Card */}
            <div className="p-4 rounded-2xl bg-[#e0f2fe]/50 dark:bg-[#162540]/60 border border-[#0284c7]/20 flex flex-col gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284c7] dark:text-[#38bdf8]">
                {event.type}
              </span>
              <h4 className="font-serif-bliss text-base font-bold text-slate-900 dark:text-white leading-snug">
                {event.title}
              </h4>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-300 font-medium">
                <span className="flex items-center gap-1 text-[#0284c7] dark:text-[#facc15] font-bold">
                  <Calendar className="w-3.5 h-3.5 text-[#eab308]" />
                  {event.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#eab308]" />
                  {event.time}
                </span>
              </div>
            </div>

            {/* Inputs */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                आपका नाम
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="उदा. अमित कुमार"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#172554]/40 text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0284c7]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                ईमेल पता (सत्संग लिंक हेतु)
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="उदा. devotee@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#172554]/40 text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-[#0284c7]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 w-full py-3 rounded-full bg-gradient-to-r from-[#0284c7] via-[#0284c7] to-[#0369a1] text-white font-bold text-xs sm:text-sm border-2 border-[#eab308]/60 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-2"
            >
              <Bell className="w-4 h-4 text-[#fef08a]" />
              <span>सत्संग में स्थान आरक्षित करें</span>
            </button>

            <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
              यह सत्संग YouTube लाइव (@amarjit311) पर पूर्णतः निःशुल्क प्रसारित होगा।
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
