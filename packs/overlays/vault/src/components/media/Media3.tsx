import React from 'react';

export function Media3() {
  return (
    <section className="w-full border-b border-black py-16 px-4 bg-white text-black">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-6 mb-8 border-b border-black pb-4">
          <span className="text-8xl font-black font-serif-editorial text-zinc-400">09</span>
          <div>
            <span className="text-[9px] uppercase tracking-widest font-mono text-zinc-500 block">FEATURE PLATE // NUMERAL</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">THE MONOLITHIC INSTALLATION</h2>
          </div>
        </div>
        <div className="border border-black p-2 bg-black">
          <img src="https://picsum.photos/seed/medplate3/1000/500.webp" alt="Feature plate" className="w-full h-96 object-cover grayscale contrast-125" />
          <div className="bg-white text-black p-4 mt-2 flex justify-between items-center text-xs font-mono uppercase">
            <span>Exhibit Plate 09 — Marseille Monolith Series</span>
            <span>Limited Print 1/100</span>
          </div>
        </div>
      </div>
    </section>
  );
}
