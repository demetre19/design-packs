import React from 'react';

export function Media2() {
  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-black pb-4 mb-8">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">ASYMMETRIC GALLERY GRID</h2>
          <span className="text-xs font-bold uppercase tracking-widest border border-black px-2 py-1">MEDIA 02</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 border border-black p-2 bg-neutral-100">
            <div className="aspect-[16/10] border border-black overflow-hidden mb-2">
              <img src="https://picsum.photos/seed/gallery1/800/500" alt="Gallery 1" className="w-full h-full object-cover grayscale contrast-125" />
            </div>
            <div className="text-[10px] uppercase tracking-widest flex justify-between pt-1">
              <span>FIG 01 // KUNSTHALLE ZURICH INSTALLATION</span>
              <span>2025</span>
            </div>
          </div>
          <div className="md:col-span-4 border border-black p-2 bg-neutral-100 flex flex-col justify-between">
            <div className="aspect-square border border-black overflow-hidden mb-2">
              <img src="https://picsum.photos/seed/gallery2/400/400" alt="Gallery 2" className="w-full h-full object-cover grayscale contrast-125" />
            </div>
            <div className="text-[10px] uppercase tracking-widest pt-1">
              <span>FIG 02 // TYPOGRAPHIC SPECIMEN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
