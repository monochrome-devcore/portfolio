// Components

// Assets
import CheckIcon from "@/assets/check-icon.svg";
import ClosedBookIcon from "@/assets/closed-book.svg";

// Utils
import { cn } from "@/lib/utils";

// Data
import { mockTechSkills } from "@/data/skillData";
import { Marquee } from "@/components/ui/marquee";

const Skill = () => {
  return (
    <section className={cn("block my-30")}>
      <div
        className={cn("container flex flex-col gap-8 mx-auto my-0 py-0 px-8")}
      >
        <div className="flex flex-col items-center gap-4">
          <h1 className={cn("text-[32px] font-semibold", "max-md:text-[26px]")}>
            Kỹ năng & Chuyên môn
          </h1>

          <p
            className={cn(
              "text-center max-w-[65ch] text-neutral-600 px-4 text-pretty",
            )}
          >
            Là một nhà phát triển web mới vào nghề, mình có nền tảng vững chắc
            về các framework front-end như React và thư viện NextJS, và có kinh
            nghiệm làm việc với các công nghệ back-end như Node.js và Express.
          </p>
        </div>

        <div
          className={cn(
            "grid grid-cols-[repeat(3,minmax(100px,1fr))] grid-rows-[repeat(2,320px)] gap-3",
            "max-md:grid-cols-[repeat(1,minmax(200px,1fr))] max-md:grid-rows-[repeat(4,minmax(280px,auto))]",
          )}
        >
          {/* Item 1 */}
          <div
            className={cn(
              "overflow-hidden rounded-[24px] bg-[url(@/assets/cat1.jpeg)] bg-center bg-no-repeat bg-cover p-8 shadow-md",
              "max-md:p-4 max-md:col-span-1 max-md:row-span-1",
            )}
          ></div>

          {/* Item 2 */}
          <div
            className={cn(
              "flex flex-col justify-between col-span-2 overflow-hidden border-2 border-blue-100 rounded-[24px] bg-[hsl(213,100%,98%)] p-8 shadow-md",
              "max-md:p-4 max-md:col-span-1 max-md:row-span-1",
            )}
          >
            <div className={cn("")}>
              <div className={cn("flex items-center gap-3")}>
                <img src={CheckIcon} alt="check icon" className={cn("")} />

                <h2 className={cn("text-2xl font-semibold capitalize")}>
                  Công cụ & Công nghệ
                </h2>
              </div>

              <p
                className={cn("mt-3 text-neutral-600 max-w-[60ch] text-pretty")}
              >
                Thành thạo nhiều công cụ lập trình web hiện đại, có kinh nghiệm
                xây dựng các ứng dụng web tương tác, thân thiện với người dùng
                và đam mê viết mã sạch, dễ bảo trì.
              </p>
            </div>

            <div className={cn("")}>
              <div className={cn("flex gap-3 mt-2 overflow-hidden")}>
                <div className={cn("flex min-w-full gap-3 shrink-0")}>
                  <Marquee pauseOnHover className={cn("[--duration:30s]")}>
                    {mockTechSkills.map((skill, index) => {
                      const isEven = index % 2 !== 0;

                      return (
                        <div
                          className={cn(
                            "flex items-center justify-center gap-[1.14em] rounded-[12px] py-[0.6em] px-0 w-[12em] font-bold text-xs uppercase",
                            isEven
                              ? "skill-gradient"
                              : "bg-white border border-[hsl(215,100%,94%)]",
                          )}
                          key={skill.id}
                        >
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className={cn("h-[2em]")}
                          />
                          <span
                            className={cn(
                              isEven
                                ? "text-white"
                                : "text-transparent bg-linear-to-r from-blue-400 to-blue-500 bg-clip-text",
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

              <div className={cn("flex gap-3 mt-2 overflow-hidden")}>
                <div className={cn("flex min-w-full gap-3 shrink-0")}>
                  <Marquee
                    reverse
                    pauseOnHover
                    className={cn("[--duration: 60s]")}
                  >
                    {mockTechSkills.map((skill, index) => {
                      const isEven = index % 2 !== 0;

                      return (
                        <div
                          className={cn(
                            "flex items-center justify-center gap-[1.14em] rounded-[12px] py-[0.6em] px-0 w-[12em] font-bold text-xs uppercase",
                            isEven
                              ? "skill-gradient"
                              : "bg-white border border-[hsl(215,100%,94%)]",
                          )}
                          key={skill.id}
                        >
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className={cn("h-[2em]")}
                          />
                          <span
                            className={cn(
                              isEven
                                ? "text-white"
                                : "text-transparent bg-linear-to-r from-blue-400 to-blue-500 bg-clip-text",
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
          </div>

          {/* Item 3 */}
          <div
            className={cn(
              "flex flex-col justify-between col-span-2 overflow-hidden border-2 border-blue-100 rounded-[24px] bg-[hsl(213,100%,98%)] p-8 shadow-md",
              "max-md:p-4 max-md:col-span-1 max-md:row-span-1",
            )}
          >
            <div className={cn("")}>
              <div className={cn("flex items-center gap-3")}>
                <img src={CheckIcon} alt="check icon" className={cn("")} />

                <h2 className={cn("text-2xl font-semibold capitalize")}>
                  Kỹ Năng Mềm
                </h2>
              </div>

              <p
                className={cn("mt-3 text-neutral-500 max-w-[60ch] text-pretty")}
              >
                Kỹ năng giao tiếp, cộng tác, và giải quyết vấn đề xuất sắc, với
                thái độ chủ động và ham học hỏi, dễ dàng thích nghi trong môi
                trường làm việc nhóm năng động.
              </p>
            </div>

            <div
              className={cn(
                "relative flex flex-wrap content-center justify-center flex-1 gap-2 mt-2",
              )}
            >
              <div
                className={cn(
                  "w-61 h-9 border border-[hsl(215,100%,94%)] rounded-[24px] bg-white flex items-center justify-center text-sm font-semibold capitalize",
                  "absolute top-[20%] left-[10%] -rotate-2",
                  "max-2xl:static max-2xl:rotate-none",
                )}
              >
                <p className={cn("text-gradient")}>Giao tiếp chuyên nghiệp</p>
              </div>

              <div
                className={cn(
                  "w-61 h-9 border border-[hsl(215,100%,94%)] rounded-[24px] bg-white flex items-center justify-center text-sm font-semibold capitalize",
                  "absolute bottom-[10%] left-[20%] rotate-2",
                  "max-2xl:static max-2xl:rotate-none",
                )}
              >
                <p className={cn("text-gradient")}>
                  Quản lý thời gian hiệu quả
                </p>
              </div>

              <div
                className={cn(
                  "w-61 h-9 border border-[hsl(215,100%,94%)] rounded-[24px] bg-white flex items-center justify-center text-sm font-semibold capitalize",
                  "absolute top-[25%] right-[20%] -rotate-2",
                  "max-2xl:static max-2xl:rotate-none",
                )}
              >
                <p className={cn("text-gradient")}>Đáng tin cậy</p>
              </div>

              <div
                className={cn(
                  "w-61 h-9 border border-[hsl(215,100%,94%)] rounded-[24px] bg-white flex items-center justify-center text-sm font-semibold capitalize",
                  "absolute bottom-[10%] right-[5%] rotate-2",
                  "max-2xl:static max-2xl:rotate-none",
                )}
              >
                <p className={cn("text-gradient")}>Ham học hỏi</p>
              </div>

              <div
                className={cn(
                  "relative w-full h-full",
                  "[&_img]:w-10 [&_img]:h-10 [&_img]:absolute",
                  "max-2xl:hidden",
                )}
              >
                <img
                  src={ClosedBookIcon}
                  alt="closed book icon"
                  className={cn(
                    "top-[20px] left-[50px] scale-x-[-1] translate-y-[5px]",
                  )}
                />
                <img
                  src={ClosedBookIcon}
                  alt="closed book icon"
                  className={cn("top-[40%] left-[45%] rotate-120")}
                />
                <img
                  src={ClosedBookIcon}
                  alt="closed book icon"
                  className={cn("top-[10%] right-[20%]")}
                />
                <img
                  src={ClosedBookIcon}
                  alt="closed book icon"
                  className={cn(
                    "bottom-[20%] right-[5%] scale-x-[-1] rotate-[-40deg]",
                  )}
                />
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div
            className={cn(
              "overflow-hidden rounded-[24px] bg-[url(@/assets/cat3.jpeg)] bg-center bg-no-repeat bg-cover p-8 shadow-md",
              "hover:bg-[url(@/assets/cat2.jpeg)]",
              "max-md:p-4 max-md:col-span-1 max-md:row-span-1",
            )}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
