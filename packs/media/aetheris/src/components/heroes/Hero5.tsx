import React from 'react';

export function Hero5() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        <div className="lg:col-span-6 flex flex-col items-start">
          <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase mb-4">BESPOKE COMMISSIONS // 05</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#ece8e1] tracking-wide mb-6 leading-tight">
            Your Vision, Executed in Solid Gold & Titanium
          </h1>
          <p className="font-sans text-[#7a8494] text-sm leading-relaxed mb-8">
            Collaborate directly with our master artisans in Geneva to create a one-of-a-kind horological masterpiece tailored to your lineage and personal aesthetic.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-full border border-[#d4b06a] text-[#d4b06a] text-xs font-mono tracking-widest hover:bg-[#d4b06a] hover:text-[#0b0d10] transition-all">
              START COMMISSION
            </button>
          </div>
        </div>

        {/* Tall graded image right */}
        <div className="lg:col-span-6 h-[420px] bg-[#13171c] border border-white/10 relative p-6 flex flex-col justify-end">
          <div className="absolute top-3 right-3 text-[10px] font-mono text-[#7a8494]">ATELIER M-04</div>
          <div>
            <span className="text-[#d4b06a] text-xs font-mono tracking-widest uppercase block mb-1">HAND ENGRAVING</span>
            <h3 className="font-serif text-2xl text-[#ece8e1]">Guilloché Masterclass</h3>
          </div>
        </div>
      </div>

      {/* Thin stat strip bottom */}
      <div className="max-w-6xl mx-auto border-t border-white/10 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <span className="font-serif text-2xl text-[#ece8e1] block mb-1">04</span>
          <span className="text-[10px] font-mono tracking-widest text-[#7a8494] uppercase">GLOBAL SALONS</span>
        </div>
        <div>
          <span className="font-serif text-2xl text-[#ece8e1] block mb-1">1,000+</span>
          <span className="text-[10px] font-mono tracking-widest text-[#7a8494] uppercase">SECURE VAULTS</span>
        </div>
        <div>
          <span className="font-serif text-2xl text-[#ece8e1] block mb-1">100%</span>
          <span className="text-[10px] font-mono tracking-widest text-[#7a8494] uppercase">INDEPENDENT</span>
        </div>
        <div>
          <span className="font-serif text-2xl text-[#ece8e1] block mb-1">MMXXIV</span>
          <span className="text-[10px] font-mono tracking-widest text-[#7a8494] uppercase">ESTABLISHMENT</span>
        </div>
      </div>
    </section>
  );
}
