import CheckIcon from "@/assets/check-icon.svg";
import CIcon from "@/assets/icons/C.svg";
import CSSIcon from "@/assets/icons/css.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import HTMLIcon from "@/assets/icons/html.svg";
import JavaIcon from "@/assets/icons/java.svg";
import JSIcon from "@/assets/icons/JS.svg";
import NextJSIcon from "@/assets/icons/nextjs.svg";
import NodeJSIcon from "@/assets/icons/node-js.svg";
import PostgresqlIcon from "@/assets/icons/postgresql.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ClosedBookIcon from "@/assets/closed-book.svg";
import { cn } from "@/lib/utils";

interface TechSkill {
  id: string;
  name: string;
  icon: string;
}

const techSkills: TechSkill[] = [
  { id: "c", name: "c", icon: CIcon },
  { id: "github", name: "github", icon: GitHubIcon },
  { id: "css", name: "css", icon: CSSIcon },
  { id: "java", name: "java", icon: JavaIcon },
  { id: "html", name: "html", icon: HTMLIcon },
  { id: "nodejs", name: "nodejs", icon: NodeJSIcon },
  { id: "js", name: "js", icon: JSIcon },
  { id: "react", name: "react", icon: ReactIcon },
  { id: "postgresql", name: "postgresql", icon: PostgresqlIcon },
  { id: "nextjs", name: "nextjs", icon: NextJSIcon },
];

