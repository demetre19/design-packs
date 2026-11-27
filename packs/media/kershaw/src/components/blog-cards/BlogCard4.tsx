import React from 'react';

export function BlogCard4() {
  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[22vw] font-black text-zinc-900/35 uppercase tracking-tighter">LOGS</span>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-xs text-[#ffd500] tracking-widest uppercase block mb-4">// 04. ARTICLE HEADER TREATMENT</span>
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter mb-6">
          THERMAL STABILITY <span className="text-[#ffd500]">IN FORCED INDUCTION.</span>
        </h1>
        <p className="text-zinc-400 font-sans text-sm md:text-base max-w-xl mx-auto mb-8">
          Published by Kershaw Dynamics Engineering Group. Cell 04 telemetry analysis.
        </p>
        <span className="text-xs text-zinc-500">READ TIME: 8 MINS // 2026.11.25</span>
      </div>
    </section>
  );
}
