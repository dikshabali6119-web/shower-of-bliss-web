'use client';

import React, { useEffect, useRef, useState } from 'react';

// Global scroll direction tracker shared across all slot items
let globalScrollDirection: 'down' | 'up' = 'down';
let lastScrollPosition = 0;
let isListenerAttached = false;

function initGlobalScrollTracker() {
  if (typeof window === 'undefined' || isListenerAttached) return;
  isListenerAttached = true;
  lastScrollPosition = window.scrollY || 0;

  window.addEventListener(
    'scroll',
    () => {
      const currentScroll = window.scrollY || 0;
      if (currentScroll > lastScrollPosition + 2) {
        globalScrollDirection = 'down';
      } else if (currentScroll < lastScrollPosition - 2) {
        globalScrollDirection = 'up';
      }
      lastScrollPosition = currentScroll;
    },
    { passive: true }
  );
}

interface SlotItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function SlotItem({
  children,
  className = '',
  delay = 0,
}: SlotItemProps) {
  const [animClass, setAnimClass] = useState<string>('');
  const elementRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef<boolean>(false);

  useEffect(() => {
    initGlobalScrollTracker();

    const node = elementRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isVisibleRef.current) {
              isVisibleRef.current = true;
              // Direction check: use scroll delta or position relative to viewport
              let isDown = globalScrollDirection === 'down';
              if (entry.boundingClientRect) {
                const vh = window.innerHeight || 800;
                if (entry.boundingClientRect.top > vh * 0.5) {
                  isDown = true;
                } else if (entry.boundingClientRect.bottom < vh * 0.5) {
                  isDown = false;
                }
              }
              setAnimClass(isDown ? 'slot-in-down' : 'slot-in-up');
            }
          } else {
            if (isVisibleRef.current) {
              isVisibleRef.current = false;
              // Reset so it re-triggers cleanly when scrolled back into view
              setAnimClass('');
            }
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '60px 0px 60px 0px',
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${animClass} ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
