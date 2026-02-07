import React, { useState } from 'react';
import { CV_DATA } from '../data';
import { ExternalLink, X, Briefcase, GraduationCap } from 'lucide-react';

export default function Profile() {
  const [activeDoc, setActiveDoc] = useState(null);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-fade-in">
      <h2 className="text-4xl font-bold mb-12 text-white">Professional Profile</h2>
      
      <div className="space-y-12 mb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400"><Briefcase size={24}/></div>
          <h3 className="text-2xl font-bold text-white">Experience</h3>
        </div>

        {CV_DATA.experience.map((job, i) => (
          <div key={i} className="relative pl-8 border-l border-white/10 group">
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-500 group-hover:shadow-[0_0_15px_cyan] transition-all"></div>
            <h4 className="text-xl font-bold text-white mb-1">{job.title}</h4>
            <p className="text-cyan-400 text-sm font-medium mb-4 uppercase tracking-wide">{job.company} — {job.period}</p>
            <ul className="space-y-3 text-gray-400">
              {job.responsibilities.map((r, ri) => <li key={ri} className="leading-relaxed">• {r}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400"><GraduationCap size={24}/></div>
          <h3 className="text-2xl font-bold text-white">Education & Certifications</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {CV_DATA.education.map((edu, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all">
              <h4 className="text-lg font-bold text-white mb-2">{edu.degree}</h4>
              <p className="text-gray-500 text-sm mb-6">{edu.school} • {edu.period}</p>
              <button 
                onClick={() => setActiveDoc(edu.doc)}
                className="w-full py-3 px-4 bg-white/5 border border-white/10 rounded-xl text-cyan-400 text-sm font-bold flex items-center justify-center gap-2 hover:bg-cyan-500/10 transition-colors"
              >
                <ExternalLink size={16}/> View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>

      {activeDoc && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-5xl h-[85vh] bg-slate-900 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-4 border-b border-white/10 bg-black/20">
              <span className="text-gray-400 font-bold">Document Viewer</span>
              <button onClick={() => setActiveDoc(null)} className="p-2 bg-white/10 rounded-full text-white hover:bg-red-500/80 transition-colors">
                <X size={20}/>
              </button>
            </div>
            <iframe src={activeDoc} className="w-full h-full bg-white" title="Certificate Viewer"></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
