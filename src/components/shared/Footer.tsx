// Components
import FadeIn from '@/components/motion/FadeIn';

// Utils
import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <footer
      className={cn(
        'py-10 text-neutral-600 text-center bg-linear-to-b from-[hsla(0,0%,100%,0)] to-[hsl(215,100%,94%)] max-w-none',
        'max-xl:text-sm',
        'dark:text-muted-foreground dark:bg-[linear-gradient(transparent,rgba(120,150,255,.12))]',
      )}
    >
      <div className="container mx-auto">
        <FadeIn>
          <p className="">
            © {new Date().getFullYear()} Develop by{' '}
            <span
              className={cn('font-semibold text-blue-950 dark:text-foreground')}
            >
              Monochrome
            </span>{' '}
            ❤️
          </p>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;
