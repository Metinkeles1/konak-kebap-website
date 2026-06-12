'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface NumberTickerProps {
  value: number;
  direction?: 'up' | 'down';
  delay?: number;
  decimalPlaces?: number;
  className?: string;
}

// framer-motion'suz sayac. requestAnimationFrame ile ease-out;
// gorununce (IntersectionObserver) bir kez calisir.
export function NumberTicker({
  value,
  direction = 'up',
  delay = 0,
  decimalPlaces = 0,
  className,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const from = direction === 'down' ? value : 0;
    const to = direction === 'down' ? 0 : value;
    const fmt = (n: number) =>
      Intl.NumberFormat('tr-TR', {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
      }).format(Number(n.toFixed(decimalPlaces)));

    el.textContent = fmt(from);

    let raf = 0;
    let timeout: ReturnType<typeof setTimeout>;
    let start = 0;
    const dur = 1500;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      el.textContent = fmt(from + (to - from) * ease(p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeout = setTimeout(() => {
            raf = requestAnimationFrame(tick);
          }, delay * 1000);
          obs.disconnect();
        }
      },
      { rootMargin: '0px' }
    );
    obs.observe(el);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
      obs.disconnect();
    };
  }, [value, direction, delay, decimalPlaces]);

  return <span ref={ref} className={cn('inline-block tabular-nums', className)} />;
}
