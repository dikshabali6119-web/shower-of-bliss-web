'use client';

import React from 'react';
import { 
  Sparkles, 
  Compass, 
  HeartHandshake, 
  Flame, 
  Music, 
  Moon, 
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';
import { TOPIC_ITEMS } from '@/data/topics';

interface FloatingSidebarProps {
  activeCategory: string;
  onSelectCategory: (categoryKey: string) => void;
  onSelectEvents: () => void;
}

export default function FloatingSidebar({
  activeCategory,
  onSelectCategory,
  onSelectEvents,
}: FloatingSidebarProps) {
  
  const getIcon = (iconName: string, isSelected: boolean) => {
    const iconClass = `w-4 h-4 transition-colors ${
      isSelected 
        ? 'text-[#d4af37]' 
        : 'text-[#2d5a4c] dark:text-[#9bc4b3] group-hover:text-[#d4af37]'
    }`;

    switch (iconName) {
      case 'Compass':
        return <Compass className={iconClass} />;
      case 'HeartHandshake':
        return <HeartHandshake className={iconClass} />;
      case 'Flame':
        return <Flame className={iconClass} />;
      case 'Music':
        return <Music className={iconClass} />;
      case 'Moon':
        return <Moon className={iconClass} />;
      case 'Calendar':
        return <Calendar className={iconClass} />;
      case 'Sparkles':
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  return (
    <aside className="w-full">
      {/* Desktop Sticky Sidebar Card */}
      <div className="glass-panel rounded-3xl p-5 border border-[#d4af37]/35 shadow-sm sticky top-24">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#2d5a4c]/10 dark:border-[#d4af37]/15">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#2d5a4c]/10 dark:bg-[#3d7866]/20 text-[#2d5a4c] dark:text-[#d4af37]">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif-bliss text-base font-bold text-[#1c3b31] dark:text-[#f4fbf7]">
                Explore by Topic
              </h3>
              <p className="text-[11px] text-[#5f7d72] dark:text-[#9bbcb0]">
                Vedic disciplines & practices
              </p>
            </div>
          </div>
          <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-[#d4af37]/15 text-[#917117] dark:text-[#e8c65f]">
            Curated
          </span>
        </div>

        {/* Topic List */}
        <nav className="flex flex-col gap-1.5" aria-label="Topic navigation">
          {TOPIC_ITEMS.map((topic) => {
            const isEvents = topic.id === 'upcoming-events';
            const isSelected = !isEvents && activeCategory === topic.categoryKey;

            return (
              <button
                key={topic.id}
                onClick={() => {
                  if (isEvents) {
                    onSelectEvents();
                  } else if (topic.categoryKey) {
                    onSelectCategory(topic.categoryKey);
                  }
                }}
                className={`group flex items-center justify-between w-full p-2.5 rounded-2xl text-left transition-all duration-200 border ${
                  isSelected
                    ? 'bg-[#2d5a4c] text-white border-[#d4af37] shadow-sm'
                    : 'bg-white/40 dark:bg-[#163026]/40 text-[#1c3b31] dark:text-[#d4e8de] border-transparent hover:bg-white/80 dark:hover:bg-[#1d3d31]/80 hover:border-[#d4af37]/40'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`p-1.5 rounded-xl transition-colors ${
                      isSelected
                        ? 'bg-[#1b382f] text-[#d4af37]'
                        : 'bg-[#e7f0eb] dark:bg-[#10241c] text-[#2d5a4c]'
                    }`}
                  >
                    {getIcon(topic.iconName, isSelected)}
                  </div>

                  <div className="flex flex-col min-w-0">
                    <span className={`text-xs font-semibold truncate ${
                      isSelected ? 'text-white' : 'text-[#1c3b31] dark:text-[#e4f3ea]'
                    }`}>
                      {topic.title}
                    </span>
                    <span className={`text-[10px] truncate ${
                      isSelected ? 'text-emerald-100' : 'text-[#5f7d72] dark:text-[#8ea99d]'
                    }`}>
                      {topic.subtitle}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0 ml-2">
                  <span
                    className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-[#1b382f] text-[#d4af37]'
                        : 'bg-[#e2ede6] dark:bg-[#12281f] text-[#3d6355] dark:text-[#a1c2b5]'
                    }`}
                  >
                    {topic.count}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${
                    isSelected ? 'translate-x-0.5 text-[#d4af37]' : 'text-stone-400 group-hover:translate-x-0.5'
                  }`} />
                </div>
              </button>
            );
          })}
        </nav>

        {/* Ambient Channel Note */}
        <div className="mt-5 p-3.5 rounded-2xl bg-gradient-to-br from-[#2d5a4c]/10 to-[#d4af37]/10 dark:from-[#2d5a4c]/20 dark:to-[#d4af37]/20 border border-[#d4af37]/30 text-center">
          <p className="text-[11px] font-medium text-[#2d5a4c] dark:text-[#cde4d8] leading-relaxed">
            ੴ &ldquo;Vedanta, Guruvani, and Meditation dissolve the illusion of duality and lead us towards true liberation.&rdquo;
          </p>
          <span className="block mt-1 text-[10px] font-semibold text-[#8b6e16] dark:text-[#d4af37]">
            — Swami Amarjit Singh (Sant Nikka Singh Ji Lineage)
          </span>
        </div>

      </div>
    </aside>
  );
}
