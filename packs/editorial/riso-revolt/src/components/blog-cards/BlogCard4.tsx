import React from 'react';
import { Tag, Clock, Calendar, User } from 'lucide-react';

export default function BlogCard4() {
  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border-3 border-[#111111] shadow-hard-xl p-8 sm:p-12">
          
          {/* Meta chip row */}
          <div className="flex flex-wrap gap-3 mb-6 font-mono text-xs font-bold">
            <span className="bg-[#ffd92e] px-3 py-1 border-2 border-[#111111] shadow-hard-sm flex items-center gap-1.5">
              <Tag size={12} /> RISO LAB
            </span>
            <span className="bg-white px-3 py-1 border-2 border-[#111111] shadow-hard-sm flex items-center gap-1.5">
              <Calendar size={12} /> MARCH 24, 2026
            </span>
            <span className="bg-[#ff6b5e] text-white px-3 py-1 border-2 border-[#111111] shadow-hard-sm flex items-center gap-1.5">
              <Clock size={12} /> 6 MIN READ
            </span>
          </div>

          <h1 className="font-grotesk font-black text-4xl sm:text-6xl uppercase tracking-tighter leading-none mb-6">
            THE ANATOMY OF A NEO-BRUTALIST WEB ARCHITECTURE.
          </h1>

          <div className="flex items-center gap-3 pt-6 border-t-2 border-[#111111] font-mono text-xs font-bold">
            <div className="w-8 h-8 bg-[#111111] text-white flex items-center justify-center font-bold">
              RR
            </div>
            <span>BY RISO & REVOLT EDITORIAL TEAM // BERLIN</span>
          </div>

        </div>
      </div>
    </section>
  );
}
