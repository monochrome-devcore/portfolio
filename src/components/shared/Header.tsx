// Libs
import { Link } from 'react-router';

// Assets
import AvatarImg from '@/assets/avatar.jpg';

// Components
import { useTheme } from '@/theme/useTheme';
import ThemeCord from '@/components/shared/ThemeCord';
import FadeIn from '@/components/motion/FadeIn';
import { StaggerContainer } from '@/components/motion/Stagger';
import { ScaleIn } from '@/components/motion/ScaleIn';

// Utils
import { cn } from '@/lib/utils';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={cn('mt-10', 'max-md:mt-12')}>
      <div
        className={cn(
          'container flex gap-10 px-8 py-0',
          'max-xl:flex-col',
          'max-md:py-0 max-md:px-4',
        )}
      >
        <div
          className={cn(
            'flex items-center flex-1 gap-8',
            'max-xl:flex-col max-xl:items-center',
          )}
        >
          <ScaleIn className={cn('relative shrink-0')}>
            <div
              className={cn(
                'absolute inset-0 z-0 rounded-full bg-primary animate-voice-ripple',
                'dark:base-gradient',
              )}
            />

            <div
              className={cn(
                'absolute inset-0 rounded-full bg-primary animate-voice-ripple [animation-delay:1000ms] z-0',
                'dark:base-gradient',
              )}
            />

            <div
              className={cn(
                'absolute inset-0 rounded-full bg-primary animate-voice-ripple [animation-delay:2000ms] z-0',
                'dark:base-gradient',
              )}
            />

            <img
              src={AvatarImg}
              alt="avatar"
              className={cn(
                'relative w-[118px] h-[118px] rounded-full shrink-0 object-cover z-1',
              )}
            />
          </ScaleIn>

          <StaggerContainer
            className={cn('flex flex-col gap-2', 'max-xl:items-center')}
          >
            <FadeIn>
              <h2
                className={cn('text-[26px] font-semibold', 'max-md:text-2xl')}
              >
                Monochrome
              </h2>
            </FadeIn>

            <FadeIn>
              <div
                className={cn('flex gap-1.5 text-center', 'max-md:flex-col')}
              >
                <div
                  className={cn(
                    'px-3 py-1 text-sm rounded-[8px] text-blue-950 dark:text-foreground bg-blue-50 dark:bg-[#1c2142]',
                  )}
                >
                  Lập trình website
                </div>

                <div
                  className={cn(
                    'px-3 py-1 text-sm rounded-[8px] text-blue-950 dark:text-foreground bg-blue-50 dark:bg-[#1c2142] line-clamp-1',
                  )}
                >
                  Frontend developer
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <p
                className={cn(
                  // 'text-neutral-600',
                  'text-muted-foreground',
                  'max-xl:text-center max-xl:max-w-screen-xs',
                )}
              >
                Mong muốn ứng tuyển vị trí{' '}
                <span
                  className={cn(
                    'font-semibold text-blue-950 dark:text-foreground',
                  )}
                >
                  Junior Developer
                </span>{' '}
                trong lĩnh vực phát triển website.
              </p>
            </FadeIn>
          </StaggerContainer>
        </div>

        <StaggerContainer
          className={cn(
            'flex flex-col items-end flex-1 gap-2',
            'max-xl:items-center max-xl:text-center',
          )}
        >
          <FadeIn>
            <h2 className={cn('text-[26px] font-semibold', 'max-md:text-2xl')}>
              Thông Tin Liên Hệ
            </h2>
          </FadeIn>

          <FadeIn>
            <p className={cn('text-muted-foreground')}>
              Gửi email cho mình tại:{' '}
              <span
                className={cn(
                  'font-semibold text-blue-950 dark:text-foreground',
                )}
              >
                monochrome.dev@gmail.com
              </span>
            </p>
          </FadeIn>

          <FadeIn>
            <p className={cn('text-muted-foreground')}>
              Github của mình:{' '}
              <span
                className={cn(
                  'font-semibold text-blue-950 dark:text-foreground',
                )}
              >
                <Link
                  to={'https://github.com/monochrome-devcore'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/monochrome-devcore
                </Link>
              </span>
            </p>
          </FadeIn>
        </StaggerContainer>
      </div>

      {/* Toggle đổi theme */}
      <ThemeCord dark={theme === 'dark'} onToggle={toggleTheme} />
    </header>
  );
};

export default Header;
