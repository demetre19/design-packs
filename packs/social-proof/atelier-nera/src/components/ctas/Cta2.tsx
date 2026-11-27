import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Cta2() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24">
      <div className="border border-black/10 p-8 md:p-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 space-y-6">
          <span className="text-[9px] tracking-widest uppercase text-black/50">limited availability</span>
          <h2 className="font-light text-3xl md:text-5xl tracking-tighter lowercase leading-tight">
            securing Q3 commissions now.
          </h2>
          <p className="font-light text-xs text-black/70 leading-relaxed">
            Reserve your consultation with our Milan and Paris studios today.
          </p>
          <button className="px-6 py-3 bg-black text-white text-xs font-light lowercase inline-flex items-center gap-2 hover:bg-black/80 transition-colors">
            inquire now <ArrowRight className="w-3 h-3 stroke-[1.5]" />
          </button>
        </div>
        <div className="md:col-span-5 flex justify-center">
          <div className="w-64 h-72 bg-neutral-100 p-2 border border-black/10">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80" alt="CTA Portrait" className="w-full h-full object-cover grayscale" />
          </div>
        </div>
      </div>
    </section>
  );
}
