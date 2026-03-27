'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1e1e1e]/95 backdrop-blur-md' : 'bg-[#1e1e1e]'
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 md:px-8">
        {/* Brand */}
        <Link href="/" className="font-[family-name:var(--font-heading)] text-lg font-semibold text-white">
          Nishchal<span className="text-[var(--color-text-muted)]">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-[family-name:var(--font-body)] text-sm transition-colors duration-200 ${
                pathname === link.href
                  ? 'text-white'
                  : 'text-[var(--color-text-muted)] hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-[var(--radius-pill)] bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[var(--color-accent-hover)] hover:scale-[1.02] md:inline-flex"
          >
            Get in touch
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
              <ArrowUpRight size={14} />
            </span>
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 items-center gap-2 rounded-lg bg-[var(--color-accent)] px-4 text-sm font-medium text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            {mobileOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 bg-[#1e1e1e] md:hidden"
          >
            <div className="px-5 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-3 font-[family-name:var(--font-heading)] text-lg font-medium ${
                    pathname === link.href ? 'text-white' : 'text-[var(--color-text-muted)]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white"
              >
                Get in touch
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
