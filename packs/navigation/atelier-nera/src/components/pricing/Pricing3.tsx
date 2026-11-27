import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Pricing3() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-black/10">
      <div className="max-w-3xl mx-auto border border-black/10 p-12 md:p-16 text-center space-y-8">
        <span className="text-[9px] tracking-widest uppercase text-black/50">spotlight engagement</span>
        <h3 className="font-light text-3xl md:text-5xl tracking-tighter lowercase leading-tight">
          annual studio retainer &amp; direction.
        </h3>
        <p className="font-light text-xs md:text-sm text-black/70 max-w-lg mx-auto leading-relaxed">
          Limited to three private clients per quarter. Full access to Atelier Nera partners for continuous digital and editorial evolution.
        </p>
        <div className="font-light text-4xl tracking-tight">€4,500 <span className="text-xs text-black/50 font-normal">/ month</span></div>
        <div className="pt-4">
          <button className="inline-flex items-center gap-3 px-8 py-3 bg-black text-white text-xs font-light lowercase hover:bg-black/80 transition-colors">
            secure availability <ArrowRight className="w-3 h-3 stroke-[1.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}
