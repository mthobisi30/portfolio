import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, ChevronRight, Terminal, Database, Smartphone } from 'lucide-react';
import { CV_DATA } from '../data';

export default function Landing() {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-6 text-center animate-fade-in">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative bg-white/5 border border-white/10 p-12 rounded-[2.5rem] backdrop-blur-xl max-w-4xl shadow-2xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest">
            Available for Hire
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter text-white">
            Mthobisi <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Nxumalo</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer specializing in <span className="text-white font-medium">Enterprise Systems</span> and <span className="text-white font-medium">Mobile Applications</span>.
          </p>

          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-10 text-gray-500 text-sm font-bold uppercase tracking-widest">
            <div className="flex flex-col items-center gap-2"><Terminal size={24} className="text-cyan-500"/> Frontend</div>
            <div className="flex flex-col items-center gap-2"><Database size={24} className="text-blue-500"/> Backend</div>
            <div className="flex flex-col items-center gap-2"><Smartphone size={24} className="text-purple-500"/> Mobile</div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/profile" className="flex items-center gap-2 px-8 py-4 bg-cyan-600 rounded-2xl font-bold hover:bg-cyan-500 transition-all text-white shadow-lg shadow-cyan-500/25">
              <FileText size={20}/> View CV
            </Link>
            <a href="/docs/M_Nxumalo_CV.pdf" download className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all text-white">
              <Download size={20}/> Download CV
            </a>
          </div>
        </div>
      </div>
      
      <Link to="/projects" className="mt-12 flex items-center gap-2 text-gray-500 font-bold hover:text-cyan-400 transition-colors">
        View Portfolio <ChevronRight size={20} />
      </Link>
    </div>
  );
}
