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
    inhale: { label: 'Inhale Prana', duration: 4, tip: 'Breathe in slowly through your nose into the abdomen' },
    hold1: { label: 'Hold & Retain', duration: 4, tip: 'Rest in pure stillness. Feel the golden energy expand' },
    exhale: { label: 'Exhale & Surrender', duration: 4, tip: 'Release all tension, anxiety, and thought slowly' },
    hold2: { label: 'Embrace the Void', duration: 4, tip: 'Remain quiet in the peaceful space between breaths' },
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
          // Advance phase
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
        className="relative w-full max-w-lg glass-panel rounded-3xl border border-[#d4af37]/60 shadow-2xl p-6 sm:p-8 bg-[#f4f8f5]/95 dark:bg-[#0c1813]/95 text-[#1c3b31] dark:text-[#f4fbf7] flex flex-col items-center text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls */}
        <div className="w-full flex items-center justify-between pb-4 border-b border-[#2d5a4c]/10 dark:border-[#d4af37]/20">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#2d5a4c]/10 dark:bg-[#3d7866]/30 text-[#2d5a4c] dark:text-[#d4af37]">
              <Wind className="w-4 h-4" />
            </span>
            <div className="text-left">
              <h3 className="font-serif-bliss text-base font-bold text-[#1c3b31] dark:text-[#f4fbf7]">
                Pranayama Breath Sanctuary
              </h3>
              <p className="text-[11px] text-[#5f7d72] dark:text-[#97b8aa]">
                4-4-4-4 Box Breathing by Amarjit
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-[#2d5a4c] dark:text-[#d4af37]"
              title={soundEnabled ? 'Mute singing bowl chime' : 'Enable singing bowl chime'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-stone-500 hover:text-stone-900 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Breathing Animated Visualizer */}
        <div className="my-10 relative flex items-center justify-center w-64 h-64">
          
          {/* Luminous Glowing Background Aura */}
          <div 
            className={`absolute inset-0 rounded-full bg-gradient-to-tr from-[#2d5a4c]/20 via-[#d4af37]/30 to-[#437a67]/20 blur-xl transition-all duration-1000 ${
              phase === 'inhale' || phase === 'hold1' ? 'scale-125 opacity-100' : 'scale-90 opacity-60'
            }`}
          />

          {/* Outer Ring */}
          <div className="absolute inset-4 rounded-full border border-[#d4af37]/40 border-dashed animate-spin-slow pointer-events-none" />

          {/* Dynamic Breathing Bubble */}
          <div 
            className={`w-44 h-44 rounded-full flex flex-col items-center justify-center transition-all duration-1000 ease-in-out border-2 border-[#d4af37] shadow-xl ${
              phase === 'inhale' 
                ? 'scale-115 bg-gradient-to-tr from-[#2d5a4c] to-[#3f7a67] text-[#f4e297]' 
                : phase === 'hold1'
                ? 'scale-115 bg-[#254d41] text-[#f4e297] ring-4 ring-[#d4af37]/40'
                : phase === 'exhale'
                ? 'scale-90 bg-gradient-to-tr from-[#1b382f] to-[#2d5a4c] text-[#d4af37]'
                : 'scale-90 bg-[#163028] text-[#a0c5b5]'
            }`}
          >
            <span className="font-serif-bliss text-3xl font-extrabold tracking-tight">
              {secondsLeft}s
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold mt-1">
              {current.label}
            </span>
          </div>

        </div>

        {/* Instructions */}
        <div className="max-w-xs mb-6">
          <p className="text-xs sm:text-sm text-[#3d6355] dark:text-[#b4d2c4] font-medium leading-relaxed">
            {current.tip}
          </p>
        </div>

        {/* Footer Metrics */}
        <div className="w-full flex items-center justify-between pt-4 border-t border-[#2d5a4c]/10 dark:border-[#d4af37]/20 text-xs text-[#5f7d72] dark:text-[#97b8aa]">
          <span className="flex items-center gap-1 font-semibold text-[#2d5a4c] dark:text-[#d4af37]">
            <Sparkles className="w-3.5 h-3.5" />
            Cycles Completed: {cyclesCompleted}
          </span>
          <button
            onClick={() => {
              setPhase('inhale');
              setSecondsLeft(4);
              setCyclesCompleted(0);
            }}
            className="flex items-center gap-1 hover:text-[#2d5a4c] dark:hover:text-[#d4af37] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>

      </div>
    </div>
  );
}
