import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../data';
import { Github, ExternalLink, ArrowLeft, Layers, Code } from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) return <div className="text-center py-20 text-white">Project not found</div>;

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 animate-fade-in">
      <Link to="/projects" className="inline-flex items-center gap-2 text-gray-400 mb-8 hover:text-cyan-400 transition-colors font-medium">
        <ArrowLeft size={20}/> Back to Projects
      </Link>
      
      <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[3rem] backdrop-blur-xl shadow-2xl">
        <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
          <div>
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest mb-2 block">{project.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white">{project.title}</h1>
          </div>
          <div className="flex gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-xl hover:bg-white/20 text-white transition-all" title="View Code">
                <Github size={24}/>
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="p-3 bg-cyan-600 rounded-xl hover:bg-cyan-500 text-white transition-all shadow-lg shadow-cyan-600/20" title="Live Demo">
                <ExternalLink size={24}/>
              </a>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Layers size={20} className="text-cyan-400"/> Project Overview
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">{project.readme}</p>
          </div>
          
          <div className="bg-white/5 rounded-3xl p-6 h-fit border border-white/5">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Code size={16}/> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-xs text-cyan-300 font-bold">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
