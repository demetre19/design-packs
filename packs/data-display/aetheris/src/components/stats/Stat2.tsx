import React from 'react';

export function Stat2() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase block mb-3">TICK STRIP METRICS</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1]">Precision Instrument Readout</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#13171c] border border-white/10 p-8 flex flex-col justify-between relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#d4b06a]" />
            <span className="text-[10px] font-mono text-[#d4b06a] block mb-2">TICK 01 // ACCURACY</span>
            <div className="font-serif text-4xl text-[#ece8e1] mb-2">99.98%</div>
            <p className="font-sans text-xs text-[#7a8494]">Chronometric precision across all active calibers.</p>
          </div>

          <div className="bg-[#13171c] border border-white/10 p-8 flex flex-col justify-between relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#d4b06a]" />
            <span className="text-[10px] font-mono text-[#d4b06a] block mb-2">TICK 02 // SECURITY</span>
            <div className="font-serif text-4xl text-[#ece8e1] mb-2">100%</div>
            <p className="font-sans text-xs text-[#7a8494]">Zero physical breach record across all global vaults.</p>
          </div>

          <div className="bg-[#13171c] border border-white/10 p-8 flex flex-col justify-between relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#d4b06a]" />
            <span className="text-[10px] font-mono text-[#d4b06a] block mb-2">TICK 03 // HERITAGE</span>
            <div className="font-serif text-4xl text-[#ece8e1] mb-2">MMXXIV</div>
            <p className="font-sans text-xs text-[#7a8494]">Established dedication to timeless haute horlogerie.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
