import React from 'react';

export function Hero5() {
  return (
    <section className="w-full bg-black text-white border-b border-white/20 py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[9px] uppercase tracking-widest font-mono text-zinc-400 block mb-4">OVERLAPPING PLATES // 05</span>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter font-serif-editorial leading-none">
            OBSIDIAN<span className="text-zinc-500">*</span>
          </h1>
        </div>
        <div className="relative mx-auto max-w-4xl h-[400px] md:h-[500px] flex items-center justify-center">
          <div className="absolute left-0 top-4 w-64 md:w-80 border border-white/40 p-2 bg-zinc-900 z-20 shadow-2xl">
            <img src="https://picsum.photos/seed/overlap1/400/500.webp" alt="Overlap 1" className="w-full h-72 object-cover grayscale" />
            <div className="p-2 text-[10px] font-mono uppercase text-zinc-300">Look 01 // Heavy Wool</div>
          </div>
          <div className="absolute right-0 bottom-4 w-64 md:w-80 border border-white/40 p-2 bg-zinc-900 z-30 shadow-2xl">
            <img src="https://picsum.photos/seed/overlap2/400/500.webp" alt="Overlap 2" className="w-full h-72 object-cover grayscale" />
            <div className="p-2 text-[10px] font-mono uppercase text-zinc-300">Look 02 // Raw Silk</div>
          </div>
          <div className="absolute z-10 text-center px-6 py-8 bg-white text-black border border-black max-w-md shadow-2xl">
            <p className="text-xs font-mono uppercase tracking-wider mb-2 font-bold">VAULT MONOGRAPH NO. 09</p>
            <p className="text-[11px] font-mono text-zinc-700">"The purity of monochrome is not an absence of tone, but the concentration of all light into singular form."</p>
          </div>
        </div>
      </div>
    </section>
  );
}
