import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

export function Cta1() {
  return (
    <section className="w-full bg-[#1b3a5c] text-white py-20 px-6 border-b border-white/25 font-mono relative overflow-hidden blueprint-hatch">
      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        <span className="text-xs text-cyan-300 border border-cyan-300 px-3 py-1 bg-[#142d48]">CALL TO ACTION // CTA-01</span>
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight">
          Ready to Engineer Your Next Architectural Masterwork?
        </h2>
        <p className="text-xs md:text-sm text-cyan-100 max-w-xl mx-auto leading-relaxed">
          Initiate professional drawing packages and rigorous structural calculations with Atelier Orthogonal today.
        </p>
        <div className="pt-4">
          <button className="border border-cyan-400 bg-cyan-400 text-[#1b3a5c] px-8 py-4 font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2 mx-auto cursor-pointer">
            <span>INITIATE PROJECT DOSSIER</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
