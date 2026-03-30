'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
  index?: number;
}

export default function StatCounter({ value, suffix, label, index = 0 }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (value === 0) return;

    let start = 0;
    const duration = 1800;
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
        ease: [0.12, 0.23, 0.5, 1],
      }}
      whileHover={{
        y: -4,
        boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
        borderColor: 'rgba(247, 54, 38, 0.3)',
      }}
      className="cursor-default rounded-2xl border border-[var(--color-border)] bg-white p-6 text-center transition-colors duration-300"
    >
      <div className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--color-text-primary)] md:text-4xl">
        {value === 0 ? suffix : `${count}${suffix}`}
      </div>
      <div className="mt-2 text-xs font-semibold tracking-widest text-[var(--color-text-muted)]">
        {label}
      </div>
    </motion.div>
  );
}
