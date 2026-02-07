// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
      <div className="glass p-12 rounded-3xl max-w-3xl animate-fade-in">
        <h1 className="text-6xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Mthobisi Nxumalo
          </span>
        </h1>
        <p className="text-2xl text-gray-300 mb-8 font-light">
          Full Stack Developer | Sole Developer @ Wesant Manufacturing
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/profile" className="flex items-center gap-2 px-8 py-4 bg-cyan-600 rounded-xl font-bold hover:scale-105 transition-all shadow-lg shadow-cyan-500/20">
            <FileText size={20} /> View CV
          </Link>
          <a href="/docs/M_Nxumalo_CV.pdf" download className="flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all">
            <Download size={20} /> Download CV
          </a>
        </div>

        <div className="mt-12 flex justify-center gap-8 text-gray-400 text-sm uppercase tracking-widest">
          <span>React</span> • <span>Next.js</span> • <span>Flutter</span> • <span>.NET</span>
        </div>
      </div>
      
      <Link to="/projects" className="mt-12 flex items-center gap-2 text-cyan-400 hover:gap-4 transition-all">
        Explore My Work <ArrowRight size={20}/>
      </Link>
    </div>
  );
}
