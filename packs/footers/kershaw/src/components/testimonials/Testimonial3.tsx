import React from 'react';

export function Testimonial3() {
  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono relative overflow-hidden">
      <div className="absolute right-10 bottom-0 text-[20vw] font-black text-zinc-900/40 pointer-events-none select-none">
        07
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <span className="text-xs text-[#ffd500] tracking-widest uppercase block mb-4">// FEATURED TEST RUN REVIEW</span>
        <blockquote className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight leading-none mb-8">
          “THE ONLY DYNO FACILITY CAPABLE OF HANDLING OUR 1,200 HP TWIN-TURBO W16 SETUP AT PEAK BOOST.”
        </blockquote>
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 bg-[#ffd500]" />
          <div>
            <span className="text-sm font-bold uppercase block text-white">KLAUS BECKER</span>
            <span className="text-xs text-zinc-400 font-sans">CHIEF TEST DRIVER, KERSHAW DYNAMICS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
