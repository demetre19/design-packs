import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Cta1() {
  return (
    <section className="w-full bg-black text-white border-b border-white font-mono py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-white/40 pb-4 mb-8 text-xs uppercase tracking-widest text-neutral-400">
          <span>BLACK-PANEL ACTION PHRASE</span>
          <span>CTA 01</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              INITIATE YOUR INSTITUTIONAL COMMISSION TODAY.
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4">
            <a href="#contact" className="bg-white text-black font-bold uppercase tracking-widest py-4 px-6 text-center hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 text-xs">
              Contact Studio Sterling <ArrowUpRight className="w-4 h-4" />
            </a>
            <span className="text-[10px] text-center uppercase tracking-widest text-neutral-400">LONDON // ZURICH</span>
          </div>
        </div>
      </div>
    </section>
  );
}
