import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Cta1() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-28 text-center border-t border-black/10">
      <div className="max-w-2xl mx-auto space-y-8">
        <span className="text-[9px] tracking-widest uppercase text-black/40">ready for collaboration</span>
        <h2 className="font-light text-4xl md:text-5xl tracking-tighter lowercase leading-tight">
          let&apos;s shape your digital monograph together.
        </h2>
        <div className="pt-4">
          <a href="#contact" className="inline-flex items-center gap-3 px-8 py-3 bg-black text-white text-xs font-light lowercase hover:bg-black/80 transition-colors">
            start project <ArrowRight className="w-3 h-3 stroke-[1.5]" />
          </a>
        </div>
      </div>
    </section>
  );
}
