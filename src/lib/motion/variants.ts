/**
 * variants + transition dùng chung
 */

import type { Transition, Variants } from 'motion/react';

export const spring: Transition = {
  type: 'spring',
  duration: 0.45,
  bounce: 0.15,
};

export const ease: Transition = {
  duration: 0.3,
  ease: [0.22, 1, 0.36, 1],
};

// 1) Nội dung chung: text, card
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: ease },
};

// 2) Khối lớn/ảnh: trượt theo hướng
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
  },
};
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0 },
};

// 3) Phần tử nhỏ: badge, pill
export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: spring },
};

// 4) Card nổi bật (hero)
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: spring },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: ease },
};

export const stagger = (gap = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: gap, delayChildren: delay } },
});

// ----------------

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Khoảng cách xuất hiện của các item
      delayChildren: 0.2, // Thời gian sau khi thẻ cha xuất hiện thì con mới xuất hiện
    },
  },
};

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};
