import React from 'react';

export function Testimonial2() {
  return (
    <section className="w-full bg-black text-white border-b border-white font-mono py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-white pb-4 mb-8 text-xs uppercase tracking-widest text-neutral-400">
          <span>BLACK-PANEL QUOTE</span>
          <span>CURRICULUM ENDORSEMENT</span>
        </div>
        <blockquote className="max-w-4xl mx-auto text-center py-8">
          <p className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-8">
            "MARCUS STERLING REPRESENTS THE PINNACLE OF SWISS TYPOGRAPHIC RIGOR COMBINED WITH CONTEMPORARY ARCHITECTURAL VISION."
          </p>
          <div className="border-t border-white/40 pt-4 inline-block px-8">
            <div className="font-bold uppercase tracking-widest text-sm">PROF. BEATRIX VON HALLER</div>
            <div className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">DEPARTMENT OF TYPOGRAPHY, ETH ZURICH</div>
          </div>
        </blockquote>
      </div>
    </section>
  );
}
