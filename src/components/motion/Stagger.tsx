import { motion } from 'motion/react';
import type { HTMLMotionProps } from 'motion/react';
import { staggerContainer, staggerItem } from '@/lib/motion/variants';

export const StaggerContainer = ({
  children,
  ...props
}: HTMLMotionProps<'div'>) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, ...props }: HTMLMotionProps<'div'>) => {
  return (
    <motion.div variants={staggerItem} {...props}>
      {children}
    </motion.div>
  );
};
