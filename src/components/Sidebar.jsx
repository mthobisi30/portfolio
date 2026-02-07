import React from 'react';
import { NavLink } from 'react-router-dom';
import { X, Home, User, Code, Briefcase, Mail } from 'lucide-react';

export default function Sidebar({ isOpen, onClose }) {
  const links = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/profile", icon: User, label: "Profile" },
    { to: "/skills", icon: Code, label: "Skills" },
    { to: "/projects", icon: Briefcase, label: "Projects" },
    { to: "/contact", icon: Mail, label: "Contact" }
  ];

  return (
    <>
      <div 
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={onClose}
      />
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-slate-900/90 backdrop-blur-2xl border-r border-white/10 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex justify-between items-center border-b border-white/5">
          <span className="font-bold text-gray-400 uppercase tracking-widest text-xs">Navigation</span>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X size={20} className="text-white"/>
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {links.map((link) => (
            <NavLink 
              key={link.to} 
              to={link.to} 
              onClick={onClose}
              className={({isActive}) => `flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-medium ${isActive ? 'bg-cyan-600/20 text-cyan-400 border border-cyan-500/20' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
            >
              <link.icon size={20}/> {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
