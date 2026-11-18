import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';
import { scaleIn } from '@/lib/motion/variants';

interface ScaleInProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
}

export const ScaleIn = ({ children, ...props }: ScaleInProps) => {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
