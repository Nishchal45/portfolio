'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
  index?: number;
}

export default function StatCounter({ value, suffix, label, index = 0 }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Start count-up when element enters viewport
  useEffect(() => {
    if (!isInView || hasAnimated || value === 0) return;
    setHasAnimated(true);

    const duration = 1500;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
