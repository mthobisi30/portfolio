// src/pages/ProjectDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../data';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 animate-fade-in">
      <Link to="/projects" className="flex items-center gap-2 text-gray-400 mb-8 hover:text-cyan-400 transition-colors">
        <ArrowLeft size={20}/> Back to Projects
      </Link>
      
      <div className="glass p-12 rounded-3xl">
        <h1 className="text-4xl font-bold mb-6 text-cyan-400">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map(t => (
            <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">{t}</span>
          ))}
        </div>
        
        <div className="prose prose-invert max-w-none mb-12">
          <h3 className="text-xl font-bold mb-4">Detailed View</h3>
          <p className="text-gray-300 leading-relaxed">{project.details}</p>
        </div>

        <div className="flex gap-4">
          <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10">
            <Github size={20}/> Source Code
          </a>
          <button className="flex items-center gap-2 px-6 py-3 bg-cyan-600 rounded-xl font-bold">
            <ExternalLink size={20}/> Live Demo
          </button>
        </div>
      </div>
    </div>
  );
}
