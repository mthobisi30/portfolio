import type { ComponentType } from "react";
import {
  SiAndroid,
  SiCapacitor,
  SiCplusplus,
  SiCss,
  SiDart,
  SiDelphi,
  SiDocker,
  SiDotnet,
  SiFlask,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGunicorn,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiKotlin,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPwa,
  SiPython,
  SiPytorch,
  SiReact,
  SiShadcnui,
  SiSqlalchemy,
  SiSqlite,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiUipath,
  SiWordpress,
} from "react-icons/si";
import {
  LuBoxes,
  LuBrainCircuit,
  LuClipboardList,
  LuCloud,
  LuCode,
  LuCpu,
  LuDatabase,
  LuFileText,
  LuGitPullRequest,
  LuKeyRound,
  LuLayers,
  LuListChecks,
  LuLock,
  LuNetwork,
  LuRoute,
  LuServer,
  LuShield,
  LuShieldCheck,
  LuTestTube,
  LuWebhook,
  LuWorkflow,
} from "react-icons/lu";

type IconCmp = ComponentType<{ className?: string; size?: number }>;

// Real brand logos where they exist (Simple Icons); clean Lucide line icons
// for brand-restricted vendors (AWS/Azure/Oracle/MS/Power Platform) and for
// conceptual entries (RBAC, SDLC, etc.).
const MAP: Record<string, IconCmp> = {
  // Frontend
  "Next.js": SiNextdotjs,
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  "shadcn/ui": SiShadcnui,
  HTML5: SiHtml5,
  CSS3: SiCss,
  WordPress: SiWordpress,
  // Mobile
  Flutter: SiFlutter,
  Dart: SiDart,
  "React Native": SiReact,
  Capacitor: SiCapacitor,
  Kotlin: SiKotlin,
  Android: SiAndroid,
  PWA: SiPwa,
  // Backend
  "Node.js": SiNodedotjs,
  Python: SiPython,
  Flask: SiFlask,
  "C#": SiDotnet,
  "ASP.NET Core": SiDotnet,
  "C++": SiCplusplus,
  Delphi: SiDelphi,
  "REST API Design": LuWebhook,
  Gunicorn: SiGunicorn,
  MVC: LuLayers,
  // Databases
  PostgreSQL: SiPostgresql,
  "MS SQL Server": LuDatabase,
  "Oracle DB": LuDatabase,
  SQLite: SiSqlite,
  "Prisma ORM": SiPrisma,
  SQLAlchemy: SiSqlalchemy,
  "Schema Design": LuNetwork,
  "Query Optimisation": LuCpu,
  "Data Migrations": LuRoute,
  // Security
  Authentication: LuKeyRound,
  JWT: SiJsonwebtokens,
  OAuth: LuLock,
  RBAC: LuShieldCheck,
  "Cyber Security best practices": LuShield,
  // DevOps & Cloud
  Docker: SiDocker,
  Coolify: LuServer,
  AWS: LuCloud,
  Azure: LuCloud,
  "GitHub Actions": SiGithubactions,
  "CI/CD": LuWorkflow,
  Git: SiGit,
  GitHub: SiGithub,
  // Automation & AI
  "Power Automate": LuWorkflow,
  "Power Apps": LuBoxes,
  "Power BI": LuNetwork,
  UiPath: SiUipath,
  "AI agents & models": LuBrainCircuit,
  PyTorch: SiPytorch,
  // Testing & QA
  Postman: SiPostman,
  Swagger: SiSwagger,
  "API Testing": LuTestTube,
  // Practices
  SDLC: LuRoute,
  "Requirements Analysis": LuClipboardList,
  "System Architecture": LuNetwork,
  "Technical Documentation": LuFileText,
  "Code Review": LuGitPullRequest,
  "Agile / Scrum": LuWorkflow,
  "Sprint Planning": LuListChecks,
};

export function TechIcon({
  name,
  className,
  size = 14,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const Icon = MAP[name] ?? LuCode;
  return <Icon className={className} size={size} aria-hidden />;
}
