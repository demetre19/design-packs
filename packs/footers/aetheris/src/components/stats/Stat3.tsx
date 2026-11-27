import React from 'react';

export function Stat3() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-4xl mx-auto bg-[#13171c] border-2 border-white/20 p-10 relative">
        <div className="absolute inset-2 border border-[#d4b06a]/30 pointer-events-none" />

        <div className="text-center mb-12 relative z-10">
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#d4b06a] uppercase block mb-2">DOUBLE-HAIRLINE PANEL</span>
          <h2 className="font-serif text-3xl text-[#ece8e1]">Quantitative Assurance</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
          <div>
            <span className="font-serif text-3xl text-[#ece8e1] block mb-1">0.2s</span>
            <span className="text-[10px] font-mono text-[#7a8494]">VARIANCE</span>
          </div>
          <div>
            <span className="font-serif text-3xl text-[#ece8e1] block mb-1">120h</span>
            <span className="text-[10px] font-mono text-[#7a8494]">RESERVE</span>
          </div>
          <div>
            <span className="font-serif text-3xl text-[#ece8e1] block mb-1">300m</span>
            <span className="text-[10px] font-mono text-[#7a8494]">WATERPROOF</span>
          </div>
        </div>
      </div>
    </section>
  );
}
