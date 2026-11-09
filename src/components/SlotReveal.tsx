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
  threshold = 0.08,
}: SlotRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = domRef.current;
    if (!node) return;

    // IntersectionObserver triggers in BOTH directions:
    // When scrolling down AND when scrolling up ("chaye uppr se scroll kre chaye niches se")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            // Reset when element exits viewport so it re-slots every time
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -15px 0px',
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getSlotTransform = () => {
    if (isVisible) {
      return 'perspective(1200px) rotateX(0deg) translate3d(0, 0, 0) scale(1)';
    }
    switch (direction) {
      case 'up':
        // Crisp 3D Slot reel roll up
        return 'perspective(1200px) rotateX(-15deg) translate3d(0, 75px, 0) scale(0.92)';
      case 'down':
        // 3D Slot roll down
        return 'perspective(1200px) rotateX(15deg) translate3d(0, -75px, 0) scale(0.92)';
      case 'scale':
        // 3D Slot zoom pop
        return 'perspective(1200px) rotateX(0deg) translate3d(0, 50px, 0) scale(0.88)';
      default:
        return 'perspective(1200px) rotateX(-15deg) translate3d(0, 75px, 0) scale(0.92)';
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-750 ease-[cubic-bezier(0.2,1,0.3,1.15)] transform-gpu ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getSlotTransform(),
        filter: isVisible ? 'blur(0px)' : 'blur(4px)',
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform, filter',
      }}
    >
      {children}
    </div>
  );
}

