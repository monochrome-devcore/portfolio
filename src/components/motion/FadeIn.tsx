import { motion } from 'motion/react';
import { fadeUp } from '@/lib/motion/variants';
import type { HTMLMotionProps } from 'motion/react';

type Props = HTMLMotionProps<'div'> & {
  delay?: number;
};

const FadeIn = ({ delay = 0, children, ...props }: Props) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
