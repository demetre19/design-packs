import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Cta1() {
  return (
    <section className="bg-black text-white py-20 border-b-4 border-[#f25c05] font-sans">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="inline-block border border-neutral-700 bg-neutral-900 px-3 py-1 font-mono text-[10px] uppercase mb-6 text-neutral-300">
          CALL TO ACTION // CTA 01
        </div>

        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95] mb-8 max-w-5xl mx-auto">
          READY TO DEPLOY <span className="text-[#f25c05]">AUTONOMOUS</span> EXTRACTION ACROSS YOUR SITES?
        </h2>

        <p className="font-mono text-xs md:text-sm text-neutral-400 uppercase tracking-wide max-w-2xl mx-auto mb-10 leading-relaxed">
          Initialize tactical survey protocol today and integrate heavy machinery fleets into the Titan Forge neural mesh.
        </p>

        <button className="bg-[#f25c05] text-black px-10 py-5 font-mono text-xs font-black uppercase tracking-widest hover:bg-white transition-colors inline-flex items-center space-x-2">
          <span>Initialize Site Deployment</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
