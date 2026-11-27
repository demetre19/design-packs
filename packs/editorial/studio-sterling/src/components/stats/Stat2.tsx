import React from 'react';

export function Stat2() {
  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-black pb-4 mb-8">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">ALTERNATING STAT CELLS</h2>
          <span className="text-xs font-bold uppercase tracking-widest border border-black px-2 py-1">STAT 02</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 border border-black">
          <div className="p-8 bg-black text-white border-b md:border-b-0 md:border-r border-white/40 flex flex-col justify-between">
            <span className="text-[10px] uppercase tracking-widest text-neutral-400">CELL 01 // AWARDS</span>
            <div className="py-6">
              <div className="text-6xl font-black tracking-tighter mb-2">14</div>
              <div className="text-xs uppercase tracking-widest text-neutral-300">International Design Awards</div>
            </div>
          </div>
          <div className="p-8 bg-white text-black border-b md:border-b-0 md:border-r border-black flex flex-col justify-between">
            <span className="text-[10px] uppercase tracking-widest text-neutral-500">CELL 02 // VOLUMES</span>
            <div className="py-6">
              <div className="text-6xl font-black tracking-tighter mb-2">34</div>
              <div className="text-xs uppercase tracking-widest text-neutral-700">Hardcover Monographs Published</div>
            </div>
          </div>
          <div className="p-8 bg-black text-white flex flex-col justify-between">
            <span className="text-[10px] uppercase tracking-widest text-neutral-400">CELL 03 // EXHIBITIONS</span>
            <div className="py-6">
              <div className="text-6xl font-black tracking-tighter mb-2">18</div>
              <div className="text-xs uppercase tracking-widest text-neutral-300">Museum Wayfinding Systems</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
