import React from 'react';

export function FeatureGrid3() {
  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">PROGRAMMA STAGIONALE // PUZZLE CELLS</h2>
        <span className="font-mono-num text-xs uppercase">MILANO // ROMA</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {/* Cell 1 */}
        <div className="border border-white p-4 flex flex-col justify-between bg-white text-black">
          <span className="font-mono-num text-[10px] uppercase border-b border-black pb-1">BLOCCO A // APRILE</span>
          <div className="py-6">
            <h3 className="font-display text-5xl tracking-tighter leading-none mb-2">ATTO PRIMO</h3>
            <p className="font-mono-num text-xs uppercase">"IL CORPO E LA MACCHINA"</p>
          </div>
          <div className="border-t border-black pt-2 text-[10px] font-mono-num flex justify-between">
            <span>TEATRO ROMANO</span>
            <span>28 MAR</span>
          </div>
        </div>

        {/* Cell 2 - Photo puzzle */}
        <div className="border border-white p-2 relative h-64 md:h-auto overflow-hidden">
          <img src="https://picsum.photos/seed/puzzle2/600/600" className="w-full h-full collage-img" alt="puzzle stage" />
          <div className="absolute inset-0 bg-black/30 flex items-end p-4">
            <span className="bg-white text-black font-display text-xl px-2 py-1">ANTEPRIMA ESCLUSIVA</span>
          </div>
        </div>

        {/* Cell 3 */}
        <div className="border border-white p-4 flex flex-col justify-between bg-zinc-950 text-white">
          <span className="font-mono-num text-[10px] uppercase border-b border-white pb-1">BLOCCO B // MAGGIO</span>
          <div className="py-6">
            <h3 className="font-display text-5xl tracking-tighter leading-none mb-2">ATTO SECONDO</h3>
            <p className="font-mono-num text-xs uppercase text-zinc-400">"LA NOTTE DEI MANIFESTI"</p>
          </div>
          <div className="border-t border-white pt-2 text-[10px] font-mono-num flex justify-between text-zinc-400">
            <span>SPAZIO CAOS</span>
            <span>12 MAG</span>
          </div>
        </div>
      </div>
    </section>
  );
}
