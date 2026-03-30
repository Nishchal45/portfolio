'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqItems } from '@/lib/data';
import { fadeUp } from '@/lib/animations';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-h2 mb-10">
            Frequently asked questions
          </motion.h2>

          <div>
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 1}
                className="border-b border-[var(--color-border)]"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className="font-[family-name:var(--font-heading)] text-base font-semibold leading-snug pr-4 md:text-lg">
                    {item.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)]">
                    {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.12, 0.23, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-body pb-5">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
