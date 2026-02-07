import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, ChevronRight } from 'lucide-react';
import { CV_DATA } from '../data';

export default function Landing() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="bg-white/5 border border-white/10 p-12 rounded-[2.5rem] backdrop-blur-xl max-w-4xl shadow-2xl">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            {CV_DATA.name}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-10 font-light max-w-2xl mx-auto">
          [span_18](start_span)[span_19](start_span){CV_DATA.role} @ Wesant Manufacturing. Crafting robust software solutions from front-end UI to back-end APIs[span_18](end_span)[span_19](end_span).
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/profile" className="flex items-center gap-2 px-8 py-4 bg-cyan-600 rounded-2xl font-bold hover:scale-105 transition-all">
            <FileText size={20}/> View CV
          </Link>
          <a href="/docs/M_Nxumalo_CV.pdf" download className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all">
            <Download size={20}/> Download CV
          </a>
        </div>
      </div>
      
      <Link to="/projects" className="mt-12 flex items-center gap-2 text-cyan-400 font-bold group">
        Explore Projects <ChevronRight className="group-hover:translate-x-2 transition-transform"/>
      </Link>
    </div>
  );
}
