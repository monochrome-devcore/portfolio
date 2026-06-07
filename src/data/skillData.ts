// Assets
import CSSIcon from '@/assets/icons/css.svg';
import GitHubIcon from '@/assets/icons/github.svg';
import HTMLIcon from '@/assets/icons/html.svg';
import JSIcon from '@/assets/icons/JS.svg';
import NodeJSIcon from '@/assets/icons/node-js.svg';
import ReactIcon from '@/assets/icons/react.svg';

import ViteIcon from '@/assets/icons/vite.svg';
import TailwindIcon from '@/assets/icons/tailwind.svg';
import TypescriptIcon from '@/assets/icons/typescript.svg';
import VSCodeIcon from '@/assets/icons/vscode.svg';

interface TechSkill {
  id: string;
  name: string;
  icon: string;
}

export const mockTechSkills: TechSkill[] = [
  { id: 'vite', name: 'vite', icon: ViteIcon },
  { id: 'github', name: 'github', icon: GitHubIcon },
  { id: 'css', name: 'css', icon: CSSIcon },
  { id: 'tailwind', name: 'tailwind', icon: TailwindIcon },
  { id: 'html', name: 'html', icon: HTMLIcon },
  { id: 'nodejs', name: 'node.js', icon: NodeJSIcon },
  { id: 'js', name: 'js', icon: JSIcon },
  { id: 'react', name: 'react', icon: ReactIcon },
  { id: 'typescript', name: 'typescript', icon: TypescriptIcon },
  { id: 'vscode', name: 'vscode', icon: VSCodeIcon },
];
