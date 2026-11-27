import React from 'react';

export function Media2() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase block mb-2">PHOTO COLLAGE</span>
          <h2 className="font-serif text-3xl text-[#ece8e1]">Atelier & Vault Gutters</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-80 bg-[#13171c] border border-white/10 p-6 flex flex-col justify-end">
            <span className="text-[10px] font-mono text-[#d4b06a] block mb-1">01 / ENGRAVING</span>
            <h3 className="font-serif text-lg text-[#ece8e1]">Rose Engine Turning</h3>
          </div>
          <div className="h-80 bg-[#13171c] border border-white/10 p-6 flex flex-col justify-end">
            <span className="text-[10px] font-mono text-[#d4b06a] block mb-1">02 / ESCAPEMENT</span>
            <h3 className="font-serif text-lg text-[#ece8e1]">Tourbillon Carriage</h3>
          </div>
          <div className="h-80 bg-[#13171c] border border-white/10 p-6 flex flex-col justify-end">
            <span className="text-[10px] font-mono text-[#d4b06a] block mb-1">03 / STRONGROOM</span>
            <h3 className="font-serif text-lg text-[#ece8e1]">Subterranean Vault Door</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
