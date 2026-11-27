import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Cta1() {
  return (
    <section className="w-full bg-[#0b0d10] py-24 px-6 border-b border-white/10 text-center flex flex-col items-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <span className="text-xs font-mono tracking-[0.3em] text-[#d4b06a] uppercase block mb-3">BEGIN YOUR PATRONAGE</span>
        <h2 className="font-serif text-4xl sm:text-5xl text-[#ece8e1] mb-6 leading-tight">
          Secure Your Legacy with Aetheris & Co.
        </h2>
        <p className="font-sans text-xs text-[#7a8494] mb-10 max-w-lg leading-relaxed">
          Inquire today regarding available grand complications and subterranean vault allocations across our global salons.
        </p>
        <a
          href="#inquire"
          className="px-8 py-4 rounded-full border border-[#d4b06a] text-[#d4b06a] text-xs font-mono tracking-widest hover:bg-[#d4b06a] hover:text-[#0b0d10] transition-all flex items-center gap-2"
        >
          APPLY FOR PATRONAGE <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