const Skill = () => {
  return (
    <section className="block my-30">
      <div
        className={cn("container flex flex-col gap-8 mx-auto my-0 py-0 px-8")}
      >
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-semibold">Kỹ năng & Chuyên môn</h1>

          <p className={cn("text-center max-w-[65ch] text-neutral-500 px-4")}>
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
            <div className="">
              <div className="flex items-center gap-3">
                <img src={CheckIcon} alt="check icon" className="" />
                <h2 className="text-2xl font-semibold capitalize">
                  Công cụ & Công nghệ
                </h2>
              </div>

              <p className="mt-3 text-neutral-500 max-w-[60ch]">
                Thành thạo nhiều công cụ lập trình web hiện đại, có kinh nghiệm
                xây dựng các ứng dụng web tương tác, thân thiện với người dùng
                và đam mê viết mã sạch, dễ bảo trì.
              </p>
            </div>

            <div className="">
              <div className="flex gap-3 mt-2 overflow-hidden">
                <div
                  className={cn(
                    "flex min-w-full gap-3 shrink-0",
                    "animate-move-left",
                  )}
                >
                  {techSkills.map((skill) => (
                    <div
                      className={cn(
                        "group flex items-center justify-center gap-[1.14em] rounded-[12px] py-[0.6em] px-0 w-[12em] font-bold text-xs uppercase",
                        "odd:bg-white odd:border odd:border-[hsl(215,100%,94%)]",
                        "even:bg-linear-to-r even:from-[hsl(198,81%,63%)] even:to-[hsl(228,81%,63%)] even:text-white",
                      )}
                      key={skill.id}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="h-[2em]"
                      />
                      <span className="group-odd:text-transparent group-odd:bg-linear-to-r group-odd:from-blue-400 group-odd:to-blue-500 group-odd:bg-clip-text">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className={cn(
                    "flex min-w-full gap-3 shrink-0",
                    "animate-move-left",
                  )}
                >
                  {techSkills.map((skill) => (
                    <div
                      className={cn(
                        "group flex items-center justify-center gap-[1.14em] rounded-[12px] py-[0.6em] px-0 w-[12em] font-bold text-xs uppercase",
                        "odd:bg-white odd:border odd:border-[hsl(215,100%,94%)]",
                        "even:bg-linear-to-r even:from-[hsl(198,81%,63%)] even:to-[hsl(228,81%,63%)] even:text-white",
                      )}
                      key={skill.id}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="h-[2em]"
                      />
                      <span className="group-odd:text-transparent group-odd:bg-linear-to-r group-odd:from-blue-400 group-odd:to-blue-500 group-odd:bg-clip-text">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-2 overflow-hidden">
                <div
                  className={cn(
                    "flex min-w-full gap-3 shrink-0",
                    "animate-move-right",
                  )}
                >
                  {techSkills.map((skill) => (
                    <div
                      className={cn(
                        "group flex items-center justify-center gap-[1.14em] rounded-[12px] py-[0.6em] px-0 w-[12em] font-bold text-xs uppercase",
                        "odd:bg-white odd:border odd:border-[hsl(215,100%,94%)]",
                        "even:bg-linear-to-r even:from-[hsl(198,81%,63%)] even:to-[hsl(228,81%,63%)] even:text-white",
                      )}
                      key={skill.id}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="h-[2em]"
                      />
                      <span className="group-odd:text-transparent group-odd:bg-linear-to-r group-odd:from-blue-400 group-odd:to-blue-500 group-odd:bg-clip-text">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className={cn(
                    "flex min-w-full gap-3 shrink-0",
                    "animate-move-right",
                  )}
                >
                  {techSkills.map((skill) => (
                    <div
                      className={cn(
                        "group flex items-center justify-center gap-[1.14em] rounded-[12px] py-[0.6em] px-0 w-[12em] font-bold text-xs uppercase",
                        "odd:bg-white odd:border odd:border-[hsl(215,100%,94%)]",
                        "even:bg-linear-to-r even:from-[hsl(198,81%,63%)] even:to-[hsl(228,81%,63%)] even:text-white",
                      )}
                      key={skill.id}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="h-[2em]"
                      />
                      <span className="group-odd:text-transparent group-odd:bg-linear-to-r group-odd:from-blue-400 group-odd:to-blue-500 group-odd:bg-clip-text">
                        {skill.name}
                      </span>
                    </div>
                  ))}
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
            <div className="">
              <div className="flex items-center gap-3">
                <img src={CheckIcon} alt="check icon" className="" />
                <h2 className="text-2xl font-semibold capitalize">
                  Kỹ Năng Mềm
                </h2>
              </div>

              <p className="mt-3 text-neutral-500 max-w-[60ch]">
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
                  "w-61 h-9 border border-[hsl(215,100%,94%)] rounded-[24px] bg-white flex items-center justify-center text-xs font-semibold capitalize",
                  "absolute top-[20%] left-[10%] -rotate-2",
                  "max-laptop:static max-laptop:rotate-none",
                )}
              >
                <p className="text-transparent bg-linear-to-r from-blue-400 to-blue-500 bg-clip-text">
                  Giao tiếp chuyên nghiệp
                </p>
              </div>

              <div
                className={cn(
                  "w-61 h-9 border border-[hsl(215,100%,94%)] rounded-[24px] bg-white flex items-center justify-center text-xs font-semibold capitalize",
                  "absolute bottom-[10%] left-[20%] rotate-2",
                  "max-laptop:static max-laptop:rotate-none",
                )}
              >
                <p className="text-transparent bg-linear-to-r from-blue-400 to-blue-500 bg-clip-text">
                  Quản lý thời gian hiệu quả
                </p>
              </div>

              <div
                className={cn(
                  "w-61 h-9 border border-[hsl(215,100%,94%)] rounded-[24px] bg-white flex items-center justify-center text-xs font-semibold capitalize",
                  "absolute top-[25%] right-[20%] -rotate-2",
                  "max-laptop:static max-laptop:rotate-none",
                )}
              >
                <p className="text-transparent bg-linear-to-r from-blue-400 to-blue-500 bg-clip-text">
                  Đáng tin cậy
                </p>
              </div>

              <div
                className={cn(
                  "w-61 h-9 border border-[hsl(215,100%,94%)] rounded-[24px] bg-white flex items-center justify-center text-xs font-semibold capitalize",
                  "absolute bottom-[10%] right-[5%] rotate-2",
                  "max-laptop:static max-laptop:rotate-none",
                )}
              >
                <p className="text-transparent bg-linear-to-r from-blue-400 to-blue-500 bg-clip-text">
                  Ham học hỏi
                </p>
              </div>

              <div
                className={cn(
                  "relative w-full h-full",
                  "[&_img]:w-10 [&_img]:h-10 [&_img]:absolute",
                  "max-laptop:hidden",
                )}
              >
                <img
                  src={ClosedBookIcon}
                  alt="closed book icon"
                  className="top-[20px] left-[50px] scale-x-[-1] translate-y-[5px]"
                />
                <img
                  src={ClosedBookIcon}
                  alt="closed book icon"
                  className="top-[40%] left-[45%] rotate-120"
                />
                <img
                  src={ClosedBookIcon}
                  alt="closed book icon"
                  className="top-[10%] right-[20%]"
                />
                <img
                  src={ClosedBookIcon}
                  alt="closed book icon"
                  className="bottom-[20%] right-[5%] scale-x-[-1] rotate-[-40deg]"
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
