import React from 'react';

export function Testimonial1() {
  return (
    <section className="w-full border-b border-black py-16 px-4 bg-white text-black">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-[9px] uppercase tracking-widest font-mono text-zinc-500 block mb-4">CRITICAL ACCLAIM // EDITOR QUOTE</span>
        <span className="text-6xl font-serif-editorial text-zinc-400 block -mb-4">“</span>
        <blockquote className="text-3xl md:text-5xl font-black uppercase tracking-tight font-serif-editorial leading-tight mb-6">
          VAULT REDEFINES PRINT JOURNALISM THROUGH UNCOMPROMISING MONOCHROME RIGOR AND BRUTALIST PRECISION.
        </blockquote>
        <span className="text-6xl font-serif-editorial text-zinc-400 block -mt-4 mb-8">”</span>
        <div className="border-t border-black pt-4 inline-block">
          <span className="text-xs font-mono uppercase tracking-widest block font-bold">DR. HELENA VOGEL</span>
          <span className="text-[10px] font-mono text-zinc-600 uppercase">Chief Critic, International Design Review</span>
        </div>
      </div>
    </section>
  );
}
