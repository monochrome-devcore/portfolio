import React from 'react';
import { motion } from 'motion/react';
import type { HTMLMotionProps } from 'motion/react';

interface FloatProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
}

export const Float = ({ children, transition, ...props }: FloatProps) => {
  return (
    <motion.div
      whileInView={{ y: [0, 12, 0] }}
      transition={{
        ...transition,
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
