'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { profile } from '@/lib/data';
import { fadeUp } from '@/lib/animations';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="px-4 pb-4 md:px-6 md:pb-6">
      <div className="rounded-[var(--radius-footer)] bg-[var(--color-surface)] px-6 py-12 md:px-12 md:py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mx-auto max-w-[1200px]"
        >
          {/* Top — CTA */}
          <motion.div variants={fadeUp} custom={0} className="mb-16 text-center">
            <p className="text-h5 mb-2 text-[var(--color-text-muted)]">Open to opportunities</p>
            <h2 className="text-h1 mb-6 text-white">Let&apos;s work together</h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-[var(--color-accent)] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--color-accent-hover)] hover:scale-[1.02]"
            >
              Get In Touch
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                <ArrowUpRight size={14} />
              </span>
            </Link>
          </motion.div>

          {/* Middle — Links Grid */}
          <motion.div
            variants={fadeUp}
            custom={1}
            className="grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3"
          >
            {/* Contact */}
            <div>
              <h4 className="mb-4 font-[family-name:var(--font-heading)] text-xs font-medium tracking-wider text-[var(--color-text-muted)] uppercase">
                Contact
              </h4>
              <div className="space-y-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="block text-sm text-white/80 transition-colors hover:text-white"
                >
                  {profile.email}
                </a>
              </div>
            </div>

            {/* Pages */}
            <div>
              <h4 className="mb-4 font-[family-name:var(--font-heading)] text-xs font-medium tracking-wider text-[var(--color-text-muted)] uppercase">
                Pages
              </h4>
              <div className="space-y-2">
                <Link href="/" className="block text-sm text-white/80 transition-colors hover:text-white">
                  Home
                </Link>
                <Link href="/projects" className="block text-sm text-white/80 transition-colors hover:text-white">
                  Projects
                </Link>
                <Link href="/contact" className="block text-sm text-white/80 transition-colors hover:text-white">
                  Contact
                </Link>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="mb-4 font-[family-name:var(--font-heading)] text-xs font-medium tracking-wider text-[var(--color-text-muted)] uppercase">
                Social
              </h4>
              <div className="space-y-2">
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm text-white/80 transition-colors hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm text-white/80 transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bottom — Copyright + Back to top */}
          <motion.div
            variants={fadeUp}
            custom={2}
            className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6"
          >
            <p className="text-xs text-[var(--color-border)]">
              &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] transition-colors hover:text-white"
            >
              Back to top
              <ArrowUp size={14} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
