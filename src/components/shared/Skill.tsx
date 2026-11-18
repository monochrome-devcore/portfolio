// Components
import { Marquee } from '@/components/ui/marquee';
import { StaggerContainer } from '@/components/motion/Stagger';
import FadeIn from '@/components/motion/FadeIn';
import { SlideLeft, SlideRight } from '@/components/motion/Slide';

// Assets
import CheckIcon from '@/assets/check-icon.svg';
import ClosedBookIcon from '@/assets/closed-book.svg';

// Utils
import { cn } from '@/lib/utils';

// Data
import { mockTechSkills } from '@/data/skillData';

const Skill = () => {
  return (
    <section className={cn('block mt-20')}>
      <div
        className={cn('container flex flex-col gap-8 mx-auto my-0 py-0 px-8')}
      >
        <StaggerContainer className="flex flex-col items-center gap-4">
          <FadeIn>
            <h1
              className={cn('text-[32px] font-semibold', 'max-md:text-[26px]')}
            >
              Kỹ năng & Chuyên môn
            </h1>
          </FadeIn>

          <FadeIn>
            <p
              className={cn(
                'text-center max-w-[65ch] text-neutral-600 px-4 text-pretty',
                'dark:text-muted-foreground',
              )}
            >
              Chuyên xây dựng các ứng dụng web mượt mà bằng React, JavaScript
              (ES6+) và các CSS Framework hiện đại như Tailwind. Có tư duy tốt
              về UI/UX, thành thạo Git workflow và quản lý luồng dữ liệu phức
              tạp trong dự án. Tập trung tối ưu hóa trải nghiệm người dùng và
              phối hợp nhịp nhàng với đội ngũ thiết kế, hệ thống.
            </p>
          </FadeIn>
        </StaggerContainer>

        <StaggerContainer
          className={cn(
            'grid grid-cols-[repeat(3,minmax(100px,1fr))] grid-rows-[repeat(2,minmax(320px,auto))] gap-3',
            'max-md:grid-cols-[repeat(1,minmax(200px,1fr))] max-md:grid-rows-[repeat(4,minmax(280px,auto))]',
          )}
        >
          {/* Item 1 */}
          <SlideLeft
            className={cn(
              'overflow-hidden rounded-[24px] bg-[url(@/assets/cat4.jpg)] bg-center bg-no-repeat bg-cover p-8 shadow-md select-none',
              'max-md:p-4  max-md:order-first',
            )}
          >
            <div></div>
          </SlideLeft>

          {/* Item 2 */}
          <SlideRight
            className={cn(
              'flex flex-col justify-between col-span-2 overflow-hidden border-2 border-blue-100 rounded-[24px] bg-[hsl(213,100%,98%)] p-8 shadow-md',
              'max-md:p-4 max-md:col-span-1 max-md:row-span-1 max-md:order-2',
              'dark:bg-[#1c2142] dark:border-[#262b52]',
            )}
          >
            <div className={cn('')}>
              <div className={cn('flex items-center gap-3')}>
                <img src={CheckIcon} alt="check icon" className={cn('')} />

                <h2 className={cn('text-2xl font-semibold capitalize')}>
                  Công cụ & Công nghệ
                </h2>
              </div>

              <p
                className={cn(
                  'mt-3 text-neutral-600 max-w-[60ch] text-pretty',
                  'dark:text-muted-foreground',
                )}
              >
                Thành thạo nhiều công cụ lập trình web hiện đại, có kinh nghiệm
                xây dựng các ứng dụng web tương tác, thân thiện với người dùng
                và đam mê viết mã sạch, dễ bảo trì.
              </p>
            </div>

            <div className={cn('')}>
              <div className={cn('flex gap-3 mt-2 overflow-hidden')}>
                <div className={cn('flex min-w-full gap-3 shrink-0')}>
                  <Marquee pauseOnHover className={cn('[--duration:30s]')}>
                    {mockTechSkills.map((skill, index) => {
                      const isEven = index % 2 !== 0;

                      return (
                        <div
                          className={cn(
                            'flex items-center justify-center gap-[1.14em] rounded-[12px] py-[0.6em] px-0 w-[12em] font-bold text-sm uppercase',
                            isEven
                              ? 'skill-gradient'
                              : 'bg-white border border-[hsl(215,100%,94%)] dark:bg-[#1c2142] dark:border-[#262b52]',
                          )}
                          key={skill.id}
                        >
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className={cn('h-[2em]')}
                            loading="lazy"
                          />
                          <span
                            className={cn(
                              isEven
                                ? 'text-white'
                                : 'text-transparent bg-linear-to-r from-blue-400 to-blue-500 bg-clip-text',
                            )}
                          >
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </Marquee>
                </div>
              </div>

              <div className={cn('flex gap-3 mt-2 overflow-hidden')}>
                <div className={cn('flex min-w-full gap-3 shrink-0')}>
                  <Marquee
                    reverse
                    pauseOnHover
                    className={cn('[--duration: 60s]')}
                  >
                    {mockTechSkills.map((skill, index) => {
                      const isEven = index % 2 !== 0;

                      return (
                        <div
                          className={cn(
                            'flex items-center justify-center gap-[1.14em] rounded-[12px] py-[0.6em] px-0 w-[12em] font-bold text-sm uppercase',
                            isEven
                              ? 'skill-gradient'
                              : 'bg-white border border-[hsl(215,100%,94%)] dark:bg-[#1c2142] dark:border-[#262b52]',
                          )}
                          key={skill.id}
                        >
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className={cn('h-[2em]')}
                            loading="lazy"
                          />
                          <span
                            className={cn(
                              isEven
                                ? 'text-white'
                                : 'text-transparent bg-linear-to-r from-blue-400 to-blue-500 bg-clip-text',
                            )}
                          >
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </Marquee>
                </div>
              </div>
            </div>
          </SlideRight>

          {/* Item 3 */}
          <SlideLeft
            className={cn(
              'flex flex-col justify-between col-span-2 overflow-hidden border-2 border-blue-100 rounded-[24px] bg-[hsl(213,100%,98%)] p-8 shadow-md',
              'max-md:p-4 max-md:col-span-1 max-md:row-span-1 max-md:order-last',
              'dark:bg-[#1c2142] dark:border-[#262b52]',
            )}
          >
            <div className={cn('')}>
              <div className={cn('flex items-center gap-3')}>
                <img src={CheckIcon} alt="check icon" className={cn('')} />

                <h2 className={cn('text-2xl font-semibold capitalize')}>
                  Kỹ Năng Mềm
                </h2>
              </div>

              <p
                className={cn(
                  'mt-3 text-neutral-500 max-w-[60ch] text-pretty',
                  'dark:text-muted-foreground',
                )}
              >
                Kỹ năng giao tiếp, cộng tác, và giải quyết vấn đề xuất sắc, với
                thái độ chủ động và ham học hỏi, dễ dàng thích nghi trong môi
                trường làm việc nhóm năng động.
              </p>
            </div>

            <div
              className={cn(
                'relative flex flex-wrap content-center justify-center flex-1 gap-2 mt-4',
              )}
            >
              <div
                className={cn(
                  'w-[244px] h-[36px] border border-[hsl(215,100%,94%)] rounded-[24px] bg-white flex items-center justify-center text-sm font-semibold capitalize',
                  'absolute top-[20%] left-[5%] -rotate-2',
                  'max-2xl:static max-2xl:rotate-none',
                  'dark:skill-gradient dark:border-0',
                )}
              >
                <img
                  src={ClosedBookIcon}
                  alt="closed book icon"
                  className={cn(
                    'absolute w-10 h-10 -top-1/2 -left-[5px]',
                    'max-2xl:hidden',
                  )}
                  loading="lazy"
                />

                <p className={cn('text-gradient', 'dark:text-foreground')}>
                  Khả năng làm việc nhóm
                </p>
              </div>

              <div
                className={cn(
                  'w-[244px] h-[36px] border border-[hsl(215,100%,94%)] rounded-[24px] bg-white flex items-center justify-center text-sm font-semibold capitalize',
                  'absolute bottom-[5%] left-[10%] rotate-2',
                  'max-2xl:static max-2xl:rotate-none',
                  'dark:skill-gradient dark:border-0',
                )}
              >
                <img
                  src={ClosedBookIcon}
                  alt="closed book icon"
                  className={cn(
                    'absolute w-10 h-10 -top-1/2 -right-[10px] rotate-180',
                    'max-2xl:hidden',
                  )}
                  loading="lazy"
                />

                <p className={cn('text-gradient', 'dark:text-foreground')}>
                  Quản lý thời gian hiệu quả
                </p>
              </div>

              <div
                className={cn(
                  'w-[244px] h-[36px] border border-[hsl(215,100%,94%)] rounded-[24px] bg-white flex items-center justify-center text-sm font-semibold capitalize',
                  'absolute top-[20%] right-[5%] -rotate-2',
                  'max-2xl:static max-2xl:rotate-none',
                  'dark:skill-gradient dark:border-0',
                )}
              >
                <img
                  src={ClosedBookIcon}
                  alt="closed book icon"
                  className={cn(
                    'absolute w-10 h-10 -top-1/2 -left-[5px] rotate-[-60deg]',
                    'max-2xl:hidden',
                  )}
                  loading="lazy"
                />

                <p className={cn('text-gradient', 'dark:text-foreground')}>
                  Tư duy làm sản phẩm
                </p>
              </div>

              <div
                className={cn(
                  'w-[244px] h-[36px] border border-[hsl(215,100%,94%)] rounded-[24px] bg-white flex items-center justify-center text-sm font-semibold capitalize',
                  'absolute bottom-[5%] right-0 rotate-2',
                  'max-2xl:static max-2xl:rotate-none',
                  'dark:skill-gradient dark:border-0',
                )}
              >
                <img
                  src={ClosedBookIcon}
                  alt="closed book icon"
                  className={cn(
                    'absolute w-10 h-10 -top-1/2 right-[3%] scale-x-[-1] rotate-[-10deg]',
                    'max-2xl:hidden',
                  )}
                  loading="lazy"
                />

                <p className={cn('text-gradient', 'dark:text-foreground')}>
                  Ham học hỏi
                </p>
              </div>
            </div>
          </SlideLeft>

          {/* Item 4 */}
          <SlideRight
            className={cn(
              'overflow-hidden rounded-[24px] bg-[url(@/assets/cat3.jpeg)] bg-center bg-no-repeat bg-cover p-8 shadow-md',
              'hover:bg-[url(@/assets/cat2.jpeg)]',
              'max-md:p-4 max-md:col-span-1 max-md:row-span-1 max-md:order-3',
            )}
          >
            <></>
          </SlideRight>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Skill;
