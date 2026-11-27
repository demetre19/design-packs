import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Cta3() {
  return (
    <section className="w-full bg-white py-16 px-6 font-sans text-[#0d0e10] border-b border-[#0d0e10]/10 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#2743f0]" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">[CTA-03 // MINIMAL DISPATCH]</span>
        </div>
        <h2 className="text-3xl font-semibold tracking-tight uppercase">Initialize your cluster now.</h2>
        <a 
          href="#start" 
          className="bg-[#2743f0] text-white px-8 py-3.5 font-mono text-xs uppercase tracking-widest hover:bg-[#1d32c4] transition-colors flex items-center gap-2 rounded-[2px]"
        >
          <span>Request Access Key</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
