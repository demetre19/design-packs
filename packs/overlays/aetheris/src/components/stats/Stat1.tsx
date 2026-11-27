import React from 'react';

export function Stat1() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
        <div className="pt-4 md:pt-0">
          <span className="font-serif text-4xl sm:text-5xl text-[#ece8e1] block mb-2">0.2s</span>
          <span className="text-[10px] font-mono tracking-widest text-[#d4b06a] uppercase">DAILY VARIANCE</span>
        </div>
        <div className="pt-4 md:pt-0">
          <span className="font-serif text-4xl sm:text-5xl text-[#ece8e1] block mb-2">1,000+</span>
          <span className="text-[10px] font-mono tracking-widest text-[#d4b06a] uppercase">SECURE VAULTS</span>
        </div>
        <div className="pt-4 md:pt-0">
          <span className="font-serif text-4xl sm:text-5xl text-[#ece8e1] block mb-2">120h</span>
          <span className="text-[10px] font-mono tracking-widest text-[#d4b06a] uppercase">POWER RESERVE</span>
        </div>
        <div className="pt-4 md:pt-0">
          <span className="font-serif text-4xl sm:text-5xl text-[#ece8e1] block mb-2">04</span>
          <span className="text-[10px] font-mono tracking-widest text-[#d4b06a] uppercase">GLOBAL SALONS</span>
        </div>
      </div>
    </section>
  );
}
