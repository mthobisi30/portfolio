import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Menu, X, Home, User, Code, Briefcase, Mail } from 'lucide-react';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900 text-white selection:bg-cyan-500/30">
        {/* Animated Background Blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] animate-pulse delay-700"></div>
        </div>

        {/* Header */}
        <header className="fixed top-0 w-full z-40 p-6 flex justify-between items-center backdrop-blur-md border-b border-white/5">
          <Link to="/" className="text-2xl font-bold text-cyan-400">MN</Link>
          <button onClick={() => setSidebarOpen(true)} className="p-2 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10">
            <Menu size={24}/>
          </button>
        </header>

        {/* Glassmorphism Sidebar */}
        <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-slate-900/80 backdrop-blur-2xl border-r border-white/10 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-6 flex justify-between items-center">
            <span className="font-bold text-gray-400 uppercase tracking-widest text-xs">Navigation</span>
            <button onClick={() => setSidebarOpen(false)}><X size={24}/></button>
          </div>
          <nav className="p-4 space-y-2">
            {[
              { to: "/", icon: Home, label: "Home" },
              { to: "/profile", icon: User, label: "Profile" },
              { to: "/skills", icon: Code, label: "Skills" },
              { to: "/projects", icon: Briefcase, label: "Projects" },
              { to: "/contact", icon: Mail, label: "Contact" }
            ].map((link) => (
              <NavLink 
                key={link.to} 
                to={link.to} 
                onClick={() => setSidebarOpen(false)}
                className={({isActive}) => `flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${isActive ? 'bg-cyan-600 shadow-lg shadow-cyan-600/20' : 'hover:bg-white/5 text-gray-400'}`}
              >
                <link.icon size={20}/> {link.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <main className="relative z-10 pt-24 pb-12">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
