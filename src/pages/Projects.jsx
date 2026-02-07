import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-fade-in">
      <h2 className="text-4xl font-bold mb-12 text-white">Featured Projects</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <Link 
            key={project.id} 
            to={`/projects/${project.id}`}
            className="group relative flex flex-col bg-white/5 border border-white/10 p-8 rounded-[2rem] transition-all hover:-translate-y-2 hover:bg-white/10 hover:border-cyan-500/30"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <ArrowUpRight className="text-gray-600 group-hover:text-cyan-400 transition-colors" size={24}/>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-8 line-clamp-3 leading-relaxed">{project.description}</p>
            
            <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between text-gray-500 text-xs font-bold uppercase tracking-wider">
              <span>View Case Study</span>
              <div className="flex gap-2">
                {project.github && <Github size={16}/>}
                {project.live && <ExternalLink size={16}/>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
