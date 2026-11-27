import React from 'react';
import { Ticket } from 'lucide-react';

export function Cta3() {
  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4 flex">
      <div className="w-12 bg-white text-black flex items-center justify-center border border-black py-4 select-none mr-2">
        <span className="font-display text-xs tracking-widest uppercase whitespace-nowrap [writing-mode:vertical-lr] rotate-180">
          CALL TO ACTION // 2026
        </span>
      </div>
      <div className="flex-1 border border-white p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-6 bg-zinc-950">
        <div>
          <span className="font-mono-num text-[10px] text-zinc-400 uppercase">PREMIÈRE STAGIONALE</span>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tighter mt-1">
            PRENOTA IL TUO POSTO IN SALA
          </h2>
          <p className="font-mono-num text-xs uppercase text-zinc-300 mt-2">
            ULTIMI POSTI DISPONIBILI PER LA PRIMA DI MARZO.
          </p>
        </div>
        <button className="bg-white text-black font-display px-8 py-3 text-sm hover:bg-zinc-200 flex items-center gap-2 flex-shrink-0">
          <Ticket className="w-4 h-4" /> PRENOTA ORA
        </button>
      </div>
    </section>
  );
}
