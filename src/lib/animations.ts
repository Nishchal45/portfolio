// ─── Animation Variants (matching Martha template) ──────────────
// Custom easing from Martha: [0.12, 0.23, 0.5, 1]

export const EASE_SMOOTH = [0.12, 0.23, 0.5, 1] as const;

// Hero image — dramatic entrance
export const heroImage = {
  hidden: { opacity: 0, y: 400, scale: 0.7 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: EASE_SMOOTH },
  },
};

// Hero text — scale up + fade
export const heroScale = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: EASE_SMOOTH },
  }),
};

// Section — slide up from 50px + scale
export const slideUpScale = {
  hidden: { opacity: 0, y: 50, scale: 0.7 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: EASE_SMOOTH },
  }),
};

// Subtle slide up (CTA, cards)
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: EASE_SMOOTH },
  }),
};

// Fade in only
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: EASE_SMOOTH },
  }),
};

// Stagger parent
export const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// Slide from left
export const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: EASE_SMOOTH },
  }),
};
