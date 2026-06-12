'use client';

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string;
}

// framer-motion'suz hafif fade-up. IntersectionObserver + CSS transition;
// API eskisiyle uyumlu (variant/blur kullanan cagiran yok).
export function BlurFade({
  children,
  className,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = '-50px',
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(!inView);

  useEffect(() => {
    if (!inView) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: inViewMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [inView, inViewMargin]);

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : `translateY(${yOffset}px)`,
    transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
    transitionDelay: `${0.04 + delay}s`,
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
