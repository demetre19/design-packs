import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Modal1() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-black/10">
      <div className="text-[9px] tracking-widest uppercase text-black/50 mb-12">modal 01 / project detail preview</div>
      <div className="border border-black/10 p-8 md:p-12 max-w-2xl mx-auto bg-white space-y-8 relative">
        <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-black/40">
          <span>case study [01]</span>
          <span className="cursor-pointer hover:text-black">[close ×]</span>
        </div>
        <div className="space-y-4">
          <h3 className="font-light text-3xl md:text-4xl tracking-tighter lowercase">
            lumina pavilion architectural study.
          </h3>
          <p className="font-light text-xs text-black/70 leading-relaxed">
            An exploration into concrete monoliths and natural light diffusion. Designed in Milan, 2026.
          </p>
        </div>
        <div className="w-full h-56 bg-neutral-100 p-2 border border-black/10">
          <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80" alt="Detail" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-black/10">
          <span className="text-xs font-light text-black/50">client: fondazione nera</span>
          <button className="px-4 py-2 bg-black text-white text-xs font-light lowercase inline-flex items-center gap-2 hover:bg-black/80 transition-colors">
            view archive <ArrowRight className="w-3 h-3 stroke-[1.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}
