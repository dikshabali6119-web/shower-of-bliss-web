'use client';

import React, { useEffect, useRef, useState } from 'react';

interface SlotRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  threshold?: number;
}

export default function SlotReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.12,
}: SlotRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = domRef.current;
    if (!node) return;

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
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translate3d(0, 48px, 0) scale(0.96)';
      case 'down':
        return 'translate3d(0, -48px, 0) scale(0.96)';
      case 'left':
        return 'translate3d(-48px, 0, 0) scale(0.96)';
      case 'right':
        return 'translate3d(48px, 0, 0) scale(0.96)';
      case 'scale':
        return 'translate3d(0, 0, 0) scale(0.90)';
      default:
        return 'translate3d(0, 48px, 0) scale(0.96)';
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0) scale(1)' : getInitialTransform(),
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
