import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export function Cta1() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111] bg-white">
        <div className="p-8 md:p-16 text-center border-b border-[#111] bg-[#e8e8e6]">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#666] block mb-4">[COMMAND ACQUISITION]</span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            INITIATE ALLOCATION
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#111] text-[10px]">
          <div className="p-6 flex flex-col justify-center">
            <span className="text-[#666] block text-[8px] mb-1">STUTTGART DESK STATUS</span>
            <span className="font-bold text-sm">CHASSIS SLOTS 01-04 CURRENTLY OPEN</span>
          </div>
          <div className="p-6 bg-[#111] text-[#e8e8e6] flex items-center justify-between">
            <span className="font-bold">SECURE ALLOCATION NOW</span>
            <button 
              onClick={() => alert('Opening secure allocation gateway...')}
              className="px-6 py-3 bg-[#e8e8e6] text-[#111111] font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors cursor-pointer flex items-center space-x-1"
            >
              <span>EXECUTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
