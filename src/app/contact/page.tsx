'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { profile } from '@/lib/data';
import { fadeUp, heroScale, stagger } from '@/lib/animations';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto with form data
    const subject = `Portfolio Contact from ${formState.name}`;
    const body = `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-8 md:pt-40 md:pb-12">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.h1 variants={heroScale} custom={0} className="text-h1">
                Let&apos;s work
                <br />
                together
              </motion.h1>
              <motion.p variants={heroScale} custom={1} className="text-body mt-4 max-w-lg">
                Have a project in mind or just want to say hello? Fill out the form below
                and I&apos;ll get back to you within 24 hours.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form + Social */}
        <section className="section-padding pt-0">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid gap-12 md:grid-cols-2"
            >
              {/* Form */}
              <motion.div variants={fadeUp} custom={0}>
                {submitted ? (
                  <div className="flex h-full items-center">
                    <div>
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <Send size={24} className="text-green-600" />
                      </div>
                      <h3 className="text-h3 mb-2">Message sent!</h3>
                      <p className="text-body">
                        Thanks for reaching out. Your email client should have opened with the
                        message. I&apos;ll get back to you soon.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block font-[family-name:var(--font-heading)] text-sm font-medium"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white px-4 py-3.5 text-sm outline-none transition-colors focus:border-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block font-[family-name:var(--font-heading)] text-sm font-medium"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="Your email address"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white px-4 py-3.5 text-sm outline-none transition-colors focus:border-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block font-[family-name:var(--font-heading)] text-sm font-medium"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        placeholder="Tell me about your project or idea!"
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full resize-none rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white px-4 py-3.5 text-sm outline-none transition-colors focus:border-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-[var(--color-accent)] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--color-accent-hover)] hover:scale-[1.02]"
                    >
                      Send Message
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                        <ArrowUpRight size={14} />
                      </span>
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Social / Contact info */}
              <motion.div variants={fadeUp} custom={1}>
                <div className="rounded-[var(--radius-card)] bg-[var(--color-surface-light)] p-8">
                  <h3 className="text-h4 mb-6">Contact info</h3>

                  <div className="space-y-5">
                    <div>
                      <p className="text-small mb-1">Email</p>
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-sm font-medium transition-colors hover:text-[var(--color-accent)]"
                      >
                        {profile.email}
                      </a>
                    </div>

                    <div>
                      <p className="text-small mb-1">Location</p>
                      <p className="text-sm font-medium">{profile.location}</p>
                    </div>

                    <div>
                      <p className="text-small mb-1">Social</p>
                      <div className="flex flex-col gap-2">
                        <a
                          href={profile.social.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--color-accent)]"
                        >
                          GitHub <ArrowUpRight size={14} className="text-[var(--color-text-muted)]" />
                        </a>
                        <a
                          href={profile.social.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--color-accent)]"
                        >
                          LinkedIn <ArrowUpRight size={14} className="text-[var(--color-text-muted)]" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick response note */}
                <div className="mt-6 rounded-[var(--radius-card)] border border-[var(--color-border)] p-6">
                  <p className="text-h5 mb-1">Quick response</p>
                  <p className="text-small">
                    I typically respond within 24 hours. For urgent inquiries,
                    reach out directly on LinkedIn.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
    </>
  );
}
