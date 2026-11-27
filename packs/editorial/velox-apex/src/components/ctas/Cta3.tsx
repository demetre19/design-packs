import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Cta3() {
  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 border-2 border-black p-12 bg-neutral-50">
        <div>
          <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// MINIMAL ARROW BAND</div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            SCHEDULE YOUR TRACK PILOT TEST
          </h2>
        </div>

        {/* Minimal huge arrow + label band */}
        <div className="flex items-center gap-6">
          <span className="font-mono text-xs font-bold uppercase tracking-widest">INITIALIZE</span>
          <div className="w-16 h-16 bg-black text-white flex items-center justify-center hover:bg-[#ff2e00] hover:text-black transition-colors cursor-pointer">
            <ArrowUpRight className="w-8 h-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
