// ─── Animation Variants ─────────────────────────────────────────
// Consistent easing and timing across all sections

export const EASE_SMOOTH = [0.12, 0.23, 0.5, 1] as const;

// Hero text — clean fade + slide up (no scale)
export const heroReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.2 + i * 0.15, ease: EASE_SMOOTH },
  }),
};

// Hero image — dramatic entrance
export const heroImage = {
  hidden: { opacity: 0, y: 100, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, delay: 0.4, ease: EASE_SMOOTH },
  },
};

// Standard section reveal — subtle slide up
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: EASE_SMOOTH },
  }),
};

// Card reveal — slightly more movement
export const cardReveal = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: EASE_SMOOTH },
  }),
};

// Stagger parent
export const stagger = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
