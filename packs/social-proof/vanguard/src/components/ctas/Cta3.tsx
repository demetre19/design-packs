import React from 'react';
import { ChevronRight } from 'lucide-react';

export function Cta3() {
  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-4xl mx-auto bg-[#20232a] border border-[#3a3e4c] p-8 [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-xs font-bold text-[#ff3d00] uppercase tracking-widest">MINIMAL INDEX CTA</div>
          <h3 className="text-xl font-black uppercase font-sans">SORTIE S-12 RESERVATION OPEN</h3>
        </div>
        <button className="bg-[#ff3d00] hover:bg-[#e03500] text-white font-black text-xs tracking-widest px-6 py-3 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)] flex items-center space-x-2 shrink-0">
          <span>SECURE SLOT</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
