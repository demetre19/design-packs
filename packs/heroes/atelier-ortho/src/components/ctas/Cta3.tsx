import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Cta3() {
  return (
    <section className="w-full bg-[#1b3a5c] text-white py-14 px-6 border-b border-white/25 font-mono">
      <div className="max-w-4xl mx-auto border border-white/30 p-8 bg-[#142d48] flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-1">
          <span className="text-[10px] text-cyan-300">MINIMAL REFERENCE // CTA-03</span>
          <h3 className="text-xl font-bold uppercase">Ready for Technical Review?</h3>
        </div>
        <button className="border border-cyan-400 bg-cyan-400 text-[#1b3a5c] px-6 py-3 font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap">
          <span>REQUEST DOSSIER</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
