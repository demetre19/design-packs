import React from 'react';

export function Hero2() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-start">
          <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase mb-4">PRECISION HOROLOGY // 02</span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#ece8e1] tracking-wide mb-6 leading-tight">
            Engineered for the Generations
          </h1>
          <p className="font-sans text-[#7a8494] text-sm leading-relaxed mb-8 max-w-lg">
            Every Aetheris timekeeper is hand-assembled by master watchmakers in our alpine atelier, combining centuries-old artisanal finishing with aerospace-grade metallurgical stability.
          </p>
          <button className="px-6 py-3 rounded-full border border-[#d4b06a] text-[#d4b06a] text-xs font-mono tracking-widest hover:bg-[#d4b06a] hover:text-[#0b0d10] transition-all">
            DISCOVER THE MOVEMENT
          </button>
        </div>

        {/* Spec panel right (hairline rows of stats in mono) */}
        <div className="lg:col-span-5 bg-[#13171c] border border-white/10 p-6 flex flex-col gap-4">
          <div className="flex justify-between items-center pb-3 border-b border-white/10 text-xs font-mono">
            <span className="text-[#7a8494]">CALIBER REF</span>
            <span className="text-[#ece8e1]">ATH-9901 MANUFACTURE</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-white/10 text-xs font-mono">
            <span className="text-[#7a8494]">POWER RESERVE</span>
            <span className="text-[#ece8e1]">120 HOURS (TWIN BARREL)</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-white/10 text-xs font-mono">
            <span className="text-[#7a8494]">CASE MATERIAL</span>
            <span className="text-[#ece8e1]">GRADE 5 TITANIUM / 18K GOLD</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-white/10 text-xs font-mono">
            <span className="text-[#7a8494]">OSCILLATION</span>
            <span className="text-[#ece8e1]">21,600 VPH (3 HZ)</span>
          </div>
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-[#7a8494]">WATER RESISTANCE</span>
            <span className="text-[#ece8e1]">300 METERS / 30 ATM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
