import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, MapPin, Sun, Moon, ExternalLink, Award, Code2, Briefcase, GraduationCap } from "lucide-react";

// === Quick Edit Profile (change these and the whole site updates) ===
const profile = {
  name: "Nishchal Patel",
  title: "Software Development Engineer · AI/ML Engineer",
  tagline:
    "I build fast, clean products—systems that scale and models that learn.",
  location: "Dallas, USA",
  email: "you@example.com",
  social: {
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-link/",
    resume: "#", // link to your PDF resume
  },
};

const skills = [
  { group: "Core", items: ["Python", "TypeScript", "React", "Node", "Postgres"] },
  { group: "AI/ML", items: ["PyTorch", "scikit-learn", "FinRL", "OpenCV", "HuggingFace"] },
  { group: "Systems", items: ["Docker", "GitHub Actions", "Vercel", "AWS", "Redis"] },
];

const projects = [
  {
    name: "Market Mood Radar",
    description:
      "News & social sentiment engine with entity-level signals and alerting; ETL + FinBERT + Streamlit dashboard.",
    tags: ["Python", "NLP", "Postgres", "Docker"],
    link: "https://your-live-demo-or-repo",
  },
  {
    name: "StoneAlgo‑like Diamond Store",
    description:
      "E‑commerce clone with search, filters, and pricing curves; deployed on Vercel with serverless API routes.",
    tags: ["Next.js", "TypeScript", "Prisma", "Neon"],
    link: "https://your-live-demo-or-repo",
  },
  {
    name: "GlobalRides Platform",
    description:
      "Full‑stack ride delivery system: ERD, analytics views, role‑based auth, and CI/CD.",
    tags: ["React", "FastAPI", "Postgres", "CI/CD"],
    link: "https://your-live-demo-or-repo",
  },
];

const experience = [
  {
    role: "Graduate Research / Projects",
    org: "UT Dallas",
    period: "2024 – 2025",
    bullets: [
      "Implemented neural classifiers and gradient checks on CIFAR‑10.",
      "Built RL prototypes for trading strategies (DQN/PPO).",
      "Designed analytics SQL views for GlobalRides project.",
    ],
  },
  {
    role: "Freelance / Builder",
    org: "Self‑initiated",
    period: "Ongoing",
    bullets: [
      "Shipped 10+ small apps, dashboards, and automations.",
      "End‑to‑end deployments with logging, metrics, and uptime checks.",
    ],
  },
];

const education = [
  {
    degree: "M.S. in Computer Engineering",
    school: "University of Texas at Dallas",
    period: "2024 – 2025",
  },
];

const Section = ({ id, title, icon, children }) => (
  <section id={id} className="scroll-mt-24 py-12 md:py-16">
    <div className="mx-auto max-w-6xl px-4">
      <div className="mb-8 flex items-center gap-3">
        {icon}
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

const Chip = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm">
    {children}
  </span>
);

const Card = ({ children, href }) => (
  <motion.a
    href={href || "#"}
    target={href ? "_blank" : undefined}
    rel="noreferrer noopener"
    whileHover={{ y: -4 }}
    className="block rounded-2xl border p-5 transition-shadow hover:shadow-lg"
  >
    {children}
  </motion.a>
);

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const theme = useMemo(() => (dark ? "dark" : ""), [dark]);

  return (
    <div className={theme}>
      <div className="min-h-screen bg-white text-neutral-800 transition-colors dark:bg-neutral-950 dark:text-neutral-100">
        {/* Nav */}
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-neutral-950/40">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <a href="#home" className="font-semibold tracking-tight">
              {profile.name}
            </a>
            <nav className="hidden items-center gap-6 text-sm md:flex">
              <a href="#projects" className="hover:opacity-80">Projects</a>
              <a href="#experience" className="hover:opacity-80">Experience</a>
              <a href="#skills" className="hover:opacity-80">Skills</a>
              <a href="#education" className="hover:opacity-80">Education</a>
              <a href="#contact" className="hover:opacity-80">Contact</a>
            </nav>
            <button
              onClick={() => setDark((d) => !d)}
              className="rounded-2xl border px-3 py-1 text-sm"
              aria-label="Toggle theme"
            >
              {dark ? (
                <span className="inline-flex items-center gap-2"><Sun size={16}/> Light</span>
              ) : (
                <span className="inline-flex items-center gap-2"><Moon size={16}/> Dark</span>
              )}
            </button>
          </div>
        </header>

        {/* Hero */}
        <section id="home" className="relative overflow-hidden pb-8 pt-16 md:pb-16 md:pt-24">
          <div className="mx-auto max-w-6xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid items-center gap-8 md:grid-cols-2"
            >
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
                  <MapPin size={14} /> {profile.location}
                </div>
                <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                  {profile.title}
                </h1>
                <p className="mt-4 max-w-xl text-base/7 text-neutral-600 dark:text-neutral-300">
                  {profile.tagline}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a href={profile.social.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:shadow">
                    <Github size={18}/> GitHub
                  </a>
                  <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:shadow">
                    <Linkedin size={18}/> LinkedIn
                  </a>
                  {profile.social.resume !== "#" && (
                    <a href={profile.social.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:shadow">
                      <ExternalLink size={18}/> Resume
                    </a>
                  )}
                </div>
              </div>
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mx-auto aspect-square w-64 rounded-3xl border p-2 shadow-sm md:w-80"
                >
                  <div className="flex h-full items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 text-neutral-700 dark:from-neutral-900 dark:to-neutral-800 dark:text-neutral-300">
                    <span className="text-center text-sm">Add your photo/logo here</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <Section id="projects" title="Featured Projects" icon={<Code2 className="h-6 w-6"/>}>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Card key={i} href={p.link}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{p.description}</p>
                  </div>
                  <ArrowUpRight size={18} className="shrink-0"/>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience" icon={<Briefcase className="h-6 w-6"/>}>
          <div className="grid gap-4">
            {experience.map((e, idx) => (
              <div key={idx} className="rounded-2xl border p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold md:text-lg">{e.role}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">{e.org}</p>
                  </div>
                  <span className="text-sm opacity-80">{e.period}</span>
                </div>
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills" icon={<Award className="h-6 w-6"/>}>
          <div className="grid gap-4 md:grid-cols-3">
            {skills.map((s, i) => (
              <div key={i} className="rounded-2xl border p-5">
                <h3 className="text-sm font-semibold tracking-wide text-neutral-500 dark:text-neutral-400">{s.group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <Chip key={it}>{it}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education" icon={<GraduationCap className="h-6 w-6"/>}>
          <div className="grid gap-4">
            {education.map((ed, idx) => (
              <div key={idx} className="rounded-2xl border p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold md:text-lg">{ed.degree}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">{ed.school}</p>
                  </div>
                  <span className="text-sm opacity-80">{ed.period}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact" icon={<Mail className="h-6 w-6"/>}>
          <div className="rounded-2xl border p-6">
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Want to collaborate or hire me? I'm open to SDE and AI/ML roles. Drop a line:
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
              <a className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:shadow" href={`mailto:${profile.email}`}>
                <Mail size={18}/> {profile.email}
              </a>
              <a className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:shadow" href={profile.social.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18}/> LinkedIn
              </a>
              <a className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:shadow" href={profile.social.github} target="_blank" rel="noreferrer">
                <Github size={18}/> GitHub
              </a>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="border-t py-8">
          <div className="mx-auto max-w-6xl px-4 text-sm text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} {profile.name}. Built with React, Motion, and a dash of caffeine.
          </div>
        </footer>
      </div>
    </div>
  );
}
