import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import RocketIcon from "@/assets/rocket-icon.svg";
import LaptopIcon from "@/assets/laptop-icon.svg";

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
          "w-[70%] p-12 bg-[hsla(233,73%,59%,0.1)] rounded-[3rem]",
          "max-sm:p-4 max-sm:w-[90%] max-sm:rounded-[2rem]",
        )}
      >
        <div
          className={cn(
            "flex flex-col gap-7 justify-center items-center bg-white rounded-[3rem] py-12 px-0",
            "max-sm:rounded-[2rem]",
          )}
        >
          <h1
            className={cn(
              "text-3xl font-bold capitalize text-blue-600",
              "max-sm:text-center max-sm:text",
            )}
          >
            Giới Thiệu Bản Thân
          </h1>

          <p className="text-center max-w-[65ch] text-neutral-500 px-4">
            Xin chào! Mình là sinh viên năm cuối trường đại học CNTT. Mình có
            niềm đam mê với công việc lập trình và vô cùng yêu thích việc tạo ra
            các trang web và mobile app hiện đại và có tính ứng dụng cao.
          </p>

          <div
            className={cn(
              "flex gap-4 items-center justify-center flex-wrap max-w-[90%]",
            )}
          >
            <Button
              asChild
              size={"xl"}
              className={cn("p-3 w-60 max-w-[80%] shadow-md")}
            >
              <a
                href="../../assets/CV_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className={cn("text-center font-semibold")}
              >
                Tải CV
              </a>
            </Button>

            <Button
              asChild
              variant={"outline"}
              size={"xl"}
              className={cn("p-3 w-60 max-w-[80%] shadow-md")}
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
