import React from 'react';

export function Stat3() {
  return (
    <section className="w-full border-b border-black grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-black text-white p-16 lg:p-24 flex items-center justify-center">
        <span className="text-9xl md:text-[16rem] font-black font-serif-editorial leading-none tracking-tighter">
          500
        </span>
      </div>
      <div className="bg-white text-black p-12 lg:p-20 flex flex-col justify-center">
        <span className="text-[9px] uppercase tracking-widest font-mono text-zinc-500 block mb-4">SPOTLIGHT NUMERAL // STAT 03</span>
        <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight font-serif-editorial mb-6">
          LIMITED PRINT RUN PERMANENCE
        </h3>
        <p className="text-xs font-mono text-zinc-700 leading-relaxed mb-8">
          Every volume is strictly capped at 500 numbered copies worldwide. Once exhausted, the edition is archived permanently and never reprinted.
        </p>
        <div className="border-t border-black pt-4 text-xs font-mono uppercase">
          <span>ISSN 2940-1029 // VAULT EDITORIAL</span>
        </div>
      </div>
    </section>
  );
}
