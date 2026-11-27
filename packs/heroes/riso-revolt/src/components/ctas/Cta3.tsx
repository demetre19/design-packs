import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Cta3() {
  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="font-mono text-xs font-bold text-[#ff6b5e] mb-3 uppercase tracking-widest">
          // MINIMALIST CALL TO ACTION
        </div>
        <h2 className="font-grotesk font-black text-4xl sm:text-6xl uppercase tracking-tighter mb-8">
          LET'S BUILD SOMETHING LOUD.
        </h2>
        <button className="btn-brutal bg-[#ffd92e] text-[#111111] font-grotesk font-black text-base px-10 py-4 inline-flex items-center gap-3 shadow-hard-lg">
          <span>START PROJECT NOW</span>
          <ArrowRight size={18} strokeWidth={3} />
        </button>
      </div>
    </section>
  );
}
