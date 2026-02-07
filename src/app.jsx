import React, { useState, useEffect } from 'react';
import { 
  Github, Linkedin, Mail, Phone, MapPin, ExternalLink, 
  Briefcase, GraduationCap, Award, Menu, X, ChevronRight, 
  Lock, ShoppingBag, Database, Sun, Moon, Server, 
  Layout, Code, Terminal, Cpu, Zap
} from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#0f172a';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f8fafc';
    }
  }, [darkMode]);

  const projects = [
    {
      id: "qwezy",
      title: "Qwezy Organization (RedHailer)",
      category: "Enterprise",
      description: "Secure enterprise authentication and organizational management platform featuring the RedHailer identity system.",
      tech: ["Next.js", "React", "Tailwind CSS", "Node.js"],
      isPrivate: true,
      live: "https://www.qwezy-org.com",
      details: {
        overview: "An enterprise-grade identity management solution for secure access control and organizational hierarchy mapping.",
        architecture: "Microservices architecture utilizing Next.js and Node.js with strict JWT implementation and secure session management.",
        features: ["Multi-factor Authentication", "Organization hierarchy mapping", "Audit logging", "Automated session renewal"]
      }
    },
    {
      id: "store",
      title: "ElevateTech Store",
      category: "E-Commerce",
      description: "Full-scale e-commerce storefront with complex product grouping and real-time cart state management.",
      tech: ["Next.js", "TypeScript", "Redux Toolkit", "PostgreSQL"],
      isPrivate: true,
      live: "https://store.elevatetech.biz",
      details: {
        overview: "A high-traffic e-commerce platform optimized for conversion and instant page loads.",
        architecture: "Leverages SSR for SEO and Redux Toolkit for persistent state management across user sessions.",
        features: ["Dynamic catalog filtering", "Real-time inventory", "Mobile-first UI", "Secure checkout flows"]
      }
    },
    {
      id: "pim",
      title: "ElevateTech PIM",
      category: "Internal Tool",
      description: "Central administrative hub for product information management and real-time data synchronization.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      isPrivate: true,
      live: "https://pim.elevatetech.biz",
      details: {
        overview: "The operational heart of Elevate Tech, managing inventory and pricing across platforms.",
        architecture: "SPA communicating with a REST API, utilizing aggressive caching for large dataset efficiency.",
        features: ["Bulk CSV uploads", "Role-based access control", "CDN management", "Sales analytics"]
      }
    },
    {
      id: "flask",
      title: "Flask Task Manager",
      category: "Backend",
      description: "CRUD task application with authentication. Use credentials below for demo access.",
      tech: ["Python", "Flask", "SQLAlchemy", "Tailwind CSS"],
      isPrivate: false,
      github: "https://github.com/mthobisi30/flask_web_app",
      live: "https://flask-web-app-beta.vercel.app/login?next=%2F",
      credentials: { username: "admin", password: "Password123" },
      details: {
        overview: "A robust backend demonstration project showcasing MVC patterns and secure user sessions.",
        architecture: "Strictly follows MVC patterns using Flask-Login and SQLAlchemy ORM.",
        features: ["Bcrypt hashing", "CSRF protection", "List pagination", "Responsive templates"]
      }
    }
  ];

  const skills = {
    "Frontend & Mobile": ["Next.js", "React", "TypeScript", "Flutter", "Dart", "Kotlin", "Tailwind CSS"],
    "Backend & Languages": ["Node.js", "C#", "ASP.NET Core", "Python", "Django", "Flask", "C++", "SQL"],
    "Tools & Platforms": ["GitHub", "Docker", "CI/CD", "Postman", "MS Azure", "Microsoft Power Platform", "UIPath"]
  };

  const experience = [
    {
      title: "Full Stack Developer (Sole Developer)",
      company: "Wesant Manufacturing / Vision Elevators",
      period: "Sep 2025 – Present",
      responsibilities: [
        "Sole developer designing and maintaining internal/external web and mobile applications.",
        "Managing full SDLC from architecture to deployment and ongoing maintenance.",
        "Developing cross-platform mobile apps using Flutter, Dart, and Kotlin.",
        "Acting as Database Administrator for PostgreSQL and SQL Server systems."
      ]
    },
    {
      title: "Learner (IT & Systems Support)",
      company: "Hamtern Financial Services",
      period: "Jan 2024 – Dec 2024",
      responsibilities: [
        "Implemented automation using Microsoft Power Platform and Python scripts.",
        "Collaborated with IT support to troubleshoot technical issues and support office systems.",
        "Deployed software solutions enhancing record management and workflow productivity."
      ]
    }
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    const element = document.getElementById(section);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <nav className={`fixed top-0 w-full z-40 border-b backdrop-blur-xl ${darkMode ? 'bg-slate-900/60 border-white/5' : 'bg-white/60 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">MN</div>
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'projects', 'experience', 'contact'].map((s) => (
              <button key={s} onClick={() => scrollToSection(s)} className={`capitalize transition-colors ${activeSection === s ? 'text-cyan-500' : (darkMode ? 'text-gray-300' : 'text-gray-600')}`}>{s}</button>
            ))}
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-white/5">{darkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-slate-600" />}</button>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </nav>

      <section id="home" className="pt-40 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">Mthobisi <span className="text-cyan-500">Nxumalo</span></h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-400">Full Stack Developer • Durban, KZN</p>
          <div className="flex justify-center gap-4">
            <a href="mailto:mthobisinx30@gmail.com" className="px-8 py-4 bg-cyan-600 rounded-xl font-bold flex items-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-cyan-500/20"><Mail size={20}/> Contact Me</a>
            <a href="https://github.com/mthobisi30" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold flex items-center gap-2 transition-transform hover:scale-105">GitHub</a>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div key={p.id} className={`p-8 rounded-3xl border transition-all hover:shadow-2xl ${darkMode ? 'bg-white/5 border-white/10 hover:border-cyan-500/30' : 'bg-white border-slate-200'}`}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{p.title}</h3>
                {p.isPrivate && <span className="flex items-center gap-1 text-xs text-amber-500 bg-amber-500/10 px-2 py-1 rounded-full"><Lock size={12}/> Private</span>}
              </div>
              <p className="text-gray-400 mb-6">{p.description}</p>
              <div className="flex justify-between items-center">
                <button onClick={() => setSelectedProject(p)} className="text-cyan-500 font-bold flex items-center gap-1">Details <ChevronRight size={16}/></button>
                <div className="flex gap-4">
                  {!p.isPrivate && <a href={p.github} target="_blank" rel="noopener noreferrer"><Github size={20}/></a>}
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-cyan-600 rounded-lg"><ExternalLink size={20}/></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-8 text-center text-gray-500 border-t border-white/10">
        <p>&copy; 2026 Mthobisi Nxumalo. Built with React & Tailwind.</p>
      </footer>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className={`w-full max-w-3xl p-8 rounded-3xl border overflow-y-auto max-h-[90vh] ${darkMode ? 'bg-slate-900 border-white/10' : 'bg-white'}`} onClick={e => e.stopPropagation()}>
            <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
            <div className="space-y-6">
              <p>{selectedProject.details.overview}</p>
              <h4 className="font-bold text-cyan-500">Key Features</h4>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                {selectedProject.details.features.map((f, i) => <li key={i}>• {f}</li>)}
              </ul>
            </div>
            <button onClick={() => setSelectedProject(null)} className="mt-8 w-full py-4 bg-cyan-600 rounded-xl font-bold">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
