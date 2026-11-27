import React from 'react';
import { ArrowDown } from 'lucide-react';

export function Hero1() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20 md:py-32">
      <div className="flex justify-between items-center text-[9px] tracking-widest uppercase text-black/50 mb-12">
        <span>[01 / hero]</span>
        <span>milan &amp; paris</span>
        <span>spatial design</span>
      </div>

      <div className="max-w-4xl">
        <h1 className="font-light text-5xl md:text-7xl tracking-tighter lowercase leading-[1.05] mb-8">
          digital spaces shaped by silence and meticulous form.
        </h1>
        <p className="font-light text-black/70 text-base md:text-lg max-w-xl mb-12 leading-relaxed">
          Atelier Nera is an independent design practice operating at the intersection of minimalist architecture, typography, and interactive systems.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end gap-12 mt-16">
        <div className="flex items-center gap-4 text-xs font-light lowercase text-black/60">
          <span>scroll to explore</span>
          <ArrowDown className="w-4 h-4 stroke-[1]" />
        </div>
        <div className="w-64 h-80 bg-neutral-100 p-2 border border-black/10">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" 
            alt="Portrait" 
            className="w-full h-full object-cover grayscale contrast-125"
          />
        </div>
      </div>
    </section>
  );
}
