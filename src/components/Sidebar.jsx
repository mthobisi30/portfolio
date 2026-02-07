// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, Code, Briefcase, Mail, X } from 'lucide-react';

export default function Sidebar({ isOpen, toggle }) {
  const links = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/profile", icon: User, label: "Profile" },
    { to: "/skills", icon: Code, label: "Skills" },
    { to: "/projects", icon: Briefcase, label: "Projects" },
    { to: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <>
      <div className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggle}></div>
      <aside className={`fixed left-0 top-0 h-full z-50 w-72 glass border-r border-white/10 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex justify-between items-center">
          <span className="text-xl font-bold text-cyan-500">Navigation</span>
          <button onClick={toggle}><X size={24}/></button>
        </div>
        <nav className="p-4 space-y-2">
          {links.map((link) => (
            <NavLink 
              key={link.to} 
              to={link.to} 
              onClick={toggle}
              className={({isActive}) => `flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${isActive ? 'bg-cyan-600 text-white' : 'hover:bg-white/10 text-gray-400'}`}
            >
              <link.icon size={20}/> {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
