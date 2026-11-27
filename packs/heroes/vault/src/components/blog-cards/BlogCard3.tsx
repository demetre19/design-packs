import React from 'react';

export function BlogCard3() {
  return (
    <section className="w-full border-b border-black py-16 px-4 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono border-b border-black pb-2 mb-12">
          <span>MAGAZINE GRID // MIXED SCALE</span>
          <span>VOLUME 09</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 border border-black p-6 flex flex-col justify-between bg-black text-white">
            <div>
              <span className="text-[9px] font-mono uppercase text-zinc-400 block mb-3">FEATURED LEAD STORY</span>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 font-serif-editorial">
                THE MONOCHROME MANIFESTO
              </h3>
              <p className="text-xs font-mono text-zinc-300 leading-relaxed mb-8">
                An uncompromising look into why the modern creative elite has abandoned color in favor of the timeless purity of black and white.
              </p>
            </div>
            <div className="border-t border-zinc-800 pt-4 flex justify-between items-center text-xs font-mono uppercase text-zinc-300">
              <span>By Editor-in-Chief</span>
              <span>14 Min Read</span>
            </div>
          </div>
          <div className="md:col-span-5 grid grid-cols-1 gap-6">
            <div className="border border-black p-4 bg-white text-black">
              <span className="text-[9px] font-mono uppercase text-zinc-500 block mb-2">Short Essay 01</span>
              <h4 className="text-xl font-black uppercase tracking-tight mb-2">RAW SILK &amp; INK</h4>
              <p className="text-[11px] font-mono text-zinc-700">Exploring tactile resistance in high-fashion textiles.</p>
            </div>
            <div className="border border-black p-4 bg-white text-black">
              <span className="text-[9px] font-mono uppercase text-zinc-500 block mb-2">Short Essay 02</span>
              <h4 className="text-xl font-black uppercase tracking-tight mb-2">BRUTALIST TAILORING</h4>
              <p className="text-[11px] font-mono text-zinc-700">How Marseille architecture informed our AW26 collection.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
