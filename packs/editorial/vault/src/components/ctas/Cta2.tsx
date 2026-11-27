import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Cta2() {
  return (
    <section className="w-full border-b border-black py-20 px-4 bg-white text-black">
      <div className="max-w-6xl mx-auto border border-black p-8 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[9px] uppercase tracking-widest font-mono text-zinc-500 block mb-3">SPREAD CTA // 02</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight font-serif-editorial mb-6">
              THE PERMANENT<br />COLLECTION<span className="text-zinc-400">*</span>
            </h2>
            <p className="text-xs font-mono text-zinc-700 leading-relaxed">
              Join elite collectors worldwide. Annual fellowship guarantees all quarterly editions and private salon access.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end justify-center">
            <span className="text-4xl font-black font-mono mb-6">€180 / YEAR</span>
            <button className="bg-black text-white px-8 py-4 text-xs uppercase tracking-widest font-mono hover:bg-zinc-800 transition-colors flex items-center gap-2">
              Secure Annual Pass <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
