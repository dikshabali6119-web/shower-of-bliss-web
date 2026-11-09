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

      {/* Central Radiant Ik Onkar Medallion with Self-Drawing Stroke Animation */}
      <div className="relative z-10 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-[#0284c7] via-[#0369a1] to-[#0ea5e9] border-3 border-[#facc15] shadow-[0_0_40px_rgba(250,204,21,0.65)] flex items-center justify-center p-3 animate-gold-pulse">
        <svg 
          viewBox="0 0 245.38 171.43" 
          className="w-full h-full select-none"
          aria-label="Sacred Self-Drawing Ik Onkar Symbol"
        >
          <defs>
            <linearGradient id="goldIkStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>
            <linearGradient id="goldIkFill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <filter id="goldIkGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <g transform="translate(404.28 47.626)">
            <path 
              d="m-334.62 120.24c-1.0331-0.48095-2.9166-1.8685-4.1854-3.0834-6.878-6.5855-10.741-16.131-12.796-31.619-1.0459-7.8831-0.91146-13.194 0.69303-27.372 0.37231-3.2899 0.61287-6.0456 0.53458-6.1239-0.0783-0.0783-0.58805 0.17269-1.1328 0.55773-1.7142 1.2117-6.5235 3.4822-9.4425 4.458-8.5854 2.87-18.573 2.4783-25.724-1.0088-6.9933-3.4101-12.29-9.6279-14.137-16.596-1.3875-5.2332-1.004-13.348 0.89945-19.031 2.838-8.473 8.5792-13.469 18.068-15.722 8.2549-1.9602 20.487-1.4994 28.112 1.0589 9.858 3.3076 14.924 10.172 16.258 22.033 0.52504 4.666-0.0534 20.894-1.2771 35.827-1.5567 18.997-1.5157 22.511 0.37225 31.947 1.2988 6.4914 2.7085 10.334 6.0734 16.553 4.2668 7.8864 4.0748 7.4478 3.6273 8.2839-0.56747 1.0603-3.4868 0.98032-5.9423-0.16283zm-29.591-73.699c7.8024-2.3133 12.764-6.2831 14.392-11.516 1.661-5.3367 0.0867-11.94-3.6726-15.406-3.629-3.3451-8.2827-4.6804-16.293-4.6749-8.6483 6e-3 -13.368 1.4929-16.921 5.3314-2.3909 2.5825-3.3804 5.0778-3.6181 9.1239-0.43245 7.362 2.432 13.093 8.0093 16.023 3.4862 1.832 6.0382 2.339 10.943 2.1743 3.0406-0.10212 4.8343-0.36674 7.1602-1.0563zm87.208 65.518c-4.8537-0.6291-10.803-2.4089-14.817-4.4327-5.9615-3.0058-13.056-9.371-16.879-15.144-9.8101-14.815-13.988-33.893-13.989-63.877l-2e-4 -7.3201-3.2632-5e-3c-1.7948-3e-3 -3.4659-0.13406-3.7137-0.29129-0.34083-0.21629-0.42672-1.6105-0.35279-5.7272l0.0977-5.4413 7.174-0.20043 0.19066-1.3109c0.10487-0.72099 0.28909-2.184 0.40941-3.2512 0.1203-1.0672 0.61723-3.7534 1.1043-5.9695 4.4375-20.19 17.109-32.701 35.57-35.122 14.738-1.932 26.916 1.8618 36.471 11.363 1.2378 1.2307 2.28 2.1921 2.3159 2.1364 5.8357-9.0424 10.737-13.631 19.316-18.082 6.6615-3.4566 12.21-4.676 19.575-4.3027 12.758 0.64663 23.492 5.3098 32.208 13.993 7.3074 7.2794 12.837 16.697 13.839 23.571 0.54246 3.7218-0.0204 5.6004-1.9622 6.5487-1.166 0.56943-1.5529 0.6043-2.7443 0.24735-1.713-0.51324-2.9756-2.1582-5.0492-6.5786-3.6222-7.7216-11.001-16.577-17.347-20.818-3.6378-2.4311-6.8357-3.878-11.069-5.0083-2.871-0.76648-4.1449-0.90007-8.8235-0.92529-6.3623-0.0343-8.2232 0.35789-13.286 2.7999-8.6805 4.1874-15.111 11.45-16.368 18.486-0.40585 2.271-0.37465 2.9288 0.3154 6.6506 0.42118 2.2717 0.76529 5.0724 0.76469 6.2238-2e-3 3.9629-1.8892 6.1968-5.2349 6.1968-3.4012 0-4.6758-1.4981-5.7242-6.7275-1.3854-6.9108-4.0359-12.074-8.479-16.517-6.063-6.063-12.76-8.8601-21.206-8.8568-12.912 5e-3 -22.36 5.1571-27.497 14.994-2.378 4.5536-3.7768 9.4299-5.4383 18.958l-0.23045 1.3215 84.568 0.1792 0.0977 5.4414c0.0739 4.1168-0.012 5.5109-0.35279 5.7272-0.24776 0.15724-1.7341 0.28832-3.303 0.29129l-2.8525 5e-3 -1.8592 5.0271c-5.4276 14.675-11.014 22.28-21.242 28.912-1.8834 1.2214-3.4298 2.3001-3.4363 2.3971-7e-3 0.097 1.2596 0.94135 2.8136 1.8763 4.0537 2.4389 8.6579 6.4025 10.962 9.4367 3.9893 5.2536 5.6183 9.948 5.6228 16.204 0.01 13.89-8.3279 24.04-21.855 26.605-2.7422 0.51988-11.974 0.71398-15.042 0.31627zm13.406-11.94c5.0906-1.4041 8.9009-4.2727 10.8-8.1314 0.93837-1.9061 1.1432-2.7864 1.2864-5.5286 0.14845-2.8427 0.0566-3.5885-0.71527-5.8072-0.48708-1.4001-1.6144-3.567-2.5053-4.8154-3.0348-4.2529-9.1258-9.1661-13.708-11.057-2.6584-1.0972-4.091-1.1468-15.62-0.54099-4.4626 0.23451-24.213 0.4384-24.213 0.4384l0.22436 0.79375c4.0175 14.214 10.63 24.669 19.336 30.574 3.0559 2.0728 7.6262 3.8624 11.824 4.6302 2.5409 0.46468 10.848 0.11702 13.289-0.5561zm-19.399-47.106c7.1673-0.47708 9.8779-1.005 14.112-2.7486 9.0984-3.7463 14.144-8.3549 18.983-17.337 1.5764-2.9267 4.4836-9.2622 4.9778-10.848l0.24739-0.79375h-66.723l9e-3 5.3799c9e-3 5.4587 0.4762 17.512 0.90852 23.46l0.23721 3.2632s24.147-0.16882 27.247-0.37516z" 
              className="animate-draw-ikonkar"
              stroke="url(#goldIkStroke)"
              strokeWidth="3.5"
              fill="url(#goldIkFill)"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#goldIkGlow)"
            />
          </g>
        </svg>
      </div>

    </div>
  );
}

