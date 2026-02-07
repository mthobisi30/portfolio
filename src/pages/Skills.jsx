import React from 'react';
import { 
  Layout, Server, Database, Terminal, 
  Smartphone, ShieldCheck, Zap 
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: Layout,
      skills: ["Next.js", "React", "TypeScript", "Vite", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
      color: "text-cyan-400"
    },
    {
      title: "Backend & Systems",
      icon: Server,
      skills: ["Node.js", "ASP.NET Core", ".NET Framework", "Python", "Django", "Flask", "C#", "C++"],
      color: "text-blue-500"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["Flutter", "Dart", "Kotlin", "Android Development", "Cross-platform Integration"],
      color: "text-purple-500"
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      skills: ["PostgreSQL", "SQL Server", "SQLite", "MS Azure", "MongoDB", "SQL Alchemy"],
      color: "text-emerald-400"
    },
    {
      title: "DevOps & Tools",
      icon: Terminal,
      skills: ["GitHub", "Git", "CI/CD", "Postman", "Docker", "Vercel", "Linux"],
      color: "text-orange-400"
    },
    {
      title: "Specialized Tech",
      icon: ShieldCheck,
      skills: ["Cybersecurity", "MS Power Platform", "UIPath (RPA)", "Agile & Scrum", "RESTful APIs"],
      color: "text-rose-400"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-fade-in">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl font-bold">Technical Arsenal</h2>
        <div className="h-px flex-1 bg-white/10"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((cat, i) => (
          <div key={i} className="group bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-xl transition-all hover:bg-white/10 hover:-translate-y-2">
            <div className={`p-4 rounded-2xl bg-white/5 w-fit mb-6 group-hover:scale-110 transition-transform ${cat.color}`}>
              <cat.icon size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-6">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, si) => (
                <span key={si} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs text-gray-400 font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Visual Indicator of Proficiency */}
      <div className="mt-20 p-8 bg-cyan-500/5 border border-cyan-500/20 rounded-3xl flex items-center gap-6">
        <Zap className="text-cyan-400 shrink-0" size={32} />
        <p className="text-gray-300 italic">
          "As the sole developer at Wesant Manufacturing, I specialize in full-cycle development—building the systems that drive business efficiency from the ground up."
        </p>
      </div>
    </div>
  );
}
