import React from 'react';

export function FeatureGrid4() {
  return (
    <section className="w-full border-b border-black py-16 px-4 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono border-b border-black pb-2 mb-12">
          <span>ASYMMETRIC LOOKBOOK</span>
          <span>PLATES 01 — 03</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 border border-black p-2 bg-black">
            <img src="https://picsum.photos/seed/asym1/900/500.webp" alt="Lookbook wide" className="w-full h-80 md:h-[420px] object-cover grayscale" />
            <div className="bg-white text-black p-3 mt-2 flex justify-between items-center text-xs font-mono uppercase">
              <span>Plate 01 // Double-faced Cashmere Overcoat</span>
              <span>Look 01</span>
            </div>
          </div>
          <div className="md:col-span-4 border border-black p-2 bg-black flex flex-col justify-between">
            <img src="https://picsum.photos/seed/asym2/400/500.webp" alt="Lookbook tall" className="w-full h-64 md:h-[340px] object-cover grayscale" />
            <div className="bg-white text-black p-3 mt-2 flex justify-between items-center text-xs font-mono uppercase">
              <span>Plate 02</span>
              <span>Look 02</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
