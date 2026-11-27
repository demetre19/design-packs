import React from 'react';

export function Testimonial3() {
  return (
    <section className="w-full border-b border-black py-20 px-4 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-[9px] uppercase tracking-widest font-mono text-zinc-400 block mb-6">PATRON QUOTE // EXCLUSIVE</span>
        <blockquote className="text-4xl md:text-6xl font-black uppercase tracking-tight font-serif-editorial leading-tight mb-8">
          "VAULT IS NOT MERELY A MAGAZINE. IT IS A MANIFESTO FOR THOSE WHO DEMAND ABSOLUTE PURITY IN FORM AND THOUGHT."
        </blockquote>
        <div className="border-t border-zinc-800 pt-6 inline-block">
          <span className="text-xs font-mono uppercase tracking-widest block text-white font-bold">MARCUS STERLING</span>
          <span className="text-[10px] font-mono text-zinc-400 uppercase">Director, Sterling Architectural Institute</span>
        </div>
      </div>
    </section>
  );
}