/**
 * SACRED KHANDA COSMIC MANDALA (Footer & Background Animation)
 * Majestic rotating Sikh Dharma emblem with sacred Khanda, Chakar & Kirpans.
 */
export function SacredKhandaMandala({ className = 'w-72 h-72' }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className} select-none pointer-events-none`}>
      {/* Outer Rotating Cosmic Halo (Golden Lotus Rays) */}
      <div className="absolute inset-0 animate-spin-slow">
        <svg viewBox="0 0 240 240" fill="none" className="w-full h-full text-[#eab308]">
          <circle cx="120" cy="120" r="114" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" opacity="0.6" />
          <circle cx="120" cy="120" r="100" stroke="currentColor" strokeWidth="1.2" opacity="0.8" />
          <circle cx="120" cy="120" r="86" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.5" />
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            return (
              <line
                key={i}
                x1="120"
                y1="14"
                x2="120"
                y2="30"
                stroke="currentColor"
                strokeWidth="1.8"
                opacity="0.85"
                transform={`rotate(${angle} 120 120)`}
              />
            );
          })}
        </svg>
      </div>

      {/* Counter-Rotating Inner Ring (Luminous Sky Blue) */}
      <div className="absolute inset-4 animate-spin-reverse">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#0ea5e9]">
          <circle cx="100" cy="100" r="86" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" opacity="0.75" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 360) / 12;
            return (
              <circle
                key={i}
                cx="100"
                cy="22"
                r="3"
                fill="#facc15"
                opacity="0.9"
                transform={`rotate(${angle} 100 100)`}
              />
            );
          })}
        </svg>
      </div>

      {/* Authentic Khanda Sahib Emblem in Center with Golden Glow */}
      <div className="relative z-10 w-36 h-44 flex items-center justify-center animate-gold-pulse">
        <svg viewBox="0 0 303 374" className="w-full h-full drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]">
          <defs>
            <linearGradient id="khandaGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>
          </defs>
          <path fill="url(#khandaGoldGrad)" d="M114.877 309.764c18.046-10.995 38.956-15.966 70.434-36.418 26.38-17.141 48.25-29.316 75.218-78.287 41.117-74.668-23.026-123.665-23.026-123.665s67.425 23.7 65.455 90.145c-1.97 66.445-31.994 95.986-46.376 111.807-15.2 16.719-24.046 45.267-22.37 46.384l-40.131-33.082c-26.402 15.391-53.042 24.996-79.204 40.864 0 0 6.925 15.211-7.713 20.605-9.158 3.375-13.96 1.322-16.434-3.88-2.828-5.943-.89-19.22 24.147-34.473z"/>
          <path fill="url(#khandaGoldGrad)" d="M188.123 309.764c-18.046-10.995-38.956-15.966-70.434-36.418-26.381-17.141-48.251-29.316-75.218-78.287C1.354 120.391 65.497 71.394 65.497 71.394S-1.928 95.094.042 161.539c1.97 66.445 31.994 95.986 46.376 111.807 15.2 16.719 24.046 45.267 22.37 46.384l40.131-33.082c26.402 15.391 53.042 24.996 79.204 40.864 0 0-6.925 15.211 7.713 20.605 9.158 3.375 13.959 1.322 16.434-3.88 2.828-5.943.889-19.22-24.147-34.473z"/>
          <path fill="url(#khandaGoldGrad)" d="M151.5 44.183c-52.403 0-94.948 42.544-94.948 94.948 0 52.403 42.545 94.948 94.948 94.948 52.403 0 94.948-42.545 94.948-94.948 0-52.404-42.545-94.948-94.948-94.948zm0 18.178c42.37 0 76.77 34.399 76.77 76.77 0 42.37-34.4 76.77-76.77 76.77s-76.77-34.4-76.77-76.77c0-42.371 34.4-76.77 76.77-76.77z"/>
          <path fill="url(#khandaGoldGrad)" d="M139.943 260.95c-10.099-7.418-22.722-13.943-36.098-20.462 36.481-62.959 34.407-129.809 1.226-198.015C123.724 31.617 139.186 17.718 151.423.74l.287.398c12.191 16.797 27.559 30.564 46.065 41.336-33.181 68.206-35.255 135.056 1.226 198.015-13.376 6.52-26 13.043-36.098 20.462v78.12c5.162 3.456 8.54 9.179 8.54 15.648 0 10.543-8.971 19.102-20.02 19.102s-20.02-8.56-20.02-19.102c0-6.47 3.378-12.192 8.54-15.648v-78.12z"/>
        </svg>
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
