'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import type { Project } from '@/lib/data';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div variants={fadeUp} custom={index}>
      <Link
        href={`/projects/${project.slug}`}
        className="group relative block overflow-hidden rounded-[var(--radius-card)]"
      >
        {/* Color background as image placeholder */}
        <div
          className="aspect-[0.9] w-full transition-transform duration-500 group-hover:scale-105"
          style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)` }}
        >
          <div className="flex h-full items-center justify-center">
            <span
              className="text-[8rem] font-bold opacity-10 md:text-[10rem]"
              style={{ color: project.color, fontFamily: 'var(--font-heading)' }}
            >
              {project.title[0]}
            </span>
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
