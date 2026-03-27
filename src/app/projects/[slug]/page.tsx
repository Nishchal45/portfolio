'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';
import { fadeUp, slideUpScale, stagger } from '@/lib/animations';

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-screen items-center justify-center pt-24">
          <div className="text-center">
            <h1 className="text-h2 mb-4">Project not found</h1>
            <Link href="/projects" className="text-sm text-[var(--color-accent)] underline">
              Back to projects
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Get 2 other projects for "More Projects"
  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-8 md:pt-40 md:pb-12">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} custom={0}>
                <Link
                  href="/projects"
                  className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]"
                >
                  <ArrowLeft size={16} />
                  Back to projects
                </Link>
              </motion.div>

              <motion.h1 variants={fadeUp} custom={1} className="text-h1">
                {project.title}
              </motion.h1>

              <motion.p variants={fadeUp} custom={2} className="text-body mt-4 max-w-2xl">
                {project.description}
              </motion.p>

              {/* Live Preview button */}
              <motion.div variants={fadeUp} custom={3} className="mt-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--color-accent-hover)] hover:scale-[1.02]"
                >
                  View on GitHub
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    <ArrowUpRight size={14} />
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Metadata row */}
        <section className="pb-8">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="flex flex-wrap gap-8 border-y border-[var(--color-border)] py-6 md:gap-16"
            >
              <motion.div variants={fadeUp} custom={0}>
                <p className="text-small mb-1">Location</p>
                <p className="font-[family-name:var(--font-heading)] text-sm font-medium">
                  {project.location}
                </p>
              </motion.div>
              <motion.div variants={fadeUp} custom={1}>
                <p className="text-small mb-1">Services provided</p>
                <p className="font-[family-name:var(--font-heading)] text-sm font-medium">
                  {project.services}
                </p>
              </motion.div>
              <motion.div variants={fadeUp} custom={2}>
                <p className="text-small mb-1">Year</p>
                <p className="font-[family-name:var(--font-heading)] text-sm font-medium">
                  {project.year}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Cover image placeholder */}
        <section className="pb-12">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="aspect-video w-full overflow-hidden rounded-[var(--radius-card)]"
              style={{
                background: `linear-gradient(135deg, ${project.color}15, ${project.color}30)`,
              }}
            >
              <div className="flex h-full items-center justify-center">
                <span
                  className="text-[12rem] font-bold opacity-10"
                  style={{ color: project.color, fontFamily: 'var(--font-heading)' }}
                >
                  {project.title[0]}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Study Sections */}
        <section className="section-padding pt-0">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8">
            {project.sections.map((section, i) => (
              <motion.div
                key={section.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={stagger}
                className="mb-16 last:mb-0"
              >
                {/* Section tag */}
                <motion.div variants={slideUpScale} custom={0} className="mb-6 flex items-center gap-3">
                  <span className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-border)] md:text-4xl">
                    {section.num}
                  </span>
                  <span className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                    {section.title}
                  </span>
                </motion.div>

                {/* Content paragraphs */}
                {section.content.map((para, j) => (
                  <motion.p key={j} variants={fadeUp} custom={j + 1} className="text-body mb-4">
                    {para}
                  </motion.p>
                ))}

                {/* Bullet list */}
                {section.bullets && (
                  <motion.ul variants={fadeUp} custom={section.content.length + 1} className="mt-4 space-y-2">
                    {section.bullets.map((bullet, k) => (
                      <li key={k} className="flex items-start gap-3 text-body">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                        {bullet}
                      </li>
                    ))}
                  </motion.ul>
                )}

                {/* Section image placeholder */}
                {i < 2 && (
                  <motion.div
                    variants={fadeUp}
                    custom={section.content.length + 2}
                    className="mt-8 grid gap-4"
                    style={{
                      gridTemplateColumns: i === 0 ? 'repeat(2, 1fr)' : '1fr',
                    }}
                  >
                    {(i === 0 ? [1, 2, 3, 4] : [1]).map((n) => (
                      <div
                        key={n}
                        className="aspect-video rounded-[var(--radius-card)]"
                        style={{
                          background: `linear-gradient(135deg, ${project.color}08, ${project.color}18)`,
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* More Projects */}
        <section className="section-padding">
          <div className="mx-auto max-w-[1500px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={stagger}
            >
              <motion.h2 variants={fadeUp} custom={0} className="text-h2 mb-10">
                More projects
              </motion.h2>
              <div className="grid gap-6 md:grid-cols-2">
                {otherProjects.map((p, i) => (
                  <ProjectCard key={p.slug} project={p} index={i + 1} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
    </>
  );
}
