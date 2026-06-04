// Components
import { Button } from "@/components/ui/button";

// Assets
import RocketIcon from "@/assets/rocket-icon.svg";
import LaptopIcon from "@/assets/laptop-icon.svg";

// Utils
import { cn } from "@/lib/utils";

const AboutMe = () => {
  return (
    <section
      className={cn(
        "relative my-[140px] mx-auto flex items-center justify-center max-w-[1660px]",
        "max-md:my-[80px] max-md:mx-0",
      )}
    >
      <img
        src={RocketIcon}
        alt="rocket icon"
        className={cn(
          "absolute -z-10 w-[300px] h-auto -top-[20%] left-[1%]",
          "max-md:hidden",
          "animate-float",
        )}
      />

      <img
        src={LaptopIcon}
        alt="laptop icon"
        className={cn(
          "absolute w-[300px] h-auto -bottom-[20%] right-0",
          "max-md:hidden",
          "animate-float-delay",
        )}
      />

      <div
        className={cn(
          "w-[70%] p-12 bg-[hsla(233,73%,59%,0.1)] rounded-[48px]",
          "max-md:w-[80%] p-8",
          "max-sm:p-5 max-sm:w-[90%] max-sm:rounded-[32px]",
        )}
      >
        <div
          className={cn(
            "flex flex-col gap-7 justify-center items-center bg-white rounded-[24px] py-12 px-0",
            "max-sm:rounded-[16px]",
          )}
        >
          <h1
            className={cn(
              "text-3xl font-bold capitalize text-primary",
              "max-sm:text-center max-sm:text",
            )}
          >
            Giới Thiệu Bản Thân
          </h1>

          <p className="text-center max-w-[65ch] text-neutral-600 px-4 text-pretty">
            Xin chào! Mình là một lập trình viên Frontend. Mình có niềm đam mê
            với công việc lập trình và vô cùng yêu thích việc tạo ra các trang
            web hiện đại, có tính ứng dụng cao và thân thiện với người dùng.
          </p>

          <div
            className={cn(
              "flex gap-4 items-center justify-center flex-wrap max-w-[90%]",
            )}
          >
            <Button
              asChild
              size={"xl"}
              className={cn(
                "p-3 w-[240px] max-w-[80%] rounded-[8px] btn-gradient",
                "max-md:text-[14px]",
              )}
            >
              <a
                href="../../assets/CV_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download={"Pham_Ngoc_Quan_CV.pdf"}
                className={cn("text-center font-semibold")}
              >
                Tải CV
              </a>
            </Button>

            <Button
              asChild
              variant={"outline"}
              size={"xl"}
              className={cn(
                "p-3 w-[240px] max-w-[80%] rounded-[8px] shadow-none",
                "max-md:text-[14px]",
              )}
            >
              <a
                href="#ProjectContainer"
                className={cn("text-center font-semibold")}
              >
                Xem Dự Án
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
