import React from 'react';
import { Layout, Server, Database, Terminal, Smartphone, ShieldCheck, Zap } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend & Mobile",
      icon: Layout,
      skills: ["Next.js", "React", "TypeScript", "Vite", "Flutter", "Dart", "Tailwind CSS", "Kotlin"],
      color: "text-cyan-400"
    },
    {
      title: "Backend & Systems",
      icon: Server,
      skills: ["Node.js", "ASP.NET Core", ".NET Framework", "Python", "Django", "Flask", "C#", "C++"],
      color: "text-blue-500"
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      skills: ["PostgreSQL", "SQL Server", "SQLite", "MS Azure", "MongoDB", "Entity Framework"],
      color: "text-emerald-400"
    },
    {
      title: "DevOps & Tools",
      icon: Terminal,
      skills: ["GitHub", "Git", "CI/CD", "Postman", "Docker", "Microsoft Power Platform", "UIPath"],
      color: "text-orange-400"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-fade-in">
      <h2 className="text-4xl font-bold mb-12 text-white">Technical Arsenal</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {skillCategories.map((cat, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-xl transition-all hover:bg-white/10 hover:border-white/20">
            <div className={`p-4 rounded-2xl bg-white/5 w-fit mb-6 ${cat.color}`}>
              <cat.icon size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-white">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, si) => (
                <span key={si} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 font-medium hover:border-cyan-500/50 hover:text-white transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
