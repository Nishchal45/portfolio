'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
}

export default function StatCounter({ value, suffix, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const step = 16;
    const totalSteps = duration / step;
    const increment = value / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight md:text-4xl">
        {value === 0 ? suffix : `${count}${suffix}`}
      </div>
      <div className="mt-1 text-sm text-[var(--color-text-muted)]">{label}</div>
    </div>
  );
}
