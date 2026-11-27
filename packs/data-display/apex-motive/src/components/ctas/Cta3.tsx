import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Cta3() {
  return (
    <section className="py-16 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center bg-[#16181d] border border-[#272a33] p-8 clip-corner">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <span className="font-mono-spec text-xs text-[#ff5a1f] font-bold">CTA // 03</span>
          <span className="font-display font-extrabold text-2xl text-white">READY TO EXPERIENCE APEX PERFORMANCE?</span>
        </div>
        <button className="bg-[#ff5a1f] text-black font-extrabold text-xs px-8 py-3.5 clip-corner hover:bg-white transition-colors cursor-pointer inline-flex items-center gap-2">
          <span>BOOK TEST RUN</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
}
