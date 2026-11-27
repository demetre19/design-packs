import React from 'react';

export function BlogCard3() {
  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-black pb-4 mb-8">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">MIXED-SCALE EDITORIAL GRID</h2>
          <span className="text-xs font-bold uppercase tracking-widest border border-black px-2 py-1">BLOG 03</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 border border-black p-6 bg-white flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-2">FEATURED ESSAY // 2026</div>
              <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-4">THE ARCHITECTURE OF PRINTED MATTER</h3>
              <p className="text-xs uppercase tracking-wider text-neutral-800 leading-relaxed mb-6">
                An examination of how physical book binding, paper weight grain, and lead typography influence spatial perception in contemporary museum exhibitions and architectural monographs.
              </p>
            </div>
            <div className="pt-4 border-t border-black flex justify-between items-center text-xs font-bold uppercase tracking-widest">
              <span>MARCUS STERLING</span>
              <span>12 MIN READ</span>
            </div>
          </div>
          <div className="md:col-span-4 border border-black p-5 bg-neutral-100 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-2">NOTE // 02</div>
              <h4 className="font-black text-sm uppercase tracking-tight mb-3">TYPOGRAPHIC SCALE IN PRACTICE</h4>
              <p className="text-[11px] uppercase tracking-wider text-neutral-700 leading-tight">
                Maintaining strict proportions across 12-column grids in bilingual Swiss publications.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-black text-[10px] font-bold uppercase">
              READ ARCHIVE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
