import { Link } from "react-router";
import { Card, CardContent } from "@/components/ui/card";
import Project1Img from "@/assets/project1.jpg";
import { cn } from "@/lib/utils";

const Project = () => {
  return (
    <section id="ProjectContainer" className={cn("my-30", "max-xl:my-20")}>
      <div className={cn("container flex flex-col gap-8 mx-auto")}>
        {/* Header */}
        <div className={cn("flex flex-col items-center gap-4")}>
          <h1 className={cn("text-2xl font-semibold")}>Dự Án Thực Chiến</h1>

          <p className={cn("text-center max-w-[65ch] text-neutral-500 px-4")}>
            Bộ sưu tập dự án thực tập tại trường này giúp mình củng cố và hoàn
            thiện những kỹ năng kỹ thuật cũng như khả năng giải quyết vấn đề một
            cách sáng tạo.
          </p>
        </div>

        {/* Cards */}
        <div
          className={cn(
            "grid mx-auto max-w-[90%] grid-cols-[repeat(auto-fit,minmax(auto,340px))] gap-8 justify-center content-center",
          )}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <Card
              key={index}
              className={cn(
                "group border border-[hsla(234,56%,51%,0.1)] rounded-[16px] bg-[hsl(0,0%,100%)] p-0 shadow-md ring-0 transition-all duration-500 ease-initial",
                "hover:shadow-xl hover:scale-[1.03] hover:-skew-x-1 hover:-skew-y-1",
              )}
            >
              <Link
                to="https://github.com/quandevfr/weather-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardContent className={cn("p-0")}>
                  <div className={cn("p-5")}>
                    <img
                      src={Project1Img}
                      alt="project 1"
                      className={cn(
                        "aspect-video object-cover rounded-[8px] transition-all duration-500 ease-initial",
                        "hover:scale-[1.03]",
                      )}
                    />
                  </div>

                  <div className={cn("flex flex-col px-5 pb-5 gap-5")}>
                    <div className={cn("flex flex-col gap-1")}>
                      <h3
                        className={cn(
                          "text-lg font-semibold capitalize text-blue-950 line-clamp-1",
                        )}
                      >
                        Todo List
                      </h3>

                      <p className={cn("text-neutral-500 line-clamp-3")}>
                        Ipsum cupidatat laboris consectetur amet aliqua id
                        magna. Sit non commodo esse eu duis officia laborum.
                        Dolor veniam Lorem nisi tempor ut cillum Lorem duis.
                      </p>
                    </div>

                    <p className={cn("line-clamp-1")}>
                      💡 <span className="text-neutral-500">Develop By</span>{" "}
                      Monochrome
                    </p>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
