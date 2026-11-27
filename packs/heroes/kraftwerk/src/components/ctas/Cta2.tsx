import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export function Cta2() {
  return (
    <section className="w-full bg-[#111111] text-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border border-[#e8e8e6] relative overflow-hidden">
        {/* Hazard stripes top */}
        <div className="h-3 w-full bg-[repeating-linear-gradient(45deg,#e8e8e6,#e8e8e6_4px,#111_4px,#111_8px)] border-b border-[#e8e8e6]" />

        <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[9px] uppercase tracking-widest text-[#aaa] block mb-2">[HAZARD ACCENT INVERSION CTA]</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter">
              SECURE YOUR CHASSIS ALLOCATION TODAY
            </h2>
          </div>

          <button 
            onClick={() => alert('Opening encrypted acquisition portal...')}
            className="px-8 py-4 bg-[#e8e8e6] text-[#111111] font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors cursor-pointer flex items-center space-x-2 shrink-0"
          >
            <span>START ACQUISITION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
