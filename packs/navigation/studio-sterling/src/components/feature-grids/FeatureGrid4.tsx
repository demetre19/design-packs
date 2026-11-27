import React from 'react';

export function FeatureGrid4() {
  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-black pb-4 mb-8">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">ASYMMETRIC MIXED ARCHIVE GRID</h2>
          <span className="text-xs font-bold uppercase tracking-widest border border-black px-2 py-1">GRID 04</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-7 border border-black p-4 bg-black text-white flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 block mb-2">PLATE A // FEATURED MONOGRAPH</span>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">TYPOGRAPHY OF THE VOID</h3>
              <p className="text-xs uppercase tracking-wider leading-relaxed text-neutral-300">
                A 320-page comprehensive study of negative space in Swiss architectural publishing, edited and designed by Marcus Sterling. Published by Lars Müller Publishers.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white text-xs uppercase tracking-widest flex justify-between">
              <span>EDITION: 2,500 COPIES</span>
              <span>ISBN 978-0-300</span>
            </div>
          </div>
          <div className="md:col-span-5 border border-black p-2 bg-neutral-100 flex flex-col">
            <div className="aspect-[4/3] border border-black overflow-hidden mb-2">
              <img 
                src="https://picsum.photos/seed/gridphoto1/600/450" 
                alt="Studio Exhibit" 
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
            <div className="p-2">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-1">EXHIBITION DESIGN</div>
              <p className="text-[11px] uppercase tracking-wider text-neutral-700">Tate Modern retrospective wayfinding system, 2024.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
