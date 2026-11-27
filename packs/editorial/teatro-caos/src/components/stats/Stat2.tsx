import React from 'react';

export function Stat2() {
  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">STRIP STATISTICA // COLLAGE</h2>
        <span className="font-mono-num text-xs uppercase">DATI DI RETE</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 border border-white divide-y sm:divide-y-0 sm:divide-x divide-white">
        <div className="p-6 text-center bg-white text-black">
          <span className="font-mono-num text-[10px] uppercase font-bold">REPLICHE TOTALI</span>
          <div className="font-display text-7xl tracking-tighter my-2">124</div>
          <span className="font-mono-num text-[10px] uppercase">MILANO & ROMA</span>
        </div>
        <div className="p-6 text-center bg-zinc-950 text-white">
          <span className="font-mono-num text-[10px] uppercase text-zinc-400">ARTISTI COINVOLTI</span>
          <div className="font-display text-7xl tracking-tighter my-2">48</div>
          <span className="font-mono-num text-[10px] uppercase text-zinc-400">PERFORMER & MUSICISTI</span>
        </div>
        <div className="p-6 text-center bg-zinc-950 text-white">
          <span className="font-mono-num text-[10px] uppercase text-zinc-400">PREMI RICEVUTI</span>
          <div className="font-display text-7xl tracking-tighter my-2">09</div>
          <span className="font-mono-num text-[10px] uppercase text-zinc-400">CRITICA NAZIONALE</span>
        </div>
      </div>
    </section>
  );
}
