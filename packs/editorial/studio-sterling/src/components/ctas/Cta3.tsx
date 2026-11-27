import React from 'react';

export function Cta3() {
  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center justify-center w-8 h-8 border border-black rounded-full font-bold text-sm">Ω</span>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 block mb-3">ORNAMENTAL CTA // 03</span>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
          ARCHITECTURAL MONOGRAPHS & VISUAL SYSTEMS
        </h2>
        <p className="text-xs uppercase tracking-wider text-neutral-700 max-w-xl mx-auto mb-8 leading-relaxed">
          Commission Studio Sterling for rigorous typographic direction and publication design.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="border border-black bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors">
            Initiate Commission
          </button>
          <button className="border border-black bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-neutral-100 transition-colors">
            View Credentials
          </button>
        </div>
      </div>
    </section>
  );
}
