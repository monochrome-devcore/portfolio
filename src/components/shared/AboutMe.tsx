// Libs
import { motion } from 'motion/react';
import { fadeUp, scaleIn, stagger } from '@/lib/motion/variants';

// Components
import { SlideLeft, SlideRight } from '@/components/motion/Slide';
import { Float } from '@/components/motion/Float';
import { Button } from '@/components/ui/button';

// Assets
import RocketIcon from '@/assets/rocket-icon.svg';
import LaptopIcon from '@/assets/laptop-icon.svg';
import MyCV from '@/assets/Pham_Ngoc_Quan_CV.pdf';

// Utils
import { cn } from '@/lib/utils';
import { downloadStaticFile } from '@/utils/downloadHelper';

const AboutMe = () => {
  const handleDownloadCV = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    downloadStaticFile(MyCV, 'Pham_Ngoc_Quan_CV.pdf');
  };

  return (
    <section
      className={cn(
        'relative my-[140px] mx-auto flex items-center justify-center max-w-[1660px]',
        'max-md:my-[80px] max-md:mx-0',
      )}
    >
      <SlideLeft
        transition={{ duration: 0.8, delay: 0.4 }}
        className={cn('absolute -top-[20%] left-[1%] z-10', 'max-md:hidden')}
      >
        <Float transition={{ delay: 1.2 }} whileInView={{ y: [0, -12, 0] }}>
          <img
            src={RocketIcon}
            alt="rocket icon"
            className={cn(
              'w-[250px] h-auto',
              // 'animate-float',
            )}
          />
        </Float>
      </SlideLeft>

      <SlideRight
        transition={{ duration: 0.8, delay: 0.4 }}
        className={cn('absolute -bottom-[20%] right-0 z-10', 'max-md:hidden')}
      >
        <Float transition={{ delay: 1.2 }}>
          <img
            src={LaptopIcon}
            alt="laptop icon"
            className={cn(
              'w-[300px] h-auto ',
              // 'animate-float-delay',
            )}
          />
        </Float>
      </SlideRight>

      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        className={cn(
          'w-[70%] p-12 bg-[hsla(233,73%,59%,0.1)] rounded-[48px]',
          'max-md:w-[80%] p-8',
          'max-sm:p-5 max-sm:w-[90%] max-sm:rounded-[32px]',
          'dark:bg-[#262B52]',
        )}
      >
        <motion.div
          variants={stagger(0.1, 0.2)}
          className={cn(
            'flex flex-col gap-7 justify-center items-center bg-chip rounded-[24px] py-12 px-0',
            'max-sm:rounded-[16px]',
          )}
        >
          <motion.h1
            variants={fadeUp}
            className={cn(
              'text-3xl font-bold capitalize text-primary',
              'max-sm:text-center max-sm:text',
              // 'dark:text-[#8b98ff]',
              // 'dark:text-transparent dark:bg-linear-to-br dark:from-[#4776E6] dark:to-[#8E54E9] dark:bg-clip-text',
              // 'dark:text-transparent dark:bg-linear-to-br dark:from-[#54bfed] dark:to-[#5473ed] dark:bg-clip-text',
              'dark:text-gradient',
            )}
          >
            Giới Thiệu Bản Thân
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className={cn(
              'text-center max-w-[65ch] text-neutral-600 px-4 text-pretty',
              'dark:text-muted-foreground',
            )}
          >
            Xin chào! Mình là một lập trình viên Frontend. Mình có niềm đam mê
            với công việc lập trình và vô cùng yêu thích việc tạo ra các trang
            web hiện đại, có tính ứng dụng cao và thân thiện với người dùng.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className={cn(
              'flex gap-4 items-center justify-center flex-wrap max-w-[90%]',
            )}
          >
            <Button
              asChild
              size={'xl'}
              className={cn(
                'p-3 w-[240px] max-w-[80%] rounded-[8px] btn-gradient',
                'max-md:text-[14px]',
                'btn-interactive',
              )}
            >
              <a
                href={MyCV}
                // target="_blank"
                // rel="noopener noreferrer"
                // download={'Pham_Ngoc_Quan_CV.pdf'}
                className={cn('text-center font-semibold')}
                onClick={handleDownloadCV}
              >
                Tải CV
              </a>
            </Button>

            <Button
              asChild
              variant={'outline'}
              size={'xl'}
              className={cn(
                'p-3 w-[240px] max-w-[80%] rounded-[8px] shadow-none',
                'max-md:text-[14px]',
                'btn-interactive',
              )}
            >
              <a
                href="#ProjectContainer"
                className={cn('text-center font-semibold')}
              >
                Xem Dự Án
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
