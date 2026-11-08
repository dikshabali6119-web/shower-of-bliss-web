'use client';

import React, { useState, useEffect } from 'react';
import { X, Wind, Sparkles, Volume2, VolumeX, RotateCcw } from 'lucide-react';
import { soundSynth } from '@/utils/soundSynth';

interface BreathingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Phase = 'inhale' | 'hold1' | 'exhale' | 'hold2';

export default function BreathingModal({ isOpen, onClose }: BreathingModalProps) {
  const [phase, setPhase] = useState<Phase>('inhale');
  const [secondsLeft, setSecondsLeft] = useState(4);
  const [cyclesCompleted, setCyclesCompleted] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const phaseConfig = {
    inhale: { label: 'श्वास भीतर लें (पूरक)', duration: 4, tip: 'धीरे-धीरे नासिका से श्वास भीतर भरें और ੴ का स्मरण करें' },
    hold1: { label: 'श्वास रोकें (कुंभक)', duration: 4, tip: 'भीतर पूर्ण शांति में स्थित रहें। दिव्य प्रकाश का अनुभव करें' },
    exhale: { label: 'श्वास छोड़ें (रेचक)', duration: 4, tip: 'समस्त तनाव, चिंता और विचारों को पूरी तरह समर्पित कर दें' },
    hold2: { label: 'मौन विश्राम (शून्य)', duration: 4, tip: 'दो श्वासों के बीच के परम मौन व शून्य स्वरूप में विश्राम करें' },
  };

  useEffect(() => {
    if (!isOpen) {
      setPhase('inhale');
      setSecondsLeft(4);
      setCyclesCompleted(0);
      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setPhase((currentPhase) => {
            let next: Phase = 'inhale';
            if (currentPhase === 'inhale') next = 'hold1';
            else if (currentPhase === 'hold1') next = 'exhale';
            else if (currentPhase === 'exhale') next = 'hold2';
            else if (currentPhase === 'hold2') {
              next = 'inhale';
              setCyclesCompleted((c) => c + 1);
            }

            if (soundEnabled) {
              soundSynth.playSingingBowl(next === 'inhale' ? 432 : next === 'exhale' ? 324 : 528);
            }

            return next;
          });
          return 4;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen, soundEnabled]);

  if (!isOpen) return null;

  const current = phaseConfig[phase];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg glass-panel rounded-3xl border-2 border-[#eab308]/60 shadow-2xl p-6 sm:p-8 bg-white/95 dark:bg-[#111d33]/98 text-slate-900 dark:text-white flex flex-col items-center text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls */}
        <div className="w-full flex items-center justify-between pb-4 border-b border-[#0284c7]/20 dark:border-[#eab308]/20">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-[#e0f2fe] dark:bg-[#162540] text-[#0284c7] dark:text-[#38bdf8] border border-[#0284c7]/30">
              <Wind className="w-5 h-5 text-[#0284c7] dark:text-[#38bdf8]" />
            </span>
            <div className="text-left">
              <h3 className="font-serif-bliss text-base font-bold text-slate-900 dark:text-white">
                प्राणायाम व सिमरन श्वास
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-300">
                ४-४-४-४ श्वास चक्र (स्वामी अमरजीत सिंह जी)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-[#0284c7] dark:text-[#facc15] transition-colors"
              title={soundEnabled ? 'घंटी बंद करें' : 'घंटी चालू करें'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Breathing Animated Visualizer in Sky Blue & Golden Yellow */}
        <div className="my-10 relative flex items-center justify-center w-64 h-64">
          
          {/* Luminous Glowing Background Aura */}
          <div 
            className={`absolute inset-0 rounded-full bg-gradient-to-tr from-[#38bdf8]/30 via-[#facc15]/35 to-[#0284c7]/25 blur-2xl transition-all duration-1000 ${
              phase === 'inhale' || phase === 'hold1' ? 'scale-125 opacity-100' : 'scale-90 opacity-60'
            }`}
          />

          {/* Outer Ring */}
          <div className="absolute inset-4 rounded-full border-2 border-[#eab308]/40 border-dashed animate-spin-slow pointer-events-none" />

          {/* Dynamic Breathing Bubble */}
          <div 
            className={`w-44 h-44 rounded-full flex flex-col items-center justify-center transition-all duration-1000 ease-in-out border-3 border-[#facc15] shadow-xl ${
              phase === 'inhale' 
                ? 'scale-115 bg-gradient-to-tr from-[#0284c7] to-[#38bdf8] text-white shadow-[0_0_35px_rgba(56,189,248,0.5)]' 
                : phase === 'hold1'
                ? 'scale-115 bg-gradient-to-tr from-[#eab308] to-[#facc15] text-[#0f172a] ring-4 ring-[#facc15]/60 shadow-[0_0_35px_rgba(250,204,21,0.6)]'
                : phase === 'exhale'
                ? 'scale-90 bg-gradient-to-tr from-[#0369a1] to-[#0284c7] text-white'
                : 'scale-90 bg-gradient-to-tr from-[#1e293b] to-[#0f172a] text-[#facc15]'
            }`}
          >
            <span className="font-serif-bliss text-4xl font-extrabold tracking-tight">
              {secondsLeft}s
            </span>
            <span className="text-[11px] uppercase tracking-wider font-bold mt-1 px-3 text-center">
              {current.label}
            </span>
          </div>

        </div>

        {/* Instructions */}
        <div className="max-w-xs mb-6">
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
            {current.tip}
          </p>
        </div>

        {/* Footer Metrics */}
        <div className="w-full flex items-center justify-between pt-4 border-t border-[#0284c7]/20 dark:border-[#eab308]/20 text-xs text-slate-600 dark:text-slate-300">
          <span className="flex items-center gap-1.5 font-bold text-[#0284c7] dark:text-[#facc15]">
            <Sparkles className="w-3.5 h-3.5 text-[#eab308]" />
            साधना चक्र पूर्ण: {cyclesCompleted}
          </span>
          <button
            onClick={() => {
              setPhase('inhale');
              setSecondsLeft(4);
              setCyclesCompleted(0);
            }}
            className="flex items-center gap-1 hover:text-[#0284c7] dark:hover:text-[#facc15] transition-colors font-semibold"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>पुनः प्रारंभ</span>
          </button>
        </div>

      </div>
    </div>
  );
}
