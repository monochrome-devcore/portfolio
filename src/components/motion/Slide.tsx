import React from 'react';
import type { HTMLMotionProps } from 'motion/react';
import { motion } from 'motion/react';
import { ease, slideLeft, slideRight } from '@/lib/motion/variants';

interface SlideLeft extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
}
interface SlideRight extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
}

export const SlideLeft = ({ children, transition, ...props }: SlideLeft) => {
  return (
    <motion.div
      variants={slideLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...ease, ...transition }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const SlideRight = ({ children, transition, ...props }: SlideRight) => {
  return (
    <motion.div
      variants={slideRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...ease, ...transition }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
