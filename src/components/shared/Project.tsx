// Libs
import { Link } from 'react-router';

// Components
import { Card, CardContent } from '@/components/ui/card';
import { StaggerContainer, StaggerItem } from '@/components/motion/Stagger';
import FadeIn from '@/components/motion/FadeIn';

// Utils
import { cn } from '@/lib/utils';

// Data
import { mockProjectData } from '@/data/projectData';

const Project = () => {
  return (
    <section
      id="ProjectContainer"
      className={cn(
        'mb-30 pt-10 mt-20',
        'max-xl:mt-10 max-xl:pt-10 max-xl:mb-20',
      )}
    >
      <div className={cn('container flex flex-col gap-8 mx-auto')}>
        {/* Header */}
        <StaggerContainer className={cn('flex flex-col items-center gap-4')}>
          <FadeIn>
            <h1
              className={cn('text-[32px] font-semibold', 'max-md:text-[26px]')}
            >
              Dự Án Thực Chiến
            </h1>
          </FadeIn>

          <FadeIn>
            <p
              className={cn(
                'text-center max-w-[65ch] text-neutral-600 px-4 text-pretty',
                'dark:text-muted-foreground',
              )}
            >
              Bộ sưu tập các dự án do mình thiết kế và tham gia này giúp mình
              củng cố và hoàn thiện những kỹ năng, kỹ thuật cũng như khả năng
              giải quyết vấn đề một cách sáng tạo.
            </p>
          </FadeIn>
        </StaggerContainer>

        {/* Cards */}
        <StaggerContainer
          className={cn(
            'grid mx-auto max-w-[90%] grid-cols-[repeat(auto-fit,minmax(auto,340px))] gap-8 justify-center content-center',
          )}
        >
          {mockProjectData.map((project) => (
            <StaggerItem key={project.id}>
              <Card
                className={cn(
                  'group text-base border border-blue-950/5 rounded-[16px] bg-white p-0 shadow-md ring-0 transition-all duration-350 ease-out',
                  'dark:bg-[#1c2142] dark:border-[#262b52]',
                  'hover:shadow-xl hover:-translate-y-1.5 active:scale-[0.97]',
                )}
              >
                <Link
                  to={project.demoUrl || project.githubUrl || ''}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn('flex flex-col flex-1')}
                >
                  <CardContent className={cn('p-0 flex flex-col flex-1')}>
                    <div className={cn('p-5')}>
                      <img
                        src={project.image}
                        alt="project 1"
                        className={cn(
                          'aspect-video object-cover rounded-[8px] transition-all duration-500 ease-initial',
                        )}
                        loading="lazy"
                      />
                    </div>

                    <div className={cn('flex flex-col px-5 pb-5 gap-5 flex-1')}>
                      <div className={cn('flex flex-1 flex-col gap-1')}>
                        <h3
                          className={cn(
                            'text-xl font-semibold capitalize text-blue-950 line-clamp-1',
                            'dark:text-[#eef0ff]',
                          )}
                        >
                          {project.title}
                        </h3>

                        <p
                          className={cn(
                            'text-base text-neutral-600 line-clamp-3 text-pretty',
                            'dark:text-muted-foreground',
                          )}
                        >
                          {project.description}
                        </p>
                      </div>

                      <p className={cn('text-[14px] line-clamp-1')}>
                        💡{' '}
                        <span
                          className={cn(
                            'text-neutral-600',
                            'dark:text-muted-foreground',
                          )}
                        >
                          Develop By
                        </span>{' '}
                        <span
                          className={cn(
                            'text-blue-950 font-semibold',
                            'dark:text-[#eef0ff]',
                          )}
                        >
                          {project.developBy}
                        </span>
                      </p>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Project;
