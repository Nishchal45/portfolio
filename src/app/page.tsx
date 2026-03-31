'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
// image import removed — using animated avatar
import {
  ArrowUpRight, ArrowRight, GraduationCap, Briefcase, Brain,
  Code2, Cloud, Rocket, Mail, MapPin, Globe, Github, Linkedin,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import StatCounter from '@/components/StatCounter';
import { profile, stats, services, projects, experience, education } from '@/lib/data';
import { heroReveal, heroImage, fadeUp, cardReveal, stagger } from '@/lib/animations';

// ─── Shared viewport config for consistency ─────────────────────
const VP = { once: true, amount: 0.15 } as const;

// ─── Hero ───────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-16 pt-24">
      <div className="absolute inset-0 bg-white" />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 md:px-8">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={heroReveal} custom={0} className="mb-4 flex flex-wrap items-center gap-4">
            <span className="text-h5 text-[var(--color-text-body)]">Nishchal Vekariya</span>
            <span className="h-1 w-1 rounded-full bg-[var(--color-border)]" />
            <span className="text-h5 text-[var(--color-text-body)]">
              Software Engineer & AI/ML Specialist
            </span>
          </motion.div>

          <motion.h1 variants={heroReveal} custom={1} className="text-hero">
            Nishchal
            <br />
            Vekariya
          </motion.h1>

          <motion.p variants={heroReveal} custom={2} className="mt-6 max-w-xl text-body">
            {profile.heroTagline}
          </motion.p>
        </motion.div>
      </div>

      {/* Animated avatar */}
      <motion.div
        variants={heroImage}
        initial="hidden"
        animate="visible"
        className="pointer-events-none absolute right-0 bottom-0 hidden w-[40%] lg:block"
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-tl-3xl">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-surface)] via-[#1a1a2e] to-[var(--color-surface)]" />

          {/* Floating orbs */}
          <motion.div
            animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[15%] left-[20%] h-32 w-32 rounded-full bg-[var(--color-accent)]/20 blur-2xl"
          />
          <motion.div
            animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-[25%] right-[15%] h-40 w-40 rounded-full bg-[#6C3AED]/20 blur-2xl"
          />
          <motion.div
            animate={{ y: [10, -20, 10] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[45%] left-[40%] h-24 w-24 rounded-full bg-[#0EA5E9]/15 blur-2xl"
          />

          {/* Grid lines */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />

          {/* Avatar container */}
          <div className="relative flex h-full flex-col items-center justify-center">
            {/* Avatar circle */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Outer glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, var(--color-accent), #6C3AED, #0EA5E9, #10B981, var(--color-accent))',
                  opacity: 0.3,
                }}
              />
              <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-2 border-white/10 bg-[var(--color-surface)]">
                <span className="font-[family-name:var(--font-heading)] text-5xl font-bold text-white">
                  NV
                </span>
              </div>
            </motion.div>

            {/* Code snippet decoration */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-8 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-mono text-xs text-white/50 backdrop-blur-sm"
            >
              <span className="text-[#0EA5E9]">const</span>{' '}
              <span className="text-[#10B981]">engineer</span>{' '}
              <span className="text-white/30">=</span>{' '}
              <span className="text-[var(--color-accent)]">&quot;Nishchal&quot;</span>
              <span className="animate-pulse text-white">|</span>
            </motion.div>

            {/* Floating tech tags */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {['AI/ML', 'Full-Stack', 'Quant'].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + i * 0.2, duration: 0.5 }}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium text-white/40 backdrop-blur-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── About Me ───────────────────────────────────────────────────
const highlights = [
  {
    icon: Brain,
    title: 'AI/ML Engineer',
    description: 'LLMs, NLP, Computer Vision, and reinforcement learning systems',
    color: '#10B981',
  },
  {
    icon: Code2,
    title: 'Full-Stack Developer',
    description: 'Backend-focused (Node, Go, Python) with React/Next.js expertise',
    color: '#6C3AED',
  },
  {
    icon: Cloud,
    title: 'System Designer',
    description: 'Distributed systems with Kafka, gRPC, and microservices',
    color: '#0EA5E9',
  },
  {
    icon: Rocket,
    title: 'Fast Shipper',
    description: 'End-to-end delivery — from architecture to production deployment',
    color: '#F59E0B',
  },
];

function AboutMe() {
  return (
    <section className="section-padding bg-[var(--color-surface-light)]">
      <div className="mx-auto max-w-[1200px]">
        <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={stagger}>
          <motion.div variants={fadeUp} custom={0} className="mb-4 text-center">
            <h2 className="text-h1">
              About <span className="text-[var(--color-accent)]">Me</span>
            </h2>
          </motion.div>

          <motion.p variants={fadeUp} custom={1} className="mx-auto mb-12 max-w-2xl text-center text-body">
            Passionate about building scalable software systems and integrating
            AI/ML to solve real-world problems. 2+ years of industry experience
            shipping production applications, LLM-powered features, and high-traffic APIs.
          </motion.p>

          {/* Stats */}
          <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, i) => (
              <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} index={i} />
            ))}
          </div>

          {/* Bio + Highlights */}
          <div className="mb-16 grid gap-10 md:grid-cols-2">
            <motion.div variants={fadeUp} custom={3}>
              <h3 className="text-h2 mb-4">
                Building the Future with{' '}
                <span className="text-[var(--color-accent)]">AI & Code</span>
              </h3>
              <p className="text-body mb-3">
                I&apos;m Nishchal Vekariya, a Software Development Engineer who
                specializes in full-stack development and AI/ML integration. I&apos;ve
                built LLM-powered features with GPT-4 and RAG pipelines, engineered
                APIs handling 50K+ daily requests, and shipped production systems
                that are fast, reliable, and intelligent.
              </p>
              <p className="text-body">
                When I&apos;m not coding or researching, you&apos;ll find me analyzing
                the stock market, exploring new trading strategies, or working on my
                next side project.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} custom={4} className="space-y-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-white p-5 transition-all duration-200 hover:shadow-md"
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon size={22} style={{ color: item.color }} />
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-heading)] text-sm font-semibold">{item.title}</h4>
                    <p className="mt-0.5 text-sm text-[var(--color-text-muted)]">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Education & Experience */}
          <motion.div variants={fadeUp} custom={5} className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6C3AED]/10">
                  <GraduationCap size={20} className="text-[#6C3AED]" />
                </div>
                <h3 className="text-h3">Education</h3>
              </div>
              {education.map((edu, i) => (
                <div key={i} className={i > 0 ? 'mt-5 border-t border-[var(--color-border)] pt-5' : ''}>
                  <h4 className="font-[family-name:var(--font-heading)] text-sm font-semibold">{edu.degree}</h4>
                  <p className="mt-0.5 text-sm text-[var(--color-text-body)]">{edu.school}</p>
                  <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">{edu.period}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F59E0B]/10">
                  <Briefcase size={20} className="text-[#F59E0B]" />
                </div>
                <h3 className="text-h3">Experience</h3>
              </div>
              {experience.map((exp, i) => (
                <div key={i} className={i > 0 ? 'mt-5 border-t border-[var(--color-border)] pt-5' : ''}>
                  <h4 className="font-[family-name:var(--font-heading)] text-sm font-semibold">{exp.role}</h4>
                  <p className="mt-0.5 text-sm text-[var(--color-text-body)]">{exp.org}</p>
                  <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">{exp.period}</p>
                </div>
              ))}
            </div>
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
        <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={stagger}>
          <motion.div variants={fadeUp} custom={0} className="mb-4 text-center">
            <h2 className="text-h1">
              Selected <span className="text-[var(--color-accent)]">Projects</span>
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} custom={1} className="mx-auto mb-12 max-w-2xl text-center text-body">
            Production systems I&apos;ve designed and built — from distributed backends to AI-powered tools.
          </motion.p>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.slice(0, 4).map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i + 2} />
            ))}
          </div>

          <motion.div variants={fadeUp} custom={7} className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-[var(--color-border)] px-6 py-3 text-sm font-medium transition-all duration-200 hover:border-[var(--color-text-muted)] hover:shadow-sm"
            >
              View all projects
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Services ───────────────────────────────────────────────────
function Services() {
  return (
    <section className="section-padding bg-[var(--color-surface-light)]">
      <div className="mx-auto max-w-[1200px]">
        <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={stagger}>
          <motion.div variants={fadeUp} custom={0} className="mb-4 text-center">
            <h2 className="text-h1">
              What I <span className="text-[var(--color-accent)]">Build</span>
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} custom={1} className="mx-auto mb-12 max-w-2xl text-center text-body">
            Core engineering competencies — from full-stack products to AI pipelines and cloud infrastructure.
          </motion.p>

          <div className="space-y-3">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={cardReveal}
                custom={i + 2}
                className="group flex flex-col gap-4 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white p-6 transition-all duration-300 hover:border-[var(--color-text-muted)] hover:shadow-md md:flex-row md:items-start md:gap-8 md:p-8"
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

// ─── Skills & Proficiency ───────────────────────────────────────
type ProfLevel = 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';

const levelColors: Record<ProfLevel, string> = {
  Expert: 'var(--color-accent)',
  Advanced: '#6C3AED',
  Intermediate: '#0EA5E9',
  Beginner: '#94A3B8',
};

const skillGroups = [
  {
    title: 'Languages',
    icon: Code2,
    color: '#6C3AED',
    skills: [
      { n: 'Python', l: 'Expert' as ProfLevel },
      { n: 'TypeScript', l: 'Expert' as ProfLevel },
      { n: 'Go', l: 'Advanced' as ProfLevel },
      { n: 'Java', l: 'Advanced' as ProfLevel },
      { n: 'SQL', l: 'Advanced' as ProfLevel },
      { n: 'C++', l: 'Intermediate' as ProfLevel },
      { n: 'Rust', l: 'Beginner' as ProfLevel },
    ],
  },
  {
    title: 'Frontend',
    icon: Code2,
    color: '#0EA5E9',
    skills: [
      { n: 'React / Next.js', l: 'Expert' as ProfLevel },
      { n: 'Tailwind CSS', l: 'Expert' as ProfLevel },
      { n: 'Framer Motion', l: 'Advanced' as ProfLevel },
      { n: 'Redux / Zustand', l: 'Advanced' as ProfLevel },
      { n: 'React Native', l: 'Intermediate' as ProfLevel },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: Cloud,
    color: '#10B981',
    skills: [
      { n: 'Node.js / Express', l: 'Expert' as ProfLevel },
      { n: 'FastAPI / Django', l: 'Expert' as ProfLevel },
      { n: 'REST / GraphQL / gRPC', l: 'Expert' as ProfLevel },
      { n: 'WebSockets', l: 'Advanced' as ProfLevel },
      { n: 'OAuth / JWT', l: 'Advanced' as ProfLevel },
    ],
  },
  {
    title: 'Databases',
    icon: Cloud,
    color: '#8B5CF6',
    skills: [
      { n: 'PostgreSQL', l: 'Expert' as ProfLevel },
      { n: 'MongoDB', l: 'Advanced' as ProfLevel },
      { n: 'Redis', l: 'Advanced' as ProfLevel },
      { n: 'Vector DBs (Pinecone)', l: 'Advanced' as ProfLevel },
      { n: 'ClickHouse', l: 'Intermediate' as ProfLevel },
      { n: 'Elasticsearch', l: 'Beginner' as ProfLevel },
    ],
  },
  {
    title: 'AI & ML',
    icon: Brain,
    color: '#F59E0B',
    skills: [
      { n: 'LLMs / GPT-4 / Claude', l: 'Expert' as ProfLevel },
      { n: 'RAG Pipelines', l: 'Expert' as ProfLevel },
      { n: 'Prompt Engineering', l: 'Expert' as ProfLevel },
      { n: 'LangChain', l: 'Advanced' as ProfLevel },
      { n: 'PyTorch', l: 'Advanced' as ProfLevel },
      { n: 'NLP / NER', l: 'Advanced' as ProfLevel },
      { n: 'Computer Vision', l: 'Advanced' as ProfLevel },
      { n: 'Transformers / HF', l: 'Advanced' as ProfLevel },
      { n: 'MLOps', l: 'Intermediate' as ProfLevel },
      { n: 'RL (DQN/PPO)', l: 'Intermediate' as ProfLevel },
    ],
  },
  {
    title: 'Quant Finance',
    icon: Rocket,
    color: '#EC4899',
    skills: [
      { n: 'Technical Analysis', l: 'Expert' as ProfLevel },
      { n: 'pandas / NumPy', l: 'Expert' as ProfLevel },
      { n: 'Algo Trading', l: 'Advanced' as ProfLevel },
      { n: 'Backtesting', l: 'Advanced' as ProfLevel },
      { n: 'Time Series (ARIMA)', l: 'Advanced' as ProfLevel },
      { n: 'Risk Mgmt / VaR', l: 'Advanced' as ProfLevel },
      { n: 'Options / Greeks', l: 'Intermediate' as ProfLevel },
      { n: 'FinRL', l: 'Intermediate' as ProfLevel },
      { n: 'Market Microstructure', l: 'Beginner' as ProfLevel },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    color: '#F97316',
    skills: [
      { n: 'Docker', l: 'Expert' as ProfLevel },
      { n: 'Git / GitHub', l: 'Expert' as ProfLevel },
      { n: 'AWS', l: 'Advanced' as ProfLevel },
      { n: 'CI/CD', l: 'Advanced' as ProfLevel },
      { n: 'Linux', l: 'Advanced' as ProfLevel },
      { n: 'Kubernetes', l: 'Intermediate' as ProfLevel },
      { n: 'Terraform', l: 'Beginner' as ProfLevel },
    ],
  },
  {
    title: 'Data & Infra',
    icon: Rocket,
    color: '#14B8A6',
    skills: [
      { n: 'Kafka', l: 'Advanced' as ProfLevel },
      { n: 'Distributed Systems', l: 'Advanced' as ProfLevel },
      { n: 'ETL Pipelines', l: 'Advanced' as ProfLevel },
      { n: 'Grafana / Prometheus', l: 'Intermediate' as ProfLevel },
      { n: 'Spark', l: 'Beginner' as ProfLevel },
      { n: 'Airflow', l: 'Beginner' as ProfLevel },
    ],
  },
];

function SkillPill({ name, level }: { name: string; level: ProfLevel }) {
  const color = levelColors[level];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-all duration-200 hover:shadow-sm"
      style={{
        borderColor: `${color}30`,
        backgroundColor: `${color}08`,
        color,
      }}
    >
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ backgroundColor: color }}
      />
      {name}
    </span>
  );
}

