// Libs
import { Link } from "react-router";

// Components
import { Card, CardContent } from "@/components/ui/card";

// Utils
import { cn } from "@/lib/utils";

// Data
import { mockProjectData } from "@/data/projectData";

const Project = () => {
  return (
    <section
      id="ProjectContainer"
      className={cn("mb-30 pt-10 mt-20", "max-xl:my-20")}
    >
      <div className={cn("container flex flex-col gap-8 mx-auto")}>
        {/* Header */}
        <div className={cn("flex flex-col items-center gap-4")}>
          <h1 className={cn("text-[32px] font-semibold", "max-md:text-[26px]")}>
            Dự Án Thực Chiến
          </h1>

          <p
            className={cn(
              "text-center max-w-[65ch] text-neutral-600 px-4 text-pretty",
            )}
          >
            Bộ sưu tập các dự án do mình thiết kế và tham gia này giúp mình củng
            cố và hoàn thiện những kỹ năng, kỹ thuật cũng như khả năng giải
            quyết vấn đề một cách sáng tạo.
          </p>
        </div>

        {/* Cards */}
        <div
          className={cn(
            "grid mx-auto max-w-[90%] grid-cols-[repeat(auto-fit,minmax(auto,340px))] gap-8 justify-center content-center",
          )}
        >
          {mockProjectData.map((project) => (
            <Card
              key={project.id}
              className={cn(
                "group text-base border border-blue-950/5 rounded-[16px] bg-white p-0 shadow-md ring-0 transition-all duration-500 ease-initial",
                "hover:shadow-xl hover:scale-[1.03] hover:-skew-x-1 hover:-skew-y-1",
              )}
            >
              <Link
                to={project.demoUrl || project.githubUrl || ""}
                target="_blank"
                rel="noopener noreferrer"
                className={cn("flex flex-col flex-1")}
              >
                <CardContent className={cn("p-0 flex flex-col flex-1")}>
                  <div className={cn("p-5")}>
                    <img
                      src={project.image}
                      alt="project 1"
                      className={cn(
                        "aspect-video object-cover rounded-[8px] transition-all duration-500 ease-initial",
                        "hover:scale-[1.03]",
                      )}
                    />
                  </div>

                  <div className={cn("flex flex-col px-5 pb-5 gap-5 flex-1")}>
                    <div className={cn("flex flex-1 flex-col gap-1")}>
                      <h3
                        className={cn(
                          "text-lg font-semibold capitalize text-blue-950 line-clamp-1",
                        )}
                      >
                        {project.title}
                      </h3>

                      <p
                        className={cn(
                          "text-base text-neutral-600 line-clamp-3 text-pretty",
                        )}
                      >
                        {project.description}
                      </p>
                    </div>

                    <p className={cn("text-base line-clamp-1")}>
                      💡 <span className="text-neutral-600">Develop By</span>{" "}
                      <span className={cn("text-blue-950 font-semibold")}>
                        {project.developBy}
                      </span>
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
