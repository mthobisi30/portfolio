import React, { useState } from 'react';
import { CV_DATA } from '../data';
import { ExternalLink, X } from 'lucide-react';

export default function Profile() {
  const [activeDoc, setActiveDoc] = useState(null);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-12">Professional Profile</h2>
      
      {/* Experience Section */}
      <div className="space-y-12 mb-20">
        {CV_DATA.experience.map((job, i) => (
          <div key={i} className="relative pl-8 border-l border-white/10">
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_cyan]"></div>
            <h3 className="text-2xl font-bold">{job.title}</h3>
            <p className="text-cyan-400 mb-4">{job.company} | {job.period}</p>
            <ul className="space-y-2 text-gray-400">
              {job.responsibilities.map((r, ri) => <li key={ri}>• {r}</li>)}
            </ul>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <h3 className="text-3xl font-bold mb-8">Education</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {CV_DATA.education.map((edu, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
            <p className="text-gray-400 text-sm mb-4">{edu.school} | {edu.period}</p>
            <button 
              onClick={() => setActiveDoc(edu.doc)}
              className="flex items-center gap-2 text-cyan-400 text-sm font-bold hover:underline"
            >
              <ExternalLink size={16}/> View Certificate
            </button>
          </div>
        ))}
      </div>

      {/* Document Viewer Modal */}
      {activeDoc && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-5xl h-[80vh] bg-white rounded-3xl overflow-hidden">
            <button onClick={() => setActiveDoc(null)} className="absolute top-4 right-4 z-10 p-2 bg-slate-900 rounded-full text-white">
              <X size={24}/>
            </button>
            <iframe src={activeDoc} className="w-full h-full" title="Document Viewer"></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
