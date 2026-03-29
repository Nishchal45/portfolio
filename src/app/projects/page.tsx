'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// FAQ removed
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';
import { fadeUp, stagger } from '@/lib/animations';

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero heading */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.h1 variants={fadeUp} custom={0} className="text-h1">
                Shaping digital
                <br />
                products
              </motion.h1>
              <motion.p variants={fadeUp} custom={1} className="text-body mt-4 max-w-lg">
                A collection of projects spanning distributed systems, AI-powered tools,
                real-time analytics, and full-stack applications.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding pt-0">
          <div className="mx-auto max-w-[1500px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={stagger}
              className="grid gap-6 md:grid-cols-2"
            >
              {projects.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </motion.div>
          </div>
        </section>


      </main>
      <Footer />
    </>
  );
}
