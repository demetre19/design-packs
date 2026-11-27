import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Pricing3() {
  return (
    <section className="w-full border-b border-black py-16 px-4 bg-white text-black">
      <div className="max-w-4xl mx-auto border border-black p-8 md:p-12 relative">
        <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-[9px] font-mono uppercase tracking-widest">
          SPOTLIGHT TIER
        </div>
        <div className="text-[9px] uppercase tracking-widest font-mono text-zinc-500 mb-2">VAULT ANNUAL PASS</div>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight font-serif-editorial mb-4">
          THE MONOGRAPH<span className="text-zinc-400">*</span>
        </h2>
        <p className="text-xs md:text-sm font-mono text-zinc-700 max-w-xl mb-8 leading-relaxed">
          Designed for uncompromising collectors and creative directors. Grants immediate access to all current and upcoming printed volumes, high-resolution digital scans, and studio curations.
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-black pt-8">
          <div>
            <span className="text-4xl md:text-5xl font-black font-mono">€180</span>
            <span className="text-xs font-mono text-zinc-500 block uppercase mt-1">Billed annually // Save 30%</span>
          </div>
          <button className="bg-black text-white px-8 py-4 text-xs uppercase tracking-widest font-mono hover:bg-zinc-800 transition-colors flex items-center gap-2">
            Acquire Annual Pass <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
