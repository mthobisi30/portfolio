import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { CV_DATA } from '../data';

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 animate-fade-in">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">Let's Connect</h2>
        <p className="text-gray-400 text-lg">Currently available for full-time roles and high-impact collaborations.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info Cards */}
        <div className="space-y-6">
          <a href={`mailto:${CV_DATA.email}`} className="flex items-center gap-6 p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group">
            <div className="p-4 bg-cyan-500/10 rounded-2xl text-cyan-400 group-hover:scale-110 transition-transform">
              <Mail size={28} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Email</p>
              <p className="text-lg font-medium">{CV_DATA.email}</p>
            </div>
          </a>

          <a href={`tel:${CV_DATA.phone}`} className="flex items-center gap-6 p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group">
            <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-400 group-hover:scale-110 transition-transform">
              <Phone size={28} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Phone</p>
              <p className="text-lg font-medium">{CV_DATA.phone}</p>
            </div>
          </a>

          <div className="flex items-center gap-6 p-8 bg-white/5 border border-white/10 rounded-3xl group">
            <div className="p-4 bg-rose-500/10 rounded-2xl text-rose-400">
              <MapPin size={28} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Location</p>
              <p className="text-lg font-medium">{CV_DATA.location}</p>
            </div>
          </div>
        </div>

        {/* Social and Quick Message */}
        <div className="bg-cyan-600 p-12 rounded-[3rem] text-white relative overflow-hidden flex flex-col justify-between shadow-2xl shadow-cyan-600/20">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Social Presence</h3>
            <p className="mb-10 text-cyan-100 leading-relaxed">
              Check out my GitHub for recent ERP and Booking System commits, or connect with me on LinkedIn for professional inquiries.
            </p>
            
            <div className="flex gap-4">
              <a href={`https://${CV_DATA.linkedin}`} target="_blank" rel="noreferrer" className="p-4 bg-white/20 rounded-2xl hover:bg-white/30 transition-all">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/mthobisi30" target="_blank" rel="noreferrer" className="p-4 bg-white/20 rounded-2xl hover:bg-white/30 transition-all">
                <Github size={24} />
              </a>
            </div>
          </div>
          
          <div className="mt-12">
            <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black transition-colors">
              <Send size={20} /> Send Quick Inquiry
            </button>
          </div>

          {/* Decorative Circle */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}
