'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Star, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import ProjectCard from '@/components/ProjectCard';
import StatCounter from '@/components/StatCounter';
import { profile, stats, services, projects, testimonials } from '@/lib/data';
import { heroImage, heroScale, fadeUp, slideUpScale, stagger } from '@/lib/animations';

// ─── Hero ───────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-16 pt-24">
      {/* Background — white */}
      <div className="absolute inset-0 bg-white" />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 md:px-8">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          {/* Top row — subtitle */}
          <motion.div variants={heroScale} custom={0} className="mb-4 flex flex-wrap items-center gap-4">
            <span className="text-h5 text-[var(--color-text-body)]">Nishchal Patel</span>
            <span className="h-1 w-1 rounded-full bg-[var(--color-border)]" />
            <span className="text-h5 text-[var(--color-text-body)]">
              Software Engineer & AI/ML Specialist
            </span>
          </motion.div>

          {/* Big name heading */}
          <motion.h1 variants={heroScale} custom={1} className="text-hero">
            Nishchal
            <br />
            Patel
          </motion.h1>

          {/* Bio paragraph */}
          <motion.p variants={heroScale} custom={2} className="mt-6 max-w-xl text-body">
            {profile.heroTagline}
          </motion.p>
        </motion.div>
      </div>

      {/* Hero decorative image — dramatic entrance */}
      <motion.div
        variants={heroImage}
        initial="hidden"
        animate="visible"
        className="pointer-events-none absolute right-0 bottom-0 hidden w-[40%] lg:block"
      >
        <div className="aspect-[3/4] w-full overflow-hidden rounded-tl-3xl bg-gradient-to-br from-[var(--color-accent)]/5 to-[var(--color-surface)]/10">
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-[var(--color-accent)]/10">
                <span className="font-[family-name:var(--font-heading)] text-5xl font-bold text-[var(--color-accent)]">
                  NP
                </span>
              </div>
              <p className="mt-3 text-sm text-[var(--color-text-muted)]">Photo coming soon</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── About / Stats ──────────────────────────────────────────────
function AboutStats() {
  return (
    <section className="section-padding bg-[var(--color-surface-light)]">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} custom={0} className="mb-8 flex flex-wrap items-center gap-3">
            <span className="text-h5 text-[var(--color-text-body)]">{profile.name}</span>
            <span className="h-1 w-1 rounded-full bg-[var(--color-border)]" />
            <span className="text-h5 text-[var(--color-text-body)]">
              Crafting systems & intelligent products
            </span>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            custom={1}
            className="flex flex-wrap items-center gap-6 md:gap-0"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center">
                {i > 0 && (
                  <span className="mx-6 hidden h-1 w-1 rounded-full bg-[var(--color-border)] md:block" />
                )}
                <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Selected Projects ──────────────────────────────────────────
function SelectedProjects() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-[1500px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
        >
          {/* Header */}
          <motion.div variants={fadeUp} custom={0} className="mb-10 flex items-end justify-between">
            <h2 className="text-h2">Selected projects</h2>
            <Link
              href="/projects"
              className="hidden items-center gap-2 text-sm font-medium text-[var(--color-text-body)] transition-colors hover:text-[var(--color-text-primary)] md:flex"
            >
              View all
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* 2-col grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {projects.slice(0, 4).map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i + 1} />
            ))}
          </div>

          {/* Mobile "View all" */}
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-[var(--color-border)] px-6 py-3 text-sm font-medium"
            >
              View all projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Services ───────────────────────────────────────────────────
function Services() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-h2 mb-10">
            What I offer
          </motion.h2>

          <div className="space-y-3">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={slideUpScale}
                custom={i + 1}
                className="group flex flex-col gap-4 rounded-[var(--radius-card)] border border-[var(--color-border)] p-6 transition-all duration-300 hover:border-[var(--color-text-muted)] md:flex-row md:items-start md:gap-8 md:p-8"
              >
                <span className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[var(--color-border)] transition-colors group-hover:text-[var(--color-accent)] md:text-5xl">
                  {service.num}
                </span>
                <div className="flex-1">
                  <h3 className="text-h3 mb-2">{service.title}</h3>
                  <p className="text-body">{service.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[var(--color-surface-light)] px-3 py-1 text-xs font-medium text-[var(--color-text-body)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Testimonials ───────────────────────────────────────────────
function Testimonials() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-h2 mb-10">
            What clients say
          </motion.h2>
        </motion.div>
      </div>

      {/* Horizontal scroll container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={stagger}
        className="flex gap-4 overflow-x-auto px-5 pb-4 md:px-8 scrollbar-hide"
        style={{ scrollbarWidth: 'none' }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            variants={fadeUp}
            custom={i}
            className="w-[340px] shrink-0 rounded-[var(--radius-card)] border border-[var(--color-border)] p-6"
          >
            {/* Stars */}
            <div className="mb-4 flex gap-1">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={16} fill="var(--color-star)" color="var(--color-star)" />
              ))}
            </div>

            {/* Quote */}
            <p className="mb-6 text-sm leading-relaxed text-[var(--color-text-body)]">
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-surface-light)]">
                <span className="font-[family-name:var(--font-heading)] text-xs font-semibold text-[var(--color-text-body)]">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// ─── Page ───────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutStats />
        <SelectedProjects />
        <Services />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
