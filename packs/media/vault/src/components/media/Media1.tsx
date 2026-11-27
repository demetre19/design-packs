import React from 'react';

export function Media1() {
  return (
    <section className="w-full border-b border-black py-16 px-4 bg-white text-black">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono border-b border-black pb-2 mb-6">
          <span>LOOKBOOK PLATE // 01</span>
          <span>MARSEILLE SERIES</span>
        </div>
        <div className="border border-black p-2 bg-black">
          <img src="https://picsum.photos/seed/media1/900/600.webp" alt="Lookbook plate" className="w-full h-96 object-cover grayscale contrast-125" />
          <div className="bg-white text-black p-4 mt-2 flex flex-col md:flex-row justify-between items-start md:items-center text-xs font-mono uppercase gap-2">
            <div>
              <strong>Plate 01 — Wool Overcoat</strong>
              <span className="text-zinc-500 block text-[10px]">Model wears Size 02 // Height 188cm</span>
            </div>
            <span className="border border-black px-3 py-1 text-[10px]">In Stock</span>
          </div>
        </div>
      </div>
    </section>
  );
}
