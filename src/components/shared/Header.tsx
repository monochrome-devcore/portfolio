// Assets
import AvatarImg from "@/assets/avatar.jpg";

// Utils
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className={cn("mt-10", "max-md:mt-12")}>
      <div
        className={cn(
          "container flex gap-10 px-8 py-0",
          "max-xl:flex-col",
          "max-md:py-0 max-md:px-4",
        )}
      >
        <div
          className={cn(
            "flex items-center flex-1 gap-8",
            "max-xl:flex-col max-xl:items-center",
          )}
        >
          <div className={cn("relative shrink-0")}>
            <div
              className={cn(
                "absolute inset-0 z-0 rounded-full bg-primary animate-voice-ripple",
              )}
            />

            <div
              className={cn(
                "absolute inset-0 rounded-full bg-primary animate-voice-ripple [animation-delay:1000ms] z-0",
              )}
            />

            <div
              className={cn(
                "absolute inset-0 rounded-full bg-primary animate-voice-ripple [animation-delay:2000ms] z-0",
              )}
            />

            <img
              src={AvatarImg}
              alt="avatar"
              className={cn(
                "relative w-[118px] h-[118px] rounded-full shrink-0 object-cover z-1",
              )}
            />
          </div>

          <div className={cn("flex flex-col gap-2", "max-xl:items-center")}>
            <h2 className={cn("text-[26px] font-semibold", "max-md:text-2xl")}>
              Monochrome
            </h2>

            <div className={cn("flex gap-1.5 text-center", "max-md:flex-col")}>
              <div
                className={cn(
                  "px-3 py-1 text-sm rounded-[4px] text-blue-950 bg-blue-50",
                )}
              >
                Lập trình website
              </div>

              <div
                className={cn(
                  "px-3 py-1 text-sm rounded-[4px] text-blue-950 bg-blue-50 line-clamp-1",
                )}
              >
                Frontend developer
              </div>
            </div>

            <p
              className={cn(
                "text-neutral-600",
                "max-xl:text-center max-xl:max-w-screen-xs",
              )}
            >
              Mong muốn ứng tuyển vị trí{" "}
              <span className={cn("font-semibold text-blue-950")}>
                Junior Developer
              </span>{" "}
              trong lĩnh vực phát triển website.
            </p>
          </div>
        </div>

        <div
          className={cn(
            "flex flex-col items-end flex-1 gap-2",
            "max-xl:items-center max-xl:text-center",
          )}
        >
          <h2 className={cn("text-[26px] font-semibold", "max-md:text-2xl")}>
            Thông Tin Liên Hệ
          </h2>

          <p className={cn("text-neutral-600")}>
            Gửi email cho mình tại:{" "}
            <span className={cn("font-semibold text-blue-950")}>
              monochrome.dev@gmail.com
            </span>
          </p>

          <p className={cn("text-neutral-600")}>
            Gọi cho mình tại:{" "}
            <span className={cn("font-semibold text-blue-950")}>
              0912.678.543
            </span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
