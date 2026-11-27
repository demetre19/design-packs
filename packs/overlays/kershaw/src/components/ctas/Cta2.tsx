import React from 'react';
import { ArrowRight, Activity } from 'lucide-react';

export function Cta2() {
  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#14161a] border border-[#262c36] p-8 md:p-12">
        <div>
          <span className="text-xs text-[#ffd500] tracking-widest uppercase block mb-3">// 02. SPLIT CTA STAGE</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter mb-4">
            SECURE YOUR <span className="text-[#ffd500]">CELL 04 SLOT.</span>
          </h2>
          <p className="text-zinc-400 font-sans text-xs md:text-sm mb-8">
            Join elite motorsport teams worldwide relying on Kershaw Dynamics for rigorous engine validation and thermal mapping.
          </p>
          <button className="bg-[#ffd500] text-black font-extrabold text-xs px-8 py-4 uppercase tracking-widest hover:bg-[#ffdf33] transition-colors inline-flex items-center gap-2">
            <span>BOOK TEST BLOCK</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="bg-[#0c0d0f] border border-[#262c36] p-8 flex flex-col items-center justify-center h-64 relative">
          <Activity className="w-12 h-12 text-[#ffd500] mb-4 animate-pulse" />
          <span className="text-xs text-zinc-400 font-mono">CELL 04 READY // RUN 07</span>
        </div>
      </div>
    </section>
  );
}
