import React from 'react';

export function Media2() {
  return (
    <section className="w-full border-b border-black py-16 px-4 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono border-b border-black pb-2 mb-12">
          <span>EDITORIAL GALLERY // MIXED RATIO</span>
          <span>STUDIO ARCHIVES</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-black p-2 bg-black">
            <img src="https://picsum.photos/seed/medgal1/400/600.webp" alt="Gallery 1" className="w-full h-80 object-cover grayscale" />
            <div className="bg-white text-black p-2 mt-2 text-[10px] font-mono uppercase">Plate 01 — Tall Portrait</div>
          </div>
          <div className="border border-black p-2 bg-black md:-mt-8">
            <img src="https://picsum.photos/seed/medgal2/400/400.webp" alt="Gallery 2" className="w-full h-80 object-cover grayscale" />
            <div className="bg-white text-black p-2 mt-2 text-[10px] font-mono uppercase">Plate 02 — Square Detail</div>
          </div>
          <div className="border border-black p-2 bg-black">
            <img src="https://picsum.photos/seed/medgal3/400/600.webp" alt="Gallery 3" className="w-full h-80 object-cover grayscale" />
            <div className="bg-white text-black p-2 mt-2 text-[10px] font-mono uppercase">Plate 03 — Silhouette Study</div>
          </div>
        </div>
      </div>
    </section>
  );
}
