import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Cta3() {
  return (
    <section className="bg-[#0c0d0f] text-white py-20 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto bg-[#14161a] border border-[#262c36] p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs text-[#ffd500] tracking-widest uppercase block mb-1">// 03. ACTION BAND</span>
          <h3 className="text-xl md:text-2xl font-extrabold uppercase">BEGIN YOUR POWERTRAIN VALIDATION TODAY.</h3>
        </div>
        <button className="bg-[#ffd500] text-black font-extrabold text-xs px-8 py-4 uppercase tracking-widest hover:bg-[#ffdf33] transition-colors whitespace-nowrap flex items-center gap-2">
          <span>ALLOCATE CELL</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
