'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Globe, Github, Linkedin, Send, ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// FAQ removed
import { profile } from '@/lib/data';
import { fadeUp, stagger } from '@/lib/animations';

const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    color: '#0EA5E9',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Dallas, Texas, USA (CST)',
    href: null,
    color: '#F43F5E',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'nishchalvekariya.com',
    href: '/',
    color: '#10B981',
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: profile.social.linkedin,
    color: '#0A66C2',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: profile.social.github,
    color: '#333333',
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullName = `${formState.firstName} ${formState.lastName}`.trim();
    const subject = formState.subject || `Portfolio Contact from ${fullName}`;
    const body = `Name: ${fullName}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const inputClasses =
    'w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3.5 text-sm outline-none transition-all duration-200 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/10 placeholder:text-[var(--color-text-muted)]';

  return (
    <>
      <Navbar />
      <main>
        {/* Dark hero header — matches home page */}
        <section className="bg-[var(--color-surface)] pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.h1 variants={fadeUp} custom={0} className="text-h1 text-white">
                Let&apos;s work
                <br />
                <span className="text-[var(--color-accent)]">together</span>
              </motion.h1>
              <motion.p variants={fadeUp} custom={1} className="mt-4 max-w-lg text-base leading-relaxed text-white/60">
                Have a project in mind or looking to hire? Fill out the form and
                I&apos;ll get back to you within 24 hours.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding pt-12">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="grid gap-12 lg:grid-cols-2"
            >
              {/* Left — Contact Info */}
              <div>
                <motion.h3 variants={fadeUp} custom={0} className="text-h3 mb-6">
                  Contact Info
                </motion.h3>

                {/* Contact cards */}
                <div className="space-y-4">
                  {contactCards.map((card, i) => (
                    <motion.div
                      key={card.label}
                      variants={fadeUp}
                      custom={i + 1}
                    >
                      {card.href ? (
                        <a
                          href={card.href}
                          target={card.href.startsWith('http') ? '_blank' : undefined}
                          rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                          className="group flex items-center gap-4 rounded-2xl border border-[var(--color-border)] bg-white p-5 transition-all duration-200 hover:border-[var(--color-accent)]/30 hover:shadow-md"
                        >
                          <div
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                            style={{ backgroundColor: `${card.color}15` }}
                          >
                            <card.icon size={22} style={{ color: card.color }} />
                          </div>
                          <div>
                            <p className="text-xs font-medium text-[var(--color-text-muted)]">
                              {card.label}
                            </p>
                            <p className="font-[family-name:var(--font-heading)] text-sm font-semibold">
                              {card.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 rounded-2xl border border-[var(--color-border)] bg-white p-5">
                          <div
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                            style={{ backgroundColor: `${card.color}15` }}
                          >
                            <card.icon size={22} style={{ color: card.color }} />
                          </div>
                          <div>
                            <p className="text-xs font-medium text-[var(--color-text-muted)]">
                              {card.label}
                            </p>
                            <p className="font-[family-name:var(--font-heading)] text-sm font-semibold">
                              {card.value}
                            </p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Social links */}
                <motion.div variants={fadeUp} custom={5} className="mt-8">
                  <h3 className="mb-4 font-[family-name:var(--font-heading)] text-sm font-semibold">
                    Connect on Social
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map((link) => (
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
              <motion.div variants={fadeUp} custom={1}>
                <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-8">
                  {submitted ? (
                    <div className="flex min-h-[400px] items-center justify-center">
                      <div className="text-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', duration: 0.5 }}
                          className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
                        >
                          <Send size={24} className="text-green-600" />
                        </motion.div>
                        <h3 className="text-h3 mb-2">Message sent!</h3>
                        <p className="text-body">
                          Your email client should have opened. I&apos;ll get back to you soon.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-h3 mb-6">Send a Message</h2>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* First + Last Name row */}
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label
                              htmlFor="firstName"
                              className="mb-2 block font-[family-name:var(--font-heading)] text-xs font-medium text-[var(--color-text-body)]"
                            >
                              First Name *
                            </label>
                            <input
                              id="firstName"
                              type="text"
                              required
                              placeholder="John"
                              value={formState.firstName}
                              onChange={(e) =>
                                setFormState({ ...formState, firstName: e.target.value })
                              }
                              className={inputClasses}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="lastName"
                              className="mb-2 block font-[family-name:var(--font-heading)] text-xs font-medium text-[var(--color-text-body)]"
                            >
                              Last Name *
                            </label>
                            <input
                              id="lastName"
                              type="text"
                              required
                              placeholder="Doe"
                              value={formState.lastName}
                              onChange={(e) =>
                                setFormState({ ...formState, lastName: e.target.value })
                              }
                              className={inputClasses}
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <label
                            htmlFor="email"
                            className="mb-2 block font-[family-name:var(--font-heading)] text-xs font-medium text-[var(--color-text-body)]"
                          >
                            Email *
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            placeholder="john@example.com"
                            value={formState.email}
                            onChange={(e) =>
                              setFormState({ ...formState, email: e.target.value })
                            }
                            className={inputClasses}
                          />
                        </div>

                        {/* Subject */}
                        <div>
                          <label
                            htmlFor="subject"
                            className="mb-2 block font-[family-name:var(--font-heading)] text-xs font-medium text-[var(--color-text-body)]"
                          >
                            Subject *
                          </label>
                          <input
                            id="subject"
                            type="text"
                            required
                            placeholder="Let's discuss a project"
                            value={formState.subject}
                            onChange={(e) =>
                              setFormState({ ...formState, subject: e.target.value })
                            }
                            className={inputClasses}
                          />
                        </div>

                        {/* Message */}
                        <div>
                          <label
                            htmlFor="message"
                            className="mb-2 block font-[family-name:var(--font-heading)] text-xs font-medium text-[var(--color-text-body)]"
                          >
                            Message *
                          </label>
                          <textarea
                            id="message"
                            required
                            rows={5}
                            placeholder="Tell me about your project or idea..."
                            value={formState.message}
                            onChange={(e) =>
                              setFormState({ ...formState, message: e.target.value })
                            }
                            className={`${inputClasses} resize-none`}
                          />
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--color-accent-hover)] hover:shadow-lg hover:shadow-[var(--color-accent)]/20"
                        >
                          Send Message
                          <ArrowUpRight size={16} />
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
