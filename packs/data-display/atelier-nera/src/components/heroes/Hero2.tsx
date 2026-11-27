import React from 'react';
import { ArrowDown } from 'lucide-react';

export function Hero2() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7">
          <div className="text-[9px] tracking-widest uppercase text-black/50 mb-6">atelier monograph — 2026</div>
          <h1 className="font-light text-4xl md:text-6xl tracking-tighter lowercase leading-[1.1] mb-8">
            architecture of thought in pure monochrome.
          </h1>
          <p className="font-light text-black/70 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            We craft understated digital experiences and physical artifacts for clients who value restraint, clarity, and uncompromising typographic rigor.
          </p>
          <div className="inline-flex items-center gap-3 text-xs font-light lowercase border-b border-black pb-1">
            <span>discover our monograph</span>
            <ArrowDown className="w-3 h-3 stroke-[1.5]" />
          </div>
        </div>
        <div className="md:col-span-5 flex justify-center">
          <div className="w-72 h-96 bg-neutral-100 p-3 border border-black/10">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" 
              alt="Portrait" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
