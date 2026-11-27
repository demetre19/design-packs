import React from 'react';

export function FeatureGrid4() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase block mb-3">GRID DIVISION</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1]">Precision Quadrants</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-white/10 bg-[#13171c]">
          <div className="p-8 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#d4b06a] block mb-2">QUADRANT 01</span>
              <h3 className="font-serif text-xl text-[#ece8e1] mb-3">Grand Complications</h3>
              <p className="font-sans text-xs text-[#7a8494] leading-relaxed">Tourbillons, perpetual calendars, equation of time, and celestial charts hand-crafted to absolute precision.</p>
            </div>
            <span className="mt-6 text-[10px] font-mono text-[#ece8e1]">DISCOVER →</span>
          </div>

          <div className="p-8 border-b md:border-b-0 border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#d4b06a] block mb-2">QUADRANT 02</span>
              <h3 className="font-serif text-xl text-[#ece8e1] mb-3">Subterranean Vaults</h3>
              <p className="font-sans text-xs text-[#7a8494] leading-relaxed">Deep-earth strongrooms protected by biometric multi-sig security and absolute atmospheric isolation.</p>
            </div>
            <span className="mt-6 text-[10px] font-mono text-[#ece8e1]">EXPLORE VAULTS →</span>
          </div>

          <div className="p-8 border-r border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#d4b06a] block mb-2">QUADRANT 03</span>
              <h3 className="font-serif text-xl text-[#ece8e1] mb-3">Bespoke Commissions</h3>
              <p className="font-sans text-xs text-[#7a8494] leading-relaxed">Collaborate directly with Geneva master watchmakers to build a singular timepiece tailored to your lineage.</p>
            </div>
            <span className="mt-6 text-[10px] font-mono text-[#ece8e1]">COMMISSION →</span>
          </div>

          <div className="p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#d4b06a] block mb-2">QUADRANT 04</span>
              <h3 className="font-serif text-xl text-[#ece8e1] mb-3">Private Salons</h3>
              <p className="font-sans text-xs text-[#7a8494] leading-relaxed">Exclusive membership salons in London, Geneva, Tokyo, and Zurich for private viewings and tastings.</p>
            </div>
            <span className="mt-6 text-[10px] font-mono text-[#ece8e1]">BOOK SALON →</span>
          </div>
        </div>
      </div>
    </section>
  );
}
