import React from 'react';

export function Media1() {
  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-black pb-4 mb-8">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">PORTFOLIO PLATE // 01</h2>
          <span className="text-xs font-bold uppercase tracking-widest border border-black px-2 py-1">MEDIA 01</span>
        </div>
        <div className="border border-black p-2 bg-neutral-100">
          <div className="aspect-[16/9] border border-black overflow-hidden mb-2 bg-neutral-300">
            <img 
              src="https://picsum.photos/seed/mediaplate1/1200/675" 
              alt="Portfolio Plate" 
              className="w-full h-full object-cover grayscale contrast-125"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-2 text-[10px] uppercase tracking-widest border-t border-black font-bold">
            <span>PLATE 01.4 // SERPENTINE PAVILION WAYFINDING</span>
            <span>CLIENT: SERPENTINE GALLERY, LONDON</span>
            <span>2024</span>
          </div>
        </div>
      </div>
    </section>
  );
}
