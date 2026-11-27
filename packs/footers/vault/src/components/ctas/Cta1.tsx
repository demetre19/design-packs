import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Cta1() {
  return (
    <section className="w-full border-b border-black py-24 px-4 bg-black text-white text-center">
      <div className="max-w-4xl mx-auto">
        <span className="text-[9px] uppercase tracking-widest font-mono text-zinc-400 block mb-4">BLACK PANEL CTA // 01</span>
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter font-serif-editorial mb-8">
          OWN THE<br />MONOGRAPH<span className="text-zinc-500">*</span>
        </h2>
        <p className="text-xs md:text-sm font-mono text-zinc-300 max-w-lg mx-auto mb-10 leading-relaxed">
          Secure your hardbound copy of Issue No. 09 before our limited print run of 500 copies is fully exhausted.
        </p>
        <button className="bg-white text-black px-8 py-4 text-xs uppercase tracking-widest font-mono hover:bg-zinc-200 transition-colors inline-flex items-center gap-2 font-bold">
          Acquire Volume 09 <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
