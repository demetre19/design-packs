import React from 'react';

export function Testimonial3() {
  return (
    <section className="w-full bg-[#f2f3f5] py-16 px-6 font-sans text-[#0d0e10]">
      <div className="max-w-5xl mx-auto bg-[#0d0e10] text-white p-12 border border-[#0d0e10]/15 flex flex-col gap-8 rounded-[2px] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 font-mono text-[10px] text-white/30">[TST-03 // FEATURED]</div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#2743f0]" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">SOVEREIGN UTILITY CASE STUDY</span>
        </div>
        <blockquote className="text-2xl md:text-3xl font-medium tracking-tight uppercase leading-relaxed text-white">
          "Strata Grid has transformed our 4,000MW distribution network into a self-healing neural mesh. Brownouts are now a statistical impossibility."
        </blockquote>
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pt-6 border-t border-white/10 font-mono text-xs">
          <div>
            <div className="font-semibold uppercase text-sm">General K. R. Sterling</div>
            <div className="text-white/60 text-[10px] uppercase tracking-wider mt-0.5">Commissioner, National Power Authority</div>
          </div>
          <span className="text-[#2743f0] font-bold">100% DISPATCH STABILITY</span>
        </div>
      </div>
    </section>
  );
}
