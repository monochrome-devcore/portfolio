// Libs
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { LazyMotion, domAnimation, MotionConfig } from 'motion/react';

// Router
import { router } from '@/routes/index.tsx';

// Style
import './index.css';
import { ThemeProvider } from '@/theme/ThemeProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">
          <RouterProvider router={router} />
        </MotionConfig>
      </LazyMotion>
    </ThemeProvider>
  </StrictMode>,
);
