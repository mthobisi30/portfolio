import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <Link 
            key={project.id} 
            to={`/projects/${project.id}`}
            className="group relative bg-white/5 border border-white/10 p-8 rounded-[2rem] transition-all hover:-translate-y-2 hover:bg-white/10"
          >
            <ArrowUpRight className="absolute top-8 right-8 text-gray-500 group-hover:text-cyan-400 transition-colors" size={24}/>
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-8">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-[10px] text-cyan-400 font-bold uppercase">
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