function SkillsSection() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-[1200px]">
        <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={stagger}>
          <motion.div variants={fadeUp} custom={0} className="mb-4 text-center">
            <h2 className="text-h1">
              Skills & <span className="text-[var(--color-accent)]">Proficiency</span>
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} custom={1} className="mx-auto mb-10 max-w-2xl text-center text-body">
            Grouped by domain — full-stack, AI/ML, quant finance, and cloud infrastructure.
          </motion.p>

          {/* Compact 2x4 grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.title}
                variants={cardReveal}
                custom={gi + 2}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-light)] p-4 transition-all duration-200 hover:shadow-md"
              >
                <div className="mb-3 flex items-center gap-2">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${group.color}12` }}
                  >
                    <group.icon size={16} style={{ color: group.color }} />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((s) => (
                    <SkillPill key={s.n} name={s.n} level={s.l} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <motion.div variants={fadeUp} custom={11} className="mt-6 flex flex-wrap items-center justify-center gap-5">
            {(['Expert', 'Advanced', 'Intermediate', 'Beginner'] as ProfLevel[]).map((level) => (
              <div key={level} className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: levelColors[level] }} />
                <span className="text-[11px] font-medium text-[var(--color-text-muted)]">{level}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Contact Section ────────────────────────────────────────────
const contactCards = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, color: '#0EA5E9' },
  { icon: MapPin, label: 'Location', value: 'Dallas, Texas, USA (CST)', href: null, color: '#F43F5E' },
  { icon: Globe, label: 'Website', value: 'nishchalvekariya.com', href: '/', color: '#10B981' },
];

const socialLinksData = [
  { icon: Linkedin, label: 'LinkedIn', href: profile.social.linkedin, color: '#0A66C2' },
  { icon: Github, label: 'GitHub', href: profile.social.github, color: '#333333' },
];

function ContactSection() {
  const inputClasses =
    'w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3.5 text-sm outline-none transition-all duration-200 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/10 placeholder:text-[var(--color-text-muted)]';

  return (
    <section id="contact" className="section-padding bg-[var(--color-surface-light)]">
      <div className="mx-auto max-w-[1200px]">
        <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={stagger}>
          <motion.div variants={fadeUp} custom={0} className="mb-4 text-center">
            <h2 className="text-h1">
              Get in <span className="text-[var(--color-accent)]">Touch</span>
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} custom={1} className="mx-auto mb-12 max-w-2xl text-center text-body">
            Looking for a Software Engineer or AI/ML specialist? Let&apos;s connect.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          variants={stagger}
          className="grid gap-12 lg:grid-cols-2"
        >
          {/* Left — Contact Info */}
          <div>
            <div className="space-y-4">
              {contactCards.map((card, i) => (
                <motion.div key={card.label} variants={fadeUp} custom={i + 2}>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.href.startsWith('http') ? '_blank' : undefined}
                      rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="group flex items-center gap-4 rounded-2xl border border-[var(--color-border)] bg-white p-5 transition-all duration-200 hover:border-[var(--color-accent)]/30 hover:shadow-md"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: `${card.color}15` }}>
                        <card.icon size={22} style={{ color: card.color }} />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-[var(--color-text-muted)]">{card.label}</p>
                        <p className="font-[family-name:var(--font-heading)] text-sm font-semibold">{card.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 rounded-2xl border border-[var(--color-border)] bg-white p-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: `${card.color}15` }}>
                        <card.icon size={22} style={{ color: card.color }} />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-[var(--color-text-muted)]">{card.label}</p>
                        <p className="font-[family-name:var(--font-heading)] text-sm font-semibold">{card.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} custom={6} className="mt-8">
              <h3 className="mb-4 font-[family-name:var(--font-heading)] text-sm font-semibold">Connect on Social</h3>
              <div className="flex gap-3">
                {socialLinksData.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-200 hover:scale-110 hover:shadow-md"
                    style={{ backgroundColor: `${link.color}15` }}
                    title={link.label}
                  >
                    <link.icon size={22} style={{ color: link.color }} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div variants={fadeUp} custom={2}>
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-8">
              <h2 className="text-h3 mb-6">Send a Message</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const data = new FormData(form);
                  const name = `${data.get('firstName')} ${data.get('lastName')}`.trim();
                  const subject = (data.get('subject') as string) || `Contact from ${name}`;
                  const body = `Name: ${name}\nEmail: ${data.get('email')}\n\nMessage:\n${data.get('message')}`;
                  window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }}
                className="space-y-5"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="hp-fn" className="mb-2 block font-[family-name:var(--font-heading)] text-xs font-medium text-[var(--color-text-body)]">First Name *</label>
                    <input id="hp-fn" name="firstName" type="text" required placeholder="John" className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="hp-ln" className="mb-2 block font-[family-name:var(--font-heading)] text-xs font-medium text-[var(--color-text-body)]">Last Name *</label>
                    <input id="hp-ln" name="lastName" type="text" required placeholder="Doe" className={inputClasses} />
                  </div>
                </div>
                <div>
                  <label htmlFor="hp-em" className="mb-2 block font-[family-name:var(--font-heading)] text-xs font-medium text-[var(--color-text-body)]">Email *</label>
                  <input id="hp-em" name="email" type="email" required placeholder="john@example.com" className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="hp-su" className="mb-2 block font-[family-name:var(--font-heading)] text-xs font-medium text-[var(--color-text-body)]">Subject *</label>
                  <input id="hp-su" name="subject" type="text" required placeholder="Let's discuss a project" className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="hp-ms" className="mb-2 block font-[family-name:var(--font-heading)] text-xs font-medium text-[var(--color-text-body)]">Message *</label>
                  <textarea id="hp-ms" name="message" required rows={5} placeholder="Tell me about your project or idea..." className={`${inputClasses} resize-none`} />
                </div>
                <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--color-accent-hover)] hover:shadow-lg hover:shadow-[var(--color-accent)]/20">
                  Send Message
                  <ArrowUpRight size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
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
        <AboutMe />
        <SelectedProjects />
        <Services />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
