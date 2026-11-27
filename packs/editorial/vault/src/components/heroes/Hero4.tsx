import React from 'react';

export function Hero4() {
  return (
    <section className="w-full bg-white text-black border-b border-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono border-b border-black pb-2 mb-10">
          <span>SPREAD 04 // EDITORIAL</span>
          <span>CURATED BY VAULT STUDIO</span>
          <span>PARIS Q3</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight font-serif-editorial leading-none">
              THE ANATOMY<br />OF TEXTURE<span className="text-zinc-400">*</span>
            </h1>
          </div>
          <div className="flex items-end">
            <p className="text-xs md:text-sm font-mono leading-relaxed text-zinc-800">
              When tactile elements supersede color theory, garments become sculptural architecture. Our latest collection investigates raw edges, heavyweight Japanese canvas, and untreated calfskin.
            </p>
          </div>
        </div>
        <div className="border border-black p-2 bg-black">
          <img src="https://picsum.photos/seed/vaultspread/1200/500.webp" alt="Editorial spread" className="w-full h-96 object-cover grayscale contrast-125" />
          <div className="bg-white text-black p-4 mt-2 flex justify-between items-center text-xs font-mono uppercase">
            <span>Plate 09 — Full Studio Installation</span>
            <span>Limited Edition of 500 Copies</span>
          </div>
        </div>
      </div>
    </section>
  );
}
