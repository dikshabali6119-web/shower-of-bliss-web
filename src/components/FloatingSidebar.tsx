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
        : 'text-[#0284c7] dark:text-[#38bdf8] group-hover:text-[#0284c7]'
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
      <div className="glass-panel rounded-3xl p-5 border-2 border-[#eab308]/40 dark:border-[#eab308]/30 shadow-md sticky top-24 bg-white/95 dark:bg-[#111d33]/95">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#0284c7]/20 dark:border-[#eab308]/20">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#e0f2fe] dark:bg-[#162540] text-[#0284c7] dark:text-[#38bdf8] border border-[#0284c7]/30">
              <Layers className="w-4 h-4 text-[#0284c7] dark:text-[#38bdf8]" />
            </div>
            <div>
              <h3 className="font-serif-bliss text-base font-bold text-slate-900 dark:text-white">
                विषय अनुसार सत्संग
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-300">
                वेदांत, गीता, सूफी व कुदरत
              </p>
            </div>
          </div>
          <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-[#fef08a] dark:bg-[#1e293b] text-[#854d0e] dark:text-[#fde047] border border-[#eab308]/40">
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
                    ? 'bg-[#0284c7] text-white border-[#0284c7] shadow-md'
                    : 'bg-white/70 dark:bg-[#172554]/40 text-slate-800 dark:text-slate-100 border-transparent hover:bg-[#e0f2fe]/60 dark:hover:bg-[#1e293b] hover:border-[#0284c7]/30'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`p-1.5 rounded-xl transition-colors ${
                      isSelected
                        ? 'bg-[#0369a1] text-white'
                        : 'bg-[#e0f2fe] dark:bg-[#162540] text-[#0284c7]'
                    }`}
                  >
                    {getIcon(topic.iconName, isSelected)}
                  </div>

                  <div className="flex flex-col min-w-0">
                    <span className={`text-xs font-bold truncate ${
                      isSelected ? 'text-white' : 'text-slate-900 dark:text-white'
                    }`}>
                      {topic.title}
                    </span>
                    <span className={`text-[10px] truncate ${
                      isSelected ? 'text-sky-100' : 'text-slate-500 dark:text-slate-400'
                    }`}>
                      {topic.subtitle}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0 ml-2">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-[#0369a1] text-white'
                        : 'bg-[#fef08a] dark:bg-[#1e293b] text-[#854d0e] dark:text-[#fde047]'
                    }`}
                  >
                    {topic.count}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${
                    isSelected ? 'translate-x-0.5 text-white' : 'text-slate-400 group-hover:translate-x-0.5'
                  }`} />
                </div>
              </button>
            );
          })}
        </nav>

        {/* Channel Spiritual Note */}
        <div className="mt-5 p-3.5 rounded-2xl bg-gradient-to-br from-[#e0f2fe]/80 to-[#fef08a]/40 dark:from-[#172554] dark:to-[#111d33] border-2 border-[#eab308]/40 text-center shadow-xs">
          <p className="text-[11px] font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
            ੴ &ldquo;वेदांत का ज्ञान और गुरुवाणी का सिमरन जीव को समस्त भ्रांतियों से मुक्त कर अमर आनंद में स्थापित करता है।&rdquo;
          </p>
          <span className="block mt-1 text-[10px] font-bold text-[#0284c7] dark:text-[#facc15]">
            — स्वामी अमरजीत सिंह (संत निक्का सिंह जी परंपरा)
          </span>
        </div>

      </div>
    </aside>
  );
}
