import React from 'react';

/**
 * Sacred Sikh Symbol: Ik Onkar (ੴ)
 * Represents the One Supreme Universal Reality.
 */
export function IkOnkarSymbol({ 
  className = 'w-6 h-6',
  glow = true 
}: { 
  className?: string;
  glow?: boolean;
}) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {glow && (
        <span className="absolute inset-0 rounded-full bg-[#d4af37]/30 blur-md animate-pulse pointer-events-none" />
      )}
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full text-current fill-current relative z-10"
        aria-label="Sacred Ik Onkar Symbol"
      >
        {/* Sacred Ik Onkar rendered with high-precision calligraphy */}
        <text 
          x="50" 
          y="68" 
          textAnchor="middle" 
          fontSize="66" 
          fontFamily="system-ui, -apple-system, 'Segoe UI', 'Mukti Narrow', 'Noto Sans Gurmukhi', serif" 
          fontWeight="bold"
          fill="currentColor"
        >
          ੴ
        </text>
      </svg>
    </div>
  );
}

/**
 * Large Rotating Sacred Ik Onkar Medallion for Background Ambience
 */
export function RotatingIkOnkarMandala({ className = 'w-72 h-72' }: { className?: string }) {
  return (
    <div className={`relative pointer-events-none ${className}`}>
      {/* Outer Rotating Sacred Wheel / Halo */}
      <div className="absolute inset-0 animate-spin-slow">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#d4af37]">
          {/* Concentric rings */}
          <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
          <circle cx="100" cy="100" r="82" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
          <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.4" />
          <circle cx="100" cy="100" r="56" stroke="currentColor" strokeWidth="1" opacity="0.6" />
          
          {/* Radiating 16-petal cosmic lotus rays */}
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            return (
              <line
                key={i}
                x1="100"
                y1="10"
                x2="100"
                y2="28"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.6"
                transform={`rotate(${angle} 100 100)`}
              />
            );
          })}

          {/* Sacred 8-pointed star geometry */}
          <polygon 
            points="100,20 120,70 180,100 120,130 100,180 80,130 20,100 80,70" 
            stroke="currentColor" 
            strokeWidth="0.75" 
            opacity="0.25" 
          />
        </svg>
      </div>

      {/* Gentle Counter-Rotating Inner Ring */}
      <div className="absolute inset-4 animate-[spin_45s_linear_infinite_reverse]">
        <svg viewBox="0 0 160 160" fill="none" className="w-full h-full text-[#c25e00] dark:text-[#fbbf24]">
          <circle cx="80" cy="80" r="72" stroke="currentColor" strokeWidth="0.7" strokeDasharray="3 5" opacity="0.35" />
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 360) / 8;
            return (
              <circle
                key={i}
                cx="80"
                cy="18"
                r="3"
                fill="currentColor"
                opacity="0.4"
                transform={`rotate(${angle} 80 80)`}
              />
            );
          })}
        </svg>
      </div>

      {/* Central Radiant Ik Onkar (Stationary or gently floating so the sacred sign remains upright and dignified) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#c25e00]/20 via-[#d97706]/30 to-transparent backdrop-blur-xs flex items-center justify-center border border-[#fbbf24]/50 shadow-[0_0_35px_rgba(245,158,11,0.45)] animate-gold-pulse">
          <span 
            className="font-serif text-5xl md:text-6xl font-bold text-[#d97706] dark:text-[#fbbf24] select-none drop-shadow-[0_2px_10px_rgba(217,119,6,0.8)]"
            style={{ fontFamily: "'Noto Sans Gurmukhi', 'Mukti Narrow', serif, system-ui" }}
          >
            ੴ
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * Sacred Khanda Emblem
 */
export function KhandaSymbol({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      {/* Central double-edged sword */}
      <path d="M12 2v14M11.2 3.5h1.6M10.8 6h2.4M10.5 9h3M10 16h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Circular Chakkar */}
      <circle cx="12" cy="10" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.3" />
      {/* Left Kirpan */}
      <path d="M6 18c1.5-3 3-6 4-8-1.5 3-2 6-1 8.5 0.5 1 2 1.5 2 1.5s-4 0.5-5-2z" fill="currentColor" />
      {/* Right Kirpan */}
      <path d="M18 18c-1.5-3-3-6-4-8 1.5 3 2 6 1 8.5-0.5 1-2 1.5-2 1.5s4 0.5 5-2z" fill="currentColor" />
    </svg>
  );
}
