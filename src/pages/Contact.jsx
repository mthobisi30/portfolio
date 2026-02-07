import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { CV_DATA } from '../data';

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 animate-fade-in">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4 text-white">Let's Connect</h2>
        <p className="text-gray-400 text-lg">Available for full-time roles and high-impact collaborations.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <a href={`mailto:${CV_DATA.email}`} className="flex items-center gap-6 p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all group">
            <div className="p-4 bg-cyan-500/10 rounded-2xl text-cyan-400 group-hover:scale-110 transition-transform"><Mail size={28} /></div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Email</p>
              <p className="text-lg font-medium text-white">{CV_DATA.email}</p>
            </div>
          </a>
          <a href={`tel:${CV_DATA.phone}`} className="flex items-center gap-6 p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all group">
            <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-400 group-hover:scale-110 transition-transform"><Phone size={28} /></div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Phone</p>
              <p className="text-lg font-medium text-white">{CV_DATA.phone}</p>
            </div>
          </a>
        </div>

        <div className="bg-gradient-to-br from-cyan-600 to-blue-700 p-12 rounded-[2rem] text-white flex flex-col justify-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Social Presence</h3>
          <p className="text-cyan-100 mb-8">Follow my latest work on GitHub or connect with me on LinkedIn.</p>
          <div className="flex gap-4">
            <a href={`https://${CV_DATA.linkedin}`} target="_blank" rel="noreferrer" className="p-4 bg-white/20 rounded-2xl hover:bg-white/30 transition-all"><Linkedin size={28} /></a>
            <a href="https://github.com/mthobisi30" target="_blank" rel="noreferrer" className="p-4 bg-white/20 rounded-2xl hover:bg-white/30 transition-all"><Github size={28} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
