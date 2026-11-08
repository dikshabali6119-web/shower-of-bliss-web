'use client';

import React from 'react';
import { 
  Sparkles, 
  Compass, 
  HeartHandshake, 
  Flame, 
  Music, 
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
        ? 'text-white' 
        : 'text-[#c25e00] dark:text-[#fbbf24] group-hover:text-[#c25e00]'
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
      <div className="glass-panel rounded-3xl p-5 border border-[#d97706]/35 shadow-sm sticky top-24">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#d97706]/15">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#fef3e2] dark:bg-[#28211b] text-[#c25e00] dark:text-[#fbbf24]">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif-bliss text-base font-bold text-[#1f1b16] dark:text-[#faf6ed]">
                विषय अनुसार सत्संग
              </h3>
              <p className="text-[11px] text-[#857865] dark:text-[#d3c9b7]">
                वेदांत, गीता, सूफी व कुदरत
              </p>
            </div>
          </div>
          <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-[#fef3e2] dark:bg-[#28211b] text-[#c25e00] dark:text-[#fbbf24] border border-[#d97706]/30">
            चयन
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
                    ? 'bg-[#c25e00] text-white border-[#d97706] shadow-sm'
                    : 'bg-white/60 dark:bg-[#1c2334]/60 text-[#1f1b16] dark:text-[#faf6ed] border-transparent hover:bg-white dark:hover:bg-[#28211b] hover:border-[#d97706]/40'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`p-1.5 rounded-xl transition-colors ${
                      isSelected
                        ? 'bg-[#8c4200] text-white'
                        : 'bg-[#fef3e2] dark:bg-[#28211b] text-[#c25e00]'
                    }`}
                  >
                    {getIcon(topic.iconName, isSelected)}
                  </div>

                  <div className="flex flex-col min-w-0">
                    <span className={`text-xs font-semibold truncate ${
                      isSelected ? 'text-white' : 'text-[#1f1b16] dark:text-[#faf6ed]'
                    }`}>
                      {topic.title}
                    </span>
                    <span className={`text-[10px] truncate ${
                      isSelected ? 'text-amber-100' : 'text-[#857865] dark:text-[#d3c9b7]'
                    }`}>
                      {topic.subtitle}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0 ml-2">
                  <span
                    className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-[#8c4200] text-white'
                        : 'bg-[#fef3e2] dark:bg-[#28211b] text-[#c25e00] dark:text-[#fbbf24]'
                    }`}
                  >
                    {topic.count}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${
                    isSelected ? 'translate-x-0.5 text-white' : 'text-stone-400 group-hover:translate-x-0.5'
                  }`} />
                </div>
              </button>
            );
          })}
        </nav>

        {/* Channel Spiritual Note */}
        <div className="mt-5 p-3.5 rounded-2xl bg-gradient-to-br from-[#fef3e2] to-[#fff7ed] dark:from-[#28211b] dark:to-[#1c2334] border border-[#d97706]/30 text-center">
          <p className="text-[11px] font-medium text-[#1f1b16] dark:text-[#faf6ed] leading-relaxed">
            ੴ &ldquo;वेदांत का ज्ञान और गुरुवाणी का सिमरन जीव को समस्त भ्रांतियों से मुक्त कर अमर आनंद में स्थापित करता है।&rdquo;
          </p>
          <span className="block mt-1 text-[10px] font-semibold text-[#c25e00] dark:text-[#fbbf24]">
            — स्वामी अमरजीत सिंह (संत निक्का सिंह जी परंपरा)
          </span>
        </div>

      </div>
    </aside>
  );
}
