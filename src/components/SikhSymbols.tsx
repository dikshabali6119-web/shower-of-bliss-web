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
        <span className="absolute inset-0 rounded-full bg-[#facc15]/40 blur-md animate-pulse pointer-events-none" />
      )}
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full text-current fill-current relative z-10"
        aria-label="Sacred Ik Onkar Symbol"
      >
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
 * CENTERED SACRED ROTATING IK ONKAR MANDALA
 * Positioned proudly in the center with Celestial Sky Blue & Golden Yellow brilliance.
 */
export function CenteredRotatingIkOnkar({ className = 'w-64 h-64 sm:w-80 sm:h-80' }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center mx-auto my-6 ${className}`}>
      
      {/* Outer Rotating Cosmic Halo (Vibrant Golden Yellow) */}
      <div className="absolute inset-0 animate-spin-slow">
        <svg viewBox="0 0 240 240" fill="none" className="w-full h-full text-[#eab308]">
          {/* Concentric rings */}
          <circle cx="120" cy="120" r="114" stroke="currentColor" strokeWidth="1" strokeDasharray="5 7" opacity="0.6" />
          <circle cx="120" cy="120" r="102" stroke="currentColor" strokeWidth="1.2" opacity="0.8" />
          <circle cx="120" cy="120" r="88" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.5" />
          <circle cx="120" cy="120" r="70" stroke="currentColor" strokeWidth="1" opacity="0.75" />
          
          {/* Radiating 16-petal cosmic lotus rays in Golden Yellow */}
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            return (
              <line
                key={i}
                x1="120"
                y1="12"
                x2="120"
                y2="34"
                stroke="currentColor"
                strokeWidth="1.8"
                opacity="0.9"
                transform={`rotate(${angle} 120 120)`}
              />
            );
          })}

          {/* Sacred 8-pointed star geometry */}
          <polygon 
            points="120,24 144,84 216,120 144,156 120,216 96,156 24,120 96,84" 
            stroke="currentColor" 
            strokeWidth="1" 
            opacity="0.4" 
          />
        </svg>
      </div>

      {/* Counter-Rotating Inner Ring (Luminous Sky Blue) */}
      <div className="absolute inset-4 animate-spin-reverse">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#0ea5e9]">
          <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" opacity="0.7" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 360) / 12;
            return (
              <circle
                key={i}
                cx="100"
                cy="20"
                r="3.5"
                fill="#facc15"
                opacity="0.95"
                transform={`rotate(${angle} 100 100)`}
              />
            );
          })}
        </svg>
      </div>

      {/* Central Radiant Ik Onkar Medallion (Stationary, upright, majestic) */}
      <div className="relative z-10 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-[#0284c7] via-[#0369a1] to-[#0ea5e9] border-3 border-[#facc15] shadow-[0_0_40px_rgba(250,204,21,0.65)] flex items-center justify-center animate-gold-pulse">
        <span 
          className="font-serif text-6xl sm:text-7xl font-extrabold text-[#fef08a] select-none drop-shadow-[0_2px_14px_rgba(250,204,21,0.9)]"
          style={{ fontFamily: "'Noto Sans Gurmukhi', 'Mukti Narrow', serif, system-ui" }}
        >
          ੴ
        </span>
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
      <path d="M12 2v14M11.2 3.5h1.6M10.8 6h2.4M10.5 9h3M10 16h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="12" cy="10" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 18c1.5-3 3-6 4-8-1.5 3-2 6-1 8.5 0.5 1 2 1.5 2 1.5s-4 0.5-5-2z" fill="currentColor" />
      <path d="M18 18c-1.5-3-3-6-4-8 1.5 3 2 6 1 8.5-0.5 1-2 1.5-2 1.5s4 0.5 5-2z" fill="currentColor" />
    </svg>
  );
}
