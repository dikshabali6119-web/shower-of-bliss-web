'use client';

import React, { useEffect, useRef, useState } from 'react';

interface SlotRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'scale';
  threshold?: number;
}

export default function SlotReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.05,
}: SlotRevealProps) {
  // Safe default: once revealed, content stays 100% visible so mobile phones never cut off sections!
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = domRef.current;
    if (!node) return;

    // Fail-safe for mobile: ensure content is revealed even if IO is delayed
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px 50px 0px', // Pre-trigger 50px before entering viewport for silky smoothness on mobile!
      }
    );

    observer.observe(node);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [threshold]);

  const getSlotTransform = () => {
    if (isVisible) {
      return 'translate3d(0, 0, 0) scale(1)';
    }
    switch (direction) {
      case 'up':
        return 'translate3d(0, 36px, 0) scale(0.98)';
      case 'down':
        return 'translate3d(0, -36px, 0) scale(0.98)';
      case 'scale':
        return 'translate3d(0, 20px, 0) scale(0.95)';
      default:
        return 'translate3d(0, 36px, 0) scale(0.98)';
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getSlotTransform(),
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}


