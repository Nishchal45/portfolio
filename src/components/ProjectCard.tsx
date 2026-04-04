'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import type { Project } from '@/lib/data';

// Map project slugs to representative tech stack icons/labels
const projectVisuals: Record<string, { stack: string[]; diagram: string }> = {
  orderflow: {
    stack: ['Go', 'Kafka', 'gRPC', 'Docker'],
    diagram: 'Order → Saga → Payment → Inventory → Fulfillment',
  },
  pulseboard: {
    stack: ['Go', 'WebSocket', 'ClickHouse', 'React'],
    diagram: 'Events → Ingestion → Storage → Live Dashboard',
  },
  'querymate-ai': {
    stack: ['Python', 'LLM', 'SQL', 'FastAPI'],
    diagram: 'Query → Schema → LLM → Validate → Execute',
  },
  'spendlense-ai': {
    stack: ['GPT-4V', 'OCR', 'React', 'Charts'],
    diagram: 'Receipt → OCR → GPT-4V → Categorize → Analytics',
  },
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const visuals = projectVisuals[project.slug] || { stack: [], diagram: '' };

  return (
    <motion.div variants={fadeUp} custom={index}>
      <Link
        href={`/projects/${project.slug}`}
        className="group relative block overflow-hidden rounded-[var(--radius-card)]"
      >
        {/* Card visual — dark with architecture diagram style */}
        <div
          className="aspect-[0.9] w-full transition-transform duration-500 group-hover:scale-[1.02]"
          style={{ background: `linear-gradient(160deg, #1a1a2e, ${project.color}15, #0a0a0a)` }}
        >
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />

          {/* Content */}
          <div className="relative flex h-full flex-col items-center justify-center px-6">
            {/* Project initial — large but subtle */}
            <div
              className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10"
              style={{ backgroundColor: `${project.color}20` }}
            >
              <span
                className="font-[family-name:var(--font-heading)] text-3xl font-bold"
                style={{ color: project.color }}
              >
                {project.title[0]}
              </span>
            </div>

            {/* Architecture flow */}
            {visuals.diagram && (
              <div className="mb-6 rounded-lg border border-white/5 bg-white/5 px-4 py-2 font-mono text-[10px] text-white/30 backdrop-blur-sm">
                {visuals.diagram}
              </div>
            )}

            {/* Tech stack pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {visuals.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="project-overlay absolute inset-0 rounded-[var(--radius-card)]" />

        {/* Content at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-white md:text-xl">
            {project.title}
          </h4>
          <p className="mt-1 text-sm text-white/70">{project.category}</p>
        </div>
      </Link>
    </motion.div>
  );
}
