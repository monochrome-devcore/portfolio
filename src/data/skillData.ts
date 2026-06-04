// Assets
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

interface TechSkill {
  id: string;
  name: string;
  icon: string;
}

export const mockTechSkills: TechSkill[] = [
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
