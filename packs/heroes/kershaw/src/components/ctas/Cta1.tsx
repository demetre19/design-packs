import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Cta1() {
  return (
    <section className="bg-[#0c0d0f] text-white py-28 px-6 border-b border-[#22262f] font-mono text-center">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs text-[#ffd500] tracking-widest uppercase block mb-4">// 01. CALL TO ACTION</span>
        <h2 className="text-4xl md:text-7xl font-extrabold uppercase tracking-tighter mb-8 leading-none">
          READY TO TEST <span className="text-[#ffd500]">YOUR POWERTRAIN?</span>
        </h2>
        <p className="text-zinc-400 font-sans text-sm md:text-base max-w-xl mx-auto mb-10">
          Reserve your dyno testing block in Cell 04 today and experience uncompromised telemetry precision.
        </p>
        <button className="bg-[#ffd500] text-black font-extrabold text-xs px-10 py-5 uppercase tracking-widest hover:bg-[#ffdf33] transition-colors inline-flex items-center gap-3">
          <span>INITIALIZE TEST PROGRAM</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
